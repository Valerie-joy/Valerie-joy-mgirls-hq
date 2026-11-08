/**
 * Shapes for everything editable on the site.
 *
 * Content lives in `src/content/*`, never inside a component. When the CMS
 * arrives, these types become its schema and the files below become the
 * fetch layer — no layout code changes.
 */

export type ImageRatio = 'portrait' | 'editorial' | 'wide' | 'square';

/**
 * A slot where a photograph will go.
 *
 * While `src` is undefined the site renders a composed placeholder frame at
 * exactly the final dimensions. Set `src` (and `srcSet` if you have one) and
 * the photograph takes its place with no other change.
 */
export interface ImageSlot {
  /** Stable id, used as the React key and as the name of the asset to supply. */
  id: string;
  /** Leave undefined until the real asset exists. */
  src?: string;
  srcSet?: string;
  /** Always written as though the photo were already here. */
  alt: string;
  ratio: ImageRatio;
  /** Shown inside the placeholder frame so the brief is visible in the design. */
  note: string;
}

export interface Member {
  slug: string;
  /** Demonstration content. See `members.ts`. */
  name: string;
  category: string;
  city: string;
  /** One line, shown on the profile page. */
  summary: string;
  /** Provisional copy; replaced by the member's own words. */
  about: string[];
  /** External links the member supplies. `pending` renders as a disabled row. */
  links: { label: string; href?: string }[];
  image: ImageSlot;
  joined: string;
  isDemo: boolean;
}

export interface Lane {
  id: string;
  eyebrow: string;
  title: string;
  audience: string;
  /** `null` renders "Price to be confirmed". */
  price: string | null;
  priceNote?: string;
  inclusions: string[];
  action: { label: string; to: string; variant: 'primary' | 'secondary' };
}

export interface NavItem {
  label: string;
  to: string;
}

export interface FooterColumn {
  heading: string;
  links: NavItem[];
}
