import { home } from '@/content/pages';
import { Figure } from '@/components/ui/Figure';

/**
 * A full-bleed campaign band: type set over the image, which is why the slot
 * carries an overlay. Breaks the page's rhythm between two gridded sections.
 */
export function Campaign() {
  const { eyebrow, headline, body, image } = home.campaign;

  return (
    <section className="relative isolate">
      <Figure slot={image} overlay className="h-full" />

      <div className="on-inverse absolute inset-0 flex items-end">
        <div className="shell pb-8 lg:pb-9">
          <p className="mb-4 font-condensed text-eyebrow uppercase text-ink-inverse/80">{eyebrow}</p>
          <h2 className="mb-4 max-w-[18ch] font-display text-display-l uppercase text-ink-inverse">{headline}</h2>
          <p className="max-w-[48ch] text-body-l text-ink-inverse/90">{body}</p>
        </div>
      </div>
    </section>
  );
}
