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

type Props = {
  provider: Provider;
};

export default function ProviderCard({ provider }: Props) {
  return (
    <Card className='shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row'>
      <div className='w-full md:w-2/3'>
        <CardHeader className='bg-gray-800 text-white p-4 relative'>
          <CardTitle className='flex items-center space-x-4'>
            <AvatarTemplate fallbackName={provider.user?.full_name ?? ''}>
              <span className='font-semibold text-white'>
                {provider.user?.full_name}
              </span>
            </AvatarTemplate>
          </CardTitle>
          <CardDescription className='text-sm mt-2'>
            Profesional degree: {provider.degree}
          </CardDescription>
          <button className='absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded'>
            View Profile
          </button>
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
            <div>Calendar</div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
