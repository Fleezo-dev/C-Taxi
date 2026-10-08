import React from 'react';

interface FooterProps {
  onOpenPage: (pageKey: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPage }) => {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-4-col">
          {/* Column 1: Brand Info */}
          <div>
            <a
              href="/"
              className="brand-logo"
              style={{ color: '#ffffff', marginBottom: '16px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--brand-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  color: '#fff'
                }}
              >
                🚖
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.5px' }}>
                C <span style={{ color: 'var(--brand-yellow)' }}>TAXI</span>
              </span>
            </a>
            <p style={{ marginTop: '14px', lineHeight: 1.7, color: '#94a3b8', fontSize: '0.9rem' }}>
              C Taxi is Coimbatore’s premier 24/7 call taxi service offering Local City Rides, Oneway Intercity Cabs, Outstation Tours, and Hourly Rental Packages with zero surge and guaranteed on-time pickup.
            </p>
            <p style={{ marginTop: '8px', color: '#cbd5e1', fontSize: '0.85rem' }}>
              Official Domain: <strong style={{ color: 'var(--brand-yellow)' }}>Ctaxi.co.in</strong>
            </p>
          </div>

          {/* Column 2: Booking Types */}
          <div className="footer-col">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
              Booking Types
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a href="#booking-form-section" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Local City Rides
                </a>
              </li>
              <li>
                <a href="#booking-form-section" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Oneway Drop Cabs
                </a>
              </li>
              <li>
                <a href="#booking-form-section" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Outstation Round Trips
                </a>
              </li>
              <li>
                <a href="#booking-form-section" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Hourly Rental Packages
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPage('tariff')}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, textAlign: 'left' }}
                >
                  Official Tariff Card
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Routes */}
          <div className="footer-col">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
              Popular Routes
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a href="#booking-form-section" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Coimbatore ➔ Ooty (₹3,500)
                </a>
              </li>
              <li>
                <a href="#booking-form-section" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Coimbatore ➔ Pollachi (₹1,600)
                </a>
              </li>
              <li>
                <a href="#booking-form-section" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Coimbatore ➔ Palani (₹3,900)
                </a>
              </li>
              <li>
                <a href="#booking-form-section" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Coimbatore ➔ Tiruppur (₹1,900)
                </a>
              </li>
              <li>
                <a href="#booking-form-section" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Coimbatore ➔ Erode (₹3,500)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact C Taxi */}
          <div className="footer-col">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
              Contact C Taxi
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#94a3b8', fontSize: '0.9rem' }}>
              <li>
                📞 Phone:{' '}
                <a href="tel:+919089223344" style={{ color: 'var(--brand-yellow)', fontWeight: 700, textDecoration: 'none' }}>
                  9089223344
                </a>
              </li>
              <li>
                💬 WhatsApp:{' '}
                <a href="https://wa.me/919089223344" target="_blank" rel="noopener noreferrer" style={{ color: '#4ade80', fontWeight: 700, textDecoration: 'none' }}>
                  9089223344
                </a>
              </li>
              <li>
                ✉️ Email:{' '}
                <a href="mailto:booking@ctaxi.co.in" style={{ color: '#e2e8f0', textDecoration: 'none' }}>
                  booking@ctaxi.co.in
                </a>
              </li>
              <li>
                📍 Address:{' '}
                <span>Main Road, Gandhipuram & Avinashi Road, Peelamedu, Coimbatore - 641004</span>
              </li>
              <li>
                🕒 Operational Hours: <strong style={{ color: '#4ade80' }}>24 Hours / 7 Days</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            marginTop: '36px',
            paddingTop: '20px',
            borderTop: '1px solid #1e293b',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.85rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} C Taxi (<strong>Ctaxi.co.in</strong>). All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button
              type="button"
              onClick={() => onOpenPage('privacy-policy')}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenPage('terms-conditions')}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}
            >
              Terms & Conditions
            </button>
            <button
              type="button"
              onClick={() => onOpenPage('cancellation-policy')}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}
            >
              Cancellation Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenPage('tariff')}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}
            >
              Tariff Card
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
