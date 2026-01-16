import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '2026 소상공인스마트상점 | 원에프',
  description: '2026년 소상공인 스마트상점 기술보급사업 안내. CCTV, AI 영상분석, 화재감지 등 스마트 기술을 최대 70% 정부 지원받으세요. 배리어프리 700만원, 일반기술 500만원 한도.',
};

// 소상공인 스마트상점 제품 4종
const recommendedProducts = [
  {
    id: 'recEpk0pFe61wbRUQ',
    modelName: 'KTT-AI5MPCD',
    productName: '500만 AI 컬러 돔',
    category: 'AI 컬러',
    imageUrl: '/images/products/ktt-ai5mpcd.webp',
    features: ['야간 컬러 영상', 'AI 객체 감지', '양방향 오디오'],
    highlight: 'AI 컬러',
    size: 'large',
  },
  {
    id: 'recWh887rKSZ1H4XC',
    modelName: 'KTT-AI5MPCB',
    productName: '500만 AI 컬러 불렛',
    category: 'AI 컬러',
    imageUrl: '/images/products/ktt-ai5mpcb.webp',
    features: ['야간 컬러 영상', 'AI 객체 감지', '실외 설치'],
    highlight: 'AI 컬러',
    size: 'large',
  },
  {
    id: 'rec30OhYAclJcskKk',
    modelName: 'NK1080D-F1',
    productName: '불꽃감지 돔 카메라',
    category: '화재감지',
    imageUrl: '/images/products/nk1080d-f1.webp',
    features: ['화재 감지 30m', 'IR 센서', 'IP66 방수'],
    highlight: '화재감지',
    size: 'small',
  },
  {
    id: 'recIZdaDjA0hfPZA7',
    modelName: 'NK1080BL-AF-F2',
    productName: '불꽃감지 불렛 카메라',
    category: '화재감지',
    imageUrl: '/images/products/nk1080bl-af-f2.webp',
    features: ['화재 감지 30m', '전동줌 렌즈', '실외 설치'],
    highlight: '화재감지',
    size: 'small',
  },
];

const benefits = [
  {
    title: '영상 보안 솔루션',
    description: 'AI 기반 CCTV 및 영상분석 시스템으로 매장 보안을 강화하고 고객 행동을 분석합니다.',
    imageUrl: '/images/smartstore/benefit-security.webp',
  },
  {
    title: '화재 감지 시스템',
    description: '열화상 카메라를 통한 실시간 화재 감지 및 자동 알림으로 사고를 예방합니다.',
    imageUrl: '/images/smartstore/benefit-fire.webp',
  },
  {
    title: '원격 모니터링',
    description: '스마트폰으로 언제 어디서나 매장 상황을 실시간으로 확인할 수 있습니다.',
    imageUrl: '/images/smartstore/benefit-remote.webp',
  },
  {
    title: '비용 절감',
    description: '2026년 정부 지원금으로 최대 70%(취약계층 80%)까지 비용을 절감할 수 있습니다.',
    imageUrl: '/images/smartstore/benefit-cost.webp',
  },
];

const steps = [
  {
    step: '01',
    title: '상담 신청',
    description: '전화 또는 온라인으로 무료 상담을 신청합니다.',
  },
  {
    step: '02',
    title: '자격 확인',
    description: '소상공인 자격 요건 및 지원 가능 여부를 확인합니다.',
  },
  {
    step: '03',
    title: '현장 방문',
    description: '전문가가 매장을 방문하여 맞춤 솔루션을 제안합니다.',
  },
  {
    step: '04',
    title: '설치 완료',
    description: '전문 기술진이 장비 설치 및 사용법을 안내합니다.',
  },
];

const eligibility = [
  '소상공인기본법 제2조에 따른 소상공인',
  '신청일 기준 실제 영업 중인 매장 보유',
  '소기업 기준 충족 (업종별 상이)',
  '정부 지원사업 중복 참여 제한 확인',
];

// 2026년 지원 유형
const supportTypes = [
  {
    type: '구입형 (일반기술)',
    limit: '최대 500만원',
    ratio: '70%',
    description: 'CCTV, AI카메라, 영상분석 등',
  },
  {
    type: '구입형 (배리어프리)',
    limit: '최대 700만원',
    ratio: '70~80%',
    description: '배리어프리 키오스크 등',
    badge: '2026 확대',
  },
  {
    type: '렌탈형',
    limit: '연 350만원',
    ratio: '70%',
    description: '렌탈지원 품목 렌탈료',
    badge: '최대 2년',
  },
  {
    type: 'S/W형',
    limit: '연 30만원',
    ratio: '70%',
    description: 'SaaS 구독비용',
    badge: '최대 2년',
  },
];

export default function SmartStorePage() {
  return (
    <>
      {/* Hero Section - 배경 이미지 적용 */}
      <section className="relative min-h-[600px] flex items-center">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/smartstore/hero-bg.webp"
            alt="매장 CCTV 모니터링"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-block bg-blue-600/90 px-4 py-1 rounded-full text-sm font-medium text-white mb-6">
              2026년 정부 지원 사업
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              소상공인 스마트상점<br />
              기술보급사업
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              2026년 스마트상점 사업으로 최신 기술을 합리적으로 도입하세요.<br />
              CCTV, AI영상분석, 화재감지 시스템까지 정부 지원으로 해결합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/support#inquiry-form"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                무료 상담 신청
              </Link>
              <a
                href="tel:1566-0312"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition border border-white/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1566-0312
              </a>
            </div>

            {/* 지원 비율 하이라이트 */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4 border border-white/20">
                <p className="text-sm text-gray-300">정부 지원</p>
                <p className="text-3xl font-bold text-white">최대 70%</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4 border border-white/20">
                <p className="text-sm text-gray-300">자부담</p>
                <p className="text-3xl font-bold text-white">30%</p>
              </div>
              <div className="bg-orange-500/20 backdrop-blur rounded-xl px-6 py-4 border border-orange-400/30">
                <p className="text-sm text-orange-200">취약계층</p>
                <p className="text-3xl font-bold text-orange-300">80%</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              * 취약계층: 간이과세자, 1인 사업장, 장애인기업 (자부담 20%)
            </p>
          </div>
        </div>

        {/* REC 표시 (디자인 요소) */}
        <div className="absolute top-6 right-6 flex items-center gap-2 text-white z-10">
          <span className="text-sm font-medium">REC</span>
          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        </div>
      </section>

      {/* 스마트상점 제품 섹션 */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">소상공인 스마트상점 제품</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              스마트상점 사업에 최적화된 제품을 합리적인 가격에 도입하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* 제품 이미지 */}
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.productName}
                    fill
                    className={`object-contain group-hover:scale-105 transition-transform duration-300 ${
                      product.size === 'small' ? 'p-10 scale-75' : 'p-4'
                    }`}
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {product.highlight}
                  </span>
                </div>

                {/* 제품 정보 */}
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {product.modelName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{product.productName}</p>

                  {/* 주요 특징 */}
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-500">
                        <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">지원 혜택</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              스마트상점 사업을 통해 최신 기술을 합리적인 비용으로 도입할 수 있습니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* 이미지 영역 */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={benefit.imageUrl}
                    alt={benefit.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white">
                    {benefit.title}
                  </h3>
                </div>
                {/* 설명 영역 */}
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI 기술 섹션 */}
      <section className="section-padding bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-500/30 px-4 py-1 rounded-full text-sm font-medium text-blue-200 mb-4">
                AI 기술
              </span>
              <h2 className="text-3xl font-bold mb-6">
                AI 기반 지능형<br />영상 분석 시스템
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                최신 AI 기술을 활용한 스마트 CCTV 시스템으로 사람과 차량을 자동으로 인식하고,
                이상 행동을 감지하여 실시간 알림을 제공합니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>사람/차량/얼굴 자동 감지</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>침입/배회/경계선 이탈 알림</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>실시간 푸시 알림 및 이메일 통보</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/smartstore/feature-ai.webp"
                  alt="AI 기술"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
              {/* 데코레이션 */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 데이터 분석 섹션 */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/smartstore/feature-analytics.webp"
                  alt="데이터 분석"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-gray-700 px-4 py-1 rounded-full text-sm font-medium text-gray-300 mb-4">
                데이터 분석
              </span>
              <h2 className="text-3xl font-bold mb-6">
                스마트한 매장 관리<br />데이터로 시작하세요
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                영상 데이터를 기반으로 고객 동선, 피크 시간대, 체류 시간 등을 분석하여
                매장 운영 효율을 극대화할 수 있습니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-blue-400 mb-1">24/7</p>
                  <p className="text-sm text-gray-400">실시간 모니터링</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-blue-400 mb-1">앱 연동</p>
                  <p className="text-sm text-gray-400">스마트폰 알림</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-blue-400 mb-1">클라우드</p>
                  <p className="text-sm text-gray-400">영상 백업</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-blue-400 mb-1">리포트</p>
                  <p className="text-sm text-gray-400">이벤트 분석</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - 정부 심사 후 노출 예정 */}
      <section className="hidden section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">신청 절차</h2>
            <p className="text-gray-600">간단한 4단계로 스마트상점을 시작하세요.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                  <span className="text-4xl font-bold text-blue-800/20">{item.step}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section - 정부 심사 후 노출 예정 */}
      <section className="hidden section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">지원 대상</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                2026년 스마트상점 기술보급사업은 소상공인의 디지털 전환과 경쟁력 제고를 지원합니다.
                키오스크, 서빙로봇, AI솔루션 등 스마트기술 도입 비용을 지원받으세요.
              </p>
              <ul className="space-y-4">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">2026년 지원 유형별 한도</h3>
              <div className="space-y-3">
                {supportTypes.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{item.type}</span>
                        {item.badge && (
                          <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full font-medium">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-blue-800 font-bold">{item.limit}</span>
                    </div>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * 부가가치세 10%는 신청인 부담 / 취약계층 80% 지원
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/smartstore/feature-digital.webp"
            alt="CCTV 보안"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">2026년 스마트상점 도입을 고민하고 계신가요?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            전문 상담사가 귀하의 사업장에 맞는 최적의 솔루션을 안내해 드립니다.
            지금 바로 무료 상담을 신청하세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/support#inquiry-form"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              무료 상담 신청하기
            </Link>
            <a
              href="tel:1566-0312"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition border border-white/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              1566-0312
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
