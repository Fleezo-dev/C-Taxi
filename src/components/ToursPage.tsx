import React, { useState } from 'react';
import { 
  Mountain, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Compass, 
  Sun, 
  Sparkles,
  ChevronRight,
  Filter
} from 'lucide-react';
import { TOUR_PACKAGES, TourPackage } from '../data/toursData';
import { TourCardVisual } from './TourCardVisual';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL } from '../data/taxiData';

interface ToursPageProps {
  onNavigateToTour: (slug: string) => void;
  onBookTour: (tour: TourPackage) => void;
  onBackToHome: () => void;
}

export const ToursPage: React.FC<ToursPageProps> = ({
  onNavigateToTour,
  onBookTour,
  onBackToHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hills' | 'spiritual' | 'wildlife' | 'city'>('all');

  const filteredTours = selectedCategory === 'all' 
    ? TOUR_PACKAGES 
    : TOUR_PACKAGES.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0d0f12] text-neutral-100 pb-28 pt-6 sm:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
          <button 
            type="button" 
            onClick={onBackToHome}
            className="hover:text-amber-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-amber-400 font-semibold">Tour Packages</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            Handcrafted Coimbatore Taxi Experiences
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Coimbatore Outstation Tours & Day Trips
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Transparent fixed packages with verified mountain chauffeurs. Doorstep pickup anywhere in Coimbatore in clean, sanitized commercial AC vehicles.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl border transition-all whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-md font-bold'
                : 'bg-[#161a22] text-neutral-300 border-[#2b3240] hover:border-neutral-500'
            }`}
          >
            All 10 Packages
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('hills')}
            className={`px-4 py-2 rounded-xl border transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategory === 'hills'
                ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-md font-bold'
                : 'bg-[#161a22] text-neutral-300 border-[#2b3240] hover:border-neutral-500'
            }`}
          >
            <Mountain className="w-3.5 h-3.5" /> Nilgiri & Anamalai Hills
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('spiritual')}
            className={`px-4 py-2 rounded-xl border transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategory === 'spiritual'
                ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-md font-bold'
                : 'bg-[#161a22] text-neutral-300 border-[#2b3240] hover:border-neutral-500'
            }`}
          >
            <Sun className="w-3.5 h-3.5" /> Spiritual & Pilgrimage
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('wildlife')}
            className={`px-4 py-2 rounded-xl border transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategory === 'wildlife'
                ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-md font-bold'
                : 'bg-[#161a22] text-neutral-300 border-[#2b3240] hover:border-neutral-500'
            }`}
          >
            <Compass className="w-3.5 h-3.5" /> Wildlife & Safari
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('city')}
            className={`px-4 py-2 rounded-xl border transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategory === 'city'
                ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-md font-bold'
                : 'bg-[#161a22] text-neutral-300 border-[#2b3240] hover:border-neutral-500'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> City & Shopping
          </button>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredTours.map((tour) => (
            <div
              key={tour.slug}
              className="bg-[#151922] border border-[#272f3d] hover:border-amber-400/50 rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-xl group"
            >
              <div>
                <TourCardVisual
                  slug={tour.slug}
                  title={tour.title}
                  badge={tour.badge}
                />

                <div className="p-5 sm:p-6 space-y-4">
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

                  <div className="pt-2 border-t border-[#232936] space-y-1.5">
                    <div className="text-[11px] text-neutral-400 font-medium">Key Highlights:</div>
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

              {/* Card Footer & Action */}
              <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                <div className="pt-4 border-t border-[#232936] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                      Starting Fare
                    </span>
                    <span className="text-xl font-extrabold text-amber-400 font-heading">
                      ₹{tour.startingPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-neutral-400 block">Sedan All-Inclusive</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onNavigateToTour(tour.slug)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20"
                    >
                      <span>View Tour</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Booking Guarantee */}
        <div className="mt-16 bg-[#161a24] border border-[#293140] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
              Need a Custom Tour Route or Multi-Day Package?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
              Our 24/7 Coimbatore travel desk can customize itineraries for large family groups, corporate teams, and multi-city pilgrimages.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20"
            >
              <Phone className="w-4 h-4 fill-neutral-950" />
              <span>Call {DISPLAY_PHONE}</span>
            </a>

            <a
              href={`${WHATSAPP_URL}?text=Hello%20C%20Taxi%2C%20I%20would%20like%20to%20inquire%20about%20a%20custom%20tour%20package`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-400/20"
            >
              <MessageSquare className="w-4 h-4 fill-neutral-950" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
