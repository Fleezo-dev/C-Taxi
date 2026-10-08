import React from 'react';

export const BottomDock: React.FC = () => {
  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('booking-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bottom-app-dock" style={{ zIndex: 90 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', padding: '10px 14px' }}>
        <a
          href="tel:+919089223344"
          className="dock-item"
          style={{
            background: 'var(--brand-red)',
            color: '#ffffff',
            borderRadius: '8px',
            padding: '10px 6px',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>📞</span>
          <span>Call 9089223344</span>
        </a>

        <a
          href="https://wa.me/919089223344?text=Hello%20C%20Taxi%2C%20I%20need%20to%20book%20a%20cab%20in%20Coimbatore"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          style={{
            background: '#25D366',
            color: '#ffffff',
            borderRadius: '8px',
            padding: '10px 6px',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>💬</span>
          <span>WhatsApp</span>
        </a>

        <a
          href="#booking-form-section"
          onClick={scrollToBooking}
          className="dock-item"
          style={{
            background: '#ffb703',
            color: 'var(--brand-dark)',
            borderRadius: '8px',
            padding: '10px 6px',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>🚖</span>
          <span>Book Ride</span>
        </a>
      </div>
    </div>
  );
};
