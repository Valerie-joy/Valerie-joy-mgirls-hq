import { ImageOff } from 'lucide-react';
import type { ImageRatio, ImageSlot } from '@/content/types';
import { cn } from '@/lib/cn';

const ratios: Record<ImageRatio, string> = {
  portrait: 'aspect-portrait',
  editorial: 'aspect-editorial',
  wide: 'aspect-wide',
  square: 'aspect-square',
};

interface FigureProps {
  slot: ImageSlot;
  className?: string;
  /** The hero image is the LCP element and must not be lazy. */
  priority?: boolean;
  /** Dims the frame so inverse type stays readable on top. */
  overlay?: boolean;
  rounded?: boolean;
}

/**
 * One image slot.
 *
 * While `slot.src` is empty this renders a composed placeholder at the final
 * dimensions, with the brief printed inside it. Add `src` to `content/*` and
 * the photograph replaces it — same box, same ratio, no layout change.
 */
export function Figure({ slot, className, priority = false, overlay = false, rounded = false }: FigureProps) {
  const shape = cn(ratios[slot.ratio], rounded ? 'rounded-full' : 'rounded-none', 'relative overflow-hidden w-full');

  if (slot.src) {
    return (
      <div className={cn(shape, className)}>
        <img
          src={slot.src}
          srcSet={slot.srcSet}
          alt={slot.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          className="h-full w-full object-cover grayscale"
        />
        {overlay && <div className="absolute inset-0 bg-overlay" aria-hidden="true" />}
      </div>
    );
  }

  return (
    <div
      className={cn(shape, 'bg-surface-raised border border-rule placeholder-hatch', className)}
      role="img"
      aria-label={`Placeholder: ${slot.alt}`}
    >
      {/* Corner marks — registration ticks, so the frame reads as a plate, not a broken image. */}
      <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-ink-muted" />
      <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-ink-muted" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-ink-muted" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-ink-muted" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-5 text-center">
        <ImageOff aria-hidden="true" className="h-5 w-5 text-ink-muted" strokeWidth={1.25} />
        <p className="font-condensed text-eyebrow uppercase text-ink-muted">{slot.note}</p>
        <p className="max-w-[28ch] font-condensed text-caption text-ink-muted">{slot.alt}</p>
      </div>
    </div>
  );
}
