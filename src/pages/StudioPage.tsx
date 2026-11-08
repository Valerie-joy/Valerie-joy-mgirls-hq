import { Info } from 'lucide-react';
import { studio } from '@/content/pages';
import { lanes, PRICE_PENDING } from '@/content/offers';
import { PageHeader } from '@/components/ui/PageHeader';
import { Figure } from '@/components/ui/Figure';
import { ApplicationForm } from '@/components/forms/ApplicationForm';
import { Reveal } from '@/components/ui/Reveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function StudioPage() {
  useDocumentTitle('Launch Studio', studio.lede);
  const lane = lanes[1];

  return (
    <>
      <PageHeader eyebrow="Lane two" title={studio.title} lede={studio.lede} />

      <section className="shell grid gap-6 py-8 lg:grid-cols-12 lg:gap-7 lg:py-9">
        <div className="lg:col-span-7">
          {studio.body.map((p) => (
            <p key={p} className="mb-5 max-w-measure text-body-l">
              {p}
            </p>
          ))}

          <div className="mt-6 flex gap-3 border border-rule-control p-4 text-body-s">
            <Info aria-hidden="true" className="mt-[2px] h-[18px] w-[18px] flex-none" strokeWidth={1.5} />
            <p>{studio.deliverablesPending}</p>
          </div>

          <p className="mt-6 font-condensed text-nav uppercase text-ink-muted">
            {lane.price ?? PRICE_PENDING}
            {lane.priceNote && <span className="normal-case tracking-normal"> — {lane.priceNote}</span>}
          </p>
        </div>

        <Reveal className="lg:col-span-5">
          <Figure slot={studio.image} />
        </Reveal>
      </section>

      <section className="border-y border-rule bg-surface-raised">
        <div className="shell grid gap-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-9">
          {studio.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="h-full border-t-2 border-rule-strong pt-5">
                <p className="mb-3 font-condensed text-eyebrow uppercase text-ink-muted">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="mb-2 font-display text-display-s">{step.title}</h2>
                <p className="text-body-s">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="apply" className="shell py-8 lg:py-9">
        <h2 className="mb-5 border-t-2 border-rule-strong pt-5 font-display text-display-m">Apply</h2>
        <ApplicationForm kind="studio" />
      </section>
    </>
  );
}
