'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Popup {
  id: string;
  title?: string;
  imageUrl?: string;
  linkUrl?: string;
  linkTarget?: string;
  altText?: string;
}

export default function PopupModal() {
  const [popups, setPopups] = useState<Popup[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 오늘 하루 닫기 체크
    const dismissedDate = localStorage.getItem('onef_popup_dismissed');
    const today = new Date().toISOString().split('T')[0];
    if (dismissedDate === today) return;

    fetch('https://onef-api.yangseongje87.workers.dev/popups')
      .then(res => res.json())
      .then(data => {
        const activePopups = (data.popups || []).filter((p: Popup) => p.imageUrl);
        if (activePopups.length > 0) {
          setPopups(activePopups);
          setIsOpen(true);
        }
      })
      .catch(() => {});
  }, []);

  if (!isOpen || popups.length === 0) return null;

  const popup = popups[currentIndex];

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDismissToday = () => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('onef_popup_dismissed', today);
    setIsOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex(i => (i > 0 ? i - 1 : popups.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(i => (i < popups.length - 1 ? i + 1 : 0));
  };

  const imageContent = (
    <Image
      src={popup.imageUrl || ''}
      alt={popup.altText || popup.title || '팝업'}
      width={480}
      height={600}
      className="w-full h-auto rounded-t-xl"
      style={{ maxHeight: '70vh', objectFit: 'contain' }}
    />
  );

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
      onClick={handleClose}
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl max-w-[480px] w-full overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* 이미지 영역 */}
        {popup.linkUrl ? (
          <a
            href={popup.linkUrl}
            target={popup.linkTarget || '_self'}
            rel={popup.linkTarget === '_blank' ? 'noopener noreferrer' : undefined}
          >
            {imageContent}
          </a>
        ) : (
          imageContent
        )}

        {/* 네비게이션 (여러 팝업일 때) */}
        {popups.length > 1 && (
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
            <button
              onClick={handlePrev}
              className="pointer-events-auto w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition"
              aria-label="이전"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition"
              aria-label="다음"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* 인디케이터 */}
        {popups.length > 1 && (
          <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1.5">
            {popups.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`팝업 ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* 하단 버튼 */}
        <div className="flex border-t border-gray-200">
          <button
            onClick={handleDismissToday}
            className="flex-1 py-3 text-sm text-gray-500 hover:bg-gray-50 transition"
          >
            오늘 하루 닫기
          </button>
          <div className="w-px bg-gray-200" />
          <button
            onClick={handleClose}
            className="flex-1 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
