import { ESTADOS_RESERVAS, MESES } from '../../../../frontend/src/constantes.js'

export const formatDatosReservasMesYAno = (data) => {
  const estadisticasPorMes = {}
  for (let mes = 1; mes <= 12; mes++) {
    estadisticasPorMes[mes] = {
      ganancias: 0,
      pacientes: {},
      servicios: [],
      tratamientos: {},
      cantidadReservas: 0,
      estados: { Cancelada: 0, Pendiente: 0, Pago: 0 }
    }
  }
  data.forEach((reserva) => {
    const mesReserva = reserva.horario.horaInicio.getMonth() + 1
    estadisticasPorMes[mesReserva].cantidadReservas++

    estadisticasPorMes[mesReserva].estados[reserva.estado] =
      (estadisticasPorMes[mesReserva].estados[reserva.estado] || 0) + 1

    if (
      reserva.tratamiento &&
      reserva.tratamiento.costoPorSesion &&
      reserva.estado === ESTADOS_RESERVAS.pago
    ) {
      estadisticasPorMes[mesReserva].ganancias += reserva.tratamiento.costoPorSesion
    }

    if (
      reserva.servicio &&
      reserva.servicio.nombre &&
      reserva.tratamiento &&
      reserva.tratamiento.descripcion
    ) {
      estadisticasPorMes[mesReserva].servicios.push({
        tratamiento: reserva.tratamiento.descripcion,
        servicio: reserva.servicio.nombre
      })
    }
    if (reserva.paciente && reserva.paciente.nombre) {
      const nombrePaciente = reserva.paciente.nombre
      estadisticasPorMes[mesReserva].pacientes[nombrePaciente] =
        (estadisticasPorMes[mesReserva].pacientes[nombrePaciente] || 0) + 1
    }
  })

  const estadisticasArray = Object.keys(estadisticasPorMes).map((mes) => {
    const pacientesPorMes = estadisticasPorMes[mes].pacientes
    let pacienteMasReservas = ''
    let maxReservas = 0
    for (const paciente in pacientesPorMes) {
      if (Object.hasOwnProperty.call(pacientesPorMes, paciente)) {
        if (pacientesPorMes[paciente] > maxReservas) {
          maxReservas = pacientesPorMes[paciente]
          pacienteMasReservas = paciente
        }
      }
    }
    return {
      mes: MESES[parseInt(mes) - 1],
      estados: estadisticasPorMes[mes].estados,
      ganancias: estadisticasPorMes[mes].ganancias,
      pacienteMasReservas: {
        nombre: pacienteMasReservas,
        cantidad: pacientesPorMes[pacienteMasReservas] || 0
      },
      servicioMasSolicitado: contarCombinaciones(estadisticasPorMes[mes].servicios),
      cantidadReservas: estadisticasPorMes[mes].cantidadReservas
    }
  })
  return estadisticasArray
}
const contarCombinaciones = (elementos) => {
  const combinaciones = {}
  elementos.forEach((elemento) => {
    const combinacion = `${elemento.servicio}-${elemento.tratamiento}`

    if (!combinaciones[combinacion]) {
      combinaciones[combinacion] = { ...elemento, cantidad: 0 }
    }
    combinaciones[combinacion].cantidad++
  })
  return (
    Object.values(combinaciones)
      .sort((a, b) => b.cantidad - a.cantidad)
      .slice(0, 1)[0] || null
  )
}
