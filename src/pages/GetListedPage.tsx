import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { getListed } from '@/content/pages';
import { lanes, PRICE_PENDING } from '@/content/offers';
import { PageHeader } from '@/components/ui/PageHeader';
import { ApplicationForm } from '@/components/forms/ApplicationForm';
import { Reveal } from '@/components/ui/Reveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function GetListedPage() {
  useDocumentTitle('Get listed', getListed.lede);
  const [open, setOpen] = useState<number | null>(0);
  const listing = lanes[0];

  return (
    <>
      <PageHeader eyebrow="Lane one" title={getListed.title} lede={getListed.lede} />

      {/* Price, stated plainly rather than hidden behind the form. */}
      <section className="border-b border-rule bg-surface-raised">
        <div className="shell flex flex-wrap items-baseline justify-between gap-4 py-6">
          <p className="font-display text-display-s">{listing.price ?? PRICE_PENDING}</p>
          {listing.priceNote && <p className="text-body-s text-ink-muted">{listing.priceNote}</p>}
        </div>
      </section>

      <section className="shell py-8 lg:py-9">
        <div className="grid gap-5 md:grid-cols-3">
          {getListed.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <div className="h-full border-t-2 border-rule-strong pt-5">
                <p className="mb-3 font-condensed text-eyebrow uppercase text-ink-muted">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="mb-3 font-display text-display-s">{step.title}</h2>
                <p className="text-body">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell grid gap-7 py-8 lg:grid-cols-12 lg:gap-7 lg:py-9">
        <div className="lg:col-span-7">
          <h2 className="mb-5 border-t-2 border-rule-strong pt-5 font-display text-display-m">Apply</h2>
          <ApplicationForm kind="listing" />
        </div>

        <div className="lg:col-span-5">
          <h2 className="mb-5 border-t-2 border-rule-strong pt-5 font-display text-display-m">Questions</h2>
          <ul className="border-b border-rule">
            {getListed.faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-t border-rule">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left text-label text-ink"
                    >
                      {item.q}
                      {isOpen ? (
                        <Minus aria-hidden="true" className="h-4 w-4 flex-none" strokeWidth={1.5} />
                      ) : (
                        <Plus aria-hidden="true" className="h-4 w-4 flex-none" strokeWidth={1.5} />
                      )}
                    </button>
                  </h3>
                  <div id={`faq-${i}`} hidden={!isOpen} className="pb-5">
                    <p className="max-w-measure text-body-s text-ink">{item.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
