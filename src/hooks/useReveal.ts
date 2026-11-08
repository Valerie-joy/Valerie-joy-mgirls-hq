import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-entrance, done so the page is complete at rest.
 *
 * Elements render visible. Only once the hook has confirmed that the browser
 * supports IntersectionObserver AND the visitor has not asked for reduced
 * motion does it hide them and fade them in. If anything fails — no observer,
 * reduced motion, JS error — the content is simply there.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delayMs = 0) {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState<'static' | 'pending' | 'in'>('static');

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    // Already on screen at mount: leave it alone, don't animate the first frame.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) return;

    setState('pending');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => setState('in'), delayMs);
            observer.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  const className = state === 'pending' ? 'reveal-pending' : state === 'in' ? 'reveal-in' : '';

  return { ref, className };
}
