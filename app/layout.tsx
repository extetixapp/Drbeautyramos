import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script'; // Importamos Script para el Tag de Google

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
    default: 'Dr. Beauty Ramos | Medicina Estética & Bienestar Premium',
    template: '%s | Dr. Beauty Ramos',
  },
  description: 'Clínica de medicina estética líder en Ramos Mejía. Tratamientos faciales, corporales, bioestimuladores y cirugía plástica.',
  keywords: [
    'medicina estética Ramos Mejía',
    'toxina botulínica Ramos Mejía', // CAMBIO: Usamos término médico aceptado
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
  authors: [{ name: 'Dr. Daniel Félix' }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://drbeautyramos.com',
    siteName: 'Dr. Beauty Ramos',
    title: 'Dr. Beauty Ramos | Medicina Estética & Bienestar Premium',
    description: 'Transformamos la estética en salud. Tecnología avanzada, resultados reales.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
        {/* Google Tag (gtag.js) - Esto soluciona el error de "Falta etiqueta" */}
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
        
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
