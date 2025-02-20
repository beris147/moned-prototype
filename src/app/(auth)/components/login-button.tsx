import React from 'react';
import { isUserLoggedIn } from '../utils';
import LogInButtonInternal from './login-button-internal';

export default async function LogInButton() {
	const isLoggedIn = await isUserLoggedIn();
	return (
		<>
			<LogInButtonInternal isLoggedIn={isLoggedIn} />
			<br />
		</>
	);
}
