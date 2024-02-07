import { Button } from './Button.jsx'
import { apiRoutes } from '../../Api/routes.js'
import { formatFechaActualIso } from '../../Helpers/formatFechaActualIso.js'
import { useUserContext } from '../../Hooks/Context/useUserContext.jsx'
import { useToastContext } from '../../Hooks/Context/useToastContext.jsx'

function crearLink(blob, nombre) {
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = nombre
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
async function fetchBlob(url, accessToken) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken || ''}`
    }
  }
  const response = await fetch(url, options)
  const blob = await response.blob()
  return blob
}
export const ComponentBackup = () => {
  const { accessToken } = useUserContext()
  const { setMensaje } = useToastContext()

  const backupReservas = async () => {
    try {
      const url = apiRoutes.backup.reservas
      const blob = await fetchBlob(url, accessToken)
      crearLink(blob, `reservas_backup_${formatFechaActualIso(new Date())}.json`)
      setMensaje('Datos listos para guardar')
    } catch (error) {
      setMensaje('Error al obtener los Datos')
    }
  }
  const backupServicios = async () => {
    try {
      const url = apiRoutes.backup.servicios
      const blob = await fetchBlob(url, accessToken)
      crearLink(blob, `servicios_backup_${formatFechaActualIso(new Date())}.json`)
      setMensaje('Datos listos para guardar')
    } catch (error) {
      setMensaje('Error al obtener los Datos')
    }
  }
  const backupPacientes = async () => {
    try {
      const url = apiRoutes.backup.pacientes
      const blob = await fetchBlob(url, accessToken)
      crearLink(blob, `pacientes_backup_${formatFechaActualIso(new Date())}.json`)
      setMensaje('Datos listos para guardar')
    } catch (error) {
      setMensaje('Error al obtener los Datos')
    }
  }
  const backupTratamientos = async () => {
    try {
      const url = apiRoutes.backup.tratamientos
      const blob = await fetchBlob(url, accessToken)
      crearLink(blob, `tratamientos_backup_${formatFechaActualIso(new Date())}.json`)
      setMensaje('Datos listos para guardar')
    } catch (error) {
      setMensaje('Error al obtener los Datos')
    }
  }

  const backupTodo = async () => {
    try {
      const url = apiRoutes.backup.todoBackup
      const blob = await fetchBlob(url, accessToken)
      crearLink(blob, `todo_backup_${formatFechaActualIso(new Date())}.json`)
      setMensaje('Datos listos para guardar')
    } catch (error) {
      setMensaje('Error al obtener los Datos')
    }
  }
  return (
    <section className='grid p-2 gap-2 animate-fadeIn max-w-xl mx-auto w-full'>
      <Button className='w-full' tipo='button' texto={'Todo'} onClickFunction={backupTodo} />
      <Button
        className='w-full'
        tipo='button'
        texto={'Reservas'}
        onClickFunction={backupReservas}
      />
      <Button
        className='w-full'
        tipo='button'
        texto={'Servicios'}
        onClickFunction={backupServicios}
      />
      <Button
        className='w-full'
        tipo='button'
        texto={'Tratamientos'}
        onClickFunction={backupTratamientos}
      />
      <Button
        className='w-full'
        tipo='button'
        texto={'Pacientes'}
        onClickFunction={backupPacientes}
      />
    </section>
  )
}
