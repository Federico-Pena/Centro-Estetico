import { useContext } from 'react'
import { useReservasPaciente } from '../../Hooks/Api/Reservas/useReservasPaciente.jsx'
import { ContenedorReservas } from '../ContenedorReservas/ContenedorReservas.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import { ACTIONS_RESERVAS } from '../../Context/Reservas/reducerReservas.js'
import { HOY_FECHA_STRING, RUTAS } from '../../constantes.js'
import { HeaderReservasPaciente } from './HeaderReservasPaciente.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { LoaderContext } from '../../Context/Loader/LoaderContext.jsx'
import { usePacienteContext } from '../../Hooks/Context/usePacienteContext.jsx'
import { useReservaContext } from '../../Hooks/Context/useReservaContext.jsx'
import { usePaciente } from '../../Hooks/Api/Pacientes/usePaciente.jsx'

const ReservasPaciente = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { paciente } = usePacienteContext()
  const { loading } = useContext(LoaderContext)
  const { reservas } = useReservaContext()
  const { totalPaginas, setPagina } = useReservasPaciente(id)
  const { obtenerPacientePorId } = usePaciente()

  const handleAgregarReserva = async () => {
    await obtenerPacientePorId(id)
    navigate(RUTAS.admin.agregarReserva, {
      state: {
        reserva: {
          paciente: {
            nombre: paciente.nombre
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
