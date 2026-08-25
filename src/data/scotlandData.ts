export interface ScottishTripDeparture {
  id: string;
  startDate: string;
  endDate: string;
  durationLabel: string;
  priceGBP: number;
  spotsLeft: number;
}

export interface ScottishTrip {
  id: string;
  number: number;
  name: string;
  base: string;
  medium: string;
  classification?: string;
  discountNote?: string;
  oneLineHighlight: string;
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
  importantNote?: string;
  whoThisSuits: string;
  whoThisIsLessSuitableFor?: string;
  departures: ScottishTripDeparture[];
  alsoAvailable?: string;
}

export const SCOTTISH_TRIPS: ScottishTrip[] = [
  {
    id: 'the-bonnie-broom',
    number: 1,
    name: 'The Bonnie Broom',
    base: 'Ullapool, Ross-shire',
    medium: 'Watercolours',
    discountNote: 'Discount for two sharing a room / non-painting partners and if taking as an extension to Windswept Wilderness.',
    oneLineHighlight: 'Matchless beauty of the Summer Isles and the Coigach peninsula; iconic peaks and island vistas.',
    fromPriceGBP: 890,
    durationRange: '4 or 7 nights',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      'Set on the shores of Loch Broom just an hour from Inverness, pretty Ullapool is the gateway to the far north-west Highlands. Nestling beneath Bheinn Ghoblach and protected by the Gulf Stream, the village gazes south towards the Fannichs, a pocket of high peaks and lonely lochs. To the north lie the famed Summer Isles: strewn across an often tumultuous, occasionally docile sea are more than a dozen islands, some no more than rocks, some covered in pink ‘thrift’, others concealing caves, arches and blowholes; a magical place where gulls wheel and shags line the rocks with their drying wings spread wide.',
      'Like neighbouring Assynt, this land has a complex geology and a sense of untamed wilderness despite the obvious signs of human habitation, both ancient and recent. Ullapool itself buzzes in summer with a cheerful and relaxed holiday vibe. Visitors from all corners of the world stroll the waterfront munching award-winning fish and chips, counting the boats in the harbour and gazing at the horizon, perhaps at the ‘Isle of Lewis’ as it plies back and forth across the Minch to Stornoway.',
      'Ullapool, with its plentiful accommodation and wealth of cafes, bars and restaurants is an ideal base from which to explore this beautiful area and we find varied landscapes in all directions, with something different and inspiring to paint each day.',
      'With longer to spare you can take advantage of its proximity to the Western Isles, and spend an intensive three days immersed in the ancient history, wide, windswept beaches and austere peatland that make these islands unique.',
      'This trip (the short or long version) can be taken together with ‘Windswept Wilderness’ for a thorough exploration of this unique area.'
    ],
    highlights: [
      'Matchless beauty of the Summer Isles and the Coigach peninsular',
      'Iconic peaks and island vistas',
      'Bluebell-carpeted woodland and ancient wonders of the Gaelic homeland'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'Without venturing too far we visit a picturesque lighthouse and a pretty, community-owned island with wonderful seascapes' },
      { day: 'Day 2', activity: 'Woodland walks, peaceful gardens and an impressive waterfall gorge' },
      { day: 'Day 3', activity: 'A visit to the breathtaking Summer Isles and sandy beaches of the Coigach peninsular' },
      { day: 'Optional Extension', activity: 'More time to spare? Take the ferry to Stornoway for a whirlwind immersive experience on the Western Isles on this optional extension' },
      { day: 'Day 5', activity: 'Ferry to Stornoway. Explore the town, visit the castle and rugged shoreline' },
      { day: 'Day 6', activity: 'Callanish standing stones, blackhouses and an impressive dun' },
      { day: 'Day 7', activity: 'Boat trip for sea stacks, islands and wildlife, and the magnificent sands of Uig' },
      { day: 'Day 8', activity: 'World-class white sand beaches and mountainous interior of Harris, pretty Tarbet, then afternoon ferry back to Ullapool' }
    ],
    included: [
      '4 or 7 nights accommodation on a B&B basis',
      'Ferry tickets (if taking the Western Isles extension)',
      'Daily transport to and from scenic sketching spots',
      'Quality watercolour set & materials',
      'Tuition / guidance from Mary King as required',
      'Some lunches and daily refreshments'
    ],
    notIncluded: [
      'Transport to and from Ullapool',
      'Some specialist art materials',
      'Dinners and personal drinks outwith the daily painting itinerary',
      'Some lunches'
    ],
    importantNote: 'As this is a remote area with little or no public transport to the locations we’ll be visiting, a car is essential. If there are more than four participants on this trip, we will need two vehicles. If you are travelling with a car, please be prepared for the possibility of using it and taking a passenger for a contribution towards fuel costs. Those without a car can still join the trip, of course.',
    whoThisSuits: 'Everyone - including anyone who doesn’t want to drive very far or do much strenuous walking. The locations are equally splendid but this is a slightly gentler trip, suitable for all levels, based in a slightly less remote community. The extra time spent on the Western Isles will appeal to those interested in history and Gaelic culture.',
    departures: [
      { id: 'bb-1', startDate: '14 Jun 2026', endDate: '18 Jun 2026', durationLabel: '4 nights', priceGBP: 890, spotsLeft: 3 },
      { id: 'bb-2', startDate: '18 Jun 2026', endDate: '25 Jun 2026', durationLabel: '7 nights (with Isle of Lewis/Harris ext.)', priceGBP: 1390, spotsLeft: 2 },
      { id: 'bb-3', startDate: '12 Sep 2026', endDate: '16 Sep 2026', durationLabel: '4 nights', priceGBP: 890, spotsLeft: 4 }
    ]
  },
  {
    id: 'windswept-wilderness',
    number: 2,
    name: 'Windswept Wilderness',
    base: 'Lochinver',
    medium: 'Watercolours and drawing materials',
    classification: 'Adventure (not ‘Break’ due to the full and active nature of the itinerary)',
    oneLineHighlight: 'Indescribable landscapes, exhilarating wilderness walks, puffins on Handa Island & mighty Suilven.',
    fromPriceGBP: 750,
    durationRange: '6 days (or individual days)',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      'This small corner of Scotland is home to an almost endless array of stunning natural sights and is the perfect destination for anyone who loves raw nature in all its moods, and enjoys remote isolation.',
      'Although we are not moving from place to place for where we sleep, I have classed this as an ‘Adventure’ rather than a ‘Break’ due to the full and active nature of the itinerary. Thus it will suit people with an adventurous spirit keen to see and experience everything that is unique, surprising and beautiful in this incredible area, and capture it in a sketchbook.',
      'With an impossibly beautiful sight around every corner, choosing becomes very difficult. I have tried to give as comprehensive an overview as possible for the short time we have, taking in the best of the iconic views as well as some hidden gems well off the beaten track. In this vast landscape with its ever-changing light, the same mountain will look different each day. Understanding this, the itinerary is busy, visiting specially selected viewpoints as well as including some classic short walks.',
      'Immersion in this landscape no matter what the weather, with nothing but the sound of birds overhead and the smell of bog myrtle under your feet, is simply soul-cleansing.'
    ],
    highlights: [
      'Up close and personal with the most indescribable landscapes you’ve ever seen',
      'Exhilarating wilderness walks in ancient Geopark geology',
      'Learn to sketch quickly in fast-changing Highland light',
      'Puffin spotting on Handa Island and the mighty Suilven from all angles'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'Walking and sketching near ‘Boat Bay’ within the Inverpolly Nature Reserve' },
      { day: 'Day 2', activity: 'Three beaches and a waterfall; the incredible ‘Split Rock’ and the matchless lineup of the Assynt and Coigach peaks' },
      { day: 'Day 3', activity: 'Pine-studded Loch Assynt and historic ruins of Ardvreck Castle' },
      { day: 'Day 4', activity: 'Salt-washed sea cliffs on the Scottish Wildlife Trust Handa Island reserve, with the chance to watch (or sketch!) puffins' },
      { day: 'Day 5', activity: 'Walk to the Kirkaig Falls and beyond, with a superb view of Suilven' },
      { day: 'Day 6', activity: 'River and woodland scenes closer to home; a hidden cove and the definitive view of Lochinver village. Early evening drink at a lovely local hotel with a magnificent view over Lochinver, for a fitting end to a fun week' }
    ],
    included: [
      'Escorted travel to exceptionally scenic, sometimes hidden sketching spots and short walks',
      'Expert guidance with your sketching as and when required, and regular progress reviews',
      'Packed lunches as specified in the itinerary and a visit to the renowned Pie Shop',
      'Handa Island ferry crossing',
      'Final review with complimentary drink on the last afternoon',
      'Art Pack containing the sketching materials you will need for the trip and beyond'
    ],
    notIncluded: [
      'Accommodation (advice provided on best local B&Bs and hotels)',
      'Transport to and from Lochinver',
      'Meals except lunches as stated in itinerary',
      'Optional / extra drinks or snacks'
    ],
    importantNote: 'As this is a remote area with little or no public transport to the less accessible locations we’ll be visiting, cars are ESSENTIAL. We will be using at least one vehicle every day and the trip can not run without this. In wet weather we might also be painting from the car. You should aim to bring yours (or hire one, if flying to Inverness) and be happy to take passengers. While I will mostly be providing the transport in my own car we may need more than one, depending on numbers, so it is important there are others available. If a non-driver would like to join the trip this is fine, as long as there are enough cars to take us all to our sketching destinations (based on 4 people in each car). This will be advised upon booking and a small contribution towards fuel costs may be required.',
    whoThisSuits: 'Experienced sketchers who want to discover the best views and spend time with a like-minded group; those new to sketching quickly outside, who like the idea of practising the skill by visiting lots of stunning locations; those who would like a fairly active holiday in this area and to see as much as possible, yet fancy a bit of sketching as well, rather than climbing mountains; those new to rough walking and to sketching who would like to try both in one of the most beautiful, yet little-known parts of Britain.',
    whoThisIsLessSuitableFor: 'It is possibly less suitable for complete beginners requiring a lot of intensive tuition due to the short amount of time we’ll be spending in some of the locations. It is also unsuitable for those with an aversion to walking; the walks are not strenuous but are on uneven terrain, up to 4 hours in length and unavoidable.',
    alsoAvailable: 'Also available as individual days for people with less time to spare - ask for details and costs.',
    departures: [
      { id: 'ww-1', startDate: '24 May 2026', endDate: '30 May 2026', durationLabel: '6 days', priceGBP: 750, spotsLeft: 2 },
      { id: 'ww-2', startDate: '07 Jun 2026', endDate: '13 Jun 2026', durationLabel: '6 days', priceGBP: 750, spotsLeft: 3 },
      { id: 'ww-3', startDate: '20 Sep 2026', endDate: '26 Sep 2026', durationLabel: '6 days', priceGBP: 750, spotsLeft: 4 }
    ]
  },
  {
    id: 'around-the-blooming-heather',
    number: 3,
    name: 'Around the Blooming Heather',
    base: 'Inverness (10 days)',
    medium: 'Watercolours and artist sketchbook',
    oneLineHighlight: 'Cairngorms national park, ancient castles, coastal caves, lochs and Glen Affric from Highland Capital.',
    fromPriceGBP: 1150,
    durationRange: '10 days',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      '‘Oh, the summer time is coming, And the trees are sweetly blooming, And the wild mountain thyme Grows around the blooming heather. Will ye go, lassie go?’',
      'Inverness may be the Highland capital but is ideally situated to explore the huge variety of landscapes surrounding it in all directions, each within an hour’s drive from the centre. Granted city status in 2000 it boasts an enormous array of accommodation and eating options along with galleries, museums and music venues - and, of course, its own castle.',
      'Well-served with air, rail and road links, this trip will appeal to those without their own transport and for whom the remote West is just a little too wild and woolly! With a slightly milder climate than the west coast, fewer midges and the same heather-covered hillsides, there’s every reason to base a sketching holiday here. So... will ye go?'
    ],
    highlights: [
      'Scots pines, red squirrels and ospreys in Caledonian forest',
      'Wide, empty beaches and deep gorges',
      'A fun funicular and Cairn Gorm summit panorama',
      'Historic castles, wooded glens and the chance to see Nessie'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'Our first day is spent exploring Cawdor Castle, its lovely gardens and wooded grounds' },
      { day: 'Day 2', activity: 'From Inverness, our sketching journey continues in the whitewashed fishing village of Portmahomack and a walk along the rocky shoreline towards a lighthouse' },
      { day: 'Day 3', activity: 'Complete circuit of Loch Ness, with stops at Falls of Foyers and the romantically-situated Urquhart Castle' },
      { day: 'Day 4', activity: 'On the Moray Firth: Fairy Glen, beach caves and the possibility of dolphins' },
      { day: 'Day 5', activity: 'A day of lochs, pines and wildlife in the Cairngorms national park' },
      { day: 'Day 6', activity: 'Loch Fleet nature reserve, handmade chocolate and an award-winning ‘chippy’!' },
      { day: 'Day 7', activity: 'A rest day, with the chance for independent exploration, a spot of urban sketching or an optional visit to the mysterious Clava Cairns' },
      { day: 'Day 8', activity: 'Gorgeous Glen Affric with its native woodlands and heather-covered hillsides' },
      { day: 'Day 9', activity: 'Big, beautiful beach at Findhorn and inland to a rushing river and woodland walk' },
      { day: 'Day 10', activity: 'Back into the Cairngorms for an old packhorse bridge, a stunning loch and funicular railway (and walk) to the summit' }
    ],
    included: [
      'Transport to a different painting/sketching location each day',
      'Art Pack of artists’ quality art materials and sketchbook',
      'Expert guidance as and when required for your sketching and painting',
      'Entry to Cawdor Castle (and to other castles/attractions when wet weather prohibits original plans)',
      'Osprey centre entry',
      'Cairngorm funicular and guided summit walk'
    ],
    notIncluded: [
      'Transport to/from Inverness',
      'Accommodation and meals',
      'Drinks or snacks along the way'
    ],
    whoThisSuits: 'Anyone who wants to see the maximum amount of the fabulous North as possible in the time available. Anyone who does not want to / cannot drive themselves, and prefers to travel with a local who can show them the best places, not wasting time getting lost while missing out on the more hidden attractions. Anyone who prefers the choice of accommodation, restaurants and cultural attractions that a city offers but likes to get out into nature during the day. Anyone happy to do small amounts of scrambly walking to get the best viewpoint, with longer (though not very strenuous) walks on certain days. Experienced artists who wish to be shown, with minimum fuss, the best views in this spectacular region and the inexperienced who want to learn how to sketch and paint outside. This is the ideal trip for Scotland first-timers with the huge variety of subjects it offers.',
    departures: [
      { id: 'bh-1', startDate: '10 Aug 2026', endDate: '20 Aug 2026', durationLabel: '10 days', priceGBP: 1150, spotsLeft: 4 },
      { id: 'bh-2', startDate: '01 Sep 2026', endDate: '11 Sep 2026', durationLabel: '10 days', priceGBP: 1150, spotsLeft: 3 }
    ]
  },
  {
    id: 'where-the-corncrakes-sing',
    number: 4,
    name: 'Where the Corncrakes Sing',
    base: 'Isle of Colonsay, via ferry from Oban (7 nights)',
    medium: 'Artist’s choice (instruction, if required, given in watercolours and drawing materials)',
    oneLineHighlight: 'A restorative week of total immersion in pristine turquoise waters, marram dunes and machair meadows.',
    fromPriceGBP: 1280,
    durationRange: '7 nights',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1000',
    descriptionParagraphs: [
      'Fringed by pristine sandy beaches and clear, turquoise waters; clothed in colourful machair a-buzz with bees and bathed in more sunshine than almost any other part of Scotland, the Inner Hebridean island of Colonsay is a peaceful, joyful, restorative treasure.',
      'The pace is as slow as you want it to be. With narrow roads and little traffic, the obvious way to get around is on foot, by bicycle or perhaps even a kayak; the island is only eight miles long, but despite its modest size it packs in a good variety of scenery. From dazzling white sands in the south to the burnt sienna of Kiloran; twisted, stunted oak forests and serene, reeded lochans; hilltop lookouts, coastal trails and views across to Islay and the Paps of Jura; and the Isle of Oransay, an RSPB reserve with its own priory, which you can walk across to at low tide.',
      'This small island also produces its own craft beers and botanical gin, perhaps going some way to offset the lack of nightlife, although there are regular festivals and events held throughout the year where visitors can mingle with locals through the long, light summer evenings.',
      'During our week on Colonsay the time is yours. Professional and experienced artists are at liberty to pursue their own projects within a small, likeminded group, while short, daily demonstrations and workshops are available for anyone, and may suggest a focus for the day. Inspiration is everywhere for the nature painter on Colonsay and while transport is at your disposal, you may choose simply to wander and immerse yourself in the unspoilt beauty. In inclement weather we will have the shelter of our shared, self-catering accommodation.'
    ],
    highlights: [
      'A week of total immersion in a remote, unspoilt coastal setting amidst wildflower meadows and miles of empty sand',
      'Overall atmosphere and healing, reviving nature of this stunning Hebridean island',
      'Low-tide walk across tidal sands to the 14th-century Oronsay Priory',
      'Evening group appraisals with complimentary bubbles'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'Meet in Oban for the 2.5 hour ferry crossing to Colonsay. Settle into our accommodation and meet to discuss the week’s possibilities, where I will point out my favourite views and paths on the map' },
      { day: 'Day 2', activity: 'Kiloran Bay with its curve of orange-yellow sand, marram dunes and small caves' },
      { day: 'Day 3', activity: 'Coastal walk taking in less-accessible western coves and beaches. Wonder at the colour of the water! Have a go at painting the machair - tricky, but irresistible!' },
      { day: 'Day 4', activity: 'Visit the rhododendron gardens and stroll through the oak woods in the centre of the island, pausing at the lochans or walking up to the trig point on the way back' },
      { day: 'Day 5', activity: 'Enjoy the views around our cottage and work up some sketches indoors; visit the local galleries to see how others capture the island’s essence or take a stroll to the pier to watch the boats come and go' },
      { day: 'Day 6', activity: 'Tide permitting, stroll across the sand to Oronsay and explore the 14th century priory ruins, while trying to identify the seabirds' },
      { day: 'Day 7', activity: 'Gaze across the water to the distinctive shapes of Jura and its ‘Paps’, a wild, remote area where few venture, viewed perfectly from a peaceful, sandy beach near the Strand. Look through our work as a group, with a glass of bubbles, to celebrate a fabulous creative week' },
      { day: 'Day 8', activity: 'Ferry back to Oban, where the trip ends' }
    ],
    included: [
      'Return ferry crossings to the island (without vehicle) from Oban, Argyll & Bute',
      '7 nights accommodation in a large, self-catering property which we all share (discount if travelling with a companion & sharing a room)',
      'All food on a self-catering basis (full details provided on enquiry)',
      'Daily car transport to and from scenic locations during the week',
      'Daily support, guidance, demonstrations and set challenges for those who require them',
      'Critiques, discussions and presentations as desired/proposed by the group',
      'Daily personal feedback if beneficial'
    ],
    notIncluded: [
      'Bringing your own car, bicycle or kayak onto the ferry (cost for a bicycle should be minimal)',
      'Bike hire (if available)',
      'Alcohol (feel free to bring some along!)',
      'Dinner out, which we’ll do at least once during the week',
      'Any extra snacks or special foods you bring with you',
      'Art materials'
    ],
    importantNote: 'Further details of this trip, including living arrangements, will be sent upon enquiry.',
    whoThisSuits: 'Any artist of any level, including professionals in any medium, who like the idea of getting away from it all in complete immersion. This trip allows you the time and freedom to focus on yourself and your work without distraction, in the most beautiful and peaceful location imaginable. The added bonus is a likeminded group to bounce ideas off and share a glass of wine with at the end of each perfect, productive day. Especially suited to those who like to work on their own initiative but are happy to give, and receive, feedback from others during sociable get-togethers. Help, advice and support by way of demos and tailored exercises is available for novice and developing artists using watercolours and drawing materials. While feedback can be provided for any medium, Mary does not instruct in oils or acrylic.',
    departures: [
      { id: 'wc-1', startDate: '04 Jul 2026', endDate: '11 Jul 2026', durationLabel: '7 nights', priceGBP: 1280, spotsLeft: 2 },
      { id: 'wc-2', startDate: '15 Aug 2026', endDate: '22 Aug 2026', durationLabel: '7 nights', priceGBP: 1280, spotsLeft: 3 }
    ]
  }
];
