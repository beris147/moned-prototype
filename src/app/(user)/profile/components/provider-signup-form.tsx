'use client';

import { ProviderInsertInput, UserUpdateInput } from '@/lib/gql/graphql';
import React from 'react';
import { signUpProvider } from '../actions';
import { useOptimisticForm } from '@/utils/hooks/use-optimistic-form';
import TextInput from '@/components/ui/label-input';
import { useRouter } from 'next/navigation';
import useToggle from '@/utils/hooks/use-toggle';
import { Button } from '@/components/ui/button';

type ProviderFormProps = {
  provider: ProviderInsertInput | undefined;
};
function ProviderForm({ provider }: ProviderFormProps) {
  const router = useRouter();
  const {
    form: { register, handleSubmit },
    submit,
    isPending,
  } = useOptimisticForm(provider, signUpProvider, {
    onSuccess: () => {
      // need to run the user info query from scratch, since the "preloaded"
      // query runs in server side we need to do this for now
      router.refresh();
    },
    onError(error) {
      console.error(error);
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
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
        <Button type='submit' disabled={isPending}>
          Save
        </Button>
      </form>
    </>
  );
}

type Props = {
  user: UserUpdateInput;
};

export default function ProviderSignupForm({ user }: Props) {
  const [showSignup, toggleShowSignup] = useToggle(false);

  return (
    <>
      Sign up as a provider!
      <br />
      {showSignup && <ProviderForm provider={{ id: user.id }} />}
      <Button onClick={toggleShowSignup}>
        {showSignup ? 'Nevermind' : 'Sign me up!'}
      </Button>
    </>
  );
}
