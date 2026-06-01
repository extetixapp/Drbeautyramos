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
  description: 'Dr. Beauty Ramos - Clínica de medicina estética líder en Ramos Mejía, Buenos Aires. Tratamientos faciales, corporales, bioestimuladores y cirugía plástica realizados por médicos especialistas. Más de 25 años de trayectoria. Consulta gratuita - Av. De Mayo 618.',
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
    google: 'G0-811ErhkusbTfyO3R7pZ-KGjA0cN-86B5JwbMuDbM',
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

// 🛠️ CONTROL DE MANTENIMIENTO: Cambiá a false cuando el rediseño esté listo para producción.
const IS_MAINTENANCE = true;

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
      <body className={`${inter.className} antialiased bg-[#0B0D17] text-gray-200`}>
        {IS_MAINTENANCE ? <MaintenancePage /> : children}
      </body>
    </html>
  );
}

// 🏛️ Componente Visual de la Página en Reparación / Mantenimiento Premium
function MaintenancePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center selection:bg-[#C5A059] selection:text-black">
      <div className="max-w-xl space-y-6">
        
        {/* Detalle visual animado en color dorado institucional */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 text-[#C5A059] animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A1.5 1.5 0 0 0 19.5 18.75l-5.83-5.83m-3.75 3.75-.111-.111A2.25 2.25 0 0 1 9.75 15.01V13.5a1.5 1.5 0 0 0-1.5-1.5H6.75a2.25 2.25 0 0 1-1.628-.679l-.11-.11a2.25 2.25 0 0 1 0-3.182l1.628-1.628A2.25 2.25 0 0 1 8.27 5.75H9.75a1.5 1.5 0 0 0 1.5-1.5V2.771A2.25 2.25 0 0 1 12.75 1.5h1.5a2.25 2.25 0 0 1 2.25 2.25v1.479a1.5 1.5 0 0 0 1.5 1.5h1.479a2.25 2.25 0 0 1 2.25 2.25v1.5a2.25 2.25 0 0 1-2.25 2.25h-1.479a1.5 1.5 0 0 0-1.5 1.5v1.479a2.25 2.25 0 0 1-2.25 2.25h-1.5a2.25 2.25 0 0 1-1.329-.432l-.112-.112Zm-7.18 5.798 4.79-4.79A2.25 2.25 0 0 1 10.5 15.75h1.5a2.25 2.25 0 0 1 2.25 2.25v1.5a2.25 2.25 0 0 1-.618 1.523L11.32 23.51a1.5 1.5 0 0 1-2.122 0l-1.414-1.414a1.5 1.5 0 0 1 0-2.122ZM13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </div>

        {/* Textos */}
        <div className="space-y-2">
          <h1 className="text-sm font-semibold tracking-widest text-[#C5A059] uppercase">
            Dr. Beauty Ramos
          </h1>
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Espacio en renovación
          </h2>
          <p className="mx-auto max-w-md text-sm text-gray-400">
            Estamos rediseñando nuestro sitio web para ofrecerte una experiencia digital exclusiva y alineada con nuestros estándares de medicina estética premium.
          </p>
        </div>

        <hr className="border-gray-800 w-16 mx-auto" />

        {/* Vía alternativa de contacto directo a WhatsApp */}
        <div className="space-y-3">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            ¿Necesitás realizar una consulta o reservar un turno?
          </p>
          <a
            href="https://wa.me/5491155044320"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#C5A059] px-6 py-2.5 text-xs font-medium tracking-wide text-black transition-all hover:bg-[#b08e4f] active:scale-95"
          >
            Contactanos por WhatsApp
          </a>
        </div>

      </div>
    </main>
  );
}