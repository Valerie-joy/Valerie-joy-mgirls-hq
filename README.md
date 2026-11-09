# MGirls HQ

The website for MGirls HQ — a public directory of women-owned businesses and a launch studio for women building one.

Built on the [MGirls HQ Design System](https://claude.ai/artifact/7JBUoooDRVLc4twfwYE55z): Paper and Ink themes, twelve semantic tokens, Bodoni Moda / Archivo / Archivo Narrow, a 4px spacing scale, square corners, and no shadows anywhere.

---

## Status

This is a **UI build on placeholder assets**. It is structurally complete and runs, but it is not ready for the public:

| Area | State |
| --- | --- |
| Logo | Typographic wordmark. No logo file supplied. |
| Photography | Composed placeholder frames at final dimensions. |
| Members | Nine demonstration records, each marked `DEMO`. |
| Pricing | "Price to be confirmed" — no price has been set. |
| Copy | Provisional, written to the verified brand strategy. |
| Forms | Validate properly; send nowhere. No service is connected. |
| Policies | Placeholder pages. **Not legal copy.** |

Nothing in the build invents a business fact, a testimonial, an award or a member count.

---

## Running it

```bash
npm install
```

```bash
npm run dev
```

The site runs at <http://localhost:5173>.

```bash
npm run build
```

```bash
npm run typecheck
```

Requires Node 18 or newer.

---

## Project structure

```
src/
  content/        ← ALL editable content. Start here.
    site.ts         brand name, nav, footer, contact, social, announcement
    pages.ts        homepage, about, studio and get-listed copy + image slots
    members.ts      the directory records (demonstration data today)
    offers.ts       the two lanes and their pricing
    policies.ts     terms, privacy, refunds
    types.ts        shapes for all of the above
  components/
    layout/         header, footer, announcement bar, sticky mobile CTA
    home/           hero, marquee, directory preview, lanes, campaign, founder
    directory/      member card, filter bar
    forms/          subscribe, application, pending-integration notice
    ui/             button, tag, chip, form fields, figure, headings, wordmark
  hooks/          theme, scroll reveal, document title
  lib/            class helper, validation
  styles/
    tokens.css    ← the single source of truth for colour, space and radius
```

**Layout code holds no content and no colour values.** Everything editable is in `src/content`, everything visual is a token.

---

## Replacing the placeholders

### The logo

Edit `src/components/ui/Wordmark.tsx` — it is the only place the mark appears. Swap the `<span>` for `<img src="/logo.svg" alt="MGirls HQ" />` and drop the file into `public/`.

### Photography

Every image is an `ImageSlot` in `src/content`. While `src` is empty, a placeholder frame renders at the final dimensions. Add `src` and the photograph takes its place — same box, same ratio, no layout change:

```ts
image: {
  id: 'hero-portrait',
  src: '/images/hero.webp',
  srcSet: '/images/hero-800.webp 800w, /images/hero-1600.webp 1600w',
  alt: 'Founding member of MGirls HQ, photographed in black and white',
  ratio: 'portrait',
  note: 'Hero portrait · 4:5',
}
```

Images are served black and white by CSS (`grayscale`), so colour originals are fine. Supply WebP or AVIF, and put the files in `public/images/`.

### Members

Replace the array in `src/content/members.ts`, set `isDemo: false` on each record, and the `DEMO` tags and the directory notice disappear on their own. Every consumer already goes through `getMembers()` / `getMember()`, so pointing those two functions at a CMS is the only change a real backend needs.

### Prices

`src/content/offers.ts`. `price: null` renders "Price to be confirmed" everywhere it appears. Set a string to publish a real price.

### Contact details and social links

`src/content/site.ts`. `contact.email: null` renders the "to be confirmed" note instead of a dead `mailto:`.

### Copy

`src/content/pages.ts` for the homepage, about, studio and get-listed pages.

---

## What is deliberately not connected

The site never claims something happened that did not. Forms validate on submit and then show a **"Validated, but not sent"** notice naming the missing service. To connect them:

| Form | File | Wire to |
| --- | --- | --- |
| Subscribe | `src/components/forms/SubscribeForm.tsx` | Klaviyo or ConvertKit |
| Get listed / Studio | `src/components/forms/ApplicationForm.tsx` | A form endpoint or the CMS |
| Contact | `src/pages/ContactPage.tsx` | The same endpoint |

Each has one `onSubmit`. Replace the `setValidated(true)` branch with the real call, and show success **only** after the service confirms it.

**Never put a secret key in this project.** Only `VITE_`-prefixed values reach the browser, and they are public. Stripe's secret key, any CMS write token and any mail API key belong in the host's environment variables, behind a serverless function.

---

## Deployment

### Vercel (recommended)

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project**, import the repository.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
4. Deploy.

`vercel.json` already rewrites every path to `index.html`, so deep links such as `/directory/demo-candle-line` work. Every pull request gets a preview URL.

### Netlify

Build command `npm run build`, publish directory `dist`. `public/_redirects` handles SPA routing.

### GitHub Pages

Pages serves static files only — no environment variables, no redirects, no form handling. It can host this UI, but it cannot host the payments, CMS webhooks or form endpoints the live site will need. Use it for a preview, not for launch.

For a **project** site (`username.github.io/repo-name`), build with the base path set:

```bash
VITE_BASE=/repo-name/ npm run build
```

Pages has no SPA rewrite, so a deep link returns 404 on refresh. The usual workaround is to copy `dist/index.html` to `dist/404.html` before publishing.

---

## Accessibility and performance

Built to WCAG 2.1 AA:

- Every colour pair in both themes clears its minimum — `ink-muted` reads 6.6:1 on Paper and 9.3:1 on Ink; `rule-control` clears 3:1 so every control edge is visible.
- Focus is always visible, and flips to `focus-inverse` on inverted grounds. `outline: none` appears nowhere.
- Errors are signalled by a doubled border, a mark and a sentence — never by colour, since the palette has none.
- The mobile menu is a real dialog: `aria-modal`, focus trapped, Escape closes it, focus returns to the trigger.
- Touch targets are 44px or larger. Body copy never drops below 16px.
- Every animation is suppressed under `prefers-reduced-motion`, and the page is complete at rest — nothing is left at `opacity: 0` waiting for an observer.

Before launch: run Lighthouse on mobile, target 90+, and keep LCP under 2.5s once real hero photography is in.

---

## Pre-launch checklist

- [ ] Confirm what MGirls HQ sells and at what price; publish the prices
- [ ] Supply the logo files and replace the typographic wordmark
- [ ] Supply hero, founder, campaign and member photography
- [ ] Replace the demonstration members with real listings and set `isDemo: false`
- [ ] Set a real contact address and confirm the response window is one the team can hold
- [ ] Have terms, privacy and refund policies written and reviewed, then paste into `policies.ts`
- [ ] Connect the email/SMS provider and the form endpoint, and only then show success states
- [ ] Connect Stripe (hosted Checkout or Payment Links) for listing payments
- [ ] Add analytics and conversion events
- [ ] Put a link to this site in the @mgirlshq Instagram bio, and add an MGirls HQ block to the founder's link-in-bio
- [ ] Audit every footer and social link — each one must resolve
- [ ] Add a real 1200×630 Open Graph image at `public/og-image.png`
- [ ] **Allow indexing:** remove the `<meta name="robots">` tag from `index.html` and switch `public/robots.txt` from `Disallow: /` to the launch block inside it
- [ ] Run Lighthouse on mobile and check both themes on a real phone
