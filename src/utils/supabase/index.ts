import { createClient as createClientSideClient } from './client';
import { createClient as createServerSideClient } from './server';

const IS_SERVER = typeof window === typeof undefined;

export async function createClient() {
	if (IS_SERVER) {
		return await createServerSideClient();
	}
	return createClientSideClient();
}
