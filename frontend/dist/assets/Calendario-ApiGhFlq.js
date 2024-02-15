import{D as A,m as $,n as F,M,I as V,p as U,r as C,H as R,u as w,l as j,j as e,E as l,a as B,q as P,R as v}from"./index-YAdz76Jm.js";import{c as y}from"./compararFechas-sMQnMgQ2.js";import{f as z,b as Z,a as _,u as O}from"./useLoaderContext-_SMLR0xo.js";import{u as D,f as k}from"./useReservasContext-D-al89pr.js";import{B as E}from"./Button-qbGwCLcH.js";import{L as q}from"./LoaderChico-KZMPlRzu.js";import{f as G}from"./formatHoraUser-TJ92Iw1g.js";import{L as Y}from"./LabelInput-iD2B8GI7.js";import{C as J}from"./ContenedorReservas-8NgFQiPC.js";import{T as S}from"./TransitionNumber-nHdbKKCB.js";import"./useObserver-k1XNW9GD.js";const I=6,K=0,Q=(s,a,t)=>!(s===20&&a===30)&&!(t.getDay()===I&&s===12&&a===30)&&t.getDay()!==K,W=s=>{const a=new Date(s);return Number.isNaN(a.getTime())?[]:(a.setDate(a.getDate()-a.getDay()),Array.from({length:A},(r,i)=>{const o=new Date(a),p=[],g=o.getDay()===I?$:F;o.setDate(a.getDate()+i);for(let u=U;u<=g;u++)for(let c=0;c<M;c+=V)if(Q(u,c,o)){const m=new Date(o);m.setHours(u,c,0),p.push(m)}return{dia:o,horas:p}}))},X=async(s,a)=>{const t={headers:{"Content-Type":"application/json",Authorization:`Bearer ${s||""}`}},r=`${Z.reservas.deLaSemana}${a}`;return await z(r,t)},ee=()=>{const[s,a]=C.useState(R.split("T")[0]),{setMensaje:t}=w(),{accessToken:r}=_(),{setLoading:i}=O(),{dispatch:o}=D(),p=W(s);return C.useEffect(()=>{s&&(async()=>{i(!0);const d=await X(r,s),{datos:f,error:h,status:N}=d;N===200?o({type:j.SET_RESERVAS,payload:f}):f?t(h||"Ocurrió un error al obtener las reservas de la semana"):o({type:j.SET_RESERVAS,payload:[]}),i(!1)})()},[r,t,s,o,i]),{semanaAnterior:()=>{const n=new Date(`${s} 00:00:00.000Z`);n.setDate(n.getDate()-A);const d=n.toISOString().split("T")[0];a(d)},semanaSiguiente:()=>{const n=new Date(`${s} 00:00:00.000Z`);n.setDate(n.getDate()+A);const d=n.toISOString().split("T")[0];a(d)},diasSemana:p,setSeleccionadas:n=>{o({type:j.SET_RESERVAS_SELECCIONADAS,payload:n})},seleccionarDia:n=>{a(n)}}},T=({loading:s,semanaAnterior:a,semanaSiguiente:t})=>e.jsxs("section",{className:"grid grid-flow-col gap-4 border-t border-black p-4",children:[e.jsx(E,{className:"w-full",onClickFunction:a,texto:"Anterior",tipo:"button"}),s&&e.jsx(q,{className:"self-center"}),e.jsx(E,{className:"w-full",onClickFunction:t,texto:"Siguiente",tipo:"button"})]}),ae=({horas:s,reservarHora:a})=>{const{reservas:t}=D();return e.jsx("ul",{className:"grid gap-2 p-2",children:s.map((r,i)=>{const o=y(r,t);return e.jsx("li",{"data-fecha":o.id,onClick:a,className:`${(o.reservaAdmin||i===1||i===0)&&"outline outline-2 outline-color-violeta px-1 horaAdmin"} ${o.estado?`${o.estado} text-white`:""} text-center rounded-md cursor-pointer hover:scale-105 transition-transform`,children:G(r)},r)})})},se=({diasSemana:s,reservarHora:a})=>e.jsx("section",{className:"grid grid-cols-3 md:grid-cols-6 border-t border-black",children:s.map(t=>{const r=new Date(t.dia);return r.getDay()!==0&&e.jsxs("div",{className:"grid grid-rows-[50px,1fr] gap-2",children:[e.jsx("h3",{className:`grid place-content-center text-center capitalize text-md p-2 text-color-violeta font-betonga font-bold tracking-wide text-pretty border-b border-black ${r.getDate()===new Date().getDate()&&r.getDay()===new Date().getDay()?"bg-color-verde-blanco":""}`,children:k(t.dia)}),e.jsx(ae,{horas:t.horas,reservarHora:a})]},r)})}),te=({handleSeleccionarDia:s})=>{const a=t=>{const r=t.target.value;r&&s(r)};return e.jsxs("section",{className:"grid gap-x-4",children:[e.jsxs("h1",{onClick:()=>s(R.split("T")[0]),className:"capitalize p-4 text-xl bg-color-verde-blanco text-center text-color-violeta cursor-pointer rounded-t-lg font-betonga font-bold",children:["Hoy ",k(R)]}),e.jsx("div",{className:"grid gap-2 p-4 text-center",children:e.jsx(Y,{className:"text-center max-w-md justify-self-center",labelText:"Buscar día",type:"date",onChange:a})})]})};function re(s){const a=s.reduce((t,r)=>(r.estado===l.pago?t.terminadas++:r.estado===l.cancelada?t.canceladas++:r.estado===l.pendiente&&t.pendientes++,t),{terminadas:0,canceladas:0,pendientes:0});return{reservasCanceladas:a.canceladas,reservasPendientes:a.pendientes,reservasTerminadas:a.terminadas,reservasTodas:a.canceladas+a.pendientes+a.terminadas}}function oe({setSeleccionadas:s}){const[a,t]=C.useState(!1),{reservas:r}=D(),{reservasCanceladas:i,reservasPendientes:o,reservasTerminadas:p,reservasTodas:g}=re(r),u=n=>{if(n==="Todas")s(r);else{const d=r.filter(f=>f.estado===n);s(d)}},c=()=>{t(!a)},m=n=>{const d=n.currentTarget.id;u(d)};return e.jsxs("div",{className:"m-auto w-full max-w-4xl flex flex-col items-center gap-4 mb-4",children:[e.jsx(E,{tipo:"button",texto:`${a?"Ocultar Contador":"Mostrar Contador"}`,onClickFunction:c}),e.jsxs("section",{className:`w-full flex flex-wrap gap-4 [&>div]:flex-1 [&>div]:p-3 [&>div]:text-center [&>div]:rounded-md [&>div]:cursor-pointer [&>div]:transition-colors [&>div]:text-white [&>div]:font-betonga [&>div]:tracking-wider [&>div]:border hover:[&>div]:bg-slate-200 hover:[&>div]:text-color-violeta ${a?"opacity-100 h-auto max-h-[500px] transition-[opacity_max-height] pointer-events-auto":"opacity-0  max-h-0 transition-[opacity_max-height] pointer-events-none"}`,children:[e.jsxs("div",{id:l.pendiente,className:l.pendiente,onClick:m,children:[e.jsx("p",{className:"font-bold",children:"Pendientes"}),e.jsx("strong",{className:"text-2xl",children:o})]}),e.jsxs("div",{id:l.cancelada,className:l.cancelada,onClick:m,children:[e.jsx("p",{className:"font-bold",children:"Canceladas"}),e.jsx("strong",{className:"text-2xl",children:e.jsx(S,{to:i})})]}),e.jsxs("div",{id:l.pago,className:l.pago,onClick:m,children:[e.jsx("p",{className:"font-bold",children:"Pagas"}),e.jsx("strong",{className:"text-2xl",children:e.jsx(S,{to:p})})]}),e.jsxs("div",{id:"Todas",className:"border-slate-400",onClick:m,children:[e.jsx("p",{className:"font-bold text-color-violeta",children:"Todas"}),e.jsx("strong",{className:"text-2xl text-color-violeta",children:e.jsx(S,{to:g})})]})]})]})}function ve(){const s=B(),{setMensaje:a}=w(),{loading:t}=_(),{loading:r}=O(),{reservas:i,seleccionadas:o}=D(),{semanaAnterior:p,semanaSiguiente:g,diasSemana:u,setSeleccionadas:c,seleccionarDia:m}=ee(),n=()=>{c([])},d=f=>{const h="admin",N=f.target.getAttribute("data-fecha"),x=y(new Date(`${N}`),i),H=x.estado&&x.estado!==l.cancelada||x.proximaHoraNoDisponible,L=x.estado;if(x.estado===l.pago||x.estado===l.pendiente){c(x.reservadas);return}if(L&&c(x.reservadas),H){a("Hora no disponible para hacer una reserva");return}if(f.target.className.includes("horaAdmin")){const b={horario:{horaInicio:x.id},paciente:{nombre:h}};s(v.admin.agregarReserva,{state:{from:v.admin.calendario,reserva:b}})}else{const b={horario:{horaInicio:x.id}};s(v.admin.agregarReserva,{state:{from:v.admin.calendario,reserva:b}})}};return e.jsxs(e.Fragment,{children:[t&&e.jsx(P,{}),(o==null?void 0:o.length)>0?e.jsx(J,{reservas:o,cerrarReserva:n}):null,e.jsxs("main",{className:"grid py-8 px-2 w-full ",children:[e.jsx(oe,{setSeleccionadas:c}),e.jsxs("article",{className:"max-w-4xl grid justify-self-center border rounded-lg border-black w-full",children:[e.jsx(te,{handleSeleccionarDia:m}),e.jsx(T,{loading:r,semanaAnterior:p,semanaSiguiente:g}),e.jsx(se,{diasSemana:u,reservarHora:d}),e.jsx(T,{loading:r,semanaAnterior:p,semanaSiguiente:g})]})]})]})}export{ve as default};