import Image from 'next/image'
import imageAbout from '@/assets/img-about.jpg'
import { ItemsAbout } from '@/types'
import { Medal, User, Heart } from 'lucide-react'

export function About() {
  const items: ItemsAbout[] = [
    {
      icon: <Medal size={20} color={'orange'} />,
      title: 'Qualidade Garantida',
      description: 'Trabalhamos apenas com as melhores marcas e produtos do mercado.'
    },
    {
      icon: <User size={20} color={'green'} />,
      title: 'Equipe Especializada',
      description: 'Profissionais apaixonados e treinados para cuidar do seu pet.'
    },
    {
      icon: <Heart size={20} color={'red'} />,
      title: 'Amor em Cada Detalhe',
      description: 'Tratamos cada pet como se fosse nosso, com carinho e dedicação.'
    }
  ]

  return (
    <main className='w-full px-5 bg-slate-100'>
      <section id='about' className='max-w-6xl mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* imagem sobre */}
        <div>
          <Image
            src={imageAbout}
            alt='Imagem sobre'
            priority
            quality={100}
            className='w-full h-full object-cover rounded-lg'
          />
        </div>

        {/* texto sobre */}
        <div className='flex flex-col gap-3'>
          <span className='uppercase text-sm text-orange-500 font-semibold'>Sobre Nós</span>

          <h3 className='text-3xl lg:text-4xl font-semibold'>
            Há 15 anos cuidando de quem você ama
          </h3>

          <p className='text-md text-zinc-600'>
            O PetLove nasceu do amor pelos animais. Nossa missão é proporcionar o melhor atendimento, produtos de qualidade e serviços
            especializados para que seu pet tenha uma vida feliz e saudável.
          </p>

          <div className='grid grid-cols-1 gap-5 mt-5'>
            {items.map((item, index) => (
              <div
                key={index}
                className='w-full flex gap-4'
              >
                <span className='w-15 h-12 rounded-lg bg-orange-100 text-white flex justify-center items-center'>{item.icon}</span>

                <div className='flex flex-col gap-1'>
                  <strong className='text-md'>{item.title}</strong>
                  <p className='text-sm text-zinc-600'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}