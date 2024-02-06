import{j as o,o as I,R as D,u as E,m as q,r as b,a as A,e as R}from"./index-eyZDGxlY.js";import{u as L}from"./useForm-XXMsuw_5.js";import{B as j}from"./Button-gaWcEQck.js";import{u as _,a as O}from"./useTratamientos-EU6NZQm0.js";import{L as c}from"./LabelInput-hKgQ6xdJ.js";import{D as V}from"./Dropdown-76wuP7T9.js";import{g as M}from"./getServiciosNombresYTratamientos-6AjgGPY9.js";import{u as B}from"./useUserContext-o9xrNTqb.js";function U(e){const r=new FormData;return r.append("nombre",e.nombre.toLowerCase()),r.append("descripcion",e.descripcion),r.append("costoTotal",e.costoTotal),r.append("tiempo",e.tiempo),r.append("sesiones",e.sesiones),r.append("enPromocion",e.enPromocion),e.enPromocion&&r.append("foto",e.imagen),r}const z=({values:e,errors:r,handleChange:s})=>o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"grid gap-4 py-2 ",children:o.jsx(c,{className:"capitalize",errors:r,disabled:!0,labelText:"Servicio",name:"nombre",onChange:s,type:"text",value:e.nombre,placeholder:"Masaje Estético"})}),o.jsx("div",{className:"grid gap-4 border-t border-black py-2",children:o.jsx(c,{value:e.descripcion,labelText:"Descripcion",name:"descripcion",onChange:s,placeholder:"1 Sesión (Cuerpo completo)",type:"text",errors:r})}),o.jsx("div",{className:"grid gap-4 border-t border-black py-2",children:o.jsx(c,{value:e.tiempo,labelText:"Tiempo",name:"tiempo",onChange:s,placeholder:"50",type:"number",errors:r})}),o.jsx("div",{className:"grid gap-4 border-t border-black py-2",children:o.jsx(c,{value:e.sesiones,labelText:"Sesiones",name:"sesiones",onChange:s,placeholder:"1",type:"number",errors:r})}),o.jsx("div",{className:"grid gap-4 border-t border-black py-2",children:o.jsx(c,{value:e.costoTotal,labelText:"Precio",name:"costoTotal",onChange:s,placeholder:"1",type:"number",errors:r})})]}),G=({edicion:e,values:r,errors:s,handleChange:l})=>{var t,n;return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"grid grid-flow-col items-center pt-4 gap-4 border-t border-black py-2",children:o.jsx(c,{errors:s,labelText:"En Promoción",name:"enPromocion",onChange:l,type:"checkbox",value:r.enPromocion})}),r.enPromocion&&o.jsxs("div",{className:"grid gap-4 border-t border-b pb-4 border-black py-2",children:[o.jsx("label",{htmlFor:"imagen",children:e?"Nueva imagen:":"Imagen para promoción:"}),o.jsx("input",{name:"imagen",id:"imagen",className:"cursor-pointer border border-black rounded-lg p-4",type:"file",accept:"image/*",onChange:l}),(r.imgPreview||((t=r.imagen)==null?void 0:t.secure_url))&&o.jsxs(o.Fragment,{children:[o.jsx("span",{children:"Imagen actual:"}),o.jsx("img",{className:"justify-self-center aspect-square rounded-lg object-cover object-center",src:r.imgPreview||((n=r.imagen)==null?void 0:n.secure_url),alt:`Imagen de servicio ${r.nombre||""}`})]}),s.imagen&&o.jsx("samp",{className:"error-message",children:s.imagen})]})]})},Y={nombre:{required:!0},costoTotal:{required:!0},sesiones:{required:!0,minValue:1},tiempo:{required:!0},descripcion:{required:!0}},$=e=>({nombre:(e==null?void 0:e.servicio.nombre)||"",descripcion:(e==null?void 0:e.descripcion)||"",tiempo:(e==null?void 0:e.tiempo)||"",costoTotal:(e==null?void 0:e.costoTotal)||"",sesiones:(e==null?void 0:e.sesiones)||"",enPromocion:(e==null?void 0:e.enPromocion)||!1,imagen:(e==null?void 0:e.imagen)||""}),re=()=>{var T;const e=I(),r=(T=e.state)==null?void 0:T.tratamiento,s=e.pathname===D.admin.editarTratamiento,{dispatch:l}=_(),{accessToken:t}=B(),{setMensaje:n}=E(),{loading:f}=q(),{crearTratamiento:h,editarTratamiento:N}=O(),[v]=b.useState($(r)),[u,y]=b.useState([]),{handleChange:d,values:p,validateForm:F,errors:g,resetForm:S}=L(v,Y),C=A();b.useEffect(()=>{s||!s&&(async()=>{try{const i=await M(t,n);i.length&&y(i)}catch{return n("Ocurrió un error"),!1}})()},[t,n,s]);const x=()=>{l({type:R.SET_TRATAMIENTO_FILTRADO,payload:null}),S(),C(-1)},w=async a=>{if(a.preventDefault(),F()){const m=U(p);(s?await N(m,r._id):await h(m))&&x()}else n("Faltan campos requeridos")},k=a=>{const m={target:{name:"nombre",value:a.target.textContent}};d(m)},P=a=>a.map(i=>i.nombre);return o.jsxs("section",{className:"grid gap-8 p-8",children:[o.jsxs("h1",{className:"text-2xl text-color-violeta font-betonga text-center font-bold",children:[s?"Editar":"Crear"," Tratamiento"]}),o.jsxs("form",{className:"animate-toastIn bg-color-logo rounded-lg grid p-4 gap-4 max-w-md w-full m-auto border border-black",onSubmit:w,children:[u.length>0&&o.jsx(V,{name:"Servicios Disponibles",list:P(u),onClickFunction:k}),o.jsx(z,{errors:g,handleChange:d,values:p}),o.jsx(G,{edicion:s,errors:g,handleChange:d,values:p}),o.jsxs("footer",{className:"grid grid-flow-col gap-2",children:[o.jsx(j,{className:"w-full",bgColor:!0,disabled:f,tipo:"submit",texto:"Guardar"}),o.jsx(j,{onClickFunction:x,texto:"Cerrar",tipo:"button",className:"w-full"})]})]})]})};export{re as default};
