import { Button } from '@/components/ui/button';
import { Check, Zap } from 'lucide-react';

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
      ],
    },
  ];

  return (
    <section id='planos' className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Nossos Planos</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Escolha o plano ideal para você. Todos os planos incluem instalação
            e equipamentos em comodato.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${
                plan.popular
                  ? 'ring-2 ring-[#fc842b] transform md:-translate-y-2'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className='bg-[#fc842b] text-white text-xs font-bold px-3 py-1 absolute right-0 top-0 rounded-bl-lg'>
                  MAIS POPULAR
                </div>
              )}
              <div
                className='p-6 border-b'
                style={{ backgroundColor: plan.color }}
              >
                <h3 className='text-xl font-bold text-white'>{plan.name}</h3>
                <div className='mt-4 flex items-baseline'>
                  <span className='text-4xl font-extrabold text-white'>
                    {plan.speed}
                  </span>
                  <Zap className='ml-2 h-6 w-6 text-white' />
                </div>
                <div className='mt-4 flex items-baseline'>
                  <span className='text-2xl font-medium text-white'>R$</span>
                  <span className='text-4xl font-extrabold text-white'>
                    {plan.price}
                  </span>
                  <span className='ml-1 text-xl font-medium text-white opacity-80'>
                    /mês
                  </span>
                </div>
              </div>
              <div className='p-6'>
                <ul className='space-y-3'>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0' />
                      <span className='text-gray-600'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className='w-full mt-6'
                  style={{
                    backgroundColor: plan.color,
                    color: 'white',
                    ':hover': { backgroundColor: plan.color, opacity: 0.9 },
                  }}
                >
                  Contratar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto'>
          <h3 className='text-xl font-bold mb-4'>Informações Adicionais</h3>
          <ul className='space-y-2 text-gray-600'>
            <li className='flex items-start'>
              <Check className='h-5 w-5 text-[#0092e5] mr-2 flex-shrink-0' />
              <span>
                Instalação <b>totalmente gratuita</b>!
              </span>
            </li>
            <li className='flex items-start'>
              <Check className='h-5 w-5 text-[#0092e5] mr-2 flex-shrink-0' />
              <span>12 meses de fidelidade para todos os planos</span>
            </li>
            <li className='flex items-start'>
              <Check className='h-5 w-5 text-[#0092e5] mr-2 flex-shrink-0' />
              <span>
                A internet à rádio é apenas para localidades que ainda não
                possuem fibra óptica
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
