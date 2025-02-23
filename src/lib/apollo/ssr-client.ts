import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { setContext } from "@apollo/client/link/context";
import { createClient } from "@/utils/supabase/server";

// this is only for SSR
export const { getClient: getSSRClient } = registerApolloClient(async () => {
  const supabase = await createClient();

  const authLink = setContext(async (_, { headers }) => {
    const token =
      (await supabase.auth.getSession()).data.session?.access_token ??
      `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`;
    return {
      headers: {
        ...headers,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
});
