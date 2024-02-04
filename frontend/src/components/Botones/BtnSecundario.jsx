export const BtnSecundario = ({ id, onClickFunction, texto, tipo, className, icono, disabled }) => {
  return (
    <button
      id={id}
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
