import { ServicioItem } from './Servicios/ServicioItem.jsx'

const ServiciosComponent = ({ servicios }) => {
  return (
    servicios && (
      <article className='grid grid-rows-[auto_1fr] md:grid-cols-2 gap-4 pt-8 md:col-span-4 text-color-violeta'>
        <h2 className='font-betonga font-bold text-xl text-center col-span-full md:text-2xl'>
          Servicios y Tratamientos Más Solicitados
        </h2>
        {servicios instanceof Array &&
          servicios.map((servicio, i) => <ServicioItem key={i} index={i} servicio={servicio} />)}
      </article>
    )
  )
}

export default ServiciosComponent
