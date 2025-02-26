import React, { HTMLInputTypeAttribute } from 'react';
import type { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form';

type Props<T extends FieldValues> = {
  label: string;
  type?: HTMLInputTypeAttribute | undefined;
  disabled?: boolean | undefined;
  register: UseFormRegister<T>;
  name: FieldPath<T>;
};

export default function TextInput<T extends FieldValues>({
  label,
  type,
  disabled,
  register,
  name,
}: Props<T>) {
  return (
    <>
      <label>{label}</label>{' '}
      <input
        type={type}
        disabled={disabled}
        {...register(name, { required: true })}
      />
      <br />
    </>
  );
}
