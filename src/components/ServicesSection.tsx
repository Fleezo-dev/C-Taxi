import React from 'react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '✈️',
      title: 'Coimbatore Airport Taxi (CJB)',
      desc: '24/7 terminal pickup and doorstep drops to Peelamedu Airport (CJB). Fixed flat pricing, flight tracking, and zero delay waiting charges.',
      badge: 'Fixed Fare From ₹250'
    },
    {
      icon: '🚆',
      title: 'Railway Station Transfers',
      desc: 'Prompt cab dispatch to Coimbatore Junction & Coimbatore North stations. Driver assistance with luggage and guaranteed on-platform meetup.',
      badge: 'Zero Surge Guarantee'
    },
    {
      icon: '⏱️',
      title: 'Hourly Local Rentals',
      desc: 'Flexible 4-hour, 8-hour, 10-hour & 12-hour city packages for shopping trips in RS Puram, temple visits, hospital runs, and business meetings.',
      badge: 'Multiple Stops Allowed'
    },
    {
      icon: '🏢',
      title: 'Corporate Fleet Travel',
      desc: 'Seamless intercity transport for business executives, delegates, and IT employees across TIDEL Park and Coimbatore industrial zones.',
      badge: 'Monthly GST Invoicing'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-title-wrap">
          <span className="badge">Services We Offer</span>
          <h2 className="section-title">
            Complete <span>Taxi Solutions</span> in Coimbatore
          </h2>
          <p className="section-desc">
            From quick local commutes to outstation holidays and airport transfers.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, idx) => (
            <div key={idx} className="service-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ fontSize: '2.5rem' }}>{s.icon}</span>
                <span className="badge" style={{ background: '#fef2f2', color: '#d90429', fontSize: '0.75rem', fontWeight: 700 }}>
                  {s.badge}
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '8px' }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
                {s.desc}
              </p>
              <a
                href="#booking-form-section"
                style={{
                  fontWeight: 700,
                  color: 'var(--brand-red)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Book This Service →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
