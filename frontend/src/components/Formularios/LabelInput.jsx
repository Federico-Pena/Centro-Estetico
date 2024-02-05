import { Checkbox, CheckboxChecked } from '../Icons/Icons.jsx'

export const LabelInput = ({
  disabled,
  errors,
  name,
  placeholder,
  type,
  value,
  onChange,
  labelText,
  className,
  min,
  maxLength,
  minLength
}) => {
  const error = errors[name]
  if (type === 'checkbox') {
    return (
      <>
        <label
          className='flex justify-between items-center cursor-pointer relative w-full'
          htmlFor={name}>
          {labelText}
          <input
            disabled={disabled ? disabled : false}
            className={`absolute w-full hidden`}
            id={name}
            type={type}
            name={name}
            checked={value}
            onChange={onChange}
          />
          <span
            className={`${
              value ? '[&>svg]:text-color-paga [&>svg]:text-xl' : '[&>svg]:text-color-cancelada'
            }`}>
            {value ? <CheckboxChecked /> : <Checkbox />}
          </span>
        </label>
        {error && <small className='text-red-600'>* {error}</small>}
      </>
    )
  }
  return (
    <>
      <label className='w-full' htmlFor={name}>
        {labelText}
      </label>
      {error && <small className='text-red-600'>* {error}</small>}
      <input
        disabled={disabled ? disabled : false}
        className={`relative  w-full border p-2 rounded-md outline-none shadow-md  transition-colors focus:border-color-violeta focus:shadow-none ${
          className ? className : ''
        }`}
        id={name}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        maxLength={maxLength}
        minLength={minLength}
      />
    </>
  )
}
