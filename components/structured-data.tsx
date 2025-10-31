'use client';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'InternetServiceProvider',
    '@id': 'https://infotecpi.com.br/#organization',
    name: 'INFO-TEC NETWORKS',
    alternateName: 'INFO-TEC',
    description:
      'Provedor de internet fibra óptica com planos rápidos, confiáveis e suporte excepcional em Francisco Ayres, Arraial e região.',
    url: 'https://infotecpi.com.br',
    logo: 'https://infotecpi.com.br/images/info-tec-networks-logo.png',
    image: 'https://infotecpi.com.br/images/mascote-infotec.png',
    telephone: '+55-89-99457-8337',
    email: 'cavalcante@infotecpi.com.br',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Francisco Ayres',
      addressRegion: 'PI',
      addressCountry: 'BR',
      streetAddress: 'Rua Tito Ferreia',
      postalCode: '64475-000',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.6241004,
      longitude: -42.6947205,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Francisco Ayres',
        addressRegion: 'PI',
        addressCountry: 'BR',
      },
      {
        '@type': 'City',
        name: 'Arraial',
        addressRegion: 'PI',
        addressCountry: 'BR',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Planos de Internet Fibra Óptica',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plano Básico 500Mb',
            description:
              'Internet fibra óptica de 500 Mbps com instalação inclusa',
          },
          price: '89.99',
          priceCurrency: 'BRL',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '89.99',
            priceCurrency: 'BRL',
            unitText: 'MONTH',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plano Padrão 700Mb',
            description:
              'Internet fibra óptica de 700 Mbps com instalação inclusa',
          },
          price: '99.99',
          priceCurrency: 'BRL',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '99.99',
            priceCurrency: 'BRL',
            unitText: 'MONTH',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plano Premium 800Mb',
            description:
              'Internet fibra óptica de 800 Mbps com instalação inclusa',
          },
          price: '149.99',
          priceCurrency: 'BRL',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '149.99',
            priceCurrency: 'BRL',
            unitText: 'MONTH',
          },
        },
      ],
    },
    openingHours: ['Mo-Sa 08:00-19:00', 'Su 08:00-12:00'],
    sameAs: ['https://wa.me/5589994578337'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Há taxa de instalação?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não! A instalação é gratuita para todos os nossos planos. Nossa equipe técnica realiza a instalação de forma rápida e eficiente, sem custo adicional.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual a diferença entre fibra óptica e internet via rádio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A fibra óptica oferece maior estabilidade e velocidade, sendo nossa tecnologia principal. A internet via rádio é disponibilizada apenas para localidades que ainda não possuem cobertura de fibra óptica, garantindo que todos tenham acesso à internet de qualidade.',
        },
      },
      {
        '@type': 'Question',
        name: 'O que está incluído no plano?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Todos os nossos planos incluem: instalação gratuita, equipamentos em comodato (onu/roteador Wi-Fi) e suporte técnico de segunda a sábado das 8h às 19h, e aos domingos das 8h às 12h.',
        },
      },
      {
        '@type': 'Question',
        name: 'Há limite de dados nos planos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não! Todos os nossos planos são ilimitados. Você pode navegar, assistir vídeos, jogar online e fazer downloads sem se preocupar com limites de dados.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como funciona o suporte técnico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nosso suporte técnico funciona de segunda a sábado das 8h às 19h, e aos domingos das 8h às 12h. Você pode entrar em contato por telefone (89) 99457-8337 ou WhatsApp. Nossa equipe está sempre pronta para ajudar com qualquer problema ou dúvida.',
        },
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://infotecpi.com.br/#website',
    url: 'https://infotecpi.com.br',
    name: 'INFO-TEC NETWORKS',
    description:
      'O melhor provedor de internet fibra óptica da região de Francisco Ayres, Arraial e região',
    publisher: {
      '@id': 'https://infotecpi.com.br/#organization',
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://infotecpi.com.br/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    ],
    inLanguage: 'pt-BR',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
