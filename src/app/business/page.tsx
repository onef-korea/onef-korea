import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BusinessSlider from '@/components/BusinessSlider';

export const metadata: Metadata = {
  title: '사업분야',
  description: 'ONEF의 4대 사업분야: CCTV 전국총판, 엔터테인먼트, 분양대행, 건강기능식품',
};

export default function BusinessPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="text-white relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="/images/business-hero.webp"
            alt="사업분야 배경"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block bg-white/20 text-white font-semibold px-4 py-1.5 rounded-full text-sm mb-4 tracking-wider backdrop-blur-sm">
              BUSINESS
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              사업분야
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
              CCTV 전국총판을 기반으로 다양한 분야에서
              <br />
              <span className="text-blue-300 font-semibold">
                전문성을 갖추고 고객에게 최고의 가치를 제공합니다
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Business Areas Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4대 핵심 사업영역
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              원에프는 CCTV 전국총판을 기반으로 엔터테인먼트, 분양대행, 건강기능식품 사업까지
              종합적인 서비스를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CCTV 전국총판 */}
            <a
              href="#cctv"
              className="relative rounded-xl overflow-hidden shadow-lg card-hover block group h-64"
            >
              <Image
                src="/images/business-cctv.webp"
                alt="CCTV 전국총판"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="inline-block w-fit bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2">
                  핵심사업
                </span>
                <h3 className="text-xl font-bold text-white">CCTV 전국총판</h3>
                <p className="text-sm text-gray-200 mt-1">보안 시스템의 선두주자</p>
              </div>
            </a>

            {/* 엔터테인먼트 */}
            <a
              href="#entertainment"
              className="relative rounded-xl overflow-hidden shadow-lg card-hover block group h-64"
            >
              <Image
                src="/images/business-entertainment.webp"
                alt="엔터테인먼트"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-xl font-bold text-white">엔터테인먼트</h3>
                <p className="text-sm text-gray-200 mt-1">베네타 E&M</p>
              </div>
            </a>

            {/* 분양대행 */}
            <a
              href="#realestate"
              className="relative rounded-xl overflow-hidden shadow-lg card-hover block group h-64"
            >
              <Image
                src="/images/business-sales.webp"
                alt="분양대행"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-xl font-bold text-white">분양대행</h3>
                <p className="text-sm text-gray-200 mt-1">(주)히로코리아</p>
              </div>
            </a>

            {/* 건강기능식품 */}
            <a
              href="#health"
              className="relative rounded-xl overflow-hidden shadow-lg card-hover block group h-64"
            >
              <Image
                src="/images/business-health.webp"
                alt="건강기능식품"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-xl font-bold text-white">건강기능식품</h3>
                <p className="text-sm text-gray-200 mt-1">GNM라이프</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Business Detail Cards Slider */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              사업영역 상세
            </h2>
            <p className="text-gray-600">
              각 사업영역의 파트너사와 주요 서비스를 확인하세요
            </p>
          </div>
          <BusinessSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            비즈니스 파트너십을 시작하세요
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            원에프와 함께 새로운 비즈니스 기회를 만들어 보세요.
            <br />
            전문 상담원이 친절하게 안내해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1566-0312"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              1566-0312
            </a>
            <Link
              href="/support#inquiry-form"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition"
            >
              온라인 문의
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
