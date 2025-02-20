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
	const handleSignUp = () => {
		redirect('/signup');
	};
	const handleSignOut = async () => {
		await logout();
		redirect('/');
	};

	return (
		<>
			{!isLoggedIn ? (
				<>
					<button onClick={handleLogin}>Log In</button>{' '}
					<button onClick={handleSignUp}>Sign Up</button>
				</>
			) : (
				<button onClick={handleSignOut}>Log out</button>
			)}
		</>
	);
}
