import { useContext, useState } from 'react'
import { BtnSecundario } from './BtnSecundario.jsx'
import { apiRoutes } from '../../Api/routes.js'
import { UserContext } from '../../Context/User/userContext.jsx'
import { ToastContext } from '../../Context/Toast/mensajeContext.jsx'
import { ArrowDown } from '../Icons/Icons.jsx'
import { formatFechaActualIso } from '../../Helpers/formatFechaActualIso.js'

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
  const { accessToken } = useContext(UserContext)
  const { setMensaje } = useContext(ToastContext)

  const backupReservas = async () => {
    try {
      const url = apiRoutes.backup.reservas
      const blob = await fetchBlob(url, accessToken)
      crearLink(blob, `reservas_backup_${formatFechaActualIso(new Date())}.json`)
      setMensaje('Datos listos para guardar')
    } catch (error) {
      console.log(error)
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
      console.log(error)
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
      console.log(error)
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
      console.log(error)
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
      console.log(error)
      setMensaje('Error al obtener los Datos')
    }
  }
  return (
    <section className='grid p-2 gap-2 animate-toastIn max-w-xl mx-auto w-full'>
      <BtnSecundario
        className='font-bold text-color-violeta border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-slate-50 hover:bg-color-violeta'
        tipo='button'
        texto={'Todo'}
        onClickFunction={backupTodo}
      />
      <BtnSecundario
        className='font-bold text-color-violeta border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-slate-50 hover:bg-color-violeta'
        tipo='button'
        texto={'Reservas'}
        onClickFunction={backupReservas}
      />
      <BtnSecundario
        className='font-bold text-color-violeta border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-slate-50 hover:bg-color-violeta'
        tipo='button'
        texto={'Servicios'}
        onClickFunction={backupServicios}
      />
      <BtnSecundario
        className='font-bold text-color-violeta border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-slate-50 hover:bg-color-violeta'
        tipo='button'
        texto={'Tratamientos'}
        onClickFunction={backupTratamientos}
      />
      <BtnSecundario
        className='font-bold text-color-violeta border-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-slate-50 hover:bg-color-violeta'
        tipo='button'
        texto={'Pacientes'}
        onClickFunction={backupPacientes}
      />
    </section>
  )
}
