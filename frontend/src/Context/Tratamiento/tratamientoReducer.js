export const tratamientosReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_TRATAMIENTOS.SET_TRATAMIENTOS_FILTRADOS:
      return {
        ...state,
        tratamientosFiltrados: action.payload
      }
    case ACTIONS_TRATAMIENTOS.SET_TRATAMIENTO_FILTRADO:
      return {
        ...state,
        tratamiento: action.payload
      }
    case ACTIONS_TRATAMIENTOS.SET_TRATAMIENTOS:
      return {
        ...state,
        tratamientos: action.payload
      }

    case ACTIONS_TRATAMIENTOS.DELETE_TRATAMIENTO:
      const sinBorrado = state.tratamientos.filter(
        (tratamiento) => tratamiento._id !== action.payload._id
      )
      return {
        ...state,
        tratamiento: null,
        tratamientos: sinBorrado.sort((a, b) => {
          return a.servicio.nombre.localeCompare(b.servicio.nombre)
        })
      }
    case ACTIONS_TRATAMIENTOS.SET_TRATAMIENTO_NUEVO:
      const sinNuevo = state.tratamientos.filter(
        (tratamiento) => tratamiento._id !== action.payload._id
      )
      return {
        ...state,
        tratamiento: action.payload,
        tratamientos: [...sinNuevo, action.payload].sort((a, b) => {
          return a.servicio.nombre.localeCompare(b.servicio.nombre)
        })
      }
    default:
      return state
  }
}

export const ACTIONS_TRATAMIENTOS = {
  SET_TRATAMIENTOS: 'SET_TRATAMIENTOS',
  SET_TRATAMIENTO_FILTRADO: 'SET_TRATAMIENTO_FILTRADO',
  SET_TRATAMIENTO_NUEVO: 'SET_TRATAMIENTO_NUEVO',
  SET_TRATAMIENTOS_FILTRADOS: 'SET_TRATAMIENTOS_FILTRADOS',
  DELETE_TRATAMIENTO: 'DELETE_TRATAMIENTO'
}
