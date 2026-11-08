import { useState } from 'react';
import type { FormEvent } from 'react';
import { site } from '@/content/site';
import { PageHeader } from '@/components/ui/PageHeader';
import { TextAreaField, TextField } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';
import { PendingIntegration } from '@/components/forms/PendingIntegration';
import { emailError, requiredError } from '@/lib/validate';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function ContactPage() {
  useDocumentTitle('Contact', 'Get in touch with MGirls HQ.');

  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [validated, setValidated] = useState(false);

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    setValidated(false);
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = {
      name: requiredError(values.name, 'your name'),
      email: emailError(values.email),
      message: requiredError(values.message, 'a message'),
    };
    setErrors(next);
    setValidated(!Object.values(next).some(Boolean));
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        lede="Listings, the studio, press, or anything else."
      />

      <section className="shell grid gap-7 py-8 lg:grid-cols-12 lg:gap-7 lg:py-9">
        <form noValidate onSubmit={onSubmit} className="grid gap-5 lg:col-span-7">
          <TextField label="Your name" value={values.name} onChange={set('name')} error={errors.name} autoComplete="name" />
          <TextField
            label="Email address"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            error={errors.email}
          />
          <TextAreaField label="Message" value={values.message} onChange={set('message')} error={errors.message} />
          <div>
            <Button type="submit" className="w-full sm:w-auto">
              Send message
            </Button>
          </div>
          {validated && <PendingIntegration service="The contact inbox" />}
        </form>

        <aside className="lg:col-span-5">
          <div className="border-t-2 border-rule-strong pt-5">
            <h2 className="mb-4 font-condensed text-eyebrow uppercase text-ink-muted">Direct</h2>
            {site.contact.email ? (
              <p className="mb-2 text-body">
                <a href={`mailto:${site.contact.email}`} className="border-b border-rule-control hover:border-ink">
                  {site.contact.email}
                </a>
              </p>
            ) : (
              <p className="mb-2 text-body text-ink">{site.contact.emailNote}</p>
            )}
            <p className="text-body-s text-ink-muted">{site.contact.responseWindow}</p>

            <h2 className="mb-4 mt-7 font-condensed text-eyebrow uppercase text-ink-muted">Elsewhere</h2>
            <ul className="grid gap-2">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="border-b border-transparent text-body hover:border-rule-control"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
