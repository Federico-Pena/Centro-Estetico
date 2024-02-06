export const ReservaDatosAdmin = ({ reserva }) => {
  return (
    reserva.paciente.nombre === 'admin' && (
      <>
        <ul className='pb-4 gap-4 items-start grid text-white'>
          <li className='list-none text-center border-t pt-4'>Compromisos</li>
          {reserva.observaciones.split(',').map((observacion) => (
            <li key={observacion} className='pl-6'>
              {observacion}
            </li>
          ))}
        </ul>
      </>
    )
  )
}
