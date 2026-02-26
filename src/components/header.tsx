'use client'

import { useState, useRef, useEffect } from 'react'
import { PawPrint, Menu, X } from 'lucide-react'
import { MenuLinks } from '@/types'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen])

  const links: MenuLinks[] = [
    {
      name: 'Início',
      href: '#hero'
    },
    {
      name: 'Serviços',
      href: '#services'
    },
    {
      name: 'Sobre',
      href: '#about'
    },
    {
      name: 'Contato',
      href: '#contact'
    }
  ]

  return (
    <>
      <header className='w-full px-5 sticky top-0 z-1 bg-white/70 backdrop-blur-md shadow-sm'>
        <nav className='max-w-6xl mx-auto h-13 flex justify-between items-center'>
          {/* logo */}
          <a href="#hero" className='flex items-center gap-1 transition-all duration-300 hover:scale-103'>
            <span className='w-10 h-10 rounded-full bg-amber-500 flex justify-center items-center text-white'><PawPrint /></span>
            <span className='text-2xl font-semibold'>PetLove</span>
          </a>

          {/* button mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden cursor-pointer hover:text-amber-500'
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* menu desktop */}
          <ul className='max-md:hidden flex items-center gap-8'>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className='w-fit text-md text-zinc-600 hover:text-amber-500'
              >
                {link.name}
              </a>
            ))}
          </ul>

          <a
            href="#"
            target='_blank'
            className='max-md:hidden flex items-center gap-2 py-2 px-5 bg-amber-500 text-white rounded transition-all duration-300 hover:scale-103'
          >
            Agendar Horário
          </a>
        </nav>
      </header>

      {/* menu mobile */}
      {isOpen && (
        <div ref={menuRef} className='md:hidden w-full max-w-5xl mx-auto fixed z-1 bg-white shadow-sm p-5 rounded flex flex-col gap-8'>
          {links.map((link, index) => (
            <a
              onClick={() => setIsOpen(!isOpen)}
              key={index}
              href={link.href}
              className='w-fit text-md text-zinc-600 hover:text-amber-500'
            >
              {link.name}
            </a>
          ))}

          <a
            href="#"
            target='_blank'
            className='w-fit flex items-center gap-2 py-2 px-5 bg-amber-500 text-white rounded transition-all duration-300 hover:scale-103'
          >
            Agendar Horário
          </a>
        </div>
      )}
    </>
  )
}