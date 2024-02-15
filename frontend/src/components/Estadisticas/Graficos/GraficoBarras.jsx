import { useEffect, useState } from 'react'
import { opcionesFormatPrecio } from '../../../constantes.js'

const GraficoBarras = ({ datos }) => {
  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth)
  const gananciaMaxima = Math.max(...datos.map((d) => d.ganancias))
  useEffect(() => {
    const actualizarAnchoVentana = () => {
      setAnchoVentana(window.innerWidth)
    }

    window.addEventListener('resize', actualizarAnchoVentana)

    return () => {
      window.removeEventListener('resize', actualizarAnchoVentana)
    }
  }, [])

  return (
    datos &&
    datos.length > 1 && (
      <div className='w-full grid grid-rows-[auto_1fr] gap-2 bg-color-logo rounded-lg p-4 pb-2 border border-black md:col-span-full md:grid-cols-12 md:h-80'>
        <h2 className='text-lg font-semibold text-color-violeta font-betonga text-center col-span-full md:text-2xl'>
          Ingresos
        </h2>
        {gananciaMaxima && (
          <small className='absolute'>
            * Máximo ${gananciaMaxima.toLocaleString(opcionesFormatPrecio)}
          </small>
        )}
        {datos.map((mes, index) => {
          return (
            <div
              key={mes.mes}
              className='grid gap-2 relative md:grid-rows-[1fr_auto] md:items-end '>
              <div
                className='bg-blue-500 text-xs text-white grid items-center rounded [&>span]:hover:opacity-100 [&>span]:hover:scale-100 h-8'
                style={
                  anchoVentana > 768
                    ? { height: `${(mes.ganancias / gananciaMaxima) * 100 || 0}%` }
                    : { width: `${(mes.ganancias / gananciaMaxima) * 100 || 0}%` }
                }
                title={`$ ${mes.ganancias}`}>
                <span className='absolute text-center opacity-0 scale-0 top-1/2 -translate-y-1/2 right-0 bg-color-violeta font-bold p-2 rounded-lg transition-[opacity_scale] md:right-1/2 md:translate-x-1/2 md:w-full'>
                  ${mes.ganancias}
                </span>
              </div>
              <p
                className={`text-xs text-gray-700 border-b border-black pb-2 ${
                  index === datos.length - 1 ? 'border-none' : ''
                } md:text-center md:border-none`}>
                {mes.mes}
              </p>
            </div>
          )
        })}
      </div>
    )
  )
}

export default GraficoBarras
