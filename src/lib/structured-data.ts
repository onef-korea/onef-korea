const SITE_URL = 'https://onef.kr';
const SITE_NAME = 'ONEF - 주식회사 원에프';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '주식회사 원에프',
    alternateName: 'ONEF',
    url: SITE_URL,
    logo: `${SITE_URL}/images/onef-logo.png`,
    sameAs: [],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+82-1566-0312',
        contactType: 'customer service',
        areaServed: 'KR',
        availableLanguage: 'Korean',
      },
    ],
    founder: {
      '@type': 'Person',
      name: '양성제',
      jobTitle: '대표이사',
    },
    foundingDate: '2017',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
    },
    description:
      '주식회사 원에프는 CCTV 전국총판, 엔터테인먼트, 분양대행, 건강기능식품 사업을 영위하는 종합기업입니다.',
    knowsAbout: [
      'CCTV',
      'AI CCTV',
      '보안 카메라',
      '화재감지 카메라',
      '스마트상점',
      'KTT V-Cam',
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '주식회사 원에프',
    image: `${SITE_URL}/images/about-company.webp`,
    '@id': `${SITE_URL}/#localbusiness`,
    url: SITE_URL,
    telephone: '1566-0312',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '양지로 205, 제5층 제이에이치527호 (옥길동, 부천옥길 서영아너시티2)',
      addressLocality: '부천시 소사구',
      addressRegion: '경기도',
      postalCode: '14760',
      addressCountry: 'KR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.465,
      longitude: 126.805,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function generateProductSchema(product: {
  modelName: string;
  productName: string;
  description?: string;
  features?: string;
  imageUrl: string;
  categoryLabel: string;
  id: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.modelName} - ${product.productName}`,
    description: product.description || product.features || product.productName,
    image: product.imageUrl.startsWith('http')
      ? product.imageUrl
      : `${SITE_URL}${product.imageUrl}`,
    brand: {
      '@type': 'Brand',
      name: 'KTT V-Cam',
    },
    manufacturer: {
      '@type': 'Organization',
      name: '주식회사 원에프',
    },
    category: product.categoryLabel,
    url: `${SITE_URL}/products/${product.id}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'KRW',
      seller: {
        '@type': 'Organization',
        name: '주식회사 원에프',
      },
    },
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateItemListSchema(
  products: {
    id: string;
    modelName: string;
    productName: string;
    imageUrl: string;
  }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${product.modelName} - ${product.productName}`,
      url: `${SITE_URL}/products/${product.id}`,
      image: product.imageUrl.startsWith('http')
        ? product.imageUrl
        : `${SITE_URL}${product.imageUrl}`,
    })),
  };
}
