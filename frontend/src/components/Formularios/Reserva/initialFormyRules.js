import { formatHoraUser } from '../../../Helpers/formatHoraUser.js'

export const validationRules = {
  nombre: { required: true },
  horaInicio: { required: true },
  servicio: { required: true },
  tratamiento: { required: true },
  hora: { required: true }
}

export const initialForm = (reserva, edicion, desdeCalendario) => {
  const tratamientoDesc = reserva?.tratamiento?.descripcion || ''
  const sesiones = reserva?.tratamiento?.sesiones
  let tratamientoStr = ''
  if (tratamientoDesc && sesiones !== undefined) {
    tratamientoStr = `${tratamientoDesc} - ${sesiones} ${sesiones > 1 ? 'Sesiones' : 'Sesión'}`
  }
  const initialFormData = {
    nombre: reserva?.paciente?.nombre || '',
    horaInicio: reserva?.horario?.horaInicio.split('T')[0] || '',
    hora: ((edicion || desdeCalendario) && formatHoraUser(reserva?.horario?.horaInicio)) || '',
    observaciones: reserva?.observaciones || '',
    servicio: reserva?.servicio?.nombre || '',
    tratamiento: tratamientoStr || '',
    estado: reserva?.estado || ''
  }
  return initialFormData
}
