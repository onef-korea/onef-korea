import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <>
      <ScrollAnimation />
      {/* Hero Section */}
      <section className="text-white relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.webp"
            alt="AI Technology Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <span className="inline-block bg-white text-blue-900 font-semibold px-4 py-1.5 rounded-full text-sm mb-4 tracking-wider shadow-md">KTT V-Cam 공식 파트너</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
                <span className="whitespace-nowrap">원에프의 스마트 AI CCTV 솔루션은</span>
                <br />
                24시간 위험으로부터
                <br />
                <span className="text-blue-300">소중한 재산을 보호합니다</span>
              </h1>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="btn-hover bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
                >
                  제품 보기
                </Link>
                <Link
                  href="/support#inquiry-form"
                  className="btn-hover border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  문의하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 scroll-animate from-bottom">
            <p className="text-blue-400 font-semibold mb-2 tracking-wider">VIDEO</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              원에프 AI CCTV 소개
            </h2>
          </div>
          <div className="scroll-animate from-bottom">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/nGyilEUmsPs?autoplay=1&mute=1&loop=1&playlist=nGyilEUmsPs&controls=0&rel=0&modestbranding=1"
                title="원에프 AI CCTV 소개 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 scroll-animate from-bottom">
            <p className="text-blue-800 font-semibold mb-2 tracking-wider">ABOUT US</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              회사소개
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-stretch">
            <div className="lg:col-span-2 flex scroll-animate from-left">
              <div className="rounded-2xl overflow-hidden shadow-xl w-full">
                <Image
                  src="/images/about-company.webp"
                  alt="주식회사 원에프"
                  width={500}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3 scroll-animate from-right">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                우리의 슬로건
              </h3>
              <div className="space-y-5">
                <div className="group flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-8 h-8 text-blue-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">고객만족</h4>
                    <p className="text-lg text-gray-600">
                      고객에게 좋은 상품을, 대응은 신속하게
                    </p>
                  </div>
                </div>
                <div className="group flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-8 h-8 text-blue-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">직원행복</h4>
                    <p className="text-lg text-gray-600">
                      직원들에게 행복함을 주는 것을 목표
                    </p>
                  </div>
                </div>
                <div className="group flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-8 h-8 text-blue-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">동반성장</h4>
                    <p className="text-lg text-gray-600">
                      파트너와 함께 성장하는 기업
                    </p>
                  </div>
                </div>
              </div>

              {/* 주식회사 원에프 박스 */}
              <div className="mt-8 bg-gradient-to-br from-blue-800 to-slate-900 rounded-2xl p-6 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-center">주식회사 원에프</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors duration-300">
                    <div className="text-2xl font-bold">2017</div>
                    <div className="text-sm text-blue-200">설립</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors duration-300">
                    <div className="text-2xl font-bold">2020</div>
                    <div className="text-sm text-blue-200">법인전환</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors duration-300">
                    <div className="text-2xl font-bold">4개</div>
                    <div className="text-sm text-blue-200">사업분야</div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-blue-800 font-medium hover:text-blue-900 hover:gap-3 transition-all duration-300"
                >
                  회사소개 자세히 보기
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 scroll-animate from-bottom">
            <p className="text-blue-800 font-semibold mb-2 tracking-wider">PRODUCTS</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              제품소개
            </h2>
            <p className="text-gray-600 mt-3">
              KTT V-Cam 공식 파트너 - 최신 AI CCTV 제품
            </p>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 scroll-animate from-bottom">
            <span className="px-5 py-2 bg-blue-800 text-white rounded-full font-medium cursor-pointer hover:bg-blue-900 transition-colors">
              전체
            </span>
            <span className="px-5 py-2 bg-white text-gray-700 rounded-full font-medium cursor-pointer hover:bg-blue-50 hover:text-blue-900 transition-colors shadow-sm">
              녹화기
            </span>
            <span className="px-5 py-2 bg-white text-gray-700 rounded-full font-medium cursor-pointer hover:bg-blue-50 hover:text-blue-900 transition-colors shadow-sm">
              불렛 카메라
            </span>
            <span className="px-5 py-2 bg-white text-gray-700 rounded-full font-medium cursor-pointer hover:bg-blue-50 hover:text-blue-900 transition-colors shadow-sm">
              돔 카메라
            </span>
            <span className="px-5 py-2 bg-white text-gray-700 rounded-full font-medium cursor-pointer hover:bg-blue-50 hover:text-blue-900 transition-colors shadow-sm">
              AI 프리미엄
            </span>
            <span className="px-5 py-2 bg-white text-gray-700 rounded-full font-medium cursor-pointer hover:bg-blue-50 hover:text-blue-900 transition-colors shadow-sm">
              화재감지
            </span>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-animate from-bottom">
            {/* Product Card 1 - NVR */}
            <div className="group bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className="relative img-zoom">
                <div className="h-48 bg-white flex items-center justify-center p-4 border-b border-gray-100">
                  <Image
                    src="/images/products/ktt-5mppai.webp"
                    alt="AI Premium 5MP CVR 녹화기"
                    width={200}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <span className="absolute top-3 left-3 bg-blue-800 text-white text-xs px-2 py-1 rounded font-medium">
                  녹화기
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors">KTT-5MPPAI</h3>
                <p className="text-sm text-gray-500 mb-3">AI Premium 5MP CVR</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">5MP / AI 분석</span>
                  <Link
                    href="/products"
                    className="text-blue-800 text-sm font-medium hover:text-blue-900 hover:underline transition-colors"
                  >
                    자세히 →
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 2 - AI Dome */}
            <div className="group bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className="relative img-zoom">
                <div className="h-48 bg-white flex items-center justify-center p-4 border-b border-gray-100">
                  <Image
                    src="/images/products/ktt-ai5mpd.webp"
                    alt="AI 돔 카메라"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <span className="absolute top-3 left-3 bg-blue-800 text-white text-xs px-2 py-1 rounded font-medium">
                  AI 프리미엄
                </span>
                <span className="absolute top-3 right-3 bg-blue-700 text-white text-xs px-2 py-1 rounded font-medium">
                  추천
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors">KTT-AI5MPD</h3>
                <p className="text-sm text-gray-500 mb-3">AI 돔 카메라</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">5MP / AI 객체인식</span>
                  <Link
                    href="/products"
                    className="text-blue-800 text-sm font-medium hover:text-blue-900 hover:underline transition-colors"
                  >
                    자세히 →
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 3 - AI Bullet */}
            <div className="group bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className="relative img-zoom">
                <div className="h-48 bg-white flex items-center justify-center p-4 border-b border-gray-100">
                  <Image
                    src="/images/products/ktt-ai5mpcb.webp"
                    alt="AI 불렛 카메라"
                    width={200}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <span className="absolute top-3 left-3 bg-blue-800 text-white text-xs px-2 py-1 rounded font-medium">
                  AI 컬러
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors">KTT-AI5MPCB</h3>
                <p className="text-sm text-gray-500 mb-3">AI 컬러 불렛 카메라</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">5MP / 야간 컬러</span>
                  <Link
                    href="/products"
                    className="text-blue-800 text-sm font-medium hover:text-blue-900 hover:underline transition-colors"
                  >
                    자세히 →
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 4 - PTZ */}
            <div className="group bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className="relative img-zoom">
                <div className="h-48 bg-white flex items-center justify-center p-4 border-b border-gray-100">
                  <Image
                    src="/images/products/ktt-ai5mp20z.webp"
                    alt="PTZ 카메라"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <span className="absolute top-3 left-3 bg-blue-700 text-white text-xs px-2 py-1 rounded font-medium">
                  PTZ
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors">KTT-AI5MP-PTZ</h3>
                <p className="text-sm text-gray-500 mb-3">AI PTZ 카메라</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">5MP / 30x 줌</span>
                  <Link
                    href="/products"
                    className="text-blue-800 text-sm font-medium hover:text-blue-900 hover:underline transition-colors"
                  >
                    자세히 →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="btn-hover inline-flex items-center gap-2 bg-blue-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-900 hover:gap-3 transition-all duration-300"
            >
              전체 제품 보기
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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

      {/* Smart Store Section - 임시 숨김 */}
      {false && (
      <section className="py-20 bg-gradient-to-br from-blue-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate from-left">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                정부지원사업
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                소상공인
                <br />
                스마트상점 지원사업
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                소상공인을 위한 스마트상점 구축 지원!
                <br />
                AI CCTV + 화재감지 카메라 패키지로
                <br />
                안전하고 스마트한 매장을 만들어보세요.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                  <span>AI 객체 인식 CCTV</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                  <span>불꽃감지 화재 카메라</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                  <span>정부지원금 활용 가능</span>
                </div>
              </div>
              <Link
                href="/support#inquiry-form"
                className="btn-hover inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 hover:gap-3 transition-all duration-300"
              >
                지원사업 문의하기
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative scroll-animate from-right">
              <h3 className="text-xl font-bold mb-6 text-center">
                스마트상점 패키지 구성
              </h3>
              {/* 슬라이드 카드 */}
              <div className="overflow-hidden">
                <div className="flex animate-slide-loop gap-4">
                  {/* AI 컬러 돔 카메라 */}
                  <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="h-60 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                      <Image
                        src="/images/products/ktt-ai5mpcd.webp"
                        alt="KTT-AI5MPCD"
                        width={220}
                        height={220}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">AI 컬러 돔</h4>
                    <p className="text-sm text-gray-500">KTT-AI5MPCD</p>
                  </div>
                  {/* AI 컬러 불렛 카메라 */}
                  <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="h-60 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                      <Image
                        src="/images/products/ktt-ai5mpcb.webp"
                        alt="KTT-AI5MPCB"
                        width={220}
                        height={220}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">AI 컬러 불렛</h4>
                    <p className="text-sm text-gray-500">KTT-AI5MPCB</p>
                  </div>
                  {/* 화재감지 돔 */}
                  <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="h-60 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                      <Image
                        src="/images/products/nk1080d-f1.webp"
                        alt="NK1080D-F1"
                        width={220}
                        height={220}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">화재감지 돔</h4>
                    <p className="text-sm text-gray-500">NK1080D-F1</p>
                  </div>
                  {/* 화재감지 불렛 */}
                  <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="h-60 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                      <Image
                        src="/images/products/nk1080bl-af-f2.webp"
                        alt="NK1080BL-AF-F2"
                        width={220}
                        height={220}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">화재감지 불렛</h4>
                    <p className="text-sm text-gray-500">NK1080BL-AF-F2</p>
                  </div>
                  {/* 녹화기 */}
                  <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="h-60 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                      <Image
                        src="/images/products/ktt-ai5mpn.webp"
                        alt="KTT-AI5MPN"
                        width={220}
                        height={220}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">녹화기 (NVR)</h4>
                    <p className="text-sm text-gray-500">KTT-AI5MPN</p>
                  </div>
                  {/* 복제 카드 - 무한 루프용 */}
                  <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="h-60 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                      <Image
                        src="/images/products/ktt-ai5mpcd.webp"
                        alt="KTT-AI5MPCD"
                        width={220}
                        height={220}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">AI 컬러 돔</h4>
                    <p className="text-sm text-gray-500">KTT-AI5MPCD</p>
                  </div>
                  <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="h-60 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                      <Image
                        src="/images/products/ktt-ai5mpcb.webp"
                        alt="KTT-AI5MPCB"
                        width={220}
                        height={220}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">AI 컬러 불렛</h4>
                    <p className="text-sm text-gray-500">KTT-AI5MPCB</p>
                  </div>
                  <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="h-60 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                      <Image
                        src="/images/products/nk1080d-f1.webp"
                        alt="NK1080D-F1"
                        width={220}
                        height={220}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">화재감지 돔</h4>
                    <p className="text-sm text-gray-500">NK1080D-F1</p>
                  </div>
                  <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="h-60 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                      <Image
                        src="/images/products/nk1080bl-af-f2.webp"
                        alt="NK1080BL-AF-F2"
                        width={220}
                        height={220}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">화재감지 불렛</h4>
                    <p className="text-sm text-gray-500">NK1080BL-AF-F2</p>
                  </div>
                  <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="h-60 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                      <Image
                        src="/images/products/ktt-ai5mpn.webp"
                        alt="KTT-AI5MPN"
                        width={220}
                        height={220}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">녹화기 (NVR)</h4>
                    <p className="text-sm text-gray-500">KTT-AI5MPN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* CTA Banner */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center scroll-animate from-bottom">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            CCTV 설치, 어디서부터 시작해야 할지 모르겠다면?
          </h2>
          <p className="text-gray-600 mb-8">
            전문 상담사가 친절하게 안내해드립니다
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:1566-0312"
              className="btn-hover inline-flex items-center gap-2 bg-blue-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-900 hover:gap-3 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
              className="btn-hover border-2 border-blue-800 text-blue-800 px-8 py-3 rounded-lg font-medium hover:bg-blue-800 hover:text-white transition-all duration-300"
            >
              온라인 문의하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
