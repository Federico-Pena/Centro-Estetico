import {
	DIAS_DE_LA_SEMANA,
	HORA_DE_COMIENZO,
	HORA_DE_FIN_ENTRE_SEMANA,
	HORA_DE_FIN_SABADOS,
	INTERVALO_MINUTOS,
	MINUTOS_EN_UNA_HORA,
} from '../../constantes'
import { compararFechas } from './compararFechas'

export const diasSemanaConHoras = (currentDate, reservasSemanales) => {
	const diaActual = new Date(currentDate)
	if (Number.isNaN(diaActual.getTime())) {
		return []
	}
	diaActual.setDate(diaActual.getDate() - diaActual.getDay())
	const dias = [...Array(DIAS_DE_LA_SEMANA)].map((_, index) => {
		const dia = new Date(diaActual)
		dia.setDate(diaActual.getDate() + index + 1)

		const esSabado = 6

		const horaFinalDelDia =
			dia.getDay() === esSabado ? HORA_DE_FIN_SABADOS : HORA_DE_FIN_ENTRE_SEMANA

		const hours = Array.from(
			{ length: horaFinalDelDia - HORA_DE_COMIENZO + 1 },
			(_, hour) => hour + HORA_DE_COMIENZO
		)
		const minutes = Array.from(
			{ length: MINUTOS_EN_UNA_HORA / INTERVALO_MINUTOS },
			(_, index) => index * INTERVALO_MINUTOS
		)
		const horas = hours
			.flatMap((hour) =>
				minutes.map((minute) => {
					if (horasValidas(hour, minute, dia)) {
						const time = new Date(dia)
						time.setHours(hour, minute, 0)
						return time
					}
					return null
				})
			)
			.filter(Boolean)
		const horaID = horas.map((time) => compararFechas(time, reservasSemanales))
		return { dia, horas, horaID }
	})

	return dias
}

const horasValidas = (hour, minute, day) => {
	const horaValida =
		!(hour === 20 && minute === 30) &&
		!(day.getDay() === 6 && hour === 12 && minute === 30) &&
		!(day.getDay() === 0)
	return horaValida
}
