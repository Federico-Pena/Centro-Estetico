export const serviciosReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_SERVICIOS.SET_SERVICIOS:
      return {
        ...state,
        servicios: action.payload
      }
    case ACTIONS_SERVICIOS.SET_SERVICIO:
      return {
        ...state,
        servicio: action.payload
      }
    case ACTIONS_SERVICIOS.DELETE_SERVICIO:
      const sinBorrado = state.servicios.filter((servicio) => servicio._id !== action.payload._id)
      return {
        ...state,
        servicio: null,
        servicios: sinBorrado.sort((a, b) => {
          return a.nombre.localeCompare(b.nombre)
        })
      }
    case ACTIONS_SERVICIOS.SET_SERVICIO_NUEVO:
      const sinNuevo = state.servicios.filter((servicio) => servicio._id !== action.payload._id)
      return {
        ...state,
        servicios: [...sinNuevo, action.payload].sort((a, b) => {
          return a.nombre.localeCompare(b.nombre)
        })
      }
    default:
      return state
  }
}

export const ACTIONS_SERVICIOS = {
  SET_SERVICIOS: 'SET_SERVICIOS',
  SET_SERVICIO: 'SET_SERVICIO',
  SET_SERVICIO_NUEVO: 'SET_SERVICIO_NUEVO',
  DELETE_SERVICIO: 'DELETE_SERVICIO'
}
