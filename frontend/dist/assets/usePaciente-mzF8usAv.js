import{r as f,P as T,u as b,i as p}from"./index-Hh7_R6wJ.js";import{f as d,b as P,u as m,a as C}from"./useUserContext-DcMwd5wI.js";const O=async(t,r)=>{const e=`${P.pacientes.deletePaciente}${r}`,a={method:"DELETE",headers:{Authorization:`Bearer ${t||""}`}};return await d(e,a)},$=async(t,r)=>{const e=P.pacientes.postPaciente,a={method:"POST",body:r,headers:{Authorization:`Bearer ${t||""}`}};return await d(e,a)},w=async(t,r,e)=>{const a=`${P.pacientes.putPaciente}${e}`,u={method:"PUT",body:r,headers:{Authorization:`Bearer ${t||""}`}};return await d(a,u)},A=async(t,r)=>{const e={headers:{"Content-Type":"application/json",Authorization:`Bearer ${t||""}`}},a=`${P.pacientes.getPacienteId}${r}`;return await d(a,e)},N=()=>{const t=f.useContext(T);if(t===void 0)throw new Error("usePacientes must be used within a PacientesProvider");return t},I=async(t,r)=>{const e={headers:{"Content-Type":"application/json",Authorization:`Bearer ${t||""}`}},a=`${P.pacientes.getPacienteNombre}${r}`;return await d(a,e)},U=()=>{const{setLoading:t}=m(),{accessToken:r}=C(),{setMensaje:e}=b(),{dispatch:a}=N(),[u,E]=f.useState(1),[g,h]=f.useState(1);return f.useEffect(()=>{(async()=>{try{const s={headers:{"Content-Type":"application/json",Authorization:`Bearer ${r||""}`}};t(!0);const o=`${P.pacientes.getPacientesPaginados}${u}`,n=await d(o,s),{status:c,error:l,datos:y}=n;c===200?(a({type:p.SET_PACIENTES,payload:y.pacientes}),E(y.page),h(y.totalPages)):e(l||"Ocurrió un error el obtener los pacientes")}catch{e("Ocurrió un error el obtener los pacientes")}finally{t(!1)}})()},[a,e,r,u,t]),{borrarPaciente:async i=>{try{t(!0);const s=await O(r,i._id),{status:o,error:n,mensaje:c}=s;o===200?(e(c),a({type:p.DELETE_PACIENTE,payload:i})):e(n||"Ocurrió un error al eliminar el paciente")}catch{e("Ocurrió un error al eliminar el paciente")}finally{t(!1)}},pagina:u,totalPages:g,setPagina:E,agregarPaciente:async i=>{try{t(!0);const s=await $(r,i),{error:o,datos:n,mensaje:c,status:l}=s;return l===200?(e(c),a({type:p.SET_PACIENTE_NUEVO,payload:n}),!0):o?(e(o),!1):(e("Ocurrió un error al guardar el paciente"),!1)}catch{e("Ocurrió un error al guardar el paciente")}finally{t(!1)}},editarPaciente:async(i,s)=>{try{t(!0);const o=await w(r,i,s),{error:n,datos:c,mensaje:l,status:y}=o;return y===200?(e(l),a({type:p.SET_PACIENTE_NUEVO,payload:c}),!0):n?(e(n),!1):(e("Ocurrió un error al guardar el paciente"),!1)}catch{e("Ocurrió un error al guardar el paciente")}finally{t(!1)}},obtenerPacientePorId:async i=>{try{t(!0);const s=await A(r,i),{status:o,error:n,datos:c}=s;if(o===200)return a({type:p.SET_PACIENTE,payload:c}),c;e(n||"Ocurrió un error el obtener los datos del paciente")}catch{e("Ocurrió un error el obtener los datos del paciente")}finally{t(!1)}},obtenerPacientePorNombre:async i=>{try{t(!0);const s=await I(r,i),{status:o,error:n,datos:c}=s;if(o===200)return a({type:p.SET_PACIENTE,payload:c}),c;e(n||"Ocurrió un error el obtener los datos del paciente")}catch{e("Ocurrió un error el obtener los datos del paciente")}finally{t(!1)}}}};export{U as a,N as u};
