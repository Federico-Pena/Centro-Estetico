import{u as R,m as f,r as u,p as h,a as x,j as o,o as C,R as j,v as S}from"./index-eyZDGxlY.js";import{f as b,a as y,u as E}from"./useUserContext-o9xrNTqb.js";import{u as v}from"./useReservasContext-7CxyEjNX.js";import{C as T}from"./ContenedorReservas-lbV-lV1T.js";import{P as w}from"./Pagination-_SMd9H3I.js";import{B as d}from"./Button-gaWcEQck.js";import"./formatFechaParaUser-QfX3A7Bl.js";import"./LoaderChico-GUMo0G8g.js";import"./useObserver-6YU-PPv7.js";import"./formatHoraUser-TJ92Iw1g.js";const A=async(t,e,s)=>{const r={headers:{"Content-Type":"application/json",Authorization:`Bearer ${t||""}`}},a=`${y.reservas.deUnPacientes}${e}/${s}`;return await b(a,r)},N=t=>{const{accessToken:e}=E(),{setMensaje:s}=R(),{dispatch:r}=v(),{setLoading:a}=f(),[n,i]=u.useState(1),[l,c]=u.useState(!1);return u.useEffect(()=>{(async()=>{try{a(!0);const g=await A(e,n,t),{status:P,error:m,datos:p}=g;P===200?(r({type:h.SET_RESERVAS,payload:p.reservas}),i(p.page),c(p.totalPages)):s(m||"Ocurrió un error al obtener las reservas del paciente")}catch{s("Ocurrió un error al obtener las reservas del paciente")}finally{a(!1)}})()},[e,n,r,s,t,a]),{pagina:n,totalPaginas:l,setPagina:i}},_=({handleAgregarReserva:t})=>{const e=x();return o.jsxs("header",{className:"border-b border-slate-500 py-4 gap-2 grid grid-flow-col",children:[o.jsx(d,{className:"w-full",tipo:"button",onClickFunction:()=>e(-1),texto:"Volver"}),o.jsx(d,{className:"w-full",tipo:"button",onClickFunction:t,texto:"Agregar"})]})},G=()=>{var c;const e=(c=C().state)==null?void 0:c.paciente,s=x(),{loading:r}=f(),{reservas:a}=v(),{totalPaginas:n,setPagina:i}=N(e._id),l=async()=>{s(j.admin.agregarReserva,{state:{reserva:{paciente:{nombre:e.nombre},horario:{horaInicio:S.split("T")[0]}}}})};return o.jsxs("section",{className:"grid grid-rows-[70px_auto_1fr] gap-4 mx-auto max-w-5xl w-full p-4",children:[o.jsx(_,{handleAgregarReserva:l}),a.length>0&&o.jsx(w,{loading:r,totalPages:n,onPageChange:i}),o.jsx(T,{reservas:a})]})};export{G as default};
