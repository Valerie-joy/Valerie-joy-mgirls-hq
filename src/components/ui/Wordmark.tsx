import { Link } from 'react-router-dom';
import { site } from '@/content/site';
import { cn } from '@/lib/cn';

/**
 * TEMPORARY TYPOGRAPHIC WORDMARK.
 *
 * No logo file has been supplied, so the name is set in Bodoni Moda rather
 * than drawn. When the real mark arrives, replace the <span> below with an
 * <img src="/logo.svg" alt="MGirls HQ" /> — this is the only place it appears.
 */
export function Wordmark({ size = 'md', asLink = true }: { size?: 'sm' | 'md' | 'lg'; asLink?: boolean }) {
  const classes = cn(
    'font-display font-bold uppercase leading-none tracking-[0.02em] text-ink',
    size === 'sm' && 'text-[1.125rem]',
    size === 'md' && 'text-[1.375rem]',
    size === 'lg' && 'text-[1.75rem]',
  );

  const mark = <span className={classes}>{site.name}</span>;

  if (!asLink) return mark;

  return (
    <Link to="/" className="rounded-xs" aria-label={`${site.name} — home`}>
      {mark}
    </Link>
  );
}
