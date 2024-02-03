import { LabelInput } from '../LabelInput.jsx'

export const FormTratamientoImagen = ({ edicion, values, errors, handleChange }) => {
  return (
    <>
      <div className='grid grid-flow-col items-center pt-4 gap-4 border-t border-slate-500 py-2'>
        <LabelInput
          errors={errors}
          labelText={'En Promoción'}
          name={'enPromocion'}
          onChange={handleChange}
          type={'checkbox'}
          value={values.enPromocion}
        />
      </div>
      {values.enPromocion && (
        <div className='grid gap-4 border-t mb-4 border-slate-500 py-2'>
          <label htmlFor='imagen'>{edicion ? 'Nueva imagen:' : 'Imagen para promoción:'}</label>
          <input
            name='imagen'
            id='imagen'
            className='cursor-pointer border border-slate-500 rounded-lg p-4'
            type='file'
            accept='image/*'
            onChange={handleChange}
          />
          {(values.imgPreview || values.imagen?.secure_url) && (
            <>
              <span>Imagen actual:</span>
              <img
                className='justify-self-center aspect-square rounded-lg object-cover object-center'
                src={values.imgPreview || values.imagen?.secure_url}
                alt={`Imagen de servicio ${values.nombre || ''}`}
              />
            </>
          )}
          {errors.imagen && <samp className='error-message'>{errors.imagen}</samp>}
        </div>
      )}
    </>
  )
}
