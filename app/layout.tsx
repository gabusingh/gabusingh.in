import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pradipta Sinha | WordPress Developer & White-Label Outsourcing Partner',
  description: 'Professional WordPress developer and white-label outsourcing partner for small businesses and web design agencies. Custom WordPress solutions, WooCommerce, Shopify stores, and SEO services. Perfect partner for agencies looking to outsource WordPress development with white-label options.',
  keywords: 'Pradipta Sinha, WordPress developer, white label WordPress, outsourcing WordPress development, web design agency partner, small business WordPress, WooCommerce developer, Shopify developer, Squarespace developer, AWS cloud, Next.js developer, React developer, Node.js developer, SEO specialist, custom WordPress themes, WordPress plugins, web development, digital marketing, AI SEO, e-commerce developer, WordPress expert, freelance WordPress developer, website optimization, cloud infrastructure, agency outsourcing, white label web development, small business website developer',
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
    title: 'Pradipta Sinha | WordPress Developer & White-Label Outsourcing Partner',
    description: 'Professional WordPress developer and white-label outsourcing partner for small businesses and web design agencies. Custom WordPress solutions, WooCommerce stores, and SEO services.',
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
    title: 'Pradipta Sinha | WordPress Developer & White-Label Partner',
    description: 'WordPress developer and white-label outsourcing partner for small businesses and web design agencies. Perfect for agencies looking to outsource WordPress development.',
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Pradipta Sinha',
              alternateName: 'Pradipta Sinha',
              url: 'https://gabusingh.in',
              jobTitle: 'WordPress Developer & SEO Specialist',
              description: 'Professional WordPress developer, WooCommerce expert, and SEO specialist. White-label outsourcing partner for small businesses and web design agencies. Custom WordPress solutions, theme development, and digital marketing services.',
              email: 'hello@gabusingh.in',
              image: 'https://gabusingh.in/og-image.jpg',
              worksFor: {
                '@type': 'Organization',
                name: 'WPFreelance',
                url: 'https://wpfreelance.in',
              },
              offers: {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'White-Label WordPress Development',
                  description: 'WordPress development services for web design agencies with white-label options',
                },
              },
              sameAs: [
                'https://www.linkedin.com/in/pradiptasinha/',
                'https://www.upwork.com/freelancers/~018601c014ac7a099f',
                'https://www.fiverr.com/wpfreelance?public_mode=true',
                'https://wpfreelance.in',
              ],
              knowsAbout: [
                'WordPress Development',
                'WooCommerce',
                'Shopify',
                'Squarespace',
                'E-Commerce Development',
                'Next.js',
                'React',
                'Node.js',
                'AWS',
                'Cloud Computing',
                'Resend Email Services',
                'SEO Optimization',
                'Search Engine Optimization',
                'Web Development',
                'Digital Marketing',
                'Custom WordPress Themes',
                'WordPress Plugins',
                'Performance Optimization',
                'AI SEO',
              ],
              hasOccupation: {
                '@type': 'Occupation',
                name: 'WordPress Developer',
                occupationLocation: {
                  '@type': 'Country',
                  name: 'India',
                },
                skills: [
                  'WordPress',
                  'WooCommerce',
                  'Shopify',
                  'Squarespace',
                  'PHP',
                  'JavaScript',
                  'React',
                  'Next.js',
                  'Node.js',
                  'AWS',
                  'Cloud Computing',
                  'Resend',
                  'Email Services',
                  'SEO',
                  'Web Development',
                ],
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Self-Taught Developer',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Pradipta Sinha - WordPress Development Services',
              description: 'Professional WordPress development, WooCommerce solutions, SEO services, and white-label outsourcing for small businesses and web design agencies',
              url: 'https://gabusingh.in',
              provider: {
                '@type': 'Person',
                name: 'Pradipta Sinha',
              },
              areaServed: 'Worldwide',
              audience: {
                '@type': 'Audience',
                audienceType: ['Small Business', 'Web Design Agency', 'Digital Marketing Agency'],
              },
              serviceType: [
                'WordPress Development',
                'WooCommerce Development',
                'SEO Services',
                'Custom WordPress Themes',
                'WordPress Plugin Development',
                'White-Label WordPress Development',
                'WordPress Outsourcing',
                'Small Business WordPress Solutions',
              ],
            }),
          }}
        />
        <meta name="generator" content="Next.js" />
        <meta name="author" content="Pradipta Sinha" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
