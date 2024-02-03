import { formatHoraUser } from '../../../../frontend/src/Helpers/formatHoraUser.js'
import { DIAS_DE_LA_SEMANA_STRING, ESTADOS_RESERVAS } from '../../../../frontend/src/constantes.js'

export const funcionEstadisticasReservas = (reservas) => {
  const cantidadEstados = {}
  const serviciosMasSolicitados = []
  const diasYhoras = []
  let gananciasTotales = 0
  let perdidasTotales = 0

  reservas.forEach((reserva) => {
    cantidadEstados[reserva.estado] = (cantidadEstados[reserva.estado] || 0) + 1
    const horaInicio = new Date(reserva.horario.horaInicio)
    const diaSemana = DIAS_DE_LA_SEMANA_STRING[horaInicio.getDay()]
    diasYhoras.push({
      dia: diaSemana,
      hora: formatHoraUser(horaInicio)
    })
    if (
      reserva.tratamiento &&
      reserva.tratamiento.costoPorSesion &&
      reserva.estado === ESTADOS_RESERVAS.pago
    ) {
      gananciasTotales += reserva.tratamiento.costoPorSesion
    }
    if (
      reserva.tratamiento &&
      reserva.tratamiento.costoPorSesion &&
      reserva.estado === ESTADOS_RESERVAS.cancelada
    ) {
      perdidasTotales += reserva.tratamiento.costoPorSesion
    }
    if (
      reserva.servicio &&
      reserva.servicio.nombre &&
      reserva.tratamiento &&
      reserva.tratamiento.descripcion
    ) {
      serviciosMasSolicitados.push({
        tratamiento: reserva.tratamiento.descripcion,
        servicio: reserva.servicio.nombre
      })
    }
  })
  const { horarios, servicios } = reducerDatos(diasYhoras, serviciosMasSolicitados)
  return {
    cantidadEstados,
    horarios,
    gananciasTotales,
    perdidasTotales,
    servicios
  }
}

const contarCombinaciones = (elementos) => {
  const combinaciones = {}
  elementos.forEach((elemento) => {
    const combinacion = elemento.dia
      ? `${elemento.dia}-${elemento.hora}`
      : `${elemento.servicio}-${elemento.tratamiento}`
    if (!combinaciones[combinacion]) {
      combinaciones[combinacion] = { ...elemento, cantidad: 0 } // Copia los elementos existentes y resetea la cantidad
    }
    combinaciones[combinacion].cantidad++
  })

  return Object.values(combinaciones)
    .sort((a, b) => b.cantidad - a.cantidad)
    .slice(0, 10)
    .map(({ dia, hora, servicio, tratamiento, cantidad }) => {
      if (dia && hora) {
        return { dia, hora, cantidad }
      } else {
        return { servicio, tratamiento, cantidad }
      }
    })
}

const reducerDatos = (diasYhoras, serviciosMasSolicitados) => {
  const horarios = contarCombinaciones(diasYhoras)
  const servicios = contarCombinaciones(serviciosMasSolicitados)
  return { horarios, servicios }
}
