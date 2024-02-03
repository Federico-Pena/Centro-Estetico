import { useEffect, useRef, useState } from 'react'
import { ArrowDown } from '../Icons/Icons.jsx'

export const Dropdown = ({ name, className, children }) => {
  const [open, setOpen] = useState(false)
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

  return (
    <article
      className={`grid max-w-sm m-auto w-full ${className ? className : ''} ${
        open ? 'grid-rows-[45px,1fr]' : 'grid-rows-1'
      }'`}>
      <button
        ref={btnDropdownRef}
        onClick={() => setOpen(!open)}
        className={`${
          open ? 'text-white bg-color-violeta' : 'hover:bg-transparent hover:text-color-violeta'
        } m-auto border border-color-violeta font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center gap-2`}
        type='button'>
        {name}
        <ArrowDown className={`${open ? 'rotate-180' : ''} transition-transform`} />
      </button>
      <div
        className={`${
          open ? 'opacity-100 scale-y-100 h-auto' : 'opacity-0 scale-y-0 h-0'
        } z-10 my-0 mx-auto bg-white rounded-lg w-full transition overflow-hidden`}>
        {children}
      </div>
    </article>
  )
}
