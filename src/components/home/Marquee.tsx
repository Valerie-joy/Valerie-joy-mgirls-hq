import { home } from '@/content/pages';

/**
 * A thin inverted strip of short brand phrases.
 *
 * Decorative, so it is hidden from assistive technology and frozen entirely
 * under `prefers-reduced-motion` (the global reduced-motion rule caps the
 * animation, and `motion-reduce` pins the track).
 */
export function Marquee() {
  const items = [...home.marquee, ...home.marquee];

  return (
    <div className="overflow-hidden border-b border-rule bg-surface-inverse py-3" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-6 motion-reduce:animate-none">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-6 font-condensed text-nav uppercase text-ink-inverse">
            {item}
            <span className="inline-block h-[5px] w-[5px] bg-ink-inverse" />
          </span>
        ))}
      </div>
    </div>
  );
}
