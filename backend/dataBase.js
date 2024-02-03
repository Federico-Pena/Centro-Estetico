import { mongoose } from 'mongoose'
import 'dotenv/config.js'
const uri = process.env.URL_DB
export const connectToDatabase = () => {
  mongoose
    .connect(uri)
    .then(() => console.log(`Conexión exitosa a la base de datos: ${mongoose.connection.name}`))
    .catch((error) => {
      console.error('Error al conectar a la base de datos:', error)
      throw error
    })
}
