import { crearRespuestaJSON } from '../../Helpers/crearRespuestaJSON.js'
import { Paciente } from '../../models/PacienteSchema.js'
import { Reserva } from '../../models/ReservaSchema.js'
import { eliminarDeCloudinary } from '../cloudinaryImagenes.js'

export const eliminarPaciente = async (req, res) => {
  try {
    const idUser = req.params.id
    if (!idUser) {
      const response = {
        error: 'Debe proporcionar un id',
        status: 400,
        res
      }
      return crearRespuestaJSON(response)
    }
    const [userExistente, reservasPaciente] = await Promise.all([
      Paciente.findByIdAndDelete(idUser),
      Reserva.deleteMany({ paciente: { $in: idUser } })
    ])
    if (!userExistente) {
      const response = {
        error: 'Paciente no encontrado',
        status: 404,
        res
      }
      return crearRespuestaJSON(response)
    }
    if (userExistente.foto && userExistente.foto.public_id) {
      try {
        await eliminarDeCloudinary(userExistente.foto.public_id)
      } catch (error) {
        const response = {
          error: 'Error al eliminar la foto del usuario',
          status: 500,
          res
        }
        return crearRespuestaJSON(response)
      }
    }
    const response = {
      mensaje: `Paciente eliminado ${userExistente.nombre}. Reservas eliminadas ${reservasPaciente.deletedCount}`,
      status: 200,
      res
    }
    return crearRespuestaJSON(response)
  } catch (error) {
    const response = {
      error: 'Error al eliminar el Paciente',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}
