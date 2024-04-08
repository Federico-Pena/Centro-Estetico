import { Router } from 'express'
import { deLaSemana } from '../../controllers/reservas/deLaSemana.js'
import { deUnPaciente } from '../../controllers/reservas/deUnPaciente.js'
import { agregarReserva } from '../../controllers/reservas/agregarReserva.js'
import { eliminarReserva } from '../../controllers/reservas/eliminarReserva.js'
import { editarEstadoReserva } from '../../controllers/reservas/editarEstadoReserva.js'
import { editarReserva } from '../../controllers/reservas/editarReserva.js'
import { reservasDeUnDiaFormAdmin } from '../../controllers/reservas/reservasDeUnDiaFormAdmin.js'
import { delMes } from '../../controllers/reservas/delMes.js'

export const reservasRoutes = Router()
reservasRoutes.get('/api/admin/reservasSemana/:fecha', deLaSemana)
reservasRoutes.get('/api/admin/reservasDelMes/:fecha', delMes)
reservasRoutes.get('/api/admin/reservasDia/:fecha', reservasDeUnDiaFormAdmin)
reservasRoutes.get('/api/admin/reservasPaciente/:pagina/:id', deUnPaciente)
reservasRoutes.post('/api/admin/reservas/nueva', agregarReserva)
reservasRoutes.put('/api/admin/reservas/estado/:id', editarEstadoReserva)
reservasRoutes.put('/api/admin/reservas/editar/:id', editarReserva)
reservasRoutes.delete('/api/admin/reservas/borrar/:id', eliminarReserva)
