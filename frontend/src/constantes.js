import { formatFechaIso } from './helpers/Formato/formarFechaIso'
import { formatHoraUser } from './helpers/Formato/formatHoraUser'

export const DIAS_DE_LA_SEMANA = 7
export const HORA_DE_COMIENZO = 8
export const HORA_DE_FIN_ENTRE_SEMANA = 20
export const HORA_DE_FIN_SABADOS = 12
export const INTERVALO_MINUTOS = 30
export const MINUTOS_EN_UNA_HORA = 60
export const HOY = new Date()
export const HOY_STRING_BIEN = `${
	formatFechaIso(HOY).split('T')[0]
}T${formatHoraUser(HOY)}`
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
export const TRATAMIENTOS = {
	drenajeLinfático: 'Drenaje Linfático',
	masajeEstético: 'Masaje Estético',
	exfoliaciónCorporal: 'Exfoliación Corporal',
	cérvicoCraneal: 'Masaje Cérvico-Craneal',
	piedrasCalientes: 'Masaje Con Piedras Calientes',
	masajeDescontracturante: 'Masaje Descontracturante',
	masajeRelajante: 'Masaje Relajante',
	masajePrenatal: 'Masaje Prenatal',
	barrasDeAccess: 'Barras De Access',
}
