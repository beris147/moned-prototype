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
import { login, LoginFormData } from '../../actions';
import LabelInput from '@/components/ui/label-input';
import GoogleSignInButton from '../../components/google-sign-in-button';
import { redirect } from 'next/navigation';

export default function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const { register, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const goToSignup = () => redirect('/signup');

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(login)}>
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
                Login
              </Button>
              <GoogleSignInButton label='Login with Google' />
            </div>
            <div className='mt-4 text-center text-sm'>
              Don&apos;t have an account?{' '}
              <a
                href='#'
                className='underline underline-offset-4'
                onClick={goToSignup}
              >
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
