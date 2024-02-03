import { TransitionNumber } from '../TransitionNumber/TransitionNumber.jsx'

const EstadoComponent = ({ cantidadEstados }) => {
  const todas = Object.values(cantidadEstados).reduce((a, b) => a + b)
  return (
    cantidadEstados && (
      <article className='grid gap-4 py-8 px-4 border border-black rounded-lg md:col-span-2 md:text-xl'>
        <h2 className='font-betonga font-bold text-color-violeta text-xl text-center md:text-2xl'>
          Estados de reservas
        </h2>
        <ul className='grid gap-4 grid-cols-2'>
          {Object.entries(cantidadEstados).map(([estado, cantidad]) => {
            return (
              <li
                key={estado}
                className={`text-center grid justify-center text-white rounded-lg ${estado}`}>
                {estado} <TransitionNumber to={cantidad} />
              </li>
            )
          })}
          <li className='grid w-full text-center text-white rounded-lg bg-color-violeta'>
            Total <span>{todas}</span>
          </li>
        </ul>
      </article>
    )
  )
}

export default EstadoComponent
