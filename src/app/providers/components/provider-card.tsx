import { AvatarTemplate } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Provider } from '@/lib/gql/graphql';
import React from 'react';
import ViewProfileButton from './view-profile-button';
import FollowButton from './follow-button';
import { Calendar } from '@/components/ui/calendar';

type Props = {
  provider: Provider;
};

export default function ProviderCard({ provider }: Props) {
  return (
    <Card className='shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row'>
      <div className='w-full md:w-2/3'>
        <CardHeader className='bg-white text-gray-800 p-4 relative border-b border-gray-200'>
          <CardTitle className='flex items-center space-x-4'>
            <AvatarTemplate fallbackName={provider.user?.full_name ?? ''}>
              <span className='font-semibold text-gray-800'>
                {provider.user?.full_name}
              </span>
            </AvatarTemplate>
          </CardTitle>
          <CardDescription className='text-sm mt-2'>
            {provider.degree}
          </CardDescription>
          <div className='absolute top-4 right-4 flex space-x-2'>
            <ViewProfileButton providerID={provider.id} />
            <FollowButton provider={provider} />
          </div>
        </CardHeader>
        <CardContent className='p-4 space-y-2'>
          <div className='flex items-center space-x-2'>
            <span className='font-semibold text-gray-800'>Cedula:</span>
            <span className='text-gray-700'>{provider.cedula}</span>
          </div>
          <div className='flex items-center space-x-2'>
            <span className='font-semibold text-gray-800'>Contact:</span>
            <span className='text-gray-700'>{provider.user?.email}</span>
          </div>
        </CardContent>
      </div>
      <div className='w-full md:w-1/3 border-t md:border-t-0 md:border-l border-gray-200'>
        <CardContent className='p-4'>
          <div className='flex justify-center'>
            <Calendar mode='multiple' />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
