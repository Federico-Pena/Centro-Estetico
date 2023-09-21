import { formatFechaParaUser } from '../../../helpers/Formato/formatFechaParaUser'

export const formularioReservaSubmit = (formRef, hora) => {
	const form = formRef.current
	const reserva = {
		pacienteNombre: form.pacienteNombre.value,
		fecha: form.fecha.value,
		hora: hora,
		observaciones: form.observaciones.value,
	}
	const linwhat = import.meta.env.VITE_W_NUM
	const mensaje = `Me interesa hacer la siguiente reserva.
      Nombre: ${reserva.pacienteNombre}	 
      Fecha: ${formatFechaParaUser(reserva)}	 
      Hora: ${reserva.hora}	 
      Observaciones: ${reserva.observaciones}`
	window.open(
		`https://wa.me/${linwhat}?text=${encodeURIComponent(mensaje)}`,
		'_blank'
	)
	form.reset()
}
