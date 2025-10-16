import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import {Auth} from 'firebase-admin/auth';
import {AuthProvider} from './context/auth';
import Footer from '@/components/Footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Doula',
	description: 'Welcome to your healthy pregnancy journey',
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{/* render auth provider as the 1st child */}
				{/* <AuthProvider> */}
				<Navbar />

				{children}
				<Footer />
				{/* </AuthProvider> */}
			</body>
		</html>
	);
}
