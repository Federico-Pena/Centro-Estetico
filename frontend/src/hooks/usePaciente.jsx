import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext'
import { apiEndPoint } from '../services/apiConfig'
import { MensajeToast } from '../context/mensajeContext'
import { ordenarPorFecha } from '../helpers/FechasHoras/ordenarPorFecha'
import { formatFechaParaUser } from '../helpers/Formato/formatFechaParaUser'
import { formatHoraUser } from '../helpers/Formato/formatHoraUser'
import { fetchData } from './fetchData'
export const usePaciente = (id) => {
  const [reservasPaciente, setReservasPaciente] = useState([])
  const [pacientes, setPacientes] = useState([])
  const [loading, setLoading] = useState(false)
  const { setMensaje } = useContext(MensajeToast)
  const { accessToken } = useContext(UserContext)

  useEffect(() => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken || ''}`
      }
    }
    const getReservasPaciente = async () => {
      setLoading(true)
      const url = `${apiEndPoint.reservas.deUnPaciente}${id}`
      try {
        const res = await fetch(url, options)
        if (res.ok) {
          const data = await res.json()
          setReservasPaciente(data.sort(ordenarPorFecha))
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    /* accessToken && */ id && getReservasPaciente()
  }, [accessToken, id])

  const getPaciente = async (nombre) => {
    const opciones = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken || ''}`
      }
    }
    setPacientes([])
    setLoading(true)
    if (nombre) {
      const url = `${apiEndPoint.paciente.porNombre}${nombre}`
      const res = await fetch(url, opciones)
      const data = await res.json()
      const { error, pacientes } = data
      if (error) {
        setMensaje(error)
      }
      setPacientes(pacientes)
    } else {
      setPacientes([])
    }
    setLoading(false)
  }
  const actualizarReservaPaciente = (reserva) => {
    const reservasGuardadas = reservasPaciente.filter((res) => res._id !== reserva._id)
    setReservasPaciente(reservasGuardadas.concat(reserva).sort(ordenarPorFecha))
  }

  const eliminarReservaPaciente = (res) => {
    const { reserva, mensaje, error } = res
    if (error) {
      setMensaje(error)
    } else {
      const reservasGuardadas = reservasPaciente.filter((res) => res._id !== reserva._id)
      setMensaje(mensaje)
      setReservasPaciente(reservasGuardadas.sort(ordenarPorFecha))
    }
  }

  return {
    setPacientes,
    getPaciente,
    actualizarReservaPaciente,
    eliminarReservaPaciente,
    reservasPaciente,
    pacientes,
    loading,
    setReservasPaciente
  }
}
