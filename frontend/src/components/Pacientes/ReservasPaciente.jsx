import { useContext } from 'react'
import { useReservasPaciente } from '../../Hooks/Api/Reservas/useReservasPaciente.jsx'
import { ContenedorReservas } from '../ContenedorReservas/ContenedorReservas.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import { ReservasContext } from '../../Context/Reservas/ReservasContext.jsx'
import { ACTIONS_RESERVAS } from '../../Context/Reservas/reducerReservas.js'
import { HOY_FECHA_STRING, RUTAS } from '../../constantes.js'
import { HeaderReservasPaciente } from './HeaderReservasPaciente.jsx'
import { PacientesContext } from '../../Context/Pacientes/PacientesContext.jsx'
import { useNavigate } from 'react-router-dom'
import { LoaderContext } from '../../Context/Loader/LoaderContext.jsx'

const ReservasPaciente = () => {
  const { paciente } = useContext(PacientesContext)
  const { loading } = useContext(LoaderContext)
  const { reservas, dispatch } = useContext(ReservasContext)
  const { totalPaginas, setPagina } = useReservasPaciente(paciente && paciente._id)
  const navigate = useNavigate()
  const handleAgregarReserva = () => {
    navigate(RUTAS.admin.agregarReserva)
    dispatch({
      type: ACTIONS_RESERVAS.SET_RESERVA,
      payload: {
        paciente: {
          nombre: paciente.nombre
        },
        horario: { horaInicio: HOY_FECHA_STRING.split('T')[0] }
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
