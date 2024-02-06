import { useReservasPaciente } from '../../Hooks/Api/Reservas/useReservasPaciente.jsx'
import { ContenedorReservas } from '../ContenedorReservas/ContenedorReservas.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import { HOY_FECHA_STRING, RUTAS } from '../../constantes.js'
import { HeaderReservasPaciente } from './HeaderReservasPaciente.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLoaderContext } from '../../Hooks/Context/useLoaderContext.jsx'
import { useReservasContext } from '../../Hooks/Context/useReservasContext.jsx'

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

  return (
    <section className='grid grid-rows-[70px_auto_1fr] gap-4 mx-auto max-w-5xl w-full p-4'>
      <HeaderReservasPaciente handleAgregarReserva={handleAgregarReserva} />
      {reservas.length > 0 && (
        <Pagination loading={loading} totalPages={totalPaginas} onPageChange={setPagina} />
      )}
      <ContenedorReservas reservas={reservas} />
    </section>
  )
}
export default ReservasPaciente
