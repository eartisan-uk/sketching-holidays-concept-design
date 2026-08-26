export interface ItalyTripDeparture {
  id: string;
  startDate: string;
  endDate: string;
  durationLabel: string;
  priceGBP: number;
  spotsLeft: number;
}

export interface ItalyTrip {
  id: string;
  name: string;
  region: string;
  route: string;
  medium: string;
  priceNote: string;
  fromPriceGBP: number;
  durationRange: string;
  imageUrl: string;
  watercolorSketchUrl: string;
  descriptionParagraphs: string[];
  highlights: string[];
  itinerary: {
    day: string;
    activity: string;
  }[];
  included: string[];
  notIncluded: string[];
  departures: ItalyTripDeparture[];
}

export const ITALY_TRIPS: ItalyTrip[] = [
  {
    id: 'enrosadira',
    name: 'Enrosadira',
    region: 'Dolomites & Alta Badia',
    route: '13 nights from Verona, Italy',
    medium: 'Watercolours & Plein Air Sketching',
    priceNote: '£3,200 (two sharing a room: £2,800; non-painting partners: £2,500)',
    fromPriceGBP: 2500,
    durationRange: '13 nights',
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      'Beneath the stark cliff faces, towers and spires, where wispy waterfalls plunge through dark forests, lies a brilliant green blanket of rolling Alpine pasture which, in June and July, becomes a riotous profusion of wild flowers. These uncut meadows, bursting with colour, conjure memories of childhood; tall grasses brush legs as the clean, fresh air is filled with the buzz of summer. Rare species abound in a kaleidoscope of shades: campanulas and lilies sway in the gentle breeze while brilliant pink daphne smothers the rocks; gentians and edelweiss nestle in the grass while rare orchids hide in the woods. Bright blue endemic "Lord of the Alps" can still be found clinging to crevices high on lofty mountain tops, a joyous surprise for the adventurous climber.',
      'This area is a botanist\'s and photographer\'s dream, and Heaven for painters. While in the region it\'s impossible to ignore this incredible display of nature and we\'ll be painting flowers along with the mountains, rustic barns and chalky blue lakes.'
    ],
    highlights: [
      'Improbable rock towers and jagged Dolomitic limestone ridges',
      'Lush Alpine wildflower meadows in full bloom (gentians, orchids & lilies)',
      'Historic South Tyrolean timber barns and flower-choked window boxes',
      'Spectacular ski lifts and mirror-calm glacial mountain lakes',
      '360-degree panoramic summit views from Mount Lagazuoi'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'Meet in Verona, at our hotel a short stroll from the train station' },
      { day: 'Day 2', activity: 'Take the fast train to Bolzano; afternoon in this pretty town with an optional visit to "Otzi", the ice-man' },
      { day: 'Day 3', activity: 'Transfer to our home-from-home in the Alta Badia valley surrounded by mountains' },
      { day: 'Day 4', activity: 'Gentle stroll through meadows to an impressively high waterfall' },
      { day: 'Day 5', activity: 'A lovely spot beneath pine-studded slopes and the imposing bulk of Contarines' },
      { day: 'Day 6', activity: 'Uncut meadows all around and wide-reaching views from the top of the Pralongia plateau' },
      { day: 'Day 7', activity: 'Pretty little church at Santa Croce and the incredible silence below the Fanes massif' },
      { day: 'Day 8', activity: 'Crazy pinnacles of the Gardena Pass, lunch in a refugio and an optional longer hike for the fit' },
      { day: 'Day 9', activity: 'A free day for longer walks, rests, working on your paintings or exploring in your own way, accompanied if you prefer' },
      { day: 'Day 10', activity: 'A spectacular ski lift to a jaw-dropping view and an optional longer hike' },
      { day: 'Day 11', activity: '360 degree views from the summit of Lagazuoi, complete with historic war tunnels, and remnants of winter snow' },
      { day: 'Day 12', activity: 'Relaxing final day sketching windowboxes and barns around the village; evening sketchbook review over an Aperol Spritz' },
      { day: 'Day 13', activity: 'Journey back to Verona and final night in hotel; stroll into the old town for dinner' }
    ],
    included: [
      'Rail and bus transport from Verona to Alta Badia and back',
      'All accommodation (bed & breakfast) in a comfortable hotel or guesthouse',
      'Expert daily tuition & painting guidance with Mary King',
      'Artists\' quality watercolour set',
      'Daily transport by local bus and/or ski lift as stated in the itinerary',
      'Farewell drinks and review on penultimate evening'
    ],
    notIncluded: [
      'Transport to/from your home country to Verona',
      'Taxis or extra ski lifts taken as an optional alternative to routes on itinerary, or on free day',
      'Lunches or dinners (we can self-cater around 50% of the time, or dine in cozy refugios)',
      'Extra drinks and snacks',
      'Any optional activities or excursions not mentioned on the itinerary'
    ],
    departures: [
      { id: 'ita-enr-1', startDate: '10 Jun 2026', endDate: '23 Jun 2026', durationLabel: '13 nights', priceGBP: 3200, spotsLeft: 2 },
      { id: 'ita-enr-2', startDate: '02 Oct 2026', endDate: '15 Oct 2026', durationLabel: '13 nights', priceGBP: 3200, spotsLeft: 4 }
    ]
  }
];
