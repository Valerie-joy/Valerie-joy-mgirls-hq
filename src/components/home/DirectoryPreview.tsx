import { home } from '@/content/pages';
import { getMembers } from '@/content/members';
import { MemberCard } from '@/components/directory/MemberCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Six members, laid out on a staggered grid so the section does not read as
 * another row of identical rectangles.
 */
export function DirectoryPreview() {
  const members = getMembers().slice(0, 6);

  return (
    <section className="shell py-9 lg:py-10">
      <Reveal>
        <SectionHeading
          index={1}
          eyebrow={home.directory.eyebrow}
          heading={home.directory.heading}
          lede={home.directory.lede}
          action={home.directory.action}
        />
      </Reveal>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, i) => (
          <Reveal
            key={member.slug}
            delay={(i % 3) * 80}
            // Every third card drops down a step on desktop: the grid breathes.
            className={i % 3 === 1 ? 'lg:mt-9' : i % 3 === 2 ? 'lg:mt-5' : undefined}
          >
            <MemberCard member={member} index={i} feature={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
