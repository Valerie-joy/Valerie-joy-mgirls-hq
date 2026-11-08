import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { headerAction, primaryNav, site } from '@/content/site';
import { Wordmark } from '@/components/ui/Wordmark';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/cn';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Close on route change.
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  // Lock the page behind the open menu, and restore focus on close.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'border-b-2 py-2 font-condensed text-nav uppercase text-ink transition-colors duration-150',
      isActive ? 'border-rule-strong' : 'border-transparent hover:border-rule-strong',
    );

  return (
    <header
      className="sticky z-40 border-b-2 border-rule-strong bg-surface"
      style={{ top: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="shell flex min-h-[68px] items-center justify-between gap-6 py-4">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {primaryNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link
            to={headerAction.to}
            className={
              'hidden min-h-[40px] items-center rounded-none border border-surface-inverse bg-surface-inverse ' +
              'px-5 py-[11px] text-body-s font-semibold text-ink-inverse transition-colors duration-150 ' +
              'hover:bg-transparent hover:text-ink hover:border-rule-strong lg:inline-flex'
            }
          >
            {headerAction.label}
          </Link>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-rule-control text-ink lg:hidden"
          >
            <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-surface lg:hidden"
          style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
        >
          <div className="shell flex min-h-[68px] items-center justify-between border-b-2 border-rule-strong py-4">
            <Wordmark />
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-rule-control text-ink"
            >
              <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Mobile" className="shell flex flex-1 flex-col gap-0 overflow-y-auto py-2">
            {primaryNav.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="border-b border-rule py-5 font-display text-display-s text-ink"
                style={{ animation: `rise 400ms cubic-bezier(0.22,1,0.36,1) ${i * 50}ms both` }}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="border-b border-rule py-5 font-display text-display-s text-ink"
              style={{ animation: `rise 400ms cubic-bezier(0.22,1,0.36,1) ${primaryNav.length * 50}ms both` }}
            >
              Contact
            </Link>
          </nav>

          <div
            className="shell flex items-center justify-between gap-4 border-t border-rule py-5"
            style={{ paddingBottom: 'max(var(--space-5), env(safe-area-inset-bottom, 0px))' }}
          >
            <ThemeToggle />
            <Link
              to={headerAction.to}
              className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-none border border-surface-inverse bg-surface-inverse px-6 text-label text-ink-inverse"
            >
              {headerAction.label}
            </Link>
          </div>
          <span className="sr-only">{site.name} menu</span>
        </div>
      )}
    </header>
  );
}
