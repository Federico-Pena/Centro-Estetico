import { Router } from 'express'
const router = Router()
import { obtenerPacientePorId } from '../controllers/Paciente/obtenerPacientePorId.js'
import { obtenerPacientes } from '../controllers/Paciente/obtenerPacientes.js'
import { editarPaciente } from '../controllers/Paciente/editarPaciente.js'
import { eliminarPaciente } from '../controllers/Paciente/eliminarPaciente.js'
import { agregarPaciente } from '../controllers/Paciente/agregarPaciente.js'
import { fotoASubir } from '../middlewares/multerConfig.js'
import { obtenerNombresPacientes } from '../controllers/Paciente/obtenerNombresPacientes.js'

//////////////////////////////  Pacientes  //////////////////////////////////

// Ruta GET para Obtener todos los pacientes
router.get('/api/pacientes/todos', obtenerPacientes)
// Ruta GET para Obtener todos Nombres de los pacientes
router.get('/api/pacientes/nombres/:pagina', obtenerNombresPacientes)
// Ruta GET para Obtener un paciente por ID
router.get('/api/pacientes/id/:id', obtenerPacientePorId)
// Ruta PUT para Editar un paciente por ID
router.put('/api/pacientes/editar/:id', fotoASubir, editarPaciente)
// Ruta DELETE para Eliminar un paciente
router.delete('/api/pacientes/eliminar/:id', eliminarPaciente) //
// Ruta POST para Agregar un paciente
router.post('/api/pacientes/agregar', fotoASubir, agregarPaciente)

export { router }
