import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-8 text-gray-300">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">제품을 찾을 수 없습니다</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          요청하신 제품이 존재하지 않거나 삭제되었을 수 있습니다.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-900 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          제품 목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
