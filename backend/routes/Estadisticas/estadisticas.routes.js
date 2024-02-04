import { Router } from 'express'
import { reservasEstadisticasTodas } from '../../controllers/Estadisticas/Reservas/reservasEstadisticasTodas.js'
import { getReservasDelAno } from '../../controllers/Estadisticas/Reservas/reservasAno.js'
import { getReservasPorMes } from '../../controllers/Estadisticas/Reservas/reservasMes.js'
export const estadisticasRoutes = Router()
estadisticasRoutes.get('/api/admin/estadisticas/reservas', reservasEstadisticasTodas)
estadisticasRoutes.get('/api/admin/estadisticas/reservas/ano/:year', getReservasDelAno)
estadisticasRoutes.get('/api/admin/estadisticas/reservas/mes/:year/:month', getReservasPorMes)
