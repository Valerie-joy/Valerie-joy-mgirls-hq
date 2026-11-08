import { Hero } from '@/components/home/Hero';
import { Marquee } from '@/components/home/Marquee';
import { DirectoryPreview } from '@/components/home/DirectoryPreview';
import { Lanes } from '@/components/home/Lanes';
import { Campaign } from '@/components/home/Campaign';
import { FounderFeature } from '@/components/home/FounderFeature';
import { SubscribeForm } from '@/components/forms/SubscribeForm';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { site } from '@/content/site';

export function HomePage() {
  useDocumentTitle(site.name, site.description);

  return (
    <>
      <Hero />
      <Marquee />
      <DirectoryPreview />
      <Lanes />
      <Campaign />
      <FounderFeature />
      <SubscribeForm />
    </>
  );
}
