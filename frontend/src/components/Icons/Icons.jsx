export const WhatsApp = () => {
  return (
    <svg width='40' height='40' viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01Z'
      />
    </svg>
  )
}

export const Instagram = () => {
  return (
    <svg width='40' height='40' viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z'
      />
    </svg>
  )
}

export const Email = () => {
  return (
    <svg width='40' height='40' viewBox='0 0 32 32'>
      <path
        fill='currentColor'
        d='M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z'
      />
    </svg>
  )
}

export const Menu = () => {
  return (
    <svg width='40' height='40' viewBox='0 0 24 24'>
      <g fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth='2'>
        <path d='M5 5L19 19'>
          <animate fill='freeze' attributeName='d' dur='0.4s' values='M5 5L19 19;M5 5L19 5' />
        </path>
        <path d='M12 12H12' opacity='0'>
          <animate
            fill='freeze'
            attributeName='d'
            begin='0.2s'
            dur='0.4s'
            values='M12 12H12;M5 12H19'
          />
          <set attributeName='opacity' begin='0.2s' to='1' />
        </path>
        <path d='M5 19L19 5'>
          <animate fill='freeze' attributeName='d' dur='0.4s' values='M5 19L19 5;M5 19L19 19' />
        </path>
      </g>
    </svg>
  )
}
export const MenuCross = () => {
  return (
    <svg width='40' height='40' viewBox='0 0 24 24'>
      <g fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth='2'>
        <path d='M5 5L19 5'>
          <animate
            fill='freeze'
            attributeName='d'
            begin='0.2s'
            dur='0.4s'
            values='M5 5L19 5;M5 5L19 19'
          />
        </path>
        <path d='M5 12H19'>
          <animate fill='freeze' attributeName='d' dur='0.4s' values='M5 12H19;M12 12H12' />
          <set attributeName='opacity' begin='0.4s' to='0' />
        </path>
        <path d='M5 19L19 19'>
          <animate
            fill='freeze'
            attributeName='d'
            begin='0.2s'
            dur='0.4s'
            values='M5 19L19 19;M5 19L19 5'
          />
        </path>
      </g>
    </svg>
  )
}
export const Checkbox = () => {
  return (
    <svg width='1.01em' height='1em' viewBox='0 0 1025 1023'>
      <path
        fill='currentColor'
        d='M896.428 1023h-768q-53 0-90.5-37.5T.428 895V127q0-53 37.5-90t90.5-37h768q53 0 90.5 37t37.5 90v768q0 53-37.5 90.5t-90.5 37.5zm0-832q0-26-18.5-45t-45.5-19h-640q-27 0-45.5 19t-18.5 45v640q0 27 18.5 45.5t45.5 18.5h640q27 0 45.5-18.5t18.5-45.5V191zm-290 320l142 142q20 20 20 47.5t-19.5 46.5t-47 19t-47.5-19l-142-142l-142 143q-20 19-47 19t-46.5-19.5t-19.5-47t19-46.5l143-143l-144-143q-19-20-19-47.5t19-46.5t46.5-19t47.5 19l143 144l144-144q19-19 46.5-19t47 19.5t19.5 47t-20 46.5z'
      />
    </svg>
  )
}
export const CheckboxChecked = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 32 32'>
      <path
        fill='currentColor'
        d='M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM6 26V6h20v20Z'
      />
      <path fill='currentColor' d='m14 21.5l-5-4.96L10.59 15L14 18.35L21.41 11L23 12.58l-9 8.92z' />
    </svg>
  )
}
export const ArrowDown = ({ className }) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' className={className}>
      <path
        fill='currentColor'
        d='m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222l4.95 4.95Z'
      />
    </svg>
  )
}
