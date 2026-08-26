export interface MoroccoTripDeparture {
  id: string;
  startDate: string;
  endDate: string;
  durationLabel: string;
  priceGBP: number;
  spotsLeft: number;
}

export interface MoroccoTrip {
  id: string;
  number: number;
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
  included: string[];
  notIncluded: string[];
  extension?: string;
  note?: string;
  departures: MoroccoTripDeparture[];
}

export const MOROCCO_TRIPS: MoroccoTrip[] = [
  {
    id: 'discover-morocco',
    number: 1,
    name: 'Discover Morocco',
    route: '12 days, 13 nights, Marrakech to Marrakech',
    medium: 'Watercolours',
    priceNote: '£2,150 (£1,950 if sharing a room). Non-painting partners welcome.',
    fromPriceGBP: 1950,
    durationRange: '13 nights',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      'This programme is designed for those who want as varied a taste of Morocco as possible; it incorporates mountains, kasbahs, gorges and desert. We will stay in several different locations and you will see some of the best sights that the country has to offer.',
      'The nature of this trip means there is inevitably a little more driving involved. Distances can be large and occasionally, the terrain challenging. However the incredible variety we pack into this holiday makes it a very worthwhile introduction to the country and we make time for our sketchbooks every day.'
    ],
    highlights: [
      'Snow-capped High Atlas panoramas and Tizi-n-Tichka pass',
      'Serenely crumbling Glaoui Palace Kasbah Telouet',
      'Rock formations and dramatic cliffs of the Dades Valley',
      'Unforgettable journey across desert plains to remote retreat of M\'Harech',
      'Palm-lined Draa Valley and the stunningly situated Ait Benhaddou'
    ],
    itinerary: [
      { day: 'Arrival', activity: 'We will meet late afternoon at the hotel in the "medina", a beautiful riad (restored traditional house)' },
      { day: 'Day 1', activity: 'In Marrakech; acclimatisation and immersion in the "pink city", with sketching or sight-seeing opportunities' },
      { day: 'Day 2', activity: 'Drive over the Atlas Mountains via the Tizi-n-Tichka pass to the Glaoui palace at Telouet, then along a scenic minor road to Ait Benhaddou' },
      { day: 'Day 3', activity: 'A full day sketching at the famed hilltop kasbah of Ait Benhaddou with limitless inspiration' },
      { day: 'Day 4', activity: 'Through the desert gateway town of Ouarzazate to Skoura palmery, where life continues in timeless fashion' },
      { day: 'Day 5', activity: 'Through the Valley of the Roses, off-road to the Dades Valley with its weird rock formations and spectacular gorge' },
      { day: 'Day 6', activity: 'Full day exploring the Dades area, "Valley of 1000 Kasbahs"' },
      { day: 'Day 7', activity: 'Spectacular routes through little-visited, stony desert to M\'Harech oasis' },
      { day: 'Day 8', activity: 'A whole day to immerse yourself in this wonderful, remote region through which the Paris-Dakar rally used to pass' },
      { day: 'Day 9', activity: 'Through dramatic sand and rockscapes to Zagora on the edge of the Sahara and the beautiful, palm-lined Draa Valley' },
      { day: 'Day 10', activity: 'A free day in Zagora with optional workshops and outings, or just relax beside the pool' },
      { day: 'Day 11', activity: 'Explore and sketch the historic ruins of Kasbah des Caids, Tamnougalt; an incredibly authentic experience' },
      { day: 'Day 12', activity: 'Possible fast sketching the High Atlas from the pass before descending once again to Marrakech, and a final dinner together' }
    ],
    included: [
      'All transport on the journey in comfortable 4x4 vehicles',
      'Airport transfers on arrival and departure',
      'Accommodation and breakfast for all nights of the trip',
      'Dinner on all nights outside of Marrakech',
      'Some lunches as stated in the itinerary',
      'Services of expert driver/guide and host Mary King',
      'Set of watercolours appropriate for your holiday'
    ],
    notIncluded: [
      'Flights to and from Marrakech',
      'Dinners in Marrakech',
      'Some lunches along the route where we stop in local cafes',
      'Entrance fees to kasbahs (these are modest)',
      'Any tips you may wish to leave (for optional/unofficial guides, friendly hotel staff and our wonderful drivers)',
      'Carpets (strictly optional, despite what the salesman tries to tell you!)',
      'Some personal art materials (in particular a sketchbook) - you will be advised upon booking'
    ],
    departures: [
      { id: 'mor-dm-1', startDate: '18 Apr 2026', endDate: '01 May 2026', durationLabel: '13 nights', priceGBP: 2150, spotsLeft: 2 },
      { id: 'mor-dm-2', startDate: '07 Nov 2026', endDate: '20 Nov 2026', durationLabel: '13 nights', priceGBP: 2150, spotsLeft: 4 }
    ]
  },
  {
    id: 'painted-desert',
    number: 2,
    name: 'Painted Desert',
    route: '9 nights, Fez to Fez + optional extension',
    medium: 'Vibrant watercolour inks',
    priceNote: '£1,600 (small discount for two sharing a room). Non-painting partners welcome.',
    fromPriceGBP: 1450,
    durationRange: '9 nights',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      'This programme runs during the cooler months when the weather should be ideal for painting outdoors. If you are lucky, in the spring you will see the desert in bloom, an unforgettable sight when the seemingly desolate land becomes a carpet of wild flowers. October brings the dates, ripe and juicy from the tree.',
      'We stay in quiet, peaceful, comfortable desert auberges built in the traditional style using adobe (for warmth in the winter and cool in the summer), and set forth each day to a different nearby location for our sketching. This is the one to choose if you want the minimum time spent driving, the maximum time relaxing, with an unmissable camel trip included in the price!'
    ],
    highlights: [
      'Beautiful riad accommodation in UNESCO-listed Fez medina',
      'Golden dunes of Erg Chebbi and sunset light studies',
      'Wonderful cool desert oasis retreats',
      'Rissani, the oldest Islamic town in Morocco',
      'Overnight trip by camel - sleep under uncountable stars in the Sahara'
    ],
    itinerary: [
      { day: 'Arrival', activity: 'You will be met at the airport and transferred to your beautiful riad accommodation in the medina (old walled part) of Fez. (Transfers from the train station or from other cities are possible, please ask.)' },
      { day: 'Day 1', activity: 'Half-day tour of the historic medina with knowledgeable guide; afternoon free for a spot of urban sketching or relaxing with mint tea' },
      { day: 'Day 2', activity: 'Drive to the Ziz valley palmery via Azrou and one of the 3 High Atlas passes' },
      { day: 'Day 3', activity: 'Via Erfoud to our attractive guesthouse on the edge of the desert' },
      { day: 'Day 4', activity: 'Drive to a stunning, cool oasis in the middle of the desert' },
      { day: 'Day 5', activity: 'Sketching the view from a stunning high plateau and visit the ancient city of Rissani; overnight camel trip, camping in the dunes' },
      { day: 'Day 6', activity: 'Playing in the desert at a peaceful sandy haven' },
      { day: 'Day 7', activity: 'Full day in the sand within sight of Erg Chebbi. Perhaps a splash in the pool?' },
      { day: 'Day 8', activity: 'Drive back to Fez via photogenic old kasbah at Maadid. Arrive in the early evening, and transfer once more to your hotel' }
    ],
    extension: 'A 3-night extension in stunning painter\'s paradise Chefchaouen (the blue pearl city) is available for this trip at extra cost.',
    included: [
      'All transport on the journey in comfortable 4x4 / private vehicle',
      'Airport transfer on arrival and departure in Fez',
      'Accommodation and breakfast for all nights of the trip',
      'Dinner on all nights outside of Fez',
      'Some lunches as stated in the itinerary',
      'Services of expert driver/guide and host Mary King',
      'Set of watercolour inks appropriate for your holiday',
      'Overnight camel safari and Fez city guided tour'
    ],
    notIncluded: [
      'Flights to/from Fez',
      'Dinners in Fez',
      'Some lunches along the route where we stop in local cafes',
      'Entrance fees to historic kasbahs (these are not high)',
      'Any tips you may wish to leave (for guides, hotel staff, and drivers)',
      'Carpets (strictly optional!)',
      'Personal art materials and sketchbooks'
    ],
    departures: [
      { id: 'mor-pd-1', startDate: '25 Apr 2026', endDate: '04 May 2026', durationLabel: '9 nights', priceGBP: 1600, spotsLeft: 3 },
      { id: 'mor-pd-2', startDate: '17 Oct 2026', endDate: '26 Oct 2026', durationLabel: '9 nights', priceGBP: 1600, spotsLeft: 3 }
    ]
  },
  {
    id: 'argans-and-almonds',
    number: 3,
    name: 'Argans & Almonds',
    route: '8 nights from Agadir',
    medium: 'Watercolours & Sketching',
    priceNote: '£1,350. Non-painting partners, writers, hikers and photographers welcome.',
    fromPriceGBP: 1350,
    durationRange: '8 nights',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      'Away from the coast, snaking through gorges and hillsides studded with argan trees, the twisty road climbs and dives into another world. Tafraoute, nestled among the rusty red Anti-Atlas, lies just three hours from the tourist throng in Agadir, yet few ever make it this far. An Amazigh (Berber) stronghold, the area holds onto its agricultural and crafting traditions and feels as authentic as anywhere in Morocco.',
      'The stunning, rocky landscape is strewn with iconic natural features such as Napoleon\'s Hat and the Lion\'s Face among the generally beautiful tall, craggy mountains; it\'s a hikers\' paradise and perfect for landscape painters.',
      'Away from the centre, within quiet adobe villages surrounded by almond, fig, and pomegranate trees, life continues in timeless fashion. The bray of a donkey, the crow of a cockerel or the call to prayer from the village mosque are the only sounds you\'re likely to hear, apart from the reassuring patter of steaming hot tea being poured into your glass.',
      'We stay in a comfortably renovated, charming and cosy, traditional guest house with a lovely, plant-filled terrace overlooking the valley for complete immersion in rural Moroccan village life. Subjects are everywhere, near and far: colourful rugs and ceramics; a jumble of mud-brick dwellings against the rocky hillside; fruit trees interspersed with date palms; old wooden doors, the bark of an olive bush and the peachy pink of the mountains as the sun sets on another glorious day.',
      'On this retreat you are free to work on your own projects in any way you choose, either solitary or accompanied. Drawing and watercolour workshops are made available for those who would like to join in, or if there is something in particular you would like to practise or learn, but there is no obligation. There are sketching excursions during the week, including a full day to the stunning Ait Mansour gorge which is highly recommended, but you can choose to stay behind if you\'re busy with something compelling!',
      'We get together in the evenings, when there\'s the opportunity to show each other what we\'ve been working on, seek useful feedback and share the perfect painting spots we\'ve found on our wanders in this inspiring, hidden corner.',
      'This trip begins and ends in Agadir, so there\'s the option of extending your stay with a night or two at the beach; alternatively, transfers to Marrakech or Essaouira can be arranged for anyone wishing to see a little more of Morocco after an intensively creative week.'
    ],
    highlights: [
      'Full immersion in rural village life among the stunning, rocky landscapes of southern Morocco',
      'Unhurried days and quality time to paint, relax and explore with few distractions',
      'Iconic granite rock formations of Tafraoute and the Anti-Atlas mountains',
      'Full-day excursion to the lush, palm-filled canyon of Ait Mansour gorge',
      'Optional drawing and watercolour workshops tailored to your individual goals'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'Arrive in Agadir, transfer to lovely hotel not far from the airport' },
      { day: 'Day 2', activity: 'Drive into the mountains with a stop at Kasbah Tizourgane for lunch and sketching; arrival at our accommodation in the Ammelne valley. Meeting to discuss our aspirations for the week' },
      { day: 'Day 3', activity: 'Staying locally, we will begin our painting projects and immersion in rural Morocco. Optional workshops. Visit the "Maison Traditionelle" museum or search for the nearby petroglyphs' },
      { day: 'Day 4', activity: 'A short drive can bring us to the famous (or infamous) "Painted Rocks", and some more natural, but equally iconic, formations' },
      { day: 'Day 5', activity: 'Full day excursion to the stunning gorge, Ait Mansour for painting, wandering and wondering' },
      { day: 'Day 6', activity: 'We can have a wonderful close-up view of the mountains whilst enjoying lunch or a drink on the edge of town' },
      { day: 'Day 7', activity: 'Morning meeting to look over our work so far; optional workshops. Afternoon to finish off our projects' },
      { day: 'Day 8', activity: 'Transfer back to Agadir and our hotel near the Souss Massa nature reserve and beach, where the trip ends' }
    ],
    note: 'This artists\' retreat would also be suitable for non-painting partners, especially writers, hikers or photographers who will be in their element here.',
    included: [
      'All transport Agadir-Agadir and on optional excursions',
      '8 nights in characterful hotels/guest houses, bed & breakfast',
      '7 dinners and most lunches',
      'Expert advice and guided sketching/painting as required with Mary King'
    ],
    notIncluded: [
      'International flights to/from Agadir',
      'Art materials',
      'Some lunches',
      'Dinner on final night in Agadir',
      'Onward travel from Agadir',
      'Local tips'
    ],
    departures: [
      { id: 'mor-aa-1', startDate: '04 Mar 2026', endDate: '12 Mar 2026', durationLabel: '8 nights', priceGBP: 1350, spotsLeft: 3 },
      { id: 'mor-aa-2', startDate: '28 Oct 2026', endDate: '05 Nov 2026', durationLabel: '8 nights', priceGBP: 1350, spotsLeft: 4 }
    ]
  }
];
