/**
 * @param {string} props.id Identificador único para el botón, útil para pruebas o referencias específicas en CSS/JS.
 * @param {Function} props.onClickFunction Función que se ejecuta cuando el botón es clickeado.
 * @param {string} props.texto Texto que se mostrará dentro del botón. Si no es una cadena, el título del botón estará vacío.
 * @param {string} [props.tipo='button'] Tipo de botón (por ejemplo, 'button', 'submit', 'reset'), por defecto es 'button'.
 * @param {string} [props.className] Clases adicionales de CSS para aplicar al botón, permitiendo personalización extra.
 * @param {JSX.Element} [props.icono] Icono a mostrar junto al texto del botón. Debe ser un elemento JSX (por ejemplo, un componente de icono).
 * @param {boolean} [props.disabled=false] Si es verdadero, el botón estará deshabilitado y no podrá ser clickeado.
 * @param {boolean} [props.bgColor] Define el color de fondo del botón. Si es verdadero, el botón usará un fondo y texto de color definido, con hover inverso.
 */
export const Button = ({
  id,
  onClickFunction,
  texto,
  tipo,
  className,
  icono,
  disabled,
  bgColor
}) => {
  return (
    <button
      id={id}
      disabled={disabled}
      type={tipo ? tipo : 'button'}
      title={typeof texto === 'string' ? texto : ''}
      className={`${className ? className : ''} ${
        bgColor
          ? 'cursor-pointer border border-color-violeta bg-color-violeta text-white  flex items-center justify-center justify-self-center rounded-lg px-4 py-2  hover:bg-white hover:bg-opacity-50 hover:backdrop-blur-lg hover:text-color-violeta transition-colors'
          : 'cursor-pointer border border-color-violeta bg-white  bg-opacity-30 backdrop-blur-lg  text-color-violeta flex items-center justify-center justify-self-center rounded-lg px-4 py-2  hover:bg-color-violeta hover:text-white transition-colors'
      } `}
      onClick={onClickFunction}>
      {texto}
      <span>{icono}</span>
    </button>
  )
}
