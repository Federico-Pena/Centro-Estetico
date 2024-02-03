export const imprimirPaciente = (paciente) => {
  const ventana = window.open('', 'PRINT')
  ventana.document.write(`<div >
  <h4>Detalles del paciente</h4>
  <ul>
    <li >
      <span>Nombre:</span> ${paciente.nombre}
    </li>
    <li>
      <span>Nacimiento:</span>
      ${paciente.fechaDeNac.split('-').reverse().join('-')}
    </li>
    <li>
      <span>Cédula:</span> ${paciente.cedula}
    </li>
    <li>
      <span>Edad:</span> ${paciente.edad}
    </li>
    <li>
      <span>Sociedad:</span> ${paciente.sociedad}
    </li>
    <li>
      <span>Teléfono:</span> ${paciente.telefono}
    </li>
    <li>
      <span>Obs:</span> ${paciente.observaciones}
    </li>
    <li >
      <span>Tratamiento:</span> ${paciente.tratamiento}
    </li>
  </ul>
</div>
<div >
  <h4>Contacto de Emergencia</h4>
  <ul>
    <li >
      <span>Nombre:</span>
      ${paciente.contactoEmergencia.nombreContacto2}
    </li>
    <li>
      <span>Teléfono:</span>
      ${paciente.contactoEmergencia.telefonoContacto2}
    </li>
  </ul>
</div>
<div >
  <h4>Costumbres Diarias</h4>
  <ul>
    <li>
      <span>Alimentación:</span> ${paciente.alimentacion}
    </li>
    <li>
      <span>Descanso:</span> ${paciente.descanso}
    </li>
    <li>
      <span>Hidratación:</span> ${paciente.hidratacion}
    </li>
    <li>
      <span>Alcohol:</span> ${paciente.alcohol}
    </li>
    <li>
      <span>Fuma:</span> ${paciente.fuma}
    </li>
  </ul>
</div>
<div >
  <h4>Condiciones</h4>
  <ul>
    <li>
      <span>Alergia:</span> ${paciente.alergia}
    </li>
    <li>
      <span>Problema Circulatorio:</span> ${paciente.circulatorio}
    </li>
    <li>
      <span>Embarazo:</span> ${paciente.embarazo}
    </li>
    <li>
      <span>Operaciones:</span> ${paciente.operaciones}
    </li>
    <li>
      <span>Oncológicas:</span> ${paciente.oncologicas}
    </li>
    <li>
      <span>Otras Enfermedades:</span> ${paciente.enfermedades}
    </li>
    <li>
      <span>Medicamentos:</span> ${paciente.medicamentos}
    </li>
    <li>
      <span>Implantes:</span> ${paciente.implantes}
    </li>
  </ul>
</div>`)
  ventana.print()
  ventana.addEventListener('afterprint', ventana.close())
}
