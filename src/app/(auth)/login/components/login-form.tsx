import React from 'react';
import GoogleSignInButton from '../../components/google-sign-in-button';
import { login } from '../../actions';

export default function LoginForm() {
	return (
		<>
			<form>
				<label htmlFor='email'>Email:</label>
				<input id='email' name='email' type='email' required />
				<label htmlFor='password'>Password:</label>
				<input id='password' name='password' type='password' required />
				<button formAction={login}>Log in</button>
				<GoogleSignInButton />
			</form>
		</>
	);
}
