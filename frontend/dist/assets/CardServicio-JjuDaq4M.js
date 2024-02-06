import{j as e,g as j,m as y,u as S,r as p,v as I,o as w,R as v}from"./index-eyZDGxlY.js";import{f as F}from"./formatFechaParaUser-QfX3A7Bl.js";import{L as N}from"./LabelInput-hKgQ6xdJ.js";import{u as O}from"./useForm-XXMsuw_5.js";import{T}from"./TextAreaLabel-g80gc0D1.js";import{u as $}from"./useFormReserva-FiSLYWgK.js";import{B as x}from"./Button-gaWcEQck.js";import{u as k}from"./useObserver-6YU-PPv7.js";function f(t){return t.split(" ").map(n=>n[0].toUpperCase()+n.substring(1)).join(" ")}const z=t=>{const n="59894539587",s=`Me interesa hacer la siguiente reserva. 
  Nombre: ${f(t.nombre)}.
  Fecha: ${f(F(`${t.fecha} ${t.hora}`))}.
  Hora: ${t.hora}. 
  Observaciones: ${f(t.observaciones)}.`;window.open(`https://wa.me/${n}?text=${encodeURIComponent(s)}`,"_blank")},E=({values:t,handleSetHora:n,horasDisponibles:s})=>e.jsxs("ul",{className:"grid gap-4 grid-cols-5",children:[e.jsx("li",{className:"col-span-full",children:"Horas disponibles"}),s.map((o,i)=>i!==0&&i!==1&&o.estado!==j.pendiente&&o.estado!==j.pago&&!o.proximaHoraNoDisponible&&e.jsx("li",{className:`p-2 rounded-xl w-full grid place-content-center shadow-md ${o.id.split("T")[1]===t.hora?"col-span-full row-start-2 bg-color-violeta text-slate-50 max-w-md transition-[max-width]":"bg-slate-50 max-w-20 hover:opacity-50 cursor-pointer transition-opacity"}`,onClick:()=>n(o.id.split("T")[1]),children:o.id.split("T")[1]},o.id))]}),L=({values:t,horasDisponibles:n})=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"font-betonga text-color-violeta font-bold capitalize text-center underline underline-offset-4 text-2xl px-4",children:"Resumen"}),t.nombre&&e.jsxs("span",{className:"bg-color-verde-blanco text-color-violeta py-2 px-4 grid grid-cols-[1fr,2fr] rounded capitalize",children:["Nombre ",e.jsx("strong",{className:"text-end text-balance",children:t.nombre})]}),t.fecha&&e.jsxs("span",{className:"bg-color-verde-blanco text-color-violeta py-2 px-4 grid grid-cols-[1fr,2fr] rounded capitalize",children:["Dia"," ",e.jsx("strong",{className:"text-end text-balance",children:F(`${t.fecha} ${t.hora}`)})]}),t.hora&&n.length>0&&e.jsxs("span",{className:"bg-color-verde-blanco text-color-violeta py-2 px-4 grid grid-cols-[1fr,2fr] rounded capitalize",children:["Hora ",e.jsx("strong",{className:"text-end text-balance",children:t.hora})]}),t.observaciones&&e.jsxs("span",{className:"bg-color-verde-blanco text-color-violeta py-2 px-4 grid gap-4 rounded capitalize",children:["Observación ",e.jsx("strong",{className:"text-pretty",children:t.observaciones})]})]}),A={nombre:{required:!0},fecha:{required:!0},hora:{required:!0}},D=({observaciones:t,cerrarFormulario:n})=>{const{loading:s}=y(),{setMensaje:o}=S(),i=p.useRef(),c={nombre:"",fecha:"",hora:"",observaciones:t||""},{errors:r,handleChange:l,values:a,validateForm:d}=O(c,A),{horasDisponibles:u}=$(a.fecha),b=new Date(a.fecha).getDay()===6,C=m=>{m.preventDefault(),d()&&!b&&a.nombre?(z(a),g()):o("Faltan campos requeridos.")},g=()=>{i.current.classList.add("animate-toastOut")},h=m=>{l({target:{name:"hora",value:m}})};return e.jsxs("section",{id:"sectionForm",ref:i,className:"fixed  inset-0 z-50 grid grid-rows-[50px_1fr] p-4 py-8  overflow-auto bg-gradient-to-b from-slate-50 to-color-verde-blanco",onAnimationEnd:m=>{m.target.id==="sectionForm"&&m.animationName!=="fadeIn"&&n()},children:[e.jsx("h1",{className:"font-betonga text-color-violeta font-bold capitalize text-center underline underline-offset-4 text-2xl px-4",children:"Reserva"}),e.jsxs("form",{onSubmit:C,className:"animate-fadeIn grid w-full max-w-md py-8 px-4 rounded-lg bg-color-logo gap-4 m-auto border border-black",children:[e.jsx(N,{errors:r,labelText:"Nombre",name:"nombre",onChange:l,placeholder:"Nombre",type:"text",value:a.nombre}),e.jsx(N,{className:"w-full",errors:r,labelText:"Fecha",name:"fecha",onChange:m=>{l(m),h("")},type:"date",value:a.fecha,min:I.split("T")[0]}),b?e.jsx("span",{className:"p-2 rounded-xl w-full text-center shadow-md bg-color-violeta text-slate-50",children:"* Los días domingos no se realizan reservas"}):null,u.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(E,{horasDisponibles:u,handleSetHora:h,values:a}),r.hora&&e.jsx("small",{className:"text-red-600",children:"* Este campo es requerido"})]}),e.jsx(T,{disabled:!0,value:a.observaciones,placeholder:"Observación",onChange:l,name:"observaciones",labelText:"Observación",error:r.observaciones}),e.jsx(L,{horasDisponibles:u,values:a}),e.jsxs("footer",{className:"grid grid-flow-col pt-8 px-4 gap-4",children:[e.jsx(x,{className:"w-full",tipo:"button",onClickFunction:g,texto:"Volver"}),e.jsx(x,{className:"w-full",bgColor:!0,tipo:"submit",texto:"Enviar",disabled:s})]})]})]})},H=({setOpenInfo:t,imgSrc:n,setOpenForm:s,servicio:o})=>{const i=w(),c=p.useRef(),r=i.pathname===v.user.servicios,l=()=>{c.current.classList.add("animate-toastOut")};return e.jsx("div",{className:"fixed inset-0 bg-color-logo grid place-content-center p-4 z-30",children:e.jsxs("article",{id:"openInfo",onAnimationEnd:a=>{a.target.id==="openInfo"&&a.animationName==="toastOut"&&t(!1)},ref:c,style:{backgroundImage:`linear-gradient(#000000b6, #000000b6),url(${n})`},className:"bg-no-repeat bg-cover bg-center animate-toastIn flex flex-col border border-black rounded-lg overflow-auto gap-8 text-slate-50",children:[e.jsxs("header",{className:"bg-slate-50 grid grid-flow-col gap-2 p-4 sticky top-0 w-full",children:[e.jsx(x,{className:"w-full",tipo:"button",texto:"Volver",onClickFunction:l}),e.jsx(x,{bgColor:!0,className:"w-full",tipo:"button",texto:"Reservar",onClickFunction:()=>r&&s(!0)})]}),e.jsxs("div",{className:"grid gap-8 py-8 max-w-lg mx-auto items-center",children:[e.jsx("h1",{className:"font-betonga font-bold capitalize text-center underline underline-offset-4 text-2xl px-4",children:o.nombre}),o.descripcionSecundaria&&o.descripcionSecundaria.split(".").map(a=>a.trim()&&e.jsxs("p",{className:"px-8",children:[a,"."]},a)),o.beneficiosLista.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"font-betonga font-bold capitalize text-center underline underline-offset-4 text-xl px-4",children:o.tituloBeneficios}),e.jsx("ul",{className:"grid gap-8 list-inside list-decimal",children:o.beneficiosLista.map((a,d)=>e.jsx("li",{className:"px-8",children:a},a+d))})]}),o.tratamientos&&o.tratamientos.length>0&&e.jsx(e.Fragment,{children:o.tratamientos.map((a,d)=>d===0&&e.jsxs("ul",{className:"flex-1 py-4 px-8 list-disc list-inside grid items-end",children:[e.jsxs("li",{children:[a.descripcion,"."]}),e.jsxs("li",{children:["$ ",a.costoTotal,"."]}),e.jsxs("li",{children:[a.tiempo," minutos."]})]},d))})]})]})})},V=({setOpenForm:t,setOpenInfo:n,servicio:s,imgSrc:o})=>{const c=w().pathname===v.user.servicios,r=p.useRef(),{isVisible:l}=k(r);return e.jsxs("article",{className:`${l?"animate-fadeIn":""}  mx-auto flex flex-col border border-black rounded-lg overflow-hidden gap-8 max-w-md`,ref:r,children:[l?e.jsx("img",{className:"w-full h-80 object-cover",src:o,alt:s.nombre}):null,e.jsx("h1",{className:"font-betonga font-bold text-color-violeta capitalize text-center underline underline-offset-4 text-2xl px-4",children:s.nombre}),e.jsx("p",{className:"px-4 text-balance flex-1",children:s.descripcion}),s.tratamientos&&s.tratamientos.length>0&&s.tratamientos.map((a,d)=>d===0&&e.jsxs("ul",{className:"flex-1 py-4 px-8 list-disc list-inside grid items-end",children:[e.jsxs("li",{children:[a.descripcion,"."]}),e.jsxs("li",{children:["$ ",a.costoTotal,"."]}),e.jsxs("li",{children:[a.tiempo," minutos."]})]},d)),e.jsxs("footer",{className:"grid grid-flow-col p-4 gap-2",children:[e.jsx(x,{className:"w-full",tipo:"button",texto:"Ver mas",onClickFunction:()=>n(!0)}),e.jsx(x,{bgColor:!0,className:"w-full",tipo:"button",texto:"Reservar",onClickFunction:()=>c&&t(!0)})]})]},s._id)},J=({servicio:t,className:n})=>{var a;const[s,o]=p.useState(!1),[i,c]=p.useState(!1),r=t.imgPreview||((a=t.imagen)==null?void 0:a.secure_url)||"https://res.cloudinary.com/fotoscloudinary/image/upload/v1698805202/Portfolio/Centro%20Est%C3%A9tico/Servicios/dil9yusbug9ccrmxtgtb.png",l=()=>{c(!1)};return!t||Object.keys(t).length===0?null:e.jsxs(e.Fragment,{children:[i&&e.jsx(D,{observaciones:t.nombre,cerrarFormulario:l}),s?e.jsx(H,{setOpenInfo:o,imgSrc:r,servicio:t,setOpenForm:c}):e.jsx(V,{imgSrc:r,servicio:t,setOpenForm:c,setOpenInfo:o})]})};export{J as C,D as F};
