import { RUTAS } from '../../constantes.js'

export const navLinks = [
  { name: 'Inicio', path: RUTAS.user.inicio },
  { name: 'Servicios', path: RUTAS.user.servicios },
  { name: 'Nosotros', path: RUTAS.user.nosotros },
  { name: 'Contacto', path: RUTAS.user.contacto }
]

export const adminLinks = [
  { name: 'Administración', path: RUTAS.admin.administracion },
  { name: 'Calendario', path: RUTAS.admin.calendario },
  { name: 'Estadísticas', path: RUTAS.admin.estadisticas }
]
