import{r,T as g,U as h,f as p,a as b,j as e,F as y,A as v,C}from"./index-rKMOL2j9.js";const N=()=>{const[o,c]=r.useState(0),[n,x]=r.useState([]),{setMensaje:a}=r.useContext(g),{accessToken:d}=r.useContext(h);return r.useEffect(()=>{(async()=>{const t=b.publicas.getPromociones,s={headers:{authorization:`Bearer ${d}`}},m=await p(t,s),{error:f,datos:j,status:S}=m;S===200?x(j):a(f||"Error al obtener los datos")})()},[a,d]),r.useEffect(()=>{const t=setInterval(()=>{const s=(o+1)%n.length;c(s)},5e3);return()=>{clearInterval(t)}},[o,n.length]),{promos:n,nextSlide:()=>{const l=(o+1)%n.length;c(l)},prevSlide:()=>{const l=(o-1+n.length)%n.length;c(l)},currentIndex:o}},w=()=>{const[o,c]=r.useState(!1),[n,x]=r.useState(""),{nextSlide:a,prevSlide:d,promos:i,currentIndex:u}=N(),l=t=>{const s=`${t.servicio.nombre}\r ${t.descripcion}`;x(s),c(!0)};return i instanceof Array?i.length>0&&e.jsxs(e.Fragment,{children:[o&&e.jsx(y,{observaciones:n,cerrarFormulario:()=>c(!1)}),e.jsxs("section",{className:"relative flex justify-center max-w-4xl max-h-[500px] h-[60vh] m-auto mb-8",children:[i.length>1&&e.jsx("span",{className:"rounded-md cursor-pointer text-4xl absolute z-10 left-0 top-1/2 flex justify-center items-center rotate-90 transition-transform px-4 bg-[#00000025] hover:bg-[#0000003f] hover:scale-95",onClick:d,children:e.jsx(v,{})}),e.jsx("div",{className:"overflow-hidden flex rounded-lg border border-slate-500",children:i.map(t=>{var s,m;return e.jsxs("figure",{className:"transition-transform duration-500 relative flex-[0_0_100%]",style:{transform:`translateX(-${u*100}%)`},children:[e.jsx("img",{className:"object-cover w-full h-full object-center bg-slate-50",src:((s=t.imagen)==null?void 0:s.secure_url)||((m=t.servicio.imagen)==null?void 0:m.secure_url),alt:t.nombre}),e.jsx("button",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 font-bold text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md py-2 px-4 transition-colors hover:text-color-violeta hover:bg-transparent",onClick:()=>l(t),children:"Reservar"})]},t._id)})}),i.length>1&&e.jsx("span",{className:"rounded-md cursor-pointer text-4xl absolute z-10 right-0 top-1/2 flex justify-center items-center -rotate-90 transition-transform px-4 bg-[#00000025] hover:bg-[#0000003f] hover:scale-95",onClick:a,children:e.jsx(v,{})}),e.jsx("div",{className:" overflow-hidden absolute rounded-xl px-4 py-2 bg-[#00000025] -bottom-10 flex justify-center gap-x-4 m-auto",children:Array.from(i).map((t,s)=>e.jsx("span",{className:`${s===u?"bg-color-violeta translate-y-0":"translate-y-8"} rounded-full w-4 h-4 transition duration-500`},s))})]})]}):null},I=w;function R(){const{setMensaje:o}=r.useContext(g),{accessToken:c}=r.useContext(h),[n,x]=r.useState([]);return r.useEffect(()=>{(async()=>{const d=b.publicas.getServicios,i={headers:{authorization:`Bearer ${c}`}},u=await p(d,i),{error:l,datos:t,status:s}=u;s===200?x(t):o(l||"Error al obtener los servicios")})()},[o,c]),e.jsxs("main",{className:"grid py-8 px-4 gap-8",children:[e.jsx("h1",{className:"text-color-violeta font-betonga font-bold text-3xl text-center",children:"Servicios"}),e.jsx(I,{}),e.jsx("section",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-8",children:n instanceof Array&&n.map(a=>a.nombre!=="admin"&&e.jsx(C,{servicio:a},a._id))})]})}export{R as default};