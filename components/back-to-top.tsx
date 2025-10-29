'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''} bg-[#0092e5] hover:bg-[#0078bd] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}