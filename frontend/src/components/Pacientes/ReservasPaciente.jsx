import { useReservasPaciente } from '../../Hooks/Api/Reservas/useReservasPaciente.jsx'
import { ContenedorReservas } from '../ContenedorReservas/ContenedorReservas.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import { ESTADOS_RESERVAS, HOY_FECHA_STRING, RUTAS } from '../../constantes.js'
import { HeaderReservasPaciente } from './HeaderReservasPaciente.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLoaderContext } from '../../Hooks/Context/useLoaderContext.jsx'
import { useReservasContext } from '../../Hooks/Context/useReservasContext.jsx'
import ResumenReservas from './ResumenReservas.jsx'

const ReservasPaciente = () => {
  const location = useLocation()
  const statePaciente = location.state?.paciente
  const navigate = useNavigate()
  const { loading } = useLoaderContext()
  const { reservas } = useReservasContext()
  const { totalPaginas, setPagina } = useReservasPaciente(statePaciente._id)

  const handleAgregarReserva = async () => {
    navigate(RUTAS.admin.agregarReserva, {
      state: {
        reserva: {
          paciente: {
            nombre: statePaciente.nombre
          },
          horario: { horaInicio: HOY_FECHA_STRING.split('T')[0] }
        }
      }
    })
  }

  const { paga, cancelada, pendiente } = cantidadReservas(reservas)
  return (
    <section className='grid grid-rows-[70px_auto_1fr] gap-4 mx-auto max-w-5xl w-full p-4'>
      <HeaderReservasPaciente handleAgregarReserva={handleAgregarReserva} />
      {reservas.length > 0 && (
        <Pagination loading={loading} totalPages={totalPaginas} onPageChange={setPagina} />
      )}
      <ResumenReservas cancelada={cancelada} pago={paga} pendiente={pendiente} />
      <ContenedorReservas reservas={reservas} />
    </section>
  )
}
export default ReservasPaciente

const cantidadReservas = (reservas) => {
  const cantidadEstados = {
    pendiente: 0,
    paga: 0,
    cancelada: 0
  }
  reservas.forEach((reserva) => {
    const { estado } = reserva
    if (estado === ESTADOS_RESERVAS.pago) {
      cantidadEstados.paga++
    } else if (estado === ESTADOS_RESERVAS.pendiente) {
      cantidadEstados.pendiente++
    } else if (estado === ESTADOS_RESERVAS.cancelada) {
      cantidadEstados.cancelada++
    }
  })
  return cantidadEstados
}
