import { useEffect } from 'react';
import { site } from '@/content/site';

/** Per-page title and meta description. Replace with a head manager if SSR lands. */
export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = title === site.name ? site.name : `${title} — ${site.name}`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
}
