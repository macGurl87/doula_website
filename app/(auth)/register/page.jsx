import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

export default function Register() {
	return (
		<div>
			<Card className={'m-4 w-full max-w-md'}>
				<CardHeader>
					<CardTitle className='text-3xl font-bold'>Sign Up Here</CardTitle>
				</CardHeader>
				<CardContent>{/* Registration form elements go here */}</CardContent>
			</Card>
		</div>
	);
}
