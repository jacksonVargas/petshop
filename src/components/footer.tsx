import { IconsFooter } from '@/types'
import { PawPrint, MapPin, Phone, Mail } from 'lucide-react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

export function Footer() {
  const icons: IconsFooter[] = [
    { 
      icon: <FaInstagram /> 
    },
    { 
      icon: <FaFacebook /> 
    }
  ]

  return (
    <footer className='w-full px-5 bg-orange-50'>
      <div className='max-w-6xl mx-auto py-10 grid grid-cols-1 gap-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {/* logo e redes sociais */}
          <div className='flex flex-col gap-3'>
            <a href="#hero" className='flex items-center gap-1'>
              <span className='w-10 h-10 rounded-full bg-amber-500 flex justify-center items-center text-white'><PawPrint /></span>
              <span className='text-2xl font-semibold'>PetLove</span>
            </a>

            <p className='text-zinc-600'>
              Cuidando do seu pet com amor e dedicação há mais de 15 anos.
            </p>

            {/* icons */}
            <div className='flex items-center gap-3'>
              {icons.map((icon, index) => (
                <a 
                  key={index}
                  href='#' 
                  className='w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-400 text-white flex justify-center items-center'
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>

          {/* links rápidos */}
          <div className='flex flex-col gap-3'>
            <strong>Links Rápidos</strong>

            <ul className='flex flex-col gap-3'>
              <a href="#hero" className='w-fit text-zinc-600 hover:text-orange-500'>Início</a>
              <a href="#services" className='w-fit text-zinc-600 hover:text-orange-500'>Serviços</a>
              <a href="#about" className='w-fit text-zinc-600 hover:text-orange-500'>Sobre</a>
              <a href="#contact" className='w-fit text-zinc-600 hover:text-orange-500'>Contato</a>
            </ul>
          </div>

          {/* serviços */}
          <div className='flex flex-col gap-3'>
            <strong>Serviços</strong>

            <ul className='flex flex-col gap-3'>
              <p className='text-zinc-600'>Banho & Tosa</p>
              <p className='text-zinc-600'>Veterinário</p>
              <p className='text-zinc-600'>Hotel Pet</p>
              <p className='text-zinc-600'>Adestramento</p>
              <p className='text-zinc-600'>Delivery</p>
            </ul>
          </div>

          {/* contato */}
          <div className='flex flex-col gap-3'>
            <strong>Contato</strong>

            <ul className='flex flex-col gap-3'>
              <span className='flex gap-3 text-zinc-600'><MapPin size={23} color={'orange'} /> Rua dos Pets, 123 - Centro, SP</span>
              <span className='flex gap-3 text-zinc-600'><Phone size={23} color={'orange'} /> (11) 98765-4321P</span>
              <span className='flex gap-3 text-zinc-600'><Mail size={23} color={'orange'} /> contato@petlove.com.br</span>
            </ul>
          </div>
        </div>

        <hr className='text-zinc-200' />

        <div className='text-center'>
          <p className='text-sm text-zinc-500'>&copy; 2025 PetLove. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}