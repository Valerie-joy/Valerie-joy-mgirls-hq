import { useParams } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { getPolicy } from '@/content/policies';
import { PageHeader } from '@/components/ui/PageHeader';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { NotFoundPage } from './NotFoundPage';

export function PolicyPage() {
  const { slug = '' } = useParams();
  const policy = getPolicy(slug);

  useDocumentTitle(policy ? policy.title : 'Policy not found');

  if (!policy) return <NotFoundPage />;

  return (
    <>
      <PageHeader eyebrow="Policies" title={policy.title} />

      <div className="shell py-8 lg:py-9">
        {!policy.updated && (
          <div className="mb-7 flex gap-3 border border-rule-control p-4 text-body-s sm:max-w-measure">
            <AlertTriangle aria-hidden="true" className="mt-[2px] h-[18px] w-[18px] flex-none" strokeWidth={1.5} />
            <p>
              <strong className="font-semibold">Placeholder, not legal copy.</strong> This policy has not been written
              or reviewed. Do not open a live checkout until it has.
            </p>
          </div>
        )}

        {policy.sections.map((section) => (
          <section key={section.heading} className="mb-7 border-t border-rule pt-5">
            <h2 className="mb-3 font-display text-display-s">{section.heading}</h2>
            {section.body.map((p) => (
              <p key={p} className="mb-4 max-w-measure text-body">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
