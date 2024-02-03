const GananciasComponent = ({ gananciasTotales, perdidasTotales }) => {
  return (
    gananciasTotales && (
      <article className='grid grid-cols-2 border border-black text-color-violeta py-8 rounded-lg md:text-xl md:col-span-2'>
        <ul className='text-center grid gap-2 items-center'>
          <li className='font-betonga font-bold  text-xl md:text-2xl'>Ganancias</li>
          <li className='font-bold'>$ {gananciasTotales}</li>
        </ul>
        <ul className='text-center grid gap-2 items-center'>
          <li className='font-betonga font-bold  text-xl md:text-2xl'>Perdidas</li>
          <li className='font-bold'>$ {perdidasTotales}</li>
        </ul>
      </article>
    )
  )
}

export default GananciasComponent
