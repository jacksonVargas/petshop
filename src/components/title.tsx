interface TitleProps {
  span: string,
  title: string,
  description: string
}

export function Title({ span, title, description }: TitleProps ) {
  return (
    <div className='flex flex-col gap-2 text-center mb-10'>
      <span className='uppercase text-xs text-orange-500 font-semibold'>{span}</span>
      <h3 className='text-3xl lg:text-4xl font-semibold'>{title}</h3>
      <p className='text-md text-zinc-600'>{description}</p>
    </div>
  )
}