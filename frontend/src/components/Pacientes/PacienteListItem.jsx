import { useRef } from 'react'
import { useObserver } from '../../Hooks/useObserver.jsx'
import ResumenReservas from './ResumenReservas.jsx'
import { PacienteListItemFooter } from './PacienteListItemFooter.jsx'
import { PacienteListItemHeader } from './PacienteListItemHeader.jsx'
import { PacienteListItemServicioTratamiento } from './PacienteListItemServicioTratamiento.jsx'

export const PacienteListItem = ({ paciente, handleDelete, handleEdit, handleVerPaciente }) => {
  const pacienteRef = useRef()
  const { isVisible } = useObserver(pacienteRef)
  const {
    totalReservas,
    reservasPagas,
    reservasCanceladas,
    reservasPendientes,
    foto,
    nombre,
    servicio,
    tratamiento
  } = paciente
  return (
    <article
      className={`${
        isVisible ? 'animate-fadeIn' : ''
      } grid p-4 gap-4 border border-black rounded-xl max-w-md w-full mx-auto bg-color-logo`}
      ref={pacienteRef}>
      <PacienteListItemHeader foto={foto} nombre={nombre} />
      <ResumenReservas
        cancelada={reservasCanceladas}
        pago={reservasPagas}
        pendiente={reservasPendientes}
        total={totalReservas}
      />
      <PacienteListItemServicioTratamiento servicio={servicio} tratamiento={tratamiento} />
      <PacienteListItemFooter
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleVerPaciente={handleVerPaciente}
      />
    </article>
  )
}
