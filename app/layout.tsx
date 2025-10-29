import type { Metadata } from 'next';
import './globals.css';

// https://infotecpi.com.br/
export const metadata: Metadata = {
  title: 'INFO-TEC NETWORKS | O melhor provedor de internet fibra óptica da região',
  description:
    'INFO-TEC NETWORKS, o provedor de internet fibra que oferece planos rápidos, confiáveis e com suporte excepcional. Navegue com velocidade e estabilidade.',
  authors: [
    {
      name: 'Jarod Cavalcante',
      url: 'https://jarod.dev',
    },
  ],
  keywords: [
    'INFO-TEC NETWORKS',
    'provedor de internet',
    'fibra óptica',
    'internet rápida',
    'suporte técnico',
    'planos de internet',
    'francisco ayres',
    'arraial',
    'piauí',
  ],
  openGraph: {
    title: 'INFO-TEC NETWORKS | O melhor provedor de internet fibra da região',
    description:
      'INFO-TEC NETWORKS, o provedor de internet fibra que oferece planos rápidos, confiáveis e com suporte excepcional. Navegue com velocidade e estabilidade.',
    url: 'https://infotecpi.com.br/',
    siteName: 'INFO-TEC NETWORKS',
    images: [
      {
        url: '/android-chrome-192x192.png',
        width: 1200,
        height: 630,
        alt: 'INFO-TEC NETWORKS - Provedor de Internet Fibra Óptica',
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body>{children}</body>
    </html>
  );
}
