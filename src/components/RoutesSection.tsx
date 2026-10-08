import React from 'react';

interface RoutesSectionProps {
  onOpenTariff: () => void;
  onSelectRoute?: (route: string) => void;
}

export const RoutesSection: React.FC<RoutesSectionProps> = ({ onOpenTariff }) => {
  const routes = [
    {
      from: 'Coimbatore',
      to: 'Ooty Bus Stand',
      distance: '87 KM',
      tag: 'Nilgiris Hill Route',
      price: '₹3,500'
    },
    {
      from: 'Coimbatore',
      to: 'Pollachi',
      distance: '43 KM',
      tag: 'Express Corridor',
      price: '₹1,600'
    },
    {
      from: 'Coimbatore',
      to: 'Palani',
      distance: '110 KM',
      tag: 'Temple Pilgrimage',
      price: '₹3,900'
    },
    {
      from: 'Coimbatore',
      to: 'Tiruppur',
      distance: '55 KM',
      tag: 'Textile Hub Corridor',
      price: '₹1,900'
    },
    {
      from: 'Coimbatore',
      to: 'Erode',
      distance: '100 KM',
      tag: 'Highway Express',
      price: '₹3,500'
    },
    {
      from: 'Coimbatore',
      to: 'Sathyamangalam',
      distance: '70 KM',
      tag: 'Bannari Amman Highway',
      price: '₹2,500'
    }
  ];

  return (
    <section className="routes-section" id="routes">
      <div className="container">
        <div className="section-title-wrap">
          <span className="badge">Popular Intercity Routes</span>
          <h2 className="section-title">
            Coimbatore <span>Oneway & Outstation Cabs</span>
          </h2>
          <p className="section-desc">
            Fixed transparent Oneway drop rates (Effective 2026) for Mini & Sedan cabs from Gandhipuram, Ukkadam, Railway Station & Airport.
          </p>
        </div>

        <div className="routes-grid">
          {routes.map((r, idx) => (
            <div key={idx} className="route-card">
              <div className="route-details">
                <h3>
                  {r.from} ➔ {r.to}
                </h3>
                <p>
                  {r.distance} • {r.tag}
                </p>
              </div>
              <div className="route-fare">
                <div className="price">{r.price}</div>
                <a
                  href="#booking-form-section"
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--brand-red)',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  Book Now →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            type="button"
            onClick={onOpenTariff}
            className="btn btn-red"
            style={{ padding: '12px 28px', fontSize: '1rem', fontWeight: 700 }}
          >
            📑 View Full Tariff Card & Intercity Rates
          </button>
        </div>
      </div>
    </section>
  );
};
