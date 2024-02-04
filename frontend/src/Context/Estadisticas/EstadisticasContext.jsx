import { createContext, useReducer } from 'react'
import { reducerEstadisticas } from './reducerEstadisticas'

const inicialStateEstadisticas = {
  reservasTodas: {
    cantidadEstados: {
      Pago: 0,
      Pendiente: 0,
      Cancelada: 0
    },
    gananciasTotales: 0
  },
  reservas: null,
  dispatch: () => {}
}
export const EstadisticasContext = createContext(inicialStateEstadisticas)
export const EstadisticasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerEstadisticas, inicialStateEstadisticas)
  return (
    <EstadisticasContext.Provider value={{ ...state, dispatch }}>
      {children}
    </EstadisticasContext.Provider>
  )
}
