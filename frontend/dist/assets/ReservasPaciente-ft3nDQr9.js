import{u as R,r as p,l as h,a as f,j as o,k as C,R as j,H as b}from"./index-YAdz76Jm.js";import{f as S,b as y,a as E,u as x}from"./useLoaderContext-_SMLR0xo.js";import{u as v}from"./useReservasContext-D-al89pr.js";import{C as T}from"./ContenedorReservas-8NgFQiPC.js";import{P as w}from"./Pagination-83pxtOpq.js";import{B as m}from"./Button-qbGwCLcH.js";import"./LoaderChico-KZMPlRzu.js";import"./useObserver-k1XNW9GD.js";import"./formatHoraUser-TJ92Iw1g.js";const A=async(t,e,s)=>{const r={headers:{"Content-Type":"application/json",Authorization:`Bearer ${t||""}`}},a=`${y.reservas.deUnPacientes}${e}/${s}`;return await S(a,r)},N=t=>{const{accessToken:e}=E(),{setMensaje:s}=R(),{dispatch:r}=v(),{setLoading:a}=x(),[n,i]=p.useState(1),[l,c]=p.useState(!1);return p.useEffect(()=>{(async()=>{try{a(!0);const g=await A(e,n,t),{status:P,error:d,datos:u}=g;P===200?(r({type:h.SET_RESERVAS,payload:u.reservas}),i(u.page),c(u.totalPages)):s(d||"Ocurrió un error al obtener las reservas del paciente")}catch{s("Ocurrió un error al obtener las reservas del paciente")}finally{a(!1)}})()},[e,n,r,s,t,a]),{pagina:n,totalPaginas:l,setPagina:i}},_=({handleAgregarReserva:t})=>{const e=f();return o.jsxs("header",{className:"border-b border-slate-500 py-4 gap-2 grid grid-flow-col",children:[o.jsx(m,{className:"w-full",tipo:"button",onClickFunction:()=>e(-1),texto:"Volver"}),o.jsx(m,{className:"w-full",tipo:"button",onClickFunction:t,texto:"Agregar"})]})},z=()=>{var c;const e=(c=C().state)==null?void 0:c.paciente,s=f(),{loading:r}=x(),{reservas:a}=v(),{totalPaginas:n,setPagina:i}=N(e._id),l=async()=>{s(j.admin.agregarReserva,{state:{reserva:{paciente:{nombre:e.nombre},horario:{horaInicio:b.split("T")[0]}}}})};return o.jsxs("section",{className:"grid grid-rows-[70px_auto_1fr] gap-4 mx-auto max-w-5xl w-full p-4",children:[o.jsx(_,{handleAgregarReserva:l}),a.length>0&&o.jsx(w,{loading:r,totalPages:n,onPageChange:i}),o.jsx(T,{reservas:a})]})};export{z as default};
