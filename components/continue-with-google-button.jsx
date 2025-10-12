'use client';

import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {Button} from './ui/button';

import {auth} from '@/app/firebase/client';
import Link from 'next/link';

export default function ContinueWithGoogleButton() {
	return (
		<>
			<Button>Login with email</Button>
			<Button
				onClick={() => {
					const provider = new GoogleAuthProvider();
					//auth is from firebase/client
					signInWithPopup(auth, provider)
						.then((result) => {
							// Handle successful authentication here
						})
						.catch((error) => {
							// Handle errors here
						});
				}}
				variant='outline'
				className='w-full'
			>
				Continue with Google
			</Button>

			<Link
				href='/register'
				className='mt-4 block text-center text-sm text-blue-600 hover:underline'
			>
				Register here if you don't have an account.
			</Link>
		</>
	);
}
