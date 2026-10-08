import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Check, 
  X, 
  Calendar, 
  ShieldCheck, 
  Car, 
  Users, 
  Briefcase, 
  Sparkles,
  Mountain,
  ChevronRight,
  Info,
  HelpCircle,
  Route
} from 'lucide-react';
import { TourPackage, TOUR_PACKAGES, findTourBySlug } from '../data/toursData';
import { TourCardVisual } from './TourCardVisual';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL } from '../data/taxiData';

interface TourDetailPageProps {
  tour: TourPackage;
  onBackToHome: () => void;
  onBackToTours: () => void;
  onNavigateToTour: (slug: string) => void;
  onOpenBookingModal: (bookingDetails: any) => void;
}

export const TourDetailPage: React.FC<TourDetailPageProps> = ({
  tour,
  onBackToHome,
  onBackToTours,
  onNavigateToTour,
  onOpenBookingModal,
}) => {
  const [selectedVehicleType, setSelectedVehicleType] = useState<'sedan' | 'suv' | 'crysta'>('sedan');
  const [travelDate, setTravelDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [pickupLocality, setPickupLocality] = useState('Gandhipuram / Any Location in Coimbatore');

  const activePrice = 
    selectedVehicleType === 'sedan' ? tour.sedanPrice :
    selectedVehicleType === 'suv' ? tour.suvPrice : tour.crystaPrice;

  const vehicleName = 
    selectedVehicleType === 'sedan' ? 'Prime AC Sedan (Dzire / Etios)' :
    selectedVehicleType === 'suv' ? 'Family SUV (Maruti Ertiga 6-Seater)' :
    'Premium Innova Crysta (7-Seater VIP)';

  const formattedWhatsAppText = encodeURIComponent(
    `Hello C Taxi,\nI would like to book the tour package:\n` +
    `• Tour: ${tour.title}\n` +
    `• Vehicle: ${vehicleName}\n` +
    `• Date: ${travelDate}\n` +
    `• Pickup: ${pickupLocality}\n` +
    `• Quoted Package Fare: ₹${activePrice.toLocaleString('en-IN')}\n\nPlease confirm availability and driver dispatch.`
  );

  const handleBookingSubmit = () => {
    onOpenBookingModal({
      serviceType: 'outstation',
      pickup: pickupLocality,
      drop: tour.title,
      vehicle: vehicleName,
      estimatedPrice: activePrice,
      date: travelDate,
      time: '06:00 AM',
      breakdownNote: `Tour Package: ${tour.title} (${tour.duration}) - Fixed tariff ₹${activePrice.toLocaleString('en-IN')}`
    });
  };

  const otherTours = TOUR_PACKAGES.filter(t => t.slug !== tour.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0d0f12] text-neutral-100 pb-28 pt-6 sm:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-6 flex-wrap">
          <button 
            type="button" 
            onClick={onBackToHome}
            className="hover:text-amber-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <button 
            type="button" 
            onClick={onBackToTours}
            className="hover:text-amber-400 transition-colors"
          >
            Tour Packages
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-amber-400 font-semibold truncate max-w-[200px] sm:max-w-none">
            {tour.title}
          </span>
        </nav>

        {/* Back Button */}
        <button
          type="button"
          onClick={onBackToTours}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All 10 Tour Packages</span>
        </button>

        {/* Hero Banner with Custom Silhouette Visual */}
        <div className="rounded-3xl overflow-hidden border border-[#272f3d] shadow-2xl mb-10 bg-[#161a24]">
          <TourCardVisual
            slug={tour.slug}
            title={tour.title}
            badge={tour.badge}
            className="min-h-[220px] sm:min-h-[260px] p-6 sm:p-10"
          />

          <div className="p-6 sm:p-8 bg-[#151922] border-t border-[#232936] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-neutral-400 block text-[11px]">Tour Duration</span>
              <span className="font-extrabold text-sm sm:text-base text-white flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-amber-400" />
                {tour.duration}
              </span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Route Distance</span>
              <span className="font-extrabold text-sm sm:text-base text-white flex items-center gap-1.5 mt-0.5 truncate">
                <Route className="w-4 h-4 text-emerald-400" />
                {tour.distance}
              </span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Pickup Location</span>
              <span className="font-extrabold text-sm sm:text-base text-white flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                Coimbatore Doorstep
              </span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Starting Package Fare</span>
              <span className="font-extrabold text-lg sm:text-xl text-amber-400 font-heading block mt-0.5">
                ₹{tour.startingPrice.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content & Booking Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Overview, Itinerary, Spots, Inclusions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tour Introduction */}
            <div className="bg-[#151922] border border-[#272f3d] rounded-2xl p-6 space-y-3">
              <h2 className="text-lg font-bold text-white font-heading">
                About this Taxi Tour Package
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {tour.fullDescription}
              </p>
              <div className="pt-2 text-xs text-amber-400 font-mono bg-[#1b202c] p-3 rounded-xl border border-[#272f3d]">
                📍 Route: {tour.routeOverview}
              </div>
            </div>

            {/* Key Sightseeing Spots Bento */}
            <div className="bg-[#151922] border border-[#272f3d] rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                Sightseeing Spots Covered in this Circuit
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.spots.map((spot, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#1a1f2c] border border-[#283142] space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold text-xs sm:text-sm text-white">{spot.name}</span>
                      {spot.timing && (
                        <span className="text-[10px] text-neutral-400">{spot.timing}</span>
                      )}
                    </div>
                    <p className="text-[11px] text-neutral-300 leading-relaxed">
                      {spot.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hour-by-Hour Sample Itinerary */}
            <div className="bg-[#151922] border border-[#272f3d] rounded-2xl p-6 space-y-5">
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2 border-b border-[#242b38] pb-3">
                <Clock className="w-4 h-4 text-amber-400" />
                Detailed Tour Timeline & Itinerary
              </h3>

              <div className="relative border-l border-[#2c3546] ml-3 space-y-6 py-2">
                {tour.itinerary.map((item, idx) => (
                  <div key={idx} className="relative pl-6">
                    <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-amber-400 border-2 border-[#151922]" />
                    <span className="font-mono text-xs font-bold text-amber-400 bg-[#12151e] px-2 py-0.5 rounded border border-[#293244]">
                      {item.time}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Inclusions */}
              <div className="bg-[#151922] border border-[#272f3d] rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Package Inclusions
                </h4>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {tour.inclusions.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-[#151922] border border-[#272f3d] rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <X className="w-4 h-4 text-neutral-400" />
                  Package Exclusions
                </h4>
                <ul className="space-y-2 text-xs text-neutral-400">
                  {tour.exclusions.map((exc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 shrink-0 mt-1.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* FAQs */}
            {tour.faqs && tour.faqs.length > 0 && (
              <div className="bg-[#151922] border border-[#272f3d] rounded-2xl p-6 space-y-4">
                <h3 className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  Tour FAQs
                </h3>
                <div className="space-y-3">
                  {tour.faqs.map((f, idx) => (
                    <div key={idx} className="bg-[#191f2c] p-4 rounded-xl space-y-1">
                      <div className="font-bold text-xs text-white">{f.q}</div>
                      <div className="text-xs text-neutral-400">{f.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column (5 cols): Vehicle Rate Selector & Instant Booking */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            
            <div className="bg-[#171b26] border border-[#2a3242] rounded-2xl p-6 shadow-2xl space-y-5">
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                  Custom Tour Reservation
                </span>
                <h3 className="text-xl font-extrabold text-white font-heading">
                  Book {tour.title}
                </h3>
              </div>

              {/* Vehicle Options Tabs */}
              <div className="space-y-2.5">
                <label className="block text-xs font-semibold text-neutral-300">
                  Select Vehicle Category
                </label>

                {/* Sedan Option */}
                <button
                  type="button"
                  onClick={() => setSelectedVehicleType('sedan')}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                    selectedVehicleType === 'sedan'
                      ? 'bg-[#1e2433] border-amber-400 shadow-md ring-1 ring-amber-400/50'
                      : 'bg-[#181c24] border-[#2d3340] hover:border-neutral-500'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-sm text-white">Prime AC Sedan</div>
                    <div className="text-[11px] text-neutral-400">Dzire / Etios · Up to 4 Pax</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-extrabold text-amber-400 font-heading">
                      ₹{tour.sedanPrice.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] text-neutral-400">Fixed Package</div>
                  </div>
                </button>

                {/* Ertiga SUV Option */}
                <button
                  type="button"
                  onClick={() => setSelectedVehicleType('suv')}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                    selectedVehicleType === 'suv'
                      ? 'bg-[#1e2433] border-amber-400 shadow-md ring-1 ring-amber-400/50'
                      : 'bg-[#181c24] border-[#2d3340] hover:border-neutral-500'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-sm text-white">Family SUV (6-Seater)</div>
                    <div className="text-[11px] text-neutral-400">Maruti Ertiga · 4 to 6 Pax</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-extrabold text-amber-400 font-heading">
                      ₹{tour.suvPrice.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] text-neutral-400">Fixed Package</div>
                  </div>
                </button>

                {/* Innova Crysta Option */}
                <button
                  type="button"
                  onClick={() => setSelectedVehicleType('crysta')}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                    selectedVehicleType === 'crysta'
                      ? 'bg-[#1e2433] border-amber-400 shadow-md ring-1 ring-amber-400/50'
                      : 'bg-[#181c24] border-[#2d3340] hover:border-neutral-500'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-sm text-white">Innova Crysta VIP</div>
                    <div className="text-[11px] text-neutral-400">Plush Captain Seats · 6-7 Pax</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-extrabold text-amber-400 font-heading">
                      ₹{tour.crystaPrice.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] text-neutral-400">VIP Luxury</div>
                  </div>
                </button>
              </div>

              {/* Date & Pickup Inputs */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-[#181c24] border border-[#2d3340] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-3 py-2.5 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Pickup Address in Coimbatore
                  </label>
                  <input
                    type="text"
                    value={pickupLocality}
                    onChange={(e) => setPickupLocality(e.target.value)}
                    placeholder="e.g. Gandhipuram / Hotel / Peelamedu"
                    className="w-full bg-[#181c24] border border-[#2d3340] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-3 py-2.5 text-xs text-white"
                  />
                </div>
              </div>

              {/* Instant Action Triggers */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`${WHATSAPP_URL}?text=${formattedWhatsAppText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-400/20 active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4 fill-neutral-950" />
                  <span>Book on WhatsApp (₹{activePrice.toLocaleString('en-IN')})</span>
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/10 active:scale-[0.99]"
                >
                  <Phone className="w-4 h-4 fill-neutral-950" />
                  <span>Call {DISPLAY_PHONE}</span>
                </a>

                <button
                  type="button"
                  onClick={handleBookingSubmit}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-neutral-200 bg-[#212735] hover:bg-[#2b3346] border border-[#30394c] transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Confirm Online Form</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Other Recommended Tours Strip */}
        <div className="mt-16 pt-10 border-t border-[#232936] space-y-6">
          <h3 className="text-xl font-bold text-white font-heading">
            More Handcrafted Tours from Coimbatore
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherTours.map((ot) => (
              <div
                key={ot.slug}
                className="bg-[#151922] border border-[#272f3d] hover:border-amber-400/40 rounded-xl p-5 flex flex-col justify-between transition-all"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    {ot.badge}
                  </span>
                  <h4 className="text-base font-bold text-white font-heading">
                    {ot.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {ot.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#222834] flex items-center justify-between">
                  <span className="text-sm font-extrabold text-amber-400">
                    From ₹{ot.startingPrice.toLocaleString('en-IN')}
                  </span>

                  <button
                    type="button"
                    onClick={() => onNavigateToTour(ot.slug)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>View</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
