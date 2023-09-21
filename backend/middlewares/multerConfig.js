import multer, { memoryStorage } from 'multer'
const espacioParaFoto = memoryStorage()
export const fotoASubir = multer({
	storage: espacioParaFoto,
}).single('foto')
