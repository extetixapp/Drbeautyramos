import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#C5A059',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://drbeautyramos.vercel.app'),  // ← URL actual
  title: {
    default: 'Dr. Beauty Ramos | Medicina Estética & Bienestar Premium',
    template: '%s | Dr. Beauty Ramos',
  },
  description: 'Clínica de medicina estética líder en Ramos Mejía. Tratamientos faciales, corporales, bioestimuladores, cirugía plástica con el Dr. Daniel Félix. Más de 25 años de experiencia.',
  keywords: [
    'medicina estética Ramos Mejía',
    'botox Ramos Mejía',
    'ácido hialurónico',
    'tratamientos faciales',
    'bioestimuladores Sculptra',
    'cirugía plástica Argentina',
    'Dr. Daniel Félix',
    'hilos tensores',
    'plasma rico en plaquetas',
    'armonización facial',
    'Nordlys',
    'HIFU 7D',
  ],
  authors: [{ 
    name: 'Dr. Daniel Félix',
    url: 'https://drbeautyramos.vercel.app'
  }],
  creator: 'Dr. Beauty Ramos',
  publisher: 'Dr. Beauty Ramos',
  alternates: {
    canonical: '/',
    languages: {
      'es-AR': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://drbeautyramos.vercel.app',
    siteName: 'Dr. Beauty Ramos',
    title: 'Dr. Beauty Ramos | Medicina Estética & Bienestar Premium',
    description: 'Transformamos la estética en salud. Tecnología avanzada Nordlys y HIFU 7D, resultados reales. Más de 25 años de trayectoria en Ramos Mejía.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Beauty Ramos - Clínica de Medicina Estética en Ramos Mejía',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@drbeautyramos',
    creator: '@drbeautyramos',
    title: 'Dr. Beauty Ramos | Medicina Estética & Bienestar Premium',
    description: 'Transformamos la estética en salud. Tecnología avanzada, resultados reales. Agenda tu consulta en Ramos Mejía.',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#C5A059',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'Dr. Beauty Ramos',
    'application-name': 'Dr. Beauty Ramos',
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
        {/* Forzar meta tags adicionales */}
        <meta property="og:image:secure_url" content="https://drbeautyramos.vercel.app/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
