import Image from 'next/image'
import heroImage from '@/assets/img-hero.png'
import hero01 from '@/assets/img-hero01.jpg'
import hero02 from '@/assets/img-hero02.jpg'
import hero03 from '@/assets/img-hero03.jpg'

export function Hero() {
  return (
    <main className='w-full px-5 bg-orange-50'>
      <section id='hero' className='max-w-6xl mx-auto py-20 min-h-screen flex justify-center items-center gap-8'>
        {/* texto da hero */}
        <div className='flex flex-col items-center text-center md:items-start md:text-start md:flex-1 gap-5'>
          <span className='cursor-default bg-orange-200 text-orange-700 font-semibold uppercase py-2 px-3 rounded-full text-xs'>
            Cuidado Premium para seu Pet
          </span>

          <h3 className='text-4xl lg:text-5xl font-semibold'>
            A felicidade do seu pet é a nossa <span className='text-orange-500'>prioridade.</span>
          </h3>

          <p className='text-md text-zinc-600'>
            Oferecemos serviços veterinários, banho e tosa de luxo e os melhores produtos do mercado. Seu melhor amigo merece o melhor tratamento.
          </p>

          {/* buttons links */}
          <div className='w-full flex flex-col md:flex-row justify-center md:justify-start gap-3'>
            <a
              href="#"
              target='_blank'
              className='md:w-fit transition-all duration-300 hover:shadow-md hover:-translate-y-1 w-full bg-orange-500 text-white shadow-sm py-3 px-5 rounded-full'
            >
              Agendar Horário
            </a>

            <a
              href="#services"
              className='md:w-fit transition-all duration-300 hover:shadow-md hover:-translate-y-1 w-full bg-white text-zinc-600 shadow-sm py-3 px-5 rounded-full'
            >
              Ver Serviços
            </a>
          </div>

          {/* icone e span */}
          <div className='flex items-center gap-2 mt-5'>
            <div className='flex items-center -space-x-2'>
              <Image
                src={hero01}
                alt='imagem hero'
                className='w-8 h-8 rounded-full border-2 border-white'
              />

              <Image
                src={hero02}
                alt='imagem hero'
                className='w-8 h-8 rounded-full border-2 border-white'
              />

              <Image
                src={hero03}
                alt='imagem hero'
                className='w-8 h-8 rounded-full border-2 border-white'
              />
            </div>

            <span className='text-xs text-zinc-600'>+2.000 Pets atendidos com amor</span>
          </div>
        </div>

        {/* imagem hero */}
        <div className='flex-1 max-md:hidden'>
          <Image
            src={heroImage}
            alt='imagem principal hero'
            width={500}
            height={500}
            priority
            quality={100}
            className='rounded-lg object-cover rotate-2 transition-all duration-300 hover:rotate-0'
          />
        </div>
      </section>
    </main>
  )
}