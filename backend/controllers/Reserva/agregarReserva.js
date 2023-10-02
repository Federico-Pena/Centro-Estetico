import { Reserva } from '../../models/ReservaSchema.js'
import { Paciente } from '../../models/PacienteSchema.js'
import { Tratamiento } from '../../models/TratamientoSchema.js'
import { formatFechaParaUser } from '../../../frontend/src/helpers/Formato/formatFechaParaUser.js'
import { formatHoraUser } from '../../../frontend/src/helpers/Formato/formatHoraUser.js'

export const agregarReserva = async (req, res) => {
  try {
    const { pacienteNombre, fecha, observaciones, tratamiento, sesionSeleccionada } = req.body
    const horaInicio = new Date(`${fecha}`)
    const horaDeFin = new Date(horaInicio)
    const horaValida = horaInicio.getHours()
    if (horaValida < 8 || horaValida > 23) {
      return res.status(500).json({ error: 'Hora no valida para hacer reserva' })
    }
    horaDeFin.setMinutes(horaDeFin.getMinutes() + 30)
    const ReservaExistente = await Reserva.find({
      'horario.horaInicio': horaInicio
    })
    if (ReservaExistente.length) {
      return res.status(500).json({
        error: 'Horario ya reservado'
      })
    }
    let pacienteExistente = await Paciente.findOne({ nombre: pacienteNombre })
    if (!pacienteExistente) {
      pacienteExistente = new Paciente({ nombre: pacienteNombre })
      await pacienteExistente.save()
    }

    const tratamientoExistente = await Tratamiento.findOne({
      nombre: tratamiento
    })
    if (!tratamientoExistente) {
      return res.status(404).json({
        error: 'Tratamiento no encontrado'
      })
    }
    const sesion = tratamientoExistente.sesiones.find((s) => s.descripcion === sesionSeleccionada)
    if (!sesion) {
      return res.status(400).json({
        error: 'Sesión no encontrada para el tratamiento seleccionado'
      })
    }
    const reserva = new Reserva({
      paciente: pacienteExistente._id,
      pacienteNombre: pacienteExistente.nombre,
      horario: {
        horaInicio,
        horaDeFin
      },
      tratamiento: {
        tratamientoId: tratamientoExistente._id,
        nombre: tratamientoExistente.nombre,
        sesiones: obtenerCantidadSesiones(sesionSeleccionada),
        descripcionSesion: sesion.descripcion
      },
      precio: sesion.precio / obtenerCantidadSesiones(sesionSeleccionada),
      observaciones
    })

    await reserva.save()
    const mensaje = `Reserva nueva de ${reserva.pacienteNombre}  el dia ${formatFechaParaUser({
      fecha: reserva.horario.horaInicio
    })} a las  ${formatHoraUser(new Date(reserva.horario.horaInicio))}`
    return res.status(200).json({ reserva, mensaje })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: 'Error al crear la reserva'
    })
  }
}

// Función para extraer la cantidad de sesiones desde la descripción de la sesión
export function obtenerCantidadSesiones(descripcionSesion) {
  // Implementa la lógica según el formato de tus descripciones
  const matches = descripcionSesion.match(/\d+/)
  return matches ? parseInt(matches[0], 10) : 1
}
