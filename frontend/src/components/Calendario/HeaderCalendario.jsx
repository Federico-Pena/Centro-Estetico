import { formatFechaParaUser } from '../../Helpers/formatFechaParaUser.js'
import { useCalendarioContext } from '../../Hooks/Context/useCalendarioContext.jsx'
import { HOY_FECHA_STRING } from '../../constantes.js'

export const HeaderCalendario = ({ handleSeleccionarDia, diasSemana, diasMes }) => {
  const { vistaSemana } = useCalendarioContext()
  const lunes = new Date(diasSemana[0].dia)
  const domingo = new Date(diasSemana[6].dia)
  const primerDiaMes = new Date(diasMes[0]?.dia)
  const ultimoDiaMes = new Date(diasMes[diasMes.length - 1]?.dia)
  return (
    <section className='grid flex-1'>
      <ul className='grid gap-y-4 text-center text-color-violeta font-bold'>
        <li
          onClick={() => handleSeleccionarDia(HOY_FECHA_STRING.split('T')[0])}
          className='p-2 bg-color-verde-blanco font-betonga rounded-lg border border-color-violeta cursor-pointer'>
          Hoy {formatFechaParaUser(HOY_FECHA_STRING)}
        </li>
        {vistaSemana ? (
          <li>
            {lunes.toLocaleDateString()} al {domingo.toLocaleDateString()}
          </li>
        ) : (
          <li>
            {primerDiaMes.toLocaleDateString()} al {ultimoDiaMes.toLocaleDateString()}
          </li>
        )}
      </ul>
    </section>
  )
}
