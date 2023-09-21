import './Botones.scss'
export const BotónSecundario = ({
	onClickFunction,
	texto,
	tipo,
	className,
}) => {
	return (
		<button
			type={tipo ? tipo : null}
			title={typeof texto === 'string' ? texto : ''}
			className={`btnSecundario ${className ? className : ''}`}
			onClick={onClickFunction}>
			{texto}
		</button>
	)
}
