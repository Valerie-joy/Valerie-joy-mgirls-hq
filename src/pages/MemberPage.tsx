import { useParams } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { getMember, getMembers } from '@/content/members';
import { Figure } from '@/components/ui/Figure';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { MemberCard } from '@/components/directory/MemberCard';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { NotFoundPage } from './NotFoundPage';

export function MemberPage() {
  const { slug = '' } = useParams();
  const member = getMember(slug);

  useDocumentTitle(member ? member.name : 'Member not found', member?.summary);

  if (!member) return <NotFoundPage />;

  const others = getMembers()
    .filter((m) => m.slug !== member.slug)
    .slice(0, 3);

  return (
    <>
      <article>
        <div className="shell grid gap-6 py-8 lg:grid-cols-12 lg:gap-7 lg:py-9">
          <div className="lg:col-span-5">
            <Figure slot={member.image} priority />
          </div>

          <div className="lg:col-span-7">
            <a
              href="/directory"
              className="mb-5 inline-block font-condensed text-nav uppercase text-ink-muted hover:text-ink"
            >
              ← The directory
            </a>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Tag>{member.category}</Tag>
              {member.isDemo && <Tag tone="marker">Demo</Tag>}
            </div>

            <h1 className="mb-3 font-display text-display-l">{member.name}</h1>
            <p className="mb-6 font-condensed text-nav uppercase text-ink-muted">
              {member.city} · Listed {member.joined}
            </p>

            <p className="mb-5 max-w-measure text-body-l">{member.summary}</p>
            {member.about.map((p) => (
              <p key={p} className="mb-4 max-w-measure text-body text-ink">
                {p}
              </p>
            ))}

            <div className="mt-6 border-t-2 border-rule-strong pt-5">
              <h2 className="mb-4 font-condensed text-eyebrow uppercase text-ink-muted">Find her</h2>
              <ul className="grid gap-2 sm:max-w-[420px]">
                {member.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex min-h-[48px] items-center justify-between gap-4 border border-rule-control px-4 text-label text-ink transition-colors duration-150 hover:bg-surface-inverse hover:text-ink-inverse"
                      >
                        {link.label}
                        <ExternalLink aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    ) : (
                      <span className="flex min-h-[48px] items-center justify-between gap-4 border border-rule px-4 text-label text-ink-muted">
                        {link.label}
                        <span className="font-condensed text-caption uppercase">Link pending</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <section className="shell border-t border-rule py-8 lg:py-9">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-display-m">More in the directory</h2>
          <Button to="/directory" variant="link">
            See all members
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((m) => (
            <MemberCard key={m.slug} member={m} />
          ))}
        </div>
      </section>
    </>
  );
}
