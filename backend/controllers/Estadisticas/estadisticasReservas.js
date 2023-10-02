import { calcularGanancias } from '../../helpers/calcularGanancias.js'
import { contadorEstados } from '../../helpers/contadorEstados.js'
import { contadorMotivosYTratamientos } from '../../helpers/contadorMotivosYTratamientos.js'
import { Reserva } from '../../models/ReservaSchema.js'

export const estadisticasReservas = async (req, res) => {
  try {
    const { mes } = req.params
    const año = new Date().getFullYear()
    const mesInicio = mes
    const mesFin = mes === '12' ? '01' : (parseInt(mes) + 1).toString()
    const añoFin = mes === '12' ? (año + 1).toString() : año.toString()
    const [reservas, reservasMes] = await Promise.all([
      Reserva.find({ pacienteNombre: { $ne: 'admin' } }),
      Reserva.find({
        pacienteNombre: { $ne: 'admin' },
        'horario.horaInicio': {
          $gte: new Date(`${año}-${mesInicio}-01`),
          $lt: new Date(`${añoFin}-${mesFin}-01`)
        }
      })
        .select('estado')
        .select('precio')
    ])
    const estadisticasPaciente = req.estadisticas
    const estadosTodas = contadorEstados(reservas)
    const estadosMes = contadorEstados(reservasMes)
    const reservaMotivo = contadorMotivosYTratamientos(reservas)
    const gananciaTotal = calcularGanancias(reservas)
    const gananciaMes = calcularGanancias(reservasMes)
    res.status(200).json({
      estadosTodas,
      estadosMes,
      reservaMotivo,
      estadisticasPaciente,
      gananciasReservas: {
        totales: gananciaTotal.total,
        mes: gananciaMes.total
      }
    })
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al calcular estadísticas' })
  }
}
