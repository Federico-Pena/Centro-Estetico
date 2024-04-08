import { Button } from '../Botones/Button.jsx'

export const PacienteListItemFooter = ({ handleVerPaciente, handleEdit, handleDelete }) => {
  return (
    <ul className='grid grid-flow-col justify-around pt-2'>
      <li>
        <Button onClickFunction={handleVerPaciente} texto={'Ver mas'} />
      </li>
      <li>
        <Button onClickFunction={handleEdit} texto={'Editar'} />
      </li>
      <li>
        <Button onClickFunction={handleDelete} texto={'Borrar'} />
      </li>
    </ul>
  )
}
