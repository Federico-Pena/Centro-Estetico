export const getReservasDelAnoPipeline = (startOfYear, endOfYear) => [
  {
    $match: {
      'horario.horaInicio': {
        $gte: startOfYear,
        $lte: endOfYear
      }
    }
  },
  {
    $group: {
      _id: { $month: '$horario.horaInicio' },
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
]
