# ONEF 홈페이지 PRD (Product Requirements Document)

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | ONEF 기업 홈페이지 |
| 회사명 | 주식회사 원에프 (ONEF) |
| 슬로건 | 고객만족 / 직원행복 / 동반성장 |
| 대표번호 | 1566-0312 |
| 기술 스택 | Next.js 16, React 19, Tailwind CSS 4, TypeScript |

---

## 2. 브랜드 컬러 시스템

### 2.1 Primary Colors (Navy Theme)

| 용도 | 색상 코드 | Tailwind 클래스 | 사용처 |
|------|-----------|-----------------|--------|
| Primary Dark | `#0f172a` | `slate-900` | 최상단 바, Footer 배경 |
| Primary | `#1e3a8a` | `blue-900` | CTA 배경, 호버 상태 |
| Primary Light | `#1e40af` | `blue-800` | 버튼, 링크, 아이콘 |
| Accent | `#3b82f6` | `blue-500` | 강조, 포인트 |

### 2.2 히어로 그라데이션

```css
.hero-gradient {
  background: linear-gradient(135deg, #000046 0%, #1cb5e0 100%);
}
```

- **시작 색상**: `#000046` (딥 네이비)
- **종료 색상**: `#1cb5e0` (시안/하늘색)
- **각도**: 135도 (좌상단 → 우하단)

### 2.3 보조 색상

| 용도 | Tailwind 클래스 |
|------|-----------------|
| 카드 배경 | `blue-50` |
| 아이콘 배경 | `blue-100` |
| 배지 배경 | `blue-100`, `blue-200` |
| 텍스트 (라이트) | `blue-200` |

### 2.4 중립 색상 (Gray Scale)

| 용도 | Tailwind 클래스 |
|------|-----------------|
| 배경 (밝음) | `gray-50` |
| 카드 배경 | `white`, `gray-100` |
| 보더 | `gray-200`, `gray-300` |
| 보조 텍스트 | `gray-500`, `gray-600` |
| 본문 텍스트 | `gray-700`, `gray-800` |
| 제목 | `gray-900` |

### 2.5 시맨틱 색상

| 용도 | 색상 | 사용처 |
|------|------|--------|
| 성공 | `green-500`, `green-600` | 완료 상태, 체크마크 |
| 경고 | `yellow-500` | 주의 메시지 |
| 오류 | `red-500` | 에러, 필수 표시 |

---

## 3. 타이포그래피

### 3.1 폰트 패밀리

```css
font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

- **주 폰트**: Pretendard Variable (CDN)
- **CDN 주소**: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css`

### 3.2 폰트 사이즈

| 용도 | Tailwind 클래스 | 크기 |
|------|-----------------|------|
| 히어로 제목 | `text-4xl md:text-5xl` | 36px / 48px |
| 섹션 제목 | `text-3xl md:text-4xl` | 30px / 36px |
| 서브 제목 | `text-2xl` | 24px |
| 카드 제목 | `text-xl`, `text-lg` | 20px / 18px |
| 본문 | `text-base` | 16px |
| 보조 텍스트 | `text-sm` | 14px |
| 캡션/배지 | `text-xs` | 12px |

### 3.3 폰트 굵기

| 용도 | Tailwind 클래스 |
|------|-----------------|
| 제목 | `font-bold` (700) |
| 서브 제목 | `font-semibold` (600) |
| 강조 | `font-medium` (500) |
| 본문 | `font-normal` (400) |

---

## 4. 컴포넌트 가이드

### 4.1 버튼

#### Primary Button
```tsx
<button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition">
  버튼 텍스트
</button>
```

#### Secondary Button (Outline)
```tsx
<button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
  버튼 텍스트
</button>
```

#### Ghost Button
```tsx
<button className="text-blue-800 hover:text-blue-900 font-medium transition">
  버튼 텍스트
</button>
```

### 4.2 카드

```tsx
<div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
  {/* 이미지 영역 */}
  <div className="h-48 bg-gray-100">...</div>
  {/* 콘텐츠 */}
  <div className="p-5">
    <h3 className="font-bold text-gray-900 mb-2">제목</h3>
    <p className="text-gray-600 text-sm">설명</p>
  </div>
</div>
```

### 4.3 배지

```tsx
{/* Primary Badge */}
<span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded">
  카테고리
</span>

{/* Highlight Badge */}
<span className="bg-blue-800 text-white text-xs px-2 py-1 rounded font-medium">
  핵심사업
</span>
```

### 4.4 섹션 패딩

```css
.section-padding {
  @apply py-16 md:py-20 lg:py-24;
}
```

### 4.5 호버 효과

```css
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

---

## 5. 페이지 구조

### 5.1 사이트맵

```
/                     # 메인 페이지
├── /about            # 회사소개
├── /business         # 사업분야
├── /products         # 제품소개
├── /smartstore       # 소상공인스마트상점
└── /support          # 고객지원
    └── /contact      # 문의하기
```

### 5.2 공통 레이아웃

| 컴포넌트 | 설명 |
|----------|------|
| Header | 상단 바(연락처) + 메인 헤더(로고, 네비게이션, CTA) |
| Footer | 회사 정보, 바로가기, 연락처, 플로팅 전화 버튼 |

### 5.3 페이지별 구조

#### 메인 페이지 (/)
1. 히어로 섹션 (글래스모피즘 + 그라데이션)
2. 회사소개 섹션
3. 사업분야 섹션 (4개 카드)
4. 제품소개 섹션 (4개 제품 카드)
5. 스마트상점 배너
6. CTA 섹션

#### 회사소개 (/about)
1. 페이지 헤더
2. 탭 네비게이션 (회사개요, 인사말, 연혁, 오시는 길)
3. 회사개요 섹션
4. 인사말 섹션 (비전 카드 3개)
5. 연혁 섹션 (타임라인)
6. 오시는 길 섹션
7. CTA 섹션

#### 사업분야 (/business)
1. 히어로 섹션
2. 4대 사업영역 개요
3. 각 사업분야 상세 섹션
4. CTA 섹션

#### 제품소개 (/products)
1. 히어로 섹션
2. 카테고리 필터 (Sticky)
3. 제품 그리드 (4열)
4. CTA 섹션

#### 스마트상점 (/smartstore)
1. 히어로 섹션 (정부지원사업 강조)
2. 지원 혜택 섹션
3. 신청 절차 섹션
4. 지원 대상 섹션
5. CTA 섹션

#### 고객지원 (/support)
1. 히어로 섹션
2. 지원 메뉴 카드 (문의하기, 자료실, FAQ)
3. 연락처 안내
4. 빠른 상담 CTA
5. 운영 시간

#### 문의하기 (/support/contact)
1. 히어로 섹션
2. 2컬럼 레이아웃 (폼 + 사이드바)
3. 문의 폼 (이름, 연락처, 이메일, 문의유형, 내용, 개인정보동의)
4. 사이드바 (빠른 상담, 연락처, 운영시간, 스마트상점 배너)

---

## 6. 기술 스택

| 카테고리 | 기술 |
|----------|------|
| 프레임워크 | Next.js 16.1.2 (App Router) |
| UI 라이브러리 | React 19 |
| 스타일링 | Tailwind CSS 4 |
| 언어 | TypeScript |
| 빌드 도구 | Turbopack |
| 폰트 | Pretendard (CDN) |

---

## 7. 반응형 브레이크포인트

| 브레이크포인트 | 크기 | 용도 |
|----------------|------|------|
| (기본) | < 640px | 모바일 |
| `sm` | >= 640px | 소형 태블릿 |
| `md` | >= 768px | 태블릿 |
| `lg` | >= 1024px | 데스크톱 |
| `xl` | >= 1280px | 대형 데스크톱 |

---

## 8. 접근성 가이드

- 모든 이미지에 `alt` 텍스트 제공
- 인터랙티브 요소에 `aria-label` 제공
- 충분한 색상 대비 (WCAG 2.1 AA 준수)
- 키보드 네비게이션 지원
- Focus 상태 시각적 표시

---

## 9. 성능 최적화

- Next.js Image 컴포넌트 사용 (자동 최적화)
- 정적 페이지 생성 (SSG)
- Pretendard Variable 폰트 (동적 서브셋)
- Turbopack 빌드 (빠른 빌드 시간)

---

## 10. 회사 정보

| 항목 | 내용 |
|------|------|
| 회사명 | 주식회사 원에프 (ONEF) |
| 설립연도 | 2017년 (온리원컴퍼니) |
| 법인전환 | 2020년 |
| 대표번호 | 1566-0312 |
| 회사전화 | 032-215-2522 |
| 팩스 | 032-215-2523 |
| 주요사업 | CCTV 전국총판, 엔터테인먼트, 분양대행, 건강기능식품 |
| 슬로건 | 고객만족 / 직원행복 / 동반성장 |

---

**문서 버전**: 1.0.0
**작성일**: 2025-01-15
**작성자**: Claude Code
