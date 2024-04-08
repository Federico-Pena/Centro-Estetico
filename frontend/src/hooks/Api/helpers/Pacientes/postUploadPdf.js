import { fetcher } from '../../../../Api/Helpers/fetcher.js'
import { apiRoutes } from '../../../../Api/routes.js'

export const postUploadPdf = async (accessToken, data) => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken || ''}`
    },
    body: data
  }
  const url = apiRoutes.pacientes.postPdf
  const response = await fetcher(url, options)
  return response
}
