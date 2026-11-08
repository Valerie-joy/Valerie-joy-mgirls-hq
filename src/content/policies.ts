/**
 * Policy pages.
 *
 * THESE ARE PLACEHOLDERS, NOT LEGAL COPY. Each page says so at the top, in the
 * page itself, so nobody launches on them by accident. Stripe expects real
 * terms, privacy and refund policies before a live checkout; have them drafted
 * or reviewed by someone qualified and paste the text into `sections` below.
 */

export interface Policy {
  slug: string;
  title: string;
  updated: string | null;
  sections: { heading: string; body: string[] }[];
}

const pendingNotice = [
  'This policy has not been written yet. The page, its route and its layout are in place so the final text can be pasted in without touching code.',
];

export const policies: Policy[] = [
  {
    slug: 'terms',
    title: 'Terms of service',
    updated: null,
    sections: [
      { heading: 'Not yet published', body: pendingNotice },
      {
        heading: 'What this page will cover',
        body: [
          'Who may hold a listing, what a membership includes, how listings are reviewed, what conduct ends a membership, and how disputes are handled.',
        ],
      },
    ],
  },
  {
    slug: 'privacy',
    title: 'Privacy policy',
    updated: null,
    sections: [
      { heading: 'Not yet published', body: pendingNotice },
      {
        heading: 'What this page will cover',
        body: [
          'What is collected when you subscribe or apply, who processes it (the email provider and the payment processor), how long it is kept, and how to have it removed.',
        ],
      },
    ],
  },
  {
    slug: 'refunds',
    title: 'Refund policy',
    updated: null,
    sections: [
      { heading: 'Not yet published', body: pendingNotice },
      {
        heading: 'What this page will cover',
        body: [
          'The refund window on a listing, what happens if a listing is declined at review, and how to cancel a renewal.',
        ],
      },
    ],
  },
];

export function getPolicy(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === slug);
}
