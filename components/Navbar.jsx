import Link from 'next/link';
import {Heart} from 'lucide-react';
import {Button} from './ui/button';

export default function Navbar() {
	return (
		<div>
			{/* Navigation */}
			<nav className=' w-full bg-white/95 backdrop-blur-sm border-b border-border z-50'>
				<div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
					<div className='flex items-center space-x-2'>
						<Heart className='h-6 w-6 text-primary' />
						<span className='text-xl text-primary'>Hailee's Doula Care</span>
					</div>
					<div className='hidden sm:flex space-x-6'>
						<Link
							href='/'
							className='text-foreground hover:text-primary transition-colors'
						>
							Home
						</Link>
						<Link
							href='/about'
							className='text-foreground hover:text-primary transition-colors'
						>
							About
						</Link>
						<Link
							href='/services'
							className='text-foreground hover:text-primary transition-colors'
						>
							Services
						</Link>
						<Link
							href='/contact'
							className='text-foreground hover:text-primary transition-colors'
						>
							Contact
						</Link>
					</div>
					<a href='/login'>
						<Button>Login/Register</Button>
					</a>
				</div>
			</nav>
		</div>
	);
}
