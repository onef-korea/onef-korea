import { Suspense } from 'react';
import { Metadata } from 'next';
import ProductsContent from './ProductsContent';

export const metadata: Metadata = {
  title: '제품소개',
  description: 'KTT V-Cam 시리즈 CCTV 제품: 녹화기, 불렛 카메라, 돔 카메라, AI 프리미엄, AI 컬러, 화재감지 카메라',
};

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
}

async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products`, {
      next: { revalidate: 60 }, // 60초마다 재검증 (ISR 효과)
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Suspense>
      <ProductsContent initialProducts={products} />
    </Suspense>
  );
}
