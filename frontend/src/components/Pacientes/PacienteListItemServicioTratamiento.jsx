import { Checkbox } from '../Icons/Icons.jsx'

export const PacienteListItemServicioTratamiento = ({ servicio, tratamiento }) => {
  return (
    <section className='grid gap-4'>
      <h2 className='text-xl text-color-violeta text-center font-betonga font-bold'>
        Servicio y tratamiento
      </h2>
      <ul className='grid gap-4 border-b border-black pb-4'>
        <li className='grid grid-flow-col items-center justify-between capitalize gap-4'>
          Servicio:
          <span className='grid text-nowrap overflow-auto [&>svg]:text-red-600'>
            {servicio?.nombre || <Checkbox />}
          </span>
        </li>
        <li className='grid grid-flow-col items-center justify-between capitalize gap-4'>
          Tratamiento:
          <span className='grid text-nowrap overflow-auto [&>svg]:text-red-600'>
            {(tratamiento?.descripcion &&
              tratamiento?.sesiones &&
              `${tratamiento.descripcion} - ${tratamiento.sesiones} ${
                tratamiento.sesiones > 1 ? 'Sesiones' : 'Sesión'
              }`) || <Checkbox />}
          </span>
        </li>
      </ul>
    </section>
  )
}
