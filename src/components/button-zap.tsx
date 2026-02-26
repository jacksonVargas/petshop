import { FaWhatsapp } from 'react-icons/fa'

export function ButtonZap() {
  return (
    <a
      href='#'
      target='_blank'
      className='transition-all duration-300 hover:scale-103 fixed z-99 right-5 bottom-10 w-13 h-13 rounded-full bg-amber-500 text-white flex justify-center items-center'
    >
      <FaWhatsapp size={25} />
    </a>
  )
}
