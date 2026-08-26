export interface CanaryTripDeparture {
  id: string;
  startDate: string;
  endDate: string;
  durationLabel: string;
  priceGBP: number;
  spotsLeft: number;
}

export interface CanaryTrip {
  id: string;
  number: number;
  name: string;
  island: string;
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
  combinationNote?: string;
  departures: CanaryTripDeparture[];
}

export const CANARY_TRIPS: CanaryTrip[] = [
  {
    id: 'mists-of-time',
    number: 1,
    name: 'Mists of Time',
    island: 'La Gomera',
    route: '9 nights from Los Christianos, Tenerife',
    medium: 'Watercolours & Artists Quality Materials',
    priceNote: '£2,100 (15% discount for two sharing). Non-painting partners welcome: £1,200.',
    fromPriceGBP: 1200,
    durationRange: '9 nights',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      'Gentle La Gomera lends itself perfectly to a relaxing, yet fascinating sketching holiday: Unique and varied landscapes, warm winter sunshine, fabulously comfortable hotel accommodation and private local transport which will whisk us each day to some of the loveliest views on the island.',
      'During this short trip we will cover most of the island\'s main sights without too much travelling. There will be plenty of sketching and painting, some gentle walking and we will have some pure relaxation time, too.'
    ],
    highlights: [
      'Cool, misty UNESCO Garajonay ancient laurel cloud forest',
      'Weird volcanic rock formations and Roque de Agando from 3 distinct angles',
      'Striking panoramic views of Mt. Teide across the cobalt Atlantic',
      'Quiet mountain tracks, pretty Hermigua and Gomera\'s highest peak',
      'Boat trip along the coast from Valle Gran Rey to Playa Santiago'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'Arrival in Los Christianos, Tenerife and overnight in a hotel not far from the ferry port' },
      { day: 'Day 2', activity: 'Short sea crossing early morning to San Sebastian and transfer to our first hotel. Afternoon gentle introduction to painting in the immediate vicinity' },
      { day: 'Day 3', activity: '1 rock, 3 views: sketch the awesome Roque de Agando from different angles' },
      { day: 'Day 4', activity: 'Hike up to the island\'s highest point, Garajonay. Mysterious forests and views to Mt. Teide' },
      { day: 'Day 5', activity: 'A beautiful drive and outstanding viewpoint will lead us to Valle Gran Rey in time for lunch. We might enjoy a swim before catching the afternoon boat back round the coast to Playa Santiago' },
      { day: 'Day 6', activity: 'A longer walk from the tiny settlement at Benchijigua with stunning views and typical Gomeran landscape' },
      { day: 'Day 7', activity: 'Painting in pretty Playa Santiago; afternoon ferry to San Sebastian and our second hotel high above the harbour' },
      { day: 'Day 8', activity: 'The rugged northeast, pretty Hermigua and a woodland walk to a tiny chapel' },
      { day: 'Day 9', activity: 'Relaxing day in the beautiful hotel gardens or downtown in the tiny capital' },
      { day: 'Day 10', activity: 'Morning ferry back to Tenerife where the trip ends, or continue on to the island of La Palma for a second week "Edge of the World"' }
    ],
    combinationNote: 'Can be combined with "Edge of the World" (La Palma) for a 16-day Canary Island-hopping adventure with a £300 saving.',
    included: [
      'One night in hotel in Los Christianos, Tenerife',
      'Ferry Tenerife - La Gomera return',
      'Transfers from ferry to La Gomera hotel and back',
      'Transport each day to wonderful painting locations (including boat trip from Valle Gran Rey to Playa Santiago)',
      '7 nights half-board (buffet breakfast and dinner) at two wonderful hotels on a single-occupancy basis',
      'Packed lunches as per itinerary',
      'Art pack containing artists\' quality materials and as much guidance and instruction as required with Mary King'
    ],
    notIncluded: [
      'International flights or travel between your home country and Tenerife',
      'Any accommodation needed on Tenerife after your holiday',
      'One dinner and four lunches during your stay on La Gomera as per itinerary',
      'Drinks (alcoholic or otherwise) in hotel bar or with dinner',
      'Snacks, coffees etc. while out and about',
      'Optional extra activities and services at hotel such as spa treatments, room service, mini bar',
      'Tips & personal art materials advised upon booking'
    ],
    departures: [
      { id: 'can-mot-1', startDate: '28 May 2026', endDate: '06 Jun 2026', durationLabel: '9 nights', priceGBP: 2100, spotsLeft: 3 },
      { id: 'can-mot-2', startDate: '20 Oct 2026', endDate: '29 Oct 2026', durationLabel: '9 nights', priceGBP: 2100, spotsLeft: 4 }
    ]
  },
  {
    id: 'edge-of-the-world',
    number: 2,
    name: 'Edge of the World',
    island: 'La Palma',
    route: '8 nights (9 days) from Los Christianos, Tenerife, or 7 nights as an extension to Mists of Time',
    medium: 'Watercolours, Field Sketching & Ink',
    priceNote: '£1,780 (£1,400 for two sharing). Non-painting partners welcome: £1,200. Save £300 booking both islands together.',
    fromPriceGBP: 1200,
    durationRange: '8 nights / 9 days',
    imageUrl: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      'Spectacular La Palma is quite a large island, with much to see in a short space of time. We base ourselves in two locations close to some of the most beautiful and iconic landscapes, in the mountainous, volcanic centre. This minimises the time spent driving and the number of moves we make; not quite as busy as a "Sketchbook Journey" but a little more active than a "Break", I\'ve called this an "Adventure", which indeed it is.',
      'With plenty of warm sunshine year-round, and cooler temperatures in the pine forests and at altitude, we should experience near-perfect conditions for sketching and painting, visiting a new area or subject each day.',
      'There are some short, scrambly walks and one much longer one, to reach into the heart of this incredible landscape. While this day walk isn\'t compulsory, it would be a real shame to miss it. There is ample opportunity for urban sketching, the beach, and café culture on this trip.'
    ],
    highlights: [
      'Historic, colonial Santa Cruz with flower-decked wooden balconies',
      'Jaw-dropping volcanic Caldera de Taburiente and black sand beaches',
      'Hiking the "barranco" ravine up to colourful waterfalls',
      'Painting above the clouds from the roof of the world at the famous observatory',
      'Optional whale & dolphin watching off Tazacorte beach'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'Arrival in Los Christianos, Tenerife and overnight in a hotel not far from the ferry port (unless combining with the La Gomera itinerary)' },
      { day: 'Day 2', activity: '3 hour sea crossing early morning to Santa Cruz and transfer to our first hotel. Afternoon exploration, perhaps a spot of urban sketching in the immediate vicinity' },
      { day: 'Day 3', activity: 'Walking tour of the historic centre; identify the places you\'d like to sketch later' },
      { day: 'Day 4', activity: 'Journey to Los Llanos via spectacular volcanic crater lookout and some mysterious ancient petroglyphs' },
      { day: 'Day 5', activity: 'Optional whale/dolphin watching, and time on Tazacorte beach, backed by banana plantations or urban sketching in the pretty old part of Los Llanos' },
      { day: 'Day 6', activity: 'Beautiful, rocky walk up a ravine to a colourful waterfall' },
      { day: 'Day 7', activity: 'Back to Santa Cruz the long way round, via the famed observatory and incredible, mist-shrouded peaks at the island\'s summit' },
      { day: 'Day 8', activity: 'Free day in Santa Cruz with its traditional, flower-decked, wooden balconies; optional swimming at Charco Azul green pools' },
      { day: 'Day 9', activity: 'Early morning ferry back to Tenerife, where the trip ends' }
    ],
    combinationNote: 'Combine with Mists of Time for a 16-day island-hopping holiday and save £300.',
    included: [
      'One night in hotel in Los Christianos (unless on the 16-day itinerary)',
      'Ferry Tenerife/La Gomera - Tenerife',
      'Transfers from ferry to hotel and back',
      'Transport each day to wonderful painting locations',
      '7 nights bed and breakfast in comfortable, mid-range hotels on a single-occupancy basis',
      'Artists\' quality watercolour set & brush',
      'Walking tour & La Cumbrecita park permit',
      'Painting guidance and instruction as required with Mary King'
    ],
    notIncluded: [
      'International flights or travel between your home country and Tenerife',
      'Any accommodation needed on Tenerife after your holiday',
      'Dinners or lunches during your stay on La Palma',
      'Drinks (alcoholic or otherwise) in hotel bars or with dinner',
      'Snacks, coffees etc. while out and about',
      'Optional extra activities such as whale watching, bike hire',
      'Personal art materials advised upon booking'
    ],
    departures: [
      { id: 'can-eow-1', startDate: '06 Jun 2026', endDate: '14 Jun 2026', durationLabel: '8 nights', priceGBP: 1780, spotsLeft: 2 },
      { id: 'can-eow-2', startDate: '29 Oct 2026', endDate: '06 Nov 2026', durationLabel: '8 nights', priceGBP: 1780, spotsLeft: 4 }
    ]
  }
];
