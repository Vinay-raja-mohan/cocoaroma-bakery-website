import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMenuButton from '@/components/FloatingMenuButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Cocoaroma Bakery | Handcrafted Cakes & Pastries',
  description: 'Discover handcrafted cakes, pastries, chocolates & more at Cocoaroma Bakery. From classic Black Forest to unique Rasmalai cakes — every slice tells a story.',
  keywords: 'bakery, cakes, pastries, chocolate cake, birthday cake, wedding cake, Cocoaroma, handcrafted cakes',
  openGraph: {
    title: 'Cocoaroma Bakery | Handcrafted Cakes & Pastries',
    description: 'Discover handcrafted cakes, pastries, chocolates & more at Cocoaroma Bakery.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingMenuButton />
      </body>
    </html>
  );
}
