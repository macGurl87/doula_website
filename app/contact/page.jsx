'use client';

import {
	ArrowLeft,
	Calendar,
	Clock,
	Heart,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
} from 'lucide-react';
// import {Button} from '../components/ui/button';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '../../components/ui/card';
import {Separator} from '../../components/ui/separator';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';

export default function ContactPage() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Header Section */}
			<section className=' pb-6 bg-secondary/30'>
				<div className='max-w-6xl mx-auto text-center'>
					<h1 className='text-4xl lg:text-5xl text-primary mb-4'>
						Get in Touch
					</h1>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Ready to begin your birth journey with compassionate support? I'd
						love to hear from you and learn about your unique needs and
						preferences.
					</p>
				</div>
			</section>

			{/* Contact Information & Form Section */}
			<section className='px-4'>
				<div className='max-w-6xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-12'>
						{/* Contact Information */}
						<div className='space-y-8'>
							<div>
								<h2 className='text-2xl text-primary mb-6'>
									Contact Information
								</h2>
								<div className='space-y-4'>
									<div className='flex items-start space-x-4'>
										<Phone className='h-6 w-6 text-primary mt-1' />
										<div>
											<h3 className='mb-1'>Phone</h3>
											<p className='text-muted-foreground'>(555) 123-4567</p>
											<p className='text-sm text-muted-foreground'>
												Available 24/7 during your birth month
											</p>
										</div>
									</div>

									<div className='flex items-start space-x-4'>
										<Mail className='h-6 w-6 text-primary mt-1' />
										<div>
											<h3 className='mb-1'>Email</h3>
											<p className='text-muted-foreground'>
												hailee@doulacare.com
											</p>
											<p className='text-sm text-muted-foreground'>
												I respond within 24 hours
											</p>
										</div>
									</div>

									<div className='flex items-start space-x-4'>
										<MapPin className='h-6 w-6 text-primary mt-1' />
										<div>
											<h3 className='mb-1'>Service Area</h3>
											<p className='text-muted-foreground'>
												Hampton Roads Area
											</p>
											<p className='text-sm text-muted-foreground'>
												Including surrounding areas within 50 miles
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Office Hours */}
							<Card>
								<CardHeader>
									<CardTitle className='flex items-center gap-2'>
										<Clock className='h-5 w-5' />
										Office Hours
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='space-y-2'>
										<div className='flex justify-between'>
											<span>Monday - Friday</span>
											<span className='text-muted-foreground'>
												6:00 AM - 3:00 PM
											</span>
										</div>
										<div className='flex justify-between'>
											<span>Saturday</span>
											<span className='text-muted-foreground'>
												8:00 AM - 2:00 PM
											</span>
										</div>
										<div className='flex justify-between'>
											<span>Sunday</span>
											<span className='text-muted-foreground'>
												By appointment
											</span>
										</div>
										<Separator className='my-3' />
										<p className='text-sm text-muted-foreground'>
											Emergency support available 24/7 during your birth month
										</p>
									</div>
								</CardContent>
							</Card>

							{/* Quick Actions */}
							{/* <div className='space-y-4'>
								<h3 className='text-lg text-primary'>Quick Actions</h3>
								<div className='space-y-2'>
									<Button variant='outline' className='w-full justify-start'>
										<Calendar className='h-4 w-4 mr-2' />
										Schedule Free Consultation
									</Button>
									<Button variant='outline' className='w-full justify-start'>
										<MessageCircle className='h-4 w-4 mr-2' />
										Send Quick Message
									</Button>
								</div>
							</div> */}
						</div>

						{/* Contact Form */}
						<div>
							<Card>
								<CardHeader>
									<CardTitle>Send Me a Message</CardTitle>
									<p className='text-muted-foreground'>
										Tell me about your birth preferences and how I can support
										you
									</p>
								</CardHeader>
								<CardContent>
									<form className='space-y-4'>
										<div className='grid grid-cols-2 gap-4'>
											<div>
												<Label htmlFor='firstName'>First Name *</Label>
												<Input
													id='firstName'
													placeholder='Your first name'
													required
												/>
											</div>
											<div>
												<Label htmlFor='lastName'>Last Name *</Label>
												<Input
													id='lastName'
													placeholder='Your last name'
													required
												/>
											</div>
										</div>

										<div>
											<Label htmlFor='email'>Email *</Label>
											<Input
												id='email'
												type='email'
												placeholder='your.email@example.com'
												required
											/>
										</div>

										<div>
											<Label htmlFor='phone'>Phone Number</Label>
											<Input
												id='phone'
												type='tel'
												placeholder='(555) 123-4567'
											/>
										</div>

										<div>
											<Label htmlFor='dueDate'>Expected Due Date</Label>
											<Input id='dueDate' type='date' />
										</div>

										<div>
											<Label htmlFor='services'>Services Interested In</Label>
											<select className='w-full px-3 py-2 border border-input bg-input-background rounded-md'>
												<option value=''>Select services...</option>
												<option value='prenatal'>Prenatal Support</option>
												<option value='birth'>Birth Support</option>
												<option value='postpartum'>Postpartum Care</option>
												<option value='all'>Complete Doula Package</option>
												<option value='consultation'>Consultation Only</option>
											</select>
										</div>

										<div>
											<Label htmlFor='message'>Message *</Label>
											<Textarea
												id='message'
												placeholder='Tell me about your birth preferences, any concerns you have, or questions about doula care...'
												rows={5}
												required
											/>
										</div>

										<Button
											type='submit'
											className='w-full bg-primary hover:bg-primary/90'
										>
											Send Message
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='px-4 bg-secondary/30'>
				<div className='max-w-4xl mx-auto'>
					<h2 className='text-3xl text-primary text-center mb-12'>
						Frequently Asked Questions
					</h2>

					<div className='grid md:grid-cols-2 gap-8'>
						<Card>
							<CardContent className='p-6'>
								<h3 className='mb-3'>How soon should I contact you?</h3>
								<p className='text-muted-foreground'>
									I recommend reaching out during your second trimester (around
									20-28 weeks) to ensure availability, but I'm happy to support
									you at any stage of pregnancy.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className='p-6'>
								<h3 className='mb-3'>Do you offer virtual consultations?</h3>
								<p className='text-muted-foreground'>
									Yes! I offer virtual consultations for initial meetings and
									ongoing prenatal support, making it convenient for busy
									families.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className='p-6'>
								<h3 className='mb-3'>
									What if I need to cancel or reschedule?
								</h3>
								<p className='text-muted-foreground'>
									I understand that pregnancy can be unpredictable. I offer
									flexible rescheduling and have clear policies outlined in our
									agreement.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className='p-6'>
								<h3 className='mb-3'>
									Do you work with all birth preferences?
								</h3>
								<p className='text-muted-foreground'>
									Absolutely! I support all birth preferences including
									hospital, birth center, and home births, as well as all pain
									management choices.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	);
}
