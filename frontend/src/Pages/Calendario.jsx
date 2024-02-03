import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { compararFechas } from '../Helpers/compararFechas.js'
import { UserContext } from '../Context/User/userContext.jsx'
import { ToastContext } from '../Context/Toast/mensajeContext.jsx'
import { ReservasContext } from '../Context/Reservas/ReservasContext.jsx'
import { useCalendario } from '../Hooks/useCalendario.jsx'
import { ESTADOS_RESERVAS, RUTAS } from '../constantes.js'
import { Loader } from '../Components/Loader/Loader.jsx'
import { Botones } from '../Components/Calendario/Botones.jsx'
import { Dias } from '../Components/Calendario/Dias.jsx'
import { HeaderCalendario } from '../Components/Calendario/HeaderCalendario.jsx'
import { ACTIONS_RESERVAS } from '../Context/Reservas/reducerReservas.js'
import { ContenedorReservas } from '../Components/ContenedorReservas/ContenedorReservas.jsx'
import ContadorReservas from '../Components/ContadorReservas/ContadorReservas.jsx'

function Calendario() {
  const { setMensaje } = useContext(ToastContext)
  const { loading: cargando } = useContext(UserContext)
  const { reservas, dispatch, seleccionadas } = useContext(ReservasContext)
  const { semanaAnterior, semanaSiguiente, loading, diasSemana, setSeleccionadas, seleccionarDia } =
    useCalendario()
  const cerrarReserva = () => {
    setSeleccionadas([])
  }
  const navigate = useNavigate()
  const handleReservar = (e) => {
    const nombreAdmin = 'admin'
    const hora = e.target.getAttribute('data-fecha')
    const comprobación = compararFechas(new Date(`${hora}`), reservas)
    const horaNoDispible =
      (comprobación.estado && comprobación.estado !== ESTADOS_RESERVAS.cancelada) ||
      comprobación.proximaHoraNoDisponible
    const horaConReserva = comprobación.estado
    if (horaConReserva) {
      setSeleccionadas(comprobación.reservadas)
    }
    if (horaNoDispible) {
      setMensaje('Hora no disponible para hacer una reserva')
      return
    }
    if (e.target.className.includes('horaAdmin')) {
      const reserva = {
        horario: { horaInicio: comprobación.id },
        paciente: { nombre: nombreAdmin }
      }
      dispatch({ type: ACTIONS_RESERVAS.SET_RESERVA, payload: reserva })
      navigate(RUTAS.admin.agregarReserva, { state: { from: RUTAS.admin.calendario } })
    } else {
      const reserva = {
        horario: { horaInicio: comprobación.id }
      }
      dispatch({ type: ACTIONS_RESERVAS.SET_RESERVA, payload: reserva })
      navigate(RUTAS.admin.agregarReserva, { state: { from: RUTAS.admin.calendario } })
    }
  }
  return (
    <>
      {cargando && <Loader />}
      {seleccionadas?.length > 0 ? (
        <ContenedorReservas reservas={seleccionadas} cerrarReserva={cerrarReserva} />
      ) : null}

      <main className='grid py-8 px-2 w-full '>
        <ContadorReservas setSeleccionadas={setSeleccionadas} />
        <article className='max-w-4xl grid  mx-auto border rounded-lg border-black'>
          <HeaderCalendario diasSemana={diasSemana} handleSeleccionarDia={seleccionarDia} />
          <Botones
            loading={loading}
            semanaAnterior={semanaAnterior}
            semanaSiguiente={semanaSiguiente}
          />
          <Dias diasSemana={diasSemana} reservarHora={handleReservar} />
          <Botones
            loading={loading}
            semanaAnterior={semanaAnterior}
            semanaSiguiente={semanaSiguiente}
          />
        </article>
      </main>
    </>
  )
}

export default Calendario
