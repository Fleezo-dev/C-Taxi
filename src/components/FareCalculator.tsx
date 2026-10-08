import React, { useState, useEffect } from 'react';
import { 
  Car, 
  MapPin, 
  Navigation, 
  Clock, 
  Calendar, 
  Phone, 
  MessageSquare, 
  Check, 
  RotateCcw,
  Plane,
  Sparkles,
  Mountain,
  Compass,
  Route,
  Info,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { 
  VEHICLE_FLEET, 
  COIMBATORE_LOCALITIES, 
  OUTSTATION_DESTINATIONS, 
  HOURLY_PACKAGES, 
  calculateHourlyRate,
  PHONE_NUMBER, 
  DISPLAY_PHONE, 
  WHATSAPP_URL 
} from '../data/taxiData';
import { 
  LocationPoint, 
  POPULAR_COIMBATORE_LOCATIONS, 
  getDrivingRoute, 
  RouteResult 
} from '../services/routingService';
import { LocationAutocomplete } from './LocationAutocomplete';
import { RouteMap } from './RouteMap';

interface FareCalculatorProps {
  initialService?: string;
  onOpenBookingModal: (bookingDetails: any) => void;
}

export const FareCalculator: React.FC<FareCalculatorProps> = ({ 
  initialService = 'local',
  onOpenBookingModal 
}) => {
  const [activeTab, setActiveTab] = useState<'local' | 'outstation' | 'hourly' | 'airport'>(
    initialService === 'outstation' ? 'outstation' :
    initialService === 'hourly' ? 'hourly' :
    initialService === 'airport' ? 'airport' : 'local'
  );

  useEffect(() => {
    if (initialService === 'outstation') setActiveTab('outstation');
    else if (initialService === 'hourly') setActiveTab('hourly');
    else if (initialService === 'airport') setActiveTab('airport');
    else if (initialService === 'local') setActiveTab('local');
  }, [initialService]);

  const [selectedVehicleId, setSelectedVehicleId] = useState<'sedan' | 'suv_ertiga' | 'premium_suv'>('sedan');
  const vehicle = VEHICLE_FLEET.find(v => v.id === selectedVehicleId) || VEHICLE_FLEET[0];

  // Geocoded location points for Local & Airport Rides
  const [pickupLoc, setPickupLoc] = useState<LocationPoint>(POPULAR_COIMBATORE_LOCATIONS[0]); // Gandhipuram
  const [dropLoc, setDropLoc] = useState<LocationPoint>(POPULAR_COIMBATORE_LOCATIONS[4]); // Peelamedu

  // Dynamic Route Calculation state
  const [routeData, setRouteData] = useState<RouteResult | null>(null);
  const [isRoutingLoading, setIsRoutingLoading] = useState(false);

  // Outstation Trip States
  const [outstationDestinationName, setOutstationDestinationName] = useState(OUTSTATION_DESTINATIONS[0].name);
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [tripDays, setTripDays] = useState(1);

  // Hourly Rental States
  const [rentalHours, setRentalHours] = useState(3);

  // Airport Transfer States
  const [airportTripType, setAirportTripType] = useState<'to_airport' | 'from_airport'>('to_airport');

  // Common Date / Time
  const [pickupDate, setPickupDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState('09:00 AM');

  // Calculate driving route when pickup/drop coordinates change
  useEffect(() => {
    if (!pickupLoc || !dropLoc) return;

    let isMounted = true;
    setIsRoutingLoading(true);

    getDrivingRoute(
      { lat: pickupLoc.lat, lng: pickupLoc.lng },
      { lat: dropLoc.lat, lng: dropLoc.lng }
    ).then((result) => {
      if (isMounted) {
        setRouteData(result);
        setIsRoutingLoading(false);
      }
    }).catch(() => {
      if (isMounted) {
        setRouteData(null);
        setIsRoutingLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [pickupLoc, dropLoc]);

  const activeDest = OUTSTATION_DESTINATIONS.find(d => d.name === outstationDestinationName) || OUTSTATION_DESTINATIONS[0];

  // ==========================================
  // AUTHORITATIVE FARE CALCULATION ENGINE
  // ==========================================
  let upperEstimatedPrice = 0;
  let lowerEstimatedPrice = 0;
  let breakdownNote = '';
  let distanceDisplay = '';
  let durationDisplay = '';

  if (activeTab === 'local') {
    const roadDistance = routeData ? routeData.distanceKm : 10;
    distanceDisplay = routeData ? `${roadDistance} km (Driving route)` : `${roadDistance} km (Estimated)`;
    durationDisplay = routeData ? routeData.durationFormatted : '~25 mins';

    const baseFare = vehicle.localBaseFare;
    const kmCost = Math.round(roadDistance * vehicle.localPerKm);
    upperEstimatedPrice = Math.max(baseFare + kmCost, vehicle.id === 'sedan' ? 180 : 250);
    
    // Transparent lower bound estimate
    lowerEstimatedPrice = Math.max(
      Math.round((upperEstimatedPrice * 0.9) / 10) * 10,
      vehicle.id === 'sedan' ? 160 : 220
    );

    breakdownNote = `Standard meter tariff: ₹${baseFare} base + ₹${vehicle.localPerKm}/km for ${roadDistance} km`;
  } else if (activeTab === 'outstation') {
    const isOoty = activeDest.name.toLowerCase().includes('ooty');

    if (isOoty && !isRoundTrip && tripDays === 1) {
      if (vehicle.id === 'sedan') {
        upperEstimatedPrice = 3000;
        lowerEstimatedPrice = 3000;
      } else if (vehicle.id === 'suv_ertiga') {
        upperEstimatedPrice = 4200;
        lowerEstimatedPrice = 4000;
      } else {
        upperEstimatedPrice = 5200;
        lowerEstimatedPrice = 5000;
      }
      distanceDisplay = '88 km (via Mettupalayam)';
      durationDisplay = '~2h 45m';
      breakdownNote = `Special Ooty Nilgiris Package with certified mountain chauffeur (Tolls extra)`;
    } else {
      const oneWayKm = activeDest.distance;
      const totalKm = isRoundTrip ? (oneWayKm * 2) : oneWayKm;
      const minBilledKm = vehicle.minKmPerDay * tripDays;
      const billedKm = Math.max(totalKm, minBilledKm);
      distanceDisplay = `${billedKm} km (${isRoundTrip ? 'Round Trip' : 'One Way'})`;
      durationDisplay = `${tripDays} Day${tripDays > 1 ? 's' : ''}`;

      const kmCharge = billedKm * vehicle.ratePerKm;
      const driverBatta = vehicle.driverAllowancePerDay * tripDays;
      const hillFee = activeDest.isHill ? vehicle.hillCharge : 0;

      upperEstimatedPrice = kmCharge + driverBatta + hillFee;
      lowerEstimatedPrice = Math.round((upperEstimatedPrice * 0.92) / 50) * 50;

      breakdownNote = `${billedKm} km @ ₹${vehicle.ratePerKm}/km + ₹${driverBatta} driver allowance (${tripDays} day${tripDays > 1 ? 's' : ''})${hillFee > 0 ? ` + ₹${hillFee} hill safety fee` : ''}`;
    }
  } else if (activeTab === 'hourly') {
    upperEstimatedPrice = calculateHourlyRate(rentalHours, vehicle.id);
    lowerEstimatedPrice = Math.max(Math.round((upperEstimatedPrice * 0.93) / 25) * 25, 700);
    const selectedPkg = HOURLY_PACKAGES.find(p => p.hours === rentalHours);
    distanceDisplay = selectedPkg ? `${selectedPkg.km} km coverage` : `${rentalHours * 10} km`;
    durationDisplay = `${rentalHours} Hours Dedicated Cab`;
    breakdownNote = `₹375/hr for first 3 hrs, ₹350/hr thereafter (${distanceDisplay} included)`;
  } else if (activeTab === 'airport') {
    const airportDistance = routeData ? routeData.distanceKm : 12;
    distanceDisplay = routeData ? `${airportDistance} km (Driving route)` : `${airportDistance} km (Estimated)`;
    durationDisplay = routeData ? routeData.durationFormatted : '~25 mins';

    const baseFare = vehicle.localBaseFare;
    const kmCost = Math.round(airportDistance * vehicle.localPerKm);
    const total = baseFare + kmCost;
    
    const minAirport = vehicle.id === 'sedan' ? 440 : vehicle.id === 'suv_ertiga' ? 650 : 850;
    upperEstimatedPrice = Math.max(total, minAirport);
    lowerEstimatedPrice = Math.max(Math.round((upperEstimatedPrice * 0.9) / 10) * 10, minAirport - 40);

    breakdownNote = `Airport transfer (~${airportDistance} km) based on ₹${baseFare} base + ₹${vehicle.localPerKm}/km (Zero midnight surge)`;
  }

  const pickupLabel = activeTab === 'airport' 
    ? (airportTripType === 'from_airport' ? 'CJB Airport Terminal' : pickupLoc.name)
    : (activeTab === 'local' ? pickupLoc.name : 'Coimbatore');

  const dropLabel = activeTab === 'airport'
    ? (airportTripType === 'from_airport' ? dropLoc.name : 'CJB Airport Terminal')
    : (activeTab === 'hourly' ? `${rentalHours} Hours Rental` : (activeTab === 'local' ? dropLoc.name : activeDest.name));

  const whatsappMessage = encodeURIComponent(
    `Hello C Taxi,\nI would like to book a cab:\n` +
    `• Service: ${activeTab === 'local' ? 'Local City Ride' : activeTab === 'outstation' ? 'Outstation Trip' : activeTab === 'hourly' ? 'Hourly Rental' : 'Airport Transfer'}\n` +
    `• Pickup: ${pickupLabel}\n` +
    `• Drop: ${dropLabel}\n` +
    `• Vehicle: ${vehicle.name} (${vehicle.models})\n` +
    `• Date & Time: ${pickupDate} at ${pickupTime}\n` +
    `• Typical Fare Range: ₹${lowerEstimatedPrice.toLocaleString('en-IN')} – ₹${upperEstimatedPrice.toLocaleString('en-IN')}\n\nPlease confirm availability and dispatch driver.`
  );

  const handleOpenModal = () => {
    onOpenBookingModal({
      serviceType: activeTab,
      pickup: pickupLabel,
      drop: dropLabel,
      vehicle: vehicle.name,
      vehicleModel: vehicle.models,
      estimatedPrice: upperEstimatedPrice,
      estimatedPriceRange: `₹${lowerEstimatedPrice.toLocaleString('en-IN')} – ₹${upperEstimatedPrice.toLocaleString('en-IN')}`,
      estimatedKm: distanceDisplay,
      date: pickupDate,
      time: pickupTime,
      breakdownNote
    });
  };

  return (
    <section id="fare-calculator" className="relative -mt-6 sm:-mt-10 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#13161f] border border-[#262d3d] rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Top Header of Calculator */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#171b26] via-[#1c2230] to-[#171b26] border-b border-[#262d3d] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
                Live Fare Calculator & Route Distance Engine
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Real driving distances via OpenStreetMap · Zero peak surge · Outstation from ₹15/km · Ooty from ₹3,000
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400 hidden lg:inline">24/7 Dispatch Desk:</span>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#1e2433] border border-[#2f384c] text-amber-400 hover:text-amber-300 font-semibold text-xs tracking-wide transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {DISPLAY_PHONE}
            </a>
          </div>
        </div>

        {/* 4 Ordered Tabs: 1. Local Rides -> 2. Outstation -> 3. Hourly Rentals -> 4. Airport Transfer */}
        <div className="grid grid-cols-2 sm:grid-cols-4 p-2 bg-[#0f121a] border-b border-[#232938] gap-1.5">
          
          <button
            type="button"
            onClick={() => setActiveTab('local')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'local'
                ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/20 font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-[#1a202c]'
            }`}
          >
            <Compass className="w-4 h-4 shrink-0" />
            <span className="truncate">Local City Rides</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('outstation')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'outstation'
                ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/20 font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-[#1a202c]'
            }`}
          >
            <RotateCcw className="w-4 h-4 shrink-0" />
            <span className="truncate">Outstation Trips</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('hourly')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'hourly'
                ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/20 font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-[#1a202c]'
            }`}
          >
            <Clock className="w-4 h-4 shrink-0" />
            <span className="truncate">Hourly Rentals</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('airport')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'airport'
                ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/20 font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-[#1a202c]'
            }`}
          >
            <Plane className="w-4 h-4 shrink-0" />
            <span className="truncate">Airport Transfer (CJB)</span>
          </button>

        </div>

        {/* Calculator Main Body Grid */}
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Inputs Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* 1. LOCAL CITY RIDES FORM */}
            {activeTab === 'local' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <LocationAutocomplete
                    label="Pickup Locality in Coimbatore"
                    placeholder="Type locality (e.g. Gandhipuram, RS Puram)"
                    value={pickupLoc.name}
                    selectedLocation={pickupLoc}
                    onSelect={(loc) => setPickupLoc(loc)}
                    iconColor="text-emerald-400"
                  />

                  <LocationAutocomplete
                    label="Drop Location in Coimbatore"
                    placeholder="Type destination (e.g. Peelamedu, Airport)"
                    value={dropLoc.name}
                    selectedLocation={dropLoc}
                    onSelect={(loc) => setDropLoc(loc)}
                    iconColor="text-amber-400"
                  />
                </div>

                {/* Interactive Map Preview */}
                <RouteMap
                  pickup={pickupLoc}
                  drop={dropLoc}
                  route={routeData}
                  isLoading={isRoutingLoading}
                />
              </div>
            )}

            {/* 2. OUTSTATION TRIPS FORM */}
            {activeTab === 'outstation' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Select Outstation Destination from Coimbatore
                  </label>
                  <select
                    value={outstationDestinationName}
                    onChange={(e) => setOutstationDestinationName(e.target.value)}
                    className="w-full bg-[#181c24] border border-[#2d3340] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-white transition-all cursor-pointer"
                  >
                    {OUTSTATION_DESTINATIONS.map((dest) => (
                      <option key={dest.name} value={dest.name} className="bg-[#181c24] text-white">
                        {dest.name} — {dest.distance} km {dest.isHill ? '(Hill Station Ghats)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Round Trip vs One Way Toggle & Duration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Trip Type
                    </label>
                    <div className="grid grid-cols-2 p-1 bg-[#181c24] border border-[#2d3340] rounded-xl text-xs font-semibold">
                      <button
                        type="button"
                        onClick={() => setIsRoundTrip(true)}
                        className={`py-2 rounded-lg transition-colors ${
                          isRoundTrip ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        Round Trip
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsRoundTrip(false)}
                        className={`py-2 rounded-lg transition-colors ${
                          !isRoundTrip ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        One-Way Drop
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Total Days Duration
                    </label>
                    <select
                      value={tripDays}
                      onChange={(e) => setTripDays(Number(e.target.value))}
                      className="w-full bg-[#181c24] border border-[#2d3340] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white transition-all"
                    >
                      <option value={1}>1 Day (Same Day Return / Drop)</option>
                      <option value={2}>2 Days (Weekend Stay)</option>
                      <option value={3}>3 Days (Extended Tour)</option>
                      <option value={4}>4 Days (Multi-City Tour)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 bg-[#181d28] border border-[#2a3242] rounded-xl flex items-center justify-between text-xs text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <Route className="w-3.5 h-3.5 text-amber-400" />
                    Billed Distance: <strong>{distanceDisplay}</strong>
                  </span>
                  <span className="text-emerald-400 font-semibold">
                    Min 250 km/day billing
                  </span>
                </div>
              </div>
            )}

            {/* 3. HOURLY RENTAL FORM */}
            {activeTab === 'hourly' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-neutral-300">
                    Choose Rental Package Duration (Coimbatore City Limits)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {HOURLY_PACKAGES.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setRentalHours(pkg.hours)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          rentalHours === pkg.hours
                            ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-md font-bold'
                            : 'bg-[#181c24] border-[#2d3340] text-neutral-300 hover:border-neutral-500'
                        }`}
                      >
                        <div className="text-sm font-extrabold">{pkg.hours} Hours</div>
                        <div className="text-[10px] opacity-80">{pkg.km} km Inc.</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-[#181d28] border border-[#2a3242] rounded-xl text-xs text-neutral-300 space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Flexible Multi-Stop Rental Rate Card:
                  </div>
                  <p className="text-neutral-400 text-[11px]">
                    ₹375 per hour for the first 3 hours, then ₹350 per hour thereafter. Driver stays exclusively with your car for shopping & clinic visits.
                  </p>
                </div>
              </div>
            )}

            {/* 4. AIRPORT TRANSFERS FORM */}
            {activeTab === 'airport' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Airport Route Direction
                  </label>
                  <div className="grid grid-cols-2 p-1 bg-[#181c24] border border-[#2d3340] rounded-xl text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setAirportTripType('to_airport')}
                      className={`py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                        airportTripType === 'to_airport' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <span>City → CJB Airport</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setAirportTripType('from_airport')}
                      className={`py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                        airportTripType === 'from_airport' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <span>CJB Airport → City Drop</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <LocationAutocomplete
                    label={airportTripType === 'to_airport' ? "City Pickup Location" : "Airport Terminal"}
                    placeholder="Pickup address in Coimbatore"
                    value={airportTripType === 'to_airport' ? pickupLoc.name : "Coimbatore International Airport (CJB)"}
                    selectedLocation={pickupLoc}
                    onSelect={(loc) => setPickupLoc(loc)}
                    disabled={airportTripType === 'from_airport'}
                    iconColor="text-emerald-400"
                  />

                  <LocationAutocomplete
                    label={airportTripType === 'to_airport' ? "Airport Terminal" : "City Drop Location"}
                    placeholder="Drop address in Coimbatore"
                    value={airportTripType === 'to_airport' ? "Coimbatore International Airport (CJB)" : dropLoc.name}
                    selectedLocation={dropLoc}
                    onSelect={(loc) => setDropLoc(loc)}
                    disabled={airportTripType === 'to_airport'}
                    iconColor="text-amber-400"
                  />
                </div>

                {/* Interactive Map Preview for Airport Route */}
                <RouteMap
                  pickup={pickupLoc}
                  drop={dropLoc}
                  route={routeData}
                  isLoading={isRoutingLoading}
                />
              </div>
            )}

            {/* Vehicle Selection Cards (Sedan vs SUV vs Crysta) */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-semibold text-neutral-300">
                Select Vehicle Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {VEHICLE_FLEET.map((v) => {
                  const isSelected = selectedVehicleId === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVehicleId(v.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all relative ${
                        isSelected
                          ? 'bg-[#1e2433] border-amber-400 shadow-md ring-1 ring-amber-400/50'
                          : 'bg-[#181c24] border-[#2d3340] hover:border-neutral-500'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-extrabold text-sm text-white font-heading">
                          {v.name}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                        )}
                      </div>
                      <div className="text-[11px] text-neutral-400 truncate mb-1">
                        {v.models}
                      </div>
                      <div className="text-[10px] text-amber-400 font-medium">
                        {v.capacity} · {v.luggage}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date & Time Picker */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Travel Date
                </label>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full bg-[#181c24] border border-[#2d3340] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Preferred Pickup Time
                </label>
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-[#181c24] border border-[#2d3340] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white cursor-pointer"
                >
                  <option value="Immediate (15 Mins)">Immediate (15-Min Dispatch)</option>
                  <option value="04:00 AM">04:00 AM (Early Flight)</option>
                  <option value="06:00 AM">06:00 AM (Morning Outstation)</option>
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="08:00 PM">08:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </select>
              </div>
            </div>

          </div>

          {/* Right Summary & Action Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#171b26] border border-[#2a3242] rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
            
            {/* Header / Trip Badge */}
            <div className="flex items-center justify-between pb-3 border-b border-[#262d3a]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                  {activeTab === 'local' ? 'Local City Ride' : activeTab === 'outstation' ? 'Outstation Tariff' : activeTab === 'hourly' ? 'Hourly Package' : 'Airport Transfer'}
                </span>
                <span className="font-extrabold text-sm text-white font-heading">
                  {vehicle.name}
                </span>
              </div>
              <span className="text-[11px] text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30 font-semibold">
                ✓ Zero Surge
              </span>
            </div>

            {/* Estimated Fare Range Display */}
            <div className="p-4 bg-[#11141d] rounded-xl border border-[#232938] space-y-2">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                Typical Fare Range
              </span>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-heading tracking-tight">
                  ₹{lowerEstimatedPrice.toLocaleString('en-IN')} – ₹{upperEstimatedPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-neutral-400 font-normal">approx.</span>
              </div>

              <p className="text-[11px] text-neutral-400 leading-relaxed pt-1 border-t border-[#1e2433]">
                {breakdownNote}
              </p>
            </div>

            {/* Key Transparency Trip Details */}
            <div className="space-y-2 text-xs divide-y divide-[#222836] pt-1">
              <div className="flex justify-between py-1">
                <span className="text-neutral-400">Route Distance:</span>
                <span className="text-white font-semibold flex items-center gap-1">
                  <Route className="w-3.5 h-3.5 text-amber-400" />
                  {distanceDisplay}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-400">Estimated Duration:</span>
                <span className="text-white font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  {durationDisplay}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-400">Driver Batta / Allowance:</span>
                <span className="text-neutral-300">
                  {activeTab === 'outstation' ? `₹${vehicle.driverAllowancePerDay * tripDays} Included` : 'Included'}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-400">Tolls / State Parking:</span>
                <span className="text-neutral-300">At actuals as per slip</span>
              </div>
            </div>

            {/* Transparent Disclaimer Notice */}
            <div className="text-[10px] text-neutral-400 bg-[#12151e] p-2.5 rounded-lg border border-[#202533] leading-relaxed flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
              <span>
                Final fare may vary based on route, waiting time, traffic, tolls and trip requirements.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              {/* 1. Direct WhatsApp Booking */}
              <a
                href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-400/20 active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 fill-neutral-950" />
                <span>Book Instantly on WhatsApp</span>
              </a>

              {/* 2. Direct Call Button */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/10 active:scale-[0.99]"
              >
                <Phone className="w-4 h-4 fill-neutral-950" />
                <span>Call Dispatch: {DISPLAY_PHONE}</span>
              </a>

              {/* 3. Fast Online Booking Form */}
              <button
                type="button"
                onClick={handleOpenModal}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-neutral-200 bg-[#212735] hover:bg-[#2b3346] border border-[#30394c] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Enter Booking Details Online</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 text-[11px] text-neutral-400 pt-1">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Clean AC
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> 15-Min Arrival
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> GST Invoice
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
