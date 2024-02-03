import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const deUnPaciente = async (accessToken, pagina, id) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken || ''}`
    }
  }
  const url = `${apiRoutes.reservas.deUnPacientes}${pagina}/${id}`
  const response = await fetcher(url, options)
  return response
}
