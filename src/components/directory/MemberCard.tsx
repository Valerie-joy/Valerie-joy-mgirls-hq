import { Link } from 'react-router-dom';
import type { Member } from '@/content/types';
import { Figure } from '@/components/ui/Figure';
import { Tag } from '@/components/ui/Tag';
import { cn } from '@/lib/cn';

interface MemberCardProps {
  member: Member;
  /** The first card in a row can run taller to break the grid's rhythm. */
  feature?: boolean;
  index?: number;
}

/**
 * One member in the directory grid. The whole card is a single link — never
 * nest a second target inside it.
 */
export function MemberCard({ member, feature = false, index }: MemberCardProps) {
  return (
    <Link
      to={`/directory/${member.slug}`}
      className="group block min-w-0 rounded-none text-ink"
      aria-label={`${member.name}, ${member.category}, ${member.city}`}
    >
      <div className="relative mb-3 overflow-hidden">
        <Figure
          slot={member.image}
          className={cn(
            'transition-[filter,transform] duration-500 ease-editorial',
            'group-hover:scale-[1.02] motion-reduce:group-hover:scale-100',
            feature && 'aspect-editorial',
          )}
        />
        {member.isDemo && (
          <span className="absolute left-3 top-3 z-10">
            <Tag tone="marker">Demo</Tag>
          </span>
        )}
        {index !== undefined && (
          <span className="absolute bottom-3 right-3 z-10 bg-surface px-2 py-1 font-condensed text-caption text-ink-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>

      <h3 className="mb-1 font-display text-display-s">
        <span className="bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ease-editorial group-hover:bg-[length:100%_1px] bg-gradient-to-r from-ink to-ink">
          {member.name}
        </span>
      </h3>
      <p className="mb-3 font-condensed text-caption uppercase text-ink-muted">
        {member.city} — {member.category}
      </p>
    </Link>
  );
}
