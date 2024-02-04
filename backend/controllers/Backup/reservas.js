import { Reserva } from '../../models/ReservaSchema.js'

export const backupReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find({})

    const reservasJSON = JSON.stringify(reservas, null, 2)

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Content-Disposition', 'attachment; filename=reservas_backup.json')
    res.send(reservasJSON)
  } catch (error) {
    console.error('Error al realizar el backup:', error)
    res.status(500).json({ error: 'Ocurrió un error inesperado' })
  }
}
