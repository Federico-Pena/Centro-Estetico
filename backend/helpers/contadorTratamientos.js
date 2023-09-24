import { TRATAMIENTOS } from '../constantes.js'

export const contadorTratamientos = (array) => {
	if (array instanceof Array) {
		const counts = array.reduce(
			(acc, paciente) => {
				if (paciente.tratamiento === TRATAMIENTOS.barrasDeAccess) {
					acc.barrasDeAccess++
				} else if (paciente.tratamiento === TRATAMIENTOS.cérvicoCraneal) {
					acc.cérvicoCraneal++
				} else if (paciente.tratamiento === TRATAMIENTOS.drenajeLinfático) {
					acc.drenajeLinfático++
				} else if (paciente.tratamiento === TRATAMIENTOS.exfoliaciónCorporal) {
					acc.exfoliaciónCorporal++
				} else if (
					paciente.tratamiento === TRATAMIENTOS.masajeDescontracturante
				) {
					acc.masajeDescontracturante++
				} else if (paciente.tratamiento === TRATAMIENTOS.masajeEstético) {
					acc.masajeEstético++
				} else if (paciente.tratamiento === TRATAMIENTOS.masajePrenatal) {
					acc.masajePrenatal++
				} else if (paciente.tratamiento === TRATAMIENTOS.masajeRelajante) {
					acc.masajeRelajante++
				} else if (paciente.tratamiento === TRATAMIENTOS.piedrasCalientes) {
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
