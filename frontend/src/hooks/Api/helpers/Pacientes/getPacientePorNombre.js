import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const getPacientePorNombre = async (accessToken, nombre) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken || ''}`
    }
  }
  const url = `${apiRoutes.pacientes.getPacienteNombre}${nombre}`
  const response = await fetcher(url, options)
  return response
}
