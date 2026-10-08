import React from 'react';

export const QuickTrustStrip: React.FC = () => {
  return (
    <section className="quick-trust-strip">
      <div className="container">
        <div className="trust-strip-grid">
          <div className="trust-item">
            <span>📞</span>
            <span>
              Instant Booking Call: <strong>9089223344</strong>
            </span>
          </div>
          <div className="trust-item">
            <span>🚖</span>
            <span>500+ Sanitized Cabs across Coimbatore</span>
          </div>
          <div className="trust-item">
            <span>🏷️</span>
            <span>Zero Meter Tampering & Fixed Rates</span>
          </div>
          <div className="trust-item">
            <span>👨‍✈️</span>
            <span>Verified Local Professional Drivers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
