'use server';

import { createClient } from '@/utils/supabase/server';
import { AuthError, User } from '@supabase/supabase-js';

interface AuthUserResponse {
  user: User | null;
  error: AuthError | null;
}

export async function getAuthUser(): Promise<AuthUserResponse> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  return {
    user: data.user,
    error: error,
  };
}

export async function isUserLoggedIn(): Promise<boolean> {
  const authUser = await getAuthUser();
  return authUser?.user !== null;
}
