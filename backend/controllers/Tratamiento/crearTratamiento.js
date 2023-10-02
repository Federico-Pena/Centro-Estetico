import { Tratamiento } from '../../models/TratamientoSchema.js'
// se uso para crear los tratamientos desde thunder client (falta frontend)

/**
 * @function crearTratamiento
 * @description Crea un nuevo tratamiento o añade una nueva sesión a un tratamiento existente.
 * @param {Object} req - Objeto de solicitud (request).
 * @description nombre del tratamiento, descripción de la sesión y su precio
 * @returns {Object} - Respuesta JSON con el resultado de la operación.
 */
export const crearTratamiento = async (req, res) => {
  try {
    const { tratamientoNombre, descripcion, precio } = req.body

    let tratamientoExistente = await Tratamiento.findOne({
      nombre: tratamientoNombre
    })

    if (!tratamientoExistente) {
      tratamientoExistente = new Tratamiento({
        nombre: tratamientoNombre
      })
    }

    // Verificar si la sesión ya existe para evitar duplicados
    const sesionExistente = tratamientoExistente.sesiones.find((s) => s.descripcion === descripcion)

    if (sesionExistente) {
      return res.status(400).json({
        mensaje: 'La sesión ya existe para este tratamiento'
      })
    }

    // Crear nueva sesión
    tratamientoExistente.sesiones.push({ descripcion, precio })
    await tratamientoExistente.save()

    return res.status(200).json({
      mensaje: 'Sesión creada con éxito',
      tratamiento: tratamientoExistente
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: 'Error al crear la sesión'
    })
  }
}
