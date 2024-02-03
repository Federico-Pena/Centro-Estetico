import { useLocation } from 'react-router-dom'
import { Reserva } from '../Reserva/Reserva.jsx'
import { RUTAS } from '../../constantes.js'
import { useRef } from 'react'

export const ContenedorReservas = ({ reservas }) => {
  const location = useLocation()
  const contenedorReservasRef = useRef()

  const pageCalendario = location.pathname === RUTAS.admin.calendario
  return (
    <section
      className={`${
        pageCalendario
          ? 'animate-growIn fixed inset-0 z-30 m-0 p-4 bg-white bg-opacity-30 backdrop-blur-sm flex gap-4 justify-start overflow-x-auto snap-x snap-proximity'
          : 'grid gap-4 m-auto w-full max-w-5xl md:grid-cols-2 xl:grid-cols-3'
      } `}
      ref={contenedorReservasRef}>
      {reservas.length > 0 ? (
        reservas.map((res) => {
          return <Reserva datos={res} key={res._id} contenedorRef={contenedorReservasRef} />
        })
      ) : (
        <h2 className='text-xl text-center col-span-full'>No hay reservas</h2>
      )}
    </section>
  )
}
