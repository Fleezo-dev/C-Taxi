import React from 'react';

export const CallBanner: React.FC = () => {
  return (
    <section className="call-banner">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', marginBottom: '12px' }}>
          Need an Instant Cab Right Now?
        </h2>
        <p style={{ color: '#e2e8f0', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
          Our dispatch team is active 24/7 across Coimbatore. Call or WhatsApp now for a clean AC cab at your doorstep in 15 minutes.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="tel:+919089223344"
            className="btn btn-yellow"
            style={{
              padding: '14px 28px',
              fontSize: '1.1rem',
              fontWeight: 800,
              textDecoration: 'none',
              color: 'var(--brand-dark)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            📞 Call Now: 9089223344
          </a>
          <a
            href="https://wa.me/919089223344?text=Hello%20C%20Taxi%2C%20I%20need%20a%20cab%20urgently%20in%20Coimbatore"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: '#25D366',
              color: '#ffffff',
              padding: '14px 28px',
              fontSize: '1.1rem',
              fontWeight: 800,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            💬 WhatsApp 9089223344
          </a>
        </div>
      </div>
    </section>
  );
};
