'use client';
import {Button} from '@/components/ui/button';

import Image from 'next/image';
import image from '../public/belly.jpeg';

export default function Home() {
	return (
		<div className='flex-1 w-full flex items-center justify-center bg-background'>
			{/* Hero Section */}
			<section className='w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 md:py-12 lg:py-16 xl:py-20'>
				<div className='w-full max-w-[2560px] mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center'>
						<div className='space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8'>
							<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-primary font-medium leading-tight'>
								Compassionate Birth Support
							</h1>
							{/* Compassionate Birth Support for Your Journey */}
							<p className='text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground leading-relaxed'>
								As a certified doula, I provide personalized support throughout
								your pregnancy, birth, and postpartum journey. Experience the
								confidence and peace of mind that comes with having a dedicated
								advocate by your side.
							</p>
							<div className='flex flex-col sm:flex-row gap-4 lg:gap-4 xl:gap-6 items-center sm:items-start pt-2'>
								<div className='w-full sm:w-auto'>
									<a
										href='/contact'
										className='w-full flex justify-center sm:justify-start'
									>
										<Button
											size='lg'
											className='bg-primary hover:bg-primary/90 w-full sm:w-auto text-sm md:text-base lg:text-base xl:text-lg px-6 md:px-8 lg:px-8 xl:px-10 py-4 md:py-5 lg:py-5 xl:py-6'
										>
											Schedule Free Consultation
										</Button>
									</a>
								</div>
								<div className='w-full sm:w-auto'>
									<a
										href='/about'
										className='w-full flex justify-center sm:justify-start'
									>
										<Button
											size='lg'
											className='w-full sm:w-auto text-sm md:text-base lg:text-base xl:text-lg px-6 md:px-8 lg:px-8 xl:px-10 py-4 md:py-5 lg:py-5 xl:py-6'
										>
											Learn More About Doula Care
										</Button>
									</a>
								</div>
							</div>
						</div>
						<div className='relative w-full aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] min-h-[300px] max-h-[600px]'>
							<Image
								src={image}
								fill
								alt='Professional portrait of Hailee, certified doula'
								className='object-cover rounded-lg shadow-lg'
								sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 2560px) 40vw, 1024px'
								priority
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
