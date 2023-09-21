import { v2 as cloudinary } from 'cloudinary'
import { Readable } from 'stream'

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
	api_key: process.env.API_KEY_CLOUDINARY,
	api_secret: process.env.API_SECRET_CLOUDINARY,
})

export const guardarEnCloudinary = (buffer) => {
	return new Promise((resolve, reject) => {
		const uploadStream = cloudinary.uploader.upload_stream(
			{ folder: 'Masajes' },
			(error, result) => {
				if (error) {
					reject(error)
				} else {
					resolve(result)
				}
			}
		)
		const stream = Readable.from(buffer)
		stream.pipe(uploadStream)
	})
}

export async function eliminarDeCloudinary(publicId) {
	try {
		await cloudinary.uploader.destroy(publicId)
	} catch (error) {
		throw new Error('Error al eliminar la imagen de Cloudinary')
	}
}
