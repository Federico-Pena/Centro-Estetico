import { formatFechaParaUser } from '../../../frontend/src/Helpers/formatFechaParaUser.js'
import { formatHoraUser } from '../../../frontend/src/Helpers/formatHoraUser.js'
import { ESTADOS_RESERVAS, ZONA_HORARIA_URUGUAY } from '../../../frontend/src/constantes.js'
import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import { Paciente } from '../../models/PacienteSchema.js'
import { Reserva } from '../../models/ReservaSchema.js'
import Servicio from '../../models/ServicioSchema.js'
import Tratamiento from '../../models/TratamientoSchema.js'

export const agregarReserva = async (req, res) => {
  try {
    const { pacienteNombre, fecha, observaciones, tratamiento, servicio } = req.body
    const horaInicio = new Date(fecha)
    const horaValida = horaInicio.getUTCHours() - ZONA_HORARIA_URUGUAY
    if (horaValida < 8 || horaValida > 20) {
      const response = {
        error: 'Hora no valida para hacer reserva',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const horaDeFin = new Date(horaInicio)
    horaDeFin.setMinutes(horaDeFin.getMinutes() + 30)

    const reservaExistente = await Reserva.findOne({
      'horario.horaInicio': horaInicio
    })
    if (reservaExistente) {
      if (reservaExistente.estado !== ESTADOS_RESERVAS.cancelada) {
        const response = {
          error: 'Horario ya reservado',
          status: 400
        }
        return crearRespuestaJSON(response)
      }
    }

    let pacienteExistente = await Paciente.findOne({ nombre: pacienteNombre.toLowerCase() })
    if (!pacienteExistente) {
      pacienteExistente = new Paciente({ nombre: pacienteNombre })
      await pacienteExistente.save()
    }

    const servicioExistente = await Servicio.findOne({ nombre: servicio })
    if (!servicioExistente) {
      const response = {
        error: 'Servicio no encontrado',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }

    const tratamientosExistentes = await Tratamiento.find({ servicio: servicioExistente._id })
    if (!tratamientosExistentes) {
      const response = {
        error: 'Servicio no encontrado',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const tratamientoExistente = tratamientosExistentes.find((trata) => {
      const descripcion = tratamiento.split('-')[0].trim().toLowerCase()
      const sesiones = parseInt(tratamiento.split('-')[1].trim().match(/\d+/)[0], 10)
      return trata.descripcion === descripcion && trata.sesiones === sesiones
    })

    const reserva = new Reserva({
      paciente: pacienteExistente._id,
      horario: {
        horaInicio,
        horaDeFin
      },
      observaciones,
      servicio: servicioExistente._id,
      tratamiento: tratamientoExistente._id
    })
    const nuevaReserva = await reserva.save()

    const reservaActualizada = await Reserva.findOne({ _id: nuevaReserva._id })
      .populate('paciente', 'nombre')
      .populate('servicio', 'nombre')
      .populate({
        path: 'tratamiento',
        select: 'descripcion costoPorSesion sesiones'
      })

    const mensaje = `Reserva nueva de ${pacienteExistente.nombre}  el dia ${formatFechaParaUser(
      reservaActualizada.horario.horaInicio
    )} a las  ${formatHoraUser(new Date(reservaActualizada.horario.horaInicio))}`
    const response = {
      mensaje,
      status: 200,
      datos: reservaActualizada,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    const response = {
      error: 'Error al crear la reserva',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
