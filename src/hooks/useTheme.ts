import { useCallback, useEffect, useState } from 'react';

export type Theme = 'paper' | 'ink';

const STORAGE_KEY = 'mgirlshq-theme';

function read(): Theme {
  if (typeof document === 'undefined') return 'paper';
  return document.documentElement.dataset.theme === 'ink' ? 'ink' : 'paper';
}

/**
 * Paper / Ink. The inline script in index.html sets the first theme before
 * paint; this hook only handles the toggle afterwards.
 *
 * Storage is a per-visitor convenience and may be unavailable (private window,
 * blocked site data), so every access is wrapped.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(read);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Only an explicit choice is remembered. Persisting the theme we derived
  // from the OS would lock the visitor out of following their own setting.
  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === 'paper' ? 'ink' : 'paper';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* no storage: the choice simply lasts for this visit */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
