import { useNavigate } from 'react-router-dom'
import { compararFechas } from '../Helpers/compararFechas.js'
import { useCalendario } from '../Hooks/useCalendario.jsx'
import { ESTADOS_RESERVAS, RUTAS } from '../constantes.js'
import { Loader } from '../Components/Loader/Loader.jsx'
import { Botones } from '../Components/Calendario/Botones.jsx'
import { DiasSemana } from '../Components/Calendario/DiasSemana.jsx'
import { HeaderCalendario } from '../Components/Calendario/HeaderCalendario.jsx'
import { ContenedorReservas } from '../Components/ContenedorReservas/ContenedorReservas.jsx'
import ContadorReservas from '../Components/ContadorReservas/ContadorReservas.jsx'
import { useToastContext } from '../Hooks/Context/useToastContext.jsx'
import { useUserContext } from '../Hooks/Context/useUserContext.jsx'
import { useReservasContext } from '../Hooks/Context/useReservasContext.jsx'
import { DiasMes } from '../Components/Calendario/DiasMes.jsx'
import { Button } from '../Components/Botones/Button.jsx'
import { useCalendarioContext } from '../Hooks/Context/useCalendarioContext.jsx'
import { ACTIONS_CALENDARIO } from '../Context/Calendario/reducerCalendario.js'
import ReferenciasReservas from '../Components/Calendario/ReferenciasReservas.jsx'

function Calendario() {
  const navigate = useNavigate()
  const { setMensaje } = useToastContext()
  const { loading: cargando } = useUserContext()
  const { reservas, seleccionadas } = useReservasContext()
  const { diasSemana, diasMes, setSeleccionadas, seleccionarDia, seleccionarMes } = useCalendario()
  const { vistaSemana, dispatch } = useCalendarioContext()
  const cerrarReserva = () => {
    setSeleccionadas([])
  }
  const cambiarVista = () => {
    dispatch({
      type: ACTIONS_CALENDARIO.SET_VISTA_SEMANA,
      payload: !vistaSemana
    })
  }

  const handleReservar = (e) => {
    const nombreAdmin = 'admin'
    const hora = e.target.getAttribute('data-fecha')
    const { estado, proximaHoraNoDisponible, reservadas, id } = compararFechas(
      new Date(`${hora}`),
      reservas
    )
    const horaNoDisponible =
      (estado && estado !== ESTADOS_RESERVAS.cancelada) || proximaHoraNoDisponible
    const horaConReserva = estado
    const horaReservada = estado === ESTADOS_RESERVAS.pago || estado === ESTADOS_RESERVAS.pendiente
    if (horaReservada) {
      setSeleccionadas(reservadas)
      return
    }
    if (horaConReserva) {
      setSeleccionadas(reservadas)
    }
    if (horaNoDisponible) {
      setMensaje('Hora no disponible para hacer una reserva')
      return
    }
    if (e.target.className.includes('horaAdmin')) {
      const reserva = {
        horario: { horaInicio: id },
        paciente: { nombre: nombreAdmin }
      }
      navigate(RUTAS.admin.agregarReserva, {
        state: { from: RUTAS.admin.calendario, reserva: reserva }
      })
    } else {
      const reserva = {
        horario: { horaInicio: id }
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

      <main className='grid py-8 px-2 w-full relative '>
        <ContadorReservas setSeleccionadas={setSeleccionadas} />
        <article className='max-w-4xl grid justify-self-center border rounded-lg border-black w-full '>
          <div className='relative grid grid-cols-[8fr_1fr] items-start p-4 gap-x-4'>
            <HeaderCalendario
              handleSeleccionarDia={(fecha) => {
                vistaSemana ? seleccionarDia(fecha) : seleccionarMes(fecha)
              }}
              diasSemana={diasSemana}
              diasMes={diasMes}
            />
            <ReferenciasReservas />
            <Button
              className={'w-full'}
              tipo={'button'}
              onClickFunction={cambiarVista}
              texto={vistaSemana ? 'Semana' : 'Mes'}
            />
          </div>
          <Botones handleSeleccionarDia={seleccionarDia} seleccionarMes={seleccionarMes} />
          {vistaSemana ? (
            <DiasSemana diasSemana={diasSemana} reservarHora={handleReservar} />
          ) : (
            <DiasMes diasMes={diasMes} handleSeleccionarDia={seleccionarDia} />
          )}
        </article>
      </main>
    </>
  )
}

export default Calendario
