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
      question: 'Qual a velocidade real da internet fibra óptica da INFO-TEC?',
      answer:
        'Nossa internet fibra óptica oferece velocidade real garantida de 500 Mbps, 700 Mbps ou 800 Mbps, dependendo do plano escolhido. A velocidade é simétrica (mesma velocidade para download e upload) e estável 24 horas por dia.',
    },
    {
      question: 'Há taxa de instalação da internet fibra óptica?',
      answer:
        'Não! A instalação é 100% gratuita para todos os nossos planos de internet fibra óptica. Nossa equipe técnica especializada realiza a instalação de forma rápida e profissional, sem nenhum custo adicional.',
    },
    {
      question: 'Qual a diferença entre fibra óptica e internet via rádio?',
      answer:
        'A fibra óptica oferece muito maior estabilidade, velocidade e qualidade de conexão. É nossa tecnologia principal em Francisco Ayres, Arraial e região. A internet via rádio é disponibilizada apenas para localidades rurais que ainda não possuem cobertura de fibra óptica.',
    },
    {
      question: 'O que está incluído nos planos de internet?',
      answer:
        'Todos os nossos planos incluem: instalação gratuita, equipamentos em comodato (ONU e roteador Wi-Fi), suporte técnico especializado, velocidade real garantida e internet ilimitada sem franquia de dados.',
    },
    {
      question: 'Como funciona o suporte técnico da INFO-TEC?',
      answer:
        'Nosso suporte técnico funciona de segunda a sábado das 8h às 19h, e aos domingos das 8h às 12h. Atendimento via telefone (89) 99457-8337 ou WhatsApp. Temos técnicos locais em Francisco Ayres, Arraial e região para atendimento rápido.',
    },
    {
      question: 'Os planos de internet têm limite de dados?',
      answer:
        'Não! Todos os nossos planos são 100% ilimitados. Você pode navegar, assistir vídeos em 4K, jogar online, fazer videoconferências e downloads sem se preocupar com limites de dados ou redução de velocidade.',
    },
    {
      question: 'O que fazer se a internet fibra óptica estiver lenta?',
      answer:
        'Primeiro, reinicie seu roteador desligando por 30 segundos. Verifique se há muitos dispositivos conectados. Se o problema persistir, entre em contato com nosso suporte técnico pelo (89) 99457-8337. Realizamos testes remotos e, se necessário, enviamos um técnico no mesmo dia.',
    },
    {
      question: 'Quanto custa a internet fibra óptica em Francisco Ayres?',
      answer:
        'Nossos planos começam em R$ 89,99 (500 Mbps), R$ 99,99 (700 Mbps) e R$ 149,99 (800 Mbps). Todos incluem instalação gratuita, equipamentos e suporte técnico. Oferecemos desconto de R$ 4,00 para pagamento em dia.',
    },
    {
      question: 'Vocês atendem eventos',
      answer:
        'Sim! Oferecemos cobertura especializada para eventos de todos os tamanhos. Nossa equipe técnica garante conexão estável e de alta qualidade durante todo o evento, com equipamentos profissionais.',
    },
  ];

  return (
    <section id='faq' className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-4'>
            <HelpCircle className='h-8 w-8 text-[#0092e5] mr-2' />
            <h2 className='text-3xl font-bold'>Perguntas Frequentes sobre Internet Fibra Óptica</h2>
          </div>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Tire suas dúvidas sobre nossos planos de internet fibra óptica, instalação, suporte técnico e cobertura em Francisco Ayres, Arraial e região. 
            Se não encontrar a resposta que procura, entre em contato conosco.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
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
            <div className='bg-gradient-to-r from-[#fc842b] to-[#e07525] p-6 rounded-2xl text-white'>
              <h3 className='text-xl font-bold mb-2'>Ainda tem dúvidas?</h3>
              <p className='mb-4'>Nossa equipe está pronta para ajudar você!</p>
              <div className='flex flex-wrap justify-center gap-4'>
                <a
                  href='tel:89994578337'
                  className='bg-white text-[#fc842b] px-6 py-2 rounded-2xl font-semibold hover:bg-gray-100 transition-colors'
                >
                  Ligar Agora
                </a>
                <a
                  href='mailto:cavalcante@infotecpi.com.br'
                  className='bg-white text-[#fc842b] px-6 py-2 rounded-2xl font-semibold hover:bg-gray-100 transition-colors'
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
