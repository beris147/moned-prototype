'use server';

import { createClient } from '@/utils/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error);
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
      redirectTo: `${process.env.NEXT_PUBLIC_API_URI}/auth/callback`,
    },
  });
  if (error) {
    redirect('/error');
  }
  console.log('google sign in url: ', data.url);
  if (data.url) {
    redirect(data.url);
  }
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
}
