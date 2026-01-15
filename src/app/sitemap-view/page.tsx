import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사이트맵",
  description: "ONEF 홈페이지 전체 페이지 구조",
};

const pages = [
  {
    category: "메인",
    items: [
      { name: "메인 페이지", path: "/", description: "히어로, 퀵메뉴, 회사소개, 사업분야, 제품, 스마트상점, 고객지원, 문의폼" },
    ],
  },
  {
    category: "회사소개",
    items: [
      { name: "회사소개", path: "/about", description: "회사개요, 인사말, 연혁, 오시는길" },
    ],
  },
  {
    category: "사업분야",
    items: [
      { name: "사업분야", path: "/business", description: "CCTV 전국총판, 엔터테인먼트, 분양대행, 건강기능식품" },
    ],
  },
  {
    category: "제품소개",
    items: [
      { name: "제품소개", path: "/products", description: "녹화기, 불렛카메라, 돔카메라, AI프리미엄, AI컬러, 화재감지" },
    ],
  },
  {
    category: "소상공인스마트상점",
    items: [
      { name: "소상공인스마트상점", path: "/smartstore", description: "정부지원사업 안내, 패키지 구성, 신청방법" },
    ],
  },
  {
    category: "고객지원",
    items: [
      { name: "고객지원", path: "/support", description: "문의하기, 자료실, FAQ" },
      { name: "문의하기", path: "/support#inquiry-form", description: "온라인 문의 폼" },
    ],
  },
];

export default function SitemapViewPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">사이트맵</h1>
          <p className="text-gray-300">ONEF 홈페이지 전체 페이지 구조</p>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Visual Tree */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">페이지 구조도</h2>
            <div className="font-mono text-sm">
              <div className="text-blue-600 font-bold">/ (메인)</div>
              <div className="ml-4 border-l-2 border-gray-200 pl-4 space-y-1">
                <div className="relative">
                  <span className="absolute -left-[18px] top-0 text-gray-300">├─</span>
                  <Link href="/about" className="text-gray-700 hover:text-blue-600">/about (회사소개)</Link>
                </div>
                <div className="relative">
                  <span className="absolute -left-[18px] top-0 text-gray-300">├─</span>
                  <Link href="/business" className="text-gray-700 hover:text-blue-600">/business (사업분야)</Link>
                </div>
                <div className="relative">
                  <span className="absolute -left-[18px] top-0 text-gray-300">├─</span>
                  <Link href="/products" className="text-gray-700 hover:text-blue-600">/products (제품소개)</Link>
                </div>
                <div className="relative">
                  <span className="absolute -left-[18px] top-0 text-gray-300">├─</span>
                  <Link href="/smartstore" className="text-gray-700 hover:text-blue-600">/smartstore (소상공인스마트상점)</Link>
                </div>
                <div className="relative">
                  <span className="absolute -left-[18px] top-0 text-gray-300">└─</span>
                  <Link href="/support" className="text-gray-700 hover:text-blue-600">/support (고객지원)</Link>
                  <div className="ml-4 border-l-2 border-gray-200 pl-4 mt-1">
                    <div className="relative">
                      <span className="absolute -left-[18px] top-0 text-gray-300">└─</span>
                      <Link href="/support#inquiry-form" className="text-gray-700 hover:text-blue-600">/support#inquiry-form (문의하기)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((section) => (
              <div key={section.category} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-blue-800 text-white px-4 py-3">
                  <h3 className="font-bold">{section.category}</h3>
                </div>
                <div className="p-4 space-y-3">
                  {section.items.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{item.name}</span>
                        <span className="text-xs text-gray-400 font-mono">{item.path}</span>
                      </div>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">빠른 이동</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition">
                메인
              </Link>
              <Link href="/about" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                회사소개
              </Link>
              <Link href="/business" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                사업분야
              </Link>
              <Link href="/products" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                제품소개
              </Link>
              <Link href="/smartstore" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                스마트상점
              </Link>
              <Link href="/support" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                고객지원
              </Link>
              <Link href="/support#inquiry-form" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                문의하기
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-800 text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold">7</div>
              <div className="text-blue-200 text-sm">전체 페이지</div>
            </div>
            <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold">2</div>
              <div className="text-blue-200 text-sm">공통 컴포넌트</div>
            </div>
            <div className="bg-green-600 text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold">6</div>
              <div className="text-green-200 text-sm">메뉴 카테고리</div>
            </div>
            <div className="bg-amber-500 text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold">1</div>
              <div className="text-amber-200 text-sm">하위 페이지</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
