export const ACTIONS_ESTADISTICAS = {
  SET_ESTADISTICAS_RESERVAS_TODAS: 'SET_ESTADISTICAS_RESERVAS_TODAS',
  SET_ESTADISTICAS_RESERVAS_ANO: 'SET_ESTADISTICAS_RESERVAS_ANO'
}

export const reducerEstadisticas = (state, action) => {
  switch (action.type) {
    case ACTIONS_ESTADISTICAS.SET_ESTADISTICAS_RESERVAS_TODAS:
      return { ...state, reservasTodas: action.payload }
    case ACTIONS_ESTADISTICAS.SET_ESTADISTICAS_RESERVAS_ANO:
      return { ...state, reservasAno: action.payload }

    default:
      return state
  }
}
