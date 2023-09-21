import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './FormularioContacto.scss'
import { BotónPrimario } from '../../Botones/BotonPrimario'
import { MensajeToast } from '../../../context/mensajeContext'
export const FormularioContacto = () => {
	const [cargando, setCargando] = useState(false)
	const { setMensaje } = useContext(MensajeToast)

	const form = useRef()
	const emailService = import.meta.env.VITE_EMAIL_JS_SERVICE
	const emailTemplate = import.meta.env.VITE_EMAIL_JS_TEMPLATE
	const emailPublicID = import.meta.env.VITE_EMAIL_JS_PUBLIC_ID

	const submitContacto = async (e) => {
		e.preventDefault()
		const formulario = form.current
		if (
			formulario.nombre.value.trim() &&
			formulario.email.value.trim() &&
			formulario.mensaje.value.trim()
		) {
			try {
				setCargando(true)
				await emailjs.sendForm(
					emailService,
					emailTemplate,
					form.current,
					emailPublicID
				)
				setMensaje('Mensaje enviado')
			} catch (error) {
				setMensaje('Ocurrió un error')
			}
			setCargando(false)
			form.current.reset()
		} else {
			setMensaje('Faltan campos requeridos')
		}
	}
	return (
		<form className='formContacto' ref={form} onSubmit={submitContacto}>
			<h2>Contacta conmigo</h2>
			<h3>Con gusto contestaré cualquier consulta</h3>
			<div className='divInput'>
				<input
					type='text'
					autoComplete='off'
					name='nombre'
					placeholder='Nombre'
					required
				/>
			</div>
			<div className='divInput'>
				<input
					type='email'
					autoComplete='off'
					name='email'
					placeholder='E-mail'
					required
				/>
			</div>
			<div className='divInput'>
				<input
					name='telefono'
					type='number'
					autoComplete='off'
					placeholder='Teléfono'
				/>
				<span>* El teléfono es opcional</span>
			</div>
			<div className='divTextArea'>
				<textarea
					type='text'
					autoComplete='off'
					name='mensaje'
					placeholder='Mensaje'
					required
				/>
			</div>
			<BotónPrimario texto={cargando ? 'Enviando' : 'Enviar'} />
		</form>
	)
}
