import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pradipta Sinha | WordPress Developer & SEO Specialist',
  description: 'Professional WordPress developer, WooCommerce expert, and SEO specialist. Custom WordPress solutions, theme development, and digital marketing services.',
  keywords: 'WordPress developer, WooCommerce, SEO specialist, custom WordPress themes, WordPress plugins, web development, digital marketing',
  authors: [{ name: 'Pradipta Sinha' }],
  creator: 'Pradipta Sinha',
  publisher: 'Pradipta Sinha',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gabusingh.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pradipta Sinha | WordPress Developer & SEO Specialist',
    description: 'Professional WordPress developer, WooCommerce expert, and SEO specialist. Custom WordPress solutions and digital marketing services.',
    url: 'https://gabusingh.in',
    siteName: 'Pradipta Sinha Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pradipta Sinha - WordPress Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pradipta Sinha | WordPress Developer & SEO Specialist',
    description: 'Professional WordPress developer, WooCommerce expert, and SEO specialist.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Pradipta Sinha',
              url: 'https://gabusingh.in',
              jobTitle: 'WordPress Developer & SEO Specialist',
              worksFor: {
                '@type': 'Organization',
                name: 'WPFreelance',
                url: 'https://wpfreelance.in',
              },
              sameAs: [
                'https://www.linkedin.com/in/pradiptasinha/',
                'https://www.upwork.com/freelancers/~018601c014ac7a099f',
                'https://www.fiverr.com/wpfreelance',
              ],
              knowsAbout: [
                'WordPress Development',
                'WooCommerce',
                'SEO',
                'Web Development',
                'Digital Marketing',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
