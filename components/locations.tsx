import { MapPin } from 'lucide-react';

export default function Locations() {
  const locations = [
    'Francisco Ayres',
    'Arraial',
    'Tocuns - Zona Rural',
    'Vereda - Zona Rural',
    'Sacos dos Mel - Zona Rural',
    'Limoeiro - Zona Rural',
    'Monte Santo - Zona Rural',
    'Campo de Bola - Zona Rural',
    'Piripiri - Zona Rural',
    'Assentamento Boa Fé - Zona Rural',
    'Estrelinha - Zona Rural',
  ];

  return (
    <section id='onde-atendemos' className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Onde Atendemos</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Estamos presentes em diversas localidades para levar internet de
            qualidade para você.
          </p>
        </div>

        <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='bg-[#0092e5] p-6'>
            <h3 className='text-xl font-bold text-white flex items-center'>
              <MapPin className='mr-2' /> Nossas Áreas de Cobertura
            </h3>
          </div>
          <div className='p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {locations.map((location, index) => (
                <div
                  key={index}
                  className='flex items-center p-3 bg-gray-50 rounded-md'
                >
                  <MapPin className='h-5 w-5 text-[#0092e5] mr-2 flex-shrink-0' />
                  <span>{location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
