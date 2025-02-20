import React from 'react';
import { redirect } from 'next/navigation';
import { getAuthUser } from '../(auth)/utils';

export default async function PrivatePage() {
	const { user, error } = await getAuthUser();
	if (error || !user) {
		redirect('/login');
	}
	return <p>Hello {user.email}</p>;
}
