import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  back?: { label: string; to: string };
  children?: ReactNode;
}

/** The opener for every page below the homepage. No image, by design. */
export function PageHeader({ eyebrow, title, lede, back, children }: PageHeaderProps) {
  return (
    <header className="border-b border-rule">
      <div className="shell py-8 lg:py-9">
        {back && (
          <Link
            to={back.to}
            className="mb-5 inline-flex items-center gap-1 font-condensed text-nav uppercase text-ink-muted hover:text-ink"
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
            {back.label}
          </Link>
        )}
        {eyebrow && <p className="mb-4 font-condensed text-eyebrow uppercase text-ink-muted">{eyebrow}</p>}
        <h1 className="max-w-[16ch] font-display text-display-l uppercase">{title}</h1>
        {lede && <p className="mt-5 max-w-[52ch] text-body-l">{lede}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </header>
  );
}
