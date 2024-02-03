export const ACTIONS_PACIENTES = {
  SET_PACIENTE: 'SET_PACIENTE',
  SET_PACIENTES: 'SET_PACIENTES',
  SET_PACIENTE_NUEVO: 'SET_PACIENTE_NUEVO',
  DELETE_PACIENTE: 'DELETE_PACIENTE'
}

export const reducerPacientes = (state, action) => {
  switch (action.type) {
    case ACTIONS_PACIENTES.SET_PACIENTES:
      return { ...state, pacientes: action.payload }
    case ACTIONS_PACIENTES.SET_PACIENTE:
      return { ...state, paciente: action.payload }
    case ACTIONS_PACIENTES.SET_PACIENTE_NUEVO:
      const pacienteFiltrados = state.pacientes.filter((res) => res._id !== action.payload._id)
      return {
        ...state,
        pacientes: [...pacienteFiltrados, action.payload].sort((a, b) => {
          return a.nombre.localeCompare(b.nombre)
        }),
        paciente: action.payload
      }
    case ACTIONS_PACIENTES.DELETE_PACIENTE:
      const sinBorrado = state.pacientes.filter((res) => res._id !== action.payload._id)
      return { ...state, pacientes: sinBorrado, paciente: null }
    default:
      return state
  }
}
