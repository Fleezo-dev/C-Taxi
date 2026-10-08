/**
 * C Taxi Pricing & Calculation Engine (Exact match to GetCabs tariff math)
 * Client Domain: Ctaxi.co.in
 * Client Phone: 9089223344
 */

import { HILL_STATIONS, FIXED_ONEWAY_RATES } from '../data/getcabsData';

export function isHillStation(text1: string = '', text2: string = ''): boolean {
  const combined = (String(text1) + ' ' + String(text2)).toLowerCase();
  return HILL_STATIONS.some(kw => combined.includes(kw));
}

export function isOotyRoute(text1: string = '', text2: string = ''): boolean {
  const combined = (String(text1) + ' ' + String(text2)).toLowerCase();
  return combined.includes('ooty');
}

export function formatPriceRange(exactPrice: number): string {
  const exact = Math.round(exactPrice);
  return `₹${exact.toLocaleString('en-IN')}`;
}

export function calculateLocalFare(km: number | string, pickup: string = '', drop: string = ''): number {
  const dist = Math.max(0, parseFloat(String(km)) || 0);
  let fare = 75 + (dist * 28);
  const combined = (String(pickup) + ' ' + String(drop)).toLowerCase();
  const borderOutskirts = [
    'karumathampatti', 'karanampettai', 'paapampatti', 'ganeshapuram',
    'kovilpalayam', 'karamadai', 'booluvampatti', 'pooluvapatti',
    'ettimadai', 'kinathukadavu'
  ];
  if (borderOutskirts.some(loc => combined.includes(loc))) {
    fare += 100;
  }
  return Math.round(fare);
}

export function calculateOnewayFare(km: number | string, destName: string = '', pickupName: string = ''): number {
  const normDrop = String(destName).toLowerCase().trim();
  const normPickup = String(pickupName).toLowerCase().trim();

  // Check fixed tariff dictionary match
  for (const key in FIXED_ONEWAY_RATES) {
    if (normDrop.includes(key) || normPickup.includes(key)) {
      return FIXED_ONEWAY_RATES[key];
    }
  }

  const dist = Math.max(0, parseFloat(String(km)) || 0);
  if (dist <= 100) {
    return dist * 2 * 17;
  } else {
    return (dist * 2 * 14) + 400;
  }
}

export function calculateOutstationFare(roundTripKm: number | string, _isHills: boolean = false): number {
  const dist = Math.max(0, parseFloat(String(roundTripKm)) || 0);
  if (dist <= 200) {
    return dist * 17;
  } else {
    return (dist * 14) + 400;
  }
}

export function calculateHourlyFare(hours: number | string): number {
  const hrs = parseInt(String(hours), 10) || 1;
  if (hrs >= 12) return 3500;
  if (hrs >= 10) return 3000;
  return hrs * 350;
}

export function estimateLocalDistance(pickup: string = '', drop: string = ''): number {
  const p = String(pickup).toLowerCase().trim();
  const d = String(drop).toLowerCase().trim();
  if (!p || !d) return 0;

  // Specific location pair distances in Kovai (in KM)
  if ((p.includes('airport') && d.includes('railway')) || (p.includes('railway') && d.includes('airport'))) return 11;
  if ((p.includes('airport') && d.includes('gandhipuram')) || (p.includes('gandhipuram') && d.includes('airport'))) return 10;
  if ((p.includes('airport') && d.includes('rs puram')) || (p.includes('rs puram') && d.includes('airport'))) return 13;
  if ((p.includes('airport') && d.includes('saravanampatti')) || (p.includes('saravanampatti') && d.includes('airport'))) return 12;
  if ((p.includes('airport') && d.includes('peelamedu')) || (p.includes('peelamedu') && d.includes('airport'))) return 5;
  if ((p.includes('gandhipuram') && d.includes('rs puram')) || (p.includes('rs puram') && d.includes('gandhipuram'))) return 4;
  if ((p.includes('gandhipuram') && d.includes('peelamedu')) || (p.includes('peelamedu') && d.includes('gandhipuram'))) return 6;
  if ((p.includes('gandhipuram') && d.includes('saravanampatti')) || (p.includes('saravanampatti') && d.includes('gandhipuram'))) return 9;
  if ((p.includes('gandhipuram') && d.includes('ukkadam')) || (p.includes('ukkadam') && d.includes('gandhipuram'))) return 4;
  if ((p.includes('gandhipuram') && d.includes('singanallur')) || (p.includes('singanallur') && d.includes('gandhipuram'))) return 8;
  if ((p.includes('isha') || p.includes('adiyogi')) || (d.includes('isha') || d.includes('adiyogi'))) return 33;
  if (p.includes('marudhamalai') || d.includes('marudhamalai')) return 15;
  if (p.includes('mettupalayam') || d.includes('mettupalayam')) return 37;

  // Default estimate when both pickup and dropoff are entered
  return 8;
}
