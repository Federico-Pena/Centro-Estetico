import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const getPacientesNombres = async (accessToken) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken || ''}`
    }
  }
  const url = apiRoutes.pacientes.getPacientesNombres
  const response = await fetcher(url, options)
  return response
}
