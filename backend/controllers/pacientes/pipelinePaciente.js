export const pipelinePaciente = (page, porPagina) => [
  {
    $lookup: {
      from: 'reservas',
      localField: '_id',
      foreignField: 'paciente',
      as: 'reservas'
    }
  },
  {
    $lookup: {
      from: 'servicios',
      localField: 'servicio',
      foreignField: '_id',
      as: 'servicio'
    }
  },
  {
    $lookup: {
      from: 'tratamientos',
      localField: 'tratamiento',
      foreignField: '_id',
      as: 'tratamiento'
    }
  },
  {
    $addFields: {
      totalReservas: { $size: '$reservas' || 0 },
      reservasPendientes: {
        $size: {
          $filter: {
            input: '$reservas',
            as: 'reserva',
            cond: { $eq: ['$$reserva.estado', 'Pendiente'] }
          }
        }
      },
      reservasPagas: {
        $size: {
          $filter: {
            input: '$reservas',
            as: 'reserva',
            cond: { $eq: ['$$reserva.estado', 'Pago'] }
          }
        }
      },
      reservasCanceladas: {
        $size: {
          $filter: {
            input: '$reservas',
            as: 'reserva',
            cond: { $eq: ['$$reserva.estado', 'Cancelada'] }
          }
        }
      },
      servicio: {
        $cond: {
          if: { $isArray: '$servicio' },
          then: {
            $let: {
              vars: { firstServicio: { $arrayElemAt: ['$servicio', 0] } },
              in: {
                nombre: '$$firstServicio.nombre'
              }
            }
          },
          else: '$servicio'
        }
      },
      tratamiento: {
        $cond: {
          if: { $isArray: '$tratamiento' },
          then: {
            $let: {
              vars: { firstTratamiento: { $arrayElemAt: ['$tratamiento', 0] } },
              in: {
                descripcion: '$$firstTratamiento.descripcion'
              }
            }
          },
          else: '$tratamiento'
        }
      }
    }
  },
  {
    $sort: { nombre: 1 }
  },
  {
    $skip: (page - 1) * porPagina
  },
  {
    $limit: porPagina
  },

  {
    $project: {
      _id: 1,
      nombre: 1,
      foto: 1,
      servicio: 1,
      tratamiento: 1,
      totalReservas: 1,
      reservasPendientes: 1,
      reservasPagas: 1,
      reservasCanceladas: 1
    }
  }
]
