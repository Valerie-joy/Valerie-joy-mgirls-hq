import { useState } from 'react';
import type { FormEvent } from 'react';
import { categories } from '@/content/members';
import { SelectField, TextAreaField, TextField } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';
import { emailError, requiredError } from '@/lib/validate';
import { PendingIntegration } from './PendingIntegration';

type Kind = 'listing' | 'studio';

interface Values {
  name: string;
  business: string;
  email: string;
  city: string;
  category: string;
  message: string;
}

const empty: Values = { name: '', business: '', email: '', city: '', category: '', message: '' };

/**
 * The listing and studio applications.
 *
 * Validation runs on submit and clears per field as it becomes valid. Nothing
 * is sent anywhere: no form endpoint is connected, and the UI says so.
 */
export function ApplicationForm({ kind }: { kind: Kind }) {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [validated, setValidated] = useState(false);

  const set = (key: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    setValidated(false);
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Partial<Record<keyof Values, string>> = {
      name: requiredError(values.name, 'your name'),
      business: requiredError(values.business, kind === 'listing' ? 'your business name' : 'what you are building'),
      email: emailError(values.email),
      city: requiredError(values.city, 'your city'),
      category: values.category ? undefined : 'Choose a category.',
    };
    setErrors(next);
    setValidated(!Object.values(next).some(Boolean));
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:max-w-[560px]">
      <TextField label="Your name" value={values.name} onChange={set('name')} error={errors.name} autoComplete="name" />
      <TextField
        label={kind === 'listing' ? 'Business name' : 'What you are building'}
        hint={kind === 'listing' ? 'As it should appear in the directory.' : 'One line is enough.'}
        value={values.business}
        onChange={set('business')}
        error={errors.business}
      />
      <TextField
        label="Email address"
        type="email"
        inputMode="email"
        autoComplete="email"
        value={values.email}
        onChange={set('email')}
        error={errors.email}
      />
      <TextField label="City" value={values.city} onChange={set('city')} error={errors.city} autoComplete="address-level2" />
      <SelectField
        label="Category"
        options={categories}
        placeholder="Choose a category"
        value={values.category}
        onChange={set('category')}
        error={errors.category}
      />
      <TextAreaField
        label={kind === 'listing' ? 'Anything else' : 'Where are you in it?'}
        optional
        hint={kind === 'listing' ? 'Links, opening hours, anything that helps the review.' : 'Launched, nearly, or still planning.'}
        value={values.message}
        onChange={set('message')}
      />

      <div>
        <Button type="submit" className="w-full sm:w-auto">
          {kind === 'listing' ? 'Apply to be listed' : 'Apply to the studio'}
        </Button>
      </div>

      {validated && <PendingIntegration service="The application inbox" />}
    </form>
  );
}
