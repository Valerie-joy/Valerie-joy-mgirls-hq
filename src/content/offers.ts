import type { Lane } from './types';

/**
 * The two lanes.
 *
 * PRICING IS NOT CONFIRMED. `price: null` renders "Price to be confirmed"
 * everywhere it appears. Set a string to publish a real price — the design
 * system's guidance is to publish it rather than hide it behind a form.
 */

export const lanes: Lane[] = [
  {
    id: 'get-listed',
    eyebrow: 'Lane one',
    title: 'Get listed',
    audience: 'For the woman already in business.',
    price: null,
    priceNote: 'Confirm with the founder before launch',
    inclusions: [
      'A profile page with your photo, links and offer',
      'Listed in the public directory',
      'Included in member features',
      'Your listing indexed and findable on the open web',
    ],
    action: { label: 'Join now', to: '/get-listed', variant: 'primary' },
  },
  {
    id: 'launch-studio',
    eyebrow: 'Lane two',
    title: 'Launch Studio',
    audience: 'For the woman still building.',
    price: null,
    priceNote: 'By application',
    inclusions: [
      'Scope confirmed with the founder',
      'Applications reviewed weekly',
      'Directory listing included on completion',
    ],
    action: { label: 'Apply', to: '/studio', variant: 'secondary' },
  },
];

/** Shown wherever a price would be. */
export const PRICE_PENDING = 'Price to be confirmed';
