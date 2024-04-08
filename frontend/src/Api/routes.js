export const BASE_URL = import.meta.env.PROD
  ? `${import.meta.env.VITE_URL_PROD}`
  : `${import.meta.env.VITE_URL_DEV}`

export const apiRoutes = {
  publicas: {
    getServicios: `${BASE_URL}servicios`,
    getPromociones: `${BASE_URL}promociones`,
    reservasDia: `${BASE_URL}reservasDia/`
  },
  backup: {
    reservas: `${BASE_URL}reservasBackup`,
    servicios: `${BASE_URL}serviciosBackup`,
    tratamientos: `${BASE_URL}tratamientosBackup`,
    pacientes: `${BASE_URL}pacientesBackup`,
    todoBackup: `${BASE_URL}todoBackup`
  },
  reservas: {
    reservasDia: `${BASE_URL}admin/reservasDia/`,
    deLaSemana: `${BASE_URL}admin/reservasSemana/`,
    delMes: `${BASE_URL}admin/reservasDelMes/`,
    deUnPacientes: `${BASE_URL}admin/reservasPaciente/`,
    postReserva: `${BASE_URL}admin/reservas/nueva`,
    deleteReserva: `${BASE_URL}admin/reservas/borrar/`,
    putEstadoReserva: `${BASE_URL}admin/reservas/estado/`,
    putReserva: `${BASE_URL}admin/reservas/editar/`
  },
  servicios: {
    getServicios: `${BASE_URL}admin/servicios`,
    getServiciosNombres: `${BASE_URL}admin/serviciosNombres`,
    getServiciosNombresYTratamientos: `${BASE_URL}admin/serviciosNombresYTratamientos`,
    putServicio: `${BASE_URL}admin/servicios/editar`,
    deleteServicio: `${BASE_URL}admin/servicios/borrar/`,
    postServicio: `${BASE_URL}admin/servicios/agregar`
  },
  tratamientos: {
    getTratamientos: `${BASE_URL}admin/tratamientos`,
    putTratamiento: `${BASE_URL}admin/tratamientos/editar/`,
    deleteTratamiento: `${BASE_URL}admin/tratamientos/borrar/`,
    postTratamiento: `${BASE_URL}admin/tratamientos/agregar`
  },
  pacientes: {
    getPacientesPaginados: `${BASE_URL}admin/pacientes/`,
    getPacientesNombres: `${BASE_URL}admin/pacientes/nombres`,
    getPacienteId: `${BASE_URL}admin/paciente/`,
    getPacienteNombre: `${BASE_URL}admin/pacienteNombre/`,
    deletePaciente: `${BASE_URL}admin/pacientes/borrar/`,
    postPaciente: `${BASE_URL}admin/pacientes/nuevo`,
    putPaciente: `${BASE_URL}admin/paciente/editar/`,
    postPdf: `${BASE_URL}admin/pacientes/pdf`
  },
  estadisticas: {
    reservas: `${BASE_URL}admin/estadisticas/reservas`,
    reservasAno: `${BASE_URL}admin/estadisticas/reservas/ano/`,
    reservasMes: `${BASE_URL}admin/estadisticas/reservas/mes/`
  }
}
