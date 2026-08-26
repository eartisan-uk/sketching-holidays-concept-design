import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Clock, 
  Tag, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  SlidersHorizontal, 
  Search, 
  Mail, 
  HelpCircle, 
  Palette,
  Sparkles,
  ChevronRight,
  Filter,
  Eye,
  Info
} from 'lucide-react';
import { CALENDAR_DEPARTURES, CalendarDeparture } from '../data/calendarData';

interface CalendarPageProps {
  onOpenBookModal: (destinationId?: string, dateId?: string) => void;
  onOpenDestinationModal?: (destinationId: string) => void;
}

type DestinationFilter = 'All' | 'Scotland' | 'Sri Lanka' | 'Morocco' | 'Italy' | 'Greece' | 'Canary Islands';
type SortOption = 'date-asc' | 'date-desc' | 'price-asc' | 'price-desc' | 'duration';

const DESTINATION_FILTERS: { label: DestinationFilter; flag: string }[] = [
  { label: 'All', flag: '🌍' },
  { label: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
  { label: 'Sri Lanka', flag: '🇱🇰' },
  { label: 'Morocco', flag: '🇲🇦' },
  { label: 'Italy', flag: '🇮🇹' },
  { label: 'Greece', flag: '🇬🇷' },
  { label: 'Canary Islands', flag: '🇪🇸' },
];

export const CalendarPage: React.FC<CalendarPageProps> = ({ 
  onOpenBookModal,
  onOpenDestinationModal 
}) => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<DestinationFilter>('All');
  const [sortOption, setSortOption] = useState<SortOption>('date-asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter and sort departures
  const filteredDepartures = useMemo(() => {
    return CALENDAR_DEPARTURES.filter((item) => {
      // Destination filter
      if (selectedFilter !== 'All' && item.destinationTag !== selectedFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.tripName.toLowerCase().includes(q);
        const matchDest = item.destinationName.toLowerCase().includes(q);
        const matchRoute = item.route.toLowerCase().includes(q);
        const matchMedium = item.medium.toLowerCase().includes(q);
        const matchMonth = item.departureMonthYear.toLowerCase().includes(q);
        if (!matchTitle && !matchDest && !matchRoute && !matchMedium && !matchMonth) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortOption === 'date-asc') {
        return new Date(a.rawDate).getTime() - new Date(b.rawDate).getTime();
      }
      if (sortOption === 'date-desc') {
        return new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime();
      }
      if (sortOption === 'price-asc') {
        return a.priceGBP - b.priceGBP;
      }
      if (sortOption === 'price-desc') {
        return b.priceGBP - a.priceGBP;
      }
      if (sortOption === 'duration') {
        const durA = parseInt(a.duration) || 7;
        const durB = parseInt(b.duration) || 7;
        return durA - durB;
      }
      return 0;
    });
  }, [selectedFilter, sortOption, searchQuery]);

  const getDestinationCount = (filterName: DestinationFilter) => {
    if (filterName === 'All') return CALENDAR_DEPARTURES.length;
    return CALENDAR_DEPARTURES.filter((d) => d.destinationTag === filterName).length;
  };

  const handleTripDetailsClick = (dep: CalendarDeparture) => {
    if (dep.destinationId === 'scotland') {
      navigate('/painting-holidays-scotland');
    } else if (dep.destinationId === 'sri-lanka') {
      navigate('/painting-holidays-sri-lanka');
    } else if (dep.destinationId === 'morocco') {
      navigate('/painting-holidays-morocco');
    } else if (dep.destinationId === 'la-gomera' || dep.destinationId === 'canary-islands') {
      navigate('/painting-holidays-canary-islands');
    } else if (dep.destinationId === 'greece') {
      navigate('/painting-holidays-greece');
    } else if (dep.destinationId === 'italy-dolomites' || dep.destinationId === 'italy') {
      navigate('/painting-holidays-italy');
    } else {
      if (onOpenDestinationModal) {
        onOpenDestinationModal(dep.destinationId);
      } else {
        navigate('/#destinations');
      }
    }
  };

  return (
    <div id="calendar-page" className="min-h-screen bg-[#faf8f5] text-[#2c322b]">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#2c322b] text-[#f7f5f0] pt-14 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3d463b] text-[#c2d1be] text-xs font-semibold uppercase tracking-wider mb-5">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>2026 &amp; 2027 Schedule</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-title font-bold tracking-tight text-white mb-6 leading-tight">
            Calendar
          </h1>

          <p className="text-lg md:text-xl text-[#d4ded0] max-w-3xl leading-relaxed mb-4">
            Every confirmed sketching and painting holiday, across all six destinations, in one place. Find a date that fits your diary, then follow the link straight through to book.
          </p>

          <p className="text-base text-[#a3b39f] max-w-3xl leading-relaxed">
            New departures are added throughout the year, so if nothing here fits yet, check back - or get in touch and I'll let you know as soon as a date opens up.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-[#414b3f]">
            <div className="flex items-center gap-2 text-sm text-[#d4ded0]">
              <CheckCircle2 className="w-4 h-4 text-[#8aab82]" />
              <span>Small groups (max 6-8)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#d4ded0]">
              <CheckCircle2 className="w-4 h-4 text-[#8aab82]" />
              <span>Personal daily tuition with Mary</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#d4ded0]">
              <CheckCircle2 className="w-4 h-4 text-[#8aab82]" />
              <span>Non-painting partners welcome</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#d4ded0]">
              <CheckCircle2 className="w-4 h-4 text-[#8aab82]" />
              <span>Quality art packs included</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW TO USE THIS PAGE */}
      <section className="py-10 px-4 md:px-8 bg-[#f2efe9] border-b border-[#e5dfd3]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-xl border border-[#ded7ca] shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-[#1f261d] mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-[#70826b]" />
              <span>How to use this page</span>
            </h2>

            <p className="text-[#4a5247] leading-relaxed mb-5 text-base md:text-lg">
              Each card below is a confirmed departure - destination, trip name, and exact dates. Filter by destination to narrow things down, or scroll through everything chronologically to see what's coming up soonest.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              <div className="p-4 rounded-lg bg-[#fbf9f6] border border-[#ebe5dc]">
                <div className="font-bold text-[#2c322b] text-base mb-1.5 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#70826b]" />
                  <span>Short on time?</span>
                </div>
                <p className="text-sm text-[#616c5d] leading-relaxed">
                  Sort by date to find the next trip departing, whichever destination it is.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#fbf9f6] border border-[#ebe5dc]">
                <div className="font-bold text-[#2c322b] text-base mb-1.5 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#70826b]" />
                  <span>Set on a destination?</span>
                </div>
                <p className="text-sm text-[#616c5d] leading-relaxed">
                  Filter by tag (Scotland, Sri Lanka, Morocco, Italy, Greece, Canary Islands) to see only that country's upcoming dates.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#fbf9f6] border border-[#ebe5dc]">
                <div className="font-bold text-[#2c322b] text-base mb-1.5 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#70826b]" />
                  <span>Comparing options?</span>
                </div>
                <p className="text-sm text-[#616c5d] leading-relaxed">
                  Each card links through to the full trip details - itinerary, price, what's included - on that destination's page.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
              <Link
                to="/painting-holidays-scotland"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-[#465a41] hover:text-[#2c322b] transition-colors underline underline-offset-4"
              >
                <span>Browse destinations instead →</span>
              </Link>

              <div className="text-xs font-medium text-[#7a8576]">
                Showing {filteredDepartures.length} of {CALENDAR_DEPARTURES.length} confirmed dates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTROLS: FILTERS, SEARCH & SORT */}
      <section className="py-8 px-4 md:px-8 border-b border-[#ded7ca] bg-[#faf8f5] sticky top-16 z-20 shadow-xs">
        <div className="max-w-6xl mx-auto space-y-4">
          
          {/* Destination Filter Tags */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6f786c] flex items-center gap-1 mr-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {DESTINATION_FILTERS.map((item) => {
              const count = getDestinationCount(item.label);
              const isSelected = selectedFilter === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => setSelectedFilter(item.label)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#2c322b] text-white shadow-sm ring-2 ring-[#70826b]'
                      : 'bg-white text-[#4a5446] hover:bg-[#ede8df] border border-[#d6cfc3]'
                  }`}
                >
                  <span>{item.flag}</span>
                  <span>{item.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-[#485346] text-[#e3ece0]' : 'bg-[#ede8df] text-[#6b7567]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search bar & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#8a9486] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search trip, destination, medium or month..."
                className="w-full pl-9.5 pr-4 py-2 bg-white text-xs md:text-sm rounded-lg border border-[#cfc7b8] focus:outline-none focus:ring-2 focus:ring-[#70826b] placeholder:text-[#99a295]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8c9688] hover:text-[#2c322b]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort and View Mode */}
            <div className="flex items-center gap-3 justify-end">
              <div className="flex items-center gap-1.5 text-xs text-[#5f695c]">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Sort:</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="bg-white border border-[#cfc7b8] rounded-md px-2.5 py-1.5 text-xs font-semibold text-[#2c322b] focus:outline-none focus:ring-1 focus:ring-[#70826b]"
                >
                  <option value="date-asc">Date (Soonest First)</option>
                  <option value="date-desc">Date (Latest First)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="duration">Trip Duration</option>
                </select>
              </div>

              {/* Grid / List switch */}
              <div className="inline-flex rounded-lg border border-[#cfc7b8] bg-white p-0.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-2 py-1 text-xs font-semibold rounded ${
                    viewMode === 'grid' ? 'bg-[#2c322b] text-white' : 'text-[#636e60] hover:text-[#2c322b]'
                  }`}
                  title="Grid View"
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-2 py-1 text-xs font-semibold rounded ${
                    viewMode === 'list' ? 'bg-[#2c322b] text-white' : 'text-[#636e60] hover:text-[#2c322b]'
                  }`}
                  title="List View"
                >
                  List
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CALENDAR GRID / LIST */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          {filteredDepartures.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#ded7ca] p-8 max-w-xl mx-auto">
              <CalendarIcon className="w-12 h-12 text-[#9da899] mx-auto mb-3" />
              <h3 className="text-xl font-bold text-[#2c322b] mb-2">No departures matched your search</h3>
              <p className="text-sm text-[#667062] mb-6">
                Try resetting your filters or search terms, or get in touch for custom private dates.
              </p>
              <button
                onClick={() => {
                  setSelectedFilter('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-[#2c322b] text-white text-xs font-bold rounded-lg hover:bg-[#3d463b] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            
            /* GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDepartures.map((dep) => {
                const isVeryFewSpots = dep.spotsLeft <= 2;
                return (
                  <div
                    key={dep.id}
                    className="bg-white rounded-xl border border-[#ded7ca] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
                  >
                    {/* Card Image Header */}
                    <div className="relative h-48 overflow-hidden bg-[#e0ded8]">
                      <img
                        src={dep.imageUrl}
                        alt={dep.tripName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Destination Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2c322b]/90 backdrop-blur-xs text-white text-xs font-bold tracking-wide shadow-xs">
                        <span>
                          {dep.destinationTag === 'Scotland' && '🏴󠁧󠁢󠁳󠁣󠁴󠁿'}
                          {dep.destinationTag === 'Sri Lanka' && '🇱🇰'}
                          {dep.destinationTag === 'Morocco' && '🇲🇦'}
                          {dep.destinationTag === 'Italy' && '🇮🇹'}
                          {dep.destinationTag === 'Greece' && '🇬🇷'}
                          {dep.destinationTag === 'Canary Islands' && '🇪🇸'}
                        </span>
                        <span>{dep.destinationName}</span>
                      </div>

                      {/* Spots left badge */}
                      <div className={`absolute top-3 right-3 px-2 py-0.5 rounded text-[11px] font-bold shadow-xs ${
                        isVeryFewSpots 
                          ? 'bg-[#d9534f] text-white' 
                          : 'bg-[#eef5eb] text-[#2c4026] border border-[#bcd4b6]'
                      }`}>
                        {dep.spotsLeft === 1 ? 'Only 1 spot left' : `${dep.spotsLeft} spots left`}
                      </div>

                      {/* Month Banner at Bottom of Image */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <div className="text-xs font-semibold text-[#f0f4ee] flex items-center gap-1">
                          <CalendarIcon className="w-3.5 h-3.5 text-[#a8c9a0]" />
                          <span>{dep.departureMonthYear}</span>
                        </div>
                        <div className="text-xs font-bold text-[#f7f5f0] bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                          {dep.duration}
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      
                      <div>
                        <h3 className="font-serif-title font-bold text-xl text-[#1f261d] mb-1 group-hover:text-[#4a5f45] transition-colors">
                          {dep.tripName}
                        </h3>

                        <div className="text-xs font-medium text-[#727d6f] flex items-center gap-1.5 mb-3">
                          <MapPin className="w-3.5 h-3.5 text-[#70826b] shrink-0" />
                          <span className="truncate">{dep.route}</span>
                        </div>

                        {/* Date Range Highlight */}
                        <div className="p-2.5 rounded-lg bg-[#f6f4ee] border border-[#e8e2d5] mb-3 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] uppercase font-bold text-[#758071] tracking-wider">
                              Exact Dates
                            </div>
                            <div className="text-sm font-bold text-[#20271e]">
                              {dep.startDate} - {dep.endDate}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[10px] uppercase font-bold text-[#758071] tracking-wider">
                              Medium
                            </div>
                            <div className="text-xs font-semibold text-[#3b4737] max-w-[120px] truncate" title={dep.medium}>
                              {dep.medium}
                            </div>
                          </div>
                        </div>

                        {/* Highlights Snippet */}
                        <ul className="space-y-1 text-xs text-[#525d4f] mb-2">
                          {dep.highlights.slice(0, 2).map((h, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-[#70826b] font-bold">•</span>
                              <span className="line-clamp-1">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Card Footer: Price & Actions */}
                      <div className="pt-3 border-t border-[#eee7dc] space-y-3">
                        <div className="flex items-baseline justify-between">
                          <div>
                            <span className="text-[11px] text-[#737e70] uppercase font-bold tracking-wider">Price from </span>
                            <span className="text-xl font-bold font-serif-title text-[#1f261d]">
                              £{dep.priceGBP.toLocaleString()}
                            </span>
                            <span className="text-[11px] text-[#737e70]"> / pers.</span>
                          </div>
                        </div>

                        {dep.sharingPriceNote && (
                          <div className="text-[11px] text-[#6e7a6b] italic -mt-2">
                            {dep.sharingPriceNote}
                          </div>
                        )}

                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <button
                            onClick={() => handleTripDetailsClick(dep)}
                            className="w-full py-2 px-2.5 rounded-lg border border-[#cfc7b8] hover:bg-[#ede7dc] text-[#2c322b] text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <span>Full Details</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => onOpenBookModal(dep.destinationId, dep.id)}
                            className="w-full py-2 px-2.5 rounded-lg bg-[#2c322b] hover:bg-[#404c3e] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                          >
                            <span>Book Date</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          ) : (

            /* LIST VIEW */
            <div className="bg-white rounded-xl border border-[#ded7ca] overflow-hidden divide-y divide-[#eee7dc] shadow-sm">
              {filteredDepartures.map((dep) => {
                const isVeryFewSpots = dep.spotsLeft <= 2;
                return (
                  <div 
                    key={dep.id} 
                    className="p-4 md:p-6 hover:bg-[#faf7f2] transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                  >
                    {/* Left info */}
                    <div className="flex items-start gap-4 flex-1">
                      <img
                        src={dep.imageUrl}
                        alt={dep.tripName}
                        referrerPolicy="no-referrer"
                        className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover shrink-0 border border-[#e2dcd0]"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2 py-0.5 rounded bg-[#2c322b] text-white text-[11px] font-bold">
                            {dep.destinationName}
                          </span>
                          <span className="text-xs font-semibold text-[#70826b] flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {dep.duration}
                          </span>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                            isVeryFewSpots ? 'bg-[#d9534f] text-white' : 'bg-[#eef5eb] text-[#2c4026]'
                          }`}>
                            {dep.spotsLeft === 1 ? '1 spot left' : `${dep.spotsLeft} spots`}
                          </span>
                        </div>

                        <h3 className="font-serif-title font-bold text-lg md:text-xl text-[#1f261d]">
                          {dep.tripName}
                        </h3>

                        <div className="text-xs text-[#6e796c] flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#70826b]" />
                          <span>{dep.route}</span>
                        </div>

                        <div className="text-xs text-[#525d4f] font-medium pt-1">
                          <span className="font-bold text-[#20271e]">Dates: </span>
                          {dep.startDate} - {dep.endDate} ({dep.departureMonthYear})
                          <span className="mx-2 text-[#b0baa9]">|</span>
                          <span className="font-bold text-[#20271e]">Medium: </span>
                          {dep.medium}
                        </div>
                      </div>
                    </div>

                    {/* Right Price & Actions */}
                    <div className="flex items-center justify-between lg:flex-col lg:items-end gap-3 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#f0ece4]">
                      <div className="text-left lg:text-right">
                        <div className="text-[11px] text-[#707c6d] uppercase font-bold">Price from</div>
                        <div className="text-xl font-bold font-serif-title text-[#1f261d]">
                          £{dep.priceGBP.toLocaleString()}
                        </div>
                        {dep.sharingPriceNote && (
                          <div className="text-[10px] text-[#6e7a6b] italic">
                            {dep.sharingPriceNote}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleTripDetailsClick(dep)}
                          className="py-2 px-3 rounded-lg border border-[#cfc7b8] hover:bg-[#ede7dc] text-[#2c322b] text-xs font-bold transition-colors cursor-pointer"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => onOpenBookModal(dep.destinationId, dep.id)}
                          className="py-2 px-4 rounded-lg bg-[#2c322b] hover:bg-[#404c3e] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                        >
                          <span>Book</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* 5. DON'T SEE A DATE THAT WORKS? */}
      <section className="py-14 px-4 md:px-8 bg-[#f2efe9] border-t border-[#e2dcd0]">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#ded7ca] shadow-sm space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edf2ea] text-[#3d4d3a] text-xs font-bold mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Custom dates &amp; Enquiries</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-[#1f261d] tracking-tight">
                Don't see a date that works?
              </h2>
            </div>

            <ul className="space-y-4 text-base text-[#465042] leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#70826b] mt-2.5 shrink-0" />
                <div>
                  <strong className="text-[#1f261d]">Want to travel outside the dates shown?</strong> Some trips can run as a private group booking outside the published calendar - <Link to="/contact" className="text-[#465a41] font-bold underline underline-offset-4 hover:text-[#2c322b]">get in touch</Link> to ask.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#70826b] mt-2.5 shrink-0" />
                <div>
                  <strong className="text-[#1f261d]">Trip fully booked?</strong> Register your interest and I'll let you know if a place opens up, or when the next departure is confirmed.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#70826b] mt-2.5 shrink-0" />
                <div>
                  <strong className="text-[#1f261d]">New to sketching holidays?</strong> See the <Link to="/faqs" className="text-[#465a41] font-bold underline underline-offset-4 hover:text-[#2c322b]">FAQs</Link> for how the different trip types work, or <Link to="/your-host" className="text-[#465a41] font-bold underline underline-offset-4 hover:text-[#2c322b]">meet your host, Mary King</Link>.
                </div>
              </li>
            </ul>

            <div className="pt-6 border-t border-[#eee7dc] flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div className="flex items-center gap-4 flex-wrap text-sm font-bold">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-[#303f2d] hover:text-[#182017] underline underline-offset-4"
                >
                  <span>Get in touch →</span>
                </Link>
                <span className="text-[#bbb3a4]">·</span>
                <Link
                  to="/how-to-book"
                  className="inline-flex items-center gap-1.5 text-[#303f2d] hover:text-[#182017] underline underline-offset-4"
                >
                  <span>See how to book →</span>
                </Link>
              </div>

              <button
                onClick={() => onOpenBookModal()}
                className="w-full sm:w-auto px-6 py-3 bg-[#2c322b] hover:bg-[#3f4a3d] text-white font-bold text-sm rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Enquire or Reserve Place</span>
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
