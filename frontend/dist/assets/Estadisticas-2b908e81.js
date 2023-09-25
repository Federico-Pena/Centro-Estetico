import{r,j as s,U as C,a as D}from"./index-94223caf.js";import{T as c,f as M}from"./TransitionNumber-6468b3b8.js";import{H as $,M as p,b}from"./apiConfig-6444a406.js";function y(e){const i=Object.values(e).reduce((a,t)=>a+t.cantidad,0),o={};for(const a in e){const t=e[a].tratamiento,j=e[a].cantidad;o[t]=(j/i*100).toFixed(1)}const d=Object.entries(o).map(([a,t])=>({tratamiento:a,porcentaje:parseFloat(t)}));return d.sort((a,t)=>t.porcentaje-a.porcentaje),d}function f({datos:e}){const i=y(e),[o,d]=r.useState(!1);return r.useEffect(()=>{const a=setTimeout(()=>{d(!0)},300);return()=>clearTimeout(a)},[]),s.jsxs("article",{className:"porcentajes",children:[s.jsx("h3",{children:"Tratamientos Preferidos"}),s.jsx("ul",{className:`bar-chart ${o?"animate":""}`,children:i.map(({tratamiento:a,porcentaje:t})=>s.jsxs("li",{children:[a," ",t.toFixed(1)," %",s.jsx("div",{className:"bar",children:s.jsx("div",{className:"fill",style:{width:`${o?t:0}%`}})})]},a))})]})}const A=({estadisticasPacientes:e,tratamientosPacientes:i})=>s.jsxs("section",{className:"pacientesDatos",children:[s.jsx("h2",{children:"Datos de Pacientes"}),s.jsxs("ul",{className:"ulPacientesDatos",children:[s.jsxs("li",{children:["Pacientes",s.jsx("strong",{children:s.jsx(c,{from:0,to:e.totalPacientes,duration:2e3})})]}),s.jsxs("li",{children:["Promedio De Edad",s.jsxs("strong",{children:[s.jsx(c,{from:0,to:e.promedioDeEdades,duration:2e3})," ",s.jsx("span",{children:" años"})]})]})]}),s.jsx("section",{className:"pacientesPorcentaje",children:s.jsx(f,{datos:i})})]}),F={estadosMes:{reservasCanceladas:0,reservasPendientes:0,reservasTerminadas:0,reservasTodas:0},estadosTodas:{reservasCanceladas:0,reservasPendientes:0,reservasTerminadas:0,reservasTodas:0}};function m(e){return e>=1&&e<=12?p[e-1]:"Mes no válido"}const k=()=>{const[e,i]=r.useState($.split("-")[1]),[o,d]=r.useState({totalPacientes:0,promedioDeEdades:0}),[a,t]=r.useState(F),[j,P]=r.useState({}),[T,N]=r.useState({}),[E,x]=r.useState(!1),{accessToken:u}=r.useContext(C);r.useEffect(()=>{const n=`${b.estadisticas.estadisticas}${e}`,l={headers:{"Content-Type":"application/json",Authorization:`Bearer ${u||""}`}};(async()=>{x(!0),await M(n,l,R),x(!1)})()},[u,e]);const R=n=>{const{estadisticasPaciente:l,estadosMes:h,estadosTodas:g,reservaMotivo:S}=n;t({estadosMes:h,estadosTodas:g}),d(l),P(l.tratamientosPacientes),N(S)};return s.jsxs("main",{className:"mainEstadisticas",children:[E&&s.jsx(D,{}),s.jsx(A,{estadisticasPacientes:o,tratamientosPacientes:j}),s.jsxs("section",{className:"reservasEstadisticas",children:[s.jsx("h2",{children:"Datos de Reservas"}),s.jsxs("article",{className:"reservasEstadisticasArticle",children:[s.jsx("h3",{children:"Reservas del mes"}),s.jsxs("select",{className:"selectMeses",value:e,onChange:n=>i(n.target.value),children:[s.jsx("option",{value:e,children:`${m(e)}`},e),p.map((n,l)=>n!==`${m(e)}`&&s.jsx("option",{value:l+1,children:n},n))]}),s.jsxs("ul",{className:"ulReservasDatos",children:[s.jsxs("li",{children:["Reservas de ",`${m(e)}`,s.jsx("strong",{children:s.jsx(c,{from:0,to:a.estadosMes.reservasTodas,duration:500})})]}),s.jsx(v,{datos:a.estadosMes})]})]}),s.jsxs("article",{className:"reservasEstadisticasArticle",children:[s.jsx("h3",{children:"Reservas Totales"}),s.jsxs("ul",{className:"ulReservasDatos",children:[s.jsxs("li",{children:["Reservas Totales",s.jsx("strong",{children:s.jsx(c,{from:0,to:a.estadosTodas.reservasTodas,duration:500})})]}),s.jsx(v,{datos:a.estadosTodas})]})]}),s.jsx(f,{datos:T})]})]})},v=({datos:e})=>s.jsxs(s.Fragment,{children:[s.jsxs("li",{className:"Pago",children:["Reservas Terminadas",s.jsx("strong",{children:s.jsx(c,{from:0,to:e.reservasTerminadas,duration:500})})]}),s.jsxs("li",{className:"Pendiente",children:["Reservas Pendientes",s.jsx("strong",{children:s.jsx(c,{from:0,to:e.reservasPendientes,duration:500})})]}),s.jsxs("li",{className:"Cancelada",children:["Reservas Canceladas",s.jsx("strong",{children:s.jsx(c,{from:0,to:e.reservasCanceladas,duration:500})})]})]});export{k as default};
