'use client';

import React from 'react';
import { FragmentType } from '@/lib/gql';
import { useForm } from 'react-hook-form';
import { UserUpdateInput } from '@/lib/gql/graphql';
import TextInput from '@/utils/components/text-input';
import useToggle from '@/utils/hooks/use-toggle';
import FormButton from '@/utils/components/form-button';
import {
  USER_DATA_FRAGMENT,
  useUserProfile,
} from '@/utils/hooks/use-user-profile';

type Props = {
  from: FragmentType<typeof USER_DATA_FRAGMENT>;
};

export default function UserInfoForm({ from }: Props) {
  const [disabled, toggleDisabled] = useToggle(true);
  const [userData, setUserData] = useUserProfile(from, {
    onCompleted: () => {
      toggleDisabled();
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const { register, handleSubmit, reset } = useForm<UserUpdateInput>({
    defaultValues: { ...userData },
  });

  const onReset = () => {
    toggleDisabled();
    reset(userData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(setUserData)}>
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
            <FormButton label='Save' type='submit' />
          </>
        )}
      </form>
    </>
  );
}
