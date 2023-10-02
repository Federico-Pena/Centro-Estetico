import { Tratamiento } from '../../models/TratamientoSchema.js'

export const obtenerTratamientos = async (req, res) => {
	try {
		const tratamientos = await Tratamiento.find({}).sort('nombre')
		if (!tratamientos.length) {
			return res.status(404).json({
				mensaje: 'No se encontraron tratamientos',
			})
		}
		return res.status(200).json({
			tratamientos,
		})
	} catch (error) {
		console.error('Error al buscar tratamientos:', error.message)
		return res
			.status(500)
			.json({ error: 'Error interno al buscar tratamientos' })
	}
}
