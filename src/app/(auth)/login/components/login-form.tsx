'use client';

import React from 'react';

import GoogleSignInButton from '../../components/google-sign-in-button';
import { login, LoginFormData } from '../../actions';
import { useForm } from 'react-hook-form';
import TextInput from '@/utils/components/text-input';
import FormButton from '@/utils/components/form-button';

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit(login)}>
        <TextInput
          label='Email'
          name='email'
          type='email'
          register={register}
        />
        <TextInput
          label='Password'
          name='password'
          type='password'
          register={register}
        />
        <br />
        <FormButton type='submit' label={'Log In'} />
      </form>
      <GoogleSignInButton />
    </>
  );
}
