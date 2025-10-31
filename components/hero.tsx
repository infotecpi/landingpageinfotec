'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Zap, Gift, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const locations = ['da região', 'de Francisco Ayres', 'de Arraial'];

  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [locations.length]);
  return (
    <section className='relative bg-gradient-to-br from-[#0092e5] via-[#0078bd] to-[#005a94] text-white py-16 md:py-24 overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-24 h-24 bg-[#fc842b] rounded-full blur-xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-lg animate-bounce delay-500'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div className='space-y-6'>
            <div className='inline-flex items-center bg-[#fc842b] text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce'>
              <Zap className='w-4 h-4 mr-2' />
              FIBRA ÓPTICA DE ALTA PERFORMANCE
            </div>

            <h1 className='text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>
              Internet Fibra Óptica Mais Rápida{' '}
              <span className='relative inline-block'>
                <span
                  className={`text-white bg-none transition-opacity duration-1000 ease-in-out ${
                    isAnimating ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {locations[currentLocationIndex]}
                </span>
              </span>
            </h1>

            <p className='text-lg md:text-xl opacity-90 leading-relaxed text-on-gradient'>
              Conectamos você ao mundo com a melhor tecnologia em fibra óptica.
              Velocidade real garantida, conexão ultra estável e
              <span className='font-semibold text-[#fc842b]'>
                {' '}
                planos a partir de R$ 89,99
              </span>{' '}
              com instalação gratuita e equipamentos inclusos!
            </p>

            {/* Benefits highlights */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-4'>
              <div className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl p-3'>
                <Zap className='w-5 h-5 text-yellow-300' />
                <span className='text-sm font-medium'>Até 800 Mbps</span>
              </div>
              <div className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl p-3'>
                <Shield className='w-5 h-5 text-green-300' />
                <span className='text-sm font-medium'>Conexão Estável</span>
              </div>
              <div className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl p-3'>
                <Gift className='w-5 h-5 text-[#fc842b]' />
                <span className='text-sm font-medium'>Instalação Inclusa</span>
              </div>
            </div>

            <div className='flex flex-wrap gap-4'>
              <Button
                size='lg'
                className='bg-[#fc842b] hover:bg-[#e07525] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:ring-custom rounded-2xl'
              >
                <Link href='#planos'>Escolher Meu Plano Ideal</Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='bg-white text-[#0092e5] hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:ring-custom rounded-2xl'
              >
                <Link href='#onde-atendemos'>
                  Consultar Disponibilidade na Minha Região
                </Link>
              </Button>
            </div>
          </div>
          <div className='hidden md:flex justify-center'>
            <div className='relative'>
              <div className='absolute -inset-4 rounded-full bg-white/20 animate-pulse'></div>
              <img
                src='/images/mascote-infotec.webp'
                alt='Mascote da INFO-TEC NETWORKS representando velocidade e qualidade da internet fibra óptica em Francisco Ayres, Arraial e região'
                className='h-64 w-64 object-contain'
                loading='eager'
                width='256'
                height='256'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className='absolute bottom-0 left-0 w-full overflow-hidden'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='w-full h-12 md:h-16'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.65,118.92,150.86,113.31,214.65,107.57Z'
            className='fill-white'
          ></path>
        </svg>
      </div>
    </section>
  );
}
