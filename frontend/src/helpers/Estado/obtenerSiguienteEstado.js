import { ESTADOS_RESERVAS } from '../../constantes'
const estados = [
	ESTADOS_RESERVAS.pendiente,
	ESTADOS_RESERVAS.pago,
	ESTADOS_RESERVAS.cancelada,
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
