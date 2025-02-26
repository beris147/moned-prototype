'use client';

import { ProviderInsertInput, UserUpdateInput } from '@/lib/gql/graphql';
import React from 'react';
import { signUpProvider } from '../actions';
import { useOptimisticForm } from '@/utils/hooks/use-optimistic-form';
import TextInput from '@/utils/components/text-input';
import FormButton from '@/utils/components/form-button';
import { useRouter } from 'next/navigation';
import useToggle from '@/utils/hooks/use-toggle';

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
        <FormButton label={'Save'} type='submit' disabled={isPending} />
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
      <FormButton
        label={showSignup ? 'Nevermind' : 'Sign me up!'}
        onClick={toggleShowSignup}
      />
    </>
  );
}
