import { useEffect, useState } from 'react'
import './PorcentajesComponent.scss'

function calcularPorcentajes(datos) {
  const total = Object.values(datos).reduce((acc, curr) => acc + curr.cantidad, 0)
  const porcentajes = {}
  for (const key in datos) {
    const tratamiento = datos[key].tratamiento
    const cantidad = datos[key].cantidad
    porcentajes[tratamiento] = ((cantidad / total) * 100).toFixed(1)
  }
  const porcentajesArray = Object.entries(porcentajes).map(([tratamiento, porcentaje]) => ({
    tratamiento,
    porcentaje: parseFloat(porcentaje)
  }))
  porcentajesArray.sort((a, b) => b.porcentaje - a.porcentaje)
  return porcentajesArray
}

export function PorcentajesComponent({ datos }) {
  const porcentajes = calcularPorcentajes(datos)
  const [animationStarted, setAnimationStarted] = useState(false)
  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAnimationStarted(true)
    }, 300)
    return () => clearTimeout(animationTimer)
  }, [])

  return (
    <article className='porcentajes'>
      <h3>Tratamientos Preferidos</h3>
      <ul className={`bar-chart ${animationStarted ? 'animate' : ''}`}>
        {porcentajes.map(({ tratamiento, porcentaje }) => (
          <li key={tratamiento}>
            {tratamiento} {porcentaje.toFixed(1)} %
            <div className='bar'>
              <div
                className='fill'
                style={{
                  width: `${animationStarted ? porcentaje : 0}%`
                }}></div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
