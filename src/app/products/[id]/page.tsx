import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const API_URL = 'https://onef-api.yangseongje87.workers.dev';

interface Product {
  id: string;
  modelName: string;
  productName: string;
  category: string;
  categoryLabel: string;
  imageUrl: string;
  resolution?: string;
  sensor?: string;
  lens?: string;
  special?: string;
  features: string;
  order: number;
  description?: string;
  fullSpecs?: string;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_URL}/products`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return null;
    const data = await response.json();
    const product = data.products?.find((p: Product) => p.id === id);
    return product || null;
  } catch {
    return null;
  }
}

async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return [];
    const data = await response.json();
    return data.products || [];
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) {
    return { title: '제품을 찾을 수 없습니다' };
  }
  return {
    title: `${product.modelName} - ${product.productName} | KTT V-Cam`,
    description: product.description || product.features,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const featureList = product.features ? product.features.split(', ') : [];
  const allProducts = await getAllProducts();
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // 스펙 테이블 데이터
  const specs = [
    { label: '해상도', value: product.resolution },
    { label: '이미지 센서', value: product.sensor },
    { label: '렌즈', value: product.lens },
  ].filter((spec) => spec.value);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              홈
            </Link>
            <span className="text-gray-300">/</span>
            <Link href="/products" className="text-gray-500 hover:text-gray-700">
              제품소개
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">{product.modelName}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* 상단: 이미지 + 제품 정보 */}
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section - 고정 높이 */}
              <div className="bg-gray-50 p-8 md:p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-200 h-[400px] lg:h-[480px]">
                <div className="relative w-full max-w-sm h-full">
                  <Image
                    src={product.imageUrl}
                    alt={product.productName}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                {/* Category & Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-sm font-medium px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full">
                    {product.categoryLabel}
                  </span>
                  {product.special && (
                    <span className="text-sm font-medium px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full">
                      {product.special}
                    </span>
                  )}
                </div>

                {/* Product Name */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {product.modelName}
                </h1>
                <p className="text-lg text-gray-600 mb-4">{product.productName}</p>

                {/* Description */}
                {product.description && (
                  <p className="text-gray-600 leading-relaxed mb-6 border-l-4 border-blue-200 pl-4">
                    {product.description}
                  </p>
                )}

                {/* Features */}
                {featureList.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      주요 특징
                    </h2>
                    <ul className="grid grid-cols-2 gap-2">
                      {featureList.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-blue-600 flex-shrink-0"
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
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href="tel:1566-0312"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-900 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    전화 문의
                  </a>
                  <Link
                    href="/support#inquiry-form"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-gray-800 transition"
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
            </div>

            {/* 하단: 스펙 (기본 사양 위, 상세 사양 아래) */}
            {(specs.length > 0 || product.fullSpecs) && (
              <div className="border-t border-gray-200 p-8 md:p-12 space-y-8">
                {/* 기본 사양 */}
                {specs.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-4">
                      기본 사양
                    </h2>
                    <div className="bg-gray-50 rounded-xl overflow-hidden inline-block min-w-[320px] max-w-lg">
                      <table className="w-full">
                        <tbody>
                          {specs.map((spec, index) => (
                            <tr
                              key={index}
                              className={index !== specs.length - 1 ? 'border-b border-gray-200' : ''}
                            >
                              <td className="px-4 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
                                {spec.label}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-900">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 상세 사양 */}
                {product.fullSpecs && (
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-4">
                      상세 사양
                    </h2>
                    <div className="bg-gray-50 rounded-xl overflow-hidden inline-block min-w-[320px] max-w-2xl">
                      <table className="w-full">
                        <tbody>
                          {product.fullSpecs.split('\n').filter(Boolean).map((line, index, arr) => {
                            const [label, ...valueParts] = line.split(':');
                            const value = valueParts.join(':').trim();
                            return (
                              <tr
                                key={index}
                                className={index !== arr.length - 1 ? 'border-b border-gray-200' : ''}
                              >
                                <td className="px-4 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
                                  {label?.trim()}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-900">{value}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">관련 제품</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition group"
                >
                  <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-4 border-b border-gray-200">
                    <Image
                      src={relatedProduct.imageUrl}
                      alt={relatedProduct.productName}
                      width={140}
                      height={105}
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-800 transition">
                      {relatedProduct.modelName}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{relatedProduct.productName}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to List */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            전체 제품 목록으로 돌아가기
          </Link>
        </div>
      </section>
    </div>
  );
}
