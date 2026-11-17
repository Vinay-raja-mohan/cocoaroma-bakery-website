import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMenuButton from '@/components/FloatingMenuButton';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cocoaroma.in';
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Cocoaroma Bakery',
  title: {
    default: 'Cocoaroma Bakery',
    template: '%s | Cocoaroma Bakery',
  },
  description: '100% Pure Veg Patisserie & Bakery in Hyderabad. Handcrafted artisanal cakes, cheesecakes, pastries, brownies & savouries across 5 stores.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  keywords: [
    'Cocoaroma Bakery',
    'bakery Hyderabad',
    'eggless cakes Hyderabad',
    'pure veg bakery',
    'birthday cake Hyderabad',
    'cheesecake cups',
    'custom cakes Hyderabad',
    'VV Nagar bakery',
    'Ayyappa society bakery',
    'Madhapur bakery',
    'Chintal bakery',
    'West Maredpally bakery',
    'Moosapet bakery',
  ],
  authors: [{ name: 'Cocoaroma Bakery' }],
  creator: 'Cocoaroma Bakery',
  publisher: 'Sai Sree Foods Private Limited',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Cocoaroma Bakery',
    description: 'Artisanal eggless cakes, cheesecakes, pastries, brownies & savouries handcrafted fresh across 5 stores in Hyderabad.',
    url: siteUrl,
    siteName: 'Cocoaroma Bakery',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cocoaroma Bakery Hyderabad - Handcrafted Cakes & Pastries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cocoaroma Bakery',
    description: 'Artisanal eggless cakes, cheesecakes, brownies & savouries across 5 stores in Hyderabad.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics GA4 */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <FloatingMenuButton />
      </body>
    </html>
  );
}
