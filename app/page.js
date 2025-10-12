'use client';
import {Button} from '@/components/ui/button';

import Image from 'next/image';
import image from '../public/belly.jpeg';

export default function Home() {
	return (
		<div>
			{/* Hero Section */}
			<section className='pt-5 pb-16 px-4'>
				<div className='max-w-6xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<div className='space-y-6'>
							<h1 className='text-4xl lg:text-5xl text-primary'>
								Your Journey to Motherhood Deserves Care
							</h1>
							{/* Compassionate Birth Support for Your Journey */}
							<p className='text-lg text-muted-foreground'>
								As a certified doula, I provide personalized support throughout
								your pregnancy, birth, and postpartum journey. Experience the
								confidence and peace of mind that comes with having a dedicated
								advocate by your side.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<div>
									<a href='/contact'>
										<Button
											size='lg'
											className='bg-primary hover:bg-primary/90'
										>
											Schedule Free Consultation
										</Button>
									</a>
								</div>
								<a href='/about'>
									<Button
										// variant='outline'
										size='lg'
									>
										Learn More About Doula Care
									</Button>
								</a>
							</div>
						</div>
						<div className='relative'>
							<Image
								src={image}
								height={800}
								alt='Professional portrait of Hailee, certified doula'
								className='w-full h-96 object-cover rounded-lg shadow-lg'
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
