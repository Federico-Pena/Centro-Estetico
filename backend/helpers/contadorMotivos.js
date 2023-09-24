import { TRATAMIENTOS } from '../constantes.js'

export function contadorMotivos(arrayReservas) {
	if (arrayReservas instanceof Array) {
		const counts = arrayReservas.reduce(
			(acc, reserva) => {
				if (reserva.motivo === TRATAMIENTOS.barrasDeAccess) {
					acc.barrasDeAccess++
				} else if (reserva.motivo === TRATAMIENTOS.cérvicoCraneal) {
					acc.cérvicoCraneal++
				} else if (reserva.motivo === TRATAMIENTOS.drenajeLinfático) {
					acc.drenajeLinfático++
				} else if (reserva.motivo === TRATAMIENTOS.exfoliaciónCorporal) {
					acc.exfoliaciónCorporal++
				} else if (reserva.motivo === TRATAMIENTOS.masajeDescontracturante) {
					acc.masajeDescontracturante++
				} else if (reserva.motivo === TRATAMIENTOS.masajeEstético) {
					acc.masajeEstético++
				} else if (reserva.motivo === TRATAMIENTOS.masajePrenatal) {
					acc.masajePrenatal++
				} else if (reserva.motivo === TRATAMIENTOS.masajeRelajante) {
					acc.masajeRelajante++
				} else if (reserva.motivo === TRATAMIENTOS.piedrasCalientes) {
					acc.piedrasCalientes++
				}
				return acc
			},
			{
				barrasDeAccess: 0,
				cérvicoCraneal: 0,
				drenajeLinfático: 0,
				exfoliaciónCorporal: 0,
				masajeDescontracturante: 0,
				masajeEstético: 0,
				masajePrenatal: 0,
				masajeRelajante: 0,
				piedrasCalientes: 0,
			}
		)
		return {
			barrasDeAccess: counts.barrasDeAccess,
			cérvicoCraneal: counts.cérvicoCraneal,
			drenajeLinfático: counts.drenajeLinfático,
			exfoliaciónCorporal: counts.exfoliaciónCorporal,
			masajeDescontracturante: counts.masajeDescontracturante,
			masajeEstético: counts.masajeEstético,
			masajePrenatal: counts.masajePrenatal,
			masajeRelajante: counts.masajeRelajante,
			piedrasCalientes: counts.piedrasCalientes,
		}
	} else {
		return {
			barrasDeAccess: [],
			cérvicoCraneal: [],
			drenajeLinfático: [],
			exfoliaciónCorporal: [],
			masajeDescontracturante: [],
			masajeEstético: [],
			masajePrenatal: [],
			masajeRelajante: [],
			piedrasCalientes: [],
		}
	}
}
