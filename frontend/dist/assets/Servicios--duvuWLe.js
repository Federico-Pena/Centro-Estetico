import{r as i,a as g,b as p,f as h,c as b,j as e,F as y,A as v,C as N}from"./index-6lSq4eNo.js";const C=()=>{const[r,l]=i.useState(0),[o,u]=i.useState([]),{setMensaje:a}=g(),{accessToken:d}=p();return i.useEffect(()=>{(async()=>{const s=b.publicas.getPromociones,t={headers:{authorization:`Bearer ${d}`}},m=await h(s,t),{error:f,datos:j,status:S}=m;S===200?u(j):a(f||"Error al obtener los datos")})()},[a,d]),i.useEffect(()=>{const s=setInterval(()=>{const t=(r+1)%o.length;l(t)},5e3);return()=>{clearInterval(s)}},[r,o.length]),{promos:o,nextSlide:()=>{const n=(r+1)%o.length;l(n)},prevSlide:()=>{const n=(r-1+o.length)%o.length;l(n)},currentIndex:r}},w=()=>{const[r,l]=i.useState(!1),[o,u]=i.useState(""),{nextSlide:a,prevSlide:d,promos:c,currentIndex:x}=C(),n=s=>{const t=`${s.servicio.nombre}\r ${s.descripcion}`;u(t),l(!0)};return c instanceof Array?c.length>0&&e.jsxs(e.Fragment,{children:[r&&e.jsx(y,{observaciones:o,cerrarFormulario:()=>l(!1)}),e.jsxs("section",{className:"relative flex justify-center max-w-4xl   m-auto mb-8",children:[c.length>1&&e.jsx("span",{className:"rounded-md cursor-pointer text-4xl absolute z-10 left-0 top-1/2 flex justify-center items-center rotate-90 transition-transform px-4 bg-[#00000025] hover:bg-[#0000003f] hover:scale-95",onClick:d,children:e.jsx(v,{})}),e.jsx("div",{className:"overflow-hidden flex rounded-lg border border-slate-500",children:c.map(s=>{var t,m;return e.jsxs("figure",{className:"transition-transform duration-500 relative flex-[0_0_100%]",style:{transform:`translateX(-${x*100}%)`},children:[e.jsx("img",{className:"object-cover w-full h-full bg-slate-50 aspect-square max-h-[500px]",src:((t=s.imagen)==null?void 0:t.secure_url)||((m=s.servicio.imagen)==null?void 0:m.secure_url),alt:s.nombre}),e.jsx("button",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 font-bold text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-color-violeta hover:bg-transparent",onClick:()=>n(s),children:"Reservar"})]},s._id)})}),c.length>1&&e.jsx("span",{className:"rounded-md cursor-pointer text-4xl absolute z-10 right-0 top-1/2 flex justify-center items-center -rotate-90 transition-transform px-4 bg-[#00000025] hover:bg-[#0000003f] hover:scale-95",onClick:a,children:e.jsx(v,{})}),e.jsx("div",{className:" overflow-hidden absolute rounded-xl px-4 py-2 bg-[#00000025] -bottom-10 flex justify-center gap-x-4 m-auto",children:Array.from(c).map((s,t)=>e.jsx("span",{className:`${t===x?"bg-color-violeta translate-y-0":"translate-y-8"} rounded-full w-4 h-4 transition duration-500`},t))})]})]}):null},I=w;function R(){const{setMensaje:r}=g(),{accessToken:l}=p(),[o,u]=i.useState([]);return i.useEffect(()=>{(async()=>{const d=b.publicas.getServicios,c={headers:{authorization:`Bearer ${l}`}},x=await h(d,c),{error:n,datos:s,status:t}=x;t===200?u(s):r(n||"Error al obtener los servicios")})()},[r,l]),e.jsxs("main",{className:"grid py-8 px-4 gap-8",children:[e.jsx("h1",{className:"text-color-violeta font-betonga font-bold text-3xl text-center",children:"Servicios"}),e.jsx(I,{}),e.jsx("section",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-8",children:o instanceof Array&&o.map(a=>a.nombre!=="admin"&&e.jsx(N,{servicio:a},a._id))})]})}export{R as default};
