import React from 'react';

export const CoimbatoreInfoSection: React.FC = () => {
  const localities = [
    'Gandhipuram',
    'RS Puram',
    'Peelamedu',
    'Saravanampatti',
    'Coimbatore Airport (CJB)',
    'Coimbatore Junction',
    'Singanallur',
    'Ukkadam',
    'Kuniyamuthur',
    'Thudiyalur',
    'Kovaipudur',
    'Vadavalli',
    'Saibaba Colony',
    'Ganapathy',
    'Ramanathapuram',
    'Sulur',
    'Karumathampatti',
    'Malumichampatti',
    'Kinathukadavu',
    'Mettupalayam'
  ];

  return (
    <section className="coimbatore-info-section" id="coimbatore-info">
      <div className="container">
        <div className="info-grid-2">
          <div className="info-content">
            <span className="badge" style={{ background: 'var(--brand-yellow)', color: 'var(--brand-dark)' }}>
              Local Taxi Coverage
            </span>
            <h2>
              C Taxi Across <span>All Coimbatore Areas</span>
            </h2>
            <p>
              Whether you need a quick cab in Gandhipuram, RS Puram, Peelamedu, Saravanampatti, or an urgent drop to CJB Airport, C Taxi provides rapid dispatch within 5 to 15 minutes.
            </p>
            <p style={{ marginTop: '12px' }}>
              Our 100% local Kovai chauffeurs know every shortcut, bypass route, and peak-hour bypass across Avinashi Road, Trichy Road, Sathy Road, and Palakkad Road, ensuring you reach your destination smoothly and comfortably.
            </p>

            <div className="areas-pills" style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {localities.map((loc, idx) => (
                <span key={idx} className="category-chip" style={{ fontSize: '0.85rem' }}>
                  📍 {loc}
                </span>
              ))}
            </div>

            <div style={{ marginTop: '28px', display: 'flex', gap: '14px', alignItems: 'center' }}>
              <a href="tel:+919089223344" className="btn btn-red" style={{ textDecoration: 'none', fontWeight: 700 }}>
                📞 Call 9089223344
              </a>
              <a
                href="#booking-form-section"
                className="btn btn-yellow"
                style={{ textDecoration: 'none', fontWeight: 700, color: 'var(--brand-dark)' }}
              >
                🚖 Calculate Fare Online
              </a>
            </div>
          </div>

          <div className="info-image-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/assets/images/coimbatore-local-cab.svg"
              alt="C Taxi Service Coimbatore Local City Cabs"
              style={{
                width: '100%',
                maxHeight: '440px',
                objectFit: 'cover',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)'
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
