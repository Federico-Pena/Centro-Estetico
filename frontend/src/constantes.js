import { formatFechaIso } from './helpers/Formato/formarFechaIso'

export const DIAS_DE_LA_SEMANA = 7
export const HORA_DE_COMIENZO = 8
export const HORA_DE_FIN_ENTRE_SEMANA = 20
export const HORA_DE_FIN_SABADOS = 12
export const INTERVALO_MINUTOS = 30
export const MINUTOS_EN_UNA_HORA = 60
export const HOY = new Date()
export const HOY_STRING_BIEN = `${
	formatFechaIso(HOY).split('T')[0]
}T${HOY.toLocaleTimeString().split('', 5).join('')}`
export const ESTADOS_RESERVAS = {
	pago: 'Pago',
	pendiente: 'Pendiente',
	cancelada: 'Cancelada',
}

export const MESES = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
]
