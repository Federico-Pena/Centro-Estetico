import { ESTADOS_RESERVAS } from '../../constantes'
const estados = [
	ESTADOS_RESERVAS.pendiente,
	ESTADOS_RESERVAS.cancelada,
	ESTADOS_RESERVAS.pago,
]
export function obtenerSiguienteEstado(estadoActual) {
	const indiceEstadoActual = estados.indexOf(estadoActual)
	if (indiceEstadoActual !== -1) {
		const siguienteIndice = (indiceEstadoActual + 1) % estados.length
		return estados[siguienteIndice]
	} else {
		return undefined
	}
}
