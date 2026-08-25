export interface SriLankaTripDeparture {
  id: string;
  startDate: string;
  endDate: string;
  durationLabel: string;
  priceGBP: number;
  spotsLeft: number;
}

export interface SriLankaTrip {
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
  offerings?: string;
  highlights: string[];
  itinerary: {
    day: string;
    activity: string;
  }[];
  included: string[];
  notIncluded: string[];
  note?: string;
  combinable?: string;
  departures: SriLankaTripDeparture[];
}

export const SRI_LANKA_TRIPS: SriLankaTrip[] = [
  {
    id: 'land-of-smiles',
    number: 1,
    name: 'Land of Smiles',
    route: '16 nights, Negombo to Colombo',
    medium: 'Vibrant watercolour inks',
    priceNote: '£2,800 (£2,200 if sharing a room). Non-painting partners welcome.',
    fromPriceGBP: 2200,
    durationRange: '16 nights',
    imageUrl: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      'From picture-postcard beaches to impressive waterfalls, tea plantations to virgin jungle. Gardens filled with bright tropical flowers and abundant birdlife; mysterious temples, sweeping mountain vistas and a culture which will surprise and delight you.',
      'There is so much diversity in this fascinating country and size can be deceptive; it’s impossible to see it all in one short trip. As we are primarily sketching the landscape and don’t wish to spend all our time inside a vehicle, we’ll take roads less travelled as we explore one small corner of this spectacular island, simply bursting at the seams with living history, warmth and exotic beauty.'
    ],
    offerings: 'Travelling by comfortable, air-conditioned vehicle with an expert local driver we will cover a variety of scenery taking in some little-known areas as well as some must-sees. You will truly feel as if you’ve seen parts of rural Sri Lanka that most tourists don’t… and the sketching possibilities are superb.',
    highlights: [
      'Sun-drenched beaches of the South and historic Galle',
      'Cool highland landscapes and tea country',
      'Sinharaja rainforest exploration',
      'Elephant spotting in Udawalawa and Sri Lanka’s highest waterfall'
    ],
    itinerary: [
      { day: 'Arrival', activity: 'Meet at our hotel in Negombo to rest and acclimatise' },
      { day: 'Day 2', activity: 'Relaxation and exploration around Negombo with optional excursions. Open the sketchbooks!' },
      { day: 'Day 3', activity: 'Drive down coast to Bentota; sketch the beautiful beach' },
      { day: 'Day 4', activity: 'Away from the coast towards the hill country and Ratnapura on small rural roads' },
      { day: 'Day 5', activity: 'Sketching at the lovely Bopath Ella waterfall and a lofty rock temple' },
      { day: 'Day 6', activity: 'Explore the "city of gems" before heading into tea country and cooler climes' },
      { day: 'Day 7', activity: 'Sunrise at "Lipton’s Seat", visit a tea factory, and admire the sweeping views' },
      { day: 'Day 8', activity: 'Visit the country’s highest waterfall among pine-forested mountain scenery' },
      { day: 'Day 9', activity: 'Towards the plains, stopping for lunch at a traditional rest-house beside the river' },
      { day: 'Day 10', activity: 'Early morning elephant safari with quick sketching at Udawalawa national park; tranquil lake views and a visit to the Elephant Transit Home' },
      { day: 'Day 11', activity: 'Drive the back roads to Deniyaya and our simple lodge on the edge of the rainforest' },
      { day: 'Day 12', activity: 'Optional escorted rainforest trek in Sinharaja forest reserve; afternoon sketching the verdant plant life around the peaceful calm of our lodge' },
      { day: 'Day 13', activity: 'Hit the coast once again at beautiful Weligama Bay, with time painting on the beach' },
      { day: 'Day 14', activity: 'Sketch the stilt fishermen at Koggola, then onward to UNESCO designated Galle Fort' },
      { day: 'Day 15', activity: 'A whole day exploring the well-preserved old city of Galle with its Dutch fort and lighthouse' },
      { day: 'Day 16', activity: 'Exhilarating boat trip up the Madu river for mangroves, birdlife and cinnamon before the fitting finale of a historic colonial hotel in the heart of Colombo, where the trip ends. Final sketchbook appraisal and farewell drinks' }
    ],
    included: [
      'All transport while on tour Negombo-Negombo in comfortable air-conditioned vehicle',
      'All accommodation, bed & breakfast',
      'Some dinners and lunches',
      'Set of colours appropriate for your holiday',
      'Elephant safari experience',
      'Expert painting tuition/guidance and ongoing sketchbook reviews'
    ],
    notIncluded: [
      'Some art materials (you will be sent a detailed list of what to bring)',
      'International flights and any extra nights in Sri Lanka',
      'Some dinners and lunches as per itinerary',
      'Additional snacks, soft and alcoholic drinks and bottled water',
      'Entrance to optional attractions outwith or during itinerary (e.g. Sinharaja, Ayurvedic treatments)',
      'Any tips you may wish to leave for hotel staff, our lovely driver, park guides or in temples (where a small donation is expected)'
    ],
    note: 'Pack light - this trip changes location frequently.',
    departures: [
      { id: 'sl-ls-1', startDate: '08 Nov 2026', endDate: '24 Nov 2026', durationLabel: '16 nights', priceGBP: 2800, spotsLeft: 3 },
      { id: 'sl-ls-2', startDate: '10 Jan 2027', endDate: '26 Jan 2027', durationLabel: '16 nights', priceGBP: 2800, spotsLeft: 4 }
    ]
  },
  {
    id: 'ocean-breezes',
    number: 2,
    name: 'Ocean Breezes',
    route: '7 nights, Negombo to Bentota',
    medium: 'Watercolours',
    priceNote: '£1,280 for 2026 departure (discount £200 for two sharing a room); £1,400 for 2027 departure. Non-painting partners welcome.',
    fromPriceGBP: 1080,
    durationRange: '7 nights',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      'Feel all your cares melt away as the warmth of the tropical sun and the timeless calm of rural Sri Lanka wash over you on this supremely relaxing Sketching Break.',
      'Staying in a fabulous small, boutique hotel on a quiet, green lane surrounded by trees, fields, flowers, birds and butterflies you will feel so cosseted and comfortable you might not want to go anywhere! Yet this tiny corner of Paradise hides many scenic gems.',
      'On this holiday we don’t have to travel far to find a multitude of sketching possibilities, some virtually on our doorstep. Each day will bring something different, surprising and beautiful, yet with so little effort on your part you can concentrate entirely on your painting as we become intimately acquainted with our immediate surroundings.',
      'Ideal for those who want to get settled in one place, yet still see - and paint - the best of the area, with as much or as little instruction and guidance as you need. As usual I will set special "tasks" to challenge your sketching and on this holiday, there will be plenty of opportunity to produce some more "finished" paintings as well.'
    ],
    highlights: [
      'Relaxing in comfort under the tropical sun',
      'Coastal train ride to UNESCO-listed Galle',
      'Picture-perfect beaches and turtle conservation project',
      'Beruwela lighthouse and the slow pace of rural Sri Lanka'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'Spend your first night in Negombo near the beach to relax, recuperate and acclimatise from your journey. Meet the rest of the group' },
      { day: 'Day 2', activity: 'Transfer to our home base near Bentota, where we’ll start our sketchbooks off on the nearby beach and enjoy a delicious local lunch' },
      { day: 'Day 3', activity: 'Quiet rural lanes, boats on the riverbank and a temple lake filled with waterlilies' },
      { day: 'Day 4', activity: 'Stunning, deserted Kosgoda beaches and a turtle conservation project' },
      { day: 'Day 5', activity: 'Short boat ride to Beruwela lighthouse for spectacular views, and sheltered rockpool swimming' },
      { day: 'Day 6', activity: '(Optional) entertaining train ride to Galle for sketching and sightseeing. Alternatively a chance to stay put or enjoy various attractions nearby' },
      { day: 'Day 7', activity: 'Boat trip and mangrove sketching on the Bentota river, and pretty "Temple island". Final evening appraisal and farewell drink' },
      { day: 'Day 8', activity: 'Transfer back to Colombo for your flight or onward travel arrangements' }
    ],
    included: [
      'Transport from airport/Colombo to Bentota hotel and back',
      'Transport (by car, train and boat) for included excursions as per itinerary',
      'All accommodation and meals except 2 lunches as per itinerary',
      'Set of colours suitable for your holiday',
      'Expert tuition/guidance with organised sketching and painting each day'
    ],
    notIncluded: [
      'Some art materials (you will be sent a list of what to bring)',
      'International flights and transport from/to other areas of Sri Lanka',
      '2 lunches as per itinerary',
      'Extra snacks, soft and alcoholic drinks and bottled water',
      'Optional excursions, tuktuk transport to beach or town as and when required outside of itinerary',
      'Tips and souvenirs (budget around £10 per day per person to cover these expenses while in resort)'
    ],
    combinable: 'There is a pre-extension available for this itinerary, Rajarata, taking in some of Sri Lanka’s cultural highlights. Please enquire if you are interested in forming a longer itinerary.',
    departures: [
      { id: 'sl-ob-1', startDate: '29 Nov 2026', endDate: '06 Dec 2026', durationLabel: '7 nights', priceGBP: 1280, spotsLeft: 2 },
      { id: 'sl-ob-2', startDate: '07 Feb 2027', endDate: '14 Feb 2027', durationLabel: '7 nights', priceGBP: 1400, spotsLeft: 4 }
    ]
  },
  {
    id: 'rajarata',
    number: 3,
    name: 'Rajarata',
    route: '10 nights from Negombo',
    medium: 'Watercolours',
    priceNote: '£1,460 (£1,270 if two sharing); £1,360 if taken with Ocean Breezes.',
    fromPriceGBP: 1270,
    durationRange: '10 nights',
    imageUrl: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      '"Rajarata", or "Place of Kings" was the name given to the area of northeast-central Sri Lanka now referred to as the Cultural Triangle, encompassing ancient capitals, temples and natural wonders.',
      'The Cultural Triangle is an area northeast of the Hill Country, the points of the "triangle" being marked by Sri Lanka’s three historic capitals: the first Sinhalese capital of Anuradhapura; medieval Polonnaruwa and the hill capital of Kandy. Between these cities we find the Sigiriya rock fortress, one of the Wonders of the Ancient World, and the beautiful Dambulla cave temple complex.',
      'Our journey up from (and back to) the steamy coast is less of a triangle and more of a mis-shapen oval, though we visit each of the five UNESCO-listed historic sites and all three points of the triangle. We slip in a sublime extra at the end, with a wonderfully relaxing, colonial-style lodge with its own river frontage.',
      'This trip was designed as an extension to Ocean Breezes, but if you’re more "culture" than "beach", it has more than enough wow factor to be taken by itself, and offers an extensive overview of Sri Lankan history, culture and natural beauty.'
    ],
    highlights: [
      'Stroll around Kandy lake watching for water monitors',
      'Take the road less travelled through the misty Knuckles ranges',
      'Emerald paddy fields and picturesque ruins in Polonnaruwa and Anuradhapura',
      'Breathtaking Dambulla rock temples and iconic Sigiriya rock'
    ],
    itinerary: [
      { day: 'Arrival', activity: 'Spend the night in a guest house in Negombo, not far from the airport; rest, relax and acclimatise. Meet the group' },
      { day: 'Day 2', activity: 'Sketching at the botanical gardens in Perideniya; arrival in Kandy to our hotel above the lake' },
      { day: 'Day 3', activity: 'Free day in Kandy with many painting opportunities; optional visit to the Temple of the Tooth' },
      { day: 'Day 4', activity: 'Long, scenic drive through the beautiful, misty Knuckles mountains, stopping to paint before reaching historic Polonnaruwa' },
      { day: 'Day 5', activity: 'Sketching and painting the ancient temple complex and paddy fields in the area; drive to Sigiriya village' },
      { day: 'Day 6', activity: 'Painting and perhaps climbing the iconic Sigiriya "Lion" rock' },
      { day: 'Day 7', activity: 'Dambulla cave temples with their well-preserved frescoes and hundreds of statues' },
      { day: 'Day 8', activity: 'Anuradhapura ancient city with numerous temples and buildings in various states of picturesque decay' },
      { day: 'Day 9', activity: 'Meandering back towards the coast with a stop at a beautiful, lesser-known rock temple en route; arrival on the Ging Oya river' },
      { day: 'Day 10', activity: 'Free day on the river, close to the beach' },
      { day: 'Day 11', activity: 'Transfer to the airport or Negombo for your onward travel arrangements' }
    ],
    included: [
      'Transfers from and to the airport',
      'Transport in an air-conditioned minivan with experienced local driver',
      'All accommodation on a B&B basis',
      '2 dinners and some lunches',
      'Set of watercolours suitable for your holiday',
      'Expert guidance/tuition throughout the trip as required and regular sketchbook reviews',
      'Entry to sites where they form an integral part of the itinerary'
    ],
    notIncluded: [
      'International flights to/from Sri Lanka',
      'Sri Lanka entry visa',
      'Most dinners',
      'Some art materials (you will be sent a list of what to bring)',
      'Entrance fees when the visit is optional (Sigiriya climb; Temple of the Tooth etc)',
      'Bottled water and drinks, alcoholic or otherwise, unless included with meals',
      'Extra activities outwith the itinerary and extra nights in Sri Lanka before or after the trip'
    ],
    combinable: 'How about a week’s extension near the beach? Ocean Breezes can be combined with Rajarata for a seamless cultural and coastal holiday.',
    departures: [
      { id: 'sl-raj-1', startDate: '18 Nov 2026', endDate: '28 Nov 2026', durationLabel: '10 nights', priceGBP: 1460, spotsLeft: 3 },
      { id: 'sl-raj-2', startDate: '27 Jan 2027', endDate: '06 Feb 2027', durationLabel: '10 nights', priceGBP: 1460, spotsLeft: 4 }
    ]
  }
];
