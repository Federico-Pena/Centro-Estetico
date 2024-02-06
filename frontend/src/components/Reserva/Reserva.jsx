import { useRef, useState } from 'react'
import { formatFechaParaUser } from '../../Helpers/formatFechaParaUser.js'
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal.jsx'
import { useObserver } from '../../Hooks/useObserver.jsx'
import { ReservaDatos } from './ReservaDatos.jsx'
import { ReservaDatosAdmin } from './ReservaDatosAdmin.jsx'
import { ReservaBotones } from './ReservaBotones.jsx'
import { formatHoraUser } from '../../Helpers/formatHoraUser.js'
import { useReserva } from '../../Hooks/Api/Reservas/useReserva.jsx'
import { useLoaderContext } from '../../Hooks/Context/useLoaderContext.jsx'

export const Reserva = ({ datos, contenedorRef }) => {
  const { loading } = useLoaderContext()
  const { borrarReserva, cambiarEstadoReserva } = useReserva()
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
  return (
    <>
      {modal && (
        <ConfirmationModal
          titulo={'Borrar Reserva'}
          mensaje={`¿Estás seguro de que deseas borrar la reserva de ${
            reserva.paciente?.nombre
          } el dia ${formatFechaParaUser(reserva.horario?.horaInicio)} a las ${formatHoraUser(
            new Date(reserva.horario?.horaInicio)
          )}?`}
          onConfirm={handleConfirmModal}
          onCancel={() => setModal(false)}
        />
      )}
      <article
        className={`${
          isVisible ? 'animate-toastIn' : ''
        } border border-slate-500 grid grid-rows-[50px_1fr_auto] rounded-lg max-w-96 w-full mx-auto overflow-auto snap-center min-w-80 ${
          reserva.estado
        }`}
        ref={reservaRef}>
        {reserva.paciente && (
          <h3 className='font-betonga font-bold text-xl text-white capitalize grid place-content-center tracking-wider'>
            {reserva.paciente.nombre || 'Paciente eliminado'}
          </h3>
        )}
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
