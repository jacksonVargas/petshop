import { Title } from '@/components/title'
import { CardServices } from '@/types'
import { Scissors, Stethoscope, House, GraduationCap, HeartPulse, Sparkles } from 'lucide-react'

export function Services() {
  const cards: CardServices[] = [
    {
      icon: <Scissors size={25} />,
      title: 'Banho & Tosa',
      description: 'Estética completa com produtos hipoalergênicos e profissionais carinhosos.',
      price: 'A partir de R$ 50'
    },
    {
      icon: <Stethoscope size={25} />,
      title: 'Clínica Veterinária',
      description: 'Consultas, vacinas e exames com equipamentos de última geração.',
      price: 'A partir de R$ 120'
    },
    {
      icon: <House size={25} />,
      title: 'Hotelzinho',
      description: 'Um lar longe de casa. Monitoramento 24h e muita diversão.',
      price: 'A partir de R$ 80/dia'
    },
    {
      icon: <GraduationCap size={25} />,
      title: 'Adestramento',
      description: 'Aulas de comportamento para filhotes e adultos. Reforço positivo.',
      price: 'A partir de R$ 100/aula'
    },
    {
      icon: <HeartPulse size={25} />,
      title: 'Check-up Preventivo',
      description: 'Mantenha a saúde do seu pet em dia com exames periódicos.',
      price: 'A partir de R$ 200'
    },
    {
      icon: <Sparkles size={25} />,
      title: 'Day Care',
      description: 'Creche para seu pet gastar energia e socializar durante o dia.',
      price: 'A partir de R$ 60/dia'
    }
  ]

  return (
    <main className='w-full px-5 bg-white'>
      <section id='services' className='max-w-6xl mx-auto py-20'>
        <Title 
          span='Nossos Serviços' 
          title='Tudo que seu pet precisa' 
          description='Profissionais qualificados e apaixonados por animais prontos para atender com excelência.'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {cards.map((card, index) => (
            <div 
              key={index}
              className='transition-all duration-300 hover:shadow-lg w-full p-7 bg-white shadow-sm rounded-lg border border-slate-100 cursor-default flex flex-col gap-4'
            >
              <span className='w-13 h-13 rounded-lg bg-orange-500 text-white shadow-md flex justify-center items-center'>{card.icon}</span>
              <strong className='text-lg'>{card.title}</strong>
              <p className='text-sm text-zinc-600'>{card.description}</p>
              <p className='py-1 px-5 rounded-full bg-orange-100 text-orange-500 w-fit text-xs font-semibold'>{card.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}