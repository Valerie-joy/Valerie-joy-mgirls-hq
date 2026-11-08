import { useId } from 'react';
import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

const control =
  'w-full min-h-[48px] rounded-none border bg-surface px-4 py-[11px] font-sans text-body text-ink ' +
  'placeholder:text-ink-muted border-rule-control ' +
  'focus-visible:border-ink disabled:text-ink-muted disabled:border-rule disabled:cursor-not-allowed';

const invalid = 'border-2 border-ink';

interface FieldShellProps {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
  className?: string;
}

function FieldShell({ id, label, hint, error, optional, children, className }: FieldShellProps) {
  return (
    <div className={cn('grid gap-2', className)}>
      <label htmlFor={id} className="text-label text-ink">
        {label}
        {optional && <span className="ml-2 font-condensed text-caption uppercase text-ink-muted">Optional</span>}
      </label>
      {children}
      {error ? (
        // Errors are signalled by a doubled border, a mark and a sentence —
        // never by colour, because this palette has none to spare.
        <p id={`${id}-error`} className="flex gap-2 text-body-s font-semibold text-ink">
          <span
            aria-hidden="true"
            className="mt-[2px] inline-flex h-[18px] w-[18px] flex-none items-center justify-center border border-ink font-condensed"
          >
            !
          </span>
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-hint`} className="text-body-s text-ink-muted">
            {hint}
          </p>
        )
      )}
    </div>
  );
}

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'className'> & {
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  className?: string;
};

export function TextField({ label, hint, error, optional, className, ...rest }: TextFieldProps) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} optional={optional} className={className}>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(control, error && invalid)}
        {...rest}
      />
    </FieldShell>
  );
}

type TextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'className'> & {
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
};

export function TextAreaField({ label, hint, error, optional, ...rest }: TextAreaProps) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} optional={optional}>
      <textarea
        id={id}
        rows={5}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(control, 'min-h-[120px] resize-y', error && invalid)}
        {...rest}
      />
    </FieldShell>
  );
}

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'className'> & {
  label: string;
  hint?: string;
  error?: string;
  options: readonly string[];
  placeholder?: string;
};

export function SelectField({ label, hint, error, options, placeholder, ...rest }: SelectProps) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} hint={hint} error={error}>
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(control, error && invalid)}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}
