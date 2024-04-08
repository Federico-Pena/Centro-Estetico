// El código anterior es un módulo de autenticación y autorización para una API utilizando el paquete 'express-oauth2-jwt-bearer' y 'jwt-decode'.
// El módulo exporta dos funciones: 'decodificarToken' y 'jwtCheck'.
// La función 'jwtCheck' es un middleware que verifica si el token JWT incluido en la solicitud es válido. Utiliza la configuración //proporcionada, como la audiencia, el dominio y el algoritmo de firma del token.
// La función 'decodificarToken' es otro middleware que decodifica el token JWT y verifica si el usuario tiene los roles de administrador //necesarios para acceder a la ruta protegida. Si el usuario está autorizado, pasa al siguiente middleware; de lo contrario, se devuelve un //error de "Prohibido".
// Ambas funciones se utilizan en conjunto para proporcionar autenticación y autorización en las rutas protegidas de la API.

import { auth } from 'express-oauth2-jwt-bearer'
import jwtDecode from 'jwt-decode'

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
  tokenSigningAlg: 'RS256'
})

export const decodificarToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).json({ error: 'Forbidden', mensaje: 'No autorizado' })
  }
  const decoded = jwtDecode(token)
  const autorizado = process.env.ADMIN.includes(decoded.sub && decoded.rolesDeUsuario[0])
  if (autorizado) {
    next()
  } else {
    return res.status(403).json({ error: 'Forbidden', mensaje: 'No autorizado' })
  }
}
