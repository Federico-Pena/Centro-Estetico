import { useEffect, useRef } from 'react'
import { Mes } from './ReservasAno/Mes.jsx'
import GraficoBarras from './Graficos/GraficoBarras.jsx'
import { useEstadisticasContext } from '../../Hooks/Context/useEstadisticasContext.jsx'

export const DatosDelAño = () => {
  const { reservas } = useEstadisticasContext()
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
