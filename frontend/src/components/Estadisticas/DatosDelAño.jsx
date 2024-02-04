import { useContext, useEffect, useRef } from 'react'
import { EstadisticasContext } from '../../Context/Estadisticas/EstadisticasContext.jsx'
import { Mes } from './ReservasAno/Mes.jsx'
import GraficoBarras from './Graficos/GraficoBarras.jsx'

export const DatosDelAño = () => {
  const { reservas } = useContext(EstadisticasContext)
  const datosDelAñoRef = useRef()
  useEffect(() => {
    datosDelAñoRef.current &&
      datosDelAñoRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
  }, [])
  return (
    reservas instanceof Array && (
      <article className='grid gap-2 col-span-full md:grid-cols-2  md:gap-4' ref={datosDelAñoRef}>
        <GraficoBarras datos={reservas} />
        {reservas.map((res) => (
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
