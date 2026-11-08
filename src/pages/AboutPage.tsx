import { about, home } from '@/content/pages';
import { PageHeader } from '@/components/ui/PageHeader';
import { Figure } from '@/components/ui/Figure';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function AboutPage() {
  useDocumentTitle('About', about.lede);
  const founder = home.founder;

  return (
    <>
      <PageHeader eyebrow="About" title={about.title} lede={about.lede} />

      <section className="shell grid gap-6 py-8 lg:grid-cols-12 lg:gap-7 lg:py-9">
        <div className="lg:col-span-7">
          {about.body.map((p) => (
            <p key={p} className="mb-5 max-w-measure text-body-l">
              {p}
            </p>
          ))}
        </div>
        <Reveal className="lg:col-span-5">
          <Figure slot={about.image} />
        </Reveal>
      </section>

      <section className="shell py-8 lg:py-9">
        <div className="grid gap-5 md:grid-cols-3">
          {about.principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="h-full border-t-2 border-rule-strong pt-5">
                <p className="mb-3 font-condensed text-eyebrow uppercase text-ink-muted">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="mb-3 font-display text-display-s">{p.title}</h2>
                <p className="text-body">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="founder" className="border-t border-rule bg-surface-raised">
        <div className="shell grid items-center gap-6 py-9 lg:grid-cols-12 lg:gap-7">
          <Reveal className="lg:col-span-5">
            <Figure slot={founder.image} />
          </Reveal>
          <div className="lg:col-span-7">
            <p className="mb-4 font-condensed text-eyebrow uppercase text-ink-muted">Meet the founder</p>
            <h2 className="mb-5 font-display text-display-m">{founder.heading}</h2>
            <blockquote className="mb-5 border-l-2 border-ink pl-5 font-display text-display-quote italic">
              “{founder.quote}”
            </blockquote>
            {founder.body.map((p) => (
              <p key={p} className="mb-4 max-w-measure text-body">
                {p}
              </p>
            ))}
            <Button href="https://www.instagram.com/terysamonique/" variant="secondary">
              Follow the founder
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
