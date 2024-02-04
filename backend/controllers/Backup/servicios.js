import Servicio from '../../models/ServicioSchema.js'

export const backupServicios = async (req, res) => {
  try {
    const servicio = await Servicio.find({})

    const servicioJSON = JSON.stringify(servicio, null, 2)

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Content-Disposition', 'attachment; filename=servicio_backup.json')
    res.send(servicioJSON)
  } catch (error) {
    console.error('Error al realizar el backup:', error)
    res.status(500).json({ error: 'Ocurrió un error inesperado' })
  }
}
