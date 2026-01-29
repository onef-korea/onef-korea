import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import ScrollAnimation from "@/components/ScrollAnimation";
import PopupModal from "@/components/PopupModal";
import JsonLd from "@/components/JsonLd";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://onef.kr"),
  title: {
    default: "ONEF - 주식회사 원에프 | CCTV 전문기업",
    template: "%s | ONEF",
  },
  description: "주식회사 원에프는 CCTV 전국총판, 엔터테인먼트, 분양대행, 건강기능식품 사업을 영위하는 종합기업입니다. 고객만족, 직원행복, 동반성장을 추구합니다.",
  keywords: ["ONEF", "원에프", "CCTV", "보안카메라", "화재감지", "스마트상점", "KTT V-Cam"],
  authors: [{ name: "ONEF" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "ONEF - 주식회사 원에프",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "ONEF - AI CCTV 전문기업 주식회사 원에프",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ONEF - 주식회사 원에프 | CCTV 전문기업",
    description: "주식회사 원에프는 CCTV 전국총판, 엔터테인먼트, 분양대행, 건강기능식품 사업을 영위하는 종합기업입니다.",
    images: ["/images/hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="font-sans antialiased bg-gray-50">
        <ScrollAnimation />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileBottomNav />
        <PopupModal />
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateLocalBusinessSchema()} />
      </body>
    </html>
  );
}
