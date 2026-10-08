import React, { useState } from 'react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I book a taxi with C Taxi in Coimbatore?',
      a: 'You can book instantly in less than 30 seconds: either call our 24/7 dispatch desk directly at 9089223344, chat with us on WhatsApp, or use our instant online booking form on Ctaxi.co.in. No mandatory mobile application downloads or login passwords required!'
    },
    {
      q: 'Are C Taxi outstation rates truly one-way with zero return meter charge?',
      a: 'Yes, absolutely! On all designated intercity corridors (such as Coimbatore to Ooty, Pollachi, Tiruppur, Erode, Palani, Salem, Chennai, and Bangalore), you only pay for the one-way drop distance travelled. We never bill you for empty return kilometers on eligible drop trips, saving you up to 40% compared to traditional 2-way meters.'
    },
    {
      q: 'What vehicles are available in C Taxi’s fleet?',
      a: 'We offer clean, fully air-conditioned vehicles across multiple classes: Compact Sedans (Maruti Dzire, Toyota Etios), Executive Prime Sedans (Maruti Ciaz, Hyundai Aura), 6-Seater Family SUVs (Maruti Ertiga, XL6), and Luxury Highway Chauffeurs (Toyota Innova Crysta & Hycross), plus 12–20 seater Tempo Travellers for larger tour groups.'
    },
    {
      q: 'How early should I book for a Coimbatore Airport pickup or drop?',
      a: 'For airport drops to Peelamedu (CJB Airport), we recommend booking at least 1 to 2 hours in advance. For incoming flights, you can pre-book before boarding; our chauffeurs monitor your flight schedule in real-time and will be parked at the arrival terminal with zero waiting charges for delayed flights.'
    },
    {
      q: 'Are toll fees, parking, and driver allowances included in the fare?',
      a: 'Our quoted fare covers the vehicle hire, fuel, and standard chauffeur driver bhatta. Highway toll plazas, airport parking tickets, and hill station green tax/entry permits are paid at actuals based on the highway route chosen.'
    },
    {
      q: 'Can I pay using UPI, Google Pay, or Cash directly to the driver?',
      a: 'Yes! We support all convenient payment options: Google Pay, PhonePe, Paytm, BHIM UPI, Net Banking, or direct Cash to the chauffeur at the end of the journey. Invoices and GST receipts can be provided instantly upon request.'
    },
    {
      q: 'Do you provide experienced hill drivers for Ooty, Kodaikanal, and Munnar?',
      a: 'Every single chauffeur assigned to Western Ghats mountain routes (such as the 36 hairpin bends to Ooty, Valparai ghat roads, or Munnar slopes) has a minimum of 5 years of verified hill driving experience, ensuring complete safety, comfort, and zero motion sickness.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-title-wrap">
          <span className="badge">Common Questions</span>
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-desc">
            Got questions about C Taxi booking, fares, or outstation rules in Coimbatore?
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-card ${isOpen ? 'active' : ''}`}
                onClick={() => toggle(idx)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="faq-question"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <h3 style={{ fontSize: '1.08rem', fontWeight: 750, color: 'var(--brand-dark)', margin: 0 }}>
                    {faq.q}
                  </h3>
                  <span
                    className="faq-toggle-icon"
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: isOpen ? 'var(--brand-red)' : 'var(--text-muted)',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    +
                  </span>
                </div>
                {isOpen && (
                  <div className="faq-answer" style={{ marginTop: '12px' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
