'use client';
import { redirect } from 'next/navigation';
import React from 'react';
import { logout } from '../actions';

export default function LogInButtonInternal({
	isLoggedIn,
}: {
	isLoggedIn: boolean;
}) {
	const handleLogin = () => {
		redirect('/login');
	};
	const handleSignIn = () => {
		redirect('/signin');
	};
	const handleSignOut = async () => {
		await logout();
		redirect('/');
	};

	return (
		<>
			{!isLoggedIn ? (
				<>
					<button onClick={handleLogin}>Log In</button>
					<button onClick={handleSignIn}>Sign In</button>
				</>
			) : (
				<button onClick={handleSignOut}>Log out</button>
			)}
		</>
	);
}
