import React, { useState } from 'react';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscountModal: React.FC<DiscountModalProps> = ({ isOpen, onClose }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [couponResult, setCouponResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setCouponResult(null);

    // Random spin between 1440 and 2160 degrees
    const extraDegrees = Math.floor(Math.random() * 360) + 1440;
    const finalRot = rotation + extraDegrees;
    setRotation(finalRot);

    setTimeout(() => {
      setIsSpinning(false);
      const rewards = [
        '🎉 YOU WON ₹100 OFF! Coupon Code: CTAXI100',
        '⭐ FREE CAB UPGRADE TO SEDAN! Coupon Code: CTAXIUPGRADE',
        '🎉 YOU WON ₹50 FLAT DISCOUNT! Coupon Code: CTAXI50',
        '⚡ ZERO TOLL SURCHARGE PASS! Coupon Code: CTAXIFAST'
      ];
      const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
      setCouponResult(randomReward);
    }, 2800);
  };

  return (
    <div className="modal-overlay active" style={{ display: 'flex' }} onClick={onClose}>
      <div className="modal-content-card discount-wheel-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '440px', width: '92%', textAlign: 'center' }}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer' }}
        >
          ✕
        </button>

        <div style={{ fontSize: '2.5rem', marginBottom: '4px' }}>🎁</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--brand-dark)' }}>
          Spin & Win Ride Discount!
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
          Unlock instant ₹100 Off coupon code or Free Upgrade on your next Coimbatore cab ride!
        </p>

        {/* Wheel Graphic */}
        <div style={{ position: 'relative', width: '220px', height: '220px', margin: '0 auto 16px auto' }}>
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '16px solid var(--brand-red)',
              zIndex: 10
            }}
          />
          <div
            id="wheel-graphic"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '6px solid #111827',
              background: 'conic-gradient(#d90429 0deg 90deg, #ffb703 90deg 180deg, #111827 180deg 270deg, #ef233c 270deg 360deg)',
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning ? 'transform 2.8s cubic-bezier(0.15, 0.9, 0.25, 1)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}
          >
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '4px solid #111827',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '0.95rem',
                color: 'var(--brand-dark)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              SPIN
            </div>
          </div>
        </div>

        {/* Result message */}
        <div
          id="wheel-result-msg"
          style={{
            fontWeight: 800,
            fontSize: '1rem',
            color: 'var(--brand-red)',
            minHeight: '32px',
            margin: '12px 0'
          }}
        >
          {couponResult}
        </div>

        {couponResult ? (
          <a
            href={`https://wa.me/919089223344?text=${encodeURIComponent(`Hello C Taxi,\nI won a discount on Ctaxi.co.in!\n${couponResult}\nPlease apply it to my cab booking.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              width: '100%',
              padding: '12px',
              background: '#25D366',
              color: '#ffffff',
              fontWeight: 800,
              textDecoration: 'none',
              borderRadius: '8px',
              display: 'inline-block'
            }}
          >
            💬 Claim Discount on WhatsApp (9089223344)
          </a>
        ) : (
          <button
            type="button"
            className="btn btn-red"
            disabled={isSpinning}
            onClick={handleSpin}
            style={{ width: '100%', padding: '12px', fontWeight: 800 }}
          >
            {isSpinning ? '🎰 Spinning Wheel...' : '🎰 Spin Now to Unlock Coupon'}
          </button>
        )}
      </div>
    </div>
  );
};
