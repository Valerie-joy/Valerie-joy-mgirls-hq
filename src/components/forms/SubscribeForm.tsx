import { useState } from 'react';
import type { FormEvent } from 'react';
import { home } from '@/content/pages';
import { emailError, phoneError } from '@/lib/validate';
import { PendingIntegration } from './PendingIntegration';

/**
 * Email and SMS capture.
 *
 * Validation is real. Submission is not — no list provider is connected, so
 * the form says exactly that rather than faking a confirmation.
 */
export function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string; consent?: string }>({});
  const [validated, setValidated] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = {
      email: emailError(email),
      phone: phoneError(phone),
      consent: consent ? undefined : 'Tick the box so we can send you email and texts.',
    };
    setErrors(next);
    setValidated(!next.email && !next.phone && !next.consent);
  }

  return (
    <section className="on-inverse bg-surface-inverse text-ink-inverse">
      <div className="shell py-9 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-7">
          <div className="lg:col-span-5">
            <p className="mb-4 font-condensed text-eyebrow uppercase text-ink-inverse/70">04 — {home.subscribe.eyebrow}</p>
            <h2 className="mb-3 font-display text-display-m">{home.subscribe.heading}</h2>
            <p className="text-body-l text-ink-inverse/85">{home.subscribe.lede}</p>
          </div>

          <form noValidate onSubmit={onSubmit} className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-[1fr_1fr_auto]">
              <div className="min-w-0">
                <label htmlFor="sub-email" className="mb-2 block text-label">
                  Email address
                </label>
                <input
                  id="sub-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? 'sub-email-error' : undefined}
                  className={
                    'min-h-[48px] w-full rounded-none border bg-transparent px-4 py-[11px] text-body text-ink-inverse placeholder:text-ink-inverse/60 ' +
                    (errors.email ? 'border-2 border-ink-inverse' : 'border-ink-inverse/70')
                  }
                  placeholder="you@example.com"
                />
              </div>

              <div className="min-w-0">
                <label htmlFor="sub-phone" className="mb-2 block text-label">
                  Mobile <span className="font-condensed text-caption uppercase text-ink-inverse/70">Optional</span>
                </label>
                <input
                  id="sub-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={errors.phone ? true : undefined}
                  aria-describedby={errors.phone ? 'sub-phone-error' : undefined}
                  className={
                    'min-h-[48px] w-full rounded-none border bg-transparent px-4 py-[11px] text-body text-ink-inverse placeholder:text-ink-inverse/60 ' +
                    (errors.phone ? 'border-2 border-ink-inverse' : 'border-ink-inverse/70')
                  }
                  placeholder="For texts only"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="min-h-[48px] w-full rounded-none border border-ink-inverse bg-ink-inverse px-6 text-label text-surface-inverse transition-colors duration-150 ease-editorial hover:bg-transparent hover:text-ink-inverse sm:w-auto"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {(errors.email || errors.phone) && (
              <div className="mt-3 grid gap-2">
                {errors.email && (
                  <p id="sub-email-error" className="flex gap-2 text-body-s font-semibold">
                    <span aria-hidden="true" className="mt-[2px] inline-flex h-[18px] w-[18px] flex-none items-center justify-center border border-ink-inverse font-condensed">!</span>
                    {errors.email}
                  </p>
                )}
                {errors.phone && (
                  <p id="sub-phone-error" className="flex gap-2 text-body-s font-semibold">
                    <span aria-hidden="true" className="mt-[2px] inline-flex h-[18px] w-[18px] flex-none items-center justify-center border border-ink-inverse font-condensed">!</span>
                    {errors.phone}
                  </p>
                )}
              </div>
            )}

            <label className="mt-4 flex gap-3 text-body-s">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                aria-invalid={errors.consent ? true : undefined}
                style={{ accentColor: 'var(--ink-inverse)' }}
                className="mt-[3px] h-[18px] w-[18px] flex-none"
              />
              <span>
                Yes, send me email and texts from MGirls HQ. Unsubscribe any time. Read the{' '}
                <a href="/policies/privacy" className="underline underline-offset-[3px]">
                  privacy policy
                </a>
                .
              </span>
            </label>
            {errors.consent && (
              <p className="mt-2 flex gap-2 text-body-s font-semibold">
                <span aria-hidden="true" className="mt-[2px] inline-flex h-[18px] w-[18px] flex-none items-center justify-center border border-ink-inverse font-condensed">!</span>
                {errors.consent}
              </p>
            )}

            {validated && <PendingIntegration service="The email and SMS provider" inverse />}
          </form>
        </div>
      </div>
    </section>
  );
}
