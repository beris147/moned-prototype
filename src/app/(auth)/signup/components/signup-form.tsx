'use client';

import React from 'react';

import GoogleSignInButton from '../../components/google-sign-in-button';
import { signup, SignupFormData } from '../../actions';
import { useForm } from 'react-hook-form';
import TextInput from '@/utils/components/text-input';
import FormButton from '@/utils/components/form-button';

export default function SignupForm() {
  const { register, handleSubmit } = useForm<SignupFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: SignupFormData) => {
    signup(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <FormButton type='submit' label={'Sign Up'} />
      </form>
      <GoogleSignInButton />
    </>
  );
}
