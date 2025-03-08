'use client';

import React from 'react';

import { UserUpdateInput } from '@/lib/gql/graphql';
import LabelInput from '@/components/ui/label-input';
import useToggle from '@/utils/hooks/use-toggle';
import { updateUserProfile } from '../actions';
import { useOptimisticForm } from '@/utils/hooks/use-optimistic-form';
import { Button } from '@/components/ui/button';
import Form from '@/components/ui/form';

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
    <Form
      onSubmit={handleSubmit(onSubmit)}
      title='User profile'
      description='Account details'
    >
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
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        {disabled ? (
          <Button onClick={toggleDisabled} type='button'>
            Edit
          </Button>
        ) : (
          <>
            <Button onClick={onReset} type='reset' variant='outline'>
              Cancel
            </Button>
            <Button type='submit'>Save</Button>
          </>
        )}{' '}
      </div>
    </Form>
  );
}
