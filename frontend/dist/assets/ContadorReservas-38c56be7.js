import{r as u,j as s,B as v}from"./index-4e232b89.js";import{E as d}from"./constantes-5af98ff7.js";import{T as o}from"./TransitionNumber-4119ef34.js";function p(r){if(r instanceof Array){const e=r.reduce((a,n)=>(n.estado===d.pago?a.terminadas++:n.estado===d.cancelada?a.canceladas++:n.estado===d.pendiente&&a.pendientes++,a),{terminadas:0,canceladas:0,pendientes:0});return{reservasCanceladas:e.canceladas,reservasPendientes:e.pendientes,reservasTerminadas:e.terminadas,reservasTodas:e.canceladas+e.pendientes+e.terminadas}}else return{reservasCanceladas:[],reservasPendientes:[],reservasTerminadas:[],reservasTodas:[]}}function T({reservas:r,mostrarReservadas:e}){const{reservasCanceladas:a,reservasPendientes:n,reservasTerminadas:c,reservasTodas:l}=p(r),[i,m]=u.useState(!1),x=()=>{m(!i)},t=j=>{e(j.currentTarget.className)};return s.jsxs("div",{className:"contador-container",children:[s.jsx(v,{className:"btnContador",tipo:"button",texto:`${i?"Ocultar Contador":"Mostrar Contador"}`,onClickFunction:x}),s.jsxs("section",{className:`contadorEstadosReservas ${i?"visible":"hidden"}`,children:[s.jsxs("div",{className:"Pendiente",onClick:t,children:[s.jsx("p",{children:"Pendientes"}),s.jsx("strong",{children:s.jsx(o,{from:0,to:n,duration:500})})]}),s.jsxs("div",{className:"Cancelada",onClick:t,children:[s.jsx("p",{children:"Canceladas"}),s.jsx("strong",{children:s.jsx(o,{from:0,to:a,duration:500})})]}),s.jsxs("div",{className:"Pago",onClick:t,children:[s.jsx("p",{children:"Pagas"}),s.jsx("strong",{children:s.jsx(o,{from:0,to:c,duration:500})})]}),s.jsxs("div",{className:"Toda",onClick:t,children:[s.jsx("p",{children:"Todas"}),s.jsx("strong",{children:s.jsx(o,{from:0,to:l,duration:500})})]})]})]})}export{T as C};
