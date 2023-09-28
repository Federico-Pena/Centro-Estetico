import { Tratamiento } from '../../models/TratamientoSchema.js'

export const obtenerTratamientos = async (req, res) => {
	try {
		let tratamientos = await Tratamiento.find({}).sort('nombre')
		if (!tratamientos) {
			res.status(404).json({
				mensaje: 'No se encontraron tratamientos',
				error: error.message,
			})
		}

		return res.status(200).json({
			tratamientos,
		})
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({
			mensaje: 'Error al buscar tratamientos',
			error: error.message,
		})
	}
}
