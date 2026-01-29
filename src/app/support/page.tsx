'use client';

import Image from 'next/image';
import Script from 'next/script';
import { useState, useEffect, useCallback, useRef } from 'react';

const faqData = [
  {
    category: '제품 문의',
    items: [
      {
        question: '스마트 결제기 설치 비용은 얼마인가요?',
        answer: '스마트 결제기 설치 비용은 정부 지원 사업 참여 여부에 따라 달라집니다. 소상공인 스마트상점 지원 사업을 통해 설치 시 최대 90%까지 정부 지원을 받으실 수 있습니다. 자세한 내용은 1566-0312로 문의해 주세요.',
      },
      {
        question: '제품 A/S는 어떻게 받을 수 있나요?',
        answer: 'A/S는 대표번호 1566-0312 또는 문의하기 게시판을 통해 신청하실 수 있습니다. 접수 후 담당 기술자가 방문하여 점검 및 수리를 진행합니다. 보증기간 내 자연 발생 고장은 무상으로 처리됩니다.',
      },
      {
        question: '기존 POS와 연동이 가능한가요?',
        answer: '네, ONEF의 스마트 결제 시스템은 대부분의 기존 POS 시스템과 연동이 가능합니다. 연동 가능 여부는 현재 사용 중인 POS 시스템에 따라 다를 수 있으니, 사전 상담을 통해 확인해 주세요.',
      },
    ],
  },
  {
    category: '스마트상점 사업',
    items: [
      {
        question: '스마트상점 지원 사업 신청 자격은 무엇인가요?',
        answer: '소상공인 스마트상점 지원 사업은 소상공인 기준을 충족하는 업체를 대상으로 합니다. 업종, 매출액, 상시근로자 수 등의 조건이 있으며, 연도별로 세부 조건이 변경될 수 있습니다. 정확한 자격 요건은 상담을 통해 확인해 주세요.',
      },
      {
        question: '지원금 규모는 어느 정도인가요?',
        answer: '정부 지원 사업을 통해 스마트 기기 도입 비용의 최대 90%까지 지원받을 수 있습니다. 지원 한도는 사업 유형과 업체 규모에 따라 다르며, 연간 예산 소진 시 조기 마감될 수 있습니다.',
      },
      {
        question: '신청부터 설치까지 얼마나 걸리나요?',
        answer: '신청서 접수 후 심사를 거쳐 평균 2~4주 내에 설치가 완료됩니다. 단, 지원 사업 심사 일정에 따라 변동될 수 있으며, 설치 일정은 고객님과 협의하여 진행됩니다.',
      },
    ],
  },
  {
    category: '기술 지원',
    items: [
      {
        question: '기기 오류가 발생했을 때 어떻게 해야 하나요?',
        answer: '기기 오류 발생 시 먼저 전원을 껐다가 다시 켜보세요. 문제가 지속되면 대표번호 1566-0312로 연락해 주시면 원격 또는 방문 기술 지원을 받으실 수 있습니다.',
      },
      {
        question: '소프트웨어 업데이트는 자동으로 되나요?',
        answer: '네, ONEF 시스템은 영업시간 외에 자동으로 소프트웨어 업데이트가 진행됩니다. 중요한 보안 업데이트나 기능 개선 사항은 별도 공지 후 적용됩니다.',
      },
    ],
  },
];

interface BoardPost {
  id: string;
  제목: string;
  이름: string;
  접수일: string;
  상태: string;
  비밀글: boolean;
  답변완료: boolean;
}

const API_BASE = 'https://onef-api.yangseongje87.workers.dev';

const inquiryTypes = [
  { value: '', label: '문의 유형 선택' },
  { value: 'product', label: '제품 문의' },
  { value: 'smartstore', label: '스마트상점 사업 문의' },
  { value: 'installation', label: '설치/시공 문의' },
  { value: 'as', label: 'A/S 문의' },
  { value: 'partnership', label: '제휴/협력 문의' },
  { value: 'other', label: '기타 문의' },
];

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

function FAQAccordion({ category, items }: { category: string; items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
        {category}
      </h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-900 pr-4 text-sm md:text-base">{item.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    inquiryType: '',
    content: '',
    privacyAgreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // 게시판 상태
  const [boardPosts, setBoardPosts] = useState<BoardPost[]>([]);
  const [boardLoading, setBoardLoading] = useState(true);
  const [showWriteModal, setShowWriteModal] = useState(false);
  const [boardForm, setBoardForm] = useState({
    name: '', phone: '', title: '', content: '', isSecret: false, password: '', privacyAgreed: false,
  });
  const [boardSubmitting, setBoardSubmitting] = useState(false);
  const [boardSubmitStatus, setBoardSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Turnstile 스팸 방지
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const [boardTurnstileToken, setBoardTurnstileToken] = useState('');
  const formTurnstileRef = useRef<HTMLDivElement>(null);
  const boardTurnstileRef = useRef<HTMLDivElement>(null);
  const formWidgetId = useRef<string | null>(null);
  const boardWidgetId = useRef<string | null>(null);

  const fetchBoardPosts = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/board`);
      const data = await res.json();
      setBoardPosts(data.posts || []);
    } catch {
      setBoardPosts([]);
    } finally {
      setBoardLoading(false);
    }
  }, []);

  useEffect(() => { fetchBoardPosts(); }, [fetchBoardPosts]);

  // Turnstile: 입력폼 위젯 렌더링
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) { setTurnstileToken('bypass'); return; }
    if (turnstileReady && submitStatus !== 'success' && window.turnstile && formTurnstileRef.current && !formWidgetId.current) {
      formWidgetId.current = window.turnstile.render(formTurnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        theme: 'light',
      });
    }
  }, [turnstileReady, submitStatus]);

  // Turnstile: 게시판 모달 위젯 렌더링
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) { setBoardTurnstileToken('bypass'); return; }
    if (turnstileReady && showWriteModal && boardSubmitStatus !== 'success' && window.turnstile && boardTurnstileRef.current && !boardWidgetId.current) {
      const timer = setTimeout(() => {
        if (boardTurnstileRef.current && window.turnstile && !boardWidgetId.current) {
          boardWidgetId.current = window.turnstile.render(boardTurnstileRef.current, {
            sitekey: TURNSTILE_SITE_KEY,
            callback: (token: string) => setBoardTurnstileToken(token),
            'expired-callback': () => setBoardTurnstileToken(''),
            theme: 'light',
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
    if (!showWriteModal && boardWidgetId.current) {
      try { window.turnstile?.remove(boardWidgetId.current); } catch {}
      boardWidgetId.current = null;
      setBoardTurnstileToken('');
    }
  }, [turnstileReady, showWriteModal, boardSubmitStatus]);

  const handleBoardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!boardTurnstileToken) return;
    setBoardSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          '접수유형': '게시판',
          '이름': boardForm.name,
          '연락처': boardForm.phone,
          '제목': boardForm.title,
          '문의내용': boardForm.content,
          '비밀글': boardForm.isSecret,
          '글비밀번호': boardForm.password,
          turnstileToken: boardTurnstileToken,
        }),
      });
      if (!res.ok) throw new Error();
      setBoardSubmitStatus('success');
      setBoardForm({ name: '', phone: '', title: '', content: '', isSecret: false, password: '', privacyAgreed: false });
      try { if (boardWidgetId.current && window.turnstile) window.turnstile.remove(boardWidgetId.current); } catch {}
      boardWidgetId.current = null;
      setBoardTurnstileToken('');
      fetchBoardPosts();
      setTimeout(() => { setShowWriteModal(false); setBoardSubmitStatus('idle'); }, 1500);
    } catch {
      setBoardSubmitStatus('error');
    } finally {
      setBoardSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) return;
    setIsSubmitting(true);

    try {
      const inquiryTypeLabel = inquiryTypes.find(t => t.value === formData.inquiryType)?.label || formData.inquiryType;
      const res = await fetch('https://onef-api.yangseongje87.workers.dev/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          '이름': formData.name,
          '상호명': formData.company,
          '연락처': formData.phone,
          '이메일': formData.email,
          '문의유형': inquiryTypeLabel,
          '문의내용': formData.content,
          '접수유형': '입력폼',
          turnstileToken: turnstileToken,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || '접수 실패');
      setSubmitStatus('success');
      try { if (formWidgetId.current && window.turnstile) window.turnstile.remove(formWidgetId.current); } catch {}
      formWidgetId.current = null;
      setTurnstileToken('');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        inquiryType: '',
        content: '',
        privacyAgreed: false,
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus('idle');
    try { if (formWidgetId.current && window.turnstile) window.turnstile.remove(formWidgetId.current); } catch {}
    formWidgetId.current = null;
    setTurnstileToken('');
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onReady={() => setTurnstileReady(true)}
      />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/support-contact-hero.webp"
            alt="고객지원"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">고객지원</h1>
            <p className="text-sm md:text-xl text-gray-200">
              ONEF는 고객님의 만족을 최우선으로 생각합니다.<br />
              어떤 문의든 빠르고 친절하게 안내해 드리겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 문의 게시판 Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">문의 게시판</h2>
              <p className="text-gray-600 text-sm mt-1">고객님들의 문의 내역을 확인하실 수 있습니다.</p>
            </div>
            <button
              onClick={() => setShowWriteModal(true)}
              className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-900 transition flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              글쓰기
            </button>
          </div>

          {/* 게시판 테이블 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="hidden md:grid md:grid-cols-12 bg-gray-50 border-b border-gray-200 py-4 px-6 text-sm font-medium text-gray-600">
              <div className="col-span-1 text-center">번호</div>
              <div className="col-span-6">제목</div>
              <div className="col-span-2 text-center">작성자</div>
              <div className="col-span-2 text-center">작성일</div>
              <div className="col-span-1 text-center">상태</div>
            </div>

            <div className="divide-y divide-gray-100">
              {boardLoading ? (
                <div className="py-12 text-center text-gray-400 text-sm">불러오는 중...</div>
              ) : boardPosts.length === 0 ? (
                <div className="py-12 text-center text-gray-400 text-sm">등록된 문의가 없습니다.</div>
              ) : (
                boardPosts.map((post, idx) => (
                  <div key={post.id} className="hover:bg-gray-50 transition">
                    {/* 데스크톱 */}
                    <div className="hidden md:grid md:grid-cols-12 py-4 px-6 items-center">
                      <div className="col-span-1 text-center text-gray-500 text-sm">{boardPosts.length - idx}</div>
                      <div className="col-span-6 flex items-center gap-2">
                        <span className="text-gray-900">{post.제목}</span>
                        {post.비밀글 && (
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        )}
                        {post.답변완료 && (
                          <span className="inline-block bg-blue-50 text-blue-700 text-xs px-1.5 py-0.5 rounded">답변</span>
                        )}
                      </div>
                      <div className="col-span-2 text-center text-gray-600 text-sm">{post.이름}</div>
                      <div className="col-span-2 text-center text-gray-500 text-sm">{post.접수일?.replace(/-/g, '.')}</div>
                      <div className="col-span-1 text-center">
                        <span className={`inline-block text-xs px-2 py-1 rounded ${
                          post.답변완료 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                        }`}>
                          {post.답변완료 ? '답변완료' : '처리중'}
                        </span>
                      </div>
                    </div>
                    {/* 모바일 */}
                    <div className="md:hidden p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`inline-block text-xs px-2 py-1 rounded ${
                          post.답변완료 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                        }`}>
                          {post.답변완료 ? '답변완료' : '처리중'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-900 font-medium">{post.제목}</span>
                        {post.비밀글 && (
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 gap-4">
                        <span>{post.이름}</span>
                        <span>{post.접수일?.replace(/-/g, '.')}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 글쓰기 모달 */}
      {showWriteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">문의 글쓰기</h3>
              <button onClick={() => { setShowWriteModal(false); setBoardSubmitStatus('idle'); }} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {boardSubmitStatus === 'success' ? (
              <div className="p-8 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-bold text-gray-900">문의가 등록되었습니다</p>
                <p className="text-sm text-gray-500 mt-1">빠른 시일 내 답변드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleBoardSubmit} className="p-5 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">이름 <span className="text-red-500">*</span></label>
                    <input type="text" required value={boardForm.name} onChange={e => setBoardForm(p => ({...p, name: e.target.value}))}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="이름" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">연락처 <span className="text-red-500">*</span></label>
                    <input type="tel" required value={boardForm.phone} onChange={e => setBoardForm(p => ({...p, phone: e.target.value}))}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="010-1234-5678" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">제목 <span className="text-red-500">*</span></label>
                  <input type="text" required value={boardForm.title} onChange={e => setBoardForm(p => ({...p, title: e.target.value}))}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="문의 제목" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">내용 <span className="text-red-500">*</span></label>
                  <textarea required rows={5} value={boardForm.content} onChange={e => setBoardForm(p => ({...p, content: e.target.value}))}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" placeholder="문의하실 내용을 자세히 적어주세요." />
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                    <input type="checkbox" checked={boardForm.isSecret} onChange={e => setBoardForm(p => ({...p, isSecret: e.target.checked}))}
                      className="w-4 h-4 rounded border-gray-300 text-blue-800 focus:ring-blue-500" />
                    비밀글
                  </label>
                  {boardForm.isSecret && (
                    <input type="text" value={boardForm.password} onChange={e => setBoardForm(p => ({...p, password: e.target.value}))}
                      className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-36" placeholder="글 비밀번호" />
                  )}
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" required checked={boardForm.privacyAgreed} onChange={e => setBoardForm(p => ({...p, privacyAgreed: e.target.checked}))}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-blue-800 focus:ring-blue-500" />
                    <span className="text-xs text-gray-600">
                      <span className="font-medium text-gray-900">개인정보 수집 및 이용 동의</span> <span className="text-red-500">(필수)</span><br />
                      문의 접수를 위해 이름, 연락처를 수집합니다.
                    </span>
                  </label>
                </div>
                {boardSubmitStatus === 'error' && (
                  <div className="bg-red-50 text-red-600 px-3 py-2 rounded-lg text-sm">등록 중 오류가 발생했습니다.</div>
                )}
                <div ref={boardTurnstileRef} className="flex justify-center" />
                <button type="submit" disabled={boardSubmitting || !boardTurnstileToken}
                  className="w-full bg-blue-800 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-900 transition disabled:opacity-50">
                  {boardSubmitting ? '등록 중...' : '문의 등록'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <p className="text-gray-600">
              고객님들이 자주 문의하시는 내용을 모았습니다.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqData.map((section, index) => (
              <FAQAccordion key={index} category={section.category} items={section.items} />
            ))}
          </div>
        </div>
      </section>

      {/* 문의 접수 + 연락처 Section */}
      <section id="inquiry-form" className="section-padding bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 문의 접수 폼 */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm">
                <div className="mb-4 md:mb-6">
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900">문의 접수</h2>
                  <p className="text-gray-600 mt-1 text-xs md:text-sm">문의사항을 남겨주시면 담당자가 빠르게 연락드리겠습니다.</p>
                </div>

                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">문의가 접수되었습니다</h3>
                    <p className="text-gray-600 mb-6">
                      영업일 기준 24시간 내 담당자가 연락드리겠습니다.
                    </p>
                    <button
                      onClick={resetForm}
                      className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
                    >
                      새 문의 작성
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2.5 md:space-y-4">
                    {/* 이름, 상호명 */}
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          이름 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-1.5 md:px-4 md:py-2.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="홍길동"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          상호명
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3 py-1.5 md:px-4 md:py-2.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="회사/매장명"
                        />
                      </div>
                    </div>

                    {/* 연락처, 이메일 */}
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          연락처 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-1.5 md:px-4 md:py-2.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="010-1234-5678"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                          이메일
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-1.5 md:px-4 md:py-2.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    {/* 문의 유형 */}
                    <div>
                      <label htmlFor="inquiryType" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                        문의 유형 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-3 py-1.5 md:px-4 md:py-2.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 문의 내용 */}
                    <div>
                      <label htmlFor="content" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                        문의 내용 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="content"
                        name="content"
                        required
                        rows={4}
                        value={formData.content}
                        onChange={handleChange}
                        className="w-full px-3 py-1.5 md:px-4 md:py-2.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none leading-relaxed"
                        placeholder="문의하실 내용을 자세히 적어주세요."
                      />
                    </div>

                    {/* 개인정보 동의 */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="privacyAgreed"
                          required
                          checked={formData.privacyAgreed}
                          onChange={handleChange}
                          className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-800 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-600">
                          <span className="font-medium text-gray-900">개인정보 수집 및 이용 동의</span>
                          <span className="text-red-500"> (필수)</span>
                          <br />
                          문의 접수 및 처리를 위해 이름, 연락처, 이메일을 수집합니다.
                          수집된 정보는 문의 처리 완료 후 3개월간 보관 후 파기됩니다.
                        </span>
                      </label>
                    </div>

                    {/* 에러 메시지 */}
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                        문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
                      </div>
                    )}

                    {/* Turnstile 사람 인증 */}
                    <div ref={formTurnstileRef} className="flex justify-center" />

                    {/* 제출 버튼 */}
                    <div className="flex justify-center pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting || !turnstileToken}
                        className="px-10 bg-blue-800 text-white py-3 rounded-lg text-sm font-semibold hover:bg-blue-900 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                      {isSubmitting ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          접수 중...
                        </>
                      ) : (
                        '문의 접수하기'
                      )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* 연락처 & 운영시간 */}
            <div className="lg:col-span-1 space-y-6">
              {/* 연락처 카드 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-5">연락처 안내</h3>
                <div className="space-y-5">
                  {/* 대표번호 - 강조 */}
                  <a
                    href="tel:1566-0312"
                    className="block bg-blue-800 rounded-xl p-4 hover:bg-blue-900 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-blue-200 font-medium">대표번호</p>
                        <p className="text-xl font-bold text-white">1566-0312</p>
                      </div>
                    </div>
                  </a>

                  {/* 회사전화 */}
                  <div className="flex items-center gap-3 px-1">
                    <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">회사전화</p>
                      <p className="font-semibold text-gray-900">032-215-2522</p>
                    </div>
                  </div>

                  {/* 팩스 */}
                  <div className="flex items-center gap-3 px-1">
                    <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">팩스</p>
                      <p className="font-semibold text-gray-900">032-215-2523</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 운영시간 카드 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">운영시간</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">평일</span>
                    <span className="font-semibold text-gray-900">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">점심시간</span>
                    <span className="font-semibold text-gray-900">12:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">주말/공휴일</span>
                    <span className="font-semibold text-gray-500">휴무</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    운영시간 외에는 온라인 문의를 남겨주시면
                    영업일 기준 24시간 내 답변드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
