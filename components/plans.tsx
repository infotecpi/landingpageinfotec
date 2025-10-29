import { Button } from '@/components/ui/button';
import { Check, Zap, Gift } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      name: 'Básico',
      speed: '500Mb',
      price: '89,99',
      color: '#0092e5',
      features: [
        'Velocidade de 500 Mbps',
        'Suporte técnico 24/7',
        'Wi-Fi de alta performance',
        'Sem taxa de ativação',
        'Equipamentos inclusos',
      ],
    },
    {
      name: 'Padrão',
      speed: '700Mb',
      price: '99,99',
      color: '#0092e5',
      popular: true,
      features: [
        'Velocidade de 700 Mbps',
        'Suporte técnico 24/7',
        'Wi-Fi de alta performance',
        'Sem taxa de ativação',
        'Equipamentos inclusos',
      ],
    },
    {
      name: 'Premium',
      speed: '800Mb',
      price: '149,99',
      color: '#fc842b',
      features: [
        'Velocidade de 800 Mbps',
        'Suporte técnico 24/7',
        'Wi-Fi de alta performance',
        'Sem taxa de ativação',
        'Equipamentos inclusos',
      ],
    },
  ];

  return (
    <section id='planos' className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-[#0092e5] to-[#0078bd] bg-clip-text text-transparent'>
            Escolha Seu Plano Ideal
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Velocidade real de fibra óptica para todas as suas necessidades.
            <span className='font-bold text-[#fc842b]'>
              {' '}
              Instalação e equipamentos inclusos
            </span>{' '}
            em todos os planos.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular
                  ? 'ring-4 ring-[#fc842b] md:-translate-y-4 shadow-2xl z-50'
                  : 'hover:ring-2 hover:ring-[#0092e5] z-20'
              }`}
            >
              {plan.popular && (
                <div className='bg-gradient-to-r from-[#fc842b] to-[#e07525] text-white text-sm font-bold px-4 py-2 absolute right-0 top-0 rounded-bl-2xl shadow-lg z-50'>
                  MAIS POPULAR
                </div>
              )}

              <div
                className='p-8 relative overflow-hidden'
                style={{
                  background: `linear-gradient(135deg, ${plan.color} 0%, ${plan.color}dd 100%)`,
                }}
              >
                {/* Background decoration */}
                <div className='absolute inset-0 opacity-10'>
                  <div className='absolute top-2 right-2 w-16 h-16 bg-white rounded-full blur-xl'></div>
                  <div className='absolute bottom-2 left-2 w-12 h-12 bg-white rounded-full blur-lg'></div>
                </div>

                <div className='relative z-30'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {plan.name}
                  </h3>
                  <div className='flex items-baseline mb-4'>
                    <span className='text-5xl font-extrabold text-white'>
                      {plan.speed}
                    </span>
                    <Zap className='ml-2 h-8 w-8 text-yellow-300 animate-pulse' />
                  </div>
                  <div className='flex items-baseline'>
                    <span className='text-2xl font-medium text-white'>R$</span>
                    <span className='text-5xl font-extrabold text-white'>
                      {plan.price}
                    </span>
                    <span className='ml-2 text-xl font-medium text-white opacity-80'>
                      /mês
                    </span>
                  </div>
                  <div className='mt-3 text-sm text-white opacity-90 font-medium'>
                    Instalação e equipamentos inclusos
                  </div>
                </div>
              </div>

              <div className='p-8'>
                <ul className='space-y-4 mb-8'>
                  <li className='flex items-start'>
                    <div className='bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0'>
                      <Zap className='h-4 w-4 text-blue-600' />
                    </div>
                    <span className='text-gray-700 font-medium'>
                      Velocidade real garantida
                    </span>
                  </li>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5' />
                      <span className='text-gray-600'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#fc842b] to-[#e07525] hover:from-[#e07525] hover:to-[#d06620] text-white'
                      : 'bg-gradient-to-r from-[#0092e5] to-[#0078bd] hover:from-[#0078bd] hover:to-[#005a94] text-white'
                  }`}
                >
                  Garantir Este Plano
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto border border-gray-100'>
          <h3 className='text-2xl font-bold mb-6 text-center text-gray-800'>
            Informações Adicionais
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            <ul className='space-y-4 text-gray-600'>
              <li className='flex items-start'>
                <div className='bg-[#0092e5] rounded-full p-1 mr-3 flex-shrink-0'>
                  <Zap className='h-4 w-4 text-white' />
                </div>
                <span>
                  Velocidade real de{' '}
                  <b className='text-[#0092e5]'>fibra óptica</b>
                </span>
              </li>
              <li className='flex items-start'>
                <Check className='h-5 w-5 text-[#0092e5] mr-3 flex-shrink-0 mt-0.5' />
                <span>12 meses de fidelidade para todos os planos</span>
              </li>
              <li className='flex items-start'>
                <Check className='h-5 w-5 text-[#0092e5] mr-3 flex-shrink-0 mt-0.5' />
                <span>Desconto de R$ 4,00 para pagamento em dia</span>
              </li>
            </ul>
            <ul className='space-y-4 text-gray-600'>
              <li className='flex items-start'>
                <Check className='h-5 w-5 text-[#0092e5] mr-3 flex-shrink-0 mt-0.5' />
                <span>Equipamentos em comodato inclusos</span>
              </li>
              <li className='flex items-start'>
                <Check className='h-5 w-5 text-[#0092e5] mr-3 flex-shrink-0 mt-0.5' />
                <span>
                  Internet à rádio apenas para localidades sem fibra óptica
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
