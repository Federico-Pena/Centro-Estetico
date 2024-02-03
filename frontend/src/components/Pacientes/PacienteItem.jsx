import { useRef } from 'react'
import { Delete, Edit, Eye } from '../Icons/Icons.jsx'
import { useObserver } from '../../Hooks/useObserver.jsx'

export const PacienteItem = ({ paciente, handleDelete, handleEdit, handleVerPaciente }) => {
  const pacienteRef = useRef()
  const { isVisible } = useObserver(pacienteRef)

  return (
    <article
      className={`${
        isVisible ? 'animate-toastIn' : ''
      } max-h-80 grid p-4 gap-4 border border-slate-400 rounded max-w-md w-full m-auto ${
        paciente.nombre === 'admin'
          ? 'bg-color-logo [&>ul>li]:border-slate-500 [&>header]:border-slate-500'
          : ''
      }`}
      ref={pacienteRef}>
      <header className='grid justify-items-center gap-4 border-b '>
        {paciente.foto && (
          <img
            src={paciente.foto.secure_url}
            alt={paciente.nombre}
            className='w-12 h-12 rounded-full'
          />
        )}
        <span className='uppercase text-center pb-4'>{paciente.nombre}</span>
      </header>
      <ul className='grid gap-4'>
        <li>Reservas: {paciente.totalReservas || 0}</li>
        {paciente.nombre !== 'admin' && paciente.servicio && (
          <li className='capitalize'>{paciente.servicio.nombre}</li>
        )}
        {paciente.nombre !== 'admin' && paciente.tratamiento && (
          <li className='capitalize'>{paciente.tratamiento.descripcion}</li>
        )}
        <li className='flex justify-between border-t pt-2 hover:[&>svg]:text-color-violeta [&>svg]:cursor-pointer [&>svg]:text-xl [&>svg]:text-slate-600 hover:[&>svg]:scale-110 hover:[&>svg]:transition'>
          <Eye
            onClickFunction={() => {
              handleVerPaciente(paciente)
            }}
          />
          <Edit
            onClickFunction={() => {
              handleEdit(paciente)
            }}
          />
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
