import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Search, Loader2, Navigation, Check } from 'lucide-react';
import { LocationPoint, searchLocations, POPULAR_COIMBATORE_LOCATIONS } from '../services/routingService';

interface LocationAutocompleteProps {
  label: string;
  placeholder: string;
  value: string;
  selectedLocation: LocationPoint | null;
  onSelect: (location: LocationPoint) => void;
  iconColor?: string;
  disabled?: boolean;
}

export const LocationAutocomplete: React.FC<LocationAutocompleteProps> = ({
  label,
  placeholder,
  value,
  selectedLocation,
  onSelect,
  iconColor = "text-amber-400",
  disabled = false
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [suggestions, setSuggestions] = useState<LocationPoint[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputValue(text);
    setHighlightedIndex(-1);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (text.trim().length < 2) {
      // Show default popular locations on short text
      setSuggestions(POPULAR_COIMBATORE_LOCATIONS.slice(0, 6));
      setIsOpen(true);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setIsOpen(true);

    debounceTimerRef.current = setTimeout(async () => {
      try {
        const results = await searchLocations(text);
        setSuggestions(results);
      } catch {
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, 280);
  };

  const handleFocus = () => {
    if (!inputValue || inputValue.length < 2) {
      setSuggestions(POPULAR_COIMBATORE_LOCATIONS.slice(0, 6));
    }
    setIsOpen(true);
  };

  const handleSelectSuggestion = (loc: LocationPoint) => {
    setInputValue(loc.name);
    setIsOpen(false);
    onSelect(loc);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
        handleSelectSuggestion(suggestions[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <MapPin className={`w-3.5 h-3.5 ${iconColor}`} />
          {label}
        </span>
        {selectedLocation && (
          <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
            <Check className="w-3 h-3" /> Pin Verified
          </span>
        )}
      </label>

      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          aria-expanded={isOpen}
          aria-autocomplete="list"
          className="w-full bg-[#181c24] border border-[#2d3340] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 transition-all pr-9 disabled:opacity-50"
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
          ) : (
            <Search className="w-4 h-4 text-neutral-500" />
          )}
        </div>
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 z-50 mt-1.5 max-h-64 overflow-y-auto bg-[#1c202a] border border-[#2d3444] rounded-xl shadow-2xl py-1.5 text-xs divide-y divide-[#262c3a] animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-400 flex items-center justify-between bg-[#151820]">
            <span>{inputValue.length >= 2 ? 'Matching Places' : 'Popular Coimbatore Hubs'}</span>
            <span className="text-amber-400">Tap to select</span>
          </div>

          {suggestions.length === 0 && !isLoading ? (
            <div className="px-3 py-4 text-center text-neutral-400">
              No matching locations found in Coimbatore region.
            </div>
          ) : (
            suggestions.map((loc, idx) => {
              const isSelected = selectedLocation?.name === loc.name;
              const isHighlighted = highlightedIndex === idx;

              return (
                <button
                  key={loc.id || idx}
                  type="button"
                  onClick={() => handleSelectSuggestion(loc)}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  className={`w-full text-left px-3.5 py-2.5 flex items-start gap-2.5 transition-colors ${
                    isHighlighted ? 'bg-[#252c3b] text-white' : 'text-neutral-200 hover:bg-[#202634]'
                  } ${isSelected ? 'bg-amber-400/10 text-amber-300' : ''}`}
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate flex items-center gap-1.5">
                      {loc.name}
                      {loc.category === 'airport' && (
                        <span className="text-[9px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded border border-amber-400/30">
                          Airport
                        </span>
                      )}
                      {loc.category === 'tourist' && (
                        <span className="text-[9px] bg-emerald-400/20 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-400/30">
                          Tour
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-neutral-400 truncate mt-0.5">
                      {loc.formattedAddress}
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
