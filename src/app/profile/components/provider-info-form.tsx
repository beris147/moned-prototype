'use client';
import React from 'react';

import { ProviderUpdateInput } from '@/lib/gql/graphql';
import { updateProviderData } from '../actions';
import { useOptimisticForm } from '@/utils/hooks/use-optimistic-form';
import useToggle from '@/utils/hooks/use-toggle';
import TextInput from '@/utils/components/text-input';
import FormButton from '@/utils/components/form-button';

type Props = {
  provider: ProviderUpdateInput;
};

export default function ProviderInfoForm({ provider }: Props) {
  const [disabled, toggleDisabled] = useToggle(true);
  const {
    form: { register, handleSubmit, reset },
    submit,
  } = useOptimisticForm(provider, updateProviderData);

  const onSubmit = (newData: ProviderUpdateInput) => {
    submit(newData);
    toggleDisabled();
  };

  const onReset = () => {
    reset();
    toggleDisabled();
  };

  return (
    <>
      Provider Info <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label={'Cedula'}
          register={register}
          name={'cedula'}
          disabled={disabled}
        />
        <TextInput
          label={'Profesional Degree'}
          register={register}
          name={'degree'}
          disabled={disabled}
        />
        {disabled ? (
          <FormButton onClick={toggleDisabled} label='Edit' type='button' />
        ) : (
          <>
            <FormButton label={'Cancel'} onClick={onReset} type='reset' />{' '}
            <FormButton label={'Save'} type='submit' />
          </>
        )}
      </form>
    </>
  );
}
