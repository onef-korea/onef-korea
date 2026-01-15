import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Info */}
          <div>
            <Image
              src="/logo.png"
              alt="ONEF"
              width={180}
              height={60}
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              24시간 위험으로부터<br />
              소중한 재산을 보호합니다
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">바로가기</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-white transition">
                  사업분야
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  제품소개
                </Link>
              </li>
              <li>
                <Link href="/smartstore" className="hover:text-white transition">
                  소상공인스마트상점
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition">
                  고객지원
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">제품</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/products?category=recorder" className="hover:text-white transition">
                  녹화기
                </Link>
              </li>
              <li>
                <Link href="/products?category=bullet" className="hover:text-white transition">
                  불렛 카메라
                </Link>
              </li>
              <li>
                <Link href="/products?category=dome" className="hover:text-white transition">
                  돔 카메라
                </Link>
              </li>
              <li>
                <Link href="/products?category=ai-premium" className="hover:text-white transition">
                  AI 프리미엄
                </Link>
              </li>
              <li>
                <Link href="/products?category=fire" className="hover:text-white transition">
                  화재감지 카메라
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                대표번호: <strong className="text-white">1566-0312</strong>
              </li>
              <li>회사전화: 032-215-2522</li>
              <li>팩스: 032-215-2523</li>
              <li className="pt-2">
                <Link
                  href="/support#inquiry-form"
                  className="inline-block bg-blue-800 text-white px-4 py-2 rounded text-sm hover:bg-blue-900 transition"
                >
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Info */}
        <div className="border-t border-gray-800 pt-8 text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 md:gap-4 text-center">
            <span>법인명: 주식회사 원에프</span>
            <span className="hidden md:inline">|</span>
            <span>대표이사: 양성제</span>
            <span className="hidden md:inline">|</span>
            <span>사업자등록번호: 754-88-01666</span>
          </div>
          <p className="text-center mt-2">
            경기도 부천시 소사구 양지로 205, 제5층 제이에이치527호 (옥길동, 부천옥길 서영아너시티2)
          </p>
          <p className="text-center mt-4">© 2026 ONEF. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}
