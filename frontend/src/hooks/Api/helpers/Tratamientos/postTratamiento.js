import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const postTratamiento = async (accessToken, datos) => {
  const url = apiRoutes.tratamientos.postTratamiento
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
