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
            background: 'linear-gradient(135deg, #ef233c 0%, #d90429 60%, #b70020 100%)',
            color: '#ffffff',
            borderRadius: '12px',
            padding: '10px 6px',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '0.82rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            boxShadow: '0 4px 12px rgba(217, 4, 41, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>📞</span>
          <span>Call Desk</span>
        </a>

        <a
          href="https://wa.me/919089223344?text=Hello%20C%20Taxi%2C%20I%20need%20to%20book%20a%20cab%20in%20Coimbatore"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          style={{
            background: 'linear-gradient(135deg, #2fe675 0%, #25D366 60%, #1ea952 100%)',
            color: '#ffffff',
            borderRadius: '12px',
            padding: '10px 6px',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '0.82rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
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
            background: 'linear-gradient(135deg, #fbbf24 0%, #ffb703 60%, #f59e0b 100%)',
            color: '#0f172a',
            borderRadius: '12px',
            padding: '10px 6px',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '0.82rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            boxShadow: '0 4px 12px rgba(255, 183, 3, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>🚖</span>
          <span>Book Ride</span>
        </a>
      </div>
    </div>
  );
};
