/** Deliberately permissive: enough to catch typos, not to police real addresses. */
export function emailError(value: string): string | undefined {
  const v = value.trim();
  if (!v) return 'Enter your email address.';
  if (!v.includes('@')) return 'That email address is missing an @. Check it and try again.';
  const [, domain = ''] = v.split('@');
  if (!domain.includes('.') || domain.endsWith('.')) {
    return 'That email address is missing a domain. Check it and try again.';
  }
  if (/\s/.test(v)) return 'That email address contains a space. Check it and try again.';
  return undefined;
}

export function requiredError(value: string, field: string): string | undefined {
  return value.trim() ? undefined : `Enter ${field}.`;
}

/** Optional field: valid when empty, checked only once something is typed. */
export function phoneError(value: string): string | undefined {
  const v = value.trim();
  if (!v) return undefined;
  if (v.replace(/\D/g, '').length < 7) return 'That number looks too short. Check it and try again.';
  return undefined;
}
