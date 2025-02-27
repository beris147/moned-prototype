'use client';

import React from 'react';

import { cn } from '@/lib/ui/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useForm } from 'react-hook-form';
import { signup, LoginFormData } from '../../actions';
import LabelInput from '@/components/ui/label-input';
import GoogleSignInButton from '../../components/google-sign-in-button';
import { useRouter } from 'next/navigation';

export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const { register, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();
  const goToLogin = () => router.push('/login');
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl'>Signup</CardTitle>
          <CardDescription>
            Enter a valid email and password to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(signup)}>
            <div className='flex flex-col gap-6'>
              <LabelInput
                label='Email'
                name='email'
                type='email'
                register={register}
              />
              <LabelInput
                label='Password'
                name='password'
                type='password'
                register={register}
              />
              <Button type='submit' className='w-full'>
                Signup
              </Button>
              <GoogleSignInButton label='Signup with Google' />
            </div>
            <div className='mt-4 text-center text-sm'>
              Already have an account?{' '}
              <a
                href='#'
                className='underline underline-offset-4'
                onClick={goToLogin}
              >
                Log in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
