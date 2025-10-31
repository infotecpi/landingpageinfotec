'use client';

import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className='fixed bottom-4 right-4 z-50 max-w-sm'>
      <div className='bg-gradient-to-r from-[#fc842b] to-[#e07525] text-white p-4 rounded-2xl shadow-2xl border-2 border-white relative overflow-hidden'>
        {/* Background decoration */}
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute top-1 right-1 w-8 h-8 bg-white rounded-full blur-lg animate-pulse'></div>
          <div className='absolute bottom-1 left-1 w-6 h-6 bg-white rounded-full blur-md animate-pulse delay-500'></div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className='absolute top-2 right-2 text-white hover:text-gray-200 transition-colors'
          aria-label='Botão X para fechar o banner flutuador de oferta especial de instalação gratuita'
        >
          <X className='w-4 h-4' />
        </button>

        <div className='relative z-10'>
          <div className='flex items-center mb-2'>
            <Gift className='w-6 h-6 mr-2 animate-pulse' />
            <span className='font-bold text-lg'>OFERTA ESPECIAL!</span>
          </div>

          <p className='text-sm mb-3 leading-relaxed'>
            <strong>Instalação 100% GRATUITA</strong> em todos os planos!
            Economize até R$ 200,00.
          </p>

          <Button
            className='w-full bg-white text-[#fc842b] hover:bg-gray-100 font-bold text-sm py-2 shadow-lg rounded-2xl'
            onClick={() => {
              document
                .getElementById('planos')
                ?.scrollIntoView({ behavior: 'smooth' });
              setIsVisible(false);
            }}
          >
            Ver Planos Agora!
          </Button>
        </div>
      </div>
    </div>
  );
}
