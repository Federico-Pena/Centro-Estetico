import{r as i,M as G,j as s,a as I,B as m}from"./index-9b0ccc10.js";import{f as u,L as A,c as M}from"./FormularioReserva-777331ff.js";import{N as U,C as P,F as Y,c as w,o as j}from"./Notificacion-0ca63e8a.js";import{H as V,a as H,E as v}from"./apiConfig-6444a406.js";import{u as q,C as J}from"./ContadorReservas-9a485b0d.js";import"./TransitionNumber-9cc045e6.js";import"./BotonPrimario-010807d4.js";function re(){const[f,b]=i.useState(""),[E,$]=i.useState(""),[D,p]=i.useState(!1),[T,x]=i.useState(""),[o,t]=i.useState([]),{setMensaje:h}=i.useContext(G),{loadingSemana:R,diasSemana:_,reservasSemanales:n,loading:B,semanaAnterior:g,semanaSiguiente:N,setReservasSemanales:C}=q(!0,f),S=a=>{const{reserva:e}=a,r=`Reserva nueva de ${e.pacienteNombre} el dia ${u({fecha:e.fecha})} a las ${e.hora}`;h(r);const c=n.filter(l=>l._id!==e._id);C([...c,e])},O=a=>{t([]),x("");const e=a.target;e.className.includes("paraReservaAdmin")&&x("admin");const r=e.id,[c,l]=r.split(" "),d=M(new Date(r),n),F=w(a,r.split(" ")[0],n);if(console.log(F),e.className.includes(v.cancelada)){t(d.reservadas),p(!0);return}if(console.log(d),F===!1){t(d.reservadas),d.reservadas.length===0&&h("Hora no disponible para hacer reserva");return}else p(!0),b(c),$(l)},k=a=>{a.current.parentElement.classList.add("animationReservaOut"),setTimeout(()=>{a.current.parentElement.remove("animationReservaOut"),t([])},500)},y=(a,e)=>a===0||a===1?`paraReservaAdmin ${e.estado||""}`:e.estado?e.reservaAdmin?`paraReservaAdmin ${e.paga?v.pago:e.pendiente?v.pendiente:e.cancelada?v.cancelada:""}`:e.estado:"",z=a=>{const{reserva:e}=a,r=`Reserva borrada de ${e.pacienteNombre} el dia ${u({fecha:e.fecha})} a las ${e.hora}`;h(r);const c=n.filter(l=>l._id!==e._id);C(c.sort(j)),t([])},L=a=>{if(a==="Toda")t(n.sort(j));else{const e=n.filter(r=>r.estado===a);t(e.sort(j))}};return s.jsxs(s.Fragment,{children:[s.jsx(U,{}),B&&s.jsx(I,{}),(o==null?void 0:o.length)>0?s.jsx("div",{className:o.length?"divReservaCalendario":"",children:s.jsx(P,{cerrarReserva:k,reservas:o,actualizarReservaEliminada:z,actualizarReservas:a=>{S(a)}})}):null,D&&!o.length&&s.jsx(Y,{reserva:{pacienteNombre:T,fecha:f,hora:E},actualizarReserva:a=>{S(a)},setForm:()=>{p(!1)}}),s.jsx("main",{className:"containerCalendario",children:s.jsxs(s.Fragment,{children:[s.jsx(J,{reservas:n,mostrarReservadas:L}),s.jsxs("h1",{children:["Hoy ",u({fecha:V.split("T")[0]})]}),s.jsxs("div",{className:"containerBotones",children:[s.jsx(m,{onClickFunction:g,texto:"Anterior"}),R&&s.jsx(A,{}),s.jsx(m,{onClickFunction:N,texto:"Siguiente"})]}),s.jsx("div",{className:"containerFechas",children:_.map(a=>a.dia.getDay()!==0&&s.jsxs("div",{className:"dias",children:[s.jsx("h3",{className:`${a.dia.getDate()===H.getDate()&&a.dia.getDay()===H.getDay()?"esHoy":""}`,children:u({fecha:a.dia.setUTCHours(a.dia.getUTCHours()-3)})}),s.jsx("ul",{className:"HorasCalendario",children:a.horaID.map((e,r)=>s.jsx("li",{onClick:O,className:y(r,e),id:e.id,children:e.id.split(" ")[1]},e.id))})]},a.dia))}),s.jsxs("div",{className:"containerBotonesAbajo",children:[s.jsx(m,{onClickFunction:g,texto:"Anterior"}),R&&s.jsx(A,{}),s.jsx(m,{onClickFunction:N,texto:"Siguiente"})]})]})})]})}export{re as default};
