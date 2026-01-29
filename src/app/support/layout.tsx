import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "고객지원",
  description:
    "ONEF 고객지원 센터. 제품 문의, 스마트상점 사업 문의, A/S, 기술 지원 등 무엇이든 문의해 주세요. 대표번호 1566-0312.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "고객지원 | ONEF - 주식회사 원에프",
    description:
      "ONEF 고객지원. 제품 문의, 스마트상점 사업, 설치/시공, A/S 등 빠르고 친절하게 안내해 드립니다.",
    images: [
      { url: "/images/support-contact-hero.webp", width: 1200, height: 630 },
    ],
  },
};

const allFaqs = [
  {
    question: "스마트 결제기 설치 비용은 얼마인가요?",
    answer:
      "스마트 결제기 설치 비용은 정부 지원 사업 참여 여부에 따라 달라집니다. 소상공인 스마트상점 지원 사업을 통해 설치 시 최대 90%까지 정부 지원을 받으실 수 있습니다. 자세한 내용은 1566-0312로 문의해 주세요.",
  },
  {
    question: "제품 A/S는 어떻게 받을 수 있나요?",
    answer:
      "A/S는 대표번호 1566-0312 또는 문의하기 게시판을 통해 신청하실 수 있습니다. 접수 후 담당 기술자가 방문하여 점검 및 수리를 진행합니다. 보증기간 내 자연 발생 고장은 무상으로 처리됩니다.",
  },
  {
    question: "기존 POS와 연동이 가능한가요?",
    answer:
      "네, ONEF의 스마트 결제 시스템은 대부분의 기존 POS 시스템과 연동이 가능합니다. 연동 가능 여부는 현재 사용 중인 POS 시스템에 따라 다를 수 있으니, 사전 상담을 통해 확인해 주세요.",
  },
  {
    question: "스마트상점 지원 사업 신청 자격은 무엇인가요?",
    answer:
      "소상공인 스마트상점 지원 사업은 소상공인 기준을 충족하는 업체를 대상으로 합니다. 업종, 매출액, 상시근로자 수 등의 조건이 있으며, 연도별로 세부 조건이 변경될 수 있습니다. 정확한 자격 요건은 상담을 통해 확인해 주세요.",
  },
  {
    question: "지원금 규모는 어느 정도인가요?",
    answer:
      "정부 지원 사업을 통해 스마트 기기 도입 비용의 최대 90%까지 지원받을 수 있습니다. 지원 한도는 사업 유형과 업체 규모에 따라 다르며, 연간 예산 소진 시 조기 마감될 수 있습니다.",
  },
  {
    question: "신청부터 설치까지 얼마나 걸리나요?",
    answer:
      "신청서 접수 후 심사를 거쳐 평균 2~4주 내에 설치가 완료됩니다. 단, 지원 사업 심사 일정에 따라 변동될 수 있으며, 설치 일정은 고객님과 협의하여 진행됩니다.",
  },
  {
    question: "기기 오류가 발생했을 때 어떻게 해야 하나요?",
    answer:
      "기기 오류 발생 시 먼저 전원을 껐다가 다시 켜보세요. 문제가 지속되면 대표번호 1566-0312로 연락해 주시면 원격 또는 방문 기술 지원을 받으실 수 있습니다.",
  },
  {
    question: "소프트웨어 업데이트는 자동으로 되나요?",
    answer:
      "네, ONEF 시스템은 영업시간 외에 자동으로 소프트웨어 업데이트가 진행됩니다. 중요한 보안 업데이트나 기능 개선 사항은 별도 공지 후 적용됩니다.",
  },
];

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={generateFAQSchema(allFaqs)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "홈", href: "/" },
          { name: "고객지원", href: "/support" },
        ])}
      />
      {children}
    </>
  );
}
