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

export const Add = ({ onClickFunction }) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' onClick={onClickFunction}>
      <path fill='currentColor' d='M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z' />
    </svg>
  )
}

export const Edit = ({ onClickFunction }) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' onClick={onClickFunction}>
      <path
        fill='currentColor'
        d='m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z'
      />
    </svg>
  )
}

export const Delete = ({ onClickFunction }) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' onClick={onClickFunction}>
      <path
        fill='currentColor'
        d='m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1l1.4 1.4ZM7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Z'
      />
    </svg>
  )
}

export const Eye = ({ onClickFunction }) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' onClick={onClickFunction}>
      <path
        fill='currentColor'
        d='M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z'
      />
    </svg>
  )
}

export const EyeClose = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 256 256'>
      <path
        fill='currentColor'
        d='M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.11 127.11 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm47.33 75.84l41.67 45.85a32 32 0 0 1-41.67-45.85ZM128 192c-30.78 0-57.67-11.19-79.93-33.25A133.16 133.16 0 0 1 25 128c4.69-8.79 19.66-33.39 47.35-49.38l18 19.75a48 48 0 0 0 63.66 70l14.73 16.2A112 112 0 0 1 128 192Zm6-95.43a8 8 0 0 1 3-15.72a48.16 48.16 0 0 1 38.77 42.64a8 8 0 0 1-7.22 8.71a6.39 6.39 0 0 1-.75 0a8 8 0 0 1-8-7.26A32.09 32.09 0 0 0 134 96.57Zm113.28 34.69c-.42.94-10.55 23.37-33.36 43.8a8 8 0 1 1-10.67-11.92a132.77 132.77 0 0 0 27.8-35.14a133.15 133.15 0 0 0-23.12-30.77C185.67 75.19 158.78 64 128 64a118.37 118.37 0 0 0-19.36 1.57A8 8 0 1 1 106 49.79A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z'
      />
    </svg>
  )
}

export const Change = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='m12.05 19l2.85-2.825l-2.85-2.825L11 14.4l1.075 1.075q-.7.025-1.362-.225t-1.188-.775q-.5-.5-.763-1.15t-.262-1.3q0-.425.113-.85t.312-.825l-1.1-1.1q-.425.625-.625 1.325T7 12q0 .95.375 1.875t1.1 1.65q.725.725 1.625 1.088t1.85.387l-.95.95zm4.125-4.25q.425-.625.625-1.325T17 12q0-.95-.363-1.888T15.55 8.45q-.725-.725-1.638-1.075t-1.862-.35L13 6.05L11.95 5L9.1 7.825l2.85 2.825L13 9.6l-1.1-1.1q.675 0 1.375.263t1.2.762q.5.5.763 1.15t.262 1.3q0 .425-.112.85t-.313.825zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22'
      />
    </svg>
  )
}
