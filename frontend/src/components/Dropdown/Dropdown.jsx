import { useEffect, useRef, useState } from 'react'
import { ArrowDown } from '../Icons/Icons.jsx'

export const Dropdown = ({ name, className, list, onClickFunction, defaultValue }) => {
  const [open, setOpen] = useState(false)
  const [buttonName, setButtonName] = useState('')
  const [filterText, setFilterText] = useState('')
  const btnDropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (btnDropdownRef.current && !btnDropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const setName = (e) => {
    setButtonName(e.target.textContent)
    onClickFunction(e)
    setOpen(false)
  }

  const handleInputChange = (e) => {
    setFilterText(e.target.value)
  }

  const filteredList = list.filter((item) => item.toLowerCase().includes(filterText.toLowerCase()))

  const nombre = defaultValue
    ? defaultValue
    : buttonName && list.includes(buttonName)
    ? buttonName
    : name

  return (
    <article
      ref={btnDropdownRef}
      className={`grid  w-full gap-4 ${className ? className : ''} ${
        open ? 'grid-rows-[45px,1fr]' : 'grid-rows-1'
      }'`}>
      <button
        onClick={() => setOpen(!open)}
        className={`${
          open ? 'bg-transparent text-color-violeta' : '  bg-white'
        } w-full capitalize m-auto border border-color-violeta font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-between gap-2 hover:bg-transparent hover:text-color-violeta transition-colors`}
        type='button'>
        {nombre}
        <ArrowDown className={`${open ? 'rotate-180' : ''} transition-transform`} />
      </button>
      <div
        className={`${
          open ? 'opacity-100 scale-y-100 h-auto' : 'opacity-0 scale-y-0 h-0'
        } z-10 my-0 mx-auto bg-white rounded-lg w-full transition overflow-hidden`}>
        <input
          type='text'
          placeholder='Buscar...'
          value={filterText}
          onChange={handleInputChange}
          className='w-full px-4 py-2 border-b border-gray-300 focus:outline-none'
        />
        {filteredList.map((item, i) => (
          <p
            key={i}
            onClick={setName}
            className='capitalize min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer'>
            {item}
          </p>
        ))}
      </div>
    </article>
  )
}
