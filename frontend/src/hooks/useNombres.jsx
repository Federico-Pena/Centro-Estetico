import { useContext, useEffect, useState } from 'react'
import { apiEndPoint } from '../services/apiConfig'
import { MensajeToast } from '../context/mensajeContext'
import { UserContext } from '../context/userContext'

export const useNombres = (nombre) => {
	const [pagina, setPagina] = useState(1)
	const [totalPages, setTotalPages] = useState(null)
	const [nombres, setNombres] = useState([])
	const [loading, setLoading] = useState(false)
	const { setMensaje } = useContext(MensajeToast)
	const { accessToken } = useContext(UserContext)
	useEffect(() => {
		const buscarPorNombre = async () => {
			setLoading(true)
			if (nombre.length < 1) {
				setMensaje('Dos letras como mínimo')
				setLoading(false)
				setNombres([])
				return
			}
			const opciones = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken || ''}`,
				},
			}
			const url = `${apiEndPoint.paciente.nombres}${pagina}?nombre=${nombre}`
			const res = await fetch(url, opciones)
			const { pacientes, page, totalPages } = await res.json()

			if (pacientes && pacientes.length > 0) {
				setTotalPages(totalPages)
				setPagina(page)
				setNombres(
					pacientes.sort((a, b) =>
						a.nombre.toLowerCase() < b.nombre.toLowerCase() ? -1 : 1
					)
				)
			} else {
				setMensaje('No se encontraron pacientes')
				setNombres([])
				setTotalPages(0)
				setPagina(1)
			}
			setLoading(false)
		}
		nombre && buscarPorNombre()
	}, [accessToken, pagina, nombre, setMensaje])

	return { totalPages, pagina, nombres, setPagina, loading }
}
