import{j as S,r as T}from"./index-f53c4d7f.js";const I=a=>{const e=a.getTimezoneOffset()*6e4;return new Date(Date.now()-e).toISOString()},F=7,H=8,R=20,U=12,_=30,b=60,N=new Date,P=`${I(N).split("T")[0]}T${N.toLocaleTimeString().split("",5).join("")}`,r={pago:"Pago",pendiente:"Pendiente",cancelada:"Cancelada"},y=a=>a.toLocaleTimeString("es-UY",{hour12:!1,timeZone:"America/Montevideo"}).split(":",2).join(":"),v=a=>a.reduce((e,t)=>{switch(t.estado){case r.pago:e.paga=t;break;case r.pendiente:e.pendiente=t;break;case r.cancelada:e.cancelada=t;break}return e},{paga:null,pendiente:null,cancelada:null}),C=(a,e)=>{if(!(a instanceof Date)||!Array.isArray(e))return{};const t=new Date(a);t.setMinutes(t.getMinutes()+30);const d=y(t),D=a.toISOString().split("T")[0],i=new Intl.DateTimeFormat("es-UY",{hour12:!1,timeZone:"America/Montevideo",hour:"numeric",minute:"numeric",second:"numeric"}).format(a).split(":",2).join(":"),o=`${D} ${i}`,c=e.filter(n=>{var A;const $=(A=n.fecha)==null?void 0:A.split("T")[0],E=`${$} ${n.hora}`,O=`${$} ${n.horaFin}`;return o===E||o===O}),u=c.some(n=>n.pacienteNombre==="admin"),l=c.filter(n=>(n.hora===i||n.horaFin===i)&&(n.estado===r.pendiente||n.estado===r.cancelada||n.estado===r.pago)),f=c.find(n=>(n.hora===d||n.horaFin===d)&&(n.estado===r.pago||n.estado===r.pendiente)),{paga:g,pendiente:h,cancelada:p}=v(c),m=g||h||p||"";return!m&&f?{id:o}:{id:o,estado:m.estado,paga:g,pendiente:h,cancelada:p,reservaAdmin:u,reservadas:l,siguienteHoraNoDisponible:f}},x=({className:a})=>S.jsx("span",{className:`loaderChico ${a||""}`}),s="https://centro-estetico.vercel.app",k={paciente:{agregarPaciente:`${s}/api/pacientes/agregar`,editarPaciente:`${s}/api/pacientes/editar/`,eliminarPaciente:`${s}/api/pacientes/eliminar/`,nombres:`${s}/api/pacientes/nombres`,porId:`${s}/api/pacientes/id/`,todos:`${s}/api/pacientes/todos`},reservas:{deUnDia:`${s}/api/reservas/DeUnDia/`,deLaSemana:`${s}/api/reservas/semanaDel/`,deUnPaciente:`${s}/api/reservas/usuario/`,agregar:`${s}/api/reservas/agregar`,editar:`${s}/api/reservas/editar/`,editarEstado:`${s}/api/reservas/estado/`,eliminar:`${s}/api/reservas/`,dias:`${s}/api/reservas/dias/`},publicas:{fechasHorasReservadasDeUndia:`${s}/api/reservas/dia/horas/`,fechasHorasReservadasDeLaSemana:`${s}/api/publica/reservas/semana/`}};const w=(a,e)=>a===0||a===1?!1:!(e.paga||e.pendiente||e.cancelada),M=(a,e)=>a===0||a===1?`paraReservaAdmin ${e.estado||""}`:e.estado?e.reservaAdmin?`paraReservaAdmin ${e.paga?r.pago:e.pendiente?r.pendiente:e.cancelada?r.cancelada:""}`:e.estado:"",V=({horas:a,onClickReservar:e,publico:t})=>{const[d,D]=T.useState("");return a.length>0&&S.jsx("ul",{className:"horasDisplay",children:a.map((i,o)=>{var u;const c=(u=i.id)==null?void 0:u.split(" ")[1];return t?w(o,i)&&S.jsx("li",{className:`liHora ${c===d?"horaSeleccionada":""}`,onClick:l=>{D(l.target.textContent),e(l)},children:c},i.id||o):S.jsx("li",{className:`
						liHora ${M(o,i)}`,onClick:l=>{D(l.target.textContent),e(l)},children:c},i.id||o)})})},Y=a=>{const e=new Date(a.fecha);e.setUTCHours(e.getUTCHours()+3);const t={year:"numeric",month:"short",day:"numeric",weekday:"short"},d=e.toLocaleDateString("es-UY",t);return e instanceof Date&&d!=="Invalid Date"?d:a.fecha},Z=(a,e)=>{const t=new Date(a);return Number.isNaN(t.getTime())?[]:(t.setDate(t.getDate()-t.getDay()),[...Array(F)].map((D,i)=>{const o=new Date(t);o.setDate(t.getDate()+i+1);const c=6,u=o.getDay()===c?U:R,l=Array.from({length:u-H+1},(p,m)=>m+H),f=Array.from({length:b/_},(p,m)=>m*_),g=l.flatMap(p=>f.map(m=>{if(j(p,m,o)){const n=new Date(o);return n.setHours(p,m,0),n}return null})).filter(Boolean),h=g.map(p=>C(p,e));return{dia:o,horas:g,horaID:h}}))},j=(a,e,t)=>!(a===20&&e===30)&&!(t.getDay()===6&&a===12&&e===30)&&t.getDay()!==0;export{F as D,r as E,P as H,x as L,N as a,k as b,C as c,Z as d,V as e,Y as f,I as g,y as h};
