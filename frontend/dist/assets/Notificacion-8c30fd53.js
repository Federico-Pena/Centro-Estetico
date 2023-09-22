import{r as s,M as K,U as O,j as e,B as D}from"./index-fdcc6e29.js";import{E as A,h as Y,b as P,f as B,H as W,d as Z,e as ee,L as ae,a as se}from"./FormularioReserva-f9543957.js";import{B as te}from"./BotonPrimario-9d05fdba.js";const ne=(a,t,o)=>{if(a.target.className.includes(A.pendiente)||a.target.className.includes(A.pago))return!1;const c=a.target.textContent,n=t+" "+c,l=new Date(n);l.setMinutes(l.getMinutes()+30);const r=Y(l);return!o.filter(p=>p.fecha===new Date(t).toISOString()&&(p.hora.includes(r)||p.horaFin.includes(r))).find(p=>p.estado===A.pago||p.estado===A.pendiente)};function G(a,t){if(a&&t){const o=a.fecha.split("T")[0],c=t.fecha.split("T")[0],n=new Date(`${o}T${a.hora}`),l=new Date(`${c}T${t.hora}`);return n>l?-1:n<l?1:0}}const oe=a=>{const[t,o]=s.useState([]),[c,n]=s.useState(null),[l,r]=s.useState(!1),[h,i]=s.useState([]),[p,g]=s.useState(1),[w,b]=s.useState(0),[T,C]=s.useState(1),{setMensaje:S}=s.useContext(K),{accessToken:E}=s.useContext(O);s.useEffect(()=>{p&&(async()=>{r(!0);const u={headers:{"Content-Type":"application/json",Authorization:`Bearer ${E||""}`}},f=`${P.paciente.nombres}/${p}`,j=await fetch(f,u),{pacientes:x,page:_,totalPages:z,totalPacientes:I}=await j.json();b(I),C(z),g(_),x.length?i(x.sort((V,v)=>V.nombre.toLowerCase()<v.nombre.toLowerCase()?-1:1)):i([]),r(!1)})()},[E,p]),s.useEffect(()=>{const d={headers:{"Content-Type":"application/json",Authorization:`Bearer ${E||""}`}};a&&(async()=>{r(!0);const f=`${P.reservas.deUnPaciente}${a}`;try{const j=await fetch(f,d);if(j.ok){const x=await j.json();o(x.sort(G))}}catch(j){console.log(j)}r(!1)})()},[E,a]);const M={headers:{"Content-Type":"application/json",Authorization:`Bearer ${E||""}`}};return{setPaciente:n,agregarPaciente:d=>{if(d.error){S(d.mensaje);return}d.totalReservas=0,i([...h,d].sort((f,j)=>f.nombre.toLowerCase()<j.nombre.toLowerCase()?-1:1)),b(f=>f+1);const u=`Paciente nuevo ${d.nombre}.`;S(u)},getPaciente:async d=>{if(n(null),r(!0),d){const u=h.find(_=>_.nombre===d),f=`${P.paciente.porId}${u._id}`,x=await(await fetch(f,M)).json();n(x)}else n(null);r(!1)},eliminarPaciente:d=>{const{mensaje:u,userExistente:f}=d;S(u),console.log(d);const j=h.filter(x=>x._id!==f._id).sort((x,_)=>x.nombre.toLowerCase()<_.nombre.toLowerCase()?-1:1);i(j)},actualizarReservaPaciente:d=>{const{reserva:u}=d,f=`Reserva nueva de ${u.pacienteNombre}. El dia ${B({fecha:u.fecha.split("T")[0]})} a las ${u.hora}`,j=t.filter(x=>x._id!==u._id);S(f),o(j.concat(u).sort(G))},eliminarReservaPaciente:d=>{const{reserva:u}=d,f=t.filter(x=>x._id!==u._id),j=`Reserva eliminada de ${u.pacienteNombre}. El dia ${B({fecha:u.fecha.split("T")[0]})} a las ${u.hora}`;S(j),o(f.sort(G))},reservasPaciente:t,nombres:h,paciente:c,loading:l,setNombres:i,editarPaciente:d=>{const u={_id:d._id,nombre:d.nombre,foto:{secure_url:d.foto.secure_url},totalReservas:0},f=h.filter(x=>x._id!==d._id);console.log(d),console.log(f),i([...f,u]);const j=`Paciente nuevo ${d.nombre}.`;S(j),n(null)},setReservasPaciente:o,pagina:p,setPagina:g,totalPaginas:T,totalPacientes:w}},L=async(a,t,o)=>{try{const n=await(await fetch(a,t)).json();return o(n),n}catch(c){return o(c),c}};const U=({from:a,to:t,duration:o=1e3})=>{const[c,n]=s.useState(a),l=s.useRef(t);return s.useEffect(()=>{let r,h;const i=l.current,p=g=>{r||(r=g);const w=g-r,b=Math.min(1,w/o),T=Math.floor(i+(t-i)*b);n(T),b<1&&(h=requestAnimationFrame(p))};return t!==i&&(l.current=t,r=null,h=requestAnimationFrame(p)),()=>cancelAnimationFrame(h)},[a,t,o]),e.jsx("span",{children:c})},re=({nombres:a,onChangeNombre:t,pagina:o,totalPaginas:c,setPagina:n,totalPacientes:l})=>e.jsxs("div",{className:"selectNombre-container",children:[e.jsxs("div",{className:"encabezado",children:[e.jsxs("strong",{children:["Pacientes:"," ",e.jsx(U,{from:0,to:l,duration:2e3})]}),e.jsxs("strong",{children:["Páginas:"," ",e.jsx(U,{from:0,to:c,duration:1e3})]}),e.jsxs("strong",{children:["Página actual:"," ",e.jsx(U,{from:1,to:o,duration:200})]})]}),e.jsxs("div",{className:"pagination-buttons",children:[e.jsx(D,{tipo:"button",className:"pagination-buttons-Anterior",texto:"Anterior",onClickFunction:()=>o>1&&n(o-1)}),e.jsx(D,{tipo:"button",className:"pagination-buttons-Siguiente",onClickFunction:()=>o!==c&&n(o+1),texto:"Siguiente"})]}),a.length>0&&a.map((r,h)=>e.jsxs("div",{className:r.nombre==="admin"||r.pacienteNombre==="admin"?"selectNombre-option admin":"selectNombre-option",onClick:()=>t(r.nombre||r.pacienteNombre),children:[e.jsx("img",{src:r.foto.secure_url,alt:r.nombre||r.pacienteNombre,className:"imagen"}),e.jsx("span",{className:"nombre",children:r.nombre||r.pacienteNombre}),e.jsxs("span",{className:"numero",children:["Numero de reservas: ",r.totalReservas]})]},h))]}),ie=re,ce=({reserva:a,setForm:t,editar:o,actualizarReserva:c})=>{const[n,l]=s.useState(a.fecha||W.split("T")[0]),[r,h]=s.useState([]),[i,p]=s.useState(a.motivo),[g,w]=s.useState(a.observaciones),[b,T]=s.useState(a.hora||""),[C,S]=s.useState(a.pacienteNombre),[E,M]=s.useState(!1),[N,H]=s.useState([]),F=s.useRef(),{setMensaje:y}=s.useContext(K),{accessToken:k}=s.useContext(O),{nombres:Q,pagina:d,setPagina:u,totalPacientes:f,totalPaginas:j}=oe(),x=()=>{F.current.parentElement.classList.add("animationOut"),setTimeout(()=>{t()},300)};s.useEffect(()=>{F.current.scrollIntoView({behavior:"smooth",block:"start"}),n&&(async()=>{const m=await fetch(`${P.reservas.deUnDia}${n}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${k||""}`}}),{data:$}=await m.json();h($)})()},[n,k,a]),s.useEffect(()=>{const m=Z(n,r).find($=>$.dia.getDay()===new Date(`${n} ${b}`).getDay());H(m==null?void 0:m.horaID)},[n,r,b]);const _=v=>{T(v.target.textContent),ne(v,n,r)||(y("Hora no disponible para hacer una reserva"),T(""))},z=async v=>{v.preventDefault(),M(!0);const m=F.current,$=new Date(`${m.fecha.value.split("T")[0]} ${b}`);$.setMinutes($.getMinutes()+30);const R={pacienteNombre:m.pacienteNombre.value,fecha:m.fecha.value,hora:b,horaFin:Y($),motivo:m.motivo?m.motivo.value:void 0,observaciones:m.observaciones.value};if(R.pacienteNombre.trim()&&R.hora&&R.fecha){const q={method:"POST",body:JSON.stringify(R),headers:{"Content-Type":"application/json",authorization:`Bearer ${k}`}};await L(`${P.reservas.agregar}`,q,c),m.classList.add("formOut"),t()}else y("Faltan campos");M(!1)},I=async v=>{v.preventDefault(),M(!0);const m=F.current,$=new Date(`${m.fecha.value.split("T")[0]} ${b}`);$.setMinutes($.getMinutes()+30);const R={_id:a._id,pacienteNombre:m.pacienteNombre.value,fecha:m.fecha.value,hora:b,horaFin:Y($),motivo:m.motivo?m.motivo.value:void 0,observaciones:m.observaciones.value};if(R.pacienteNombre.trim()&&R.hora&&R.fecha){const q=`${P.reservas.editar}${R._id}`,X={method:"PUT",body:JSON.stringify(R),headers:{"Content-Type":"application/json",authorization:`Bearer ${k}`}};await L(q,X,c),t()}else y("Faltan campos");M(!1)},V=v=>{S(v)};return e.jsxs("section",{className:"formReservaContainer",children:[e.jsx(D,{className:"cerrarForm",texto:"Cerrar Formulario",onClickFunction:x,tipo:"button"}),e.jsxs("form",{onSubmit:o?I:z,className:"formReserva",ref:F,children:[e.jsx("h3",{children:"Reserva"}),!C=="admin"||!a.pacienteNombre&&e.jsx(ie,{totalPacientes:f,totalPaginas:j,nombres:Q,pagina:d,setPagina:u,onChangeNombre:V}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"pacienteNombre",children:"Nombre"}),e.jsx("input",{id:"pacienteNombre",type:"text",name:"pacienteNombre",defaultValue:C,disabled:!!C,required:!0})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"fecha",children:"Fecha"}),e.jsx("input",{id:"fecha",type:"date",name:"fecha",required:!0,disabled:!(C==="admin"||a.pacienteNombre),defaultValue:a.fecha||W.split("T")[0],onChange:v=>{const m=v.target.value.split("T")[0];l(m)}})]}),(N==null?void 0:N.length)>0&&e.jsx("div",{className:"input",children:e.jsx(ee,{horas:N,onClickReservar:_})}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"observaciones",children:C==="admin"?"Tareas. Separadas por comas":"Observaciones"}),e.jsx("input",{defaultValue:a.observaciones,id:"observaciones",type:"text",name:"observaciones",onChange:v=>w(v.target.value)})]}),C==="admin"?null:e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"motivo",children:"Motivo"}),e.jsxs("select",{name:"motivo",onChange:v=>p(v.target.value),children:[e.jsx("option",{defaultValue:a.motivo,children:a.motivo?a.motivo:""}),e.jsx("option",{value:"Drenaje Linfático",children:"Drenaje Linfático"}),e.jsx("option",{value:"Masaje Estético",children:"Masaje Estético"}),e.jsx("option",{value:"Exfoliación Corporal",children:"Exfoliación Corporal"}),e.jsx("option",{value:"Masaje Cérvico-Craneal",children:"Masaje Cérvico-Craneal"}),e.jsx("option",{value:"Masaje Con Piedras Calientes",children:"Masaje Con Piedras Calientes"}),e.jsx("option",{value:"Masaje Descontracturante",children:"Masaje Descontracturante"}),e.jsx("option",{value:"Masaje Relajante",children:"Masaje Relajante"}),e.jsx("option",{value:"Masaje Prenatal",children:"Masaje Prenatal"}),e.jsx("option",{value:"Barras De access",children:"Barras De Access"})]})]}),e.jsxs("div",{className:"input",children:[C&&e.jsxs("span",{className:"spanHora",children:["Nombre ",e.jsx("strong",{children:C})]}),n&&e.jsxs("span",{className:"spanHora",children:["Dia ",e.jsx("strong",{children:B({fecha:n})})]}),b&&e.jsxs("span",{className:"spanHora",children:["Hora ",e.jsx("strong",{children:b})]}),g&&e.jsxs("span",{className:"spanHora",children:["Observaciones",e.jsx("strong",{children:g})]}),i&&e.jsxs("span",{className:"spanHora",children:["Motivo ",e.jsx("strong",{children:i})]})]}),e.jsx(te,{tipo:"submit",className:"submitAdmin",texto:E?e.jsx(ae,{}):"Guardar"})]})]})};const le=({titulo:a,mensaje:t,onConfirm:o,onCancel:c})=>{const n=s.useRef();return s.useEffect(()=>{n.current.scrollIntoView({behavior:"smooth",block:"center"})},[]),e.jsx("div",{className:"modal",children:e.jsxs("div",{className:"modal-content",ref:n,children:[e.jsx("h3",{children:a}),e.jsx("p",{children:t}),e.jsxs("div",{children:[e.jsx("button",{onClick:o,children:"Confirmar"}),e.jsx("button",{onClick:c,children:"Cancelar"})]})]})})},J=[A.pendiente,A.cancelada,A.pago];function de(a){const t=J.indexOf(a);if(t!==-1){const o=(t+1)%J.length;return J[o]}else return}const ue=({actualizarReservaEliminada:a,actualizarReserva:t,reserva:o,cerrarReserva:c})=>{const[n,l]=s.useState(!1),[r,h]=s.useState(!1),[i,p]=s.useState(o),g=s.useRef(),{accessToken:w}=s.useContext(O),{setMensaje:b}=s.useContext(K),T=async()=>{const N=`${P.reservas.eliminar}${i._id}`,H={method:"DELETE",headers:{authorization:`Bearer ${w}`}};await L(N,H,a),l(!1)},C=()=>{l(!1)},S=async()=>{const N=de(i.estado),H=`${P.reservas.editarEstado}${i._id}`,F={method:"PUT",headers:{"content-type":"application/json",authorization:`Bearer ${w}`},body:JSON.stringify({estado:N})};await L(H,F,y=>{t(y),p(y.reserva),b(y.mensaje)})},E=()=>{c(g)},M=()=>{h(!0)};return r?e.jsx(ce,{editar:!0,reserva:{...i,fecha:i.fecha.split("T")[0],nombre:i.pacienteNombre},actualizarReserva:N=>{p(N.reserva),t(N)},setForm:()=>{h(!1)}}):n?e.jsx("article",{className:"containerReserva",ref:g,children:e.jsx(le,{titulo:"Borrar Reserva",mensaje:`¿Estás seguro de que deseas borrar la reserva de ${i.pacienteNombre} el dia ${B(i)} a las ${i.hora}?`,onConfirm:T,onCancel:C})}):e.jsxs("article",{className:"containerReserva",ref:g,children:[e.jsx("div",{className:`reserva-container-titulo  ${i.estado}`,children:e.jsx("h3",{children:"Detalles de la reserva"})}),e.jsxs("div",{className:`reserva-container-cuerpo  ${i.estado}`,children:[e.jsxs("ul",{children:[e.jsxs("li",{children:["Paciente: ",e.jsx("strong",{children:i.pacienteNombre})]}),e.jsxs("li",{children:["Fecha:",e.jsx("strong",{children:B(i)})]}),e.jsxs("li",{children:["Hora: ",e.jsx("strong",{children:i.hora})]}),i.pacienteNombre!=="admin"&&e.jsxs(e.Fragment,{children:[e.jsxs("li",{children:["Motivo: ",e.jsx("strong",{children:i.motivo})]}),e.jsxs("li",{children:["Observaciones: ",e.jsx("strong",{children:i.observaciones})]}),e.jsxs("li",{children:["Estado:",e.jsx("strong",{className:"strongEstado",children:i.estado})]})]})]}),i.pacienteNombre==="admin"&&e.jsxs("ul",{className:"tareasAdmin",children:[e.jsx("li",{children:"Lista:"}),i.observaciones.split(",").map(N=>e.jsx("li",{className:"liTarea",children:e.jsx("span",{children:N})},N)),e.jsxs("li",{children:["Estado:",e.jsx("strong",{className:"strongEstado",children:i.estado})]})]})]}),e.jsxs("div",{className:"reserva-container-botones",children:[e.jsx(D,{texto:"Editar",className:"btnEditar",onClickFunction:M}),e.jsx(D,{texto:"Cambiar Estado",className:`btnCompletada ${i.estado}`,onClickFunction:S})]}),c?e.jsxs("div",{className:"reserva-container-botones",children:[e.jsx(D,{texto:"Cerrar",className:"btnCerrarReserva",onClickFunction:E,tipo:"button"}),e.jsx(D,{texto:"Eliminar",className:"btnCerrar Cancelada",onClickFunction:()=>l(!0)})]}):e.jsx("div",{className:"reserva-container-botones",children:e.jsx(D,{texto:"Eliminar",className:"btnCerrar",onClickFunction:()=>l(!0)})})]})};const je=({reservas:a,actualizarReservas:t,actualizarReservaEliminada:o,cerrarReserva:c,className:n})=>e.jsx("section",{className:`ContenedorReservas ${n}`,children:(a==null?void 0:a.length)>0&&a.map(l=>e.jsx(ue,{cerrarReserva:c,actualizarReservaEliminada:o,actualizarReserva:t,reserva:l},l._id))}),me=()=>{const[a,t]=s.useState([]),{accessToken:o}=s.useContext(O);return s.useEffect(()=>{o&&(async()=>{let n=se.toISOString().split("T")[0];const l={headers:{"Content-Type":"application/json",Authorization:`Bearer ${o||""}`}};try{const r=`${P.publicas.fechasHorasReservadasDeLaSemana}${n}`;await L(r,l,h=>{t(h.reservas)})}catch(r){console.log(r)}})()},[o]),{reservasSemanales:a}},xe=()=>{const{isAllowedAccess:a}=s.useContext(O),{reservasSemanales:t}=me();return s.useEffect(()=>{"Notification"in window&&a&&t.forEach(o=>{const c=new Date(`${o.fecha.split("T")[0]} ${o.hora}`),l=(c-new Date)/(24*60*60*1e3),r={body:"Mensaje de Prueba",icon:"/assets/icons/icon-192.png",vibrate:[200,100,200],tag:"notificacion"};l===1&&setTimeout(()=>{new Notification("Recordatorio",r).addEventListener("click",()=>{window.location.href="https://www.masajistanataliapena.com/#/calendario"})},c-new Date)})},[a]),null};export{je as C,ce as F,xe as N,ie as S,U as T,le as a,ne as c,L as f,G as o,oe as u};
