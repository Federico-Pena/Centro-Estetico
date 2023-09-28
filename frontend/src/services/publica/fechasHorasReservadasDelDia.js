import { compararFechas } from '../../helpers/FechasHoras/compararFechas'
import { diasSemanaConHoras } from '../../helpers/FechasHoras/diasSemanaConHoras'
import { apiEndPoint } from '../apiConfig'
export const fechasHorasReservadasDelDia = async (dia, authToken) => {
	const díasSemana = diasSemanaConHoras(dia)
	const numeroDia = new Date(dia).getDay()
	const diaSeleccionado = díasSemana[numeroDia]
	if (numeroDia === 6) {
		return { horas: [], reservasDia: [] }
	}
	try {
		const res = await fetch(
			`${apiEndPoint.publicas.fechasHorasReservadasDeUndia}${dia}`,
			{
				headers: {
					Authorization: `Bearer ${authToken || ''}`,
				},
			}
		)
		const { fechasHoras } = await res.json()

		const horas = obtenerHorasReservadas(diaSeleccionado.horas, fechasHoras)
		return { horas, fechasHoras }
	} catch (error) {
		console.log(error)
	}
}

const obtenerHorasReservadas = (horas, reservasDia) => {
	return horas.map((hora) => compararFechas(hora, reservasDia))
}
