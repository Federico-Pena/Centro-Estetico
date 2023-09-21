export const BotónPrimario = ({ onClickFunction, texto, tipo, className }) => {
	return (
		<button
			type={tipo ? tipo : null}
			title={typeof texto === 'string' ? texto : ''}
			className={`btnPrimario ${className ? className : ''}`}
			onClick={onClickFunction}>
			{texto}
		</button>
	)
}
