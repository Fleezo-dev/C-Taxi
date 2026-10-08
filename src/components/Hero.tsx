import React from 'react';
import { Phone, MessageSquare, Clock, MapPin, Star, CheckCircle, ShieldCheck, Check } from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL, AD_CAMPAIGN_PRESETS } from '../data/taxiData';

interface HeroProps {
  currentCampaignId: string;
  onOpenBookingModal: (details: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentCampaignId, onOpenBookingModal }) => {
  const campaign = AD_CAMPAIGN_PRESETS.find(p => p.id === currentCampaignId) || AD_CAMPAIGN_PRESETS[0];

  return (
    <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#0d0f12] via-[#141720] to-[#0d0f12] border-b border-[#232936]">
      
      {/* Background Decorative Grid and Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Copy (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Trust Kicker */}
            <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-300 flex-wrap">
              <span className="flex items-center gap-1.5 text-amber-400 font-bold bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9/5 Rated Call Taxi Service
              </span>
              <span aria-hidden="true" className="text-neutral-600 hidden sm:inline">·</span>
              <span className="text-neutral-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                15-Min Doorstep Dispatch in Coimbatore
              </span>
            </div>

            {/* High-Intent Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-heading" style={{ textWrap: 'balance' }}>
              {campaign.h1}
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              {campaign.subtext}
            </p>

            {/* Direct High-Contrast Action Triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-base text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-xl shadow-amber-400/25 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <Phone className="w-5 h-5 fill-neutral-950" />
                <span>Call {DISPLAY_PHONE}</span>
              </a>

              <a
                href={`${WHATSAPP_URL}?text=Hello%20C%20Taxi%2C%20I%20need%20to%20book%20a%20cab%20in%20Coimbatore`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-400/20 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <MessageSquare className="w-5 h-5 fill-neutral-950" />
                <span>Book via WhatsApp</span>
              </a>
            </div>

            {/* Value Trust Strip */}
            <div className="pt-4 border-t border-[#232936] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-300">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Transparent Fares</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>24/7 Cab Dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Local & Outstation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>CJB Airport Drops</span>
              </div>
            </div>

          </div>

          {/* Right Trust Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#161a24] border border-[#272f3d] rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#232936]">
              <span className="w-9 h-9 rounded-xl bg-amber-400 text-neutral-950 font-extrabold text-xl flex items-center justify-center font-heading">
                C
              </span>
              <div>
                <div className="font-extrabold text-sm text-white font-heading">
                  C Taxi Coimbatore
                </div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Dispatch Active
                </div>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-center justify-between py-1 border-b border-[#202532]">
                <span className="text-neutral-400">Average Pickup Time:</span>
                <span className="font-bold text-white">10 – 15 Mins</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#202532]">
                <span className="text-neutral-400">Starting Outstation:</span>
                <span className="font-bold text-amber-400">₹15 / km (Sedan)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#202532]">
                <span className="text-neutral-400">Ooty Hill Package:</span>
                <span className="font-bold text-amber-400">From ₹3,000</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-neutral-400">Peak Surge Multiplier:</span>
                <span className="font-bold text-emerald-400">0% (Zero Surge)</span>
              </div>
            </div>

            <div className="p-3 bg-[#11141d] rounded-xl border border-[#202532] text-[11px] text-neutral-400 leading-relaxed">
              📞 Direct Dispatch: <strong className="text-white">{DISPLAY_PHONE}</strong>. Commercial tourist cabs with experienced mountain drivers.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
