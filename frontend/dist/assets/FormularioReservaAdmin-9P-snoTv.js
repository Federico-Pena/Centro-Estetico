import{j as o,E as x,k as $,a as L,u as k,R as D,l as q}from"./index-bGblmpTd.js";import{u as O}from"./useForm-dmK4_1hC.js";import{B as C}from"./Button-9xCFGcvS.js";import{L as S}from"./LabelInput-vZH92CXT.js";import{T as P}from"./TextAreaLabel-3Zz3tFXL.js";import{S as z}from"./SelectServicio-crLGTeuO.js";import{f as _,u as B}from"./useReservasContext-bDli98VY.js";import{u as U}from"./useFormReserva-OxhSwNAK.js";import{c as G}from"./compararFechas-h4mI52ve.js";import{f as M}from"./formatHoraUser-TJ92Iw1g.js";import{D as J}from"./Dropdown-vmSa1ENP.js";import{u as K}from"./useUserContext-ZLo1aMkK.js";import"./getServiciosNombresYTratamientos-WEkjQrpE.js";const Q=({values:e})=>{const n=new Date(e.horaInicio).getDay()===6;return o.jsxs("ul",{className:"grid gap-2 border-t border-b border-slate-500 py-4",children:[o.jsx("li",{className:"text-color-violeta text-xl text-center mb-4",children:"Resumen de la reserva"}),e.nombre&&o.jsxs("li",{className:"capitalize grid gap-2 bg-color-verde-blanco p-4 rounded-lg text-color-violeta",children:["Nombre ",o.jsx("strong",{className:"text-end",children:e.nombre})]}),e.horaInicio&&!n&&o.jsxs("li",{className:"capitalize grid gap-2 bg-color-verde-blanco p-4 rounded-lg text-color-violeta",children:["Dia"," ",o.jsx("strong",{className:"text-end",children:_(new Date(`${e.horaInicio} 00:00:00`))})]}),e.hora&&o.jsxs("li",{className:"grid gap-2 bg-color-verde-blanco p-4 rounded-lg text-color-violeta",children:["Hora ",o.jsx("strong",{className:"text-end",children:e.hora})]}),e.observaciones&&o.jsxs("li",{className:"grid  gap-2 bg-color-verde-blanco p-4 rounded-lg text-color-violeta",children:["Observaciones",o.jsx("strong",{className:"text-end",children:e.observaciones})]}),e.servicio&&o.jsxs("li",{className:"grid gap-2 bg-color-verde-blanco p-4 rounded-lg text-color-violeta",children:["Servicio",o.jsx("strong",{className:"capitalize text-end",children:e.servicio})]}),e.tratamiento&&o.jsxs("li",{className:"grid gap-2 bg-color-verde-blanco p-4 rounded-lg text-color-violeta ",children:["Tratamiento",o.jsx("strong",{className:"text-end",children:e.tratamiento})]})]})},W=({horasDisponibles:e,values:n,reservasDelDia:i,handleChange:a,setMensaje:d,errors:m})=>{const l=t=>{const c=t.target.textContent,s=G(new Date(`${n.horaInicio} ${c}`),i);if(s.estado&&s.estado!==x.cancelada||s.proximaHoraNoDisponible){d("Hora no disponible para hacer una reserva");return}else a({target:{name:"hora",value:c}})};return o.jsxs(o.Fragment,{children:[o.jsxs("ul",{className:"grid gap-4 grid-cols-5",children:[o.jsx("li",{className:"col-span-full",children:"Hora"}),e.map(t=>o.jsx("li",{className:`${t.estado} p-2 rounded-xl w-full grid place-content-center shadow-md max-w-20 transition-[max-width] ${X(t,n)} `,onClick:l,children:t.id.split("T")[1]},t.id))]}),m.hora&&o.jsxs("small",{className:"text-red-600",children:["* ",m.hora]}),o.jsxs("ul",{className:"grid grid-flow-col grid-rows-3 gap-4 border border-slate-500 p-4 rounded-lg",children:[o.jsx("li",{className:"col-span-full opacity-50 p-2 rounded-xl w-full grid place-content-center shadow-md m-auto",children:"No disponible"}),o.jsx("li",{className:"p-2 rounded-xl w-full grid place-content-center shadow-md m-auto  bg-slate-50",children:"Disponible"}),o.jsx("li",{className:`${x.pago} text-white p-2 rounded-xl w-full grid place-content-center shadow-md m-auto  bg-slate-50`,children:"Paga"}),o.jsx("li",{className:`${x.pendiente} text-white p-2 rounded-xl w-full grid place-content-center shadow-md m-auto  bg-slate-50`,children:"Pendiente"}),o.jsx("li",{className:`${x.cancelada} text-white p-2 rounded-xl w-full grid place-content-center shadow-md m-auto  bg-slate-50`,children:"Cancelada"})]})]})},X=(e,n)=>{const i=e.proximaHoraNoDisponible,a=e.estado,d=e.id.split("T")[1]===n.hora,m=a&&a===x.cancelada,l=a&&(a===x.pago||a===x.pendiente);return[!i&&!d&&!l&&"bg-slate-50 cursor-pointer",l&&"cursor-not-allowed text-white",m&&"text-white",i&&!l&&"opacity-50 cursor-not-allowed",d&&"bg-color-violeta col-span-full row-start-2 text-white max-w-xl font-bold opacity-100 cursor-default"].filter(Boolean).join(" ")},Y=e=>({pacienteNombre:e.nombre,fecha:new Date(`${e.horaInicio} ${e.hora}`),observaciones:e.observaciones,servicio:e.servicio,tratamiento:e.tratamiento,estado:e.estado||""}),Z={nombre:{required:!0},horaInicio:{required:!0},servicio:{required:!0},tratamiento:{required:!0},hora:{required:!0}},ee=(e,n,i)=>{var d,m,l,t,c;return{nombre:((d=e==null?void 0:e.paciente)==null?void 0:d.nombre)||"",horaInicio:((m=e==null?void 0:e.horario)==null?void 0:m.horaInicio.split("T")[0])||"",hora:(n||i)&&M((l=e==null?void 0:e.horario)==null?void 0:l.horaInicio)||"",observaciones:(e==null?void 0:e.observaciones)||"",servicio:((t=e==null?void 0:e.servicio)==null?void 0:t.nombre)||"",tratamiento:((c=e==null?void 0:e.tratamiento)==null?void 0:c.descripcion)||"",estado:(e==null?void 0:e.estado)||""}},ue=()=>{var j,w;const e=$(),n=L(),i=(j=e.state)==null?void 0:j.reserva,{setMensaje:a}=k(),{reserva:d,dispatch:m}=B(),{loading:l}=K(),t=e.pathname===D.admin.agregarReserva&&((w=e.state)==null?void 0:w.from)===D.admin.calendario,c=i.estado,{handleChange:s,values:r,errors:h,validateForm:F,resetForm:R}=O(ee(d||i,c,t),Z),{horasDisponibles:b,reservasDelDia:I,agregarReserva:T,editarReserva:y,pacientesNombres:A}=U(r.horaInicio),f=new Date(r.horaInicio).getDay()===6,E=p=>{s({target:{name:"hora",value:""}}),s(p)},v=async p=>{if(p.preventDefault(),F()&&!f){const g=Y(r);(c?await y(g,i._id):await T(g))?N():a("Ocurrió un guardar la reserva.")}else a("Faltan campos requeridos.")},N=()=>{R(),m({type:q.SET_RESERVA,payload:null}),n(-1)},H=p=>{const g={target:{name:"nombre",value:p.target.textContent}};s(g)},V=p=>p.map(u=>u.nombre);return o.jsxs("section",{className:"grid px-4 py-8",children:[o.jsxs("h1",{className:"font-betonga font-bold text-color-violeta text-2xl tracking-wider text-center mb-4",children:[c?"Editar":"Crear"," Reserva"]}),o.jsxs("form",{className:"animate-fadeIn bg-color-logo rounded-lg p-4 max-w-xl m-auto w-full grid gap-4 border border-black",onSubmit:v,children:[!c&&o.jsx(J,{name:"Pacientes existentes",onClickFunction:H,list:V(A)}),o.jsx(S,{placeholder:"Nombre",value:r.nombre,labelText:"Nombre",name:"nombre",type:"text",errors:h,onChange:s}),o.jsx(S,{className:"w-full",value:r.horaInicio.split("T")[0],labelText:"Fecha",name:"horaInicio",type:"date",errors:h,onChange:E}),f?o.jsx("span",{className:"p-2 rounded-xl w-full text-center shadow-md bg-color-violeta text-slate-50",children:"* Los días domingos no se realizan reservas"}):null,b.length>0&&r.horaInicio&&o.jsx(o.Fragment,{children:o.jsx(W,{horasDisponibles:b,values:r,setMensaje:a,handleChange:s,reservasDelDia:I,errors:h})}),o.jsx("label",{children:"Servicio y Tratamiento"}),o.jsx(z,{values:r,handleChange:s,errors:h}),o.jsx(P,{value:r.observaciones,onChange:s,name:"observaciones",labelText:r.nombre==="admin"?"Compromisos separados por comas":"Observaciones"}),o.jsx(Q,{values:r}),o.jsxs("footer",{className:"grid grid-flow-col gap-4",children:[o.jsx(C,{bgColor:!0,className:"w-full",tipo:"submit",texto:"Guardar",disabled:l}),o.jsx(C,{className:"w-full",tipo:"button",onClickFunction:N,texto:"Cerrar"})]})]})]})};export{ue as default};