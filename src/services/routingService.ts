export interface LocationPoint {
  id: string;
  name: string;
  formattedAddress: string;
  lat: number;
  lng: number;
  category?: 'transit' | 'local' | 'it_hub' | 'tourist' | 'airport' | 'temple';
}

export interface RouteResult {
  distanceKm: number;
  durationMinutes: number;
  durationFormatted: string;
  coordinates: [number, number][]; // [lat, lng] for Leaflet polyline
  isEstimateFallback?: boolean;
}

// Bounded in-memory LRU cache to prevent memory leaks
class BoundedCache<K, V> {
  private maxEntries: number;
  private cache: Map<K, V>;

  constructor(maxEntries: number = 60) {
    this.maxEntries = maxEntries;
    this.cache = new Map<K, V>();
  }

  get(key: K): V | undefined {
    const value = this.cache.get(key);
    if (value !== undefined) {
      // Refresh key position
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }

  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxEntries) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) {
        this.cache.delete(firstKey);
      }
    }
    this.cache.set(key, value);
  }

  has(key: K): boolean {
    return this.cache.has(key);
  }
}

// Pre-verified Coimbatore location dataset for instant 0ms responses
export const POPULAR_COIMBATORE_LOCATIONS: LocationPoint[] = [
  {
    id: "loc_gandhipuram",
    name: "Gandhipuram Central Bus Stand",
    formattedAddress: "Cross Cut Road, Gandhipuram, Coimbatore, Tamil Nadu 641012",
    lat: 11.0168,
    lng: 76.9676,
    category: "transit"
  },
  {
    id: "loc_airport",
    name: "Coimbatore International Airport (CJB)",
    formattedAddress: "Airport Road, Peelamedu, Coimbatore, Tamil Nadu 641014",
    lat: 11.0300,
    lng: 77.0434,
    category: "airport"
  },
  {
    id: "loc_rly_station",
    name: "Coimbatore Junction Railway Station (CBE)",
    formattedAddress: "Station Road, Gopalapuram, Coimbatore, Tamil Nadu 641018",
    lat: 10.9984,
    lng: 76.9632,
    category: "transit"
  },
  {
    id: "loc_rs_puram",
    name: "RS Puram (DB Road)",
    formattedAddress: "Diwan Bahadur Road, RS Puram, Coimbatore, Tamil Nadu 641002",
    lat: 11.0089,
    lng: 76.9507,
    category: "local"
  },
  {
    id: "loc_peelamedu",
    name: "Peelamedu (PSG Tech / Avinashi Road)",
    formattedAddress: "Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004",
    lat: 11.0248,
    lng: 77.0028,
    category: "local"
  },
  {
    id: "loc_saravanampatti",
    name: "Saravanampatti (IT Corridor / CHIL SEZ)",
    formattedAddress: "Sathy Road, Saravanampatti, Coimbatore, Tamil Nadu 641035",
    lat: 11.0805,
    lng: 76.9942,
    category: "it_hub"
  },
  {
    id: "loc_tidel_park",
    name: "TIDEL Park / Hopes College",
    formattedAddress: "Civil Aerodrome Post, Avinashi Road, Coimbatore, Tamil Nadu 641014",
    lat: 11.0261,
    lng: 77.0210,
    category: "it_hub"
  },
  {
    id: "loc_singanallur",
    name: "Singanallur Bus Stand (Trichy Road)",
    formattedAddress: "Trichy Road, Singanallur, Coimbatore, Tamil Nadu 641005",
    lat: 11.0016,
    lng: 77.0189,
    category: "transit"
  },
  {
    id: "loc_ganapathy",
    name: "Ganapathy (Sathy Road)",
    formattedAddress: "Sathy Road, Ganapathy, Coimbatore, Tamil Nadu 641006",
    lat: 11.0360,
    lng: 76.9780,
    category: "local"
  },
  {
    id: "loc_ukkadam",
    name: "Ukkadam Bus Stand (Palakkad Road)",
    formattedAddress: "Palakkad Main Road, Ukkadam, Coimbatore, Tamil Nadu 641001",
    lat: 10.9880,
    lng: 76.9580,
    category: "transit"
  },
  {
    id: "loc_vadavalli",
    name: "Vadavalli (Marudhamalai Road)",
    formattedAddress: "Marudhamalai Main Road, Vadavalli, Coimbatore, Tamil Nadu 641041",
    lat: 11.0280,
    lng: 76.9040,
    category: "local"
  },
  {
    id: "loc_isha",
    name: "Isha Yoga Center & 112ft Adiyogi",
    formattedAddress: "Velliangiri Foothills, Ishana Vihar, Coimbatore, Tamil Nadu 641114",
    lat: 10.9760,
    lng: 76.7350,
    category: "tourist"
  },
  {
    id: "loc_marudhamalai",
    name: "Marudhamalai Murugan Temple",
    formattedAddress: "Maruthamalai Temple Road, Somayampalayam, Coimbatore, Tamil Nadu 641046",
    lat: 11.0460,
    lng: 76.8520,
    category: "temple"
  },
  {
    id: "loc_eachanari",
    name: "Eachanari Vinayagar Temple",
    formattedAddress: "Pollachi Main Road, Eachanari, Coimbatore, Tamil Nadu 641021",
    lat: 10.9160,
    lng: 76.9740,
    category: "temple"
  },
  {
    id: "loc_thudiyalur",
    name: "Thudiyalur (Mettupalayam Road)",
    formattedAddress: "Mettupalayam Road, Thudiyalur, Coimbatore, Tamil Nadu 641034",
    lat: 11.0770,
    lng: 76.9380,
    category: "local"
  },
  {
    id: "loc_mettupalayam",
    name: "Mettupalayam (Nilgiri Foothills)",
    formattedAddress: "Mettupalayam, Coimbatore District, Tamil Nadu 641301",
    lat: 11.3000,
    lng: 76.9400,
    category: "transit"
  },
  {
    id: "loc_pollachi",
    name: "Pollachi Town Center",
    formattedAddress: "Pollachi, Coimbatore District, Tamil Nadu 642001",
    lat: 10.6609,
    lng: 77.0048,
    category: "transit"
  },
  {
    id: "loc_ooty",
    name: "Ooty (Udhagamandalam / Nilgiris)",
    formattedAddress: "Ooty Town Center, Nilgiris, Tamil Nadu 643001",
    lat: 11.4102,
    lng: 76.6950,
    category: "tourist"
  },
  {
    id: "loc_coonoor",
    name: "Coonoor (Sim's Park / Tea Estates)",
    formattedAddress: "Coonoor, Nilgiris District, Tamil Nadu 643101",
    lat: 11.3530,
    lng: 76.7959,
    category: "tourist"
  },
  {
    id: "loc_kotagiri",
    name: "Kotagiri (Kodanad Viewpoint)",
    formattedAddress: "Kotagiri, Nilgiris District, Tamil Nadu 643217",
    lat: 11.4230,
    lng: 76.8650,
    category: "tourist"
  },
  {
    id: "loc_valparai",
    name: "Valparai (Anamalai Tea Hills)",
    formattedAddress: "Valparai, Coimbatore District, Tamil Nadu 642127",
    lat: 10.3242,
    lng: 76.9558,
    category: "tourist"
  },
  {
    id: "loc_palani",
    name: "Palani Adivaram (Murugan Temple)",
    formattedAddress: "Palani Adivaram, Dindigul District, Tamil Nadu 624601",
    lat: 10.4500,
    lng: 77.5167,
    category: "temple"
  },
  {
    id: "loc_topslip",
    name: "Topslip (Anamalai Tiger Reserve)",
    formattedAddress: "Topslip, Pollachi Taluk, Tamil Nadu 642140",
    lat: 10.4850,
    lng: 76.8370,
    category: "tourist"
  },
  {
    id: "loc_kodaikanal",
    name: "Kodaikanal (Lake & Pillar Rocks)",
    formattedAddress: "Kodaikanal, Dindigul District, Tamil Nadu 624101",
    lat: 10.2381,
    lng: 77.4892,
    category: "tourist"
  },
  {
    id: "loc_munnar",
    name: "Munnar (Tea Plantations)",
    formattedAddress: "Munnar, Idukki District, Kerala 685612",
    lat: 10.0889,
    lng: 77.0595,
    category: "tourist"
  },
  {
    id: "loc_tiruppur",
    name: "Tiruppur (Old Bus Stand / Textile Market)",
    formattedAddress: "Tiruppur, Tamil Nadu 641604",
    lat: 11.1085,
    lng: 77.3411,
    category: "transit"
  },
  {
    id: "loc_palakkad",
    name: "Palakkad (Fort / Town Center)",
    formattedAddress: "Palakkad, Kerala 678001",
    lat: 10.7867,
    lng: 76.6548,
    category: "transit"
  }
];

const geocodeCache = new BoundedCache<string, LocationPoint[]>(60);
const routeCache = new BoundedCache<string, RouteResult>(60);

/**
 * Autocomplete place search with instant local search first, then debounced Nominatim fallback
 */
export async function searchLocations(query: string): Promise<LocationPoint[]> {
  const normalized = query.trim().toLowerCase();
  if (!normalized || normalized.length < 2) return [];

  if (geocodeCache.has(normalized)) {
    return geocodeCache.get(normalized)!;
  }

  // 1. Instant local verified database match
  const localMatches = POPULAR_COIMBATORE_LOCATIONS.filter(loc => {
    const nameLower = loc.name.toLowerCase();
    const addrLower = loc.formattedAddress.toLowerCase();
    
    return nameLower.includes(normalized) || 
           addrLower.includes(normalized) ||
           (normalized.includes('gandhi') && nameLower.includes('gandhipuram')) ||
           (normalized.includes('bus') && (nameLower.includes('gandhipuram') || nameLower.includes('singanallur') || nameLower.includes('ukkadam'))) ||
           (normalized.includes('station') && nameLower.includes('railway')) ||
           (normalized.includes('flight') && nameLower.includes('airport'));
  });

  if (localMatches.length >= 3) {
    geocodeCache.set(normalized, localMatches);
    return localMatches;
  }

  // 2. Fetch from OpenStreetMap Nominatim with Coimbatore bounding bias
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ' Coimbatore')}&countrycodes=in&limit=6&addressdetails=1`;
    const response = await fetch(nominatimUrl, {
      headers: {
        'Accept': 'application/json'
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      const onlineResults: LocationPoint[] = data.map((item: any) => ({
        id: `osm_${item.place_id}`,
        name: item.name || item.display_name.split(',')[0],
        formattedAddress: item.display_name,
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lon),
        category: 'local'
      }));

      const combined = [...localMatches];
      for (const res of onlineResults) {
        const isDuplicate = combined.some(c => 
          Math.abs(c.lat - res.lat) < 0.005 && Math.abs(c.lng - res.lng) < 0.005
        );
        if (!isDuplicate) {
          combined.push(res);
        }
      }

      const finalResults = combined.slice(0, 7);
      geocodeCache.set(normalized, finalResults);
      return finalResults;
    }
  } catch {
    // Return local matches if offline or timeout
  }

  return localMatches;
}

/**
 * Calculates straight-line distance in km (Haversine formula).
 * Strictly used for validation and sanity checking only.
 */
export function calculateHaversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Fetch real driving route distance and geometry via Open Source Routing Machine (OSRM).
 * Returns null if the driving route is unavailable rather than fabricating a fake road distance.
 */
export async function getDrivingRoute(
  pickup: { lat: number; lng: number },
  drop: { lat: number; lng: number }
): Promise<RouteResult | null> {
  const cacheKey = `${pickup.lat.toFixed(4)},${pickup.lng.toFixed(4)}->${drop.lat.toFixed(4)},${drop.lng.toFixed(4)}`;

  if (routeCache.has(cacheKey)) {
    return routeCache.get(cacheKey)!;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${pickup.lng},${pickup.lat};${drop.lng},${drop.lat}?overview=full&geometries=geojson`;

    const res = await fetch(osrmUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0];
        const distanceKm = Math.max(1, Math.round((route.distance / 1000) * 10) / 10);
        const durationMinutes = Math.max(5, Math.round(route.duration / 60));
        
        // GeoJSON coordinates are [lng, lat], convert to Leaflet [lat, lng]
        const coordinates: [number, number][] = route.geometry.coordinates.map(
          (c: [number, number]) => [c[1], c[0]]
        );

        const hours = Math.floor(durationMinutes / 60);
        const mins = durationMinutes % 60;
        const durationFormatted = hours > 0 ? `${hours}h ${mins}m` : `${mins} mins`;

        const result: RouteResult = {
          distanceKm,
          durationMinutes,
          durationFormatted,
          coordinates,
          isEstimateFallback: false
        };

        routeCache.set(cacheKey, result);
        return result;
      }
    }
  } catch {
    // Network or OSRM unavailable
  }

  return null;
}
