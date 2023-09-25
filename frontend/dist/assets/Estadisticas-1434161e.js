import{r as n,j as s,U as g}from"./index-ac3a5eb2.js";import{T as c,f as S}from"./TransitionNumber-8bdbb283.js";import{H as C,M as v,b as D}from"./apiConfig-6444a406.js";function M(e){const i=Object.values(e).reduce((a,t)=>a+t.cantidad,0),o={};for(const a in e){const t=e[a].tratamiento,j=e[a].cantidad;o[t]=(j/i*100).toFixed(1)}const d=Object.entries(o).map(([a,t])=>({tratamiento:a,porcentaje:parseFloat(t)}));return d.sort((a,t)=>t.porcentaje-a.porcentaje),d}function p({datos:e}){const i=M(e),[o,d]=n.useState(!1);return n.useEffect(()=>{const a=setTimeout(()=>{d(!0)},300);return()=>clearTimeout(a)},[]),s.jsxs("article",{className:"porcentajes",children:[s.jsx("h3",{children:"Tratamientos Preferidos"}),s.jsx("ul",{className:`bar-chart ${o?"animate":""}`,children:i.map(({tratamiento:a,porcentaje:t})=>s.jsxs("li",{children:[a," ",t.toFixed(1)," %",s.jsx("div",{className:"bar",children:s.jsx("div",{className:"fill",style:{width:`${o?t:0}%`}})})]},a))})]})}const $=({estadisticasPacientes:e,tratamientosPacientes:i})=>e&&s.jsxs("section",{className:"pacientesDatos",children:[s.jsx("h2",{children:"Datos de Pacientes"}),s.jsxs("ul",{className:"ulPacientesDatos",children:[s.jsxs("li",{children:["Pacientes",s.jsx("strong",{children:s.jsx(c,{from:0,to:e.totalPacientes,duration:2e3})})]}),s.jsxs("li",{children:["Promedio De Edad",s.jsxs("strong",{children:[s.jsx(c,{from:0,to:e.promedioDeEdades,duration:2e3})," ",s.jsx("span",{children:" años"})]})]})]}),s.jsx("section",{className:"pacientesPorcentaje",children:s.jsx(p,{datos:i})})]}),b={estadosMes:{reservasCanceladas:0,reservasPendientes:0,reservasTerminadas:0,reservasTodas:0},estadosTodas:{reservasCanceladas:0,reservasPendientes:0,reservasTerminadas:0,reservasTodas:0}};function m(e){return e>=1&&e<=12?v[e-1]:"Mes no válido"}const I=()=>{const[e,i]=n.useState(C.split("-")[1]),[o,d]=n.useState({totalPacientes:0,promedioDeEdades:0}),[a,t]=n.useState(b),[j,f]=n.useState({}),[T,P]=n.useState({}),{accessToken:x}=n.useContext(g);n.useEffect(()=>{const r=`${D.estadisticas.estadisticas}${e}`,l={headers:{"Content-Type":"application/json",Authorization:`Bearer ${x||""}`}};(async()=>{await S(r,l,N)})()},[x,e]);const N=r=>{const{estadisticasPaciente:l,estadosMes:h,estadosTodas:E,reservaMotivo:R}=r;t({estadosMes:h,estadosTodas:E}),d(l),f(l.tratamientosPacientes),P(R),console.log(r)};return s.jsxs("main",{className:"mainEstadisticas",children:[s.jsx($,{estadisticasPacientes:o,tratamientosPacientes:j}),s.jsxs("section",{className:"reservasEstadisticas",children:[s.jsx("h2",{children:"Datos de Reservas"}),s.jsxs("article",{className:"reservasEstadisticasArticle",children:[s.jsx("h3",{children:"Reservas del mes"}),s.jsxs("select",{className:"selectMeses",value:e,onChange:r=>i(r.target.value),children:[s.jsx("option",{value:e,children:`${m(e)}`},e),v.map((r,l)=>r!==`${m(e)}`&&s.jsx("option",{value:l+1,children:r},r))]}),s.jsxs("ul",{className:"ulReservasDatos",children:[s.jsxs("li",{children:["Reservas de ",`${m(e)}`,s.jsx("strong",{children:s.jsx(c,{from:0,to:a.estadosMes.reservasTodas,duration:500})})]}),s.jsx(u,{datos:a.estadosMes})]})]}),s.jsxs("article",{className:"reservasEstadisticasArticle",children:[s.jsx("h3",{children:"Reservas Totales"}),s.jsxs("ul",{className:"ulReservasDatos",children:[s.jsxs("li",{children:["Reservas Totales",s.jsx("strong",{children:s.jsx(c,{from:0,to:a.estadosTodas.reservasTodas,duration:500})})]}),s.jsx(u,{datos:a.estadosTodas})]})]}),s.jsx(p,{datos:T})]})]})},u=({datos:e})=>s.jsxs(s.Fragment,{children:[s.jsxs("li",{className:"Pago",children:["Reservas Terminadas",s.jsx("strong",{children:s.jsx(c,{from:0,to:e.reservasTerminadas,duration:500})})]}),s.jsxs("li",{className:"Pendiente",children:["Reservas Pendientes",s.jsx("strong",{children:s.jsx(c,{from:0,to:e.reservasPendientes,duration:500})})]}),s.jsxs("li",{className:"Cancelada",children:["Reservas Canceladas",s.jsx("strong",{children:s.jsx(c,{from:0,to:e.reservasCanceladas,duration:500})})]})]});export{I as default};