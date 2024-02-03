export const LoaderChico = ({ className }) => {
  return (
    <span
      className={`border-t-2 border-color-violeta animate-spin w-6 h-6 rounded-full ${
        className ? className : ''
      }`}></span>
  )
}
