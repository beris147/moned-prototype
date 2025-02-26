// run with npx tsx usersgen.ts
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  }
);

async function createUsers(amount: number) {
  for (let i = 0; i < amount; i++) {
    const user = { email: `user${i}@example.com`, password: `user${i}` };
    const { data, error } = await supabase.auth.admin.createUser({
      email: user.email,
      password: user.password,
      email_confirm: true, // Bypass email confirmation
    });

    if (error) {
      console.error(`Error creating user ${user.email}:`, error.message);
    } else {
      console.log(`User ${user.email} created successfully:`, data.user);
    }
  }
}

createUsers(100);
