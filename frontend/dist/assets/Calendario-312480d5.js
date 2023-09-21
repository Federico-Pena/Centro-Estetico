import{r as o,M as G,j as s,a as I,B as l}from"./index-6fbdeef3.js";import{f as m,H as M,L as F,a as A,c as U,E as u}from"./FormularioReserva-7bfb559d.js";import{N as P,C as Y,F as w,c as V,o as j}from"./Notificacion-bc66807f.js";import{u as q,C as J}from"./ContadorReservas-df2f0f06.js";import"./BotonPrimario-2bd0cf02.js";function ae(){const[x,H]=o.useState(""),[b,E]=o.useState(""),[$,v]=o.useState(!1),[D,f]=o.useState(""),[d,t]=o.useState([]),{setMensaje:p}=o.useContext(G),{loadingSemana:R,diasSemana:T,reservasSemanales:n,loading:_,semanaAnterior:g,semanaSiguiente:N,setReservasSemanales:C}=q(!0,x),S=a=>{const{reserva:e}=a,r=`Reserva nueva de ${e.pacienteNombre} el dia ${m({fecha:e.fecha})} a las ${e.hora}`;p(r);const i=n.filter(c=>c._id!==e._id);C([...i,e])},B=a=>{t([]),f("");const e=a.target;e.className.includes("paraReservaAdmin")&&f("admin");const r=e.id,[i,c]=r.split(" "),h=U(new Date(r),n),L=V(a,r.split(" ")[0],n);if(e.className.includes(u.cancelada)){t(h.reservadas),v(!0);return}if(L===!1){t(h.reservadas),h.reservadas.length===0&&p("Hora no disponible para hacer reserva");return}else v(!0),H(i),E(c)},O=a=>{a.current.parentElement.classList.add("animationReservaOut"),setTimeout(()=>{a.current.parentElement.remove("animationReservaOut"),t([])},500)},k=(a,e)=>a===0||a===1?`paraReservaAdmin ${e.estado||""}`:e.estado?e.reservaAdmin?`paraReservaAdmin ${e.paga?u.pago:e.pendiente?u.pendiente:e.cancelada?u.cancelada:""}`:e.estado:"",y=a=>{const{reserva:e}=a,r=`Reserva borrada de ${e.pacienteNombre} el dia ${m({fecha:e.fecha})} a las ${e.hora}`;p(r);const i=n.filter(c=>c._id!==e._id);C(i.sort(j)),t([])},z=a=>{if(a==="Toda")t(n.sort(j));else{const e=n.filter(r=>r.estado===a);t(e.sort(j))}};return s.jsxs(s.Fragment,{children:[s.jsx(P,{}),_&&s.jsx(I,{}),d.length>0?s.jsx("div",{className:d.length?"divReservaCalendario":"",children:s.jsx(Y,{cerrarReserva:O,reservas:d,actualizarReservaEliminada:y,actualizarReservas:a=>{S(a)}})}):null,$&&!d.length&&s.jsx(w,{reserva:{pacienteNombre:D,fecha:x,hora:b},actualizarReserva:a=>{S(a)},setForm:()=>{v(!1)}}),s.jsx("main",{className:"containerCalendario",children:s.jsxs(s.Fragment,{children:[s.jsx(J,{reservas:n,mostrarReservadas:z}),s.jsxs("h1",{children:["Hoy ",m({fecha:M.split("T")[0]})]}),s.jsxs("div",{className:"containerBotones",children:[s.jsx(l,{onClickFunction:g,texto:"Anterior"}),R&&s.jsx(F,{}),s.jsx(l,{onClickFunction:N,texto:"Siguiente"})]}),s.jsx("div",{className:"containerFechas",children:T.map(a=>a.dia.getDay()!==0&&s.jsxs("div",{className:"dias",children:[s.jsx("h3",{className:`${a.dia.getDate()===A.getDate()&&a.dia.getDay()===A.getDay()?"esHoy":""}`,children:m({fecha:a.dia.setUTCHours(a.dia.getUTCHours()-3)})}),s.jsx("ul",{className:"HorasCalendario",children:a.horaID.map((e,r)=>s.jsx("li",{onClick:B,className:k(r,e),id:e.id,children:e.id.split(" ")[1]},e.id))})]},a.dia))}),s.jsxs("div",{className:"containerBotonesAbajo",children:[s.jsx(l,{onClickFunction:g,texto:"Anterior"}),R&&s.jsx(F,{}),s.jsx(l,{onClickFunction:N,texto:"Siguiente"})]})]})})]})}export{ae as default};
