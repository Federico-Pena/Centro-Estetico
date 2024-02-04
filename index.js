import express from 'express'
import 'dotenv/config.js'
import path from 'path'
import cors from 'cors'
import { connectToDatabase } from './backend/dataBase.js'
import { controlCache } from './backend/middlewares/controlCache.js'
import { OPTIONS_CORS } from './backend/constantes.js'
import { publicasRoutes } from './backend/routes/public/publicas.routes.js'
import { backupRoutes } from './backend/routes/Backup/backup.routes.js'
import { reservasRoutes } from './backend/routes/Reservas/reservas.routes.js'
import { serviciosRoutes } from './backend/routes/Servicios/servicios.routes.js'
import { tratamientosRouter } from './backend/routes/Tratamientos/tratamientos.routes.js'
import { pacientesRoutes } from './backend/routes/Pacientes/pacientes.routes.js'
import { estadisticasRoutes } from './backend/routes/Estadisticas/estadisticas.routes.js'
// import { decodificarToken, jwtCheck } from './backend/middlewares/autorization.js'

connectToDatabase()
const app = express()
const port = process.env.PORT || 5000
app.disable('x-powered-by')
app.use(cors(OPTIONS_CORS))
app.use(express.json())
app.use(controlCache)

app.use(express.static(path.resolve('./frontend/dist')))
app.use(publicasRoutes)
// app.use(decodificarToken)
// app.use(jwtCheck)
app.use(backupRoutes)
app.use(serviciosRoutes)
app.use(reservasRoutes)
app.use(tratamientosRouter)
app.use(pacientesRoutes)
app.use(estadisticasRoutes)
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./frontend/dist/index.html'))
})
app.listen(port, () => console.log(`http://localhost:${port}`))
export default app
