import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { headerAction } from '@/content/site';

/**
 * The phone-only primary action, revealed once the visitor is 60% down the
 * page. Desktop never sees it — the header already carries the same action.
 */
export function StickyCta() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.body.scrollHeight;
      setShown(total > window.innerHeight * 1.8 && scrolled / total > 0.6);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden={!shown}
      className={
        'fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-surface px-4 transition-transform duration-300 ease-editorial lg:hidden ' +
        (shown ? 'translate-y-0' : 'translate-y-full')
      }
      style={{ paddingTop: 'var(--space-3)', paddingBottom: 'max(var(--space-3), env(safe-area-inset-bottom, 0px))' }}
    >
      <Link
        to={headerAction.to}
        tabIndex={shown ? 0 : -1}
        className="flex min-h-[48px] w-full items-center justify-center rounded-none border border-surface-inverse bg-surface-inverse text-label text-ink-inverse"
      >
        {headerAction.label}
      </Link>
    </div>
  );
}
