import { Plug } from 'lucide-react';

/**
 * Shown when a form validates but has nowhere to send its data.
 *
 * The site never claims a subscription, an application or a message was
 * received while no service is connected. This states the real status.
 */
export function PendingIntegration({ service, inverse = false }: { service: string; inverse?: boolean }) {
  return (
    <div
      role="status"
      className={
        'mt-5 flex gap-3 border p-4 text-body-s ' +
        (inverse ? 'border-ink-inverse/50 text-ink-inverse' : 'border-rule-control text-ink')
      }
    >
      <Plug aria-hidden="true" className="mt-[2px] h-[18px] w-[18px] flex-none" strokeWidth={1.5} />
      <p>
        <strong className="font-semibold">Validated, but not sent.</strong> {service} is not connected yet, so nothing
        was submitted and nothing was stored. Wire the integration and this form will send for real.
      </p>
    </div>
  );
}
