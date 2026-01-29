import type { MetadataRoute } from 'next';

const SITE_URL = 'https://onef.kr';
const API_URL = 'https://onef-api.yangseongje87.workers.dev';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 정적 페이지
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/smartstore`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/business`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/support`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // 동적 페이지: 제품 상세
  let productPages: MetadataRoute.Sitemap = [];
  try {
    const response = await fetch(`${API_URL}/products`, {
      next: { revalidate: 3600 },
    });
    if (response.ok) {
      const data = await response.json();
      const products = data.products || [];
      productPages = products.map(
        (product: { id: string }): MetadataRoute.Sitemap[number] => ({
          url: `${SITE_URL}/products/${product.id}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }),
      );
    }
  } catch {
    // API 실패 시 정적 페이지만 반환
  }

  return [...staticPages, ...productPages];
}
