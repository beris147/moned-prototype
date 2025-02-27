import React, { HTMLInputTypeAttribute } from 'react';

import type { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form';

import { Label } from './label';
import { Input } from './input';

type Props<T extends FieldValues> = {
  label: string;
  type?: HTMLInputTypeAttribute | undefined;
  disabled?: boolean | undefined;
  register: UseFormRegister<T>;
  name: FieldPath<T>;
};

export default function LabelInput<T extends FieldValues>({
  label,
  type,
  disabled,
  register,
  name,
}: Props<T>) {
  return (
    <div className='grid gap-2'>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        disabled={disabled}
        {...register(name, { required: true })}
      />
    </div>
  );
}
