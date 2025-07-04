'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Vocês cobrem eventos?',
      answer:
        'Sim! Oferecemos cobertura para eventos de todos os tamanhos, desde pequenas festas até grandes shows e festivais. Nossa equipe técnica está preparada para garantir uma conexão estável e de alta qualidade durante todo o evento.',
    },
    {
      question: 'Quais são as formas de pagamento disponíveis?',
      answer:
        'Aceitamos diversas formas de pagamento: cartão de crédito, débito automático, boleto bancário e PIX. Para facilitar, recomendamos o débito automático para evitar atrasos e garantir que seu serviço não seja interrompido.',
    },
    {
      question: 'Há taxa de instalação?',
      answer:
        'Não! A instalação é gratuita para todos os nossos planos. Nossa equipe técnica realiza a instalação de forma rápida e eficiente, sem custo adicional.',
    },
    {
      question: 'Qual a diferença entre fibra óptica e internet via rádio?',
      answer:
        'A fibra óptica oferece maior estabilidade e velocidade, sendo nossa tecnologia principal. A internet via rádio é disponibilizada apenas para localidades que ainda não possuem cobertura de fibra óptica, garantindo que todos tenham acesso à internet de qualidade.',
    },
    {
      question: 'O que está incluído no plano?',
      answer:
        'Todos os nossos planos incluem: instalação, equipamentos em comodato (modem/roteador Wi-Fi) e suporte técnico 24/7.',
    },
    {
      question: 'Como funciona o suporte técnico?',
      answer:
        'Nosso suporte técnico funciona de segunda a sábado das 8h às 19h, e aos domingos das 8h às 12h. Você pode entrar em contato por telefone ou WhatsApp. Nossa equipe está sempre pronta para ajudar com qualquer problema ou dúvida que você tenha.',
    },
    {
      question: 'Há limite de dados nos planos?',
      answer:
        'Não! Todos os nossos planos são ilimitados. Você pode navegar, assistir vídeos, jogar online e fazer downloads sem se preocupar com limites de dados.',
    },
    {
      question: 'O que fazer se minha internet estiver lenta?',
      answer:
        'Primeiro, reinicie seu modem/roteador. Se o problema persistir, entre em contato com nosso suporte técnico. Realizamos testes remotos e, se necessário, enviamos um técnico para verificar a instalação.',
    },
  ];

  return (
    <section id='faq' className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-4'>
            <HelpCircle className='h-8 w-8 text-[#0092e5] mr-2' />
            <h2 className='text-3xl font-bold'>Perguntas Frequentes</h2>
          </div>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Tire suas dúvidas sobre nossos serviços. Se não encontrar a resposta
            que procura, entre em contato conosco.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='bg-gradient-to-r from-[#0092e5] to-[#0078bd] p-6'>
              <h3 className='text-xl font-bold text-white'>
                Dúvidas Mais Comuns
              </h3>
            </div>
            <div className='p-6'>
              <Accordion type='single' collapsible className='w-full'>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className='text-left hover:text-[#0092e5] transition-colors'>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className='text-gray-600 leading-relaxed'>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className='mt-8 text-center'>
            <div className='bg-gradient-to-r from-[#fc842b] to-[#e07525] p-6 rounded-lg text-white'>
              <h3 className='text-xl font-bold mb-2'>Ainda tem dúvidas?</h3>
              <p className='mb-4'>Nossa equipe está pronta para ajudar você!</p>
              <div className='flex flex-wrap justify-center gap-4'>
                <a
                  href='tel:89994578337'
                  className='bg-white text-[#fc842b] px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors'
                >
                  Ligar Agora
                </a>
                <a
                  href='mailto:cavalcante@infotecpi.com.br'
                  className='bg-white text-[#fc842b] px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors'
                >
                  Enviar E-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
