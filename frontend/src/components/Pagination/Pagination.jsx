import { useState } from 'react'
import { LoaderChico } from '../Loader/LoaderChico.jsx'
import { Button } from '../Botones/Button.jsx'

const Pagination = ({ loading, totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    onPageChange(page)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-auto px-3 py-1 rounded-full border hover:scale-105 transition-transform max-w-fit ${
            currentPage === i ? 'bg-color-violeta text-white' : 'bg-transparent text-gray-700'
          }`}>
          {i}
        </button>
      )
    }
    return pageNumbers
  }

  return (
    <section className='grid gap-4'>
      <div className='flex justify-between items-center gap-4'>
        <Button
          disabled={currentPage === 1}
          tipo={'button'}
          className={'font-bold'}
          texto={'Anterior'}
          onClickFunction={() => handlePageChange(currentPage - 1)}
        />
        <p className='text-center'>{totalPages} páginas </p>
        <Button
          disabled={currentPage === totalPages}
          tipo={'button'}
          className={'font-bold'}
          texto={'Siguiente'}
          onClickFunction={() => handlePageChange(currentPage + 1)}
        />
      </div>
      <span className='grid grid-flow-col items-center gap-2 overflow-auto min-h-9'>
        {loading ? <LoaderChico className={'justify-self-center'} /> : renderPageNumbers()}
      </span>
    </section>
  )
}

export default Pagination
