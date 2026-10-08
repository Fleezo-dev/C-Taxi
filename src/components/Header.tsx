import React, { useState } from 'react';

interface HeaderProps {
  onOpenPage: (pageKey: string) => void;
  onOpenDiscount: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPage, onOpenDiscount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="header-nav">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Brand Logo */}
          <a href="/" className="brand-logo" aria-label="C Taxi" style={{ textDecoration: 'none' }}>
            <div className="logo-svg-wrap">
              <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ctaxi_logo_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D90429" />
                    <stop offset="1" stopColor="#8D0801" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" rx="22" fill="url(#ctaxi_logo_grad)" />
                {/* Cab Roof & Body */}
                <path d="M22 62C22 58 25 55 29 55H71C75 55 78 58 78 62V68C78 70 76.5 72 74.5 72H25.5C23.5 72 22 70 22 68V62Z" fill="#FFB703" />
                <path d="M30 55L37 38C38.2 35 41 33 44.5 33H55.5C59 33 61.8 35 63 38L70 55H30Z" fill="#FFC837" />
                {/* Windshield */}
                <path d="M34 52L39.5 40C40.2 38.5 41.8 37.5 43.5 37.5H56.5C58.2 37.5 59.8 38.5 60.5 40L66 52H34Z" fill="#111827" />
                {/* Headlights */}
                <circle cx="28" cy="63" r="3.5" fill="#FFFFFF" />
                <circle cx="72" cy="63" r="3.5" fill="#FFFFFF" />
                {/* TAXI Roof Light */}
                <rect x="42" y="28" width="16" height="6" rx="2" fill="#FFFFFF" />
                <text x="50" y="32.5" fill="#D90429" fontSize="4.2" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">TAXI</text>
              </svg>
            </div>
            <div className="brand-text-wrap">
              <span className="brand-name">
                C <span style={{ color: 'var(--brand-yellow)' }}>TAXI</span>
              </span>
              <span className="brand-tagline">24/7 Call Taxi Coimbatore</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav>
            <ul className="main-menu" style={{ display: 'flex', alignItems: 'center', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
              <li>
                <a href="#booking-form-section" onClick={(e) => handleNavClick(e, '#booking-form-section')} className="active">
                  Book Ride
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPage('tour-packages')}
                  style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <a href="#blogs" onClick={(e) => handleNavClick(e, '#blogs')}>
                  Blogs
                </a>
              </li>
              <li>
                <a href="#routes" onClick={(e) => handleNavClick(e, '#routes')}>
                  Routes
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPage('tariff')}
                  style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
                >
                  Tariff Card
                </button>
              </li>
              <li>
                <a href="#why-choose" onClick={(e) => handleNavClick(e, '#why-choose')}>
                  Why Us
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Header Action Buttons */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              type="button"
              onClick={onOpenDiscount}
              className="btn btn-yellow"
              style={{ fontSize: '0.85rem', padding: '8px 14px', borderRadius: '6px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}
            >
              🎁 <span>Discount Wheel</span>
            </button>
            <a
              href="tel:+919089223344"
              className="btn btn-red call-btn-head"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              📞 <span>9089223344</span>
            </a>
            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-nav-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              style={{ display: 'none' }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--brand-red)' }}>C TAXI</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ctaxi.co.in</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li>
                <a href="#booking-form-section" onClick={(e) => handleNavClick(e, '#booking-form-section')} style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-dark)', textDecoration: 'none' }}>
                  🚖 Book a Ride
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => { onOpenPage('tour-packages'); setMobileMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-dark)', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                >
                  🏖️ Tour Packages
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => { onOpenPage('tariff'); setMobileMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-dark)', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                >
                  📑 Official Tariff Card
                </button>
              </li>
              <li>
                <a href="#routes" onClick={(e) => handleNavClick(e, '#routes')} style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-dark)', textDecoration: 'none' }}>
                  🛣️ Outstation Routes
                </a>
              </li>
              <li>
                <a href="#blogs" onClick={(e) => handleNavClick(e, '#blogs')} style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-dark)', textDecoration: 'none' }}>
                  📰 Travel Guides & Blogs
                </a>
              </li>
              <li>
                <a href="#why-choose" onClick={(e) => handleNavClick(e, '#why-choose')} style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-dark)', textDecoration: 'none' }}>
                  ⭐ Why Choose C Taxi
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-dark)', textDecoration: 'none' }}>
                  ❓ FAQ
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => { onOpenDiscount(); setMobileMenuOpen(false); }}
                  style={{ background: 'none', border: 'none', fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-red)', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                >
                  🎁 Spin & Win Ride Discount
                </button>
              </li>
            </ul>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="tel:+919089223344" className="btn btn-red" style={{ textAlign: 'center', textDecoration: 'none', fontWeight: 700 }}>
                📞 Call Now: 9089223344
              </a>
              <a href="https://wa.me/919089223344?text=Hello%20C%20Taxi%2C%20I%20would%20like%20to%20book%20a%20cab%20in%20Coimbatore" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: '#fff', textAlign: 'center', textDecoration: 'none', fontWeight: 700 }}>
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
