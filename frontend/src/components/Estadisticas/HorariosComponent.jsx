import { HorarioItem } from './Horarios/HorarioItem.jsx'

const HorariosComponent = ({ horarios }) => {
  return (
    horarios instanceof Array && (
      <article className='grid grid-rows-[auto_1fr] grid-cols-2 gap-4 pt-8 md:col-span-4 text-color-violeta tracking-wider'>
        <h2 className='font-betonga font-bold text-color-violeta text-xl text-center col-span-full md:text-2xl'>
          Horarios Más Solicitados
        </h2>
        {horarios.map((horario, i) => {
          return <HorarioItem key={i} horario={horario} index={i} />
        })}
      </article>
    )
  )
}

export default HorariosComponent
/* <ul className='grid justify-center grid-cols-2 gap-y-2 md:grid-cols-1'>
          {horariosMasSolicitados.map(([horario], i, array) => (
            <li
              key={horario}
              className={`p-4 grid grid-flow-col justify-center border-b border-black md:border-none lg:text-xl ${
                i === array.length - 1 || i === array.length - 2 ? 'border-none' : ''
              }`}>
              {i + 1}- <span>{horario}</span>
            </li>
          ))}
        </ul> */
