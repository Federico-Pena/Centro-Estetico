export const ReservaDatosAdmin = ({ reserva }) => {
  return (
    reserva.paciente.nombre === 'admin' && (
      <>
        <p className='p-4 border-t'>Compromisos:</p>
        <ul className='px-6 pb-4 gap-4 grid list-decimal list-inside'>
          {reserva.observaciones.split(',').map((observacion) => (
            <li className='' key={observacion}>
              <span>{observacion}</span>
            </li>
          ))}
        </ul>
      </>
    )
  )
}
