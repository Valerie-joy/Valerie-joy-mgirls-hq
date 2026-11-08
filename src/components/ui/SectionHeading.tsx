import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  /** Only pass a number on pages that genuinely are a sequence. */
  index?: number;
  heading: ReactNode;
  lede?: string;
  action?: { label: string; to: string };
  className?: string;
  /** Inverted sections pass this so the rule and muted text flip. */
  inverse?: boolean;
}

export function SectionHeading({
  eyebrow,
  index,
  heading,
  lede,
  action,
  className,
  inverse = false,
}: SectionHeadingProps) {
  const muted = inverse ? 'text-ink-inverse/70' : 'text-ink-muted';

  return (
    <div className={cn('border-t-2', inverse ? 'border-ink-inverse' : 'border-rule-strong', 'pt-5', className)}>
      {(eyebrow || index !== undefined) && (
        <p className={cn('mb-4 font-condensed text-eyebrow uppercase', muted)}>
          {index !== undefined && <span>{String(index).padStart(2, '0')} — </span>}
          {eyebrow}
        </p>
      )}

      <div className="flex flex-wrap items-baseline justify-between gap-5">
        <h2 className={cn('font-display text-display-m', inverse ? 'text-ink-inverse' : 'text-ink')}>{heading}</h2>
        {action && (
          <Link
            to={action.to}
            className={cn(
              'group inline-flex items-center gap-2 whitespace-nowrap border-b pb-[2px] font-condensed text-nav uppercase',
              inverse
                ? 'border-ink-inverse/50 text-ink-inverse hover:border-ink-inverse'
                : 'border-rule-control text-ink hover:border-ink',
            )}
          >
            {action.label}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 ease-editorial group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        )}
      </div>

      {lede && (
        <p className={cn('mt-4 max-w-[58ch] text-body-l', inverse ? 'text-ink-inverse/85' : 'text-ink')}>{lede}</p>
      )}
    </div>
  );
}
