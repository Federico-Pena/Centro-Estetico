import express from 'express'
import 'dotenv/config.js'
const app = express()
const port = process.env.PORT || 5000
import path, { join } from 'path'
import cors from 'cors'
import { publicas } from './routes/publicas.routes.js'
import { router as pacientes } from './routes/pacientes.routes.js'
import { router as reservas } from './routes/reservas.routes.js'
import { decodificarToken, jwtCheck } from './middlewares/autorization.js'

const optionsCors = {
	origin: ['https://www.masajistanataliapena.com', 'http://localhost:5173'],
	methods: ['GET', 'PUT', 'POST', 'DELETE'],
}
const setCache = function (req, res, next) {
	const period = 0
	if (req.method === 'GET') {
		res.set('Cache-control', `public, max-age=${period}`)
		res.set('Cache-control', `no-store`)
	} else {
		res.set('Cache-control', `no-store`)
	}
	next()
}
app.disable('x-powered-by')
app.use(express.json())
app.use(cors(optionsCors))
app.use(setCache)
app.use(express.static(path.resolve('./frontend/dist')))
app.use(publicas)
//app.use(decodificarToken)
//app.use(jwtCheck)
app.use(pacientes)
app.use(reservas)
app.listen(port, () => console.log(`http://localhost:${port}`))
export default app
