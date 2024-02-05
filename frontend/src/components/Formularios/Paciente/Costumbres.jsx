import { Dropdown } from '../../Dropdown/Dropdown.jsx'

export const Costumbres = ({ values, handleChange }) => {
  const dropdownChange = (name, event) => {
    const value = event.target.textContent
    const valor = {
      target: {
        name,
        value
      }
    }
    handleChange(valor)
  }
  const costumbresPaciente = ['Buena', 'Regular', 'Mala']
  const descansoPaciente = ['Menos de 6 horas', '8 horas', 'Mas de 8 horas']
  const hidratacionPaciente = ['Nunca tomo agua', '1 litro de agua', '2 o más litros de agua']
  const alcoholPaciente = ['Nunca', 'Ocasionalmente', 'Siempre']
  const fumaPaciente = ['Nunca', 'Ocasionalmente', 'Siempre']
  return (
    <>
      <Dropdown
        defaultValue={values.alimentacion}
        name={'Alimentación'}
        list={costumbresPaciente}
        onClickFunction={(e) => {
          dropdownChange('alimentacion', e)
        }}
      />

      <Dropdown
        defaultValue={values.descanso}
        name={'Descanso'}
        list={descansoPaciente}
        onClickFunction={(e) => {
          dropdownChange('descanso', e)
        }}
      />

      <Dropdown
        defaultValue={values.hidratacion}
        name={'Hidratación'}
        list={hidratacionPaciente}
        onClickFunction={(e) => {
          dropdownChange('hidratacion', e)
        }}
      />

      <Dropdown
        defaultValue={values.alcohol}
        name={'Alcohol'}
        list={alcoholPaciente}
        onClickFunction={(e) => {
          dropdownChange('alcohol', e)
        }}
      />

      <Dropdown
        defaultValue={values.fuma}
        name={'Fuma'}
        list={fumaPaciente}
        onClickFunction={(e) => {
          dropdownChange('fuma', e)
        }}
      />
    </>
  )
}
