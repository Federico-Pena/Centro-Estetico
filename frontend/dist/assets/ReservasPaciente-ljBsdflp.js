import{f as R,c as h,b as C,a as j,l as m,m as v,r as g,o as b,k as f,j as o,B as x,i as S,R as y,_ as E}from"./index-6lSq4eNo.js";import{C as T}from"./ContenedorReservas-EDk8H1Ie.js";import{P as w}from"./Pagination-hQyhVmWG.js";import"./LoaderChico-eJFhAvFb.js";import"./formatHoraUser-TJ92Iw1g.js";const A=async(t,e,s)=>{const n={headers:{"Content-Type":"application/json",Authorization:`Bearer ${t||""}`}},a=`${h.reservas.deUnPacientes}${e}/${s}`;return await R(a,n)},_=t=>{const{accessToken:e}=C(),{setMensaje:s}=j(),{dispatch:n}=m(),{setLoading:a}=v(),[r,c]=g.useState(1),[l,i]=g.useState(!1);return g.useEffect(()=>{(async()=>{try{a(!0);const p=await A(e,r,t),{status:P,error:d,datos:u}=p;P===200?(n({type:b.SET_RESERVAS,payload:u.reservas}),c(u.page),i(u.totalPages)):s(d||"Ocurrió un error al obtener las reservas del paciente")}catch{s("Ocurrió un error al obtener las reservas del paciente")}finally{a(!1)}})()},[e,r,n,s,t,a]),{pagina:r,totalPaginas:l,setPagina:c}},N=({handleAgregarReserva:t})=>{const e=f();return o.jsxs("header",{className:"border-b border-slate-500 py-4 gap-2 grid grid-flow-col",children:[o.jsx(x,{className:"w-full",tipo:"button",onClickFunction:()=>e(-1),texto:"Volver"}),o.jsx(x,{className:"w-full",tipo:"button",onClickFunction:t,texto:"Agregar"})]})},H=()=>{var i;const e=(i=S().state)==null?void 0:i.paciente,s=f(),{loading:n}=v(),{reservas:a}=m(),{totalPaginas:r,setPagina:c}=_(e._id),l=async()=>{s(y.admin.agregarReserva,{state:{reserva:{paciente:{nombre:e.nombre},horario:{horaInicio:E.split("T")[0]}}}})};return o.jsxs("section",{className:"grid grid-rows-[70px_auto_1fr] gap-4 mx-auto max-w-5xl w-full p-4",children:[o.jsx(N,{handleAgregarReserva:l}),a.length>0&&o.jsx(w,{loading:n,totalPages:r,onPageChange:c}),o.jsx(T,{reservas:a})]})};export{H as default};