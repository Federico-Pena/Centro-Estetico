import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const postReserva = async (accessToken, datos) => {
  const url = apiRoutes.reservas.postReserva
  const opciones = {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      Authorization: `Bearer ${accessToken || ''}`,
      'Content-Type': 'application/json'
    }
  }
  const response = await fetcher(url, opciones)
  return response
}
