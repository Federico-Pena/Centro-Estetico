import { Dropdown } from '../../Dropdown/Dropdown.jsx'

export const Costumbres = ({ values, handleChange }) => {
  const dropdownChange = (name, event) => {
    const value = event.target.textContent
    const valor = {
      target: {
        name,
        value
      }
    }
    handleChange(valor)
  }
  return (
    <>
      <div className='border-b border-slate-500 grid py-4 gap-4'>
        {values.alimentacion && (
          <p className='text-center font-bold text-color-violeta'>{values.alimentacion}</p>
        )}
        <Dropdown name={'Alimentación'} className={'gap-4 mb-0'}>
          <p
            onClick={(e) => {
              dropdownChange('alimentacion', e)
            }}
            className='min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'></p>
          <p
            onClick={(e) => {
              dropdownChange('alimentacion', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            Buena
          </p>
          <p
            onClick={(e) => {
              dropdownChange('alimentacion', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            Regular
          </p>
          <p
            onClick={(e) => {
              dropdownChange('alimentacion', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            Mala
          </p>
        </Dropdown>
      </div>

      <div className='border-b border-slate-500 grid py-4 gap-4'>
        {values.descanso && (
          <p className='text-center font-bold text-color-violeta'>{values.descanso}</p>
        )}
        <Dropdown name={'Descanso'} className={'gap-4 mb-0'}>
          <p
            onClick={(e) => {
              dropdownChange('descanso', e)
            }}
            className='min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'></p>
          <p
            onClick={(e) => {
              dropdownChange('descanso', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            Menos de 6 horas
          </p>
          <p
            onClick={(e) => {
              dropdownChange('descanso', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            8 horas
          </p>
          <p
            onClick={(e) => {
              dropdownChange('descanso', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            Mas de 8 horas
          </p>
        </Dropdown>
      </div>

      <div className='border-b border-slate-500 grid py-4 gap-4'>
        {values.hidratacion && (
          <p className='text-center font-bold text-color-violeta'>{values.hidratacion}</p>
        )}
        <Dropdown name={'Hidratación'} className={'gap-4 mb-0'}>
          <p
            onClick={(e) => {
              dropdownChange('hidratacion', e)
            }}
            className='min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'></p>
          <p
            onClick={(e) => {
              dropdownChange('hidratacion', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            2 o más litros de agua
          </p>
          <p
            onClick={(e) => {
              dropdownChange('hidratacion', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            1 litro de agua
          </p>
          <p
            onClick={(e) => {
              dropdownChange('hidratacion', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            Nunca tomo agua
          </p>
        </Dropdown>
      </div>

      <div className='border-b border-slate-500 grid py-4 gap-4'>
        {values.alcohol && (
          <p className='text-center font-bold text-color-violeta'>{values.alcohol}</p>
        )}
        <Dropdown name={'Alcohol'} className={'gap-4 mb-0'}>
          <p
            onClick={(e) => {
              dropdownChange('alcohol', e)
            }}
            className='min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'></p>
          <p
            onClick={(e) => {
              dropdownChange('alcohol', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            Siempre
          </p>
          <p
            onClick={(e) => {
              dropdownChange('alcohol', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            Ocasionalmente
          </p>
          <p
            onClick={(e) => {
              dropdownChange('alcohol', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            Nunca
          </p>
        </Dropdown>
      </div>

      <div className='grid pt-4 gap-4'>
        {values.fuma && <p className='text-center font-bold text-color-violeta'>{values.fuma}</p>}
        <Dropdown name={'Fuma'} className={'gap-4 mb-0'}>
          <p
            onClick={(e) => {
              dropdownChange('fuma', e)
            }}
            className='min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'></p>
          <p
            onClick={(e) => {
              dropdownChange('fuma', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            Siempre
          </p>
          <p
            onClick={(e) => {
              dropdownChange('fuma', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            Ocasionalmente
          </p>
          <p
            onClick={(e) => {
              dropdownChange('fuma', e)
            }}
            className='text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            Nunca
          </p>
        </Dropdown>
      </div>
    </>
  )
}
