'use client';

import React from 'react';

import { UserUpdateInput } from '@/lib/gql/graphql';
import LabelInput from '@/components/ui/label-input';
import useToggle from '@/utils/hooks/use-toggle';
import { updateUserProfile } from '../actions';
import { useOptimisticForm } from '@/utils/hooks/use-optimistic-form';
import { Button } from '@/components/ui/button';

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
        <LabelInput
          label={'Email'}
          register={register}
          name={'email'}
          disabled={disabled}
        />
        <LabelInput
          label={'Full name'}
          register={register}
          name={'full_name'}
          disabled={disabled}
        />
        <LabelInput
          label={'Phone Number'}
          register={register}
          name={'phone_number'}
          disabled={disabled}
        />
        {disabled ? (
          <Button onClick={toggleDisabled} type='button'>
            Edit
          </Button>
        ) : (
          <>
            <Button onClick={onReset} type='reset'>
              Cancel
            </Button>
            <Button type='submit'>Save</Button>
          </>
        )}
      </form>
    </>
  );
}
