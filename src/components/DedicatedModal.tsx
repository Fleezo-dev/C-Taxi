import React, { useEffect } from 'react';
import { TOUR_PACKAGES_DATA, BLOG_DATA, PAGE_TEMPLATES } from '../data/getcabsData';

interface DedicatedModalProps {
  pageKey: string | null;
  packageKey: string | null;
  blogKey: string | null;
  onClose: () => void;
  onBookPackage?: (title: string, price: string) => void;
}

export const DedicatedModal: React.FC<DedicatedModalProps> = ({
  pageKey,
  packageKey,
  blogKey,
  onClose,
  onBookPackage
}) => {
  const isOpen = Boolean(pageKey || packageKey || blogKey);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  let title = 'C Taxi Page';
  let htmlContent = '';

  if (packageKey && TOUR_PACKAGES_DATA[packageKey]) {
    const pkg = TOUR_PACKAGES_DATA[packageKey];
    title = pkg.title;
    htmlContent = pkg.content;
  } else if (blogKey && BLOG_DATA[blogKey]) {
    const blog = BLOG_DATA[blogKey];
    title = blog.title;
    htmlContent = blog.content;
  } else if (pageKey && PAGE_TEMPLATES[pageKey]) {
    const page = PAGE_TEMPLATES[pageKey];
    title = page.title;
    htmlContent = page.content;
  } else if (pageKey === 'tour-packages') {
    title = 'All Tour Packages & Holiday Trips | C Taxi';
    htmlContent = `
      <div style="padding: 20px 0;">
        <h2 style="font-size:1.8rem; font-weight:900; color:#111827; margin-bottom:12px;">Explore Nilgiris & Western Ghats Packages from Coimbatore</h2>
        <p style="color:#475569; margin-bottom:24px; font-size:1rem; line-height:1.7;">
          Choose from full-day and multi-day packages to Ooty, Munnar, Kodaikanal, Yercaud, Valparai, and sacred pilgrimage destinations with experienced hill chauffeurs.
        </p>
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:20px;">
          ${Object.keys(TOUR_PACKAGES_DATA).map(k => {
            const p = TOUR_PACKAGES_DATA[k];
            return `
              <div style="background:#fff; border:1px solid #e2e8f0; border-radius:12px; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
                <img src="${p.img}" alt="${p.title}" style="width:100%; height:160px; object-fit:cover;" />
                <div style="padding:16px;">
                  <span style="font-size:0.75rem; background:#fef2f2; color:#d90429; padding:2px 8px; border-radius:4px; font-weight:700;">${p.category}</span>
                  <h3 style="font-size:1.1rem; font-weight:800; color:#111827; margin:8px 0;">${p.title}</h3>
                  <div style="font-size:0.85rem; color:#64748b; margin-bottom:12px;">${p.duration} • ${p.distance}</div>
                  <div style="font-weight:900; color:#d90429; font-size:1.1rem; margin-bottom:12px;">From ${p.startingPrice}</div>
                  <a href="tel:+919089223344" style="display:block; text-align:center; background:#d90429; color:#fff; padding:10px; border-radius:6px; font-weight:700; text-decoration:none;">Book Package: 9089223344</a>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  return (
    <div className="dedicated-page-overlay active" style={{ display: 'flex' }}>
      <div className="dedicated-page-container">
        <div className="dedicated-page-header">
          <button
            type="button"
            className="page-back-btn"
            onClick={onClose}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>←</span> Back to Main Site
          </button>
          <div className="dedicated-page-title" style={{ fontSize: '1.1rem', fontWeight: 800 }}>
            {title}
          </div>
          <a
            href="tel:+919089223344"
            className="btn btn-red"
            style={{ textDecoration: 'none', padding: '8px 16px', fontSize: '0.9rem', fontWeight: 700 }}
          >
            📞 9089223344
          </a>
        </div>

        <div className="dedicated-page-body" style={{ padding: '24px', overflowY: 'auto', maxHeight: 'calc(90vh - 80px)' }}>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

          {packageKey && onBookPackage && (
            <div style={{ marginTop: '30px', textAlign: 'center', background: '#fffbeb', padding: '24px', borderRadius: '12px', border: '1px solid #fef3c7' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#111827', marginBottom: '8px' }}>
                Ready to Experience This Tour?
              </h3>
              <p style={{ color: '#475569', marginBottom: '16px', fontSize: '0.95rem' }}>
                Book directly online or confirm instantly via WhatsApp with zero advance deposit.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/919089223344?text=${encodeURIComponent(`Hello C Taxi,\nI would like to book the tour package: ${title}\nDomain: Ctaxi.co.in`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ background: '#25D366', color: '#fff', padding: '12px 24px', fontWeight: 800, textDecoration: 'none', borderRadius: '8px' }}
                >
                  💬 Book on WhatsApp: 9089223344
                </a>
                <a
                  href="tel:+919089223344"
                  className="btn btn-red"
                  style={{ padding: '12px 24px', fontWeight: 800, textDecoration: 'none', borderRadius: '8px' }}
                >
                  📞 Call Dispatch: 9089223344
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
