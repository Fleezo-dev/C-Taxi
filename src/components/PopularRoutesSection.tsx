import React from 'react';
import { Route, Clock, ArrowRight, ShieldCheck, Mountain, Plane, Sparkles, Building2 } from 'lucide-react';
import { POPULAR_ROUTES, PopularRoute, PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL } from '../data/taxiData';

interface PopularRoutesSectionProps {
  onSelectRoute: (route: PopularRoute) => void;
}

export const PopularRoutesSection: React.FC<PopularRoutesSectionProps> = ({ onSelectRoute }) => {
  return (
    <section id="popular-routes" className="py-16 sm:py-24 bg-[#0d0f12] border-b border-[#232936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Outstation & Intercity Tariffs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight" style={{ textWrap: 'balance' }}>
              Popular Taxi Routes from Coimbatore
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Transparent fixed fares for top hill resorts, temple pilgrimages, and neighboring industrial corridors. Zero hidden surprises.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1c222e] border border-[#2e3748] text-white hover:text-amber-400 text-xs font-bold transition-colors"
            >
              <span>Custom Route Inquiry: {DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_ROUTES.map((route) => {
            const isOoty = route.to.toLowerCase().includes('ooty');
            return (
              <div
                key={route.id}
                className="bg-[#151922] border border-[#272f3d] rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-200 shadow-xl group"
              >
                <div>
                  
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-neutral-400 flex items-center gap-1.5">
                      {route.category === 'hills' && <Mountain className="w-3.5 h-3.5 text-amber-400" />}
                      {route.category === 'airport' && <Plane className="w-3.5 h-3.5 text-emerald-400" />}
                      {route.category === 'spiritual' && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
                      {route.category === 'business' && <Building2 className="w-3.5 h-3.5 text-neutral-400" />}
                      <span className="capitalize">{route.category} Route</span>
                    </span>

                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      ~{route.estDuration}
                    </span>
                  </div>

                  {/* Route Title */}
                  <div className="mb-3">
                    <div className="text-xs text-neutral-400 font-medium">
                      {route.from} →
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-heading">
                      {route.to}
                    </h3>
                  </div>

                  {/* Highlight pill */}
                  <div className="mb-4">
                    <span className="text-[11px] text-amber-300/90 font-medium bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20 inline-block">
                      ✓ {route.highlight}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {route.popularFor}
                  </p>

                </div>

                {/* Card Bottom Area */}
                <div className="pt-4 border-t border-[#232936] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                      Starting Fare
                    </span>
                    <span className="text-2xl font-extrabold text-amber-400 font-heading tabular-nums">
                      ₹{route.startingPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-neutral-400 block">
                      {isOoty ? 'AC Sedan Package' : `~${route.distanceKm} km`}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectRoute(route);
                      const el = document.getElementById('fare-calculator');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md active:scale-95"
                  >
                    <span>Book Route</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
