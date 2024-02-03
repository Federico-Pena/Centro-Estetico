import { Router } from 'express'
import { getPacientesPaginados } from '../../controllers/pacientes/getPacientesPaginados.js'
import { eliminarPaciente } from '../../controllers/pacientes/eliminarPaciente.js'
import { agregarPaciente } from '../../controllers/pacientes/agregarPaciente.js'
import { imagenASubir } from '../../middlewares/multerConfig.js'
import { migraDatos } from '../../controllers/pacientes/migrarDatos.js'
import { editarPaciente } from '../../controllers/pacientes/editarPaciente.js'
import { obtenerPacientePorId } from '../../controllers/pacientes/obtenerPacientePorId.js'
import { obtenerNombresPacientesParaForm } from '../../controllers/pacientes/obtenerNombresPacientesParaForm.js'

export const pacientesRoutes = Router()
pacientesRoutes.get('/api/admin/pacientes', migraDatos)
pacientesRoutes.get('/api/admin/pacientes/nombres', obtenerNombresPacientesParaForm)
pacientesRoutes.get('/api/admin/pacientes/:pagina', getPacientesPaginados)
pacientesRoutes.get('/api/admin/paciente/:id', obtenerPacientePorId)
pacientesRoutes.post('/api/admin/pacientes/nuevo', imagenASubir, agregarPaciente)
pacientesRoutes.put('/api/admin/paciente/editar/:id', imagenASubir, editarPaciente)
pacientesRoutes.delete('/api/admin/pacientes/borrar/:id', eliminarPaciente)
