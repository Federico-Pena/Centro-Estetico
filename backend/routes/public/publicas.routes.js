import { Router } from 'express'
import { obtenerServicios } from '../../controllers/servicios/obtenerServicios.js'
import { reservasDeUnDia } from '../../controllers/reservas/reservasDeUnDia.js'
import { obtenerPromociones } from '../../controllers/servicios/obtenerPromociones.js'

export const publicasRoutes = Router()
publicasRoutes.get('/api/servicios', obtenerServicios)
publicasRoutes.get('/api/promociones', obtenerPromociones)
publicasRoutes.get('/api/reservasDia/:fecha', reservasDeUnDia)
