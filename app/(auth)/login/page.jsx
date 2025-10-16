// import {Button} from '@/app/components/ui/button';
import ContinueWithGoogleButton from '@/components/continue-with-google-button';
// import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
// import {ArrowLeft} from 'lucide-react';

export default function Login() {
	return (
		<>
			<div>
				<section className='pb-16 bg-secondary/30'>
					<div className='bg-background min-h-screen'>
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
				</section>
			</div>
		</>
	);
}

// <div>
// 				<a href='/'>
// 					{/* className='flex min-h-screen flex-col items-center justify-center bg-gray-100' */}
// 					{/* <Button className='m-4'>
// 						<ArrowLeft className='h-4 w-4' />
// 						Back to Home
// 					</Button> */}
// 				</a>
// 			</div>
