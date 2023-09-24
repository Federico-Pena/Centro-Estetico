import { Router } from 'express'
import { estadisticasPacientes } from '../controllers/Estadisticas/estadisticasPacientes.js'
import { estadisticasReservas } from '../controllers/Estadisticas/estadisticasReservas.js'
export const estadisticasRoutes = Router()

estadisticasRoutes.get(
	'/api/estadisticas/:mes',
	estadisticasPacientes,
	estadisticasReservas
)
