import type { FooterColumn, NavItem } from './types';

/**
 * Brand-wide content. Everything here is safe for a non-developer to edit.
 *
 * NOTHING in this file is invented business fact. Where a detail has not been
 * confirmed by the CEO it is marked `null` or carries a `pending` note, and the
 * UI renders that state honestly rather than filling the gap.
 */

export const site = {
  /** Until a logo file exists, the wordmark is set in type. See `Wordmark.tsx`. */
  name: 'MGirls HQ',
  /** Verified: the brand's own line, from @mgirlshq. */
  tagline: 'The girls are making moves.',
  description:
    'The headquarters for women who are already moving. A directory of women-owned businesses, and a launch studio for the ones about to be.',

  /** Set to null to remove the announcement bar entirely. */
  announcement: {
    id: 'listings-open-2026-q1',
    text: 'Directory listings are open',
    linkLabel: 'Get listed',
    to: '/get-listed',
  } as { id: string; text: string; linkLabel?: string; to?: string } | null,

  contact: {
    /** PENDING: confirm the public address with the CEO before launch. */
    email: null as string | null,
    emailNote: 'Address to be confirmed',
    responseWindow: 'Replies within two business days',
  },

  /** Only accounts the brand actually posts to. Verified: Instagram. */
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/mgirlshq/' },
    { label: 'Founder', href: 'https://www.instagram.com/terysamonique/' },
  ],
} as const;

export const primaryNav: NavItem[] = [
  { label: 'Directory', to: '/directory' },
  { label: 'Get listed', to: '/get-listed' },
  { label: 'Studio', to: '/studio' },
  { label: 'About', to: '/about' },
];

export const headerAction: NavItem = { label: 'Get listed', to: '/get-listed' };

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Directory',
    links: [
      { label: 'Browse members', to: '/directory' },
      { label: 'Get listed', to: '/get-listed' },
    ],
  },
  {
    heading: 'Studio',
    links: [
      { label: 'Launch Studio', to: '/studio' },
      { label: 'Apply', to: '/studio#apply' },
    ],
  },
  {
    heading: 'Brand',
    links: [
      { label: 'About MGirls HQ', to: '/about' },
      { label: 'Meet the founder', to: '/about#founder' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Policies',
    links: [
      { label: 'Terms', to: '/policies/terms' },
      { label: 'Privacy', to: '/policies/privacy' },
      { label: 'Refunds', to: '/policies/refunds' },
    ],
  },
];
