import { Router } from 'express'
import { backupReservas } from '../../controllers/Backup/reservas.js'
import { backupServicios } from '../../controllers/Backup/servicios.js'
import { backupTratamiento } from '../../controllers/Backup/tratamientos.js'
import { backupPacientes } from '../../controllers/Backup/pacientes.js'
import { backupTodo } from '../../controllers/Backup/backupTodo.js'

export const backupRoutes = Router()
backupRoutes.get('/api/reservasBackup', backupReservas)
backupRoutes.get('/api/serviciosBackup', backupServicios)
backupRoutes.get('/api/tratamientosBackup', backupTratamiento)
backupRoutes.get('/api/pacientesBackup', backupPacientes)
backupRoutes.get('/api/todoBackup', backupTodo)
