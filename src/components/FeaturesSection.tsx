import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '⏱️',
      title: 'On-Time Arrival Guarantee',
      desc: 'GPS-monitored fleet dispatched from Peelamedu, Gandhipuram & Saravanampatti ensuring maximum 15-minute doorstep pickup.'
    },
    {
      icon: '🏷️',
      title: 'Fixed Honest Tariff',
      desc: 'Zero hidden driver bhatta surprises, no nighttime extortion charges, and no surge meter during heavy rains or traffic jams.'
    },
    {
      icon: '🛡️',
      title: '24/7 Live GPS Security',
      desc: 'Centralized trip tracking with emergency SOS assistance, background-verified chauffeurs, and family-safe late night rides.'
    },
    {
      icon: '🧼',
      title: 'Sanitised Comfort Cabs',
      desc: 'Spotlessly clean interiors, factory-chilled air conditioning, ample boot space for luggage, and smooth highway suspensions.'
    }
  ];

  return (
    <section className="features-section" id="why-choose">
      <div className="container">
        <div className="section-title-wrap">
          <span className="badge">Why C Taxi</span>
          <h2 className="section-title">
            Coimbatore’s Most Trusted <span>Cab Service</span>
          </h2>
          <p className="section-desc">
            Experience prompt pickup, courteous drivers, and uncompromised safety every trip.
          </p>
        </div>

        <div className="features-4-grid">
          {features.map((f, idx) => (
            <div key={idx} className="feature-box">
              <div className="feature-icon" style={{ fontSize: '2.5rem', marginBottom: '12px' }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '8px' }}>
                {f.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
