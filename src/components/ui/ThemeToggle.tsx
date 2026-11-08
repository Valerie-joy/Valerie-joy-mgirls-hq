import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

/** Switches the site between the Paper and Ink themes. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const next = theme === 'paper' ? 'Ink' : 'Paper';

  return (
    <button
      type="button"
      onClick={toggle}
      title={`Switch to the ${next} theme`}
      aria-label={`Switch to the ${next} theme`}
      className={
        'inline-flex h-11 w-11 items-center justify-center rounded-none border border-rule-control text-ink ' +
        'transition-colors duration-150 ease-editorial hover:bg-surface-raised ' +
        (className ?? '')
      }
    >
      {theme === 'paper' ? (
        <Moon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.5} />
      ) : (
        <Sun aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.5} />
      )}
    </button>
  );
}
