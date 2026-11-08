import { useMemo, useState } from 'react';
import { Info } from 'lucide-react';
import { categories, directoryIsDemo, getMembers } from '@/content/members';
import { MemberCard } from '@/components/directory/MemberCard';
import { FilterBar, type SortKey } from '@/components/directory/FilterBar';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function DirectoryPage() {
  useDocumentTitle(
    'Directory',
    'Browse women-owned businesses listed with MGirls HQ, by category and city.',
  );

  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState<SortKey>('newest');

  const members = useMemo(() => {
    const filtered = category === 'All' ? getMembers() : getMembers().filter((m) => m.category === category);
    const sorted = [...filtered];
    if (sort === 'az') sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'city') sorted.sort((a, b) => a.city.localeCompare(b.city));
    return sorted;
  }, [category, sort]);

  return (
    <>
      <PageHeader
        eyebrow="The directory"
        title="Women you can find"
        lede="Every listing is a page of its own. Filter by what she does, or browse the lot."
      />

      <div className="shell py-7 lg:py-8">
        {directoryIsDemo && (
          <div className="mb-6 flex gap-3 border border-rule-control p-4 text-body-s">
            <Info aria-hidden="true" className="mt-[2px] h-[18px] w-[18px] flex-none" strokeWidth={1.5} />
            <p>
              <strong className="font-semibold">Demonstration content.</strong> These are not real members. Every card
              is marked DEMO until the first listings are published.
            </p>
          </div>
        )}

        <FilterBar
          categories={categories}
          selected={category}
          onSelect={setCategory}
          sort={sort}
          onSort={setSort}
          resultCount={members.length}
        />

        {members.length > 0 ? (
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {members.map((member, i) => (
              <MemberCard key={member.slug} member={member} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-7 border-t-2 border-rule-strong py-9 text-center">
            <p className="mb-5 font-display text-display-s">No members in {category} yet.</p>
            <Button variant="secondary" onClick={() => setCategory('All')}>
              Show all categories
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
