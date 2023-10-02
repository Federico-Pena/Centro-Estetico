import { Paciente } from '../../models/PacienteSchema.js'
import { Reserva } from '../../models/ReservaSchema.js'
import { eliminarDeCloudinary } from '../cloudinary.js'

export const eliminarPaciente = async (req, res) => {
  try {
    const idUser = req.params.id
    const [userExistente, reservasPaciente] = await Promise.all([
      Paciente.findByIdAndDelete(idUser),
      Reserva.deleteMany({ paciente: { $in: idUser } })
    ])
    if (userExistente) {
      if (userExistente.foto && userExistente.foto.public_id) {
        await eliminarDeCloudinary(userExistente.foto.public_id)
      }
      return res.status(200).json({
        mensaje: `Paciente eliminado ${userExistente.nombre}. Reservas eliminadas ${reservasPaciente.deletedCount}`
      })
    } else {
      return res.status(404).json({ error: 'Paciente no encontrado' })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar el Paciente' })
  }
}
