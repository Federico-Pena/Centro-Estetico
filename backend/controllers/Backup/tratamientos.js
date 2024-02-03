import Tratamiento from '../../models/TratamientoSchema.js'

export const backupTratamiento = async (req, res) => {
  try {
    const tratamiento = await Tratamiento.find({})

    const tratamientoJSON = JSON.stringify(tratamiento, null, 2)

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Content-Disposition', 'attachment; filename=tratamiento_backup.json')
    console.log(tratamientoJSON)
    res.send(tratamientoJSON)
  } catch (error) {
    console.error('Error al realizar el backup:', error)
    res.status(500).json({ error: 'Ocurrió un error inesperado' })
  }
}
