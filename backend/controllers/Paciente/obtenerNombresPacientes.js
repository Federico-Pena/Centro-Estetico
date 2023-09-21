import { Paciente } from '../../models/PacienteSchema.js'

export const obtenerNombresPacientes = async (req, res) => {
	const page = parseInt(req.params.pagina) > 1 ? parseInt(req.params.pagina) : 1
	const porPagina = 10
	const totalPacientes = await Paciente.countDocuments()

	try {
		const pacientesBD = await Paciente.aggregate([
			{
				$project: {
					_id: 1,
					nombre: 1,
					foto: 1,
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
				$skip: (page - 1) * porPagina, // Salta los elementos de las páginas anteriores
			},
			{
				$limit: porPagina,
			},
		])

		const totalPages = Math.ceil(totalPacientes / porPagina)
		if (pacientesBD) {
			return res.status(200).json({
				pacientes: pacientesBD,
				totalPages,
				page,
				totalPacientes,
			})
		} else {
			return res.status(404).json({ message: 'Error al buscar los pacientes' })
		}
	} catch (err) {
		return res.status(500).json({ message: err.message })
	}
}
