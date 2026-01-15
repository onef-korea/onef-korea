"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function AboutPage() {
  return (
    <>
      <ScrollAnimation />

      {/* Hero Section with Background Image */}
      <section className="text-white relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.webp"
            alt="AI Technology Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block bg-white/20 text-white font-semibold px-4 py-1.5 rounded-full text-sm mb-4 tracking-wider backdrop-blur-sm">
              ABOUT US
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              회사소개
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
              고객만족 · 직원행복 · 동반성장을 추구하는
              <br />
              <span className="text-blue-300 font-semibold">
                AI CCTV 전문기업 주식회사 원에프
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex gap-8 overflow-x-auto">
            <a
              href="#overview"
              className="py-4 border-b-2 border-blue-800 text-blue-800 font-medium whitespace-nowrap transition-colors"
            >
              회사개요
            </a>
            <a
              href="#greeting"
              className="py-4 border-b-2 border-transparent text-gray-600 hover:text-blue-800 hover:border-blue-300 font-medium whitespace-nowrap transition-colors"
            >
              인사말
            </a>
            <a
              href="#history"
              className="py-4 border-b-2 border-transparent text-gray-600 hover:text-blue-800 hover:border-blue-300 font-medium whitespace-nowrap transition-colors"
            >
              연혁
            </a>
            <a
              href="#location"
              className="py-4 border-b-2 border-transparent text-gray-600 hover:text-blue-800 hover:border-blue-300 font-medium whitespace-nowrap transition-colors"
            >
              오시는 길
            </a>
          </nav>
        </div>
      </section>

      {/* Company Overview */}
      <section id="overview" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 scroll-animate from-bottom">
            <p className="text-blue-800 font-semibold mb-2 tracking-wider">
              COMPANY OVERVIEW
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              회사개요
            </h2>
            <p className="text-gray-600">
              주식회사 원에프는 체계적인 CCTV 전문기업입니다
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-animate from-left">
              <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  주식회사 원에프
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  주식회사 원에프는 전문 보안CCTV 기업으로 2017년 온리원컴퍼니
                  사업자로 운영하다가 경력있는 파트너쉽으로 매출 상승 및 전문
                  상담사 추가로 인하여, 2020년에 주식회사 원에프로 상호 변경하여
                  영업 및 판매, 설치, AS업무, 대리점관리 등 체계적인 CCTV
                  전문기업으로 성장하였습니다.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  현재 CCTV 전국총판을 중심으로 엔터테인먼트, 분양대행,
                  건강기능식품 등 다양한 사업분야로 확장하며 고객과 함께
                  성장하고 있습니다.
                </p>
              </div>
            </div>
            <div className="scroll-animate from-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="group bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-2xl p-6 text-center card-hover">
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    2017
                  </div>
                  <div className="text-blue-200">설립연도</div>
                </div>
                <div className="group bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-2xl p-6 text-center card-hover">
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    2020
                  </div>
                  <div className="text-blue-200">법인전환</div>
                </div>
                <div className="group bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 text-center card-hover">
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    4개
                  </div>
                  <div className="text-blue-200">사업분야</div>
                </div>
                <div className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 text-center card-hover">
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    13+
                  </div>
                  <div className="text-blue-200">제품 라인업</div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info Cards */}
          <div className="scroll-animate from-bottom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* 회사명 */}
              <div className="group bg-white hover:bg-gradient-to-br hover:from-blue-800 hover:to-blue-900 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-transparent cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 group-hover:text-blue-200 uppercase tracking-wider transition-colors">Company</p>
                    <p className="font-bold text-gray-900 group-hover:text-white transition-colors">주식회사 원에프</p>
                  </div>
                </div>
              </div>

              {/* 대표번호 */}
              <div className="group bg-white hover:bg-gradient-to-br hover:from-blue-800 hover:to-blue-900 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-transparent cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 group-hover:text-blue-200 uppercase tracking-wider transition-colors">대표번호</p>
                    <p className="font-bold text-gray-900 group-hover:text-white text-lg transition-colors">1566-0312</p>
                  </div>
                </div>
              </div>

              {/* 회사전화 */}
              <div className="group bg-white hover:bg-gradient-to-br hover:from-blue-800 hover:to-blue-900 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-transparent cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 group-hover:text-blue-200 uppercase tracking-wider transition-colors">Tel</p>
                    <p className="font-bold text-gray-900 group-hover:text-white transition-colors">032-215-2522</p>
                  </div>
                </div>
              </div>

              {/* 팩스 */}
              <div className="group bg-white hover:bg-gradient-to-br hover:from-blue-800 hover:to-blue-900 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-transparent cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 group-hover:text-blue-200 uppercase tracking-wider transition-colors">Fax</p>
                    <p className="font-bold text-gray-900 group-hover:text-white transition-colors">032-215-2523</p>
                  </div>
                </div>
              </div>

              {/* 설립연도 */}
              <div className="group bg-white hover:bg-gradient-to-br hover:from-blue-800 hover:to-blue-900 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-transparent cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 group-hover:text-blue-200 uppercase tracking-wider transition-colors">Since</p>
                    <p className="font-bold text-gray-900 group-hover:text-white transition-colors">2017년 설립 · 2020년 법인전환</p>
                  </div>
                </div>
              </div>

              {/* 주요사업 */}
              <div className="group bg-white hover:bg-gradient-to-br hover:from-blue-800 hover:to-blue-900 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-transparent cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 group-hover:text-blue-200 uppercase tracking-wider transition-colors">Business</p>
                    <p className="font-bold text-gray-900 group-hover:text-white transition-colors">CCTV 총판 · 엔터테인먼트</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Greeting */}
      <section id="greeting" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 scroll-animate from-bottom">
            <p className="text-blue-800 font-semibold mb-2 tracking-wider">
              GREETING
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              인사말
            </h2>
            <p className="text-gray-600">
              고객과 함께 성장하는 원에프가 되겠습니다
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 왼쪽 이미지 */}
            <div className="scroll-animate from-left">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[620px]">
                <Image
                  src="/images/ceo-greeting.webp"
                  alt="대표이사 인사말"
                  width={600}
                  height={620}
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </div>

            {/* 오른쪽 인사말 */}
            <div className="scroll-animate from-right">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 lg:p-10 shadow-lg h-[620px]">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  고객만족 · 직원행복 · 동반성장
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>안녕하십니까, 주식회사 원에프입니다.</p>
                  <p>
                    저희 원에프는 고객에게 좋은 상품을 제공하고, 신속한 대응을
                    통해 고객만족을 실현하고자 합니다.
                  </p>
                  <p>
                    또한 함께 일하는 직원들에게 행복함을 주는 것을 목표로 하며,
                    파트너사와 함께 동반성장하는 기업이 되고자 합니다.
                  </p>
                  <p>
                    2017년 온리원컴퍼니로 시작하여 2020년 주식회사 원에프로
                    법인전환한 이후, CCTV 전국총판을 중심으로 다양한 사업분야로
                    확장하며 성장해왔습니다.
                  </p>
                  <p>
                    앞으로도 고객 여러분의 신뢰에 보답하기 위해 최선을
                    다하겠습니다.
                  </p>
                  <p>감사합니다.</p>
                </div>
                <div className="mt-8 pt-6 border-t border-blue-100">
                  <p className="text-gray-500 text-sm">주식회사 원에프</p>
                  <p className="text-xl font-bold text-gray-900">대표이사 양성제</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="scroll-animate from-left">
              <div className="group bg-blue-50 rounded-2xl p-8 text-center card-hover">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  고객만족
                </h3>
                <p className="text-gray-600 text-sm">
                  고객에게 좋은 상품을, 대응은 신속하게
                </p>
              </div>
            </div>
            <div className="scroll-animate from-bottom">
              <div className="group bg-blue-50 rounded-2xl p-8 text-center card-hover">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  직원행복
                </h3>
                <p className="text-gray-600 text-sm">
                  직원들에게 행복함을 주는 것을 목표
                </p>
              </div>
            </div>
            <div className="scroll-animate from-right">
              <div className="group bg-blue-50 rounded-2xl p-8 text-center card-hover">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  동반성장
                </h3>
                <p className="text-gray-600 text-sm">
                  파트너와 함께 성장하는 기업
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section id="history" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 scroll-animate from-bottom">
            <p className="text-blue-800 font-semibold mb-2 tracking-wider">
              HISTORY
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              연혁
            </h2>
            <p className="text-gray-600">원에프의 성장 스토리를 소개합니다</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-800 via-blue-500 to-blue-300"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {/* 2024 */}
                <div className="relative flex gap-6 scroll-animate from-left">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 z-10 shadow-lg group-hover:scale-110 transition-transform">
                    2024
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-1 card-hover">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2 group">
                        <svg
                          className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
                        <span>KTT V-Cam AI CCTV 라인업 확대</span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <svg
                          className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
                        <span>소상공인 스마트상점 지원사업 참여</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2023 */}
                <div className="relative flex gap-6 scroll-animate from-right">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 z-10 shadow-lg">
                    2023
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-1 card-hover">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2 group">
                        <svg
                          className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
                        <span>화재감지 카메라 라인업 추가</span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <svg
                          className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
                        <span>건강기능식품 유통 사업 시작</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2022 */}
                <div className="relative flex gap-6 scroll-animate from-left">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 z-10 shadow-lg">
                    2022
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-1 card-hover">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2 group">
                        <svg
                          className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
                        <span>엔터테인먼트 사업부 신설</span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <svg
                          className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
                        <span>분양대행 사업 확장</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2021 */}
                <div className="relative flex gap-6 scroll-animate from-right">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 z-10 shadow-lg">
                    2021
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-1 card-hover">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2 group">
                        <svg
                          className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
                        <span>KT텔레캅, ADT캡스 파트너십 체결</span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <svg
                          className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
                        <span>전국 대리점 네트워크 구축</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2020 */}
                <div className="relative flex gap-6 scroll-animate from-left">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 z-10 shadow-lg ring-4 ring-blue-200">
                    2020
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-1 border-2 border-blue-200 card-hover">
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                      법인전환
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2 group">
                        <svg
                          className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
                        <span>주식회사 원에프로 법인 전환</span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <svg
                          className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
                        <span>체계적인 CCTV 전문기업으로 성장</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2017 */}
                <div className="relative flex gap-6 scroll-animate from-right">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 z-10 shadow-lg ring-4 ring-blue-200">
                    2017
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-1 border-2 border-blue-200 card-hover">
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                      창립
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2 group">
                        <svg
                          className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
                        <span>온리원컴퍼니 설립</span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <svg
                          className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
                        <span>CCTV 영업 및 판매 사업 시작</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 scroll-animate from-bottom">
            <p className="text-blue-800 font-semibold mb-2 tracking-wider">
              LOCATION
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              오시는 길
            </h2>
            <p className="text-gray-600">
              주식회사 원에프를 찾아오시는 방법
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Map */}
            <div className="scroll-animate from-left h-full">
              <a
                href="https://naver.me/GJ59ImUv"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl h-full min-h-[400px] shadow-lg overflow-hidden group relative"
              >
                <Image
                  src="/images/naver-map.webp"
                  alt="주식회사 원에프 위치"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium text-gray-900 text-sm">네이버 지도에서 보기</p>
                </div>
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 scroll-animate from-right">
              <div className="bg-gradient-to-br from-blue-800 to-slate-900 text-white rounded-2xl p-8 card-hover">
                <h3 className="text-xl font-bold mb-6">연락처</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-6 h-6"
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
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">대표번호</p>
                      <p className="text-2xl font-bold">1566-0312</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-6 h-6"
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
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">회사전화</p>
                      <p className="text-xl font-medium">032-215-2522</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">팩스</p>
                      <p className="text-xl font-medium">032-215-2523</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 card-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-4">주소</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-5 h-5 text-blue-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">본사</p>
                      <p className="text-gray-600 text-sm">경기도 부천시 소사구 양지로 205, 제5층 제이에이치527호<br />(옥길동, 부천옥길 서영아너시티2)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-5 h-5 text-blue-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">영업시간</p>
                      <p className="text-gray-600">
                        평일 09:00 - 18:00 (주말/공휴일 휴무)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl animate-pulse-slow" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl animate-pulse-slow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 scroll-animate from-bottom">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            원에프와 함께 성장하세요
          </h2>
          <p className="text-gray-400 mb-8">
            제품 문의, 견적 요청, 파트너십 제안 등 무엇이든 문의해주세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:1566-0312"
              className="btn-hover inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 hover:gap-3 transition-all duration-300"
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
              className="btn-hover border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              온라인 문의하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
