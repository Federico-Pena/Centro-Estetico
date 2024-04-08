import { formatFechaParaUser } from '../../Helpers/formatFechaParaUser.js'
import { ListHoras } from '../HorasCalendario/ListHoras.jsx'

export const DiasSemana = ({ diasSemana, reservarHora }) => {
  return (
    <section className='grid grid-cols-6'>
      {diasSemana.map((dia) => {
        const diaDate = new Date(dia.dia)
        const diaNumber = diaDate.getDay()
        const colSpan3 = diaNumber === 0 || diaNumber === 6 || diaNumber === 5 || diaNumber === 4
        const styleColSpan = colSpan3 ? 'col-span-3' : 'col-span-2'
        return (
          <div key={diaDate} className={`grid grid-rows-[50px,1fr] gap-2 ${styleColSpan}`}>
            <h3
              className={`grid place-content-center text-center capitalize text-md p-2 text-color-violeta font-betonga font-bold tracking-wide text-pretty border-b border-black sticky top-[270px] z-10 ${
                diaDate.toLocaleDateString() === new Date().toLocaleDateString()
                  ? 'bg-color-verde-blanco'
                  : 'bg-white'
              }`}>
              {formatFechaParaUser(dia.dia)}
            </h3>
            <ListHoras horas={dia.horas} reservarHora={reservarHora} />
          </div>
        )
      })}
    </section>
  )
}
