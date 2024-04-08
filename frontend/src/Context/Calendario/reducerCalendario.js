import { DIAS_DE_LA_SEMANA } from '../../constantes.js'

export const reducerCalendario = (state, action) => {
  switch (action.type) {
    case ACTIONS_CALENDARIO.SET_DIA_SEMANA:
      return { ...state, diaDeLaSemana: action.payload }
    case ACTIONS_CALENDARIO.SET_MES:
      return { ...state, mesActual: action.payload }
    case ACTIONS_CALENDARIO.SET_VISTA_SEMANA:
      return { ...state, vistaSemana: action.payload }
    case ACTIONS_CALENDARIO.SET_SEMANA_SIGUIENTE:
      return { ...state, diaDeLaSemana: semanaSiguiente(state.diaDeLaSemana) }
    case ACTIONS_CALENDARIO.SET_SEMANA_ANTERIOR:
      return { ...state, diaDeLaSemana: semanaAnterior(state.diaDeLaSemana) }
    case ACTIONS_CALENDARIO.SET_MES_SIGUIENTE:
      return { ...state, mesActual: mesSiguiente(state.mesActual) }
    case ACTIONS_CALENDARIO.SET_MES_ANTERIOR:
      return { ...state, mesActual: mesAnterior(state.mesActual) }
    default:
      return state
  }
}

const semanaAnterior = (diaDeLaSemana) => {
  const newDate = new Date(`${diaDeLaSemana} 00:00:00.000Z`)
  newDate.setDate(newDate.getDate() - DIAS_DE_LA_SEMANA)
  const fecha = newDate.toISOString().split('T')[0]
  localStorage.setItem('currentDay', fecha)
  return fecha
}

const semanaSiguiente = (diaDeLaSemana) => {
  const newDate = new Date(`${diaDeLaSemana} 00:00:00.000Z`)
  newDate.setDate(newDate.getDate() + DIAS_DE_LA_SEMANA)
  const fecha = newDate.toISOString().split('T')[0]
  localStorage.setItem('currentDay', fecha)
  return fecha
}

const mesAnterior = (diaDeLMes) => {
  const newDate = new Date(`${diaDeLMes} 00:00:00.000Z`)
  newDate.setMonth(newDate.getMonth() - 1)
  const fecha = newDate.toISOString().split('T')[0]
  localStorage.setItem('currentMonth', fecha)
  return fecha
}

const mesSiguiente = (diaDeLMes) => {
  const newDate = new Date(`${diaDeLMes} 00:00:00.000Z`)
  newDate.setMonth(newDate.getMonth() + 1)
  const fecha = newDate.toISOString().split('T')[0]
  localStorage.setItem('currentMonth', fecha)
  return fecha
}

export const ACTIONS_CALENDARIO = {
  SET_DIA_SEMANA: 'SET_DIA_SEMANA',
  SET_SEMANA_SIGUIENTE: 'SET_SEMANA_SIGUIENTE',
  SET_SEMANA_ANTERIOR: 'SET_SEMANA_ANTERIOR',
  SET_MES: 'SET_MES',
  SET_MES_SIGUIENTE: 'SET_MES_SIGUIENTE',
  SET_MES_ANTERIOR: 'SET_MES_ANTERIOR',
  SET_VISTA_SEMANA: 'SET_VISTA_SEMANA'
}
