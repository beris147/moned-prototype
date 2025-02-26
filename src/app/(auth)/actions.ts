'use server';

import { createClient } from '@/utils/supabase';
import { buildURL } from '@/utils/url';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const AUTH_EMAIL_CONFIRM_URL = buildURL('auth/confirm');
const OAUTH_CALLBACK_URL = buildURL('auth/callback');

export type LoginFormData = {
  email: string;
  password: string;
};

export async function login(formData: LoginFormData) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(formData);
  if (error) {
    redirect('/error');
  }
  revalidatePath('/', 'layout');
  redirect('/');
}

export type SignupFormData = {
  email: string;
  password: string;
};

export async function signup(formData: SignupFormData) {
  const supabase = await createClient();
  const data = {
    options: {
      emailRedirectTo: AUTH_EMAIL_CONFIRM_URL,
    },
    ...formData,
  };
  const { error } = await supabase.auth.signUp(data);
  if (error) {
    redirect('/error');
  }
  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signInWithGoogle() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: OAUTH_CALLBACK_URL,
    },
  });
  if (error) {
    redirect('/error');
  }
  if (data.url) {
    redirect(data.url);
  }
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
}
