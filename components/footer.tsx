import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id='sem-conexao' className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div>
            <div className='flex items-center mb-4'>
              <img
                src='/images/info-tec-networks-logo.webp'
                alt='Logo INFO-TEC NETWORKS - Provedor de Internet'
                className='h-8 w-auto mr-2'
                loading='lazy'
              />
            </div>
            <p className='text-gray-400 mb-4'>
              Mais que produtos, vendemos soluções.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://www.instagram.com/_info.tec/'
                className='text-gray-400 hover:text-[#0092e5]'
                target='_blank'
                rel='noopener noreferrer'
                title='Instagram INFO-TEC NETWORKS'
              >
                <Instagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Contato</h3>
            <div className='space-y-3'>
              <div className='flex items-start'>
                <Phone className='h-5 w-5 text-[#0092e5] mr-2 flex-shrink-0' />
                <span className='text-gray-400'>(89) 994578337</span>
              </div>
              <div className='flex items-start'>
                <Mail className='h-5 w-5 text-[#0092e5] mr-2 flex-shrink-0' />
                <span className='text-gray-400'>
                  cavalcante@infotecpi.com.br
                </span>
              </div>
              <div className='flex items-start'>
                <MapPin className='h-5 w-5 text-[#0092e5] mr-2 flex-shrink-0' />
                <span className='text-gray-400'>
                  Francisco Ayres - PI, Rua Tito Ferreia, 420 - Bairro Centro
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Está Sem Conexão?</h3>
            <p className='text-gray-400 mb-4'>
              Se você está enfrentando problemas com sua conexão, entre em
              contato com nosso suporte técnico.
            </p>
            <div className='space-y-3'>
              <div className='flex items-center'>
                <Phone className='h-5 w-5 text-[#fc842b] mr-2 flex-shrink-0' />
                <span className='text-gray-400'>Suporte: (89) 994578337</span>
              </div>
              <div className='flex items-center'>
                <Mail className='h-5 w-5 text-[#fc842b] mr-2 flex-shrink-0' />
                <span className='text-gray-400'>
                  cavalcante@infotecpi.com.br
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
          <div className='mt-2 flex justify-center space-x-4'>
            <Link href='/downloads' className='hover:text-[#0092e5]'>
              Downloads
            </Link>
          </div>
          <p>R A Cavalcante Provedor de Internet</p>
          <p>CNPJ: 29.470.487/0001-58</p>
          <p>ATO DE AUTORIZAÇÃO - ANATEL 7679 de 13 de dezembro de 2020</p>

          <p>
            &copy; {new Date().getFullYear()} INFO-TEC NETWORKS. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
