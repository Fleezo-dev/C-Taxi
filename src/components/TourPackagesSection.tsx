import React from 'react';
import { TOUR_PACKAGES_DATA } from '../data/getcabsData';

interface TourPackagesSectionProps {
  onSelectPackage: (packageKey: string) => void;
  onBookTour?: (packageKey: string) => void;
}

export const TourPackagesSection: React.FC<TourPackagesSectionProps> = ({ onSelectPackage }) => {
  const packageKeys = Object.keys(TOUR_PACKAGES_DATA);

  return (
    <section className="tour-packages-section" id="tour-packages">
      <div className="container">
        <div className="section-title-wrap">
          <span className="badge" style={{ background: 'var(--brand-yellow)', color: 'var(--brand-dark)' }}>
            Holiday & Sightseeing
          </span>
          <h2 className="section-title">
            Popular Tour Packages <span>from Coimbatore</span>
          </h2>
          <p className="section-desc">
            Handcrafted outstation tour packages with on-the-way sightseeing and veteran hill drivers. Fixed all-inclusive pricing.
          </p>
        </div>

        <div className="tour-packages-grid">
          {packageKeys.map((key) => {
            const pkg = TOUR_PACKAGES_DATA[key];
            return (
              <div key={key} className="tour-pkg-card">
                <div className="tour-pkg-img-wrap" style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <span
                    className="badge"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(17, 24, 39, 0.85)',
                      color: '#ffffff',
                      backdropFilter: 'blur(4px)',
                      fontSize: '0.75rem'
                    }}
                  >
                    {pkg.category}
                  </span>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'var(--brand-red)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontWeight: 800,
                      fontSize: '0.9rem'
                    }}
                  >
                    From {pkg.startingPrice}
                  </div>
                </div>

                <div className="tour-pkg-body" style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '8px', minHeight: '52px' }}>
                    {pkg.title}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      fontSize: '0.82rem',
                      color: '#64748b',
                      marginBottom: '16px'
                    }}
                  >
                    <div>⏱️ <strong>Duration:</strong> {pkg.duration}</div>
                    <div>🛣️ <strong>Distance:</strong> {pkg.distance}</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPackage(key)}
                    className="btn btn-red"
                    style={{
                      width: '100%',
                      padding: '10px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    View Full Itinerary & Book →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
