import { useNavigate } from 'react-router-dom'
import { compararFechas } from '../Helpers/compararFechas.js'
import { useCalendario } from '../Hooks/useCalendario.jsx'
import { ESTADOS_RESERVAS, RUTAS } from '../constantes.js'
import { Loader } from '../Components/Loader/Loader.jsx'
import { Botones } from '../Components/Calendario/Botones.jsx'
import { Dias } from '../Components/Calendario/Dias.jsx'
import { HeaderCalendario } from '../Components/Calendario/HeaderCalendario.jsx'
import { ContenedorReservas } from '../Components/ContenedorReservas/ContenedorReservas.jsx'
import ContadorReservas from '../Components/ContadorReservas/ContadorReservas.jsx'
import { useLoaderContext } from '../Hooks/Context/useLoaderContext.jsx'
import { useToastContext } from '../Hooks/Context/useToastContext.jsx'
import { useUserContext } from '../Hooks/Context/useUserContext.jsx'
import { useReservasContext } from '../Hooks/Context/useReservasContext.jsx'

function Calendario() {
  const navigate = useNavigate()
  const { setMensaje } = useToastContext()
  const { loading: cargando } = useUserContext()
  const { loading } = useLoaderContext()
  const { reservas, seleccionadas } = useReservasContext()
  const { semanaAnterior, semanaSiguiente, diasSemana, setSeleccionadas, seleccionarDia } =
    useCalendario()
  const cerrarReserva = () => {
    setSeleccionadas([])
  }
  const handleReservar = (e) => {
    const nombreAdmin = 'admin'
    const hora = e.target.getAttribute('data-fecha')
    const comprobación = compararFechas(new Date(`${hora}`), reservas)
    const horaNoDisponible =
      (comprobación.estado && comprobación.estado !== ESTADOS_RESERVAS.cancelada) ||
      comprobación.proximaHoraNoDisponible
    const horaConReserva = comprobación.estado
    const horaReservada =
      comprobación.estado === ESTADOS_RESERVAS.pago ||
      comprobación.estado === ESTADOS_RESERVAS.pendiente
    if (horaReservada) {
      setSeleccionadas(comprobación.reservadas)
      return
    }
    if (horaConReserva) {
      setSeleccionadas(comprobación.reservadas)
    }
    if (horaNoDisponible) {
      setMensaje('Hora no disponible para hacer una reserva')
      return
    }
    if (e.target.className.includes('horaAdmin')) {
      const reserva = {
        horario: { horaInicio: comprobación.id },
        paciente: { nombre: nombreAdmin }
      }
      navigate(RUTAS.admin.agregarReserva, {
        state: { from: RUTAS.admin.calendario, reserva: reserva }
      })
    } else {
      const reserva = {
        horario: { horaInicio: comprobación.id }
      }
      navigate(RUTAS.admin.agregarReserva, {
        state: { from: RUTAS.admin.calendario, reserva: reserva }
      })
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
        <article className='max-w-4xl grid justify-self-center border rounded-lg border-black w-full'>
          <HeaderCalendario handleSeleccionarDia={seleccionarDia} />
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
