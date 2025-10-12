import {Card, CardContent} from '../../components/ui/card';

import {Button} from '@/components/ui/button';
import {Heart, ArrowLeft, BookOpen, Users, Flower} from 'lucide-react';
import Image from 'next/image';
import image from '../../public/what is a doula.webp';

export default function AboutPage() {
	return (
		<div>
			{/* Header Section */}
			<div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
				<a href='/'>
					<Button variant='outline' className='flex items-center gap-2'>
						<ArrowLeft className='h-4 w-4' />
						Back to Home
					</Button>
				</a>
			</div>
			<section className='pt-4 px-4 bg-secondary/30'>
				<div className='max-w-6xl mx-auto text-center'>
					<h1 className='text-3xl lg:text-4xl text-primary mb-2'>
						About Hailee
					</h1>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Learn more about my journey as a doula, my philosophy on birth
						support, and how I can help make your birth experience empowering
						and beautiful.
					</p>
				</div>
			</section>
			{/* Personal Story Section */}
			<section className='py-16 px-4'>
				<div className='max-w-6xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-4 items-center'>
						<div className='relative'>
							<Image
								src={image}
								alt='Professional portrait of Hailee, certified doula'
								className='w-full h-96 object-cover rounded-lg shadow-lg'
							/>
						</div>
						<div className='space-y-6'>
							<h2 className='text-3xl text-primary'>
								My Journey to Becoming a Doula
							</h2>
							<p className='text-muted-foreground'>
								Hi, I'm Hailee! My path to becoming a doula began with ... After
								experiencing both challenging and empowering births, I realized
								the profound impact that compassionate, knowledgeable support
								can have during this life-changing time.
							</p>
							<p className='text-muted-foreground'>
								What started as a personal passion became my calling. I've been
								privileged to support over __ families through their birth
								journeys, and each experience continues to deepen my commitment
								to this sacred work.
							</p>
							<p className='text-muted-foreground'>
								I believe that every person deserves to feel empowered,
								informed, and supported during pregnancy, birth, and the
								transition to parenthood. My role is to provide continuous
								physical, emotional, and informational support while honoring
								your unique preferences and choices.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* Philosophy Section */}
			<section className='px-4 bg-secondary/30'>
				<div className='max-w-6xl mx-auto'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl text-primary mb-4'>My Birth Philosophy</h2>
						<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
							Every birth is unique, and my approach is centered around your
							individual needs, preferences, and circumstances.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<Card className='text-center'>
							<CardContent className='p-6'>
								<Heart className='h-10 w-10 text-primary mx-auto mb-4' />
								<h3 className='mb-2'>Compassionate Care</h3>
								<p className='text-sm text-muted-foreground'>
									I provide gentle, non-judgmental support that honors your
									emotions and experiences.
								</p>
							</CardContent>
						</Card>

						<Card className='text-center'>
							<CardContent className='p-6'>
								<Users className='h-10 w-10 text-primary mx-auto mb-4' />
								<h3 className='mb-2'>Family-Centered</h3>
								<p className='text-sm text-muted-foreground'>
									I support not just the birthing person, but the entire family
									unit and partnership.
								</p>
							</CardContent>
						</Card>

						<Card className='text-center'>
							<CardContent className='p-6'>
								<BookOpen className='h-10 w-10 text-primary mx-auto mb-4' />
								<h3 className='mb-2'>Evidence-Based</h3>
								<p className='text-sm text-muted-foreground'>
									My guidance is rooted in current research and best practices
									in maternal care.
								</p>
							</CardContent>
						</Card>

						<Card className='text-center'>
							<CardContent className='p-6'>
								<Flower className='h-10 w-10 text-primary mx-auto mb-4' />
								<h3 className='mb-2'>Birth Positive</h3>
								<p className='text-sm text-muted-foreground'>
									I believe in your body's wisdom and your right to a positive
									birth experience.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
			{/* Call to Action */}
			<section className='py-16 px-4 bg-secondary/30'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-3xl text-primary mb-4'>
						Ready to Work Together?
					</h2>
					<p className='text-lg text-muted-foreground mb-8'>
						I'd love to learn more about your birth preferences and discuss how
						I can support your unique journey.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<a href='/contact'>
							<Button size='lg' className='bg-primary hover:bg-primary/90'>
								Schedule Free Consultation
							</Button>
						</a>
						<a href='/services'>
							<Button variant='outline' size='lg' as='span'>
								View My Services
							</Button>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
