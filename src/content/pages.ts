import type { ImageSlot } from './types';

/**
 * Per-page copy and image slots.
 *
 * Provisional copy, written to the verified brand strategy. It states what the
 * brand does and how to join; it claims no results, testimonials, awards or
 * member counts, because none has been verified.
 */

export const home = {
  hero: {
    /** Line breaks are authored, not automatic — the headline is a composition. */
    headline: ['The girls', 'are making', 'moves'],
    lede: 'A directory of women already in business — and a studio for the ones about to be.',
    primary: { label: 'Browse the directory', to: '/directory' },
    secondary: { label: 'Get listed', to: '/get-listed' },
    image: {
      id: 'hero-portrait',
      alt: 'Founding member of MGirls HQ, photographed in black and white',
      ratio: 'portrait',
      note: 'Hero portrait · 4:5 · bleeds off the right edge',
    } as ImageSlot,
  },

  /** The scrolling line under the hero. Short, factual phrases only. */
  marquee: ['Be seen', 'Be listed', 'Be connected', 'The girls are making moves'],

  directory: {
    eyebrow: 'In the directory',
    heading: 'Women you can actually find',
    lede: 'Every listing is a page of its own — a name, a city, a category and a way to reach her. The directory is the product; everything else is the way in.',
    action: { label: 'See all members', to: '/directory' },
  },

  lanes: {
    eyebrow: 'Choose your lane',
    heading: 'Two ways in',
    lede: 'One for the woman already in business. One for the woman still building.',
  },

  founder: {
    eyebrow: 'The founder',
    heading: 'Koach Monique',
    /** Verified from her own public bio. Nothing beyond it is claimed. */
    body: [
      'Terysa Monique Williams — Koach Monique — is the founder and CEO of MGirls HQ. She also founded BureoGirls and Tax Coach Suite.',
      'MGirls HQ exists because being good at the work is not the same as being found for it.',
    ],
    quote: 'The girls are making moves.',
    image: {
      id: 'founder-portrait',
      alt: 'Terysa Monique Williams, founder of MGirls HQ',
      ratio: 'editorial',
      note: 'Founder portrait · 3:4',
    } as ImageSlot,
    action: { label: 'Read more', to: '/about' },
  },

  campaign: {
    eyebrow: 'The standard',
    headline: 'A room where the standard is high',
    body: 'Listings are reviewed before they go live. A directory is only worth joining if it is worth searching.',
    image: {
      id: 'campaign-wide',
      alt: 'Members of MGirls HQ photographed for the launch campaign',
      ratio: 'wide',
      note: 'Campaign image · 16:9 · full-bleed, carries type so it needs the overlay',
    } as ImageSlot,
  },

  subscribe: {
    eyebrow: 'Join the list',
    heading: 'Hear it before the feed does',
    lede: 'Listing openings, member features and studio dates. Nothing else.',
  },
} as const;

export const about = {
  title: 'About MGirls HQ',
  lede: 'The headquarters for women who are already moving.',
  body: [
    'MGirls HQ is a directory of women-owned businesses and a launch studio for women building one. Members get a profile page, a listing in the public directory, and a place in the features that go out to the community.',
    'The premise is simple: most women running a business are not short of skill or drive. They are short of visibility. A directory fixes a specific part of that — it makes a business findable, by name, by city, by what she actually does.',
  ],
  principles: [
    {
      title: 'Be seen',
      body: 'Every member gets a page of her own, built to be found on the open web, not just inside a feed.',
    },
    {
      title: 'Be listed',
      body: 'Listings are reviewed before they go live. The standard is what makes the directory worth searching.',
    },
    {
      title: 'Be connected',
      body: 'Members are featured to the community and to each other. Visibility compounds.',
    },
  ],
  image: {
    id: 'about-editorial',
    alt: 'Members of MGirls HQ photographed together',
    ratio: 'editorial',
    note: 'About image · 3:4',
  } as ImageSlot,
} as const;

export const studio = {
  title: 'Launch Studio',
  lede: 'For the woman still building.',
  body: [
    'The Launch Studio works with women who are close to launching and want the brand, the positioning and the first listing done properly rather than quickly.',
    'Scope and pricing are confirmed with the founder on a call. Applications are reviewed weekly.',
  ],
  /** PENDING: the CEO has not yet confirmed what the studio delivers. */
  deliverablesPending:
    'What the studio delivers is being confirmed with the founder. This section will list it in full before launch.',
  steps: [
    { title: 'Apply', body: 'Tell us what you are building and where you are in it. Five fields, two minutes.' },
    { title: 'Review', body: 'Applications are read weekly. You hear back either way.' },
    { title: 'Scope', body: 'A call to agree what the studio will do and what it will cost.' },
    { title: 'Launch', body: 'The work is delivered, and your directory listing goes live with it.' },
  ],
  image: {
    id: 'studio-editorial',
    alt: 'Launch Studio session in progress',
    ratio: 'editorial',
    note: 'Studio image · 3:4',
  } as ImageSlot,
} as const;

export const getListed = {
  title: 'Get listed',
  lede: 'A profile page, a place in the directory, and a business people can actually find.',
  steps: [
    { title: 'Apply', body: 'Your business name, category, city, links and one photograph.' },
    { title: 'Review', body: 'Every listing is checked before it goes live. It keeps the directory worth searching.' },
    { title: 'Go live', body: 'Your page publishes, and you appear in the directory and in member features.' },
  ],
  faq: [
    {
      q: 'What does a listing include?',
      a: 'A profile page with your photo, business name, city, category, summary and links, plus your place in the public directory and in member features.',
    },
    {
      q: 'What does it cost?',
      a: 'Pricing is being confirmed with the founder and will be published here before listings open. Nothing is charged until it is.',
    },
    {
      q: 'Who can be listed?',
      a: 'Women-owned businesses. Every listing is reviewed before it goes live.',
    },
    {
      q: 'Can I edit my listing later?',
      a: 'Yes. Until member accounts are built, changes are made by emailing the team and are published within the stated response window.',
    },
  ],
} as const;
