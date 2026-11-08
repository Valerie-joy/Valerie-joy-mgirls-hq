import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { lanes, PRICE_PENDING } from '@/content/offers';
import { home } from '@/content/pages';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

/**
 * The two-lane choice. Lane one is the inverted block and carries the primary
 * action, because self-serve revenue beats an application queue.
 */
export function Lanes() {
  return (
    <section className="shell py-9 lg:py-10">
      <Reveal>
        <SectionHeading index={2} eyebrow={home.lanes.eyebrow} heading={home.lanes.heading} lede={home.lanes.lede} />
      </Reveal>

      <div className="mt-7 grid gap-4 lg:grid-cols-12">
        {lanes.map((lane, i) => {
          const inverse = i === 0;
          return (
            <Reveal
              key={lane.id}
              delay={i * 100}
              className={cn(inverse ? 'lg:col-span-7' : 'lg:col-span-5', 'min-w-0')}
            >
              <div
                className={cn(
                  'flex h-full flex-col gap-3 border-t-2 p-6 lg:p-7',
                  inverse
                    ? 'on-inverse border-ink-inverse bg-surface-inverse text-ink-inverse'
                    : 'border-rule-strong bg-surface-raised text-ink',
                )}
              >
                <p className={cn('font-condensed text-eyebrow uppercase', inverse ? 'text-ink-inverse/70' : 'text-ink-muted')}>
                  {lane.eyebrow}
                </p>
                <h3 className="font-display text-display-m">{lane.title}</h3>
                <p className="text-body-l">{lane.audience}</p>

                <p
                  className={cn(
                    'font-condensed text-nav uppercase',
                    inverse ? 'text-ink-inverse/70' : 'text-ink-muted',
                  )}
                >
                  {lane.price ?? PRICE_PENDING}
                  {lane.priceNote && <span className="normal-case tracking-normal"> — {lane.priceNote}</span>}
                </p>

                <ul className="mt-2 grid gap-2">
                  {lane.inclusions.map((item) => (
                    <li key={item} className="flex gap-3 text-body-s">
                      <span
                        aria-hidden="true"
                        className={cn('mt-[11px] h-px w-[10px] flex-none', inverse ? 'bg-ink-inverse' : 'bg-ink')}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link
                    to={lane.action.to}
                    className={cn(
                      'group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-none border px-6 text-label transition-colors duration-150 ease-editorial',
                      inverse
                        ? 'border-ink-inverse bg-ink-inverse text-surface-inverse hover:bg-transparent hover:text-ink-inverse'
                        : 'border-rule-control bg-transparent text-ink hover:border-surface-inverse hover:bg-surface-inverse hover:text-ink-inverse',
                    )}
                  >
                    {lane.action.label}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 ease-editorial group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
