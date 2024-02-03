import { Reserva } from '../../../models/ReservaSchema.js'

export const getReservasPorMes = async (req, res) => {
  const { year, month } = req.params
  const startOfMonth = new Date(year, month, 1)
  let endOfMonth

  if (month == 11) {
    endOfMonth = new Date(parseInt(year) + 1, 0, 0)
  } else {
    endOfMonth = new Date(year, parseInt(month) + 1, 0)
  }

  try {
    const reservas = await Reserva.find({
      'horario.horaInicio': {
        $gte: startOfMonth,
        $lte: endOfMonth
      }
    })
    res.json(reservas)
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener las reservas', error: err })
  }
}
