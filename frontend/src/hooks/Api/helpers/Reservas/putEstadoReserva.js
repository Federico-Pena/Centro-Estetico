import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'
import { ESTADOS_RESERVAS } from '../../../../constantes.js'

const estados = [ESTADOS_RESERVAS.pendiente, ESTADOS_RESERVAS.pago, ESTADOS_RESERVAS.cancelada]
function obtenerSiguienteEstado(estadoActual) {
  const indiceEstadoActual = estados.indexOf(estadoActual)
  if (indiceEstadoActual !== -1) {
    const siguienteIndice = (indiceEstadoActual + 1) % estados.length
    return estados[siguienteIndice]
  } else {
    return undefined
  }
}

export const putEstadoReserva = async (accessToken, reserva) => {
  const estado = obtenerSiguienteEstado(reserva.estado)
  const url = `${apiRoutes.reservas.putEstadoReserva}${reserva._id}`
  const options = {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({ estado })
  }
  const response = await fetcher(url, options)
  return response
}
