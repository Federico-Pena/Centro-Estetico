import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const putServicio = async (accessToken, datos) => {
  const url = apiRoutes.servicios.putServicio
  const opciones = {
    method: 'PUT',
    body: datos,
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  }
  const response = await fetcher(url, opciones)
  return response
}
