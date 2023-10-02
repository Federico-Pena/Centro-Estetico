import './Reservas.scss'
import { Loader } from '../../components/Loader/Loader'
import { useContext, useState } from 'react'
import { HOY_STRING_BIEN } from '../../constantes'
import { UserContext } from '../../context/userContext'
import ContadorReservas from '../../components/ContadorReservas/ContadorReservas'
import { FechasYHoras } from '../../components/FechasYHoras/FechasYHoras'
import { ContenedorReservas } from '../../components/ContenedorReservas/ContenedorReservas'
import useReservas from '../../hooks/useReservas'
import { ordenarPorFecha } from '../../helpers/FechasHoras/ordenarPorFecha'
import { MensajeToast } from '../../context/mensajeContext'
import { LoaderChico } from '../../components/Loader/LoaderChico'
export default function Reservas() {
  const [dia, setDia] = useState(HOY_STRING_BIEN.split('T')[0])
  const [reservadas, setReservadas] = useState([])
  const { loading } = useContext(UserContext)
  const { setMensaje } = useContext(MensajeToast)
  const { loading: cargando, delDia, setDelDia, loadingSemana } = useReservas(dia)

  const actualizarReservas = (reserva) => {
    const reservasGuardadas = delDia.filter((res) => res._id !== reserva._id)
    setDelDia(reservasGuardadas.concat(reserva).sort(ordenarPorFecha))
  }

  const actualizarBorrada = (datos) => {
    const { reserva, error, mensaje } = datos
    if (error) {
      setMensaje(error)
    } else {
      setMensaje(mensaje)
      const reservasGuardadas = delDia.filter((res) => res._id !== reserva._id)
      setDelDia(reservasGuardadas.sort(ordenarPorFecha))
      setReservadas([])
    }
  }
  const mostrarReservadas = (estado) => {
    if (estado === 'Toda') {
      setReservadas(delDia.sort(ordenarPorFecha))
    } else {
      const filtradas = delDia.filter((res) => res.estado === estado)
      setReservadas(filtradas.sort(ordenarPorFecha))
    }
  }
  const cerrarReserva = (e) => {
    e.current.parentElement.classList.add('animationReservaOut')
    setTimeout(() => {
      e.current.parentElement.classList.remove('animationReservaOut')
      setReservadas([])
    }, 500)
  }
  return (
    <>
      {(loading || cargando) && <Loader />}
      <main className='divPageReservas'>
        {reservadas.length > 0 ? (
          <ContenedorReservas
            reservas={reservadas}
            actualizarReservas={actualizarReservas}
            actualizarReservaEliminada={actualizarBorrada}
            cerrarReserva={cerrarReserva}
          />
        ) : (
          <>
            <ContadorReservas reservas={delDia} mostrarReservadas={mostrarReservadas} />
            <FechasYHoras
              actualizarReservas={actualizarReservas}
              reservas={delDia}
              setDiaPadre={setDia}
            />
            {loadingSemana ? <LoaderChico /> : null}
            <ContenedorReservas
              reservas={delDia}
              actualizarReservas={actualizarReservas}
              actualizarReservaEliminada={actualizarBorrada}
            />
          </>
        )}
      </main>
    </>
  )
}
