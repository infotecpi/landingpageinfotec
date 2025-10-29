import { Gift, Wifi, Headphones, Clock, Zap } from 'lucide-react';

export default function FreeBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Velocidade Real',
      description:
        'Fibra óptica com velocidade garantida. Navegue, trabalhe e se divirta sem travamentos.',
      highlight: 'Até 800Mb',
    },
    {
      icon: Wifi,
      title: 'Conexão Estável',
      description: 'Tecnologia de ponta para máxima estabilidade e qualidade de sinal.',
      highlight: '99,9%',
    },
    {
      icon: Headphones,
      title: 'Suporte Especializado',
      description:
        'Atendimento técnico qualificado disponível 24 horas por dia.',
      highlight: '24/7',
    },
    {
      icon: Gift,
      title: 'Tudo Incluso',
      description:
        'Instalação, equipamentos e configuração. Sem taxas extras ou surpresas.',
      highlight: 'Incluso',
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-10 w-40 h-40 bg-[#0092e5] rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-32 h-32 bg-[#fc842b] rounded-full blur-2xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-400 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-bold mb-6 bg-gradient-to-r from-[#0092e5] via-[#0078bd] to-[#005a94] bg-clip-text text-transparent'>
            Por que escolher a INFO-TEC?
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Tecnologia de ponta, velocidade real e suporte especializado.
            <span className='font-bold text-[#fc842b]'>
              {' '}
              Tudo incluído, sem surpresas!
            </span>
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className='bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 relative overflow-hidden group'
              >
                {/* Card background decoration */}
                <div className='absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                <div className='relative z-10'>
                  <div className='bg-gradient-to-br from-[#0092e5] to-[#0078bd] rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300'>
                    <IconComponent className='w-8 h-8 text-white' />
                  </div>

                  <div className='text-right mb-4'>
                    <span className='bg-gradient-to-r from-[#0092e5] to-[#0078bd] text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg'>
                      {benefit.highlight}
                    </span>
                  </div>

                  <h3 className='text-xl font-bold text-gray-800 mb-3'>
                    {benefit.title}
                  </h3>

                  <p className='text-gray-600 leading-relaxed'>
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-[#fc842b] to-[#e07525] rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden'>
            <div className='absolute inset-0 opacity-20'>
              <div className='absolute top-4 right-4 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse'></div>
              <div className='absolute bottom-4 left-4 w-20 h-20 bg-white rounded-full blur-xl animate-pulse delay-1000'></div>
            </div>
            <div className='relative z-10'>
              <h3 className='text-3xl font-bold text-white mb-4'>
                Pronto para ter a internet mais rápida da região?
              </h3>
              <p className='text-xl text-white opacity-90 mb-6'>
                Não perca tempo! Contrate agora e tenha velocidade real com instalação inclusa.
              </p>
              <div className='flex flex-wrap justify-center gap-4'>
                <button className='bg-white text-[#fc842b] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200'>
                  Contratar Agora
                </button>
                <button className='border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#fc842b] transition-all duration-200'>
                  Falar no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
