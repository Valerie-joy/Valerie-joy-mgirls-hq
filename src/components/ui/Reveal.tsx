import type { ElementType, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/cn';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  id?: string;
}

/** Wraps a block in the scroll-entrance behaviour. Safe to nest sparingly. */
export function Reveal({ children, as: Tag = 'div', delay = 0, className, id }: RevealProps) {
  const { ref, className: revealClass } = useReveal<HTMLDivElement>(delay);
  return (
    <Tag ref={ref} id={id} className={cn(revealClass, className)}>
      {children}
    </Tag>
  );
}
