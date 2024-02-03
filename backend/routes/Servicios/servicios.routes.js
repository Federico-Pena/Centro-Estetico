import { Router } from 'express'
import { obtenerServicios } from '../../controllers/servicios/obtenerServicios.js'
import { obtenerNombresServicio } from '../../controllers/servicios/obtenerNombresServicio.js'
import { editarServicio } from '../../controllers/servicios/editarServicio.js'
import { imagenASubir } from '../../middlewares/multerConfig.js'
import { eliminarServicio } from '../../controllers/servicios/eliminarServicio.js'
import { agregarServicio } from '../../controllers/servicios/agregarServicio.js'
import { obtenerNombresServiciosNombresTratamientos } from '../../controllers/servicios/obtenerNombresServiciosNombresTratamientos.js'

export const serviciosRoutes = Router()
serviciosRoutes.get('/api/admin/servicios', obtenerServicios)
serviciosRoutes.get(
  '/api/admin/serviciosNombresYTratamientos',
  obtenerNombresServiciosNombresTratamientos
)
serviciosRoutes.post('/api/admin/servicios/agregar', imagenASubir, agregarServicio)
serviciosRoutes.get('/api/admin/serviciosNombres', obtenerNombresServicio)
serviciosRoutes.put('/api/admin/servicios/editar', imagenASubir, editarServicio)
serviciosRoutes.delete('/api/admin/servicios/borrar/:id', eliminarServicio)
