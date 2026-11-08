import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnnouncementBar } from './AnnouncementBar';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { StickyCta } from './StickyCta';

/** Returns to the top on navigation, but respects in-page anchors. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <ScrollManager />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-none focus:border focus:border-ink focus:bg-surface focus:px-4 focus:py-2 focus:text-label"
      >
        Skip to content
      </a>

      <AnnouncementBar />
      <SiteHeader />

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  );
}
