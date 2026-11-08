import type { Config } from 'tailwindcss';

/**
 * The MGirls HQ design system, wired into Tailwind.
 *
 * Every colour resolves to a CSS custom property declared in
 * `src/styles/tokens.css`, so the Paper and Ink themes swap by flipping one
 * `data-theme` attribute on <html> — no duplicate `dark:` classes anywhere.
 *
 * Token names match the published design system one-for-one. If a token
 * changes there, change it in tokens.css; nothing else needs touching.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // The brand has no colour. Replacing (not extending) the palette means an
    // accidental `text-blue-500` fails loudly instead of shipping quietly.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      surface: 'var(--surface)',
      'surface-raised': 'var(--surface-raised)',
      'surface-inverse': 'var(--surface-inverse)',
      ink: 'var(--ink)',
      'ink-muted': 'var(--ink-muted)',
      'ink-inverse': 'var(--ink-inverse)',
      rule: 'var(--rule)',
      'rule-control': 'var(--rule-control)',
      'rule-strong': 'var(--rule-strong)',
      focus: 'var(--focus)',
      'focus-inverse': 'var(--focus-inverse)',
      overlay: 'var(--overlay)',
    },
    // The 4px spacing scale. Tailwind's numeric scale is replaced by the
    // system's named steps so `p-5` can never mean "20px, probably".
    spacing: {
      0: '0px',
      px: '1px',
      1: 'var(--space-1)', // 4
      2: 'var(--space-2)', // 8
      3: 'var(--space-3)', // 12
      4: 'var(--space-4)', // 16
      5: 'var(--space-5)', // 24
      6: 'var(--space-6)', // 32
      7: 'var(--space-7)', // 48
      8: 'var(--space-8)', // 64
      9: 'var(--space-9)', // 96
      10: 'var(--space-10)', // 128
    },
    borderRadius: {
      none: 'var(--radius-none)',
      xs: 'var(--radius-xs)',
      full: 'var(--radius-circle)',
    },
    fontFamily: {
      display: ['Bodoni Moda', 'Didot', 'Georgia', 'Times New Roman', 'serif'],
      sans: ['Archivo', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      condensed: ['Archivo Narrow', 'Arial Narrow', 'Arial', 'sans-serif'],
    },
    extend: {
      // The type scale. Each entry is [size, { lineHeight, letterSpacing, fontWeight }].
      fontSize: {
        'display-xl': ['clamp(2.75rem, 10vw, 6rem)', { lineHeight: '0.92', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-l': ['clamp(2.25rem, 6vw, 4rem)', { lineHeight: '0.94', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-m': ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '500' }],
        'display-s': ['clamp(1.375rem, 2.5vw, 1.875rem)', { lineHeight: '1.13', letterSpacing: '-0.01em', fontWeight: '500' }],
        'display-quote': ['clamp(1.25rem, 2.5vw, 1.625rem)', { lineHeight: '1.31', fontWeight: '400' }],
        'body-l': ['1.125rem', { lineHeight: '1.75rem' }],
        body: ['1rem', { lineHeight: '1.625rem' }],
        'body-s': ['0.875rem', { lineHeight: '1.375rem' }],
        label: ['0.9375rem', { lineHeight: '1.25rem', fontWeight: '600' }],
        eyebrow: ['0.75rem', { lineHeight: '0.875rem', letterSpacing: '0.22em', fontWeight: '600' }],
        nav: ['0.8125rem', { lineHeight: '1rem', letterSpacing: '0.14em', fontWeight: '600' }],
        caption: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
      },
      maxWidth: {
        measure: '65ch',
        shell: '1440px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      aspectRatio: {
        portrait: '4 / 5',
        editorial: '3 / 4',
        wide: '16 / 9',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'none' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        rise: 'rise 600ms cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
