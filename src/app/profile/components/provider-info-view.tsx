import React from 'react';

import { ProviderUpdateInput, UserUpdateInput } from '@/lib/gql/graphql';
import ProviderSignupForm from './provider-signup-form';
import ProviderInfoForm from './provider-info-form';

type Props = {
  user: UserUpdateInput;
  provider?: ProviderUpdateInput | null | undefined;
};

export default function ProviderInfoView({ provider, user }: Props) {
  return provider ? (
    <ProviderInfoForm provider={provider} />
  ) : (
    <ProviderSignupForm user={user} />
  );
}
