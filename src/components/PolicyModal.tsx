import React, { useEffect } from 'react';
import { X, Shield, RefreshCw, FileText, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE } from '../data/taxiData';

export type PolicyType = 'privacy' | 'cancellation' | 'terms';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePolicy: PolicyType;
  onChangePolicy: (policy: PolicyType) => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  activePolicy,
  onChangePolicy
}) => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#141722] border border-[#272f3f] rounded-2xl shadow-2xl overflow-hidden text-neutral-100 flex flex-col max-h-[88vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#232936] bg-[#10131b]">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-amber-400 text-neutral-950 font-extrabold flex items-center justify-center font-heading text-lg shadow-md shadow-amber-400/20">
              C
            </span>
            <div>
              <h3 className="text-base font-bold text-white font-heading">
                C Taxi — Legal & Policies
              </h3>
              <p className="text-[11px] text-neutral-400">
                Transparent & Customer-First Terms
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-[#1d2330] transition-colors"
            aria-label="Close policy modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#232936] bg-[#0e1118] p-2 gap-2 text-xs">
          <button
            type="button"
            onClick={() => onChangePolicy('privacy')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold transition-colors ${
              activePolicy === 'privacy'
                ? 'bg-amber-400 text-neutral-950 shadow-sm font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-[#1c2230]'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>

          <button
            type="button"
            onClick={() => onChangePolicy('cancellation')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold transition-colors ${
              activePolicy === 'cancellation'
                ? 'bg-amber-400 text-neutral-950 shadow-sm font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-[#1c2230]'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Cancellation & Refunds</span>
          </button>

          <button
            type="button"
            onClick={() => onChangePolicy('terms')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold transition-colors ${
              activePolicy === 'terms'
                ? 'bg-amber-400 text-neutral-950 shadow-sm font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-[#1c2230]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms of Service</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          
          {/* Privacy Policy */}
          {activePolicy === 'privacy' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                <Shield className="w-5 h-5" />
                <h4>Privacy Policy — C Taxi</h4>
              </div>
              <p className="text-xs text-neutral-400">
                Effective for all C Taxi rides booked via phone, WhatsApp, or website.
              </p>

              <div className="space-y-3 pt-2">
                <div>
                  <h5 className="font-bold text-white mb-1">1. Information We Collect</h5>
                  <p>
                    When you request a cab booking through our platform, we only collect essential travel coordination details: your name, contact phone number, pickup locality/address, destination, and travel date/time.
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-white mb-1">2. How Your Data Is Used</h5>
                  <p>
                    Your contact information is used strictly by our 24/7 Coimbatore dispatch desk to assign an appropriate commercial vehicle, share driver contact details, and coordinate on-time pickup. We do not sell, rent, or trade personal customer data to telemarketers.
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-white mb-1">3. Direct Communication</h5>
                  <p>
                    By submitting your phone number or contacting us at {DISPLAY_PHONE}, you consent to receiving booking confirmation, vehicle registration details, and trip receipts via phone call, SMS, or WhatsApp.
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-white mb-1">4. Payment & Security</h5>
                  <p>
                    We do not store your credit/debit card numbers or bank credentials. All payments are settled directly between passenger and chauffeur or via authorized UPI QR codes (GPay, PhonePe, Paytm).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Cancellation Policy */}
          {activePolicy === 'cancellation' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                <RefreshCw className="w-5 h-5" />
                <h4>Cancellation & Refund Policy</h4>
              </div>
              <p className="text-xs text-neutral-400">
                Fair, transparent, customer-first cancellation rules for local, outstation, and airport bookings.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#10131b] border border-[#232936] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Free Cancellation Policy</span>
                  </div>
                  <p className="text-xs text-neutral-300">
                    You can cancel your trip with zero penalties under the following timelines:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 pl-2">
                    <li><strong>Local City Rides:</strong> Free cancellation up to 30 minutes before scheduled pickup time.</li>
                    <li><strong>Airport Transfers (CJB):</strong> Free cancellation up to 1 hour before scheduled pickup. Flight delay changes are rescheduled free of charge.</li>
                    <li><strong>Outstation & Hill Trips:</strong> Free cancellation up to 2 hours before scheduled departure.</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-white mb-1">1. Late Cancellations & Driver En-Route</h5>
                  <p>
                    If a local booking is cancelled after the assigned driver has arrived at your doorstep, a nominal convenience fee of ₹100 may be requested to compensate driver fuel costs.
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-white mb-1">2. How to Cancel or Reschedule</h5>
                  <p>
                    To cancel or reschedule your ride immediately, call our 24/7 dispatch desk at <strong className="text-white">{DISPLAY_PHONE}</strong> or reply directly to your booking WhatsApp message.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Terms of Service */}
          {activePolicy === 'terms' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                <FileText className="w-5 h-5" />
                <h4>Terms & Conditions of Service</h4>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <h5 className="font-bold text-white mb-1">1. Commercial Yellow Board Vehicles</h5>
                  <p>
                    All C Taxi cabs are licensed commercial tourist vehicles (T-Permit) registered in Tamil Nadu. Chauffeurs possess verified commercial driving licenses and badge endorsements.
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-white mb-1">2. Transparent Fare Structure</h5>
                  <p>
                    Fares are calculated based on published rates: Local Sedan (₹100 base + ₹28/km), Local SUV (₹100 base + ₹35/km), Premium SUV (₹150 base + ₹45/km). Outstation trips are billed at ₹15/km (Sedan), ₹20/km (SUV), or ₹23/km (Crysta) with a 250 km/day minimum and ₹500/day driver batta.
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-white mb-1">3. Toll, Parking & State Permits</h5>
                  <p>
                    National Highway toll plazas, airport parking tickets, and interstate permits (for Kerala or Karnataka border crossings) are paid as per actual receipts issued by the respective authorities.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#232936] bg-[#10131b] flex items-center justify-between">
          <span className="text-xs text-neutral-400">
            Helpline: <strong className="text-white">{DISPLAY_PHONE}</strong>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};
