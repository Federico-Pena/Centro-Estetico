import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const putReserva = async (accessToken, datos, id) => {
  const url = `${apiRoutes.reservas.putReserva}${id}`
  const options = {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify(datos)
  }
  const response = await fetcher(url, options)
  return response
}
