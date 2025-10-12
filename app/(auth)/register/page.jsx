import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {ArrowLeft} from 'lucide-react';

export default function Register() {
	return (
		<div>
			<div>
				<a href='/'>
					{/* className='flex min-h-screen flex-col items-center justify-center bg-gray-100' */}
					<Button className='m-4'>
						<ArrowLeft className='h-4 w-4' />
						Back to Home
					</Button>
				</a>
			</div>
			<Card className={'m-4 w-full max-w-md'}>
				<CardHeader>
					<CardTitle className='text-3xl font-bold'>Sign Up Here</CardTitle>
				</CardHeader>

				<CardContent>{/* Registration form elements go here */}</CardContent>
			</Card>
		</div>
	);
}
