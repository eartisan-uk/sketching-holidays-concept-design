export interface FaqItem {
  id: string;
  category: 'General & Experience' | 'Art Tuition & Materials' | 'Accommodations & Food' | 'Bookings & Travel';
  question: string;
  answer: string;
}

export const FAQ_CATEGORIES = [
  'All FAQs',
  'General & Experience',
  'Art Tuition & Materials',
  'Accommodations & Food',
  'Bookings & Travel'
] as const;

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General & Experience',
    question: 'Do I need prior drawing or painting experience to join?',
    answer: 'Not at all! Our sketching holidays are warmly designed for all ability levels — from complete beginners picking up a brush or pencil for the very first time, to experienced painters seeking fresh inspiration and scenic locations. Mary tailors her daily advice and demonstrations to each guest’s individual skill and pace in a relaxed, non-competitive setting.'
  },
  {
    id: 'faq-2',
    category: 'Art Tuition & Materials',
    question: 'What art materials and equipment should I bring?',
    answer: 'We recommend traveling light with a compact, portable plein-air sketching kit. Essentials include a quality watercolor sketchbook (A4 or A5 with 300gsm paper), a compact pan set of artist watercolours, water-brushes or round travel brushes, waterproof fineliners (0.3 / 0.5), a 2B pencil, putty eraser, and a lightweight folding stool. Upon booking, we provide a complete packing guide and recommended supplier list.'
  },
  {
    id: 'faq-3',
    category: 'Accommodations & Food',
    question: 'What is included in the price of the holiday?',
    answer: 'Our holiday packages typically include all boutique accommodations in hand-selected hotels or villas, daily breakfasts and several gourmet group dinners featuring regional cuisine, daily structured art tuition and personalized feedback from Mary King, private group transport to picturesque painting locations, and welcome drinks. International flights and personal travel insurance are arranged independently.'
  },
  {
    id: 'faq-4',
    category: 'General & Experience',
    question: 'How large are the groups and what is the daily rhythm?',
    answer: 'To ensure an intimate and supportive atmosphere with ample one-on-one attention, group sizes are strictly limited to 8–12 guests. A typical day begins with breakfast followed by a morning plein-air session with a live demonstration. After a relaxed lunch and free time to explore, we hold an afternoon sketching session, finishing the day with an encouraging group sketchbook review over drinks.'
  },
  {
    id: 'faq-5',
    category: 'General & Experience',
    question: 'Are non-painting partners or companions welcome to come?',
    answer: 'Yes, absolutely! Non-painting partners are very warmly welcomed on all our trips. While painters are sketching, non-painters can enjoy hiking scenic trails, exploring historical towns, visiting local wineries and markets, or simply relaxing at the accommodation. Non-painters join the entire group for all excursions, meals, and social evenings.'
  },
  {
    id: 'faq-6',
    category: 'Art Tuition & Materials',
    question: 'What happens if it rains or weather is poor?',
    answer: 'We always have covered and sheltered sketching alternatives ready! From picturesque historic loggias, village cafes, and greenhouse conservatories to cozy indoor studio sessions focusing on color mixing and still life, rainy spells turn into wonderful sketching opportunities.'
  },
  {
    id: 'faq-7',
    category: 'Bookings & Travel',
    question: 'How much walking and physical fitness is involved?',
    answer: 'Our painting locations are selected for easy accessibility. Most days involve gentle walking over cobblestone streets, garden paths, or short distances from our private transport. We recommend comfortable walking shoes. If you have mobility concerns, please let us know when enquiring so we can assist.'
  },
  {
    id: 'faq-8',
    category: 'Bookings & Travel',
    question: 'How do I reserve my place and what is the payment structure?',
    answer: 'You can reserve your room with a 20% deposit. The remaining balance is payable 8 weeks before departure. We accept bank transfers and major credit cards securely. Because spaces are strictly limited to 8–12 guests, early booking is highly recommended.'
  },
  {
    id: 'faq-9',
    category: 'Accommodations & Food',
    question: 'Can dietary requirements and allergies be accommodated?',
    answer: 'Yes, definitely. Whether you are vegetarian, vegan, gluten-free, dairy-free, or have specific allergies, we liaise directly with our boutique hotels and handpicked restaurants to ensure delicious, tailored meals throughout the trip.'
  },
  {
    id: 'faq-10',
    category: 'Accommodations & Food',
    question: 'Can I have a single room without paying an exorbitant supplement?',
    answer: 'Yes! We recognize that many solo travelers join our painting holidays. We offer private single en-suite rooms with modest, transparent single occupancy rates rather than punitive double-charge supplements.'
  },
  {
    id: 'faq-11',
    category: 'Bookings & Travel',
    question: 'Are flights included or do we book them ourselves?',
    answer: 'Flights are arranged independently by guests so you can fly from your preferred regional airport or extend your travels before/after the workshop. We provide clear recommended flight arrival windows and coordinate group airport pickup transfers at designated times.'
  },
  {
    id: 'faq-12',
    category: 'Art Tuition & Materials',
    question: 'Can I use mediums other than watercolor (e.g. gouache, acrylics, pastels)?',
    answer: 'Yes! While Mary demonstrates predominantly in watercolor and ink sketching, she has extensive experience across gouache, water-mixable oils, pastels, and colored pencils. You are welcome to use any medium you feel inspired by.'
  }
];
