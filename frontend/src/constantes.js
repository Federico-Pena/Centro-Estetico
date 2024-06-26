import { formatFechaActualIso } from './Helpers/formatFechaActualIso.js'
export const opcionesFormatPrecio = {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}
export const ZONA_HORARIA_URUGUAY = 3

export const ESTADOS_RESERVAS = {
  pago: 'Pago',
  pendiente: 'Pendiente',
  cancelada: 'Cancelada'
}
export const DIAS_DE_LA_SEMANA = 7
export const HORA_DE_COMIENZO = 8
export const HORA_DE_FIN = 20
export const INTERVALO_MINUTOS = 30
export const HOY_FECHA_STRING = formatFechaActualIso(new Date())
export const DIAS_DE_LA_SEMANA_STRING = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado'
]
export const MESES = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]
export const RUTAS = {
  user: {
    inicio: '/',
    servicios: '/Servicios',
    contacto: '/Contacto',
    nosotros: '/Nosotros'
  },
  admin: {
    administracion: '/Administracion',
    agregarTratamiento: '/Tratamientos/Nuevo',
    editarTratamiento: '/Tratamientos/Editar',
    agregarServicio: '/Servicios/Nuevo',
    editarServicio: '/Servicios/Editar',
    agregarReserva: '/Reservas/Nueva',
    editarReserva: '/Reservas/Editar',
    reservasPaciente: '/Reservas/Paciente',
    agregarPaciente: '/Pacientes/Nuevo',
    editarPaciente: '/Pacientes/Editar',
    calendario: '/Calendario',
    estadisticas: '/Estadisticas'
  }
}
