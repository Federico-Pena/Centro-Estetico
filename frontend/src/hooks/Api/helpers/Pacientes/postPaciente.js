import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const postPaciente = async (accessToken, datos) => {
  const url = apiRoutes.pacientes.postPaciente
  const opciones = {
    method: 'POST',
    body: datos,
    headers: {
      Authorization: `Bearer ${accessToken || ''}`
    }
  }
  const response = await fetcher(url, opciones)
  return response
}
