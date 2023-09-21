import { Router } from 'express'
const router = Router()
import { agregarReserva } from '../controllers/Reserva/agregarReserva.js'
import { obtenerReservasDeUnDia } from '../controllers/Reserva/obtenerReservasDeUnDia.js'
import { obtenerReservasDeUnUsuario } from '../controllers/Reserva/obtenerReservasDeUnUsuario.js'
import { editarEstadoReserva } from '../controllers/Reserva/editarEstadoReserva.js'
import { eliminarReserva } from '../controllers/Reserva/eliminarReserva.js'
import { obtenerReservasDeLaSemana } from '../controllers/Reserva/obtenerReservasDeLaSemana.js'
import { obtenerDiasConReservas } from '../controllers/Reserva/obtenerDiasConReservas.js'
import { editarReserva } from '../controllers/Reserva/editarReserva.js'
import { obtenerReservasDeLaSemanaNotificaion } from '../controllers/Reserva/obtenerReservasDeLaSemanaNotificaion.js'
//////////////////////////////  Reservas  //////////////////////////////////
// Ruta GET para obtener reservas de la semana api notificacion
router.get(
	'/api/publica/reservas/semana/:fecha',
	obtenerReservasDeLaSemanaNotificaion
)
// Ruta GET para obtener reservas De Un Dia
router.get('/api/reservas/DeUnDia/:fecha', obtenerReservasDeUnDia)
// Ruta GET para obtener reservas de la semana
router.get('/api/reservas/semanaDel/:fecha', obtenerReservasDeLaSemana)
// Ruta GET para obtener Dias con reservas máximo un mes
router.get('/api/reservas/dias/:mes', obtenerDiasConReservas)
// Ruta GET para obtener reservas de un usuario
router.get('/api/reservas/usuario/:id', obtenerReservasDeUnUsuario)
// Ruta POST para crear una reserva
router.post('/api/reservas/agregar', agregarReserva)
// Ruta PUT para editar Estado de reservas
router.put('/api/reservas/editar/:id', editarReserva)
// Ruta PUT para editar Estado de reservas
router.put('/api/reservas/estado/:id', editarEstadoReserva)
// Ruta DELETE para eliminar una reserva
router.delete('/api/reservas/:id', eliminarReserva)

export { router }
