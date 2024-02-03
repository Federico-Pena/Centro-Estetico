export const BtnSecundario = ({ onClickFunction, texto, tipo, className, icono, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={tipo ? tipo : null}
      title={typeof texto === 'string' ? texto : ''}
      className={`${className ? className : ''}`}
      onClick={onClickFunction}>
      {texto}
      <span>{icono}</span>
    </button>
  )
}
