import { useContext } from 'react'
import { EstadisticasContext } from '../Context/Estadisticas/EstadisticasContext.jsx'
import EstadoComponent from '../Components/Estadisticas/EstadoComponent.jsx'
import HorariosComponent from '../Components/Estadisticas/HorariosComponent.jsx'
import GananciasComponent from '../Components/Estadisticas/GananciasComponent.jsx'
import ServiciosComponent from '../Components/Estadisticas/ServiciosComponent.jsx'
import { ReservasAno } from '../Components/Estadisticas/ReservasAno/ReservasAno.jsx'

const Estadisticas = () => {
  const { reservasTodas } = useContext(EstadisticasContext)
  return (
    <main className='flex flex-col py-4 px-2'>
      <section className='grid gap-4 max-w-6xl m-auto w-full h-full md:grid-cols-4 md:gap-y-8'>
        <GananciasComponent
          gananciasTotales={reservasTodas.gananciasTotales}
          perdidasTotales={reservasTodas.perdidasTotales}
          pendientesTotales={reservasTodas.pendientesTotales}
        />
        <EstadoComponent cantidadEstados={reservasTodas.cantidadEstados} />
        <HorariosComponent horarios={reservasTodas.horarios} />
        <ServiciosComponent servicios={reservasTodas.servicios} />
        <ReservasAno />
      </section>
    </main>
  )
}
export default Estadisticas
