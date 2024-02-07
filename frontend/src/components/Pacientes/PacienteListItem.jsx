import { useRef } from 'react'
import { useObserver } from '../../Hooks/useObserver.jsx'
import { ESTADOS_RESERVAS } from '../../constantes.js'
import { Button } from '../Botones/Button.jsx'
import { Checkbox } from '../Icons/Icons.jsx'

export const PacienteListItem = ({ paciente, handleDelete, handleEdit, handleVerPaciente }) => {
  const pacienteRef = useRef()
  const { isVisible } = useObserver(pacienteRef)

  return (
    <article
      className={`${
        isVisible ? 'animate-fadeIn' : ''
      } grid p-4 gap-4 border border-black rounded-xl max-w-md w-full mx-auto bg-color-logo`}
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
      <section className='grid gap-4'>
        <h2 className='grid gap-2 text-xl text-color-violeta text-center font-betonga font-bold'>
          Reservas <span>{paciente.totalReservas || 0}</span>
        </h2>
        <ul className='grid gap-2 border-b border-black pb-4 font-bold md:grid-cols-3'>
          <li
            className={`${ESTADOS_RESERVAS.pago} grid gap-2 text-white text-center p-2 rounded-xl`}>
            Pagas <span>{paciente.reservasPagas || 0}</span>
          </li>
          <li
            className={`${ESTADOS_RESERVAS.pendiente} grid gap-2 text-white text-center p-2 rounded-xl`}>
            Pendientes <span>{paciente.reservasPendientes || 0}</span>
          </li>
          <li
            className={`${ESTADOS_RESERVAS.cancelada} grid gap-2 text-white text-center p-2 rounded-xl`}>
            Canceladas <span>{paciente.reservasCanceladas || 0}</span>
          </li>
        </ul>
      </section>
      <section className='grid gap-4'>
        <h2 className='text-xl text-color-violeta text-center font-betonga font-bold'>
          Servicio y tratamiento
        </h2>
        <ul className='grid gap-4 border-b border-black pb-4'>
          <li className='grid capitalize'>
            Servicio:
            <span className='grid justify-end [&>svg]:text-red-600'>
              {paciente.servicio?.nombre || <Checkbox />}
            </span>
          </li>
          <li className='grid capitalize'>
            Tratamiento:
            <span className='grid justify-end [&>svg]:text-red-600'>
              {paciente.tratamiento?.descripcion || <Checkbox />}
            </span>
          </li>
        </ul>
      </section>
      <ul className='grid grid-flow-col justify-around pt-2'>
        <li>
          <Button onClickFunction={handleVerPaciente} texto={'Ver mas'} />
        </li>
        <li>
          <Button onClickFunction={handleEdit} texto={'Editar'} />
        </li>
        <li>
          <Button onClickFunction={handleDelete} texto={'Borrar'} />
        </li>
      </ul>
    </article>
  )
}
