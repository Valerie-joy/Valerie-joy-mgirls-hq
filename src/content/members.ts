import type { Member } from './types';

/**
 * DEMONSTRATION CONTENT.
 *
 * None of these are real members. Every record carries `isDemo: true`, which
 * renders a DEMO tag on the card and a notice above the directory, so nobody
 * mistakes the grid for a live listing.
 *
 * To go live: replace this array (or point `getMembers()` at the CMS), set
 * `isDemo: false`, and give each record a real `image.src`. The grid, the
 * filters and the profile pages need no other change.
 */

export const categories = ['Beauty', 'Services', 'Retail', 'Food', 'Wellness', 'Creative'] as const;

export type Category = (typeof categories)[number];

const demoAbout = [
  'Provisional copy. Each member writes their own profile; this paragraph shows the length and tone the layout is built for.',
  'A second paragraph is optional. Members who supply one get a fuller profile page; members who do not still get a complete-looking page.',
];

export const members: Member[] = [
  {
    slug: 'demo-beauty-studio',
    name: 'A Beauty Studio',
    category: 'Beauty',
    city: 'Atlanta, GA',
    summary: 'Demonstration listing — a salon suite or beauty studio.',
    about: demoAbout,
    links: [
      { label: 'Website' },
      { label: 'Instagram' },
      { label: 'Book an appointment' },
    ],
    image: { id: 'member-01', alt: 'Interior of a beauty studio', ratio: 'portrait', note: 'Member photo · 4:5' },
    joined: '2026',
    isDemo: true,
  },
  {
    slug: 'demo-cleaning-company',
    name: 'A Cleaning Company',
    category: 'Services',
    city: 'Houston, TX',
    summary: 'Demonstration listing — a residential and commercial service business.',
    about: demoAbout,
    links: [{ label: 'Website' }, { label: 'Request a quote' }],
    image: { id: 'member-02', alt: 'Owner of a cleaning company at work', ratio: 'portrait', note: 'Member photo · 4:5' },
    joined: '2026',
    isDemo: true,
  },
  {
    slug: 'demo-candle-line',
    name: 'A Candle Line',
    category: 'Retail',
    city: 'Charlotte, NC',
    summary: 'Demonstration listing — a small-batch product brand.',
    about: demoAbout,
    links: [{ label: 'Shop' }, { label: 'Instagram' }],
    image: { id: 'member-03', alt: 'Candles from a small-batch product line', ratio: 'portrait', note: 'Member photo · 4:5' },
    joined: '2026',
    isDemo: true,
  },
  {
    slug: 'demo-catering-kitchen',
    name: 'A Catering Kitchen',
    category: 'Food',
    city: 'Chicago, IL',
    summary: 'Demonstration listing — an event and private catering business.',
    about: demoAbout,
    links: [{ label: 'Menus' }, { label: 'Enquire' }],
    image: { id: 'member-04', alt: 'Chef plating food in a catering kitchen', ratio: 'portrait', note: 'Member photo · 4:5' },
    joined: '2026',
    isDemo: true,
  },
  {
    slug: 'demo-wellness-practice',
    name: 'A Wellness Practice',
    category: 'Wellness',
    city: 'Phoenix, AZ',
    summary: 'Demonstration listing — a practitioner-led wellness business.',
    about: demoAbout,
    links: [{ label: 'Website' }, { label: 'Book a session' }],
    image: { id: 'member-05', alt: 'Treatment room of a wellness practice', ratio: 'portrait', note: 'Member photo · 4:5' },
    joined: '2026',
    isDemo: true,
  },
  {
    slug: 'demo-brand-studio',
    name: 'A Brand Studio',
    category: 'Creative',
    city: 'Brooklyn, NY',
    summary: 'Demonstration listing — a design and brand consultancy.',
    about: demoAbout,
    links: [{ label: 'Portfolio' }, { label: 'Instagram' }],
    image: { id: 'member-06', alt: 'Designer working in a brand studio', ratio: 'portrait', note: 'Member photo · 4:5' },
    joined: '2026',
    isDemo: true,
  },
  {
    slug: 'demo-bookkeeping-practice',
    name: 'A Bookkeeping Practice',
    category: 'Services',
    city: 'Dallas, TX',
    summary: 'Demonstration listing — a financial services practice.',
    about: demoAbout,
    links: [{ label: 'Website' }, { label: 'Book a consultation' }],
    image: { id: 'member-07', alt: 'Owner of a bookkeeping practice at her desk', ratio: 'portrait', note: 'Member photo · 4:5' },
    joined: '2026',
    isDemo: true,
  },
  {
    slug: 'demo-apparel-label',
    name: 'An Apparel Label',
    category: 'Retail',
    city: 'Los Angeles, CA',
    summary: 'Demonstration listing — an independent clothing label.',
    about: demoAbout,
    links: [{ label: 'Shop' }, { label: 'Lookbook' }],
    image: { id: 'member-08', alt: 'Rail of garments from an independent label', ratio: 'portrait', note: 'Member photo · 4:5' },
    joined: '2026',
    isDemo: true,
  },
  {
    slug: 'demo-event-company',
    name: 'An Event Company',
    category: 'Creative',
    city: 'Miami, FL',
    summary: 'Demonstration listing — an events and production company.',
    about: demoAbout,
    links: [{ label: 'Website' }, { label: 'Enquire' }],
    image: { id: 'member-09', alt: 'Event set-up by a production company', ratio: 'portrait', note: 'Member photo · 4:5' },
    joined: '2026',
    isDemo: true,
  },
];

/** Swap this for a CMS fetch; every caller already goes through it. */
export function getMembers(): Member[] {
  return members;
}

export function getMember(slug: string): Member | undefined {
  return members.find((m) => m.slug === slug);
}

/** True while the directory is showing demonstration records. */
export const directoryIsDemo = members.every((m) => m.isDemo);
