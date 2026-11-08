import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

const tone = {
  default: 'border-rule-control text-ink',
  quiet: 'border-rule text-ink-muted',
  /** Used for the DEMO mark on demonstration records. */
  marker: 'border-ink bg-surface-inverse text-ink-inverse',
} as const;

interface TagProps {
  children: ReactNode;
  tone?: keyof typeof tone;
  className?: string;
}

/** Read-only metadata. Never interactive — a clickable category is a Chip. */
export function Tag({ children, tone: t = 'default', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block border px-3 py-[5px] font-condensed text-caption font-semibold uppercase tracking-[0.14em] rounded-none',
        tone[t],
        className,
      )}
    >
      {children}
    </span>
  );
}

interface ChipProps {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
}

/** Selectable filter. State is the inverted fill plus `aria-pressed`. */
export function Chip({ children, selected, onClick }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        'min-h-[40px] whitespace-nowrap border px-4 py-[10px] font-condensed text-nav uppercase rounded-none',
        'transition-colors duration-150 ease-editorial',
        selected
          ? 'border-surface-inverse bg-surface-inverse text-ink-inverse'
          : 'border-rule-control bg-transparent text-ink hover:bg-surface-raised',
      )}
    >
      {children}
    </button>
  );
}
