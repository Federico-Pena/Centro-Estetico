import { useContext, useState } from 'react'
import { ESTADOS_RESERVAS } from '../../constantes.js'
import { BtnSecundario } from '../Botones/BtnSecundario.jsx'
import { TransitionNumber } from '../TransitionNumber/TransitionNumber.jsx'
import { ReservasContext } from '../../Context/Reservas/ReservasContext.jsx'
function contador(arrayReservas) {
  const counts = arrayReservas.reduce(
    (acc, reserva) => {
      if (reserva.estado === ESTADOS_RESERVAS.pago) {
        acc.terminadas++
      } else if (reserva.estado === ESTADOS_RESERVAS.cancelada) {
        acc.canceladas++
      } else if (reserva.estado === ESTADOS_RESERVAS.pendiente) {
        acc.pendientes++
      }
      return acc
    },
    { terminadas: 0, canceladas: 0, pendientes: 0 }
  )
  return {
    reservasCanceladas: counts.canceladas,
    reservasPendientes: counts.pendientes,
    reservasTerminadas: counts.terminadas,
    reservasTodas: counts.canceladas + counts.pendientes + counts.terminadas
  }
}

function ContadorReservas({ setSeleccionadas }) {
  const [isVisible, setIsVisible] = useState(false)
  const { reservas } = useContext(ReservasContext)
  const { reservasCanceladas, reservasPendientes, reservasTerminadas, reservasTodas } =
    contador(reservas)
  const mostrarReservadas = (estado) => {
    if (estado === 'Todas') {
      setSeleccionadas(reservas)
    } else {
      const filtradas = reservas.filter((res) => res.estado === estado)
      setSeleccionadas(filtradas)
    }
  }
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const onClickMostrar = (e) => {
    const estado = e.currentTarget.id
    mostrarReservadas(estado)
  }
  return (
    <div className={`m-auto w-full max-w-4xl flex flex-col items-center gap-4 mb-4`}>
      <BtnSecundario
        className={
          'text-white w-fit h-fit self-center font-bold bg-color-violeta border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-color-violeta hover:bg-transparent'
        }
        tipo={'button'}
        texto={`${isVisible ? 'Ocultar Contador' : 'Mostrar Contador'}`}
        onClickFunction={toggleVisibility}
      />
      <section
        className={`w-full flex flex-wrap gap-4 [&>div]:flex-1 [&>div]:p-3 [&>div]:text-center [&>div]:rounded-md [&>div]:cursor-pointer [&>div]:transition-colors [&>div]:text-white [&>div]:font-betonga [&>div]:tracking-wider [&>div]:border hover:[&>div]:bg-slate-200 hover:[&>div]:text-color-violeta ${
          isVisible
            ? 'opacity-100 h-auto max-h-[500px] transition-[opacity_max-height] pointer-events-auto'
            : 'opacity-0  max-h-0 transition-[opacity_max-height] pointer-events-none'
        }`}>
        <div
          id={ESTADOS_RESERVAS.pendiente}
          className={ESTADOS_RESERVAS.pendiente}
          onClick={onClickMostrar}>
          <p className='font-bold'>Pendientes</p>
          <strong className='text-2xl'>{reservasPendientes}</strong>
        </div>
        <div
          id={ESTADOS_RESERVAS.cancelada}
          className={ESTADOS_RESERVAS.cancelada}
          onClick={onClickMostrar}>
          <p className='font-bold'>Canceladas</p>
          <strong className='text-2xl'>
            <TransitionNumber to={reservasCanceladas} />
          </strong>
        </div>
        <div id={ESTADOS_RESERVAS.pago} className={ESTADOS_RESERVAS.pago} onClick={onClickMostrar}>
          <p className='font-bold'>Pagas</p>
          <strong className='text-2xl'>
            <TransitionNumber to={reservasTerminadas} />
          </strong>
        </div>
        <div id='Todas' className='border-slate-400' onClick={onClickMostrar}>
          <p className='font-bold text-color-violeta'>Todas</p>
          <strong className='text-2xl text-color-violeta'>
            <TransitionNumber to={reservasTodas} />
          </strong>
        </div>
      </section>
    </div>
  )
}

export default ContadorReservas
