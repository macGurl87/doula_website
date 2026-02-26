'use client';

import Link from 'next/link';
import {Heart, Menu, X} from 'lucide-react';
import {Button} from './ui/button';
import {useState, useEffect} from 'react';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [menuOpen]);

	return (
		<div>
			{/* Navigation */}
			<nav className='w-full bg-white/95 backdrop-blur-sm border-b border-border z-50'>
				<div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
					<div className='flex items-center space-x-2 sm:space-x-3 ml-1 sm:ml-2'>
						<Heart className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary flex-shrink-0' />
						<span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary whitespace-nowrap'>
							Hailee's Doula Care
						</span>
					</div>
					{/* Hamburger icon for mobile */}
					<div className='md:hidden'>
						<button
							onClick={() => setMenuOpen(true)}
							className='p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary'
							aria-label='Open menu'
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
					<a href='/login' className='hidden md:block'>
						<Button>Login/Register</Button>
					</a>
				</div>
			</nav>

			{/* Mobile Sidebar Menu */}
			<div className='md:hidden'>
				{/* Backdrop Overlay */}
				<div
					className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
						menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
					}`}
					onClick={() => setMenuOpen(false)}
					aria-hidden='true'
				/>

				{/* Slide-in Sidebar */}
				<div
					className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
						menuOpen ? 'translate-x-0' : '-translate-x-full'
					}`}
				>
					<div className='flex flex-col h-full'>
						{/* Header */}
						<div className='flex items-center justify-between p-6 border-b border-border'>
							<div className='flex items-center space-x-2'>
								<Heart className='h-5 w-5 text-primary' />
								<span className='text-lg font-medium text-primary'>Menu</span>
							</div>
							<button
								onClick={() => setMenuOpen(false)}
								className='p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary'
								aria-label='Close menu'
							>
								<X className='h-5 w-5 text-foreground' />
							</button>
						</div>

						{/* Navigation Links */}
						<nav className='flex-1 px-4 py-6'>
							<div className='flex flex-col space-y-1'>
								<Link
									href='/'
									className='px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 font-medium'
									onClick={() => setMenuOpen(false)}
								>
									Home
								</Link>
								<Link
									href='/about'
									className='px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 font-medium'
									onClick={() => setMenuOpen(false)}
								>
									About
								</Link>
								<Link
									href='/services'
									className='px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 font-medium'
									onClick={() => setMenuOpen(false)}
								>
									Services
								</Link>
								<Link
									href='/contact'
									className='px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 font-medium'
									onClick={() => setMenuOpen(false)}
								>
									Contact
								</Link>
							</div>
						</nav>

						{/* Footer with Login Button */}
						<div className='p-6 border-t border-border'>
							<a href='/login' onClick={() => setMenuOpen(false)}>
								<Button className='w-full'>Login/Register</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
