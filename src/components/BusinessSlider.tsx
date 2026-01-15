'use client';

const businessCards = [
  {
    id: 'cctv',
    title: 'CCTV 전국총판',
    subtitle: '보안 시스템의 선두주자',
    description:
      '국내 최대 규모의 CCTV 전국총판으로서 KT텔레캅, ADT캡스, 딜라이브, 한국렌탈과 협력하여 영업, 판매, 설치, A/S까지 원스톱 서비스를 제공합니다.',
    partners: ['KT텔레캅', 'ADT캡스', '딜라이브', '한국렌탈'],
    services: ['영업 컨설팅', '제품 판매', '전문 설치', 'A/S 지원'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    isCore: true,
  },
  {
    id: 'entertainment',
    title: '엔터테인먼트',
    subtitle: '베네타 E&M',
    description:
      '디지털 시대의 새로운 마케팅 트렌드를 선도하는 엔터테인먼트 사업부. 인플루언서 아카데미 운영과 라이브커머스 솔루션을 제공합니다.',
    partners: ['베네타 E&M'],
    services: ['인플루언서 아카데미', '라이브커머스', '콘텐츠 제작', '마케팅 컨설팅'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    isCore: false,
  },
  {
    id: 'realestate',
    title: '분양대행',
    subtitle: '(주)히로코리아',
    description:
      '부동산 분양 및 광고대행 전문 기업으로서 체계적인 마케팅 전략과 효율적인 분양 시스템을 통해 성공적인 분양을 지원합니다.',
    partners: ['(주)히로코리아'],
    services: ['부동산 분양', '광고 대행', '마케팅 전략', '분양 컨설팅'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    isCore: false,
  },
  {
    id: 'health',
    title: '건강기능식품',
    subtitle: 'GNM라이프',
    description:
      '건강한 삶을 위한 프리미엄 건강기능식품 유통 사업. GNM라이프와 함께 엄선된 제품만을 공급합니다.',
    partners: ['GNM라이프'],
    services: ['건강기능식품 유통', '품질 관리', '제품 컨설팅', '고객 서비스'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    isCore: false,
  },
];

export default function BusinessSlider() {
  return (
    <div className="relative">
      {/* Cards Container - 4 cards in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {businessCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Card Header */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-blue-800 shrink-0">{card.icon}</div>
                {card.isCore && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
                    핵심사업
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
              <span className="text-xs font-medium text-blue-700">{card.subtitle}</span>
            </div>

            {/* Card Body */}
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">{card.description}</p>

              {/* Partners */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                  파트너사
                </h4>
                <div className="flex flex-wrap gap-1">
                  {card.partners.map((partner) => (
                    <span
                      key={partner}
                      className="px-2 py-1 bg-blue-50 border border-blue-100 rounded text-xs font-medium text-blue-800"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="text-xs font-bold text-gray-700 mb-2">주요 서비스</h4>
                <div className="space-y-1">
                  {card.services.map((service) => (
                    <div key={service} className="flex items-center gap-1.5">
                      <svg
                        className="w-3 h-3 text-blue-600 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-xs text-gray-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
