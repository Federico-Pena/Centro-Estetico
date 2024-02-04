export const ACTIONS_ESTADISTICAS = {
  SET_ESTADISTICAS_RESERVAS_TODAS: 'SET_ESTADISTICAS_RESERVAS_TODAS',
  SET_ESTADISTICAS_RESERVAS: 'SET_ESTADISTICAS_RESERVAS'
}

export const reducerEstadisticas = (state, action) => {
  switch (action.type) {
    case ACTIONS_ESTADISTICAS.SET_ESTADISTICAS_RESERVAS_TODAS:
      return { ...state, reservasTodas: action.payload }
    case ACTIONS_ESTADISTICAS.SET_ESTADISTICAS_RESERVAS:
      return { ...state, reservas: action.payload }

    default:
      return state
  }
}
