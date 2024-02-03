import { Router } from 'express'
import { obtenerTratamientos } from '../../controllers/tratamientos/getTratamientos.js'
import { editarTratamiento } from '../../controllers/tratamientos/editarTratamiento.js'
import { imagenASubir } from '../../middlewares/multerConfig.js'
import { eliminarTratamiento } from '../../controllers/tratamientos/eliminarTratamiento.js'
import { agregarTratamiento } from '../../controllers/tratamientos/agregarTratamiento.js'

export const tratamientosRouter = Router()
tratamientosRouter.get('/api/admin/tratamientos', obtenerTratamientos)
tratamientosRouter.put('/api/admin/tratamientos/editar/:id', imagenASubir, editarTratamiento)
tratamientosRouter.delete('/api/admin/tratamientos/borrar/:id', eliminarTratamiento)
tratamientosRouter.post('/api/admin/tratamientos/agregar', imagenASubir, agregarTratamiento)
