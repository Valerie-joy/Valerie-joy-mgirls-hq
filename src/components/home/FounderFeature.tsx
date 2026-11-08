import { home } from '@/content/pages';
import { Figure } from '@/components/ui/Figure';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

/**
 * The founder, briefly. She establishes credibility; she does not become the
 * subject of the page — the members are.
 */
export function FounderFeature() {
  const { eyebrow, heading, body, quote, image, action } = home.founder;

  return (
    <section className="shell py-9 lg:py-10">
      <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-7">
        <Reveal className="lg:col-span-5">
          <Figure slot={image} />
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="border-t-2 border-rule-strong pt-5">
            <p className="mb-4 font-condensed text-eyebrow uppercase text-ink-muted">03 — {eyebrow}</p>
            <h2 className="mb-5 font-display text-display-m">{heading}</h2>

            <blockquote className="mb-5 border-l-2 border-ink pl-5 font-display text-display-quote italic">
              “{quote}”
            </blockquote>

            {body.map((p) => (
              <p key={p} className="mb-4 max-w-measure text-body">
                {p}
              </p>
            ))}

            <Button to={action.to} variant="secondary">
              {action.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
