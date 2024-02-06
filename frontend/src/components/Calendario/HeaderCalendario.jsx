import { formatFechaParaUser } from '../../Helpers/formatFechaParaUser.js'
import { HOY_FECHA_STRING } from '../../constantes.js'
import { LabelInput } from '../Formularios/LabelInput.jsx'

export const HeaderCalendario = ({ handleSeleccionarDia }) => {
  const handleChange = (e) => {
    const fecha = e.target.value
    if (fecha) {
      handleSeleccionarDia(fecha)
    }
  }
  return (
    <section className='grid gap-x-4'>
      <h1
        onClick={() => handleSeleccionarDia(HOY_FECHA_STRING.split('T')[0])}
        className='capitalize p-4 text-xl bg-color-verde-blanco text-center text-color-violeta cursor-pointer rounded-t-lg font-betonga font-bold'>
        Hoy {formatFechaParaUser(HOY_FECHA_STRING)}
      </h1>
      <div className='grid gap-2 p-4 text-center'>
        <LabelInput
          className={'text-center max-w-md justify-self-center'}
          labelText={'Buscar día'}
          type={'date'}
          onChange={handleChange}
        />
      </div>
    </section>
  )
}
