'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <img
              src='/images/mascote-infotec.png'
              alt='Mascote INFO-TEC'
              className='h-10 w-10 mr-2'
            />
            <span className='ml-2 text-xl font-bold text-[#0092e5]'>
              INFO-TEC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-4'>
            <Link
              href='/#planos'
              className='text-gray-700 hover:text-[#0092e5] px-3 py-2 rounded-md text-sm font-medium'
            >
              Nossos Planos
            </Link>
            <Link
              href='/#onde-atendemos'
              className='text-gray-700 hover:text-[#0092e5] px-3 py-2 rounded-md text-sm font-medium'
            >
              Onde Atendemos
            </Link>
            <Link
              href='/#quem-somos'
              className='text-gray-700 hover:text-[#0092e5] px-3 py-2 rounded-md text-sm font-medium'
            >
              Quem Somos
            </Link>
            <Link
              href='/#faq'
              className='text-gray-700 hover:text-[#0092e5] px-3 py-2 rounded-md text-sm font-medium'
            >
              FAQ
            </Link>
            <Link
              href='/downloads'
              className='text-gray-700 hover:text-[#0092e5] px-3 py-2 rounded-md text-sm font-medium'
            >
              Downloads
            </Link>
            <Link
              href='https://api.whatsapp.com/send/?phone=%2B5589994578337&text=Ol%C3%A1%2C+Tudo+Bem%3F+Estou+com+problemas+na+internet&type=phone_number&app_absent=0'
              className='text-gray-700 hover:text-[#0092e5] px-3 py-2 rounded-md text-sm font-medium'
            >
              Está Sem Conexão?
            </Link>
            <Button
              className='bg-[#fc842b] hover:bg-[#e07525] ml-4'
              onClick={() =>
                (window.location.href =
                  'https://ixc.infotecpi.com.br/central_assinante_web/login')
              }
            >
              Área do Cliente
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#0092e5] focus:outline-none'
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Link
                href='/#planos'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0092e5]'
                onClick={toggleMenu}
              >
                Nossos Planos
              </Link>
              <Link
                href='/#onde-atendemos'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0092e5]'
                onClick={toggleMenu}
              >
                Onde Atendemos
              </Link>
              <Link
                href='/#quem-somos'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0092e5]'
                onClick={toggleMenu}
              >
                Quem Somos
              </Link>
              <Link
                href='/#faq'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0092e5]'
                onClick={toggleMenu}
              >
                FAQ
              </Link>
              <Link
                href='/downloads'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0092e5]'
                onClick={toggleMenu}
              >
                Downloads
              </Link>
              <Link
                href='https://api.whatsapp.com/send/?phone=%2B5589994578337&text=Ol%C3%A1%2C+Tudo+Bem%3F+Estou+com+problemas+na+internet&type=phone_number&app_absent=0'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0092e5]'
                onClick={toggleMenu}
              >
                Está Sem Conexão?
              </Link>
              <div className='pt-2'>
                <Button
                  className='w-full bg-[#fc842b] hover:bg-[#e07525]'
                  onClick={() =>
                    (window.location.href =
                      'https://ixc.infotecpi.com.br/central_assinante_web/login')
                  }
                >
                  Área do Cliente
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
