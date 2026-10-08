import React, { useState, useEffect, useRef } from 'react';
import {
  calculateLocalFare,
  calculateOnewayFare,
  calculateOutstationFare,
  calculateHourlyFare,
  estimateLocalDistance,
  isHillStation,
  formatPriceRange
} from '../services/pricingEngine';
import { LOCAL_SUGGESTIONS } from '../data/getcabsData';

export interface BookingSubmission {
  serviceType: 'local' | 'oneway' | 'outstation' | 'hourly';
  pickup: string;
  drop: string;
  dateTime: string;
  phone: string;
  vehicle: string;
  fareEstimate: string;
  extraInfo?: string;
}

interface HeroBookingSectionProps {
  onBook: (data: BookingSubmission) => void;
}

export const HeroBookingSection: React.FC<HeroBookingSectionProps> = ({ onBook }) => {
  const [activeTab, setActiveTab] = useState<'local' | 'oneway' | 'outstation' | 'hourly'>('local');

  // Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Form States - Local
  const [localPickup, setLocalPickup] = useState('');
  const [localDrop, setLocalDrop] = useState('');
  const [localDate, setLocalDate] = useState('');
  const [localPhone, setLocalPhone] = useState('');
  const [localCab, setLocalCab] = useState('sedan');

  // Form States - Oneway
  const [onewayPickup, setOnewayPickup] = useState('Coimbatore');
  const [onewayDrop, setOnewayDrop] = useState('Ooty Bus Stand');
  const [onewayDate, setOnewayDate] = useState('');
  const [onewayPhone, setOnewayPhone] = useState('');
  const [onewayCab, setOnewayCab] = useState('sedan');

  // Form States - Outstation
  const [outstationPickup, setOutstationPickup] = useState('Coimbatore');
  const [outstationDrop, setOutstationDrop] = useState('Ooty');
  const [outstationStartDate, setOutstationStartDate] = useState('');
  const [outstationReturnDate, setOutstationReturnDate] = useState('');
  const [outstationIsHills, setOutstationIsHills] = useState('no');
  const [outstationPhone, setOutstationPhone] = useState('');
  const [outstationCab, setOutstationCab] = useState('sedan');

  // Form States - Hourly
  const [hourlyPkg, setHourlyPkg] = useState('10');
  const [hourlyPickup, setHourlyPickup] = useState('');
  const [hourlyDate, setHourlyDate] = useState('');
  const [hourlyPhone, setHourlyPhone] = useState('');
  const [hourlyCab, setHourlyCab] = useState('sedan');
  const [hourlyNotes, setHourlyNotes] = useState('');

  // Autocomplete Suggestions helper
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  // Default dates
  useEffect(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 30);
    const isoString = now.toISOString().slice(0, 16);
    setLocalDate(isoString);
    setOnewayDate(isoString);
    setHourlyDate(isoString);

    const todayStr = new Date().toISOString().split('T')[0];
    const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    setOutstationStartDate(todayStr);
    setOutstationReturnDate(tomorrowStr);
  }, []);

  // Canvas Highway Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 450;
    };
    window.addEventListener('resize', handleResize);

    const streaks: Array<{ x: number; y: number; speed: number; color: string; length: number }> = [];
    for (let i = 0; i < 40; i++) {
      streaks.push({
        x: Math.random() * 2 - 1,
        y: Math.random(),
        speed: Math.random() * 0.02 + 0.015,
        color: Math.random() > 0.4 ? 'rgba(217, 4, 41, ' : Math.random() > 0.5 ? 'rgba(255, 183, 3, ' : 'rgba(255, 255, 255, ',
        length: Math.random() * 80 + 40
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Night sky gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#0b1329');
      skyGrad.addColorStop(0.5, '#111827');
      skyGrad.addColorStop(1, '#080d1a');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height * 0.35;

      // Perspective Road Base
      ctx.beginPath();
      ctx.moveTo(cx - width * 0.1, cy);
      ctx.lineTo(cx + width * 0.1, cy);
      ctx.lineTo(width * 1.2, height);
      ctx.lineTo(-width * 0.2, height);
      ctx.closePath();
      ctx.fillStyle = '#0f172a';
      ctx.fill();

      // Highway Streaks
      streaks.forEach(s => {
        s.y += s.speed;
        if (s.y > 1) {
          s.y = 0;
          s.x = Math.random() * 2 - 1;
        }
        const px = cx + s.x * (s.y * width * 0.6);
        const py = cy + s.y * (height - cy);
        const pLength = s.length * s.y;
        const opacity = Math.min(s.y * 1.5, 0.9);

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + s.x * pLength * 0.2, py + pLength);
        ctx.strokeStyle = `${s.color}${opacity})`;
        ctx.lineWidth = Math.max(1, s.y * 5);
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Live Fare Calculations
  const getLocalFare = (): string => {
    if (!localPickup.trim() || !localDrop.trim()) return 'Enter pickup & drop';
    const dist = estimateLocalDistance(localPickup, localDrop);
    const price = calculateLocalFare(dist, localPickup, localDrop);
    return formatPriceRange(price);
  };

  const getOnewayFare = (): string => {
    if (!onewayDrop.trim()) return 'Enter drop destination';
    const price = calculateOnewayFare(85, onewayDrop, onewayPickup);
    return formatPriceRange(price);
  };

  const getOutstationFare = (): string => {
    const isHills = outstationIsHills === 'yes' || isHillStation(outstationPickup, outstationDrop);
    const dist = isHills ? 300 : 250;
    const price = calculateOutstationFare(dist, isHills);
    return formatPriceRange(price);
  };

  const getHourlyFare = (): string => {
    const price = calculateHourlyFare(hourlyPkg);
    return formatPriceRange(price);
  };

  // Form Submissions
  const handleLocalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({
      serviceType: 'local',
      pickup: localPickup || 'Gandhipuram, Coimbatore',
      drop: localDrop || 'Coimbatore Airport CJB',
      dateTime: localDate,
      phone: localPhone,
      vehicle: localCab === 'sedan' ? 'Sedan (Dzire / Etios)' : localCab === 'prime_sedan' ? 'Prime Sedan (Ciaz / Aura)' : localCab === 'prime_suv' ? 'Prime SUV (Ertiga / XL6)' : 'Premium SUV (Innova Crysta)',
      fareEstimate: getLocalFare()
    });
  };

  const handleOnewaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({
      serviceType: 'oneway',
      pickup: onewayPickup || 'Coimbatore',
      drop: onewayDrop || 'Ooty Bus Stand',
      dateTime: onewayDate,
      phone: onewayPhone,
      vehicle: onewayCab === 'sedan' ? 'Sedan (Dzire / Etios)' : onewayCab === 'prime_sedan' ? 'Prime Sedan (Ciaz / Aura)' : onewayCab === 'prime_suv' ? 'Prime SUV (Ertiga / XL6)' : 'Premium SUV (Innova Crysta)',
      fareEstimate: getOnewayFare()
    });
  };

  const handleOutstationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({
      serviceType: 'outstation',
      pickup: outstationPickup || 'Coimbatore',
      drop: outstationDrop || 'Ooty',
      dateTime: `${outstationStartDate} to ${outstationReturnDate}`,
      phone: outstationPhone,
      vehicle: outstationCab === 'sedan' ? 'Sedan (Dzire / Etios)' : outstationCab === 'prime_sedan' ? 'Prime Sedan (Ciaz / Aura)' : outstationCab === 'prime_suv' ? 'Prime SUV (Ertiga / XL6)' : 'Premium SUV (Innova Crysta)',
      fareEstimate: getOutstationFare(),
      extraInfo: outstationIsHills === 'yes' ? 'Hill Station Route Included' : 'Round Trip Plain Route'
    });
  };

  const handleHourlySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({
      serviceType: 'hourly',
      pickup: hourlyPickup || 'Coimbatore City',
      drop: `${hourlyPkg} Hours Rental Package`,
      dateTime: hourlyDate,
      phone: hourlyPhone,
      vehicle: hourlyCab === 'sedan' ? 'Sedan (Dzire / Etios)' : hourlyCab === 'prime_sedan' ? 'Prime Sedan (Ciaz / Aura)' : hourlyCab === 'prime_suv' ? 'Prime SUV (Ertiga / XL6)' : 'Premium SUV (Innova Crysta)',
      fareEstimate: getHourlyFare(),
      extraInfo: hourlyNotes ? `Notes: ${hourlyNotes}` : undefined
    });
  };

  const renderSuggestions = (fieldKey: string, setter: (val: string) => void) => {
    if (focusedInput !== fieldKey) return null;
    return (
      <div
        className="autocomplete-dropdown"
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: '#ffffff',
          border: '1px solid #cbd5e1',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
          zIndex: 50,
          maxHeight: '180px',
          overflowY: 'auto'
        }}
      >
        {LOCAL_SUGGESTIONS.slice(0, 8).map((s, idx) => (
          <div
            key={idx}
            onMouseDown={() => {
              setter(s);
              setFocusedInput(null);
            }}
            style={{
              padding: '8px 12px',
              fontSize: '0.85rem',
              color: '#1f2937',
              cursor: 'pointer',
              borderBottom: '1px solid #f1f5f9'
            }}
            className="hover:bg-slate-100"
          >
            📍 {s}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="hero-booking-section" id="booking-form-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Highway Night Simulation Canvas */}
      <canvas
        ref={canvasRef}
        className="hero-canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-header-text">
          <span className="badge" style={{ background: 'var(--brand-yellow)', color: 'var(--brand-dark)' }}>
            24/7 Instant Cab Service
          </span>
          <h1>
            C Taxi - <span>Safe, Affordable & On-Time</span> Rides
          </h1>
          <p>
            Book Local Rides, Oneway Cabs, Outstation Trips, and Hourly Package Rentals with fixed transparent fares across Coimbatore.
          </p>
        </div>

        {/* MAIN BOOKING FORM CONTAINER DIRECTLY BELOW HEADER */}
        <div className="main-booking-box">
          {/* 4 Ride Mode Tabs */}
          <div className="ride-tabs-nav">
            <button
              type="button"
              className={`tab-link ${activeTab === 'local' ? 'active' : ''}`}
              onClick={() => setActiveTab('local')}
            >
              <span>🏙️</span> Local Rides
            </button>
            <button
              type="button"
              className={`tab-link ${activeTab === 'oneway' ? 'active' : ''}`}
              onClick={() => setActiveTab('oneway')}
            >
              <span>🚗</span> Oneway
            </button>
            <button
              type="button"
              className={`tab-link ${activeTab === 'outstation' ? 'active' : ''}`}
              onClick={() => setActiveTab('outstation')}
            >
              <span>⛰️</span> Outstation
            </button>
            <button
              type="button"
              className={`tab-link ${activeTab === 'hourly' ? 'active' : ''}`}
              onClick={() => setActiveTab('hourly')}
            >
              <span>⏱️</span> Hourly Package
            </button>
          </div>

          {/* TAB 1: LOCAL RIDES PANEL */}
          {activeTab === 'local' && (
            <div className="tab-content-panel active" id="tab-local">
              <form onSubmit={handleLocalSubmit} id="form-local">
                <div className="form-grid-3">
                  <div className="field-group" style={{ position: 'relative' }}>
                    <label htmlFor="local-pickup">📍 Pickup Location</label>
                    <input
                      type="text"
                      className="input-ctrl"
                      id="local-pickup"
                      placeholder="e.g. Gandhipuram, Peelamedu, RS Puram"
                      value={localPickup}
                      onChange={(e) => setLocalPickup(e.target.value)}
                      onFocus={() => setFocusedInput('local-pickup')}
                      onBlur={() => setTimeout(() => setFocusedInput(null), 200)}
                      required
                    />
                    {renderSuggestions('local-pickup', setLocalPickup)}
                  </div>
                  <div className="field-group" style={{ position: 'relative' }}>
                    <label htmlFor="local-drop">🏁 Dropoff Location</label>
                    <input
                      type="text"
                      className="input-ctrl"
                      id="local-drop"
                      placeholder="e.g. Coimbatore Airport CJB or Railway Station"
                      value={localDrop}
                      onChange={(e) => setLocalDrop(e.target.value)}
                      onFocus={() => setFocusedInput('local-drop')}
                      onBlur={() => setTimeout(() => setFocusedInput(null), 200)}
                      required
                    />
                    {renderSuggestions('local-drop', setLocalDrop)}
                  </div>
                  <div className="field-group">
                    <label htmlFor="local-date">📅 Pickup Date & Time</label>
                    <input
                      type="datetime-local"
                      className="input-ctrl"
                      id="local-date"
                      value={localDate}
                      onChange={(e) => setLocalDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-grid-3" style={{ marginTop: '16px' }}>
                  <div className="field-group">
                    <label htmlFor="local-phone">📱 Mobile Number</label>
                    <input
                      type="tel"
                      className="input-ctrl"
                      id="local-phone"
                      placeholder="Your 10-digit mobile number"
                      value={localPhone}
                      onChange={(e) => setLocalPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field-group">
                    <label htmlFor="local-cab-type">🚗 Vehicle Type</label>
                    <select
                      className="input-ctrl"
                      id="local-cab-type"
                      value={localCab}
                      onChange={(e) => setLocalCab(e.target.value)}
                    >
                      <option value="sedan">Sedan (Dzire / Etios)</option>
                      <option value="prime_sedan">Prime Sedan (Ciaz / Sunny / Aura)</option>
                      <option value="prime_suv">Prime SUV (Ertiga / XL6)</option>
                      <option value="premium_suv">Premium SUV (Innova Crysta / Hycross)</option>
                    </select>
                  </div>
                  <div className="field-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <button type="submit" className="btn btn-red" style={{ height: '46px', width: '100%' }}>
                      Book Local Taxi Now
                    </button>
                  </div>
                </div>
                <div className="booking-summary-bar">
                  <div className="summary-info">
                    <span>⚡ Quick Driver Dispatch</span>
                    <span>• AC Included</span>
                    <span>• Transparent Meter Rates</span>
                  </div>
                  <div>
                    <span>Estimated Fare: </span>
                    <span className="price-tag" id="local-fare-display">
                      {getLocalFare()}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '8px', textAlign: 'right' }}>
                  *Toll plaza charges, parking fees, and interstate entry permits are extra at actuals where applicable.
                </p>
              </form>
            </div>
          )}

          {/* TAB 2: ONEWAY PANEL */}
          {activeTab === 'oneway' && (
            <div className="tab-content-panel active" id="tab-oneway">
              <form onSubmit={handleOnewaySubmit} id="form-oneway">
                <div className="form-grid-3">
                  <div className="field-group" style={{ position: 'relative' }}>
                    <label htmlFor="oneway-pickup">📍 Pickup City / Area</label>
                    <input
                      type="text"
                      className="input-ctrl"
                      id="oneway-pickup"
                      placeholder="e.g. Coimbatore, Gandhipuram, RS Puram"
                      value={onewayPickup}
                      onChange={(e) => setOnewayPickup(e.target.value)}
                      onFocus={() => setFocusedInput('oneway-pickup')}
                      onBlur={() => setTimeout(() => setFocusedInput(null), 200)}
                      required
                    />
                    {renderSuggestions('oneway-pickup', setOnewayPickup)}
                  </div>
                  <div className="field-group" style={{ position: 'relative' }}>
                    <label htmlFor="oneway-drop">🏁 Destination City / Drop Location</label>
                    <input
                      type="text"
                      className="input-ctrl"
                      id="oneway-drop"
                      placeholder="e.g. Ooty, Munnar, Tiruppur, Palakkad, Erode"
                      value={onewayDrop}
                      onChange={(e) => setOnewayDrop(e.target.value)}
                      onFocus={() => setFocusedInput('oneway-drop')}
                      onBlur={() => setTimeout(() => setFocusedInput(null), 200)}
                      required
                    />
                    {renderSuggestions('oneway-drop', setOnewayDrop)}
                  </div>
                  <div className="field-group">
                    <label htmlFor="oneway-date">📅 Departure Date & Time</label>
                    <input
                      type="datetime-local"
                      className="input-ctrl"
                      id="oneway-date"
                      value={onewayDate}
                      onChange={(e) => setOnewayDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-grid-3" style={{ marginTop: '16px' }}>
                  <div className="field-group">
                    <label htmlFor="oneway-phone">📱 Mobile Number</label>
                    <input
                      type="tel"
                      className="input-ctrl"
                      id="oneway-phone"
                      placeholder="Your 10-digit mobile number"
                      value={onewayPhone}
                      onChange={(e) => setOnewayPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field-group">
                    <label htmlFor="oneway-cab-type">🚗 Cab Choice</label>
                    <select
                      className="input-ctrl"
                      id="oneway-cab-type"
                      value={onewayCab}
                      onChange={(e) => setOnewayCab(e.target.value)}
                    >
                      <option value="sedan">Sedan (Dzire / Etios)</option>
                      <option value="prime_sedan">Prime Sedan (Ciaz / Sunny / Aura)</option>
                      <option value="prime_suv">Prime SUV (Ertiga / XL6)</option>
                      <option value="premium_suv">Premium SUV (Innova Crysta / Hycross)</option>
                    </select>
                  </div>
                  <div className="field-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <button type="submit" className="btn btn-red" style={{ height: '46px', width: '100%' }}>
                      Book Oneway Cab
                    </button>
                  </div>
                </div>
                <div className="booking-summary-bar">
                  <div className="summary-info">
                    <span>🏷️ Pay One-Way Fare Only</span>
                    <span>• Auto Hill Charges Detection</span>
                    <span>• Zero Return Fare Policy</span>
                  </div>
                  <div>
                    <span>Estimated Fare: </span>
                    <span className="price-tag" id="oneway-fare-display">
                      {getOnewayFare()}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '8px', textAlign: 'right' }}>
                  *Toll plaza charges, parking fees, and interstate entry permits are extra at actuals where applicable.
                </p>
              </form>
            </div>
          )}

          {/* TAB 3: OUTSTATION PANEL */}
          {activeTab === 'outstation' && (
            <div className="tab-content-panel active" id="tab-outstation">
              <form onSubmit={handleOutstationSubmit} id="form-outstation">
                <div className="form-grid-5">
                  <div className="field-group" style={{ position: 'relative' }}>
                    <label htmlFor="outstation-pickup">📍 From City</label>
                    <input
                      type="text"
                      className="input-ctrl"
                      id="outstation-pickup"
                      placeholder="e.g. Coimbatore, Airport CJB"
                      value={outstationPickup}
                      onChange={(e) => setOutstationPickup(e.target.value)}
                      onFocus={() => setFocusedInput('outstation-pickup')}
                      onBlur={() => setTimeout(() => setFocusedInput(null), 200)}
                      required
                    />
                    {renderSuggestions('outstation-pickup', setOutstationPickup)}
                  </div>
                  <div className="field-group" style={{ position: 'relative' }}>
                    <label htmlFor="outstation-drop">🏁 Destination Cities</label>
                    <input
                      type="text"
                      className="input-ctrl"
                      id="outstation-drop"
                      placeholder="e.g. Ooty, Munnar, Kodaikanal"
                      value={outstationDrop}
                      onChange={(e) => setOutstationDrop(e.target.value)}
                      onFocus={() => setFocusedInput('outstation-drop')}
                      onBlur={() => setTimeout(() => setFocusedInput(null), 200)}
                      required
                    />
                    {renderSuggestions('outstation-drop', setOutstationDrop)}
                  </div>
                  <div className="field-group">
                    <label htmlFor="outstation-start-date">📅 Start Date</label>
                    <input
                      type="date"
                      className="input-ctrl"
                      id="outstation-start-date"
                      value={outstationStartDate}
                      onChange={(e) => setOutstationStartDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field-group">
                    <label htmlFor="outstation-return-date">📅 Return Date</label>
                    <input
                      type="date"
                      className="input-ctrl"
                      id="outstation-return-date"
                      value={outstationReturnDate}
                      onChange={(e) => setOutstationReturnDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field-group">
                    <label htmlFor="outstation-is-hills">⛰️ Hill Station Route</label>
                    <select
                      className="input-ctrl"
                      id="outstation-is-hills"
                      value={outstationIsHills}
                      onChange={(e) => setOutstationIsHills(e.target.value)}
                    >
                      <option value="no">Auto-Detect / Plain Route</option>
                      <option value="yes">Yes - Hill Station Route</option>
                    </select>
                  </div>
                </div>
                <div className="form-grid-3" style={{ marginTop: '16px' }}>
                  <div className="field-group">
                    <label htmlFor="outstation-phone">📱 Mobile Number</label>
                    <input
                      type="tel"
                      className="input-ctrl"
                      id="outstation-phone"
                      placeholder="Your 10-digit mobile number"
                      value={outstationPhone}
                      onChange={(e) => setOutstationPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field-group">
                    <label htmlFor="outstation-cab-type">🚗 Vehicle Class</label>
                    <select
                      className="input-ctrl"
                      id="outstation-cab-type"
                      value={outstationCab}
                      onChange={(e) => setOutstationCab(e.target.value)}
                    >
                      <option value="sedan">Sedan (Dzire / Etios)</option>
                      <option value="prime_sedan">Prime Sedan (Ciaz / Sunny / Aura)</option>
                      <option value="prime_suv">Prime SUV (Ertiga / XL6)</option>
                      <option value="premium_suv">Premium SUV (Innova Crysta / Hycross)</option>
                    </select>
                  </div>
                  <div className="field-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <button type="submit" className="btn btn-red" style={{ height: '46px', width: '100%' }}>
                      Book Outstation Round Trip
                    </button>
                  </div>
                </div>
                <div className="booking-summary-bar">
                  <div className="summary-info">
                    <span>🛣️ Total Up & Down Round Trip</span>
                    <span>• Auto Hill Charges Applied</span>
                  </div>
                  <div>
                    <span>Estimated Fare: </span>
                    <span className="price-tag" id="outstation-fare-display">
                      {getOutstationFare()}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '8px', textAlign: 'right' }}>
                  *Toll plaza charges, parking fees, and interstate entry permits are extra at actuals where applicable.
                </p>
              </form>
            </div>
          )}

          {/* TAB 4: HOURLY PACKAGE PANEL */}
          {activeTab === 'hourly' && (
            <div className="tab-content-panel active" id="tab-hourly">
              <form onSubmit={handleHourlySubmit} id="form-hourly">
                <div className="form-grid-4">
                  <div className="field-group">
                    <label htmlFor="hourly-pkg-select">⏱️ Select Rental Duration</label>
                    <select
                      className="input-ctrl"
                      id="hourly-pkg-select"
                      value={hourlyPkg}
                      onChange={(e) => setHourlyPkg(e.target.value)}
                    >
                      <option value="1">1 Hour Rental (10 KM Package)</option>
                      <option value="2">2 Hours Rental (20 KM Package)</option>
                      <option value="3">3 Hours Rental (30 KM Package)</option>
                      <option value="4">4 Hours Rental (40 KM Package)</option>
                      <option value="5">5 Hours Rental (50 KM Package)</option>
                      <option value="6">6 Hours Rental (60 KM Package)</option>
                      <option value="8">8 Hours Rental (80 KM Package)</option>
                      <option value="10">10 Hours Rental (100 KM Package)</option>
                      <option value="12">12 Hours Rental (120 KM Package)</option>
                    </select>
                  </div>
                  <div className="field-group" style={{ position: 'relative' }}>
                    <label htmlFor="hourly-pickup">📍 Pickup Location</label>
                    <input
                      type="text"
                      className="input-ctrl"
                      id="hourly-pickup"
                      placeholder="e.g. Coimbatore Railway Station / RS Puram"
                      value={hourlyPickup}
                      onChange={(e) => setHourlyPickup(e.target.value)}
                      onFocus={() => setFocusedInput('hourly-pickup')}
                      onBlur={() => setTimeout(() => setFocusedInput(null), 200)}
                      required
                    />
                    {renderSuggestions('hourly-pickup', setHourlyPickup)}
                  </div>
                  <div className="field-group">
                    <label htmlFor="hourly-date">📅 Start Date & Time</label>
                    <input
                      type="datetime-local"
                      className="input-ctrl"
                      id="hourly-date"
                      value={hourlyDate}
                      onChange={(e) => setHourlyDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field-group">
                    <label htmlFor="hourly-phone">📱 Mobile Number</label>
                    <input
                      type="tel"
                      className="input-ctrl"
                      id="hourly-phone"
                      placeholder="Your 10-digit mobile number"
                      value={hourlyPhone}
                      onChange={(e) => setHourlyPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-grid-3" style={{ marginTop: '16px' }}>
                  <div className="field-group">
                    <label htmlFor="hourly-cab-type">🚗 Vehicle Category</label>
                    <select
                      className="input-ctrl"
                      id="hourly-cab-type"
                      value={hourlyCab}
                      onChange={(e) => setHourlyCab(e.target.value)}
                    >
                      <option value="sedan">Sedan (Dzire / Etios)</option>
                      <option value="prime_sedan">Prime Sedan (Ciaz / Sunny / Aura)</option>
                      <option value="prime_suv">Prime SUV (Ertiga / XL6)</option>
                      <option value="premium_suv">Premium SUV (Innova Crysta / Hycross)</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label htmlFor="hourly-instructions">📝 Special Instructions</label>
                    <input
                      type="text"
                      className="input-ctrl"
                      id="hourly-instructions"
                      placeholder="e.g. Shopping stops in RS Puram"
                      value={hourlyNotes}
                      onChange={(e) => setHourlyNotes(e.target.value)}
                    />
                  </div>
                  <div className="field-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <button type="submit" className="btn btn-red" style={{ height: '46px', width: '100%' }}>
                      Book Hourly Rental
                    </button>
                  </div>
                </div>
                <div className="booking-summary-bar">
                  <div className="summary-info">
                    <span>⏱️ Hourly City Package</span>
                    <span>• Multiple City Stops Allowed</span>
                  </div>
                  <div>
                    <span>Estimated Fare: </span>
                    <span className="price-tag" id="hourly-fare-display">
                      {getHourlyFare()}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '8px', textAlign: 'right' }}>
                  *Toll plaza charges, parking fees, and interstate entry permits are extra at actuals where applicable.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
