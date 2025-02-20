import React from 'react';
import GoogleSignInButton from '../../components/google-sign-in-button';
import { signup } from '../../actions';

export default function SignupForm() {
	return (
		<>
			<form>
				<label htmlFor='email'>Email:</label>
				<input id='email' name='email' type='email' required />
				<br />
				<label htmlFor='password'>Password:</label>
				<input id='password' name='password' type='password' required />
				<br />
				<button formAction={signup}>Sign up</button>
			</form>
			<GoogleSignInButton />
		</>
	);
}
