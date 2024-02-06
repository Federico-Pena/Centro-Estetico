import{U as A,V as $,W as V,X as F,Y as M,Z as U,f as B,c as P,r as C,_ as R,a as T,b as _,m as y,l as b,o as j,j as e,B as E,h as k,E as c,g as O,e as Z,$ as S,k as z,a0 as Y,R as v}from"./index-6lSq4eNo.js";import{L as G}from"./LoaderChico-eJFhAvFb.js";import{f as W}from"./formatHoraUser-TJ92Iw1g.js";import{C as X}from"./ContenedorReservas-EDk8H1Ie.js";const I=6,q=0,J=(s,a,t)=>!(s===20&&a===30)&&!(t.getDay()===I&&s===12&&a===30)&&t.getDay()!==q,K=s=>{const a=new Date(s);return Number.isNaN(a.getTime())?[]:(a.setDate(a.getDate()-a.getDay()),Array.from({length:A},(n,i)=>{const o=new Date(a),u=[],h=o.getDay()===I?$:V;o.setDate(a.getDate()+i);for(let l=U;l<=h;l++)for(let p=0;p<F;p+=M)if(J(l,p,o)){const m=new Date(o);m.setHours(l,p,0),u.push(m)}return{dia:o,horas:u}}))},Q=async(s,a)=>{const t={headers:{"Content-Type":"application/json",Authorization:`Bearer ${s||""}`}},n=`${P.reservas.deLaSemana}${a}`;return await B(n,t)},ee=()=>{const[s,a]=C.useState(R.split("T")[0]),{setMensaje:t}=T(),{accessToken:n}=_(),{setLoading:i}=y(),{dispatch:o}=b(),u=K(s);return C.useEffect(()=>{s&&(async()=>{i(!0);const d=await Q(n,s),{datos:g,error:f,status:N}=d;N===200?o({type:j.SET_RESERVAS,payload:g}):g?t(f||"Ocurrió un error al obtener las reservas de la semana"):o({type:j.SET_RESERVAS,payload:[]}),i(!1)})()},[n,t,s,o,i]),{semanaAnterior:()=>{const r=new Date(`${s} 00:00:00.000Z`);r.setDate(r.getDate()-A);const d=r.toISOString().split("T")[0];a(d)},semanaSiguiente:()=>{const r=new Date(`${s} 00:00:00.000Z`);r.setDate(r.getDate()+A);const d=r.toISOString().split("T")[0];a(d)},diasSemana:u,setSeleccionadas:r=>{o({type:j.SET_RESERVAS_SELECCIONADAS,payload:r})},seleccionarDia:r=>{a(r)}}},w=({loading:s,semanaAnterior:a,semanaSiguiente:t})=>e.jsxs("section",{className:"grid grid-flow-col gap-4 border-t border-black p-4",children:[e.jsx(E,{className:"w-full",onClickFunction:a,texto:"Anterior",tipo:"button"}),s&&e.jsx(G,{className:"self-center"}),e.jsx(E,{className:"w-full",onClickFunction:t,texto:"Siguiente",tipo:"button"})]}),ae=({horas:s,reservarHora:a})=>{const{reservas:t}=b();return e.jsx("ul",{className:"grid gap-2 p-2",children:s.map((n,i)=>{const o=k(n,t);return e.jsx("li",{"data-fecha":o.id,onClick:a,className:`${o.reservaAdmin&&"outline outline-2 outline-color-violeta px-1 horaAdmin"} ${te(i,o)} text-center rounded-md cursor-pointer hover:scale-105 transition-transform`,children:W(n)},n)})})},se=s=>s===c.pendiente?"bg-color-pendiente text-white":s===c.pago?"bg-color-paga text-white":s===c.cancelada?"bg-color-cancelada text-white":"",te=(s,a)=>s==0||s==1?"outline outline-2 outline-color-violeta px-1 horaAdmin":se(a.estado),ne=({diasSemana:s,reservarHora:a})=>e.jsx("section",{className:"grid grid-cols-3 md:grid-cols-6 border-t border-black",children:s.map(t=>{const n=new Date(t.dia);return n.getDay()!==0&&e.jsxs("div",{className:"grid grid-rows-[50px,1fr] gap-2",children:[e.jsx("h3",{className:`grid place-content-center text-center capitalize text-md p-2 text-color-violeta font-betonga font-bold tracking-wide text-pretty border-b border-black ${n.getDate()===new Date().getDate()&&n.getDay()===new Date().getDay()?"bg-color-verde-blanco":""}`,children:O(t.dia)}),e.jsx(ae,{horas:t.horas,reservarHora:a})]},n)})}),re=({handleSeleccionarDia:s})=>{const a=t=>{const n=t.target.value;n&&s(n)};return e.jsxs("section",{className:"grid gap-x-4",children:[e.jsxs("h1",{onClick:()=>s(R.split("T")[0]),className:"capitalize p-4 text-xl bg-color-verde-blanco text-center text-color-violeta cursor-pointer rounded-t-lg font-betonga font-bold",children:["Hoy ",O(R)]}),e.jsx("div",{className:"grid gap-2 p-4 text-center",children:e.jsx(Z,{className:"text-center max-w-md justify-self-center",labelText:"Buscar día",type:"date",onChange:a})})]})};function oe(s){const a=s.reduce((t,n)=>(n.estado===c.pago?t.terminadas++:n.estado===c.cancelada?t.canceladas++:n.estado===c.pendiente&&t.pendientes++,t),{terminadas:0,canceladas:0,pendientes:0});return{reservasCanceladas:a.canceladas,reservasPendientes:a.pendientes,reservasTerminadas:a.terminadas,reservasTodas:a.canceladas+a.pendientes+a.terminadas}}function ie({setSeleccionadas:s}){const[a,t]=C.useState(!1),{reservas:n}=b(),{reservasCanceladas:i,reservasPendientes:o,reservasTerminadas:u,reservasTodas:h}=oe(n),l=r=>{if(r==="Todas")s(n);else{const d=n.filter(g=>g.estado===r);s(d)}},p=()=>{t(!a)},m=r=>{const d=r.currentTarget.id;l(d)};return e.jsxs("div",{className:"m-auto w-full max-w-4xl flex flex-col items-center gap-4 mb-4",children:[e.jsx(E,{tipo:"button",texto:`${a?"Ocultar Contador":"Mostrar Contador"}`,onClickFunction:p}),e.jsxs("section",{className:`w-full flex flex-wrap gap-4 [&>div]:flex-1 [&>div]:p-3 [&>div]:text-center [&>div]:rounded-md [&>div]:cursor-pointer [&>div]:transition-colors [&>div]:text-white [&>div]:font-betonga [&>div]:tracking-wider [&>div]:border hover:[&>div]:bg-slate-200 hover:[&>div]:text-color-violeta ${a?"opacity-100 h-auto max-h-[500px] transition-[opacity_max-height] pointer-events-auto":"opacity-0  max-h-0 transition-[opacity_max-height] pointer-events-none"}`,children:[e.jsxs("div",{id:c.pendiente,className:c.pendiente,onClick:m,children:[e.jsx("p",{className:"font-bold",children:"Pendientes"}),e.jsx("strong",{className:"text-2xl",children:o})]}),e.jsxs("div",{id:c.cancelada,className:c.cancelada,onClick:m,children:[e.jsx("p",{className:"font-bold",children:"Canceladas"}),e.jsx("strong",{className:"text-2xl",children:e.jsx(S,{to:i})})]}),e.jsxs("div",{id:c.pago,className:c.pago,onClick:m,children:[e.jsx("p",{className:"font-bold",children:"Pagas"}),e.jsx("strong",{className:"text-2xl",children:e.jsx(S,{to:u})})]}),e.jsxs("div",{id:"Todas",className:"border-slate-400",onClick:m,children:[e.jsx("p",{className:"font-bold text-color-violeta",children:"Todas"}),e.jsx("strong",{className:"text-2xl text-color-violeta",children:e.jsx(S,{to:h})})]})]})]})}function ue(){const{setMensaje:s}=T(),{loading:a}=_(),{loading:t}=y(),{reservas:n,seleccionadas:i}=b(),{semanaAnterior:o,semanaSiguiente:u,diasSemana:h,setSeleccionadas:l,seleccionarDia:p}=ee(),m=()=>{l([])},r=z(),d=g=>{const f="admin",N=g.target.getAttribute("data-fecha"),x=k(new Date(`${N}`),n),H=x.estado&&x.estado!==c.cancelada||x.proximaHoraNoDisponible,L=x.estado;if(x.estado===c.pago||x.estado===c.pendiente){l(x.reservadas);return}if(L&&l(x.reservadas),H){s("Hora no disponible para hacer una reserva");return}if(g.target.className.includes("horaAdmin")){const D={horario:{horaInicio:x.id},paciente:{nombre:f}};r(v.admin.agregarReserva,{state:{from:v.admin.calendario,reserva:D}})}else{const D={horario:{horaInicio:x.id}};r(v.admin.agregarReserva,{state:{from:v.admin.calendario,reserva:D}})}};return e.jsxs(e.Fragment,{children:[a&&e.jsx(Y,{}),(i==null?void 0:i.length)>0?e.jsx(X,{reservas:i,cerrarReserva:m}):null,e.jsxs("main",{className:"grid py-8 px-2 w-full ",children:[e.jsx(ie,{setSeleccionadas:l}),e.jsxs("article",{className:"max-w-4xl grid  mx-auto border rounded-lg border-black",children:[e.jsx(re,{handleSeleccionarDia:p}),e.jsx(w,{loading:t,semanaAnterior:o,semanaSiguiente:u}),e.jsx(ne,{diasSemana:h,reservarHora:d}),e.jsx(w,{loading:t,semanaAnterior:o,semanaSiguiente:u})]})]})]})}export{ue as default};