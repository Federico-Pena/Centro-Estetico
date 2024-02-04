import { compararFechas } from '../../../Helpers/compararFechas.js'
import { fechasDeLaSemanaConHoras } from '../../../Helpers/fechasDeLaSemanaConHoras.js'
import { apiRoutes } from '../../routes.js'
import { fetcher } from '../fetcher.js'
export const reservasDelDiaParaFormAdmin = async (dia, authToken) => {
  const numeroDia = new Date(dia).getDay()
  const díasSemana = fechasDeLaSemanaConHoras(dia)
  const diaSeleccionado = díasSemana[numeroDia]
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
