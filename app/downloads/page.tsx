import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FileDown } from 'lucide-react';
import Link from 'next/link';

export default function Downloads() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow container mx-auto px-4 py-12'>
        <h1 className='text-3xl font-bold text-center mb-12'>Downloads</h1>

        <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          <div className='bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#0092e5]'>
            <h2 className='text-xl font-bold mb-4'>
              Certidão de Registro Contrato de Comodato de Equipamentos
            </h2>
            <p className='text-gray-600 mb-6'>
              Baixe o contrato de comodato de equipamentos para conhecer os
              termos e condições.
            </p>
            <Link
              href='https://drive.google.com/file/d/1Ljuv0AbqRdVB-YRUID1lYOKlGPE_IshG/view'
              className='flex items-center gap-2 bg-[#0092e5] text-white px-4 py-2 rounded-md hover:bg-[#0078bd] transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FileDown size={20} />
              <span>Baixar Documento</span>
            </Link>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#fc842b]'>
            <h2 className='text-xl font-bold mb-4'>
              Certidão de Registro Contrato de Prestação de Serviços de
              Telecomunicações
            </h2>
            <p className='text-gray-600 mb-6'>
              Baixe o contrato de prestação de serviços para conhecer os termos
              e condições.
            </p>
            <Link
              href='https://drive.google.com/file/d/1Onp8X90qrQSjriWE_bddOIyEEGgpYHB4/view'
              className='flex items-center gap-2 bg-[#fc842b] text-white px-4 py-2 rounded-md hover:bg-[#e07525] transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FileDown size={20} />
              <span>Baixar Documento</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
