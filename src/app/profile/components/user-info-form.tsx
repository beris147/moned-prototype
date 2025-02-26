'use client';

import React from 'react';

import { UserUpdateInput } from '@/lib/gql/graphql';
import TextInput from '@/utils/components/text-input';
import useToggle from '@/utils/hooks/use-toggle';
import FormButton from '@/utils/components/form-button';
import { updateUserProfile } from '../actions';
import { useOptimisticForm } from '@/utils/hooks/use-optimistic-form';

type Props = {
  user: UserUpdateInput;
};

export default function UserInfoForm({ user }: Props) {
  const [disabled, toggleDisabled] = useToggle(true);
  const {
    form: { register, handleSubmit, reset },
    submit,
  } = useOptimisticForm(user, updateUserProfile);

  const onSubmit = (newData: UserUpdateInput) => {
    submit(newData);
    toggleDisabled();
  };

  const onReset = () => {
    reset();
    toggleDisabled();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label={'Email'}
          register={register}
          name={'email'}
          disabled={disabled}
        />
        <TextInput
          label={'Full name'}
          register={register}
          name={'full_name'}
          disabled={disabled}
        />
        <TextInput
          label={'Phone Number'}
          register={register}
          name={'phone_number'}
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
