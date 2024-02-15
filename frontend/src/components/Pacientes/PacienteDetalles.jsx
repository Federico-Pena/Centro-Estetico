import { formatFechaParaUser } from '../../Helpers/formatFechaParaUser.js'
import { Checkbox } from '../Icons/Icons.jsx'

export const PacienteDetalles = ({ paciente }) => {
  const cumple = new Date(`${paciente.fechaDeNac} 00:00`)
  const fecha = formatFechaParaUser(cumple)
  return (
    <>
      <h4 className=' tracking-wider pt-4 underline underline-offset-4 font-betonga font-bold text-xl text-color-violeta text-center'>
        Detalles del paciente
      </h4>
      <ul className='grid [&>li]:p-4 [&>li]:grid [&>li]:grid-flow-col [&>li]:grid-cols-[1fr_2fr] [&>li]:justify-between [&>li>span]:grid [&>li>span]:justify-end  [&>li>span]:items-center  [&>li>span>svg]:text-red-600'>
        <li className='capitalize'>
          Nombre: <span>{paciente.nombre || <Checkbox />}</span>
        </li>
        <li>
          Nacimiento:
          <span> {fecha || <Checkbox />}</span>
        </li>
        <li>
          Cédula:
          <span> {paciente.cedula || <Checkbox />}</span>
        </li>
        <li>
          Edad:
          <span>{paciente.edad || <Checkbox />}</span>
        </li>
        <li>
          Sociedad:
          <span> {paciente.sociedad || <Checkbox />}</span>
        </li>
        <li>
          Teléfono:
          <span>{paciente.telefono || <Checkbox />}</span>
        </li>
        <li>
          Obs:
          <span> {paciente.observaciones || <Checkbox />}</span>
        </li>
        <li className='capitalize'>
          Servicio:
          <span> {paciente.servicio?.nombre || <Checkbox />}</span>
        </li>
        <li>
          Tratamiento:
          <span>
            {(paciente.tratamiento?.descripcion &&
              paciente.tratamiento?.sesiones &&
              `${paciente.tratamiento.descripcion} - ${paciente.tratamiento.sesiones} ${
                paciente.tratamiento.sesiones > 1 ? 'Sesiones' : 'Sesión'
              }`) || <Checkbox />}
          </span>
        </li>
      </ul>
    </>
  )
}
