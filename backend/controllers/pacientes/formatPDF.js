import { crearRespuestaJSON } from '../../helpers/crearRespuestaJSON.js'
import pdf from 'pdf-parse/lib/pdf-parse.js'

export const formatPDF = async (req, res) => {
  try {
    if (req.file && req.file.buffer) {
      const dataBuffer = req.file.buffer
      const pdfData = await pdf(dataBuffer)
      const data = extractUserData(pdfData)
      const response = {
        datos: data,
        status: 200,
        res
      }
      return crearRespuestaJSON(response)
    }
  } catch (error) {
    const response = {
      error: 'Error interno del servidor.',
      status: 500,
      res
    }
    return crearRespuestaJSON(response)
  }
}

const extractUserData = (pdfData) => {
  const lines = pdfData.text.split('\n')
  const { nombre, telefono } = extractContactName(lines)
  const userData = {
    nombre: `${extractValue(lines, 'Nombre')} ${extractValue(lines, 'Apellido')}`,
    fechaDeNac: extractValue(lines, 'Fecha de nacimiento'),
    cedula: extractValue(lines, 'CI'),
    edad: extractValue(lines, 'Edad'),
    telefono: extractValue(lines, 'Numero de Teléfono'),
    servicio: {
      nombre: extractValue(lines, 'Tratamiento')
    },
    contactoEmergencia: {
      nombreContacto2: nombre,
      telefonoContacto2: telefono
    },
    alimentacion: extractValue(lines, 'Alimentación'),
    descanso: extractValue(lines, 'Descanso'),
    hidratacion: extractValue(lines, 'Hidratación'),
    alcohol: extractValue(lines, '¿Toma alcohol?'),
    fuma: extractValue(lines, '¿Fuma?'),
    alergia: extractYesNo(lines, 'Alergias'),
    circulatorio: extractYesNo(lines, 'Circulatorio'),
    operaciones: extractYesNo(lines, 'Operaciones'),
    embarazo: extractYesNo(lines, 'Embarazo'),
    oncologicas: extractYesNo(lines, 'Oncólogicas'),
    enfermedades: extractYesNo(lines, 'Otras Enfermedades'),
    medicamentos: extractYesNo(lines, 'Medicamentos'),
    implantes: extractYesNo(lines, 'Implante Metálico')
  }

  return userData
}

const extractValue = (lines, keyword) => {
  const line = lines.find((line) => line.includes(keyword))
  return line ? line.replace(keyword, '').trim() : ''
}

const extractYesNo = (lines, keyword) => {
  const line = lines.indexOf(keyword)
  const boolean = lines[line + 1] === 'Si'
  if (boolean) {
    return lines[line + 2]
  } else {
    return ''
  }
}

const extractContactName = (lines, i) => {
  const line = lines.indexOf('Contacto de Emergencia')
  return {
    nombre: lines[line + 1],
    telefono: lines[line + 2]
  }
}
