import { useEffect, useRef, useState } from 'react'
import './CardServicio.scss'
import { FormularioReserva } from '../Formularios/Reserva/FormularioReserva'
import { BotónSecundario } from '../Botones/BotonSecundario'
import { BotónPrimario } from '../Botones/BotonPrimario'
export const CardServicio = ({ masaje }) => {
	const [openInfo, setOpeninfo] = useState(false)
	const [openForm, setOpenForm] = useState(false)
	const [visible, setVisible] = useState(false)
	const [src, setSrc] = useState('')
	const imgRef = useRef()
	useEffect(() => {
		const { current } = imgRef
		const options = {
			rootMargin: '300px 0px',
		}
		const observerFunction = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisible(true)
					setSrc(masaje.imagen)
					observador.unobserve(entry.target)
				}
			})
		}
		const observador = new IntersectionObserver(observerFunction, options)
		current && observador.observe(current)
		return () => current && observador.unobserve(current)
	}, [visible, masaje])

	const cerrarForm = (e) => {
		e.target.parentElement.classList.add('formOut')
		setTimeout(() => {
			setOpenForm(false)
		}, 300)
	}
	const cerrarOpenInfo = (e) => {
		const padre = e.target.parentElement.parentElement
		padre.classList.add('formOut')
		setTimeout(() => {
			setOpeninfo(false)
		}, 300)
	}
	return (
		<>
			{openForm ? (
				<FormularioReserva
					observaciones={masaje.titulo}
					cerrarFormulario={cerrarForm}
				/>
			) : openInfo ? (
				<div className='cardFullServicio'>
					<div
						className='cardFullServicioContent'
						style={{
							backgroundImage: `linear-gradient(#000000be, #000000be),url(${masaje.imagen})`,
						}}>
						<h1>{masaje.titulo}</h1>
						{masaje.fullContenido
							.split('.')
							.map(
								(parrafo) => parrafo.trim() && <p key={parrafo}>{parrafo}.</p>
							)}

						<ul className='list1'>
							<h4> {masaje.fullContenidoListTitulo}</h4>
							{masaje.fullContenidoList.map((detalle, i) => (
								<li key={detalle + i}>{detalle}</li>
							))}
						</ul>
						<h4>Detalles</h4>
						<ul className='list2'>
							{masaje.detalles.map((detalle, i) => (
								<li key={detalle + i}>{detalle}.</li>
							))}
						</ul>
					</div>
					<div className='botones'>
						<BotónSecundario
							onClickFunction={cerrarOpenInfo}
							texto={'Volver'}
						/>
						<BotónPrimario
							texto={'Reservar'}
							onClickFunction={() => setOpenForm(true)}
						/>
					</div>
				</div>
			) : (
				<div className='cardServicio' ref={imgRef}>
					{visible && src ? <img src={src} alt={masaje.titulo} /> : null}

					<h1>{masaje.titulo}</h1>
					<p>{masaje.contenido}</p>
					<h4>Detalles</h4>
					<ul className='detalles'>
						{masaje.detalles.map((detalle, i) => (
							<li key={detalle + i}>{detalle}.</li>
						))}
					</ul>
					<div>
						<BotónSecundario
							onClickFunction={() => setOpeninfo(true)}
							texto={'Mas info'}
						/>
						<BotónPrimario
							texto={'Reservar'}
							onClickFunction={() => setOpenForm(true)}
						/>
					</div>
				</div>
			)}
		</>
	)
}
