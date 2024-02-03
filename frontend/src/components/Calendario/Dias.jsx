import { formatFechaParaUser } from '../../Helpers/formatFechaParaUser.js'
import { ListHoras } from '../HorasCalendario/ListHoras.jsx'

export const Dias = ({ diasSemana, reservarHora }) => {
  return (
    <section className='grid grid-cols-3 md:grid-cols-6 border-t border-black'>
      {diasSemana.map((dia) => {
        const diaDate = new Date(dia.dia)
        return (
          !(diaDate.getDay() === 0) && (
            <div key={diaDate} className={`grid grid-rows-[50px,1fr] p-2 gap-4`}>
              <h3
                className={`grid place-content-center text-center capitalize text-md p-2 text-color-violeta font-betonga font-bold tracking-wide text-pretty rounded ${
                  diaDate.getDate() === new Date().getDate() &&
                  diaDate.getDay() === new Date().getDay()
                    ? 'bg-color-verde-blanco'
                    : ''
                }`}>
                {formatFechaParaUser(dia.dia)}
              </h3>
              <ListHoras horas={dia.horas} reservarHora={reservarHora} />
            </div>
          )
        )
      })}
    </section>
  )
}
