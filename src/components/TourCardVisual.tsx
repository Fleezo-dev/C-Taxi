import React from 'react';
import { Mountain, Compass, Sparkles, Sun, Trees, Landmark, Building2, Trees as PalmTree } from 'lucide-react';

interface TourCardVisualProps {
  slug: string;
  title: string;
  badge: string;
  className?: string;
}

export const TourCardVisual: React.FC<TourCardVisualProps> = ({ slug, title, badge, className = '' }) => {
  const cleanSlug = slug.toLowerCase();

  // 1. Ooty Nilgiri Hills
  if (cleanSlug.includes('ooty')) {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-[#0c221b] via-[#112d24] to-[#12161f] p-6 flex flex-col justify-between border-b border-[#232936] ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
        
        <div className="absolute bottom-0 right-0 left-0 h-28 opacity-25 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full text-emerald-400 fill-current">
            <path d="M0,150 L0,90 L60,40 L130,95 L190,30 L260,85 L340,15 L420,70 L500,35 L500,150 Z" />
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/90 px-2.5 py-1 rounded-md border border-emerald-500/40">
            {badge}
          </span>
          <span className="text-[11px] font-mono font-semibold text-neutral-300 flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded">
            <Mountain className="w-3.5 h-3.5 text-emerald-400" /> 2,240m Altitude
          </span>
        </div>

        <div className="relative z-10 mt-8">
          <div className="text-amber-400 font-mono text-xs font-bold tracking-wider uppercase mb-1">
            Nilgiri Circuit · 36 Hairpin Certified
          </div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight">
            {title}
          </h4>
        </div>
      </div>
    );
  }

  // 2. Coonoor & Kotagiri
  if (cleanSlug.includes('coonoor') || cleanSlug.includes('kotagiri')) {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-[#18231c] via-[#1b2b23] to-[#12161f] p-6 flex flex-col justify-between border-b border-[#232936] ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
        
        <div className="absolute bottom-0 right-0 left-0 h-28 opacity-25 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full text-emerald-400 fill-current">
            <path d="M0,150 L0,70 L90,120 L180,50 L270,110 L360,30 L450,90 L500,60 L500,150 Z" />
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/90 px-2.5 py-1 rounded-md border border-emerald-500/40">
            {badge}
          </span>
          <span className="text-[11px] font-mono font-semibold text-neutral-300 flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded">
            <Trees className="w-3.5 h-3.5 text-emerald-400" /> Tea Gardens
          </span>
        </div>

        <div className="relative z-10 mt-8">
          <div className="text-amber-400 font-mono text-xs font-bold tracking-wider uppercase mb-1">
            Nilgiri Tea Trails & Viewpoints
          </div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight">
            {title}
          </h4>
        </div>
      </div>
    );
  }

  // 3. Valparai / Topslip
  if (cleanSlug.includes('valparai') || cleanSlug.includes('topslip')) {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-[#0e2424] via-[#14302e] to-[#12161f] p-6 flex flex-col justify-between border-b border-[#232936] ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
        
        <div className="absolute bottom-0 right-0 left-0 h-28 opacity-25 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full text-teal-400 fill-current">
            <path d="M0,150 L0,100 L80,30 L160,110 L240,40 L320,120 L400,20 L500,90 L500,150 Z" />
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[11px] font-bold text-teal-300 bg-teal-950/90 px-2.5 py-1 rounded-md border border-teal-500/40">
            {badge}
          </span>
          <span className="text-[11px] font-mono font-semibold text-neutral-300 flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded">
            <Compass className="w-3.5 h-3.5 text-teal-400" /> 40 Hairpins
          </span>
        </div>

        <div className="relative z-10 mt-8">
          <div className="text-amber-400 font-mono text-xs font-bold tracking-wider uppercase mb-1">
            Anamalai Rainforests & Tea Hills
          </div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight">
            {title}
          </h4>
        </div>
      </div>
    );
  }

  // 4. Spiritual: Marudhamalai / Isha / Palani
  if (cleanSlug.includes('palani') || cleanSlug.includes('marudhamalai') || cleanSlug.includes('isha')) {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-[#261c10] via-[#332514] to-[#12161f] p-6 flex flex-col justify-between border-b border-[#232936] ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
        
        <div className="absolute bottom-0 right-4 h-32 opacity-25 pointer-events-none">
          <svg viewBox="0 0 100 120" className="h-full w-auto text-amber-400 fill-current">
            <polygon points="50,5 30,30 70,30" />
            <polygon points="50,25 20,60 80,60" />
            <polygon points="50,55 10,95 90,95" />
            <rect x="15" y="95" width="70" height="25" />
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[11px] font-bold text-amber-300 bg-amber-950/90 px-2.5 py-1 rounded-md border border-amber-500/40">
            {badge}
          </span>
          <span className="text-[11px] font-mono font-semibold text-neutral-300 flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded">
            <Sun className="w-3.5 h-3.5 text-amber-400" /> Sacred Pilgrimage
          </span>
        </div>

        <div className="relative z-10 mt-8">
          <div className="text-amber-400 font-mono text-xs font-bold tracking-wider uppercase mb-1">
            Divine Temple & Spiritual Circuit
          </div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight">
            {title}
          </h4>
        </div>
      </div>
    );
  }

  // 5. Munnar / Kodaikanal / City
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#161c28] via-[#1c2434] to-[#12161f] p-6 flex flex-col justify-between border-b border-[#232936] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[11px] font-bold text-sky-300 bg-sky-950/90 px-2.5 py-1 rounded-md border border-sky-500/40">
          {badge}
        </span>
        <span className="text-[11px] font-mono font-semibold text-neutral-300 flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded">
          <Compass className="w-3.5 h-3.5 text-sky-400" /> Scenic Package
        </span>
      </div>

      <div className="relative z-10 mt-8">
        <div className="text-amber-400 font-mono text-xs font-bold tracking-wider uppercase mb-1">
          Coimbatore Outstation Experience
        </div>
        <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight">
          {title}
        </h4>
      </div>
    </div>
  );
};
