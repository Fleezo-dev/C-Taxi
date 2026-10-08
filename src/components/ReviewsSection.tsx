import React from 'react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Suresh Kumar',
      route: 'Gandhipuram to Ooty (Round Trip)',
      rating: 5,
      date: 'Verified Rider • September 2026',
      review:
        'Booked an early morning cab for Ooty hairpin curves. Driver Mani arrived 10 minutes early at Gandhipuram. Smooth driving through 36 hairpins without any motion sickness. Completely transparent rate with no hidden bhatta extra.'
    },
    {
      name: 'Priya Loganathan',
      route: 'RS Puram to Coimbatore Airport CJB',
      rating: 5,
      date: 'Verified Rider • October 2026',
      review:
        'I had a 5:30 AM flight and had faced multiple driver cancellations on regular apps earlier. C Taxi confirmed instantly via WhatsApp and driver arrived on time. Spotless AC Sedan and fair fixed fare. Highly recommended for airport transfers!'
    },
    {
      name: 'Ramesh V',
      route: 'Coimbatore to Valparai Tea Hills',
      rating: 5,
      date: 'Verified Rider • August 2026',
      review:
        'Took their Innova Crysta for a 2-day family trip to Valparai and Aliyar Dam. Chauffeur had exceptional knowledge of mountain roads and wildlife spotting points. Clean cab, courteous service, and honest billing.'
    }
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="section-title-wrap">
          <span className="badge">Passenger Reviews</span>
          <h2 className="section-title">
            What <span>Coimbatore Riders</span> Say
          </h2>
          <p className="section-desc">
            Real feedback from daily commuters, families, and business travelers.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, idx) => (
            <div key={idx} className="review-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ color: '#ffb703', fontSize: '1.2rem', letterSpacing: '2px' }}>
                  {'★'.repeat(r.rating)}
                </div>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{r.date}</span>
              </div>
              <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '16px' }}>
                "{r.review}"
              </p>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
                <div style={{ fontWeight: 800, color: 'var(--brand-dark)' }}>{r.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--brand-red)', fontWeight: 600 }}>{r.route}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
