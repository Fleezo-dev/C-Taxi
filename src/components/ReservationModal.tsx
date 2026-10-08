import React from 'react';
import { BookingSubmission } from './HeroBookingSection';

interface ReservationModalProps {
  bookingData: BookingSubmission | null;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ bookingData, onClose }) => {
  if (!bookingData) return null;

  const waMessage = encodeURIComponent(
    `Hello C Taxi (Ctaxi.co.in),\n` +
    `I have submitted a cab reservation request:\n` +
    `• Service: ${bookingData.serviceType.toUpperCase()}\n` +
    `• Pickup: ${bookingData.pickup}\n` +
    `• Destination: ${bookingData.drop}\n` +
    `• Date & Time: ${bookingData.dateTime}\n` +
    `• Vehicle: ${bookingData.vehicle}\n` +
    `• Passenger Phone: ${bookingData.phone}\n` +
    `• Estimated Fare: ${bookingData.fareEstimate}\n` +
    (bookingData.extraInfo ? `• Notes: ${bookingData.extraInfo}\n` : '') +
    `Please confirm the driver dispatch immediately.`
  );

  return (
    <div className="modal-overlay active" style={{ display: 'flex' }} onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px', width: '92%' }}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer' }}
        >
          ✕
        </button>

        <div style={{ fontSize: '3rem', marginBottom: '8px', textAlign: 'center' }}>🚕</div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--brand-dark)', textAlign: 'center', marginBottom: '6px' }}>
          Reservation Received!
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', textAlign: 'center', lineHeight: 1.5, marginBottom: '20px' }}>
          Thank you for choosing <strong>C Taxi</strong> (<span style={{ color: 'var(--brand-red)' }}>Ctaxi.co.in</span>). Our 24/7 Coimbatore fleet dispatch desk is reviewing your trip details.
        </p>

        {/* Details Card */}
        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '16px',
            fontSize: '0.9rem',
            lineHeight: 1.8,
            color: '#1e293b'
          }}
        >
          <div>
            <strong>Service Type:</strong>{' '}
            <span style={{ textTransform: 'capitalize', color: 'var(--brand-red)', fontWeight: 700 }}>
              {bookingData.serviceType} Cab
            </span>
          </div>
          <div>
            <strong>📍 Pickup:</strong> {bookingData.pickup}
          </div>
          <div>
            <strong>🏁 Destination:</strong> {bookingData.drop}
          </div>
          <div>
            <strong>📅 Date & Time:</strong> {bookingData.dateTime}
          </div>
          <div>
            <strong>🚗 Vehicle Class:</strong> {bookingData.vehicle}
          </div>
          <div>
            <strong>📱 Passenger Contact:</strong> {bookingData.phone}
          </div>
          <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #cbd5e1', fontSize: '1.05rem', fontWeight: 800 }}>
            <span>Estimated Fare: </span>
            <span style={{ color: 'var(--brand-red)', fontSize: '1.2rem' }}>{bookingData.fareEstimate}</span>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          <a
            href={`https://wa.me/919089223344?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: '#25D366',
              color: '#ffffff',
              fontWeight: 800,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '13px 18px',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          >
            💬 Confirm Details on WhatsApp
          </a>

          <a
            href="tel:+919089223344"
            className="btn btn-red"
            style={{
              fontWeight: 800,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '13px 18px',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          >
            📞 Call Dispatch Directly: 9089223344
          </a>
        </div>
      </div>
    </div>
  );
};
