import{r as a,U as m,j as s}from"./index-9b0ccc10.js";import{T as o,f as j}from"./TransitionNumber-9cc045e6.js";import{H as p,M as r,b as f}from"./apiConfig-6444a406.js";function c(e){return e>=1&&e<=12?r[e-1]:"Mes no válido"}const b=()=>{const[e,d]=a.useState(p.split("-")[1]),[l,E]=a.useState(0),[u,v]=a.useState(0),[x,S]=a.useState(0),{accessToken:i}=a.useContext(m);a.useEffect(()=>{const t=`${f.estadisticas.estadisticas}09`,n={headers:{"Content-Type":"application/json",Authorization:`Bearer ${i||""}`}};(async()=>{await j(t,n,h)})()},[i]);const h=t=>{console.log(t)};return s.jsxs("main",{className:"mainEstadisticas",children:[s.jsxs("div",{className:"select-container",children:[s.jsxs("h3",{children:["Fechas en ",`${c(e)}`," ",s.jsx(o,{from:0,to:l,duration:500})]}),s.jsxs("select",{value:e,onChange:t=>d(t.target.value),children:[s.jsx("option",{}),r.map((t,n)=>s.jsx("option",{value:n+1,children:t},t))]}),s.jsxs("h3",{children:["Reservas en ",`${c(e)}`," ",s.jsx(o,{from:0,to:u,duration:500})]})]}),s.jsx("div",{className:"encabezado",children:s.jsxs("strong",{children:["Pacientes:"," ",s.jsx(o,{from:0,to:x,duration:2e3})]})})]})};export{b as default};
