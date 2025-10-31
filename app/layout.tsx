import type { Metadata } from 'next';
import './globals.css';
import StructuredData from '@/components/structured-data';
import SEOMeta from '@/components/seo-meta';

// https://infotecpi.com.br/
export const metadata: Metadata = {
  metadataBase: new URL('https://infotecpi.com.br'),
  title: {
    default: 'INFO-TEC NETWORKS | Internet Fibra Óptica Francisco Ayres, Arraial e região',
    template: '%s | INFO-TEC NETWORKS'
  },
  description:
    'INFO-TEC NETWORKS: Internet fibra óptica de alta velocidade em Francisco Ayres, Arraial e região. Planos a partir de R$ 89,99 com instalação gratuita, suporte 24/7 e velocidade real garantida.',
  authors: [
    {
      name: 'Jarod Cavalcante',
      url: 'https://jarod.dev',
    },
  ],
  keywords: [
    'internet fibra óptica Francisco Ayres',
    'provedor internet Arraial PI',
    'INFO-TEC NETWORKS',
    'internet rápida Piauí',
    'fibra óptica Piauí',
    'planos internet Francisco Ayres',
    'internet banda larga Arraial',
    'provedor internet Piauí',
    'velocidade real garantida',
    'instalação gratuita internet',
    'suporte técnico 24h',
    'internet ilimitada Piauí'
  ],
  openGraph: {
    title: 'INFO-TEC NETWORKS | Internet Fibra Óptica Francisco Ayres, Arraial e região',
    description:
      'Internet fibra óptica de alta velocidade em Francisco Ayres, Arraial e região. Planos a partir de R$ 89,99 com instalação gratuita e velocidade real garantida.',
    url: 'https://infotecpi.com.br',
    siteName: 'INFO-TEC NETWORKS',
    images: [
      {
        url: '/images/info-tec-networks-logo.webp',
        width: 1200,
        height: 630,
        alt: 'INFO-TEC NETWORKS - Internet Fibra Óptica Francisco Ayres, Arraial e região',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INFO-TEC NETWORKS | Internet Fibra Óptica Francisco Ayres, Arraial e região',
    description: 'Internet fibra óptica de alta velocidade em Francisco Ayres, Arraial e região. Planos a partir de R$ 89,99 com instalação gratuita.',
    images: ['/images/info-tec-networks-logo.webp'],
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
  alternates: {
    canonical: 'https://infotecpi.com.br',
  },
  category: 'Internet Service Provider',
  classification: 'Provedor de Internet',
  other: {
    'geo.region': 'BR-PI',
    'geo.placename': 'Francisco Ayres, Arraial',
    'geo.position': '-7.1;-40.7',
    'ICBM': '-7.1, -40.7',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <head>
        <SEOMeta />
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
