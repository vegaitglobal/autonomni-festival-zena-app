import type { Metadata } from 'next';
import { Lexend, Montserrat } from 'next/font/google';
import '../scss/styles.scss';

const lexend = Lexend({
	variable: '--font-lexend',
	subsets: ['latin', 'latin-ext'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
});

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin', 'latin-ext'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'AFŽ',
	description: 'Autonomni Festival Žena',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${lexend.variable} ${montserrat.variable}`}>
				{children}
			</body>
		</html>
	);
}
