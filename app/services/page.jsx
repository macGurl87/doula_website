import {
	ArrowLeft,
	Baby,
	Calendar,
	Heart,
	Mail,
	MapPin,
	Phone,
	Users,
} from 'lucide-react';
import {Card, CardContent} from '../../components/ui/card';
import {Button} from '@/components/ui/button';

export default function ServicesPage() {
	return (
		<div>
			<div>
				<a href='/'>
					<Button variant='outline' className='flex items-center gap-2'>
						<ArrowLeft className='h-4 w-4' />
						Back to Home
					</Button>
				</a>
			</div>
			{/* Services Section */}
			<section id='services' className='py-16 px-4 bg-secondary/30'>
				<div className='max-w-6xl mx-auto'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl text-primary mb-4'>
							Complete Doula Services
						</h2>
						<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
							From pregnancy through postpartum, I offer comprehensive support
							tailored to your unique needs and preferences.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						<Card className='text-center'>
							<CardContent className='p-6'>
								<Baby className='h-12 w-12 text-primary mx-auto mb-4' />
								<h3 className='mb-3'>Prenatal Support</h3>
								<p className='text-muted-foreground'>
									Birth planning, comfort techniques, nutrition guidance, and
									emotional support throughout your pregnancy.
								</p>
							</CardContent>
						</Card>

						<Card className='text-center'>
							<CardContent className='p-6'>
								<Heart className='h-12 w-12 text-primary mx-auto mb-4' />
								<h3 className='mb-3'>Birth Support</h3>
								<p className='text-muted-foreground'>
									Continuous labor support, comfort measures, advocacy, and
									emotional guidance during your birth experience.
								</p>
							</CardContent>
						</Card>

						<Card className='text-center'>
							<CardContent className='p-6'>
								<Users className='h-12 w-12 text-primary mx-auto mb-4' />
								<h3 className='mb-3'>Postpartum Care</h3>
								<p className='text-muted-foreground'>
									Breastfeeding support, newborn care guidance, emotional
									support, and help with family adjustment.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id='contact' className='py-16 px-4'>
				<div className='max-w-6xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-12'>
						<div className='space-y-6'>
							<h2 className='text-3xl text-primary'>
								Ready to Start Your Journey?
							</h2>
							<p className='text-lg text-muted-foreground'>
								I'd love to learn more about your birth preferences and how I
								can support you. Let's schedule a free consultation to see if
								we're a good fit.
							</p>

							<div className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<Phone className='h-5 w-5 text-primary' />
									<span>(555) 123-4567</span>
								</div>
								<div className='flex items-center space-x-3'>
									<Mail className='h-5 w-5 text-primary' />
									<span>hailee@doulacare.com</span>
								</div>
								<div className='flex items-center space-x-3'>
									<MapPin className='h-5 w-5 text-primary' />
									<span>Serving Hampton Roads</span>
								</div>
								<div className='flex items-center space-x-3'>
									<Calendar className='h-5 w-5 text-primary' />
									<span>Available 24/7 during your birth month</span>
								</div>
							</div>

							<a href='/contact' className='inline-block'>
								<Button size='lg' className='bg-primary hover:bg-primary/90'>
									Schedule Free Consultation
								</Button>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
