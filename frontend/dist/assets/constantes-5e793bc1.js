const t=a=>a.toLocaleTimeString("es-UY",{hour12:!1,timeZone:"America/Montevideo"}).split(":",2).join(":"),e="https://centro-estetico.vercel.app",n={paciente:{agregarPaciente:`${e}/api/pacientes/agregar`,editarPaciente:`${e}/api/pacientes/editar/`,eliminarPaciente:`${e}/api/pacientes/eliminar/`,nombres:`${e}/api/pacientes/nombres/`,porId:`${e}/api/pacientes/id/`,todos:`${e}/api/pacientes/todos`,porNombre:`${e}/api/pacientes/nombre/`},reservas:{deUnDia:`${e}/api/reservas/DeUnDia/`,deLaSemana:`${e}/api/reservas/semanaDel/`,deUnPaciente:`${e}/api/reservas/usuario/`,agregar:`${e}/api/reservas/agregar`,editar:`${e}/api/reservas/editar/`,editarEstado:`${e}/api/reservas/estado/`,eliminar:`${e}/api/reservas/`,dias:`${e}/api/reservas/dias/`},publicas:{fechasHorasReservadasDeUndia:`${e}/api/reservas/dia/horas/`,fechasHorasReservadasDeLaSemana:`${e}/api/publica/reservas/semana/`},estadisticas:{estadisticas:`${e}/api/estadisticas/`},tratamientos:{todos:`${e}/api/tratamiento/obtener`}},r=a=>{const i=a.getTimezoneOffset()*6e4;return new Date(Date.now()-i).toISOString()},c=7,p=8,d=20,m=12,S=30,E=60,s=new Date,$=`${r(s).split("T")[0]}T${t(s)}`,l={pago:"Pago",pendiente:"Pendiente",cancelada:"Cancelada"},A=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];export{c as D,l as E,$ as H,S as I,A as M,n as a,s as b,m as c,d,p as e,t as f,E as g};
