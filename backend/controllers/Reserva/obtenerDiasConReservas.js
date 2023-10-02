import { ESTADOS_RESERVAS } from '../../constantes.js'
import { Reserva } from '../../models/ReservaSchema.js'

export const obtenerDiasConReservas = async (req, res) => {
  const { mes } = req.params
  const año = new Date().getFullYear()
  const mesInicio = mes
  const mesFin = mes === '12' ? '01' : (parseInt(mes) + 1).toString()
  const añoFin = mes === '12' ? (año + 1).toString() : año.toString()
  try {
    const reservasDuplicadas = await Reserva.find({
      'horario.horaInicio': {
        $gte: new Date(`${año}-${mesInicio}-01`),
        $lt: new Date(`${añoFin}-${mesFin}-01`)
      }
    })

    const fechasÚnicas = new Set()
    reservasDuplicadas.forEach((objeto) => {
      const horaInicio = new Date(objeto.horario.horaInicio)
      const fecha = horaInicio.toISOString().split('T')[0]
      fechasÚnicas.add(fecha)
    })

    const fechas = [...fechasÚnicas].sort((a, b) => (a < b ? 1 : -1))
    const sinAdminNiCancelada = reservasDuplicadas.filter(
      (res) => res.pacienteNombre !== 'admin' && res.estado !== ESTADOS_RESERVAS.cancelada
    )
    res.json({
      fechas,
      cantidad: fechas.length,
      totalReservasMes: sinAdminNiCancelada.length
    })
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las fechas' })
  }
}
