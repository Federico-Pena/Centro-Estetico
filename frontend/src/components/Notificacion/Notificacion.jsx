import { useContext, useEffect } from 'react'
import { formatFechaParaUser } from '../../helpers/Formato/formatFechaParaUser'
import { UserContext } from '../../context/userContext'
import { useNotification } from '../../hooks/useNotification'

export const Notificacion = () => {
	const { isAllowedAccess } = useContext(UserContext)
	const { reservasSemanales } = useNotification()
	useEffect(() => {
		if ('Notification' in window && isAllowedAccess) {
			reservasSemanales.forEach((reserva) => {
				const fechaReservaUruguay = new Date(
					`${reserva.fecha.split('T')[0]} ${reserva.hora}`
				)
				const diferenciaEnMilisegundos = fechaReservaUruguay - new Date()
				const diferenciaEnDias =
					diferenciaEnMilisegundos / (24 * 60 * 60 * 1000)
				/* diferenciaEnDias < 1 &&
					diferenciaEnDias > 0 &&
					console.log(`Tiempo hasta la reserva: ${diferenciaEnDias} dias.`) */
				const options = {
					/* body: `${reserva.pacienteNombre}\n${
						reserva.observaciones
					}\n${formatFechaParaUser({ fecha: reserva.fecha })} ${reserva.hora}` */
					body: 'Mensaje de Prueba',
					icon: '/assets/icons/icon-192.png',
					vibrate: [200, 100, 200],
					tag: 'notificacion',
				}
				if (diferenciaEnDias === 1) {
					setTimeout(() => {
						const notificación = new Notification('Recordatorio', options)
						notificación.addEventListener('click', () => {
							window.location.href =
								'https://www.masajistanataliapena.com/#/calendario'
						})
					}, fechaReservaUruguay - new Date())
				}
			})
		}
	}, [isAllowedAccess])

	return null
}
