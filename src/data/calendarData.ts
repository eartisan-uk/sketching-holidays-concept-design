export interface CalendarDeparture {
  id: string;
  destinationId: string;
  destinationName: string;
  destinationTag: 'Scotland' | 'Sri Lanka' | 'Morocco' | 'Italy' | 'Greece' | 'Canary Islands';
  tripName: string;
  route: string;
  departureMonthYear: string; // e.g., "May 2026"
  startDate: string;
  endDate: string;
  rawDate: string; // ISO date for chronological sorting, e.g. "2026-05-24"
  duration: string;
  priceGBP: number;
  sharingPriceNote?: string;
  medium: string;
  spotsLeft: number;
  maxGroupSize: number;
  destinationUrl: string;
  imageUrl: string;
  sketchUrl: string;
  highlights: string[];
}

export const CALENDAR_DEPARTURES: CalendarDeparture[] = [
  // 1. Morocco Spring
  {
    id: 'cal-mo-1',
    destinationId: 'morocco',
    destinationName: 'Morocco',
    destinationTag: 'Morocco',
    tripName: 'Marrakech Riad & High Atlas Kasbahs',
    route: 'Marrakech, Telouet & Ourika Valley',
    departureMonthYear: 'April 2026',
    startDate: '18 Apr 2026',
    endDate: '25 Apr 2026',
    rawDate: '2026-04-18',
    duration: '7 nights',
    priceGBP: 1590,
    sharingPriceNote: 'Non-painting partners welcome',
    medium: 'Pen & Ink, Watercolor',
    spotsLeft: 1,
    maxGroupSize: 8,
    destinationUrl: '/#destinations',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800',
    highlights: ['Historic Marrakech Medina & Majorelle', 'Mudbrick Kasbahs of the High Atlas', 'Architectural perspective & terracotta washes']
  },

  // 2. Scotland - Bonnie Broom May
  {
    id: 'cal-scot-bb1',
    destinationId: 'scotland',
    destinationName: 'Scotland',
    destinationTag: 'Scotland',
    tripName: 'The Bonnie Broom',
    route: 'Ullapool & Summer Isles',
    departureMonthYear: 'May 2026',
    startDate: '24 May 2026',
    endDate: '30 May 2026',
    rawDate: '2026-05-24',
    duration: '6 nights',
    priceGBP: 890,
    sharingPriceNote: 'Discount for room sharing / non-painting partners',
    medium: 'Watercolours',
    spotsLeft: 2,
    maxGroupSize: 8,
    destinationUrl: '/painting-holidays-scotland',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800',
    highlights: ['Summer Isles coastal panoramas', 'Charming Ullapool harbour village', 'Daily plein air demonstrations with Mary']
  },

  // 3. Canary Islands - Spring
  {
    id: 'cal-canary-1',
    destinationId: 'la-gomera',
    destinationName: 'La Gomera (Canary Islands)',
    destinationTag: 'Canary Islands',
    tripName: 'La Gomera Island Oasis & Cloud Forest',
    route: 'San Sebastián, Hermigua & Garajonay',
    departureMonthYear: 'May 2026',
    startDate: '28 May 2026',
    endDate: '04 Jun 2026',
    rawDate: '2026-05-28',
    duration: '7 nights',
    priceGBP: 1390,
    sharingPriceNote: 'Discount for sharing rooms',
    medium: 'Watercolor & Pastels',
    spotsLeft: 3,
    maxGroupSize: 8,
    destinationUrl: '/#destinations',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800',
    highlights: ['UNESCO Garajonay ancient laurel rainforest', 'Volcanic cliffs and red-roofed villages', 'Tranquil Atlantic island atmosphere']
  },

  // 4. Scotland - Windswept Wilderness June
  {
    id: 'cal-scot-ww1',
    destinationId: 'scotland',
    destinationName: 'Scotland',
    destinationTag: 'Scotland',
    tripName: 'Windswept Wilderness',
    route: 'Far Northwest Assynt & Lochinver',
    departureMonthYear: 'June 2026',
    startDate: '01 Jun 2026',
    endDate: '08 Jun 2026',
    rawDate: '2026-06-01',
    duration: '7 nights',
    priceGBP: 980,
    sharingPriceNote: 'Sharing discount available',
    medium: 'Watercolours & Pen',
    spotsLeft: 2,
    maxGroupSize: 7,
    destinationUrl: '/painting-holidays-scotland',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800',
    highlights: ['Ardvreck Castle and dramatic loch reflections', 'Assynt mountain peaks and sea cliffs', 'Daily tailored sketching exercises']
  },

  // 5. Italy - Dolomites June
  {
    id: 'cal-italy-1',
    destinationId: 'italy-dolomites',
    destinationName: 'Italy (Dolomites)',
    destinationTag: 'Italy',
    tripName: 'Alpine Vistas & Val di Funes',
    route: 'Val di Funes, Lake Braies & Tre Cime',
    departureMonthYear: 'June 2026',
    startDate: '10 Jun 2026',
    endDate: '18 Jun 2026',
    rawDate: '2026-06-10',
    duration: '8 nights',
    priceGBP: 1680,
    sharingPriceNote: 'Gourmet South Tyrolean meals included',
    medium: 'Watercolor, Pen & Ink, Gouache',
    spotsLeft: 2,
    maxGroupSize: 8,
    destinationUrl: '/#destinations',
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
    highlights: ['St. Magdalena timber chapel under jagged Odle peaks', 'Silver-blue glacial waters of Lake Braies', 'Alpenglow color mixing and light mastery']
  },

  // 6. Scotland - Bonnie Broom Mid June
  {
    id: 'cal-scot-bb2',
    destinationId: 'scotland',
    destinationName: 'Scotland',
    destinationTag: 'Scotland',
    tripName: 'The Bonnie Broom',
    route: 'Ullapool & Summer Isles',
    departureMonthYear: 'June 2026',
    startDate: '14 Jun 2026',
    endDate: '18 Jun 2026',
    rawDate: '2026-06-14',
    duration: '4 nights',
    priceGBP: 650,
    sharingPriceNote: 'Short break option',
    medium: 'Watercolours',
    spotsLeft: 3,
    maxGroupSize: 8,
    destinationUrl: '/painting-holidays-scotland',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800',
    highlights: ['Summer Isles and Coigach peninsula', 'Comfortable lodge base in Ullapool', 'Intensive short break sketching']
  },

  // 7. Greece - Aegean Summer
  {
    id: 'cal-greece-1',
    destinationId: 'greece',
    destinationName: 'Greece',
    destinationTag: 'Greece',
    tripName: 'Aegean Light & Whitewashed Islands',
    route: 'Cyclades, Coastal Chapels & Caldera',
    departureMonthYear: 'June 2026',
    startDate: '22 Jun 2026',
    endDate: '30 Jun 2026',
    rawDate: '2026-06-22',
    duration: '8 nights',
    priceGBP: 1720,
    sharingPriceNote: 'Seaside villa accommodation',
    medium: 'Watercolor, Gouache, Ink & Wash',
    spotsLeft: 2,
    maxGroupSize: 8,
    destinationUrl: '/#destinations',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
    highlights: ['Blue domes & pink bougainvillea against ultramarine sea', '300-year-old shaded olive grove plein air sessions', 'Sunset boat sketching around volcanic caldera']
  },

  // 8. Scotland - Where the Corncrakes Sing July
  {
    id: 'cal-scot-corn1',
    destinationId: 'scotland',
    destinationName: 'Scotland',
    destinationTag: 'Scotland',
    tripName: 'Where the Corncrakes Sing',
    route: 'Isle of Colonsay (Inner Hebrides)',
    departureMonthYear: 'July 2026',
    startDate: '04 Jul 2026',
    endDate: '11 Jul 2026',
    rawDate: '2026-07-04',
    duration: '7 nights',
    priceGBP: 1280,
    sharingPriceNote: 'Self-catering cottage retreat & ferry included',
    medium: 'Artist Choice / Watercolours',
    spotsLeft: 2,
    maxGroupSize: 6,
    destinationUrl: '/painting-holidays-scotland',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800',
    highlights: ['Pristine turquoise waters and machair wildflower meadows', 'Tidal crossing to 14th-century Oronsay Priory', 'Evening appraisals with complimentary bubbles']
  },

  // 9. Scotland - Around the Blooming Heather August
  {
    id: 'cal-scot-heather1',
    destinationId: 'scotland',
    destinationName: 'Scotland',
    destinationTag: 'Scotland',
    tripName: 'Around the Blooming Heather',
    route: 'Inverness, Cairngorms & Glen Affric',
    departureMonthYear: 'August 2026',
    startDate: '10 Aug 2026',
    endDate: '20 Aug 2026',
    rawDate: '2026-08-10',
    duration: '10 days',
    priceGBP: 1150,
    sharingPriceNote: 'Art pack & entry tickets included',
    medium: 'Watercolours & Sketchbook',
    spotsLeft: 4,
    maxGroupSize: 8,
    destinationUrl: '/painting-holidays-scotland',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800',
    highlights: ['Cawdor Castle, Loch Ness and Glen Affric', 'Cairngorm mountain summit & Caledonian pines', 'Ideal for those travelling without their own car']
  },

  // 10. Scotland - Where the Corncrakes Sing Mid-August
  {
    id: 'cal-scot-corn2',
    destinationId: 'scotland',
    destinationName: 'Scotland',
    destinationTag: 'Scotland',
    tripName: 'Where the Corncrakes Sing',
    route: 'Isle of Colonsay (Inner Hebrides)',
    departureMonthYear: 'August 2026',
    startDate: '15 Aug 2026',
    endDate: '22 Aug 2026',
    rawDate: '2026-08-15',
    duration: '7 nights',
    priceGBP: 1280,
    sharingPriceNote: 'Self-catering cottage retreat & ferry included',
    medium: 'Artist Choice / Watercolours',
    spotsLeft: 3,
    maxGroupSize: 6,
    destinationUrl: '/painting-holidays-scotland',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800',
    highlights: ['Wildflower machair and empty sandy bays', 'Total immersion away from city distractions', 'Small friendly group of 6 artists']
  },

  // 11. Greece - Late Summer
  {
    id: 'cal-greece-2',
    destinationId: 'greece',
    destinationName: 'Greece',
    destinationTag: 'Greece',
    tripName: 'Aegean Light & Whitewashed Islands',
    route: 'Cyclades, Coastal Chapels & Caldera',
    departureMonthYear: 'September 2026',
    startDate: '18 Sep 2026',
    endDate: '26 Sep 2026',
    rawDate: '2026-09-18',
    duration: '8 nights',
    priceGBP: 1720,
    sharingPriceNote: 'Seaside villa accommodation',
    medium: 'Watercolor & Ink',
    spotsLeft: 5,
    maxGroupSize: 8,
    destinationUrl: '/#destinations',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
    highlights: ['Pleasant warm autumn Aegean breeze', 'Whitewashed archways & coastal ruins', 'Daily critiques and fresh Mediterranean cuisine']
  },

  // 12. Scotland - Bonnie Broom Autumn
  {
    id: 'cal-scot-bb3',
    destinationId: 'scotland',
    destinationName: 'Scotland',
    destinationTag: 'Scotland',
    tripName: 'The Bonnie Broom',
    route: 'Ullapool & Summer Isles',
    departureMonthYear: 'September 2026',
    startDate: '20 Sep 2026',
    endDate: '26 Sep 2026',
    rawDate: '2026-09-20',
    duration: '6 nights',
    priceGBP: 890,
    sharingPriceNote: 'Discount for room sharing',
    medium: 'Watercolours',
    spotsLeft: 4,
    maxGroupSize: 8,
    destinationUrl: '/painting-holidays-scotland',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800',
    highlights: ['Golden autumn light across the Minch', 'Coigach mountain silhouettes', 'Cosy studio evenings in Ullapool']
  },

  // 13. Italy - Dolomites Autumn
  {
    id: 'cal-italy-2',
    destinationId: 'italy-dolomites',
    destinationName: 'Italy (Dolomites)',
    destinationTag: 'Italy',
    tripName: 'Alpine Vistas & Val di Funes',
    route: 'Val di Funes, Lake Braies & Tre Cime',
    departureMonthYear: 'October 2026',
    startDate: '02 Oct 2026',
    endDate: '10 Oct 2026',
    rawDate: '2026-10-02',
    duration: '8 nights',
    priceGBP: 1680,
    sharingPriceNote: 'Golden larch season',
    medium: 'Watercolor, Pen & Ink, Gouache',
    spotsLeft: 4,
    maxGroupSize: 8,
    destinationUrl: '/#destinations',
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
    highlights: ['Golden alpine larches framing dolomite peaks', 'Pristine mountain air and crisp morning light', 'Comfortable alpine lodge hospitality']
  },

  // 14. Canary Islands - Autumn
  {
    id: 'cal-canary-2',
    destinationId: 'la-gomera',
    destinationName: 'La Gomera (Canary Islands)',
    destinationTag: 'Canary Islands',
    tripName: 'La Gomera Island Oasis & Cloud Forest',
    route: 'San Sebastián, Hermigua & Garajonay',
    departureMonthYear: 'October 2026',
    startDate: '20 Oct 2026',
    endDate: '27 Oct 2026',
    rawDate: '2026-10-20',
    duration: '7 nights',
    priceGBP: 1390,
    sharingPriceNote: 'Discount for room sharing',
    medium: 'Watercolor & Pastels',
    spotsLeft: 4,
    maxGroupSize: 8,
    destinationUrl: '/#destinations',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800',
    highlights: ['Warm autumn sun away from chilly UK weather', 'Dramatic red sea cliffs and terraced gardens', 'Peaceful unhurried island tempo']
  },

  // 15. Morocco - Autumn
  {
    id: 'cal-mo-2',
    destinationId: 'morocco',
    destinationName: 'Morocco',
    destinationTag: 'Morocco',
    tripName: 'Marrakech Riad & High Atlas Kasbahs',
    route: 'Marrakech, Telouet & Ourika Valley',
    departureMonthYear: 'November 2026',
    startDate: '07 Nov 2026',
    endDate: '14 Nov 2026',
    rawDate: '2026-11-07',
    duration: '7 nights',
    priceGBP: 1590,
    sharingPriceNote: 'Non-painting partners welcome',
    medium: 'Pen & Ink, Watercolor',
    spotsLeft: 6,
    maxGroupSize: 8,
    destinationUrl: '/#destinations',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800',
    highlights: ['Warm sunny days in the souks and courtyards', 'High Atlas peaks with early snow caps', 'Vibrant spice markets and lantern light']
  },

  // 16. Sri Lanka - Land of Smiles Nov 2026
  {
    id: 'cal-sl-ls1',
    destinationId: 'sri-lanka',
    destinationName: 'Sri Lanka',
    destinationTag: 'Sri Lanka',
    tripName: 'Land of Smiles',
    route: '16 nights, Negombo to Colombo',
    departureMonthYear: 'November 2026',
    startDate: '08 Nov 2026',
    endDate: '24 Nov 2026',
    rawDate: '2026-11-08',
    duration: '16 nights',
    priceGBP: 2800,
    sharingPriceNote: '£2,200 if sharing a room',
    medium: 'Vibrant watercolour inks',
    spotsLeft: 3,
    maxGroupSize: 8,
    destinationUrl: '/painting-holidays-sri-lanka',
    imageUrl: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800',
    highlights: ['Galle Fort, Sinharaja rainforest and waterfalls', 'Elephant safari in Udawalawa national park', 'Comprehensive island tour in air-conditioned vehicle']
  },

  // 17. Sri Lanka - Rajarata Cultural Triangle Nov 2026
  {
    id: 'cal-sl-raj1',
    destinationId: 'sri-lanka',
    destinationName: 'Sri Lanka',
    destinationTag: 'Sri Lanka',
    tripName: 'Rajarata (Cultural Triangle)',
    route: '10 nights from Negombo',
    departureMonthYear: 'November 2026',
    startDate: '18 Nov 2026',
    endDate: '28 Nov 2026',
    rawDate: '2026-11-18',
    duration: '10 nights',
    priceGBP: 1460,
    sharingPriceNote: '£1,270 if sharing / £1,360 with Ocean Breezes',
    medium: 'Watercolours',
    spotsLeft: 3,
    maxGroupSize: 8,
    destinationUrl: '/painting-holidays-sri-lanka',
    imageUrl: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
    highlights: ['Kandy Lake, Polonnaruwa and Anuradhapura ruins', 'Sigiriya Lion rock fortress & Dambulla cave temples', 'Misty Knuckles mountain ranges']
  },

  // 18. Sri Lanka - Ocean Breezes Nov/Dec 2026
  {
    id: 'cal-sl-ob1',
    destinationId: 'sri-lanka',
    destinationName: 'Sri Lanka',
    destinationTag: 'Sri Lanka',
    tripName: 'Ocean Breezes',
    route: '7 nights, Negombo to Bentota',
    departureMonthYear: 'November 2026',
    startDate: '29 Nov 2026',
    endDate: '06 Dec 2026',
    rawDate: '2026-11-29',
    duration: '7 nights',
    priceGBP: 1280,
    sharingPriceNote: 'Discount £200 for two sharing a room',
    medium: 'Watercolours',
    spotsLeft: 2,
    maxGroupSize: 8,
    destinationUrl: '/painting-holidays-sri-lanka',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800',
    highlights: ['Boutique hotel base on quiet tropical lane', 'Bentota riverboat & Kosgoda turtle conservation', 'Train journey to Galle Fort']
  },

  // 19. Sri Lanka - Land of Smiles Jan 2027
  {
    id: 'cal-sl-ls2',
    destinationId: 'sri-lanka',
    destinationName: 'Sri Lanka',
    destinationTag: 'Sri Lanka',
    tripName: 'Land of Smiles',
    route: '16 nights, Negombo to Colombo',
    departureMonthYear: 'January 2027',
    startDate: '10 Jan 2027',
    endDate: '26 Jan 2027',
    rawDate: '2027-01-10',
    duration: '16 nights',
    priceGBP: 2800,
    sharingPriceNote: '£2,200 if sharing a room',
    medium: 'Vibrant watercolour inks',
    spotsLeft: 4,
    maxGroupSize: 8,
    destinationUrl: '/painting-holidays-sri-lanka',
    imageUrl: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800',
    highlights: ['Escape European winter to sunny tropics', 'Sinharaja rainforest and tea country sunrises', 'Historic colonial hotel Colombo finale']
  },

  // 20. Sri Lanka - Rajarata Jan 2027
  {
    id: 'cal-sl-raj2',
    destinationId: 'sri-lanka',
    destinationName: 'Sri Lanka',
    destinationTag: 'Sri Lanka',
    tripName: 'Rajarata (Cultural Triangle)',
    route: '10 nights from Negombo',
    departureMonthYear: 'January 2027',
    startDate: '27 Jan 2027',
    endDate: '06 Feb 2027',
    rawDate: '2027-01-27',
    duration: '10 nights',
    priceGBP: 1460,
    sharingPriceNote: '£1,270 if sharing / £1,360 with Ocean Breezes',
    medium: 'Watercolours',
    spotsLeft: 4,
    maxGroupSize: 8,
    destinationUrl: '/painting-holidays-sri-lanka',
    imageUrl: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
    highlights: ['Five UNESCO World Heritage sites', 'Emerald paddy fields and ancient stone ruins', 'Relaxing colonial lodge on the Ging Oya river']
  },

  // 21. Sri Lanka - Ocean Breezes Feb 2027
  {
    id: 'cal-sl-ob2',
    destinationId: 'sri-lanka',
    destinationName: 'Sri Lanka',
    destinationTag: 'Sri Lanka',
    tripName: 'Ocean Breezes',
    route: '7 nights, Negombo to Bentota',
    departureMonthYear: 'February 2027',
    startDate: '07 Feb 2027',
    endDate: '14 Feb 2027',
    rawDate: '2027-02-07',
    duration: '7 nights',
    priceGBP: 1400,
    sharingPriceNote: 'Discount £200 for two sharing a room',
    medium: 'Watercolours',
    spotsLeft: 4,
    maxGroupSize: 8,
    destinationUrl: '/painting-holidays-sri-lanka',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    sketchUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800',
    highlights: ['Supremely relaxing single-base holiday', 'Quiet green lane boutique hotel retreat', 'Direct link option with Rajarata tour']
  }
];
