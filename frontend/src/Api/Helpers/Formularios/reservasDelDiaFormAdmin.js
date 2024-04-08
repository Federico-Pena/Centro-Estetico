import { compararFechas } from '../../../Helpers/compararFechas.js'
import { fechasDelCalendarioSemanal } from '../../../Helpers/fechasDelCalendarioSemanal.js'
import {
  DIAS_DE_LA_SEMANA,
  HORA_DE_COMIENZO,
  HORA_DE_FIN,
  INTERVALO_MINUTOS
} from '../../../constantes.js'
import { apiRoutes } from '../../routes.js'
import { fetcher } from '../fetcher.js'

export const reservasDelDiaFormAdmin = async (dia, authToken) => {
  const numeroDia = new Date(dia).getDay()
  const diasSemana = fechasDelCalendarioSemanal(
    dia,
    DIAS_DE_LA_SEMANA,
    HORA_DE_COMIENZO,
    HORA_DE_FIN,
    INTERVALO_MINUTOS
  )
  const diaSeleccionado = diasSemana[numeroDia]
  try {
    const url = `${apiRoutes.reservas.reservasDia}${dia}`
    const options = {
      headers: {
        Authorization: `Bearer ${authToken || ''}`
      }
    }
    const res = await fetcher(url, options)
    const { datos, error } = res
    if (error) {
      return { error }
    } else {
      const horas = obtenerHorasReservadas(diaSeleccionado.horas, datos)
      return { horas, datos }
    }
  } catch (error) {
    console.log(error)
  }
}

const obtenerHorasReservadas = (horas, reservasDia) => {
  return horas.map((hora) => compararFechas(hora, reservasDia))
}
