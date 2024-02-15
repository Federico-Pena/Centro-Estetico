import { opcionesFormatPrecio } from '../../constantes.js'

const GananciasComponent = ({ gananciasTotales, perdidasTotales, pendientesTotales }) => {
  return (
    gananciasTotales && (
      <article className='grid grid-cols-2 border gap-2 border-black text-color-violeta py-8 rounded-lg md:text-xl md:col-span-2'>
        <ul className='text-center grid  items-center col-span-full'>
          <li className='font-betonga font-bold text-xl md:text-2xl '>Pagas</li>
          <li className='font-bold Pago m-auto p-2 rounded-xl text-white'>
            $ {gananciasTotales.toLocaleString(opcionesFormatPrecio)}
          </li>
        </ul>
        <ul className='text-center grid  items-center'>
          <li className='font-betonga font-bold text-xl md:text-2xl'>Pendientes</li>
          <li className='font-bold Pendiente m-auto p-2 rounded-xl text-white'>
            $ {pendientesTotales.toLocaleString(opcionesFormatPrecio)}
          </li>
        </ul>
        <ul className='text-center grid  items-center'>
          <li className='font-betonga font-bold text-xl md:text-2xl'>Canceladas</li>
          <li className='font-bold Cancelada m-auto p-2 rounded-xl text-white'>
            $ {perdidasTotales.toLocaleString(opcionesFormatPrecio)}
          </li>
        </ul>
      </article>
    )
  )
}

export default GananciasComponent
