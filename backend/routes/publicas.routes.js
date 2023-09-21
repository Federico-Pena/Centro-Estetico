import { Router } from 'express'
import { fechasHorasReservadasDeUnDia } from '../controllers/Publicas/fechasHorasReservadasDeUnDia.js'

export const publicas = Router()
// Ruta GET para obtener reservas de la Dia
publicas.get('/api/reservas/dia/horas/:fecha', fechasHorasReservadasDeUnDia)
