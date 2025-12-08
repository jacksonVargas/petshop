export function Form() {
  return (
    <form className='w-full p-7 border border-slate-100 shadow-sm rounded-lg grid grid-cols-1 gap-3'>
      <strong className='text-lg'>Envie uma mensagem</strong>

      <input 
        type='text'
        placeholder='Seu nome'
        required
        className='w-full py-3 px-3 rounded-lg border border-slate-300 text-sm text-zinc-500 placeholder:text-zinc-500 focus:outline-orange-300'
      />

      <input 
        type='email'
        placeholder='Seu email'
        required
        className='w-full py-3 px-3 rounded-lg border border-slate-300 text-sm text-zinc-500 placeholder:text-zinc-500 focus:outline-orange-300'
      />

      <input 
        type='number'
        placeholder='Seu telefone'
        required
        className='w-full py-3 px-3 rounded-lg border border-slate-300 text-sm text-zinc-500 placeholder:text-zinc-500 focus:outline-orange-300'
      />

      <textarea 
        placeholder='Sua mensagem'
        required
        className='resize-none h-30 w-full py-3 px-3 rounded-lg border border-slate-300 text-sm text-zinc-500 placeholder:text-zinc-500 focus:outline-orange-300'
      />

      <button className='w-full py-3 bg-orange-500 text-white rounded-lg cursor-pointer transition-all duration-300 hover:scale-102'>
        Enviar Mensagem
      </button>
    </form>
  )
}