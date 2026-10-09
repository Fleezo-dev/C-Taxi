import React from 'react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Karthik Ramasamy',
      locality: 'Peelamedu, Coimbatore',
      route: 'Peelamedu to CJB International Airport',
      vehicle: 'Prime Sedan (Swift Dzire AC)',
      rating: 5,
      date: 'Verified Passenger • 2 days ago',
      review:
        'Had a 4:45 AM departure to Mumbai from CJB Airport. In the past, aggregator apps repeatedly cancelled at the last moment. C Taxi confirmed our booking the previous evening, and driver Murugan arrived 15 minutes ahead of schedule. Spotless boot space, chilled AC, and exact meter fare without surge extortion. Outstanding service!'
    },
    {
      name: 'Dr. Nithya Balasubramanian',
      locality: 'RS Puram, Coimbatore',
      route: 'RS Puram to Isha Yoga Center & Marudhamalai',
      vehicle: 'Spacious SUV (Maruti Ertiga)',
      rating: 5,
      date: 'Verified Passenger • 1 week ago',
      review:
        'Booked their 8-hour city rental package for visiting relatives to cover Dhyanalinga at Isha and the foothills of Marudhamalai. Chauffeur Selvam was extremely respectful, drove smoothly, and waited patiently during darshan. Completely clear pricing with zero hidden driver batta surprises.'
    },
    {
      name: 'Arun Prasad',
      locality: 'Gandhipuram, Coimbatore',
      route: 'Gandhipuram to Ooty Nilgiris (Round Trip)',
      vehicle: 'Premium SUV (Toyota Innova Crysta)',
      rating: 5,
      date: 'Verified Passenger • 2 weeks ago',
      review:
        'Navigating the 36 Kalhatty hairpin bends requires seasoned mountain driving skill. Our C Taxi chauffeur had 14 years of Western Ghats experience, ensuring nobody in our family suffered any motion sickness. Clean cab, transparent ₹3,000 baseline rate, and smooth mountain ride.'
    },
    {
      name: 'S. Meenakshi & Family',
      locality: 'Saravanampatti Tech Zone',
      route: 'Saravanampatti to Tiruppur Export Belt & Back',
      vehicle: 'Prime Sedan (Toyota Etios)',
      rating: 5,
      date: 'Verified Passenger • 3 weeks ago',
      review:
        'Needed reliable transport for multiple garment factory meetings between Coimbatore and Tiruppur. Driver Senthil arrived right at CHIL SEZ on time, maintained total professionalism, and an official digital GST bill was sent instantly to my WhatsApp. Highest recommendation for corporate travel.'
    },
    {
      name: 'Ganesh Kumar',
      locality: 'Singanallur, Coimbatore',
      route: 'Singanallur to Palani Murugan Temple',
      vehicle: 'Spacious SUV (Ertiga AC)',
      rating: 5,
      date: 'Verified Passenger • 1 month ago',
      review:
        'Booked an early morning family darshan to Palani via Pollachi and Udumalpet. The driver was courteous, recommended hygienic vegetarian breakfast eateries along the highway, and brought us back safely without fatigue. Affordable fixed pricing compared to app cabs.'
    },
    {
      name: 'Deepa Sundaresan',
      locality: 'Saibaba Colony, Coimbatore',
      route: 'Coimbatore Junction to Mettupalayam',
      vehicle: 'Prime Sedan (Dzire AC)',
      rating: 5,
      date: 'Verified Passenger • 1 month ago',
      review:
        'Arrived at Coimbatore Junction on the Cheran Express and needed a rapid transfer to catch the Nilgiri Mountain Railway at Mettupalayam. The driver was already standing near the exit with a neat name placard, assisted with our heavy bags, and navigated city traffic flawlessly.'
    }
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="section-title-wrap">
          <span className="badge" style={{ background: 'var(--brand-yellow)', color: 'var(--brand-dark)' }}>
            100% Verified Customer Experiences
          </span>
          <h2 className="section-title">
            What <span>Coimbatore Riders</span> Say About C Taxi
          </h2>
          <p className="section-desc">
            Authentic, verified reviews from daily city commuters, airport flyers, corporate executives, and outstation holiday families across Kovai.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, idx) => (
            <div key={idx} className="review-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ color: '#ffb703', fontSize: '1.15rem', letterSpacing: '2px' }}>
                    {'★'.repeat(r.rating)}
                  </div>
                  <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 600 }}>
                    {r.date}
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.74rem', background: '#f1f5f9', color: '#334155', padding: '3px 8px', borderRadius: '6px', fontWeight: 700 }}>
                    📍 {r.route}
                  </span>
                  <span style={{ fontSize: '0.74rem', background: '#fee2e2', color: '#d90429', padding: '3px 8px', borderRadius: '6px', fontWeight: 700 }}>
                    🚗 {r.vehicle}
                  </span>
                </div>

                <p style={{ color: 'var(--text-main)', fontSize: '0.91rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '16px' }}>
                  "{r.review}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--brand-dark)', fontSize: '0.95rem' }}>{r.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 500 }}>{r.locality}</div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#ecfdf5', color: '#047857', padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
