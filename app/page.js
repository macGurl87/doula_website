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
					<div className='grid lg:grid-cols-2 gap-8 items-center'>
						<div className='space-y-6'>
							<h1 className='text-3xl lg:text-4xl text-primary'>
								Compassionate Birth Support
							</h1>
							{/* Compassionate Birth Support for Your Journey */}
							<p className='text-lg text-muted-foreground'>
								As a certified doula, I provide personalized support throughout
								your pregnancy, birth, and postpartum journey. Experience the
								confidence and peace of mind that comes with having a dedicated
								advocate by your side.
							</p>
							<div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
								<div className='w-full sm:w-auto'>
									<a href='/contact' className='w-full flex justify-center'>
										<Button
											size='lg'
											className='bg-primary hover:bg-primary/90 w-full sm:w-auto'
										>
											Schedule Free Consultation
										</Button>
									</a>
								</div>
								<div className='w-full sm:w-auto'>
									<a href='/about' className='w-full flex justify-center'>
										<Button
											// variant='outline'
											size='lg'
											className='w-full sm:w-auto'
										>
											Learn More About Doula Care
										</Button>
									</a>
								</div>
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
