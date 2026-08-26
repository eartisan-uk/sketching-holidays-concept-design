export interface GreeceTripDeparture {
  id: string;
  startDate: string;
  endDate: string;
  durationLabel: string;
  priceGBP: number;
  spotsLeft: number;
}

export interface GreeceTrip {
  id: string;
  name: string;
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
  shorterCircuitsNote: string;
  included: string[];
  notIncluded: string[];
  departures: GreeceTripDeparture[];
}

export const GREECE_TRIPS: GreeceTrip[] = [
  {
    id: 'realm-of-the-nesoi',
    name: 'Realm of the Nesoi',
    route: '15 nights from Kos to Rhodes, Greek Dodecanese',
    medium: 'Watercolours, Field Sketching & Ink',
    priceNote: '£3,400 (two sharing a room: £2,700; non-painting partners: £2,600)',
    fromPriceGBP: 2600,
    durationRange: '15/16 nights',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      'The Nesoi, in Greek mythology, are the primordial goddesses of the islands. Daughters of Gaia, they began as mountains, but were cast into the sea by Poseidon in a fit of rage. Each island has its own goddess, worshipped by ancient Greek seafarers as providers of safety, shelter, and orientation.',
      'In all the islands, ties to history and mythology are strong, and traditions hold fast, despite their more recent popularity with visitors from all over the world. The Greek hospitality is also legendary; the pace of life is relaxed, the climate mostly kind, the living easy. Being islands, one is never far from the sea, and we will be spending most of our time on it, in it or beside it, as well as painting it.',
      'We visit as many islands as we can squeeze into our time in the Dodecanese. We aim for a comprehensive flavour of the region, encompassing as many facets of the landscape, culture and history as possible in a relatively short journey, without rushing from one place to another. Despite the distance covered and variety of locations, there is plenty of relaxation on this itinerary with time for swimming, paddling or just soaking it all in. There will be painting opportunities every day, and with subjects ranging from simple to challenging there really is something for everyone here, whether your interest lies in landscape, seascape, boats or buildings.'
    ],
    highlights: [
      'Tranquil, timeless car-free Telendos and its blue-domed chapels',
      'Fascinating atmospheric ruins of ancient Asklépion on Kos',
      'Gorgeous Symi with its iconic amphitheatre harbour and pastel sponge-merchants\' mansions',
      'Refreshing swimming in crystalline Aegean water directly from painting spots',
      'Living history, grand archways and cobblestone alleyways of UNESCO Rhodes Old Town'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'On arrival to Kos, make the short journey to Kéfalos, a beach town on the southwest coast' },
      { day: 'Day 2', activity: 'In Kéfalos, sketch the pretty offshore islet then take a boat to visit its little church and crystalline waters' },
      { day: 'Day 3', activity: 'Afternoon in Kos old town with its historical sites' },
      { day: 'Day 4', activity: 'Sketching at the atmospheric ruins of Asklépion' },
      { day: 'Day 5', activity: 'Ferry to Kalymnos and bus to Masouri; paint Telendos from the mainland' },
      { day: 'Day 6', activity: 'Visit the remotest village on Kalymnos with its blue-domed church' },
      { day: 'Day 7', activity: 'Boat to Telendos, and a change of pace in this laid-back, authentic location' },
      { day: 'Day 8', activity: 'On Telendos. Paint chapels, beaches, flowers and all things Greek' },
      { day: 'Day 9', activity: 'On Telendos. Sunset boat trip and water reflections' },
      { day: 'Day 10', activity: 'Back to Kalymnos, visit Agios Savvas high above Pothia, then catch the ferry to Symi' },
      { day: 'Day 11', activity: 'Explore the stunning harbour area with its pastel-painted merchants\' houses; visit Pedi, a peaceful fishing village' },
      { day: 'Day 12', activity: 'Full day boat trip around the island with lots of swimming interspersed with sketching' },
      { day: 'Day 13', activity: 'Visit the monastery at Panormetis in the south of the island in a beautiful bay' },
      { day: 'Day 14', activity: 'Morning painting around the beautiful town; afternoon ferry to Rhodes' },
      { day: 'Day 15', activity: 'Day trip by boat to Chalki, or sketching around the historic Rhodes Old Town' },
      { day: 'Day 16', activity: 'Farewell breakfast and fly back from Rhodes' }
    ],
    shorterCircuitsNote: 'There is also the possibility of shortening this trip into one of two circuits: Kos-Kos (10 days) or Rhodes-Rhodes (7 days). These suit travellers with less time or a tighter budget. Please enquire for availability.',
    included: [
      'All accommodation on a bed & breakfast basis in charming, family-run hotels/apartments',
      'Dinners in self-catering accommodation (Kos town)',
      'All ferries between the islands and on day trips (boat to Kastri from Kéfalos; Telendos sunset cruise; Symi island boat trip or water taxi; day trip to Chalki from Rhodes)',
      'Buses where they form part of the itinerary (Kéfalos to Kos town; Emboriós/Masouri from Pothia on Kalymnos; Panormítis trip; bus to Chorio/Pedi on Symi)',
      'Taxis to/from Asklépion archaeological site and entrance fees',
      'Set of watercolours and brush suitable for the holiday',
      'Ongoing painting tuition/guidance as required, advice and frequent sketchbook appraisals with Mary King',
      'Farewell drinks and dinner on final night in Rhodes'
    ],
    notIncluded: [
      'Flights to Kos / from Rhodes',
      'Taxis/buses to/from the airport (taxis may be shared if others arrive together)',
      'Lunches and dinners (except when stated in the itinerary)',
      'Drinks, refreshments, snacks',
      'Optional entry fees to extra archaeological sites, museums, monasteries',
      'Personal sketchbook and art materials (list sent upon booking)',
      'Extra nights before or after the trip in Kos or Rhodes'
    ],
    departures: [
      { id: 'gre-nes-1', startDate: '22 Jun 2026', endDate: '08 Jul 2026', durationLabel: '15 nights', priceGBP: 3400, spotsLeft: 3 },
      { id: 'gre-nes-2', startDate: '18 Sep 2026', endDate: '04 Oct 2026', durationLabel: '15 nights', priceGBP: 3400, spotsLeft: 4 }
    ]
  }
];
