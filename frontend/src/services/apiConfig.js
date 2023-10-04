const baseUrl = import.meta.env.PROD
  ? 'https://centro-estetico.vercel.app'
  : 'http://localhost:5000'
export const apiEndPoint = {
  paciente: {
    agregarPaciente: `${baseUrl}/api/pacientes/agregar`,
    editarPaciente: `${baseUrl}/api/pacientes/editar/`,
    eliminarPaciente: `${baseUrl}/api/pacientes/eliminar/`,
    nombres: `${baseUrl}/api/pacientes/nombres/`,
    porId: `${baseUrl}/api/pacientes/id/`,
    todos: `${baseUrl}/api/pacientes/todos`,
    porNombre: `${baseUrl}/api/pacientes/nombre/`
  },
  reservas: {
    deUnDia: `${baseUrl}/api/reservas/DeUnDia/`,
    deLaSemana: `${baseUrl}/api/reservas/semanaDel/`,
    deUnPaciente: `${baseUrl}/api/reservas/usuario/`,
    agregar: `${baseUrl}/api/reservas/agregar`,
    editar: `${baseUrl}/api/reservas/editar/`,
    editarEstado: `${baseUrl}/api/reservas/estado/`,
    eliminar: `${baseUrl}/api/reservas/`,
    dias: `${baseUrl}/api/reservas/dias/`
  },
  publicas: {
    fechasHorasReservadasDeUndia: `${baseUrl}/api/reservas/dia/horas/`,
    fechasHorasReservadasDeLaSemana: `${baseUrl}/api/publica/reservas/semana/`
  },
  estadisticas: {
    estadisticas: `${baseUrl}/api/estadisticas/`
  },
  tratamientos: { todos: `${baseUrl}/api/tratamiento/obtener` }
}
