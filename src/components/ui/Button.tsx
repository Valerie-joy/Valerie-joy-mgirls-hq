import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'link';
type Size = 'default' | 'compact';

const base =
  'inline-flex items-center justify-center gap-2 font-sans text-label rounded-none ' +
  'border transition-colors duration-150 ease-editorial select-none ' +
  'disabled:cursor-not-allowed';

const sizes: Record<Size, string> = {
  default: 'min-h-[48px] px-6 py-[14px]',
  compact: 'min-h-[36px] px-4 py-2 text-body-s font-semibold',
};

const variants: Record<Variant, string> = {
  // Primary inverts on hover — the brand has no tint to move to.
  primary:
    'bg-surface-inverse text-ink-inverse border-surface-inverse ' +
    'hover:bg-transparent hover:text-ink hover:border-rule-strong ' +
    'disabled:bg-transparent disabled:text-ink-muted disabled:border-rule',
  secondary:
    'bg-transparent text-ink border-rule-control ' +
    'hover:bg-surface-inverse hover:text-ink-inverse hover:border-surface-inverse ' +
    'disabled:text-ink-muted disabled:border-rule disabled:bg-transparent',
  link:
    'bg-transparent text-ink border-transparent border-b-rule-control px-0 min-h-0 py-2 ' +
    'hover:border-b-ink disabled:text-ink-muted disabled:border-b-rule',
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  fullWidth?: boolean;
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & { to?: undefined; href?: undefined };

type InternalLinkProps = CommonProps & { to: string; href?: undefined };
type ExternalLinkProps = CommonProps & { href: string; to?: undefined };

export type AnyButtonProps = ButtonProps | InternalLinkProps | ExternalLinkProps;

/**
 * The one action control. Anything that changes the URL renders as a link;
 * anything else renders as a <button>.
 */
export function Button(props: AnyButtonProps) {
  const { children, variant = 'primary', size = 'default', className, fullWidth, ...rest } = props as CommonProps &
    Record<string, unknown>;

  const classes = cn(
    base,
    variant === 'link' ? '' : sizes[size],
    variants[variant],
    fullWidth && 'w-full',
    className,
  );

  if ('to' in props && props.to) {
    const { to, ...linkRest } = rest as { to: string };
    return (
      <Link to={to} className={classes} {...(linkRest as object)}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as { href: string };
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes} {...(anchorRest as object)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
