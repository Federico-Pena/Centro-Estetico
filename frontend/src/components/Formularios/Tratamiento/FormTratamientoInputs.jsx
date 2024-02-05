import { LabelInput } from '../LabelInput.jsx'

export const FormTratamientoInputs = ({ values, errors, handleChange }) => {
  return (
    <>
      <div className='grid gap-4 py-2 '>
        <LabelInput
          className={'capitalize'}
          errors={errors}
          disabled={true}
          labelText={'Servicio'}
          name={'nombre'}
          onChange={handleChange}
          type={'text'}
          value={values.nombre}
          placeholder={'Masaje Estético'}
        />
      </div>
      <div className='grid gap-4 border-t border-black py-2'>
        <LabelInput
          value={values.descripcion}
          labelText={'Descripcion'}
          name={'descripcion'}
          onChange={handleChange}
          placeholder={'1 Sesión (Cuerpo completo)'}
          type={'text'}
          errors={errors}
        />
      </div>
      <div className='grid gap-4 border-t border-black py-2'>
        <LabelInput
          value={values.tiempo}
          labelText={'Tiempo'}
          name={'tiempo'}
          onChange={handleChange}
          placeholder={'50'}
          type={'number'}
          errors={errors}
        />
      </div>
      <div className='grid gap-4 border-t border-black py-2'>
        <LabelInput
          value={values.sesiones}
          labelText={'Sesiones'}
          name={'sesiones'}
          onChange={handleChange}
          placeholder={'1'}
          type={'number'}
          errors={errors}
        />
      </div>
      <div className='grid gap-4 border-t border-black py-2'>
        <LabelInput
          value={values.costoTotal}
          labelText={'Precio'}
          name={'costoTotal'}
          onChange={handleChange}
          placeholder={'1'}
          type={'number'}
          errors={errors}
        />
      </div>
    </>
  )
}
