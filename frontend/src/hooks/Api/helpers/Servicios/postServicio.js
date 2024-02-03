import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const postServicio = async (accessToken, datos) => {
  const url = apiRoutes.servicios.postServicio
  const opciones = {
    method: 'POST',
    body: datos,
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  }
  const response = await fetcher(url, opciones)
  return response
}
