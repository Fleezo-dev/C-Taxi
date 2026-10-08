import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { ExternalLink, Clock, Route, AlertCircle } from 'lucide-react';
import { RouteResult, LocationPoint } from '../services/routingService';

interface RouteMapProps {
  pickup: LocationPoint;
  drop: LocationPoint;
  route: RouteResult | null;
  isLoading?: boolean;
  className?: string;
}

export const RouteMap: React.FC<RouteMapProps> = ({
  pickup,
  drop,
  route,
  isLoading = false,
  className = ''
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layerGroupRef = useRef<L.LayerGroup | null>(null);

  // Safe external Google Maps navigation link using coordinates
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${pickup.lat},${pickup.lng}&destination=${drop.lat},${drop.lng}`;

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        zoomControl: true,
        attributionControl: true,
        scrollWheelZoom: false,
        dragging: !L.Browser.mobile
      }).setView([pickup.lat, pickup.lng], 12);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
        maxZoom: 19,
        subdomains: 'abcd'
      }).addTo(map);

      mapInstanceRef.current = map;
      layerGroupRef.current = L.layerGroup().addTo(map);
    }

    const map = mapInstanceRef.current;
    const layerGroup = layerGroupRef.current;

    if (!map || !layerGroup) return;

    layerGroup.clearLayers();

    // Custom distinct markers
    const pickupIcon = L.divIcon({
      className: 'custom-pickup-marker',
      html: `
        <div style="background-color: #10b981; color: #000; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; border: 2px solid #ffffff; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
          P
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    const dropIcon = L.divIcon({
      className: 'custom-drop-marker',
      html: `
        <div style="background-color: #fbbf24; color: #000; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; border: 2px solid #ffffff; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
          D
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    L.marker([pickup.lat, pickup.lng], { icon: pickupIcon })
      .bindPopup(`<b>Pickup:</b> ${pickup.name}`)
      .addTo(layerGroup);

    L.marker([drop.lat, drop.lng], { icon: dropIcon })
      .bindPopup(`<b>Drop:</b> ${drop.name}`)
      .addTo(layerGroup);

    let bounds: L.LatLngBounds;

    if (route && route.coordinates && route.coordinates.length > 0) {
      const polyline = L.polyline(route.coordinates, {
        color: '#f59e0b',
        weight: 4,
        opacity: 0.9,
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(layerGroup);

      bounds = polyline.getBounds();
    } else {
      bounds = L.latLngBounds([
        [pickup.lat, pickup.lng],
        [drop.lat, drop.lng]
      ]);
    }

    try {
      map.fitBounds(bounds, {
        padding: [30, 30],
        maxZoom: 14
      });
    } catch {
      map.setView([pickup.lat, pickup.lng], 11);
    }

    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 150);

    return () => clearTimeout(timer);
  }, [pickup, drop, route]);

  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-[#2d3444] bg-[#141720] flex flex-col ${className}`}>
      
      {/* Route Status Strip */}
      <div className="p-3 sm:px-4 bg-[#181d28] border-b border-[#2a3140] flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-3">
          {isLoading ? (
            <span className="text-neutral-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Calculating road distance...
            </span>
          ) : route ? (
            <span className="flex items-center gap-1.5 font-bold text-amber-400">
              <Route className="w-3.5 h-3.5" />
              {route.distanceKm} km driving route
              <span className="text-neutral-500 font-normal">·</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Clock className="w-3 h-3" /> ~{route.durationFormatted}
              </span>
            </span>
          ) : (
            <span className="text-neutral-400 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400/80" />
              Approximate route shown
            </span>
          )}
        </div>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-amber-400 font-semibold inline-flex items-center gap-1 transition-colors hover:underline text-[11px]"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Leaflet Map Canvas */}
      <div 
        ref={mapContainerRef} 
        className="w-full h-44 sm:h-56 z-10" 
        style={{ minHeight: '170px' }}
      />

      {/* Map Legend Footer */}
      <div className="px-3.5 py-2 bg-[#12151d] border-t border-[#222734] flex items-center justify-between text-[11px] text-neutral-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-neutral-300 font-medium">Pickup</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-neutral-300 font-medium">Drop</span>
          </span>
        </div>
        <span className="text-[10px] text-neutral-500">Live Interactive Route Map</span>
      </div>

    </div>
  );
};
