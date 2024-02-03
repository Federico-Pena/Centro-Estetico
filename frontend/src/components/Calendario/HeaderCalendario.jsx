import { formatFechaParaUser } from '../../Helpers/formatFechaParaUser.js'
import { HOY_FECHA_STRING } from '../../constantes.js'

export const HeaderCalendario = ({ diasSemana, handleSeleccionarDia }) => {
  return (
    <section className='grid gap-x-4'>
      <h1
        onClick={() => handleSeleccionarDia(HOY_FECHA_STRING.split('T')[0])}
        className='capitalize p-4 text-xl bg-color-verde-blanco text-center text-color-violeta cursor-pointer rounded-t-lg font-betonga font-bold'>
        Hoy {formatFechaParaUser(HOY_FECHA_STRING)}
      </h1>
      <label htmlFor='fecha' className='justify-center items-center flex flex-col gap-4 py-4'>
        Seleccionar día{' '}
        <input
          type='date'
          className='border text-center px-4 py-2 rounded-lg'
          id='fecha'
          onChange={(e) => {
            const fecha = e.target.value
            if (fecha) {
              handleSeleccionarDia(fecha)
            }
          }}
        />
      </label>
    </section>
  )
}
