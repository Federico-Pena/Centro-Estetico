import { formatFechaParaUser } from '../../../frontend/src/Helpers/formatFechaParaUser.js'
import { formatHoraUser } from '../../../frontend/src/Helpers/formatHoraUser.js'
import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import { Paciente } from '../../models/PacienteSchema.js'
import { Reserva } from '../../models/ReservaSchema.js'
import Servicio from '../../models/ServicioSchema.js'
import Tratamiento from '../../models/TratamientoSchema.js'
export const editarReserva = async (req, res) => {
  try {
    const { pacienteNombre, fecha, observaciones, tratamiento, servicio, estado } = req.body
    const id = req.params.id
    const horaInicio = new Date(`${fecha}`)
    const horaValida = horaInicio.getHours()
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
    const reservaGuardada = await Reserva.findById(id)
    if (!reservaGuardada) {
      const response = {
        error: 'La reserva no existe',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }

    const pacienteExistente = await Paciente.findOne({ nombre: pacienteNombre.toLowerCase() })
    const servicioExistente = await Servicio.findOne({ nombre: servicio.toLowerCase() })

    if (!servicioExistente) {
      const response = {
        error: 'Servicio no encontrado',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const tratamientosExistentes = await Tratamiento.find({ servicio: servicioExistente._id })
    if (!tratamientosExistentes.length) {
      const response = {
        error: 'Tratamiento no encontrado',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }

    const tratamientoExistente = tratamientosExistentes.find(
      (trata) => trata.descripcion === tratamiento.toLowerCase()
    )

    const reservaACrear = {
      paciente: pacienteExistente._id,
      horario: {
        horaInicio,
        horaDeFin
      },
      observaciones,
      servicio: servicioExistente._id,
      tratamiento: tratamientoExistente._id,
      estado
    }
    const nuevaReserva = await Reserva.findByIdAndUpdate(reservaGuardada._id, reservaACrear)

    if (!nuevaReserva) {
      const response = {
        error: 'La reserva no existe',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const reserva = await Reserva.findOne(nuevaReserva._id)
      .populate('paciente', 'nombre')
      .populate('servicio', 'nombre')
      .populate({
        path: 'tratamiento',
        select: 'descripcion costoPorSesion'
      })
    const mensaje = `Reserva nueva de ${pacienteExistente.nombre}  el dia ${formatFechaParaUser(
      reserva.horario.horaInicio
    )} a las  ${formatHoraUser(new Date(reserva.horario.horaInicio))}`
    const response = {
      mensaje,
      status: 200,
      datos: reserva,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    console.log(error.message)
    const response = {
      error: 'Error al editar la reserva',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
