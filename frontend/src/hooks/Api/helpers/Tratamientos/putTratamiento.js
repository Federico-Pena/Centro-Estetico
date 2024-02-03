import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const putTratamiento = async (accessToken, datos, id) => {
  const url = `${apiRoutes.tratamientos.putTratamiento}${id}`
  const opciones = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken || ''}`
    },
    body: datos
  }
  const response = await fetcher(url, opciones)
  return response
}
