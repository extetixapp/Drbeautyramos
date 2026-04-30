import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#C5A059',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://drbeautyramos.com'),
  title: {
    default: 'Dr. Beauty Ramos | Medicina Estética & Bienestar Premium en Ramos Mejía',
    template: '%s | Dr. Beauty Ramos',
  },
  description: 'Clínica de medicina estética líder en Ramos Mejía, Buenos Aires. Tratamientos faciales, corporales, bioestimuladores y cirugía plástica realizados por médicos especialistas. Más de 25 años de trayectoria. Consulta gratuita.',
  keywords: [
    'medicina estética Ramos Mejía',
    'tratamientos faciales Ramos Mejía',
    'rejuvenecimiento facial Ramos Mejía',
    'armonización facial Ramos Mejía',
    'rellenos dérmicos Ramos Mejía',
    'bioestimuladores Ramos Mejía',
    'cirugía plástica Argentina',
    'cirugía plástica Ramos Mejía',
    'lifting sin cirugía',
    'plasma rico en plaquetas',
    'hilos tensores Ramos Mejía',
    'tratamientos estéticos La Matanza',
    'clínica estética Buenos Aires',
    'Dr. Daniel Félix',
    'Dr Beauty Ramos',
    'consulta estética gratuita',
  ],
  authors: [{ name: 'Dr. Daniel Félix' }],
  creator: 'Dr. Beauty Ramos',
  publisher: 'Dr. Beauty Ramos',
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
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://drbeautyramos.com',
    siteName: 'Dr. Beauty Ramos',
    title: 'Dr. Beauty Ramos | Medicina Estética & Bienestar Premium',
    description: 'Clínica de medicina estética líder en Ramos Mejía. Tratamientos faciales, corporales, bioestimuladores y cirugía plástica. Más de 25 años de trayectoria.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Beauty Ramos - Clínica de Medicina Estética en Ramos Mejía',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Beauty Ramos | Medicina Estética & Bienestar Premium',
    description: 'Clínica de medicina estética líder en Ramos Mejía. Tratamientos faciales, corporales y cirugía plástica.',
    images: ['/og-image.jpg'],
    creator: '@drbeautyramos',
  },
  verification: {
    google: '<meta name="google-site-verification" content="G0-811ErhkusbTfyO3R7pZ-KGjA0cN-86B5JwbMuDbM" />', // ⚠️ REEMPLAZAR cuando configures Search Console
  },
  alternates: {
    canonical: 'https://drbeautyramos.com',
  },
};

// ✅ SCHEMA.ORG JSON-LD para Clínica Médica
const schemaOrgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dr. Beauty Ramos',
  description: 'Clínica de medicina estética líder en Ramos Mejía con más de 25 años de trayectoria. Tratamientos faciales, corporales, bioestimuladores y cirugía plástica.',
  url: 'https://drbeautyramos.com',
  telephone: '+54-9-11-5504-4320',
  email: 'drbeautyramos@gmail.com',
  image: 'https://drbeautyramos.com/logo.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. De Mayo 618',
    addressLocality: 'Ramos Mejía',
    addressRegion: 'Buenos Aires',
    postalCode: '1704',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-34.6538',
    longitude: '-58.5625',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$$',
  founder: {
    '@type': 'Person',
    name: 'Dr. Daniel Félix',
    jobTitle: 'Médico Especialista en Medicina Estética',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Matrícula Nacional',
      value: '85381',
    },
  },
  sameAs: [
    'https://www.instagram.com/drbeauty.ramos',
    'https://www.facebook.com/drbeauty.ramos',
  ],
  areaServed: {
    '@type': 'City',
    name: 'Ramos Mejía',
    containedInPlace: {
      '@type': 'State',
      name: 'Buenos Aires',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tratamientos de Medicina Estética',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tratamientos Faciales',
          description: 'Rejuvenecimiento facial, rellenos dérmicos, lifting sin cirugía, hilos tensores',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tratamientos Corporales',
          description: 'Relleno corporal, reducción de grasa localizada, bienestar integral',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cirugía Plástica',
          description: 'Liposucción, rinoplastia, blefaroplastia, aumento mamario',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" dir="ltr">
      <head>
        {/* ✅ GOOGLE TAG CORREGIDO - sin espacios */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18069228619"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18069228619');
          `}
        </Script>
        
        {/* ✅ SCHEMA.ORG JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgJsonLd),
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}