export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Travel Tips & Gear' | 'Destination Focus' | 'Trip Updates' | 'Technique & Tradition' | 'Travel Stories';
  summary: string;
  content: string[];
  imageUrl: string;
  readTime: string;
  author: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'bring-a-sketchbook-with-you',
    title: 'Bring a Sketchbook with you...',
    date: '18 Jul 2026',
    category: 'Travel Tips & Gear',
    summary: 'Why traveling with a sketchbook transforms your perception of places, light, and memories in ways a camera lens never can.',
    author: 'Mary King',
    readTime: '4 min read',
    tags: ['Sketching', 'Travel Tips', 'Mindfulness', 'Watercolor'],
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000',
    content: [
      `Traveling with a sketchbook opens up an entirely different dimension of observation. In our fast-paced modern world, it is so easy to snap dozens of digital photos, glance at the screen, and move swiftly to the next tourist landmark. But when you sit down with a pencil or watercolor pan set in a bustling marketplace or along a quiet seaside cliff, time noticeably slows down.`,
      `You start noticing the delicate angle of morning sunlight filtering through arched alleyways, the subtle moss textures in weathered stone masonry, and the rapid shifts in cloud shadows drifting across distant hills. You engage all five senses - hearing local laughter, smelling roasted coffee, feeling the warm Mediterranean breeze on your arms.`,
      `Whether you consider yourself an experienced painter or a curious beginner, packing a compact sketchbook and a small pan set of watercolours is the single best decision you can make for your travels. You will never view a holiday the same way again.`,
      `On our Vistas holidays, we encourage keeping a "travel journal sketch approach": combining quick pen vignettes, color swatch notes, pressed leaves, and ticket stubs alongside finished watercolor studies. When you open your sketchbook years later, every brushstroke brings back the vivid memory of that exact afternoon in a way no digital photograph ever can.`
    ]
  },
  {
    id: 'post-2',
    slug: 'bonnie-scotland',
    title: 'Bonnie Scotland',
    date: '22 May 2026',
    category: 'Destination Focus',
    summary: 'Exploring the wild highlands, silver lochs, and tempestuous atmospheric light of Scotland’s northwest wilderness.',
    author: 'Mary King',
    readTime: '5 min read',
    tags: ['Scotland', 'Highlands', 'Plein Air', 'Atmosphere'],
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=1000',
    content: [
      `Scotland’s far northwest contains some of the last remaining true wildernesses in Europe. Having lived and run my gallery, Picture Shack, in this remarkable corner of the world for many years, I know firsthand how deeply its landscape gets under an artist’s skin.`,
      `From the mirror-like reflections on tranquil sea lochs to the ancient sandstone monoliths of Suilven and Stac Pollaidh, every turn of the single-track roads reveals a breathtaking composition. The light here changes every fifteen minutes: dramatic squalls give way to piercing rays of golden sunshine that illuminate heather-clad hillsides.`,
      `During our Scottish Highland sketching retreats, we embrace loose wet-in-wet watercolor techniques designed to capture this ethereal, moody light. We sketch near remote ruined castles, sheltered white sand beaches that look almost Caribbean until you touch the crisp Atlantic water, and cozy harbour villages.`,
      `Evenings are spent in welcoming highland inns enjoying hearty fresh seafood, fireside drinks, and warm camaraderie sharing our day's sketches.`
    ]
  },
  {
    id: 'post-3',
    slug: 'last-minute-one-room-left',
    title: 'Last Minute... One room left',
    date: '15 Apr 2026',
    category: 'Trip Updates',
    summary: 'A rare last-minute opening for our autumn painting journey into the pale mountain spires of the Italian Dolomites.',
    author: 'Mary King',
    readTime: '2 min read',
    tags: ['Dolomites', 'Italy', 'Last Minute', 'Retreats'],
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1000',
    content: [
      `We have just had an unexpected last-minute cancellation for a private en-suite room on our upcoming autumn Italian Dolomites Painting Retreat!`,
      `Autumn in the Dolomites is nothing short of magical. The alpine meadows turn amber and gold, the larch trees ignite in vivid saffron against limestone needles, and the crisp mountain air provides astonishing clarity for panoramic landscape sketching.`,
      `Our group stays in a traditional, family-run alpine hotel in the Val di Funes, with views right onto the dramatic Odle peaks. The trip includes daily guided plein-air workshops with Mary King, gourmet South Tyrolean four-course dinners, and private transfers to secluded sketching meadows away from crowds.`,
      `If you've been waiting for a sign to treat yourself to a week of creative immersion and mountain hospitality, get in touch immediately before this final place is filled.`
    ]
  },
  {
    id: 'post-4',
    slug: 'be-a-fan-fan',
    title: 'Be a Fan fan',
    date: '20 Mar 2026',
    category: 'Technique & Tradition',
    summary: 'Mastering the delicate art of fan brushes and dry-brush foliage techniques for capturing distant trees and sea foam.',
    author: 'Mary King',
    readTime: '3 min read',
    tags: ['Brushwork', 'Technique', 'Watercolor', 'Tutorial'],
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000',
    content: [
      `The humble fan brush is one of the most misunderstood tools in watercolor painting. In inexperienced hands, it can create stiff, overly repetitive rake marks. However, when wielded with sensitivity and dry-brush technique, it becomes an extraordinarily expressive asset for plein-air landscape painters.`,
      `The secret lies in the moisture balance: lightly dab excess water off the bristles onto a kitchen towel, load the tips with concentrated pigment, and splay the hairs slightly across textured cold-press or rough paper.`,
      `With delicate, flicking wrist motions, you can effortlessly convey the feathery needles of highland Scots pines, the rugged textural rock striations of alpine cliffs, or the frothy white sea foam crashing against coastal breakwaters.`,
      `During our morning demonstrations on every Vistas holiday, we explore creative mark-making using both traditional brushes and unconventional tools like rigger brushes, credit-card scraping, and natural sponges.`
    ]
  },
  {
    id: 'post-5',
    slug: 'magic-of-moroccan-light',
    title: 'The Magic of Moroccan Light & Colour',
    date: '12 Feb 2026',
    category: 'Destination Focus',
    summary: 'How two years living in Marrakech transformed my color palette and inspired the foundation of Vistas holidays.',
    author: 'Mary King',
    readTime: '5 min read',
    tags: ['Morocco', 'Marrakech', 'Color Theory', 'Inspiration'],
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000',
    content: [
      `Before I lived in Morocco for two years, my watercolor palette leaned heavily towards the cool blues, greys, and muted greens of northern Europe. Stepping into Marrakech for the first time felt like stepping directly into an explosion of pigment.`,
      `The baked terracotta earth of the medina walls, the cobalt tiles of historic riads, piles of powdered saffron and indigo in the spice souks, and the dazzling cerulean skies framed by snow-capped Atlas peaks challenged everything I thought I knew about contrast and color harmony.`,
      `It was during those two sun-drenched years in Morocco that the vision for Vistas Sketching Holidays was born. I wanted to create relaxed, joyful holidays where artists of all levels could experience the wonder of these exotic locations without feeling rushed or overwhelmed.`,
      `Our Moroccan sketchbook holiday takes you deep into tranquil courtyard gardens, palm oases, and Atlantic coastal fishing ports where you can sketch in complete comfort.`
    ]
  },
  {
    id: 'post-6',
    slug: 'plein-air-essentials-packing-light',
    title: 'Plein Air Essentials: Packing Light Without Sacrificing Quality',
    date: '18 Jan 2026',
    category: 'Travel Tips & Gear',
    summary: 'Our recommended minimalist travel sketching kit that fits neatly inside a daypack.',
    author: 'Mary King',
    readTime: '4 min read',
    tags: ['Packing', 'Gear', 'Plein Air', 'Materials'],
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000',
    content: [
      `The golden rule of outdoor sketching is simple: if your kit is too heavy or complicated to set up, you won't take it out. Over twenty years of guiding painters across Europe, Africa, and Asia, I have refined the ultimate lightweight travel sketching setup.`,
      `Here is what you really need: an A5 or A4 spiral or hardcover watercolor book (300gsm cold-press paper is ideal), a 12-pan artist-grade watercolor box with ample mixing wells, two synthetic travel brushes (a size 8 round and a dagger brush), a waterproof 0.3mm ink fineliner, a 2B pencil, and a leakproof water bottle with a small clip-on cup.`,
      `Add a compact three-legged folding stool and a sunhat, and you are fully equipped to paint comfortably anywhere in the world! When you join any Vistas holiday, we supply you with a full checklist and recommended brands before departure.`
    ]
  }
];
