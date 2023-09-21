import mongoose from 'mongoose'
import 'dotenv/config.js'
const uri = process.env.URL_DB
export const db = mongoose
	.connect(uri)
	.then(() => console.log(`BD: ${mongoose.connection.name}`))
