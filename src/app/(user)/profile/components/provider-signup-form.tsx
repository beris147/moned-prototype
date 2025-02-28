'use client';

import { ProviderInsertInput, UserUpdateInput } from '@/lib/gql/graphql';
import React from 'react';
import { signUpProvider } from '../actions';
import { useOptimisticForm } from '@/utils/hooks/use-optimistic-form';
import TextInput from '@/components/ui/label-input';
import { useRouter } from 'next/navigation';
import useToggle from '@/utils/hooks/use-toggle';
import { Button } from '@/components/ui/button';
import Form from '@/components/ui/form';

type Props = {
  user: UserUpdateInput;
};

export default function ProviderSignupForm({ user }: Props) {
  const [showSignup, toggleShowSignup] = useToggle(false);
  const router = useRouter();
  const {
    form: { register, handleSubmit, reset },
    submit,
    isPending,
  } = useOptimisticForm<ProviderInsertInput>({ id: user.id }, signUpProvider, {
    onSuccess: () => {
      // need to run the user info query from scratch, since the "preloaded"
      // query runs in server side we need to do this for now
      router.refresh();
    },
    onError(error) {
      console.error(error);
    },
  });
  const onReset = () => {
    reset();
    toggleShowSignup();
  };

  return (
    <Form
      title={'Provider Signup'}
      description={'Sign up as a provider to start offering your services'}
      onSubmit={handleSubmit(submit)}
    >
      {showSignup ? (
        <>
          <TextInput
            label={'Cedula'}
            register={register}
            name={'cedula'}
            disabled={isPending}
          />
          <TextInput
            label={'Profesional Degree'}
            register={register}
            name={'degree'}
            disabled={isPending}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '10px',
            }}
          >
            <Button onClick={onReset} type='reset' variant='outline'>
              Cancel
            </Button>
            <Button type='submit' disabled={isPending}>
              Save
            </Button>
          </div>
        </>
      ) : (
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}
        >
          <Button onClick={toggleShowSignup}>Sign up</Button>
        </div>
      )}
    </Form>
  );
}
