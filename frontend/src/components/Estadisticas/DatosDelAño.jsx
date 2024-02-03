import { useContext } from 'react'
import { EstadisticasContext } from '../../Context/Estadisticas/EstadisticasContext.jsx'
import { Mes } from './ReservasAno/Mes.jsx'

export const DatosDelAño = () => {
  const { reservasAno } = useContext(EstadisticasContext)

  return (
    reservasAno instanceof Array && (
      <article className='grid gap-2 col-span-full md:grid-cols-2  md:gap-4'>
        {reservasAno.map((res) => (
          <Mes
            key={res.mes}
            mes={res.mes}
            cantidadReservas={res.cantidadReservas}
            estados={res.estados}
            ganancias={res.ganancias}
            pacienteMasReservas={res.pacienteMasReservas}
            servicioMasSolicitado={res.servicioMasSolicitado}
          />
        ))}
      </article>
    )
  )
}
