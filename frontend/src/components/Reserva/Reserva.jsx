import { useRef, useState } from 'react'
import { formatFechaParaUser } from '../../Helpers/formatFechaParaUser.js'
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal.jsx'
import { useObserver } from '../../Hooks/useObserver.jsx'
import { ReservaDatos } from './ReservaDatos.jsx'
import { ReservaDatosAdmin } from './ReservaDatosAdmin.jsx'
import { ReservaBotones } from './ReservaBotones.jsx'
import { formatHoraUser } from '../../Helpers/formatHoraUser.js'
import { useReserva } from '../../Hooks/Api/Reservas/useReserva.jsx'

export const Reserva = ({ datos, contenedorRef }) => {
  const { loading, borrarReserva, cambiarEstadoReserva } = useReserva()
  const [reserva, setReserva] = useState(datos)
  const [modal, setModal] = useState(false)
  const reservaRef = useRef()
  const { isVisible } = useObserver(reservaRef)

  const handleConfirmModal = async () => {
    await borrarReserva(reserva)
    setModal(false)
  }
  const handleEliminarReserva = () => {
    setModal(true)
  }
  const handleEditarEstadoReserva = async () => {
    const nuevaReserva = await cambiarEstadoReserva(reserva)
    setReserva(nuevaReserva)
  }

  const estadoClases = {
    Pago: 'bg-color-paga text-white',
    Cancelada: 'bg-color-cancelada text-white',
    Pendiente: 'bg-color-pendiente text-white'
  }
  const claseEstado = estadoClases[reserva.estado] || ''

  return (
    <>
      {modal && (
        <ConfirmationModal
          titulo={'Borrar Reserva'}
          mensaje={`¿Estás seguro de que deseas borrar la reserva de ${
            reserva.paciente.nombre
          } el dia ${formatFechaParaUser(reserva.horario.horaInicio)} a las ${formatHoraUser(
            new Date(reserva.horario.horaInicio)
          )}?`}
          onConfirm={handleConfirmModal}
          onCancel={() => setModal(false)}
        />
      )}
      <article
        className={`${
          isVisible ? 'animate-toastIn' : ''
        } border border-slate-500 grid grid-rows-[40px_1fr_130px] rounded-lg max-w-96 w-full m-auto overflow-auto snap-center min-w-80 ${claseEstado}`}
        ref={reservaRef}>
        <h3 className='font-betonga font-bold text-xl capitalize grid place-content-center tracking-wider'>
          {reserva.paciente.nombre}
        </h3>
        <section className={`grid border-t border-b border-slate-50`}>
          <ReservaDatos reserva={reserva} />
          <ReservaDatosAdmin reserva={reserva} />
        </section>
        <section className={`grid gap-4 p-4 grid-cols-2 justify-evenly bg-white`}>
          <ReservaBotones
            contenedorRef={contenedorRef}
            reserva={reserva}
            handleEditarEstadoReserva={handleEditarEstadoReserva}
            handleEliminarReserva={handleEliminarReserva}
            loading={loading}
          />
        </section>
      </article>
    </>
  )
}
