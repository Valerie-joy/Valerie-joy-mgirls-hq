import { Chip } from '@/components/ui/Tag';

export type SortKey = 'newest' | 'az' | 'city';

const sorts: { key: SortKey; label: string }[] = [
  { key: 'newest', label: 'Newest first' },
  { key: 'az', label: 'A – Z' },
  { key: 'city', label: 'By city' },
];

interface FilterBarProps {
  categories: readonly string[];
  selected: string;
  onSelect: (c: string) => void;
  sort: SortKey;
  onSort: (s: SortKey) => void;
  resultCount: number;
}

export function FilterBar({ categories, selected, onSelect, sort, onSort, resultCount }: FilterBarProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 border-t-2 border-rule-strong bg-surface-raised p-4">
        {/* Chips scroll in one row on a phone rather than wrapping into a wall. */}
        <div className="-mx-4 flex min-w-0 flex-1 gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
          <Chip selected={selected === 'All'} onClick={() => onSelect('All')}>
            All
          </Chip>
          {categories.map((c) => (
            <Chip key={c} selected={selected === c} onClick={() => onSelect(c)}>
              {c}
            </Chip>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="directory-sort" className="font-condensed text-eyebrow uppercase text-ink-muted">
            Sort
          </label>
          <select
            id="directory-sort"
            value={sort}
            onChange={(e) => onSort(e.target.value as SortKey)}
            className="min-h-[40px] rounded-none border border-rule-control bg-surface px-3 py-2 text-body-s text-ink"
          >
            {sorts.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p role="status" className="mt-4 text-body-s text-ink-muted">
        {resultCount === 0
          ? 'No members in this category yet.'
          : `Showing ${resultCount} ${resultCount === 1 ? 'listing' : 'listings'}${
              selected === 'All' ? '' : ` in ${selected}`
            }.`}
      </p>
    </div>
  );
}
