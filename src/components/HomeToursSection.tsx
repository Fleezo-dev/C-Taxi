import React from 'react';
import { Clock, MapPin, ArrowRight, Sparkles, Compass } from 'lucide-react';
import { TOUR_PACKAGES, TourPackage } from '../data/toursData';
import { TourCardVisual } from './TourCardVisual';
import { PHONE_NUMBER, DISPLAY_PHONE } from '../data/taxiData';

interface HomeToursSectionProps {
  onNavigateToTour: (slug: string) => void;
  onViewAllTours: () => void;
  onBookTour: (tour: TourPackage) => void;
}

export const HomeToursSection: React.FC<HomeToursSectionProps> = ({
  onNavigateToTour,
  onViewAllTours,
  onBookTour,
}) => {
  // Top 3 featured tour experiences for Home Page preview
  const topFeaturedTours = TOUR_PACKAGES.slice(0, 3);

  return (
    <section id="featured-tours" className="py-16 sm:py-24 bg-[#12161f] border-b border-[#232936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              Popular Tours from Coimbatore
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight" style={{ textWrap: 'balance' }}>
              Handcrafted Hill Station & Pilgrimage Packages
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Fixed, all-inclusive taxi packages with mountain-certified drivers. Doorstep pickup anywhere in Coimbatore in clean AC cabs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onViewAllTours}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1c222e] border border-[#2e3748] text-white hover:text-amber-400 text-xs font-bold transition-colors shadow-md"
            >
              <span>View All 10 Tours</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Featured Tour Cards on Home Page */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
          {topFeaturedTours.map((tour) => {
            return (
              <div
                key={tour.slug}
                className="bg-[#161a24] border border-[#272f3d] hover:border-amber-400/50 rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <TourCardVisual
                    slug={tour.slug}
                    title={tour.title}
                    badge={tour.badge}
                  />

                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        {tour.duration}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 truncate">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        {tour.distance}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed">
                      {tour.shortDescription}
                    </p>

                    <div className="pt-2 border-t border-[#232936] space-y-1">
                      <div className="text-[11px] text-neutral-400 font-medium">Top Highlights:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {tour.spots.slice(0, 3).map((s, idx) => (
                          <span key={idx} className="text-[10px] bg-[#1c222e] text-neutral-300 px-2 py-0.5 rounded border border-[#2a3344]">
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Area */}
                <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                  <div className="pt-4 border-t border-[#232936] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                        Starting From
                      </span>
                      <span className="text-xl font-extrabold text-amber-400 font-heading">
                        ₹{tour.startingPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-neutral-400 block">Sedan AC</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onNavigateToTour(tour.slug)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20"
                    >
                      <span>View Tour</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Tours Bottom Banner */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onViewAllTours}
            className="inline-flex items-center gap-2 text-xs font-bold text-neutral-300 hover:text-amber-400 transition-colors"
          >
            <span>Browse all 10 outstation & hill station packages (Ooty, Valparai, Palani, Munnar & more)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
