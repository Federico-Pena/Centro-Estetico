import { formatFechaParaUser } from '../../../frontend/src/helpers/Formato/formatFechaParaUser.js'
import { formatHoraUser } from '../../../frontend/src/helpers/Formato/formatHoraUser.js'
import { Reserva } from '../../models/ReservaSchema.js'
import { Tratamiento } from '../../models/TratamientoSchema.js'
import { obtenerCantidadSesiones } from './agregarReserva.js'

export const editarReserva = async (req, res) => {
  try {
    const { _id, pacienteNombre, fecha, observaciones, tratamiento, sesionSeleccionada, estado } =
      req.body
    const horaInicio = new Date(`${fecha}`)
    const horaValida = horaInicio.getHours()
    if (horaValida < 8 || horaValida > 23) {
      return res.status(500).json({ error: 'Hora no valida para hacer reserva' })
    }

    const horaDeFin = new Date(horaInicio)
    horaDeFin.setMinutes(horaDeFin.getMinutes() + 30)
    const reservaGuardada = await Reserva.findById(_id)
    if (!reservaGuardada) {
      return res.status(404).json({ error: 'La reserva no existe' })
    }
    const tratamientoExistente = await Tratamiento.findOne({
      nombre: tratamiento
    })
    if (!tratamientoExistente) {
      return res.status(404).json({
        error: 'Tratamiento no encontrado'
      })
    }
    // Buscar la sesión seleccionada
    const sesion = tratamientoExistente.sesiones.find((s) => s.descripcion === sesionSeleccionada)

    if (!sesion) {
      return res.status(400).json({
        error: 'Sesión no encontrada para el tratamiento seleccionado'
      })
    }

    const reservaNueva = {
      pacienteNombre,
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
      observaciones,
      estado
    }
    const nuevaReserva = await Reserva.findByIdAndUpdate(reservaGuardada._id, reservaNueva)

    if (!nuevaReserva) {
      return res.status(404).json({ error: 'La reserva no existe' })
    }
    const reserva = await Reserva.findOne(nuevaReserva._id)
    const mensaje = `Reserva nueva de ${reserva.pacienteNombre}  el dia ${formatFechaParaUser({
      fecha: reserva.horario.horaInicio
    })} a las  ${formatHoraUser(new Date(reserva.horario.horaInicio))}`
    return res.status(200).json({
      reserva,
      mensaje
    })
  } catch (error) {
    return res.status(500).json({ error: 'Error al editar la reserva' })
  }
}
