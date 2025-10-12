'use client';

import Link from 'next/link';
import {Heart, Menu} from 'lucide-react';
import {Button} from './ui/button';
import {useState} from 'react';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div>
			{/* Navigation */}
			<nav className='w-full bg-white/95 backdrop-blur-sm border-b border-border z-50'>
				<div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
					<div className='flex items-center space-x-2'>
						<Heart className='h-6 w-6 text-primary' />
						<span className='text-xl text-primary'>Hailee's Doula Care</span>
					</div>
					{/* Hamburger icon for mobile */}
					<div className='md:hidden'>
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className='p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary'
							aria-label='Toggle menu'
						>
							<Menu className='h-6 w-6 text-primary' />
						</button>
					</div>
					{/* Navigation links */}
					<div className='hidden md:flex space-x-6'>
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
				{/* Mobile menu */}
				{menuOpen && (
					<div className='md:hidden px-4 pb-4'>
						<div className='flex flex-col space-y-2'>
							<Link
								href='/'
								className='text-foreground hover:text-primary transition-colors'
								onClick={() => setMenuOpen(false)}
							>
								Home
							</Link>
							<Link
								href='/about'
								className='text-foreground hover:text-primary transition-colors'
								onClick={() => setMenuOpen(false)}
							>
								About
							</Link>
							<Link
								href='/services'
								className='text-foreground hover:text-primary transition-colors'
								onClick={() => setMenuOpen(false)}
							>
								Services
							</Link>
							<Link
								href='/contact'
								className='text-foreground hover:text-primary transition-colors'
								onClick={() => setMenuOpen(false)}
							>
								Contact
							</Link>
						</div>
					</div>
				)}
			</nav>
		</div>
	);
}
