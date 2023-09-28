import { Router } from 'express'
import { crearTratamiento } from '../controllers/Tratamiento/crearTratamiento.js'
const tratamientoRouter = Router()

tratamientoRouter.post('/api/tratamiento/agregar', crearTratamiento)

export default tratamientoRouter
