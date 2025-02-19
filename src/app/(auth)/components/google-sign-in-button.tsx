'use client';
import React from 'react';
import { signInWithGoogle } from '../actions';

export default function GoogleSignInButton() {
	return <button onClick={signInWithGoogle}>Login with Google</button>;
}
