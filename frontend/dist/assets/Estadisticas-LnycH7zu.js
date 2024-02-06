import{j as e,r as x,d as j,x as T,m as w,u as R,y as b,z as $,B as k}from"./index-eyZDGxlY.js";import{T as I}from"./TransitionNumber-UPsjx5NY.js";import{u as y}from"./useObserver-6YU-PPv7.js";import{f as N,a as v,u as D}from"./useUserContext-o9xrNTqb.js";import{u as C}from"./useForm-XXMsuw_5.js";import{B as h}from"./Button-gaWcEQck.js";import{L as E}from"./LabelInput-hKgQ6xdJ.js";import{D as V}from"./Dropdown-76wuP7T9.js";const F=({cantidadEstados:s})=>{const a=Object.values(s).reduce((t,r)=>t+r);return s&&e.jsxs("article",{className:"grid gap-4 py-8 px-4 border border-black rounded-lg md:col-span-2 md:text-xl",children:[e.jsx("h2",{className:"font-betonga font-bold text-color-violeta text-xl text-center md:text-2xl",children:"Estados de reservas"}),e.jsxs("ul",{className:"grid gap-4 grid-cols-2",children:[Object.entries(s).map(([t,r])=>e.jsxs("li",{className:`text-center grid justify-center text-white rounded-lg ${t}`,children:[t," ",e.jsx(I,{to:r})]},t)),e.jsxs("li",{className:"grid w-full text-center text-white rounded-lg bg-color-violeta",children:["Total ",e.jsx("span",{children:a})]})]})]})},_=({horario:s,index:a})=>{const t=x.useRef(),{isVisible:r}=y(t);return e.jsxs("ul",{className:`${r?"animate-fadeIn":""} grid gap-2 p-4 pb-2 border border-black rounded-lg bg-color-logo font-semibold`,ref:t,children:[e.jsx("li",{className:"bg-color-violeta text-white rounded-full m-auto w-8 h-8 grid place-content-center",children:a+1}),e.jsxs("li",{className:"grid py-4 grid-flow-col justify-between border-b border-black ",children:[e.jsx("span",{children:"Día"}),s.dia]}),e.jsxs("li",{className:"grid py-4 grid-flow-col justify-between border-b border-black ",children:[e.jsx("span",{children:"Hora"}),s.hora]}),e.jsxs("li",{className:"text-end grid py-4 grid-flow-col justify-between ",children:[e.jsx("span",{children:"Reservas"}),s.cantidad]})]},s.dia+s.hora)},L=({horarios:s})=>s instanceof Array&&e.jsxs("article",{className:"grid grid-rows-[auto_1fr] grid-cols-2 gap-4 pt-8 md:col-span-4 text-color-violeta tracking-wider",children:[e.jsx("h2",{className:"font-betonga font-bold text-color-violeta text-xl text-center col-span-full md:text-2xl",children:"Horarios Más Solicitados"}),s.map((a,t)=>e.jsx(_,{horario:a,index:t},t))]}),P=({gananciasTotales:s,perdidasTotales:a,pendientesTotales:t})=>s&&e.jsxs("article",{className:"grid grid-cols-2 border gap-2 border-black text-color-violeta py-8 rounded-lg md:text-xl md:col-span-2",children:[e.jsxs("ul",{className:"text-center grid  items-center col-span-full",children:[e.jsx("li",{className:"font-betonga font-bold text-xl md:text-2xl ",children:"Pagas"}),e.jsxs("li",{className:"font-bold Pago m-auto p-2 rounded-xl text-white",children:["$ ",s.toFixed(2)]})]}),e.jsxs("ul",{className:"text-center grid  items-center",children:[e.jsx("li",{className:"font-betonga font-bold text-xl md:text-2xl",children:"Pendientes"}),e.jsxs("li",{className:"font-bold Pendiente m-auto p-2 rounded-xl text-white",children:["$ ",t.toFixed(2)]})]}),e.jsxs("ul",{className:"text-center grid  items-center",children:[e.jsx("li",{className:"font-betonga font-bold text-xl md:text-2xl",children:"Canceladas"}),e.jsxs("li",{className:"font-bold Cancelada m-auto p-2 rounded-xl text-white",children:["$ ",a.toFixed(2)]})]})]}),z=({servicio:s,index:a})=>{var n;const t=x.useRef(),{isVisible:r}=y(t);return e.jsxs("ul",{className:`${r?"animate-fadeIn":""} relative grid gap-2 p-4 pb-2 border border-black rounded-lg text-lg bg-color-logo font-semibold`,ref:t,children:[r&&e.jsx("img",{src:(n=s.imagen)==null?void 0:n.secure_url,alt:s.servicio,className:"aspect-square w-full object-cover h-52 rounded-lg"}),e.jsx("li",{className:"bg-color-violeta text-white rounded-full m-auto w-8 h-8 grid place-content-center",children:a+1}),e.jsxs("li",{className:"py-4 capitalize grid border-b border-black text-end ",children:[e.jsx("span",{className:"text-start",children:"Servicio"}),s.servicio]}),e.jsxs("li",{className:"py-4 capitalize text-end grid border-b border-black ",children:[e.jsx("span",{className:"text-start",children:"Tratamiento"}),s.tratamiento]}),e.jsxs("li",{className:"py-4 capitalize grid grid-flow-col justify-between",children:[e.jsx("span",{children:"Cantidad"}),s.cantidad]})]})},O=({servicios:s})=>s&&e.jsxs("article",{className:"grid grid-rows-[auto_1fr] md:grid-cols-2 gap-4 pt-8 md:col-span-4 text-color-violeta",children:[e.jsx("h2",{className:"font-betonga font-bold text-xl text-center col-span-full md:text-2xl",children:"Servicios y Tratamientos Más Solicitados"}),s instanceof Array&&s.map((a,t)=>e.jsx(z,{index:t,servicio:a},t))]}),B=({mes:s,cantidadReservas:a,estados:t,pacienteMasReservas:r,servicioMasSolicitado:n,ganancias:i})=>{const l=x.useRef(),{isVisible:o}=y(l);return e.jsxs("section",{className:`${o?"animate-fadeIn":""} grid gap-2 w-full border border-black bg-color-logo  rounded-lg pt-4 px-2 font-bold [&>ul>li>span>svg]:text-red-600`,ref:l,children:[e.jsx("h3",{className:"grid text-center text-xl uppercase",children:s}),e.jsxs("ul",{className:"border-b border-black grid gap-4 p-4 ",children:[e.jsxs("li",{className:"grid grid-flow-col justify-between",children:["Reservas: ",e.jsx("span",{children:a||0})]}),e.jsxs("li",{className:"grid grid-flow-col justify-between",children:["Ganancias: ",e.jsxs("span",{children:["$ ",i.toFixed(2)||0]})]})]}),e.jsxs("ul",{className:"border-b border-black grid gap-4 p-4 ",children:[e.jsxs("li",{className:"grid grid-flow-col justify-between",children:["Paciente con mas reservas:"," ",e.jsx("span",{className:"capitalize",children:(r==null?void 0:r.nombre)||e.jsx(j,{})})]}),e.jsxs("li",{className:"grid grid-flow-col justify-between",children:["Cantidad: ",e.jsx("span",{children:(r==null?void 0:r.cantidad)||0})]})]}),e.jsxs("ul",{className:"border-b border-black grid gap-4 p-4 ",children:[e.jsxs("li",{className:"grid grid-flow-col justify-between",children:["Servicio mas solicitado:",e.jsx("span",{className:"capitalize",children:(n==null?void 0:n.servicio)||e.jsx(j,{})})]}),e.jsxs("li",{className:"grid grid-flow-col justify-between",children:["Tratamiento mas solicitado:",e.jsxs("span",{children:[" ",(n==null?void 0:n.tratamiento)||e.jsx(j,{})]})]})]}),e.jsxs("ul",{className:"grid gap-4 p-4 ",children:[e.jsx("li",{className:"text-center font-bold",children:"Reservas"}),e.jsxs("li",{className:"Cancelada grid grid-flow-col justify-between rounded-md px-4 text-white py-2",children:["Canceladas: ",e.jsx("span",{children:t.Cancelada})]}),e.jsxs("li",{className:"Pendiente grid grid-flow-col justify-between rounded-md px-4 text-white py-2",children:["Pendientes ",e.jsx("span",{children:t.Pendiente})]}),e.jsxs("li",{className:"Pago grid grid-flow-col justify-between rounded-md px-4 text-white py-2",children:["Pagas: ",e.jsx("span",{children:t.Pago})]})]})]})},q=({datos:s})=>{const[a,t]=x.useState(window.innerWidth),r=Math.max(...s.map(n=>n.ganancias));return x.useEffect(()=>{const n=()=>{t(window.innerWidth)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),s&&s.length>1&&e.jsxs("div",{className:"w-full grid grid-rows-[auto_1fr] gap-2 bg-color-logo rounded-lg p-4 pb-2 border border-black md:col-span-full md:grid-cols-12 md:h-80",children:[e.jsx("h2",{className:"text-lg font-semibold text-color-violeta font-betonga text-center col-span-full md:text-2xl",children:"Ingresos"}),r&&e.jsxs("small",{className:"absolute",children:["* Máximo $",r]}),s.map((n,i)=>e.jsxs("div",{className:"grid gap-2 relative md:grid-rows-[1fr_auto] md:items-end ",children:[e.jsx("div",{className:"bg-blue-500 text-xs text-white grid items-center rounded [&>span]:hover:opacity-100 [&>span]:hover:scale-100 h-8",style:a>768?{height:`${n.ganancias/r*100||0}%`}:{width:`${n.ganancias/r*100||0}%`},title:`$ ${n.ganancias}`,children:e.jsxs("span",{className:"absolute text-center opacity-0 scale-0 top-1/2 -translate-y-1/2 right-0 bg-color-violeta font-bold p-2 rounded-lg transition-[opacity_scale] md:right-1/2 md:translate-x-1/2 md:w-full",children:["$",n.ganancias]})}),e.jsx("p",{className:`text-xs text-gray-700 border-b border-black pb-2 ${i===s.length-1?"border-none":""} md:text-center md:border-none`,children:n.mes})]},n.mes))]})},f=()=>{const s=x.useContext(T);if(s===void 0)throw new Error("usePacientes must be used within a PacientesProvider");return s},H=()=>{const{reservas:s}=f(),a=x.useRef();return x.useEffect(()=>{a.current&&a.current.scrollIntoView({behavior:"smooth",block:"start"})},[]),s instanceof Array&&e.jsxs("article",{className:"grid gap-2 col-span-full md:grid-cols-2  md:gap-4",ref:a,children:[e.jsx(q,{datos:s}),s.map(t=>e.jsx(B,{mes:t.mes,cantidadReservas:t.cantidadReservas,estados:t.estados,ganancias:t.ganancias,pacienteMasReservas:t.pacienteMasReservas,servicioMasSolicitado:t.servicioMasSolicitado},t.mes))]})},M=async s=>{const a={headers:{"Content-Type":"application/json",Authorization:`Bearer ${s||""}`}},t=v.estadisticas.reservas;return await N(t,a)},G=async(s,a)=>{const t={headers:{"Content-Type":"application/json",Authorization:`Bearer ${s||""}`}},r=`${v.estadisticas.reservasAno}${a}`;return await N(r,t)},W=async(s,a,t)=>{const r={headers:{"Content-Type":"application/json",Authorization:`Bearer ${s||""}`}},n=`${v.estadisticas.reservasMes}${a}/${t}`;return await N(n,r)},A=()=>{const{setLoading:s}=w(),{accessToken:a}=D(),{setMensaje:t}=R(),{dispatch:r}=f();return x.useEffect(()=>{(async()=>{s(!0);try{const o=await M(a),{status:c,error:d,datos:m}=o;c===200?r({type:b.SET_ESTADISTICAS_RESERVAS_TODAS,payload:m}):t(d||"Ocurrió un error el obtener las estadísticas de las reservas del año")}catch{t("Ocurrió un error el obtener las estadisticas de las reservas del año")}finally{s(!1)}})()},[r,t,a,s]),{obtenerReservasDelAno:async l=>{try{s(!0);const o=await G(a,l),{status:c,error:d,datos:m}=o;c===200?r({type:b.SET_ESTADISTICAS_RESERVAS,payload:m}):t(d||"Ocurrió un error el obtener las estadísticas de las reservas del año")}catch{t("Ocurrió un error el obtener las estadisticas de las reservas del año")}finally{s(!1)}},obtenerReservasDelMes:async(l,o)=>{try{s(!0);const c=await W(a,l,o),{status:d,error:m,datos:u}=c;d===200?r({type:b.SET_ESTADISTICAS_RESERVAS,payload:u}):t(m||"Ocurrió un error el obtener las estadísticas de las reservas del mes")}catch{t("Ocurrió un error el obtener las estadisticas de las reservas del mes")}finally{s(!1)}}}},U={year:""},J={year:{required:!0,minLength:4,maxLength:4}},K=({setAno:s})=>{const{loading:a}=w(),{obtenerReservasDelAno:t}=A(),{errors:r,values:n,handleChange:i,validateForm:l,resetForm:o}=C(U,J),c=async d=>{d.preventDefault();const m=n.year;l()&&(s(m),await t(m),o())};return e.jsxs("form",{className:"grid gap-2 border border-black p-4 rounded-lg md:col-start-2 md:col-end-4 bg-color-logo",children:[e.jsx(E,{errors:r,labelText:"Ingresa un Año",min:4,name:"year",onChange:i,type:"number",placeholder:2024,value:n.year,maxLength:4,minLength:4}),e.jsx(h,{bgColor:!0,className:"mt-4  w-full",disabled:a,tipo:"submit",texto:"Buscar",onClickFunction:c})]})},Q={year:"",mes:""},X={year:{required:!0,minLength:4,maxLength:4},mes:{required:!0}},Y=({setAno:s,setMes:a})=>{const{loading:t}=w(),{obtenerReservasDelMes:r}=A(),{errors:n,values:i,handleChange:l,validateForm:o,resetForm:c}=C(Q,X),d=async u=>{u.preventDefault();const g=i.year,p=i.mes;s(g),o()&&(await r(g,p),c())},m=(u,g)=>{const p=g.target.textContent;a(p),l({target:{name:u,value:p}})};return e.jsxs("form",{className:"grid gap-2 border border-black p-4 rounded-lg md:col-start-2 md:col-end-4 bg-color-logo",children:[e.jsx(E,{className:"mb-4",errors:n,labelText:"Ingresa un Año",min:4,name:"year",onChange:l,type:"number",placeholder:2024,value:i.year,maxLength:4,minLength:4}),e.jsx("label",{children:"Elige un mes"}),n.mes&&e.jsxs("small",{className:"text-red-600",children:["* ",n.mes]}),e.jsx(V,{name:"Meses",list:$,onClickFunction:u=>{m("mes",u)}}),e.jsx(h,{bgColor:!0,disabled:t,tipo:"submit",texto:"Buscar",onClickFunction:d,className:"mt-4 w-full"})]})},Z=()=>{const[s,a]=x.useState(""),[t,r]=x.useState(""),[n,i]=x.useState(!1),{dispatch:l,reservas:o}=f(),c=()=>{l({type:b.SET_ESTADISTICAS_RESERVAS,payload:null})},d=()=>{a(""),r(""),c(),i(!n)};return e.jsxs("section",{className:"text-color-violeta flex flex-col gap-4 md:grid md:col-span-4 md:grid-cols-4",children:[e.jsxs("h2",{className:"text-xl font-bold font-betonga text-center grid col-span-full md:text-2xl ",children:["Datos del ",n?"mes":"año",e.jsxs("span",{className:"text-sm font-semibold text-gray-500 md:text-base",children:[t?`${t} de`:""," ",s]})]}),n?e.jsx(Y,{setAno:a,setMes:r}):e.jsx(K,{setAno:a}),e.jsx(h,{className:"grid grid-flow-col gap-2 col-start-2 col-end-4 w-full",texto:`Buscar por ${n?"año":"mes"}`,onClickFunction:d,icono:e.jsx(k,{})}),o&&e.jsx(h,{tipo:"button",texto:"Limpiar",onClickFunction:c,className:"grid grid-flow-col gap-2 col-start-2 col-end-4 w-full"}),o&&e.jsx(H,{})]})},ie=()=>{const{reservasTodas:s}=f();return e.jsx("main",{className:"flex flex-col py-4 px-2",children:e.jsxs("section",{className:"grid gap-4 max-w-6xl m-auto w-full h-full md:grid-cols-4 md:gap-y-8",children:[e.jsx(P,{gananciasTotales:s.gananciasTotales,perdidasTotales:s.perdidasTotales,pendientesTotales:s.pendientesTotales}),e.jsx(F,{cantidadEstados:s.cantidadEstados}),e.jsx(L,{horarios:s.horarios}),e.jsx(O,{servicios:s.servicios}),e.jsx(Z,{})]})})};export{ie as default};
