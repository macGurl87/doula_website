// import {Button} from '@/app/components/ui/button';
import ContinueWithGoogleButton from '@/components/continue-with-google-button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
// import Link from 'next/link';

export default function Login() {
	return (
		<>
			{/* className='flex min-h-screen flex-col items-center justify-center bg-gray-100' */}
			<div>
				<Card className='w-full max-w-md'>
					<CardHeader>
						<CardTitle className='text-3xl font-bold'>Login</CardTitle>
					</CardHeader>
					<CardContent>
						{' '}
						<ContinueWithGoogleButton />
					</CardContent>
				</Card>
			</div>
		</>
	);
}
