import multer, { memoryStorage } from 'multer'
const espacioParaImagen = memoryStorage()
export const imagenASubir = multer({
  storage: espacioParaImagen
}).single('foto')
