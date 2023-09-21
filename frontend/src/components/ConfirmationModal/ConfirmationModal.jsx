import { useEffect, useRef } from 'react'
import './ConfirmationModal.scss'
export const ConfirmationModal = ({ titulo, mensaje, onConfirm, onCancel }) => {
	const modalRef = useRef()

	return (
		<div className='modal'>
			<div className='modal-content' ref={modalRef}>
				<h3>{titulo}</h3>
				<p>{mensaje}</p>
				<div>
					<button onClick={onConfirm}>Confirmar</button>
					<button onClick={onCancel}>Cancelar</button>
				</div>
			</div>
		</div>
	)
}
