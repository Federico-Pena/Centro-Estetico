import { Router } from 'express'
import { crearTratamiento } from '../controllers/Tratamiento/crearTratamiento.js'
import { obtenerTratamientos } from '../controllers/Tratamiento/obtenerTratamientos.js'
const tratamientoRouter = Router()
tratamientoRouter.get('/api/tratamiento/obtener', obtenerTratamientos)

tratamientoRouter.post('/api/tratamiento/agregar', crearTratamiento)

export default tratamientoRouter
