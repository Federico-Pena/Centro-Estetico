import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const putPaciente = async (accessToken, datos, id) => {
  const url = `${apiRoutes.pacientes.putPaciente}${id}`
  const opciones = {
    method: 'PUT',
    body: datos,
    headers: {
      Authorization: `Bearer ${accessToken || ''}`
    }
  }
  const response = await fetcher(url, opciones)
  return response
}
