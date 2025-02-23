'use client';

import React from 'react';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
	SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support';
import { setContext } from '@apollo/client/link/context';
import { createClient } from '@/utils/supabase';

function makeClient() {
	const authLink = setContext(async (_, { headers }) => {
		const supabase = await createClient();
		const token = (await supabase.auth.getSession()).data.session?.access_token;
		return {
			headers: {
				...headers,
				apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
				Authorization: token ? `Bearer ${token}` : '',
			},
		};
	});

	const httpLink = new HttpLink({
		uri: `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`,
	});

	const link = authLink.concat(httpLink);

	return new ApolloClient({
		cache: new InMemoryCache(),
		link:
			typeof window === typeof undefined
				? ApolloLink.from([
						new SSRMultipartLink({
							stripDefer: true,
						}),
						link,
				  ])
				: link,
	});
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
}
