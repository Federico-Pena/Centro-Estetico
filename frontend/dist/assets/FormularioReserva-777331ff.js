import{j as g,r as F}from"./index-9b0ccc10.js";import{E as r,D as y,c as O,d as R,e as _,g as I,I as H}from"./apiConfig-6444a406.js";const T=e=>e.toLocaleTimeString("es-UY",{hour12:!1,timeZone:"America/Montevideo"}).split(":",2).join(":"),$=e=>e.reduce((a,t)=>{switch(t.estado){case r.pago:a.paga=t;break;case r.pendiente:a.pendiente=t;break;case r.cancelada:a.cancelada=t;break}return a},{paga:null,pendiente:null,cancelada:null}),C=(e,a)=>{if(!(e instanceof Date)||!Array.isArray(a))return{};const t=new Date(e);t.setMinutes(t.getMinutes()+30);const i=T(t),u=e.toISOString().split("T")[0],o=new Intl.DateTimeFormat("es-UY",{hour12:!1,timeZone:"America/Montevideo",hour:"numeric",minute:"numeric",second:"numeric"}).format(e).split(":",2).join(":"),s=`${u} ${o}`,c=a.filter(n=>{var S;const h=(S=n.fecha)==null?void 0:S.split("T")[0],N=`${h} ${n.hora}`,E=`${h} ${n.horaFin}`;return s===N||s===E}),m=c.some(n=>n.pacienteNombre==="admin"),d=c.filter(n=>(n.hora===o||n.horaFin===o)&&(n.estado===r.pendiente||n.estado===r.cancelada||n.estado===r.pago)),f=c.find(n=>(n.hora===i||n.horaFin===i)&&(n.estado===r.pago||n.estado===r.pendiente)),{paga:D,pendiente:A,cancelada:l}=$(c),p=D||A||l||"";return!p&&f?{id:s}:{id:s,estado:p.estado,paga:D,pendiente:A,cancelada:l,reservaAdmin:m,reservadas:d,siguienteHoraNoDisponible:f}},x=({className:e})=>g.jsx("span",{className:`loaderChico ${e||""}`});const M=(e,a)=>e===0||e===1?!1:!(a.paga||a.pendiente||a.cancelada),U=(e,a)=>e===0||e===1?`paraReservaAdmin ${a.estado||""}`:a.estado?a.reservaAdmin?`paraReservaAdmin ${a.paga?r.pago:a.pendiente?r.pendiente:a.cancelada?r.cancelada:""}`:a.estado:"",L=({horas:e,onClickReservar:a,publico:t})=>{const[i,u]=F.useState("");return e.length>0&&g.jsx("ul",{className:"horasDisplay",children:e.map((o,s)=>{var m;const c=(m=o.id)==null?void 0:m.split(" ")[1];return t?M(s,o)&&g.jsx("li",{className:`liHora ${c===i?"horaSeleccionada":""}`,onClick:d=>{u(d.target.textContent),a(d)},children:c},o.id||s):g.jsx("li",{className:`
						liHora ${U(s,o)}`,onClick:d=>{u(d.target.textContent),a(d)},children:c},o.id||s)})})},k=e=>{const a=new Date(e.fecha);a.setUTCHours(a.getUTCHours()+3);const t={year:"numeric",month:"short",day:"numeric",weekday:"short"},i=a.toLocaleDateString("es-UY",t);return a instanceof Date&&i!=="Invalid Date"?i:e.fecha},V=(e,a)=>{const t=new Date(e);return Number.isNaN(t.getTime())?[]:(t.setDate(t.getDate()-t.getDay()),[...Array(y)].map((u,o)=>{const s=new Date(t);s.setDate(t.getDate()+o+1);const c=6,m=s.getDay()===c?O:R,d=Array.from({length:m-_+1},(l,p)=>p+_),f=Array.from({length:I/H},(l,p)=>p*H),D=d.flatMap(l=>f.map(p=>{if(j(l,p,s)){const n=new Date(s);return n.setHours(l,p,0),n}return null})).filter(Boolean),A=D.map(l=>C(l,a));return{dia:s,horas:D,horaID:A}}))},j=(e,a,t)=>!(e===20&&a===30)&&!(t.getDay()===6&&e===12&&a===30)&&t.getDay()!==0;export{L as H,x as L,T as a,C as c,V as d,k as f};
