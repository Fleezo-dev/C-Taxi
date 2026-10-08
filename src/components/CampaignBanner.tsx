import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2, ChevronDown } from 'lucide-react';
import { AD_CAMPAIGN_PRESETS } from '../data/taxiData';

interface CampaignBannerProps {
  currentCampaignId: string;
  onSelectCampaign: (id: string) => void;
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({
  currentCampaignId,
  onSelectCampaign,
}) => {
  const [isDebugMode, setIsDebugMode] = useState(false);

  useEffect(() => {
    // Only display debug campaign selector if explicitly requested via ?debug=ads in URL
    const params = new URLSearchParams(window.location.search);
    if (params.get('debug') === 'ads') {
      setIsDebugMode(true);
    }
  }, []);

  // In production, never render this to regular customers
  if (!isDebugMode) {
    return null;
  }

  const currentPreset = AD_CAMPAIGN_PRESETS.find(p => p.id === currentCampaignId) || AD_CAMPAIGN_PRESETS[0];

  return (
    <div className="bg-[#141822] border-b border-[#252c3c] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
        
        {/* Debug Info */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 font-semibold text-amber-400 uppercase tracking-wider text-[10px] bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
            <Target className="w-3.5 h-3.5 text-amber-400" />
            Internal Ad Intent Simulator
          </span>
          <span className="text-neutral-500 hidden sm:inline">|</span>
          <span className="text-neutral-300 text-[11px]">
            Active Intent: <strong className="text-white font-mono bg-[#1d2230] px-1.5 py-0.5 rounded border border-[#2b3346]">"{currentPreset.query}"</strong>
          </span>
        </div>

        {/* Campaign Switcher */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="text-neutral-400 text-[11px]">Simulate Search Intent:</span>
          <div className="relative">
            <select
              value={currentCampaignId}
              onChange={(e) => onSelectCampaign(e.target.value)}
              className="appearance-none bg-[#1d2230] hover:bg-[#252c3c] text-neutral-200 text-xs font-medium py-1 pl-2.5 pr-7 rounded border border-[#2f384c] focus:outline-none focus:ring-1 focus:ring-amber-400 cursor-pointer transition-colors"
            >
              {AD_CAMPAIGN_PRESETS.map((preset) => (
                <option key={preset.id} value={preset.id}>
                  {preset.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
};
