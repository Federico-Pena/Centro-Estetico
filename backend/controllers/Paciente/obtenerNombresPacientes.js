import { Paciente } from '../../models/PacienteSchema.js'

export const obtenerNombresPacientes = async (req, res) => {
	const page = parseInt(req.params.pagina) > 1 ? parseInt(req.params.pagina) : 1
	const porPagina = 10
	const nombreBusqueda = req.query.nombre
		? req.query.nombre.toLowerCase()
		: null

	try {
		let pipeline = [
			{
				$project: {
					_id: 1,
					nombre: 1,
					foto: 1,
				},
			},
			{
				$match: {
					nombre: { $regex: nombreBusqueda, $options: 'i' },
				},
			},
			{
				$lookup: {
					from: 'reservas',
					localField: '_id',
					foreignField: 'paciente',
					as: 'reservas',
				},
			},
			{
				$addFields: {
					totalReservas: { $size: '$reservas' },
				},
			},
			{
				$unset: 'reservas',
			},
			{
				$sort: { nombre: 1 },
			},
			{
				$skip: (page - 1) * porPagina,
			},
			{
				$limit: porPagina,
			},
		]

		const pacientesBD = await Paciente.aggregate(pipeline)
		// Consulta adicional para obtener el total de resultados de la búsqueda
		const totalResultadosBusqueda = await Paciente.countDocuments({
			nombre: { $regex: nombreBusqueda, $options: 'i' },
		})

		const totalPages = Math.ceil(totalResultadosBusqueda / porPagina)

		if (pacientesBD.length > 0) {
			return res.status(200).json({
				pacientes: pacientesBD,
				totalPages,
				page,
			})
		} else {
			return res.status(404).json({ message: 'No se encontraron pacientes' })
		}
	} catch (err) {
		return res.status(500).json({ message: err.message })
	}
}
