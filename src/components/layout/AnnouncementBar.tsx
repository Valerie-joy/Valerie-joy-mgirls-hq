import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { site } from '@/content/site';

const KEY = 'mgirlshq-announcement-dismissed';

/**
 * One live message. Dismissal is remembered per visitor and keyed to the
 * message id, so changing the copy brings the bar back.
 */
export function AnnouncementBar() {
  const announcement = site.announcement;
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (!announcement) return;
    try {
      setDismissed(localStorage.getItem(KEY) === announcement.id);
    } catch {
      setDismissed(false);
    }
  }, [announcement]);

  if (!announcement || dismissed) return null;

  const close = () => {
    setDismissed(true);
    try {
      localStorage.setItem(KEY, announcement.id);
    } catch {
      /* no storage: it reappears next visit, which is acceptable */
    }
  };

  return (
    <div className="on-inverse relative bg-surface-inverse text-ink-inverse">
      <div className="shell flex min-h-[40px] items-center justify-center gap-4 py-[11px] pr-9 text-center">
        <p className="font-condensed text-nav uppercase">
          {announcement.text}
          {announcement.to && announcement.linkLabel && (
            <>
              {' — '}
              <Link to={announcement.to} className="underline underline-offset-[3px]">
                {announcement.linkLabel}
              </Link>
            </>
          )}
        </p>
      </div>
      <button
        type="button"
        onClick={close}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xs text-ink-inverse"
      >
        <X aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
      </button>
    </div>
  );
}
