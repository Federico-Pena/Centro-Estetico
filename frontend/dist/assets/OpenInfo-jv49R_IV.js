import{k as x,R as u,r as p,j as e}from"./index-Hh7_R6wJ.js";import{u as f}from"./useObserver-jBAvkzED.js";import{B as m}from"./Button-Upt60w8G.js";const g=({reservar:s,abrirMasInfo:o,servicio:a,imgSrc:n})=>{const i=x().pathname===u.user.servicios,c=p.useRef(),{isVisible:d}=f(c);return e.jsxs("article",{className:`${d?"animate-fadeIn":""}  mx-auto gap-8 max-w-md flex flex-col w-full border border-black rounded-lg overflow-hidden `,ref:c,children:[d&&e.jsx("img",{className:"w-full h-80 object-cover",src:n,alt:a.nombre}),e.jsx("h1",{className:"font-betonga font-bold text-color-violeta capitalize text-center underline underline-offset-4 text-2xl px-4",children:a.nombre}),e.jsx("p",{className:"px-4 text-balance flex-1",children:a.descripcion}),a.tratamientos&&a.tratamientos.length>0&&a.tratamientos.map((t,l)=>l===0&&e.jsxs("ul",{className:"flex-1 py-4 px-8 list-disc list-inside grid items-end",children:[e.jsxs("li",{children:[t.descripcion,"."]}),e.jsxs("li",{children:["$ ",t.costoTotal,"."]}),e.jsxs("li",{children:[t.tiempo," minutos."]})]},l)),e.jsxs("footer",{className:"grid grid-flow-col p-4 gap-2",children:[e.jsx(m,{className:"w-full",tipo:"button",texto:"Ver mas",onClickFunction:()=>i&&o()}),e.jsx(m,{bgColor:!0,className:"w-full",tipo:"button",texto:"Reservar",onClickFunction:()=>i&&s()})]})]},a._id)},N=({servicio:s,abrirMasInfo:o,reservar:a})=>{var r;const n=s.imgPreview||((r=s.imagen)==null?void 0:r.secure_url)||"https://res.cloudinary.com/fotoscloudinary/image/upload/v1698805202/Portfolio/Centro%20Est%C3%A9tico/Servicios/dil9yusbug9ccrmxtgtb.png";return!s||Object.keys(s).length===0?null:e.jsx(g,{imgSrc:n,servicio:s,reservar:()=>a(s),abrirMasInfo:()=>o(s,n)})},w=({setOpenInfo:s,imgSrc:o,reservar:a,servicio:n})=>{const r=x(),i=p.useRef(),c=r.pathname===u.user.servicios,d=()=>{i.current.classList.add("animate-fadeOut")};return e.jsxs("article",{id:"openInfo",onAnimationEnd:t=>{t.target.id==="openInfo"&&t.animationName==="fadeOut"&&s(!1)},ref:i,style:{backgroundImage:`linear-gradient(#000000b6, #000000b6),url(${o})`},className:"bg-no-repeat bg-cover bg-center animate-fadeIn grid border border-black rounded-lg gap-8 overflow-hidden text-slate-50 m-auto",children:[e.jsxs("div",{className:"grid gap-8 py-8 max-w-lg mx-auto items-center",children:[e.jsx("h1",{className:"font-betonga font-bold capitalize text-center underline underline-offset-4 text-2xl px-4",children:n.nombre}),n.descripcionSecundaria&&n.descripcionSecundaria.split(".").map(t=>t.trim()&&e.jsxs("p",{className:"px-8",children:[t,"."]},t)),n.beneficiosLista.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"font-betonga font-bold capitalize text-center underline underline-offset-4 text-xl px-4",children:n.tituloBeneficios}),e.jsx("ul",{className:"grid gap-8 list-inside list-decimal",children:n.beneficiosLista.map((t,l)=>e.jsx("li",{className:"px-8",children:t},t+l))})]}),n.tratamientos&&n.tratamientos.length>0&&e.jsx(e.Fragment,{children:n.tratamientos.map((t,l)=>l===0&&e.jsxs("ul",{className:"flex-1 py-4 px-8 list-disc list-inside grid items-end",children:[e.jsxs("li",{children:[t.descripcion,"."]}),e.jsxs("li",{children:["$ ",t.costoTotal,"."]}),e.jsxs("li",{children:[t.tiempo," minutos."]})]},l))})]}),e.jsxs("footer",{className:"bg-slate-50 grid grid-flow-col gap-2 p-4",children:[e.jsx(m,{className:"w-full",tipo:"button",texto:"Volver",onClickFunction:()=>c&&d()}),e.jsx(m,{bgColor:!0,className:"w-full",tipo:"button",texto:"Reservar",onClickFunction:()=>c&&a(n)})]})]})};export{N as C,w as O};
