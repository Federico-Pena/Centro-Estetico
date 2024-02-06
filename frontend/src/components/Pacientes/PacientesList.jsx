import { useState } from 'react'
import { usePaciente } from '../../Hooks/Api/Pacientes/usePaciente.jsx'
import { Add } from '../Icons/Icons.jsx'
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal.jsx'
import { ACTIONS_PACIENTES } from '../../Context/Pacientes/reducerPaciente.js'
import Pagination from '../Pagination/Pagination.jsx'
import { Button } from '../Botones/Button.jsx'
import { PacienteListItem } from './PacienteListItem.jsx'
import { Paciente } from './Paciente.jsx'
import { useNavigate } from 'react-router-dom'
import { RUTAS } from '../../constantes.js'
import { usePacienteContext } from '../../Hooks/Context/usePacienteContext.jsx'
import { useLoaderContext } from '../../Hooks/Context/useLoaderContext.jsx'
function primerYUltimaLetra(array) {
  const primera = array[0].nombre.charAt(0)
  const ultima = array[array.length - 1].nombre.charAt(0)
  return `Pacientes de la ${primera.toUpperCase()} hasta la ${ultima.toUpperCase()}`
}
export const PacientesList = () => {
  const navigate = useNavigate()
  const { pacientes, paciente, dispatch } = usePacienteContext()
  const { loading } = useLoaderContext()
  const { totalPages, setPagina, borrarPaciente, obtenerPacientePorId } = usePaciente()
  const [modal, setModal] = useState(false)
  const [verPaciente, setVerPaciente] = useState(false)

  const handleDelete = (paciente) => {
    dispatch({ type: ACTIONS_PACIENTES.SET_PACIENTE, payload: paciente })
    setModal(true)
  }
  const handleEdit = async (paciente) => {
    const res = await obtenerPacientePorId(paciente._id)
    navigate(RUTAS.admin.editarPaciente, { state: { paciente: res } })
  }
  const handleVerPaciente = async (paciente) => {
    await obtenerPacientePorId(paciente._id)
    setVerPaciente(true)
  }
  return verPaciente ? (
    <Paciente
      cerrarPaciente={() => {
        dispatch({ type: ACTIONS_PACIENTES.SET_PACIENTE, payload: null })
        setVerPaciente(false)
      }}
    />
  ) : (
    pacientes.length > 0 && (
      <article className='grid grid-rows-[auto_auto_1fr] gap-4 pt-8 max-w-5xl mx-auto w-full border-t border-slate-500'>
        {modal && (
          <ConfirmationModal
            mensaje={`Desea borrar el paciente ${paciente.nombre.toUpperCase()}?`}
            titulo={'Borrar paciente'}
            onCancel={() => setModal(false)}
            onConfirm={() => {
              setModal(false)
              borrarPaciente(paciente)
            }}
          />
        )}
        <header className='max-w-2xl m-auto w-full '>
          <Pagination
            loading={loading}
            totalPages={totalPages}
            onPageChange={(page) => setPagina(page)}
          />
        </header>
        <section className='grid gap-4 pt-8 md:grid-cols-2 border-t border-slate-500 '>
          <Button
            onClickFunction={() => navigate(RUTAS.admin.agregarPaciente)}
            tipo={'button'}
            texto={'Nuevo'}
            icono={<Add />}
            className={'grid grid-flow-col gap-2 place-content-center col-span-full'}
          />
          <h2 className='text-center font-betonga font-bold text-color-violeta text-xl col-span-full mb-4'>
            {primerYUltimaLetra(pacientes)}
          </h2>
          {pacientes.map((pac) => (
            <PacienteListItem
              key={pac._id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleVerPaciente={handleVerPaciente}
              paciente={pac}
            />
          ))}
        </section>
      </article>
    )
  )
}
