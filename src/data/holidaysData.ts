import { Destination, Tutor, Testimonial } from '../types';

export const TUTORS: Tutor[] = [
  {
    id: 'elena-rossi',
    name: 'Elena Rossi',
    title: 'Plein Air & Watercolor Specialist',
    bio: 'Classically trained in Florence, Elena has spent over 15 years guiding painters across Tuscan countryside and Mediterranean coasts. Her passion lies in capturing light and atmosphere with loose watercolor washes.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    watercolorHaloColor: '#8a9a86', // soft sage green
    expertise: ['Plein Air Composition', 'Watercolor Transparency', 'Light & Shadow'],
    taughtMediums: ['Watercolor', 'Gouache', 'Pen & Ink'],
    location: 'Florence, Italy',
    quote: 'Art is not about copying nature, but translating the emotion of being outdoors onto paper.',
    featuredArt: [
      {
        title: 'Tuscan Sunrise Light',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=600'
      },
      {
        title: 'Morning in Venice',
        imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  {
    id: 'ahmed-karim',
    name: 'Ahmed Karim',
    title: 'Architectural Sketching & Ink Master',
    bio: 'An architect turned illustrator, Ahmed excels at demystifying complex perspective, historic arcades, and bustling market streetscapes into expressive pen and wash studies.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    watercolorHaloColor: '#ab9b7d', // warm ochre / terracotta
    expertise: ['Urban Perspective', 'Line Precision & Ink', 'Shadow Drama'],
    taughtMediums: ['Ink & Wash', 'Fineliner', 'Graphite'],
    location: 'Marrakech, Morocco',
    quote: 'Once you understand simple horizon lines, every medieval doorway becomes a pleasure to draw.',
    featuredArt: [
      {
        title: 'Kasbah Courtyard Arch',
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  {
    id: 'ennia-vata',
    name: 'Ennia Vata',
    title: 'Atmospheric Landscape & Pastel Tutor',
    bio: 'Ennia’s work is renowned for vibrant color harmony and soft atmospheric transitions. She teaches artists how to capture moody skies, misty valleys, and shimmering coastal reflections.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    watercolorHaloColor: '#a18b76', // warm sandy taupe
    expertise: ['Soft Pastels', 'Sky Gradations', 'Color Harmony'],
    taughtMediums: ['Soft Pastel', 'Watercolor', 'Acrylic Sketching'],
    location: 'Edinburgh, UK',
    quote: 'The secret to dramatic landscapes lies in simplifying background values and preserving pure white paper.',
    featuredArt: [
      {
        title: 'Highland Dusk Mist',
        imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  {
    id: 'filip-vance',
    name: 'Filip Vance',
    title: 'Botanical Illustration & Field Sketching',
    bio: 'With a background in natural history illustration, Filip brings a gentle, observant eye to botanical studies, flora, and coastal geological textures.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    watercolorHaloColor: '#6a7e8a', // Slate blue
    expertise: ['Botanical Detail', 'Texture Rendering', 'Travel Journaling'],
    taughtMediums: ['Colored Pencil', 'Watercolor Pencil', 'Micro-pen'],
    location: 'Cornwall, UK',
    quote: 'A small field sketchbook is the ultimate passport to slowing down and observing beauty.',
    featuredArt: [
      {
        title: 'Coastal Flora & Driftwood',
        imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=600'
      }
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'scotland',
    name: 'Scotland',
    country: 'United Kingdom',
    tagline: 'Tranquil lakes & majestic highlands',
    description: 'The far Northwest — further than many people have ever heard of, let alone visited — contains some of the last true wilderness regions in Europe.',
    shortDescription: 'The far Northwest — further than many people have ever heard of, let alone visited — contains some of the last true wilderness regions in Europe.',
    sketchTag: 'Wilderness & sea lochs',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800',
    durationDays: 7,
    priceGBP: 750,
    skillLevel: 'All Levels Welcome',
    mediums: ['Watercolor', 'Pen & Wash', 'Pastels', 'Drawing Materials'],
    tutorId: 'ennia-vata',
    upcomingDates: [
      { id: 'ww-1', startDate: 'May 24, 2026', endDate: 'May 30, 2026', spotsLeft: 2 },
      { id: 'bb-1', startDate: 'Jun 14, 2026', endDate: 'Jun 18, 2026', spotsLeft: 3 },
      { id: 'wc-1', startDate: 'Jul 04, 2026', endDate: 'Jul 11, 2026', spotsLeft: 2 },
      { id: 'bh-1', startDate: 'Aug 10, 2026', endDate: 'Aug 20, 2026', spotsLeft: 4 },
      { id: 'ww-3', startDate: 'Sep 20, 2026', endDate: 'Sep 26, 2026', spotsLeft: 4 }
    ],
    highlights: [
      'Plein air sketching along Loch Maree and Assynt peaks',
      'Cozy lodge accommodation with private art studio space',
      'Demonstrations on capturing Scottish misty skies and water reflections',
      'Daily feedback and sunset sketchbook sessions'
    ],
    itinerary: [
      { day: 1, title: 'Arrival at Highland Lodge', description: 'Meet tutor for welcome cream tea and custom sketchbook assembly.', sketchFocus: 'Introductory pencil studies of surrounding pine trees' },
      { day: 2, title: 'Silver Waters of Loch Assynt', description: 'Sketching Ardvreck Castle ruins reflecting in calm loch waters.', sketchFocus: 'Water reflections and stone textures' },
      { day: 3, title: 'Coastal Crag & Sea Loch Vista', description: 'Travel to Ullapool harbour for boat and coastal cliff studies.', sketchFocus: 'Loose watercolor washes for dramatic cloud cover' },
      { day: 4, title: 'Studio Day & Technique Workshop', description: 'Refining sketches with soft pastels and gouache highlights.', sketchFocus: 'Color blending and atmospheric depth' },
      { day: 5, title: 'Inverewe Botanical Gardens', description: 'Exotic flora and subtropical garden vignettes in the far northwest.', sketchFocus: 'Botanical silhouettes and rich greenery' },
      { day: 6, title: 'Torridon Mountain Panorama', description: 'Grand finale plein-air painting on the shores of Loch Torridon.', sketchFocus: 'Panoramic mountain range perspectives' },
      { day: 7, title: 'Exhibition & Farewell Breakfast', description: 'Group pop-up exhibition showcasing everyone’s week of creative art.', sketchFocus: 'Art review & celebratory breakfast' }
    ],
    includedEquipment: ['Winsor & Newton Field Watercolor Box', 'A4 Cold-pressed Watercolor Pad', 'Folding Lightweight Easel', 'Brush Roll & Water Pots'],
    gallery: [
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'italy-dolomites',
    name: 'Italy (Dolomites)',
    country: 'Italy',
    tagline: 'Unforgettable mountain world',
    description: 'Just a short flight from the UK can bring you into an unforgettable world, a million dream-miles away.',
    shortDescription: 'Just a short flight from the UK can bring you into an unforgettable world, a million dream-miles away.',
    sketchTag: 'Alpine peaks & valleys',
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
    durationDays: 8,
    priceGBP: 1680,
    skillLevel: 'All Levels Welcome',
    mediums: ['Watercolor', 'Pen & Ink', 'Gouache'],
    tutorId: 'elena-rossi',
    upcomingDates: [
      { id: 'it-1', startDate: 'Jun 10, 2026', endDate: 'Jun 18, 2026', spotsLeft: 2 },
      { id: 'it-2', startDate: 'Oct 02, 2026', endDate: 'Oct 10, 2026', spotsLeft: 4 }
    ],
    highlights: [
      'Stay in boutique family-run chalets overlooking Val di Funes',
      'Daily guided plein-air painting sessions at iconic church view-points',
      'Gourmet South Tyrolean meals and local wine pairings',
      'Masterclass in alpine sunlight and cloud shadows'
    ],
    itinerary: [
      { day: 1, title: 'Venetian Gateway to the Alps', description: 'Transfer from Venice airport with aperitivo and materials distribution.', sketchFocus: 'Quick gesture drawing during evening stroll' },
      { day: 2, title: 'Val di Funes & St. Magdalena Church', description: 'Painting the dramatic Odle mountain jagged peaks behind the timber chapel.', sketchFocus: 'Scale and contrast in mountain scenery' },
      { day: 3, title: 'Pragser Wildsee (Lake Braies)', description: 'Silver-blue glacial water with wooden boats moored along the shore.', sketchFocus: 'Transparent watercolor glazes' },
      { day: 4, title: 'Historic Alpe di Siusi Pastures', description: 'Gentle rolling green meadows dotted with rustic alpine barns.', sketchFocus: 'Capturing warm afternoon sunlight' },
      { day: 5, title: 'Charming Castelrotto Streetscape', description: 'Architectural line and wash of painted facades and cobblestone lanes.', sketchFocus: 'Pen and ink line-work with watercolor washes' },
      { day: 6, title: 'Tre Cime di Lavaredo High Pass', description: 'Breathtaking 360-degree high-altitude sketching shelter.', sketchFocus: 'Rock textures and dramatic tonal values' },
      { day: 7, title: 'Sunset En Rosadira & Vineyard Sketching', description: 'Painting the pink glowing mountains as the sun sets over South Tyrol.', sketchFocus: 'Alpenglow color mixing' },
      { day: 8, title: 'Breakfast Showcase & Farewell', description: 'Art review in the alpine meadow garden prior to departures.', sketchFocus: 'Reflections and sketchbook sharing' }
    ],
    includedEquipment: ['Professional Water Container', 'Cold Pressed 300gsm Paper Block', 'Squirrel Hair Mop Brush', 'Compact Stool'],
    gallery: [
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1520106212299-d99c443e4568?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'morocco',
    name: 'Morocco',
    country: 'Morocco',
    tagline: 'Astonishing landscapes & culture',
    description: 'Join an entrancing journey through astonishing landscapes and experience the sights, sounds and smells of this unique land.',
    shortDescription: 'Join an entrancing journey through astonishing landscapes and experience the sights, sounds and smells of this unique land.',
    sketchTag: 'Exotic souks & Kasbahs',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=800',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800',
    durationDays: 7,
    priceGBP: 1590,
    skillLevel: 'Beginner Friendly',
    mediums: ['Pen & Ink', 'Watercolor', 'Fineliner'],
    tutorId: 'ahmed-karim',
    upcomingDates: [
      { id: 'mo-1', startDate: 'Apr 18, 2026', endDate: 'Apr 25, 2026', spotsLeft: 1 },
      { id: 'mo-2', startDate: 'Nov 07, 2026', endDate: 'Nov 14, 2026', spotsLeft: 6 }
    ],
    highlights: [
      'Stay in a traditional restored Riad in the heart of Marrakech Medina',
      'Exclusive access to private courtyard gardens and Majorelle shade',
      'Mastering light, shadow, and arched doorways',
      'Excursion into the Ourika Valley and Atlas Berber village'
    ],
    itinerary: [
      { day: 1, title: 'Welcome Tea in Marrakech Riad', description: 'Mint tea, orientation, and preparing custom tones for terracotta clay.', sketchFocus: 'Zellij tile pattern study' },
      { day: 2, title: 'Courtyard Architecture & Arches', description: 'Quiet morning sketching inside Ben Youssef Madrasa.', sketchFocus: 'Islamic arch perspective & fine pen lines' },
      { day: 3, title: 'Majorelle Gardens Cobalt & Palms', description: 'Painting the striking cobalt blue villa amidst golden bamboo.', sketchFocus: 'High contrast color theory' },
      { day: 4, title: 'Journey to Telouet Kasbah', description: 'Scenic mountain pass journey to dramatic mudbrick fortress ruins.', sketchFocus: 'Earthy ochre & terracotta watercolor washes' },
      { day: 5, title: 'Atlas Mountain Village Life', description: 'Plein air painting in a peaceful high valley surrounded by walnut trees.', sketchFocus: 'Panoramas & mountain silhouettes' },
      { day: 6, title: 'Spice Souks & Lantern Light', description: 'Capturing light beams piercing woven cane roofs in the spice market.', sketchFocus: 'Chiaroscuro & dappled sunlight' },
      { day: 7, title: 'Rooftop Showcase & Departure', description: 'Celebrating our journals with sunset views of Koutoubia Mosque.', sketchFocus: 'Sunset silhouette speed sketches' }
    ],
    includedEquipment: ['Micro-fineliner Pens (0.1 - 0.8)', 'Earthy Ochre & Ultramarine Palette', 'Accordion Travel Sketchbook', 'Shade Umbrella'],
    gallery: [
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    country: 'Sri Lanka',
    tagline: 'Sun-drenched & verdant land',
    description: "Voted 'world's smiliest country' in a recent poll, this sun-drenched, verdant land delivers to the discerning traveller on all levels.",
    shortDescription: "Voted 'world's smiliest country' in a recent poll, this sun-drenched, verdant land delivers to the discerning traveller on all levels.",
    sketchTag: 'Coastal heritage & wildlife',
    imageUrl: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800',
    durationDays: 10,
    priceGBP: 1950,
    skillLevel: 'All Levels Welcome',
    mediums: ['Watercolor', 'Colored Pencil', 'Travel Journal'],
    tutorId: 'filip-vance',
    upcomingDates: [
      { id: 'sl-1', startDate: 'Jul 05, 2026', endDate: 'Jul 15, 2026', spotsLeft: 4 },
      { id: 'sl-2', startDate: 'Nov 18, 2026', endDate: 'Nov 28, 2026', spotsLeft: 5 }
    ],
    highlights: [
      'Colonial Ramparts of Galle Dutch Fort overlooking Indian Ocean',
      'Private train journey through misty Ella tea plantation hills',
      'Wildlife sketching session observing elephants in natural sanctuary',
      'Stay in heritage plantation bungalows and oceanfront retreats'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Galle Fort', description: 'Check-in to historic Dutch villa inside the fort walls with fresh coconut water.', sketchFocus: 'Initial colonial archway sketches' },
      { day: 2, title: 'White Lighthouse & Ocean Waves', description: 'Morning sketching beneath frangipani trees at Galle Fort lighthouse.', sketchFocus: 'Seascapes and tropical palm shadows' },
      { day: 3, title: 'Dutch Hospital Bastions', description: 'Sunset pen and wash on the bastions as waves crash on coral reefs.', sketchFocus: 'Dynamic wave action and sunset warmth' },
      { day: 4, title: 'Scenic Hill Country Train Journey', description: 'Train trip through misty pine and tea estate curves toward Ella.', sketchFocus: 'Speed sketching landscape vistas' },
      { day: 5, title: 'Nine Arch Bridge & Tea Estates', description: 'Famous stone arch bridge surrounded by deep green tea bushes.', sketchFocus: 'Greens spectrum & botanical detail' },
      { day: 6, title: 'Tea Pluckers & Botanical Studies', description: 'Observing field workers and drawing native orchids and hibiscus flowers.', sketchFocus: 'Botanical accuracy and vibrant pigments' },
      { day: 7, title: 'Elephant Sanctuary Observation', description: 'Quiet field station sketching gentle elephants near river banks.', sketchFocus: 'Animal anatomy and textured elephant hide' },
      { day: 8, title: 'Mirissa Palm Grove Seascape', description: 'Plein-air painting on golden sands framed by coconut groves.', sketchFocus: 'Aquamarine water and warm sand tones' },
      { day: 9, title: 'Journal Compilation & Exhibition', description: 'Refining travel journal spreads with handwritten notes and stamps.', sketchFocus: 'Travel journal layout mastery' },
      { day: 10, title: 'Farewell Tropical Breakfast', description: 'Exchanging contact details and final painting critique session.', sketchFocus: 'Final reflections' }
    ],
    includedEquipment: ['Travel Journaling Kit', 'Winsor & Newton Cotman Set', 'Waterbrush Pens', 'Botanical Pencil Set'],
    gallery: [
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'la-gomera',
    name: 'La Gomera (Canary Islands)',
    country: 'Canary Islands, Spain',
    tagline: 'The island that time forgot',
    description: "Dubbed 'the island that time forgot', La Gomera lies just 28km from its nearest neighbour Tenerife — think again if that conjures visions of concrete and clubbing.",
    shortDescription: "Dubbed 'the island that time forgot', La Gomera lies just 28km from its nearest neighbour Tenerife — think again if that conjures visions of concrete and clubbing.",
    sketchTag: 'Canary Islands oasis',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800',
    durationDays: 7,
    priceGBP: 1390,
    skillLevel: 'All Levels Welcome',
    mediums: ['Watercolor', 'Pastel', 'Graphite'],
    tutorId: 'ennia-vata',
    upcomingDates: [
      { id: 'lg-1', startDate: 'May 28, 2026', endDate: 'Jun 04, 2026', spotsLeft: 3 },
      { id: 'lg-2', startDate: 'Oct 20, 2026', endDate: 'Oct 27, 2026', spotsLeft: 4 }
    ],
    highlights: [
      'UNESCO Garajonay ancient cloud rainforest sketching trips',
      'Boutique cliffside hotel overlooking Mt Teide across the Atlantic',
      'Terraced banana valleys and dramatic red volcanic sea cliffs',
      'Tranquil, uncrowded island ambiance for focused painting'
    ],
    itinerary: [
      { day: 1, title: 'Ferry Crossing from Tenerife', description: 'Scenic ocean crossing with dolphins and arrival at San Sebastián de La Gomera.', sketchFocus: 'Harbor speed sketches' },
      { day: 2, title: 'Hermigua Terraced Valley', description: 'Painting cascading terraced green gardens down to the pebble beach.', sketchFocus: 'Terrace lines & perspective depth' },
      { day: 3, title: 'Garajonay Cloud Forest Mist', description: 'Enchanted moss-draped laurel forest plein air painting.', sketchFocus: 'Soft focus mist & emerald greens' },
      { day: 4, title: 'Valle Gran Rey Sunset Cliff View', description: 'High cliff panoramic viewpoint watching golden sun dip into Atlantic.', sketchFocus: 'Dramatic sunset gradients' },
      { day: 5, title: 'Agulo Village & Teide Vista', description: 'Quaint red-roofed village with snow-capped Mount Teide floating on the horizon.', sketchFocus: 'Horizon lines & atmospheric haze' },
      { day: 6, title: 'Roque de Agando Volcanic Monolith', description: 'Drawing the towering volcanic spires rising above laurel canopy.', sketchFocus: 'Volcanic rock textures & scale' },
      { day: 7, title: 'Celebratory Exhibition & Return', description: 'Exhibition in hotel courtyard before afternoon ferry.', sketchFocus: 'Review & wrap-up' }
    ],
    includedEquipment: ['A4 Watercolor Pad', 'Professional Palette Box', 'Artist Stool', 'Watercolor Markers'],
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'greece',
    name: 'Greece',
    country: 'Greece',
    tagline: 'Infinity of blue',
    description: 'Is it the infinity of blue, from the water to the sky to the serenely painted chapels, perched on high above rocky bays?',
    shortDescription: 'Is it the infinity of blue, from the water to the sky to the serenely painted chapels, perched on high above rocky bays?',
    sketchTag: 'Aegean coast & whitewashed domes',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
    watercolorSketchUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
    durationDays: 8,
    priceGBP: 1720,
    skillLevel: 'All Levels Welcome',
    mediums: ['Watercolor', 'Gouache', 'Ink & Wash'],
    tutorId: 'elena-rossi',
    upcomingDates: [
      { id: 'gr-1', startDate: 'Jun 22, 2026', endDate: 'Jun 30, 2026', spotsLeft: 2 },
      { id: 'gr-2', startDate: 'Sep 18, 2026', endDate: 'Sep 26, 2026', spotsLeft: 5 }
    ],
    highlights: [
      'Stay in seaside Greek villa with private terrace overlooking Aegean',
      'Mastering pure white paper technique with Mediterranean shadows',
      'Fresh Greek seafood lunches under bougainvillea arbors',
      'Sunset boat sketch session around volcanic caldera'
    ],
    itinerary: [
      { day: 1, title: 'Welcome Ouzo & Whitewashed Terrace', description: 'Orientation overlooking the Aegean sea with gentle sea breeze.', sketchFocus: 'Basic blue and white palette setup' },
      { day: 2, title: 'Blue Domes & Pink Bougainvillea', description: 'Painting iconic chapels framing pink flowers against ultramarine sea.', sketchFocus: 'Preserving white paper & shadow shapes' },
      { day: 3, title: 'Old Windmills & Cobblestone Alleyways', description: 'Morning light sketching through narrow stone passages.', sketchFocus: 'Dappled light and cast shadows' },
      { day: 4, title: 'Olive Grove & Ancient Temple Ruins', description: 'Shaded plein-air painting among 300-year-old olive trees.', sketchFocus: 'Gnarled bark texture & Mediterranean greens' },
      { day: 5, title: 'Caldera Sunset Boat Trip', description: 'Sketching from sea level as cliffs turn golden red at twilight.', sketchFocus: 'High-speed sunset color study' },
      { day: 6, title: 'Fishing Village Harbor & Wooden Skiffs', description: 'Drawing colorful octopus drying on ropes and wooden boats.', sketchFocus: 'Nautical reflections and details' },
      { day: 7, title: 'Final Masterpiece Studio Day', description: 'Transforming field sketches into gallery-ready watercolor paintings.', sketchFocus: 'Studio composition and framing' },
      { day: 8, title: 'Greek Feast & Art Exhibition', description: 'Farewell feast celebrating everyone’s artistic journey.', sketchFocus: 'Exhibition celebration' }
    ],
    includedEquipment: ['French Box Easel', '300gsm Arches Watercolor Paper', 'Ultramarine & Cobalt Palette', 'Waterpot & Sponge Kit'],
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "The most amazing trip I've ever taken.",
    author: 'Alice',
    location: 'California',
    tripName: 'Morocco',
    year: '2025'
  },
  {
    id: 'test-2',
    quote: 'I definitely had a fantastic time. Such an amazing trip. Learned loads and met some great people.',
    author: 'Clare',
    location: 'Scotland',
    tripName: 'Canary Islands',
    year: '2025'
  },
  {
    id: 'test-3',
    quote: 'Mary was fantastic! She is a very gifted teacher, knowing how to encourage her students... a perfect combination of expert advice and diplomacy.',
    author: 'Corrine',
    location: 'Australia',
    tripName: 'Italian Dolomites',
    year: '2025'
  },
  {
    id: 'test-4',
    quote: 'An incredible journey through gorgeous landscapes... I had my first try at painting outside... I learned so much.',
    author: 'Caroline',
    location: 'Scotland',
    tripName: 'Sri Lanka',
    year: '2025'
  }
];
