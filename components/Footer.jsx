import {Heart} from 'lucide-react';
import {Separator} from './ui/separator';

export default function Footer() {
	return (
		<footer className='py-8 px-4 bg-primary text-primary-foreground'>
			<div className='max-w-6xl mx-auto'>
				<Separator className='mb-6 bg-primary-foreground/20' />
				<div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
					<div className='flex items-center space-x-2'>
						<Heart className='h-5 w-5' />
						<span>Hailee's Doula Care</span>
					</div>
					<p className='text-sm text-primary-foreground/80'>
						© 2025 Hailee's Doula Care. Supporting families with love and care.
					</p>
				</div>
			</div>
		</footer>
	);
}
