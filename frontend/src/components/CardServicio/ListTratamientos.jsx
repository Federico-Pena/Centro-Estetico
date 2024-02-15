export const ListTratamientos = ({ servicio }) => {
  return (
    <section className='overflow-auto snap-y snap-mandatory h-52 mt-8 grid  items-start relative border-t border-b border-gray-300 '>
      <h3 className='sticky top-0 text-xl capitalize backdrop-blur-lg bg-white bg-opacity-10 m-auto rounded-lg p-2'>
        {servicio.tratamientos && servicio.tratamientos.length > 1
          ? `${servicio.tratamientos.length} Tratamientos`
          : `1 Tratamiento`}
      </h3>
      {servicio.tratamientos.map((sesión, i) => (
        <ul key={i} className='p-8 grid gap-2 snap-end '>
          <li className='grid grid-cols-[1fr_2fr] gap-4'>
            Descripción
            <span className='text-end text-nowrap overflow-auto'> {sesión.descripcion}</span>
          </li>
          <li className='grid grid-flow-col justify-between'>
            Tiempo <span>{sesión.tiempo} minutos.</span>
          </li>
          <li className='grid grid-flow-col justify-between'>
            {sesión.sesiones > 1 ? 'Sesiones' : 'Sesión'} <span>{sesión.sesiones}</span>
          </li>
          <li className='grid grid-flow-col justify-between'>
            Valor
            <span>$ {sesión.costoTotal}</span>
          </li>
        </ul>
      ))}
    </section>
  )
}
