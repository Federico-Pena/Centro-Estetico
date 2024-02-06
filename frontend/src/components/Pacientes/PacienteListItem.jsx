import { useRef } from 'react'
import { Delete, Edit, Eye } from '../Icons/Icons.jsx'
import { useObserver } from '../../Hooks/useObserver.jsx'
import { ESTADOS_RESERVAS } from '../../constantes.js'

export const PacienteListItem = ({ paciente, handleDelete, handleEdit, handleVerPaciente }) => {
  const pacienteRef = useRef()
  const { isVisible } = useObserver(pacienteRef)

  return (
    <article
      className={`${
        isVisible ? 'animate-toastIn' : ''
      } grid p-4 gap-4 border border-black rounded max-w-md w-full mx-auto bg-color-logo`}
      ref={pacienteRef}>
      <header className='grid justify-items-center gap-4 border-b border-black pb-4'>
        {paciente.foto && (
          <img
            src={paciente.foto.secure_url}
            alt={paciente.nombre}
            className='w-12 h-12 rounded-full object-cover'
          />
        )}
        <span className='uppercase text-center'>{paciente.nombre}</span>
      </header>
      <h2 className='grid gap-2 text-xl text-color-violeta text-center font-betonga font-bold'>
        Reservas <span>{paciente.totalReservas || 0}</span>{' '}
      </h2>
      <ul className='grid gap-2 grid-cols-3 border-b border-black pb-4 '>
        <li className={`${ESTADOS_RESERVAS.pago} text-white text-center p-2 rounded-xl`}>
          Pagas: {paciente.reservasPagas || 0}
        </li>
        <li className={`${ESTADOS_RESERVAS.pendiente} text-white text-center p-2 rounded-xl`}>
          Pendientes: {paciente.reservasPendientes || 0}
        </li>
        <li className={`${ESTADOS_RESERVAS.cancelada} text-white text-center p-2 rounded-xl`}>
          Canceladas: {paciente.reservasCanceladas || 0}
        </li>
      </ul>
      {(paciente.servicio?.nombre || paciente.tratamiento?.descripcion) && (
        <>
          <h2 className='text-xl text-color-violeta text-center font-betonga font-bold'>
            Servicio y tratamiento
          </h2>
          <ul className='grid gap-4 border-b border-black pb-4'>
            {paciente.servicio?.nombre && (
              <li className='grid grid-flow-col justify-between capitalize'>
                Servicio: <span>{paciente.servicio.nombre}</span>{' '}
              </li>
            )}
            {paciente.tratamiento?.descripcion && (
              <li className='grid grid-flow-col justify-between capitalize'>
                Tratamiento: <span>{paciente.tratamiento.descripcion}</span>{' '}
              </li>
            )}
          </ul>
        </>
      )}
      <ul className='flex justify-between pt-2 [&>li>svg]:cursor-pointer [&>li>svg]:text-2xl [&>li>svg]:text-color-violeta hover:[&>li>svg]:scale-110 hover:[&>li>svg]:transition-transform'>
        <li>
          <Eye
            onClickFunction={() => {
              handleVerPaciente(paciente)
            }}
          />
        </li>
        <li>
          <Edit
            onClickFunction={() => {
              handleEdit(paciente)
            }}
          />
        </li>
        <li>
          <Delete
            onClickFunction={() => {
              handleDelete(paciente)
            }}
          />
        </li>
      </ul>
    </article>
  )
}
