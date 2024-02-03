export const reducerReservas = (state, action) => {
  switch (action.type) {
    case ACTIONS_RESERVAS.SET_RESERVAS:
      return {
        ...state,
        reservas: action.payload.sort(
          (a, b) => new Date(b.horario.horaInicio) - new Date(a.horario.horaInicio)
        )
      }
    case ACTIONS_RESERVAS.SET_RESERVA:
      return {
        ...state,
        reserva: action.payload
      }
    case ACTIONS_RESERVAS.SET_RESERVA_NUEVA:
      const filtradas = state.reservas.filter((res) => res._id !== action.payload._id)
      const filtradasSeleccionadas = state.seleccionadas.filter(
        (res) => res._id !== action.payload._id
      )
      return {
        ...state,
        reservas: [...filtradas, action.payload].sort(
          (a, b) => new Date(b.horario.horaInicio) - new Date(a.horario.horaInicio)
        ),
        seleccionadas: [...filtradasSeleccionadas, action.payload].sort(
          (a, b) => new Date(b.horario.horaInicio) - new Date(a.horario.horaInicio)
        )
      }
    case ACTIONS_RESERVAS.DELETE_RESERVA:
      const semanaSinBorrada = state.reservas.filter((res) => res._id !== action.payload._id)
      const seleccionadasSinBorrada = state.seleccionadas.filter(
        (res) => res._id !== action.payload._id
      )
      return {
        ...state,
        reservas: semanaSinBorrada,
        seleccionadas: seleccionadasSinBorrada
      }
    case ACTIONS_RESERVAS.SET_RESERVAS_SELECCIONADAS:
      return {
        ...state,
        seleccionadas: action.payload
      }
    default:
      return state
  }
}
export const ACTIONS_RESERVAS = {
  SET_RESERVAS: 'SET_RESERVAS',
  SET_RESERVA: 'SET_RESERVA',
  SET_RESERVA_NUEVA: 'SET_RESERVA_NUEVA',
  SET_RESERVAS_SELECCIONADAS: 'SET_RESERVAS_SELECCIONADAS',
  DELETE_RESERVA: 'DELETE_RESERVA'
}
