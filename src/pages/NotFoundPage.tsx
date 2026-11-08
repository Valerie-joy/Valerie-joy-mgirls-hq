import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function NotFoundPage() {
  useDocumentTitle('Page not found');

  return (
    <>
      <PageHeader
        eyebrow="404"
        title="That page is not here"
        lede="The link may be old, or the listing may have moved. The directory is the best place to start."
      />
      <div className="shell flex flex-wrap gap-4 py-8">
        <Button to="/directory">Browse the directory</Button>
        <Button to="/" variant="secondary">
          Back to the homepage
        </Button>
      </div>
    </>
  );
}
