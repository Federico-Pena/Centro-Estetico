import { useEffect, useState } from 'react'
import { diasSemanaConHoras } from '../helpers/FechasHoras/diasSemanaConHoras'

export const useDiasYHoras = (dia, hora) => {
	const [horas, setHoras] = useState([])
	const [diaConHoras, setDiaConHoras] = useState([])
	useEffect(() => {
		const dias = diasSemanaConHoras(new Date(`${dia} ${hora}`))
		const numero = dias.filter(
			(d) => d.dia.getDay() === new Date(`${dia} ${hora}`).getDay()
		)
		setDiaConHoras(numero)
		setHoras(numero[0].horas)
	}, [dia, hora])

	return { horas, diaConHoras }
}
