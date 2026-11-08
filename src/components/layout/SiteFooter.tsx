import { Link } from 'react-router-dom';
import { footerColumns, site } from '@/content/site';
import { Wordmark } from '@/components/ui/Wordmark';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-rule-strong">
      <div className="shell py-7">
        <div className="mb-6">
          <Wordmark size="md" asLink={false} />
        </div>

        <div className="mb-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.heading} className="min-w-0">
              <h2 className="mb-3 font-condensed text-eyebrow uppercase text-ink-muted">{col.heading}</h2>
              <ul className="grid gap-2">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="border-b border-transparent text-body-s text-ink hover:border-rule-control"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="min-w-0">
            <h2 className="mb-3 font-condensed text-eyebrow uppercase text-ink-muted">Support</h2>
            <p className="text-body-s text-ink-muted">
              {site.contact.email ? (
                <a href={`mailto:${site.contact.email}`} className="text-ink">
                  {site.contact.email}
                </a>
              ) : (
                <span className="text-ink">{site.contact.emailNote}</span>
              )}
              <br />
              {site.contact.responseWindow}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-4">
          <p className="font-condensed text-caption text-ink-muted">
            © {year} {site.name}
          </p>
          <div className="flex gap-4">
            {site.social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="border-b border-transparent font-condensed text-caption font-semibold uppercase tracking-[0.14em] text-ink hover:border-rule-control"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
