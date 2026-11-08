import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { home } from '@/content/pages';
import { site } from '@/content/site';
import { Figure } from '@/components/ui/Figure';
import { Button } from '@/components/ui/Button';

/**
 * The homepage opener. Typography carries the composition, so the hero works
 * before any photography exists — which is the whole reason this direction was
 * chosen.
 */
export function Hero() {
  const { headline, lede, primary, secondary, image } = home.hero;

  return (
    <section className="relative overflow-hidden border-b border-rule">
      <div className="shell relative grid items-center gap-6 py-8 lg:grid-cols-12 lg:gap-7 lg:py-10">
        {/* Copy. Sits above the image on desktop so the type can overlap it. */}
        <div className="relative z-10 lg:col-span-7">
          <p
            className="mb-5 font-condensed text-eyebrow uppercase text-ink-muted"
            style={{ animation: 'rise 600ms cubic-bezier(0.22,1,0.36,1) both' }}
          >
            {site.tagline}
          </p>

          <h1 className="mb-5 font-display text-display-xl uppercase">
            {headline.map((line, i) => (
              <span
                key={line}
                className="block"
                style={{ animation: `rise 700ms cubic-bezier(0.22,1,0.36,1) ${120 + i * 90}ms both` }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            className="mb-6 max-w-[42ch] text-body-l"
            style={{ animation: 'rise 700ms cubic-bezier(0.22,1,0.36,1) 400ms both' }}
          >
            {lede}
          </p>

          <div
            className="flex flex-wrap items-center gap-4"
            style={{ animation: 'rise 700ms cubic-bezier(0.22,1,0.36,1) 480ms both' }}
          >
            <Button to={primary.to} className="w-full sm:w-auto">
              {primary.label}
            </Button>
            <Link
              to={secondary.to}
              className="group inline-flex items-center gap-2 border-b border-rule-control pb-[2px] text-label text-ink hover:border-ink"
            >
              {secondary.label}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 ease-editorial group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>

        {/* Portrait. Bleeds past the gutter on large screens. */}
        <div
          className="lg:col-span-5 lg:-mr-6 xl:-mr-8"
          style={{ animation: 'rise 900ms cubic-bezier(0.22,1,0.36,1) 220ms both' }}
        >
          <Figure slot={image} priority />
        </div>
      </div>

      <div className="shell hidden items-center gap-3 pb-5 text-ink-muted lg:flex">
        <ArrowDown aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
        <span className="font-condensed text-caption uppercase tracking-[0.22em]">Scroll</span>
      </div>
    </section>
  );
}
