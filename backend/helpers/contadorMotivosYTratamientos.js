import { TRATAMIENTOS } from '../constantes.js'

export function contadorMotivosYTratamientos(array) {
	if (!Array.isArray(array)) {
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

	const counts = array.reduce(
		(acc, item) => {
			const tratamientoNombre = item.tratamiento.nombre || item.tratamiento

			switch (tratamientoNombre) {
				case TRATAMIENTOS.barrasDeAccess:
					acc.barrasDeAccess++
					break
				case TRATAMIENTOS.cérvicoCraneal:
					acc.cérvicoCraneal++
					break
				case TRATAMIENTOS.drenajeLinfático:
					acc.drenajeLinfático++
					break
				case TRATAMIENTOS.exfoliaciónCorporal:
					acc.exfoliaciónCorporal++
					break
				case TRATAMIENTOS.masajeDescontracturante:
					acc.masajeDescontracturante++
					break
				case TRATAMIENTOS.masajeEstético:
					acc.masajeEstético++
					break
				case TRATAMIENTOS.masajePrenatal:
					acc.masajePrenatal++
					break
				case TRATAMIENTOS.masajeRelajante:
					acc.masajeRelajante++
					break
				case TRATAMIENTOS.piedrasCalientes:
					acc.piedrasCalientes++
					break
				default:
					// Tratamiento no reconocido
					break
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

	// Construir el objeto de resultados
	const resultados = {}
	Object.keys(counts).forEach((tratamientoKey) => {
		const tratamientoNombre = TRATAMIENTOS[tratamientoKey]
		resultados[tratamientoKey] = {
			tratamiento: tratamientoNombre,
			cantidad: counts[tratamientoKey],
		}
	})

	return resultados
}
