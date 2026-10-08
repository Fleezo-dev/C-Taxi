import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, MessageSquare, Car, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL } from '../data/taxiData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: any;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, bookingDetails }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone.trim() || customerPhone.trim().length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number so our driver can reach you.');
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
  };

  const formattedWhatsAppText = encodeURIComponent(
    `Hello C Taxi,\nI have submitted an instant booking request:\n` +
    `• Name: ${customerName || 'Customer'}\n` +
    `• Phone: ${customerPhone}\n` +
    `• Pickup: ${pickupAddress || bookingDetails?.pickup || 'Coimbatore'}\n` +
    `• Drop: ${bookingDetails?.drop || 'Destination'}\n` +
    `• Vehicle: ${bookingDetails?.vehicle || 'AC Sedan'}\n` +
    `• Date & Time: ${bookingDetails?.date || 'Today'} at ${bookingDetails?.time || 'Immediate'}\n` +
    `• Estimated Fare: ~${bookingDetails?.estimatedPriceRange || (bookingDetails?.estimatedPrice ? `₹${bookingDetails.estimatedPrice.toLocaleString('en-IN')}` : 'Standard Quote')}\n` +
    `• Notes: ${specialNotes || 'None'}\n\nPlease dispatch cab & confirm driver details.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#141722] border border-[#272f3f] rounded-2xl shadow-2xl overflow-hidden text-neutral-100"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#232936] bg-[#10131b]">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-amber-400 text-neutral-950 font-extrabold flex items-center justify-center font-heading text-lg shadow-md shadow-amber-400/20">
              C
            </span>
            <div>
              <h3 className="text-base font-bold text-white font-heading">
                Confirm C Taxi Booking
              </h3>
              <p className="text-[11px] text-neutral-400">
                15-Min Doorstep Dispatch · 24/7 Kovai Helpline
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-[#1d2330] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {isSubmitted ? (
            /* Success State */
            <div className="py-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-400/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white font-heading">
                  Booking Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto">
                  Our Coimbatore dispatch desk is assigning a nearby driver for <strong className="text-white">{customerPhone}</strong>.
                </p>
              </div>

              {/* Trip Summary Card */}
              <div className="p-4 rounded-xl bg-[#10131b] border border-[#232936] text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Pickup:</span>
                  <span className="font-semibold text-white truncate max-w-[200px]">
                    {pickupAddress || bookingDetails?.pickup || 'Coimbatore'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Drop:</span>
                  <span className="font-semibold text-white truncate max-w-[200px]">
                    {bookingDetails?.drop || 'Destination'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Vehicle:</span>
                  <span className="text-amber-400 font-bold">
                    {bookingDetails?.vehicle || 'AC Sedan'}
                  </span>
                </div>
                {bookingDetails?.estimatedPrice && (
                  <div className="flex justify-between pt-1 border-t border-[#1e2430]">
                    <span className="text-neutral-400">Estimated Fare:</span>
                    <span className="text-emerald-400 font-extrabold text-sm">
                      ~₹{bookingDetails.estimatedPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
              </div>

              {/* Faster WhatsApp Option */}
              <div className="pt-2 space-y-2">
                <a
                  href={`${WHATSAPP_URL}?text=${formattedWhatsAppText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-400/20"
                >
                  <MessageSquare className="w-4 h-4 fill-neutral-950" />
                  <span>Receive Driver Details on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-neutral-400 hover:text-white underline block mx-auto pt-1"
                >
                  Close & Return to Page
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Selected Trip Quick Strip */}
              {bookingDetails && (
                <div className="p-3.5 rounded-xl bg-[#10131b] border border-[#232936] text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Service:</span>
                    <span className="font-bold text-amber-400 capitalize">
                      {bookingDetails.serviceType === 'local' ? 'Local City Ride' : bookingDetails.serviceType === 'outstation' ? 'Outstation Trip' : bookingDetails.serviceType === 'hourly' ? 'Hourly Rental' : 'Airport Transfer'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Vehicle:</span>
                    <span className="font-semibold text-white">
                      {bookingDetails.vehicle}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Estimated Quote:</span>
                    <span className="font-extrabold text-emerald-400 text-sm">
                      {bookingDetails.estimatedPriceRange || (bookingDetails.estimatedPrice ? `~₹${bookingDetails.estimatedPrice.toLocaleString('en-IN')}` : 'Standard Meter Quote')}
                    </span>
                  </div>
                </div>
              )}

              {/* Error Warning */}
              {errorMessage && (
                <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              {/* Customer Phone (Required) */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Mobile Number <span className="text-amber-400">*</span> (For Driver Coordination)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs sm:text-sm font-semibold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="90892 23344"
                    className="w-full bg-[#181d28] border border-[#2d3648] rounded-xl pl-12 pr-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>

              {/* Customer Name */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full bg-[#181d28] border border-[#2d3648] rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              {/* Exact Pickup Address */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Exact Pickup Address / Landmark in Coimbatore
                </label>
                <input
                  type="text"
                  value={pickupAddress}
                  onChange={(e) => setPickupAddress(e.target.value)}
                  placeholder="e.g. Near PSG Tech / DB Road / Railway Station Gate 2"
                  className="w-full bg-[#181d28] border border-[#2d3648] rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Luggage / Flight Number / Special Instructions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="e.g. Indigo Flight arriving at 3:15 PM, 3 heavy suitcases"
                  className="w-full bg-[#181d28] border border-[#2d3648] rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20 active:scale-[0.99]"
                >
                  <span>Confirm Cab Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center">
                  <span className="text-[11px] text-neutral-400">or book directly in 1 second via</span>{' '}
                  <a
                    href={`${WHATSAPP_URL}?text=${formattedWhatsAppText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-emerald-400 hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" /> WhatsApp
                  </a>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
