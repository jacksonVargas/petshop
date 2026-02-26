import { Title } from '@/components/title'
import { Map } from '@/components/map'
import { CardContact } from '@/types'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Contact() {
  const cards: CardContact[] = [
    {
      icon: <MapPin size={23} />,
      title: 'Endereço',
      span01: 'Rua dos Pets, 123 - Centro',
      span02: 'São Paulo - SP, 01234-567'
    },
    {
      icon: <Phone size={23} />,
      title: 'Telefone',
      span01: '(11) 98765-4321',
      span02: '(11) 3456-7890'
    },
    {
      icon: <Mail size={23} />,
      title: 'Email',
      span01: 'contato@petlove.com.br',
      span02: 'atendimento@petlove.com.br'
    },
    {
      icon: <Clock size={23} />,
      title: 'Horário',
      span01: 'Segunda a Sexta: 8h às 19h',
      span02: 'Sábado: 8h às 17h',
      span03: 'Domingo: 9h às 13h'
    }
  ]

  return (
    <main className='w-full px-5 bg-white'>
      <section id='contact' className='max-w-6xl mx-auto py-20 grid grid-cols-1'>
        <Title
          span='Contato'
          title='Entre em contato conosco'
          description='Estamos sempre prontos para atender você e seu pet. Entre em contato por qualquer um dos nossos canais.'
        />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='grid grid-cols-1 gap-3'>
            {cards.map((card, index) => (
              <div
                key={index}
                className='flex gap-4 border border-slate-100 shadow-sm p-7 rounded-lg cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
              >
                <span className='w-11 h-11 rounded-lg bg-orange-300 text-white flex justify-center items-center'>{card.icon}</span>

                <div>
                  <strong className='text-md'>{card.title}</strong>
                  <p className='text-zinc-600 text-sm'>{card.span01}</p>
                  <p className='text-zinc-600 text-sm'>{card.span02}</p>
                  <p className='text-zinc-600 text-sm'>{card.span03}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <Map />
          </div>
        </div>
      </section>
    </main>
  )
}