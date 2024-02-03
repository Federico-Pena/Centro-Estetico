export function TextAreaLabel({
  disabled,
  error,
  value,
  onChange,
  placeholder,
  labelText,
  name,
  className
}) {
  const handleTextChange = (e) => {
    const textarea = e.target
    textarea.style.height = textarea.scrollHeight + 'px'
    onChange(e)
  }
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      {error && <small className='text-red-600 '>* {error}</small>}
      <textarea
        disabled={disabled ? disabled : false}
        name={name}
        id={name}
        value={value}
        className={`${className ? className : ''} ${
          disabled ? 'capitalize bg-slate-50 opacity-70' : ''
        } border min-h-[58px] p-2 py-1 mb-4 rounded-md outline-none shadow-md transition-colors focus:border-color-violeta resize-none   focus:shadow-none `}
        onChange={handleTextChange}
        onClick={handleTextChange}
        placeholder={placeholder}
      />
    </>
  )
}
