import { Router } from 'express'
import { estadisticasReservas } from '../../controllers/Estadisticas/Reservas/reservasEstadisticas.js'
import { getReservasDelAno } from '../../controllers/Estadisticas/Reservas/reservasAno.js'
export const estadisticasRoutes = Router()
estadisticasRoutes.get('/api/admin/estadisticas/reservas', estadisticasReservas)
estadisticasRoutes.get('/api/admin/estadisticas/reservas/ano/:year', getReservasDelAno)
