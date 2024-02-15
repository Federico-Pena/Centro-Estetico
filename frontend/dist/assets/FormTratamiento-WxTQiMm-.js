import{j as o,k as I,R as D,u as E,r as u,a as q,d as A}from"./index-YAdz76Jm.js";import{u as L}from"./useForm-kpLBmbY3.js";import{B as f}from"./Button-qbGwCLcH.js";import{u as R,a as _}from"./useTratamientos-H5YPj5Ai.js";import{L as c}from"./LabelInput-iD2B8GI7.js";import{D as O}from"./Dropdown-UufBkZzb.js";import{g as V}from"./getServiciosNombresYTratamientos-ybwHkVIj.js";import{a as M,u as B}from"./useLoaderContext-_SMLR0xo.js";function U(e){const r=new FormData;return r.append("nombre",e.nombre.toLowerCase()),r.append("descripcion",e.descripcion),r.append("costoTotal",e.costoTotal),r.append("tiempo",e.tiempo),r.append("sesiones",e.sesiones),r.append("enPromocion",e.enPromocion),e.enPromocion&&r.append("foto",e.imagen),r}const $=({values:e,errors:r,handleChange:s})=>o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"grid gap-4 py-2 ",children:o.jsx(c,{className:"capitalize",errors:r,disabled:!0,labelText:"Servicio",name:"nombre",onChange:s,type:"text",value:e.nombre,placeholder:"Masaje Estético"})}),o.jsx("div",{className:"grid gap-4 border-t border-black py-2",children:o.jsx(c,{value:e.descripcion,labelText:"Descripcion",name:"descripcion",onChange:s,placeholder:"1 Sesión (Cuerpo completo)",type:"text",errors:r})}),o.jsx("div",{className:"grid gap-4 border-t border-black py-2",children:o.jsx(c,{value:e.tiempo,labelText:"Tiempo",name:"tiempo",onChange:s,placeholder:"50",type:"number",errors:r})}),o.jsx("div",{className:"grid gap-4 border-t border-black py-2",children:o.jsx(c,{value:e.sesiones,labelText:"Sesiones",name:"sesiones",onChange:s,placeholder:"1",type:"number",errors:r})}),o.jsx("div",{className:"grid gap-4 border-t border-black py-2",children:o.jsx(c,{value:e.costoTotal,labelText:"Precio",name:"costoTotal",onChange:s,placeholder:"1",type:"number",errors:r})})]}),z=({edicion:e,values:r,errors:s,handleChange:l})=>{var t,n;return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"grid grid-flow-col items-center pt-4 gap-4 border-t border-black py-2",children:o.jsx(c,{errors:s,labelText:"En Promoción",name:"enPromocion",onChange:l,type:"checkbox",value:r.enPromocion})}),r.enPromocion&&o.jsxs("div",{className:"grid gap-4 border-t border-b pb-4 border-black py-2",children:[o.jsx("label",{htmlFor:"imagen",children:e?"Nueva imagen:":"Imagen para promoción:"}),o.jsx("input",{name:"imagen",id:"imagen",className:"cursor-pointer border border-black rounded-lg p-4",type:"file",accept:"image/*",onChange:l}),(r.imgPreview||((t=r.imagen)==null?void 0:t.secure_url))&&o.jsxs(o.Fragment,{children:[o.jsx("span",{children:"Imagen actual:"}),o.jsx("img",{className:"justify-self-center aspect-square rounded-lg object-cover object-center",src:r.imgPreview||((n=r.imagen)==null?void 0:n.secure_url),alt:`Imagen de servicio ${r.nombre||""}`})]}),s.imagen&&o.jsx("samp",{className:"error-message",children:s.imagen})]})]})},G={nombre:{required:!0},costoTotal:{required:!0},sesiones:{required:!0,minValue:1},tiempo:{required:!0},descripcion:{required:!0,pattern:/^[^-]*$/,message:"La descripción no debe contener guiones."}},Y=e=>({nombre:(e==null?void 0:e.servicio.nombre)||"",descripcion:(e==null?void 0:e.descripcion)||"",tiempo:(e==null?void 0:e.tiempo)||"",costoTotal:(e==null?void 0:e.costoTotal)||"",sesiones:(e==null?void 0:e.sesiones)||"",enPromocion:(e==null?void 0:e.enPromocion)||!1,imagen:(e==null?void 0:e.imagen)||""}),re=()=>{var T;const e=I(),r=(T=e.state)==null?void 0:T.tratamiento,s=e.pathname===D.admin.editarTratamiento,{dispatch:l}=R(),{accessToken:t}=M(),{setMensaje:n}=E(),{loading:j}=B(),{crearTratamiento:h,editarTratamiento:N}=_(),[v]=u.useState(Y(r)),[b,y]=u.useState([]),{handleChange:m,values:p,validateForm:F,errors:g,resetForm:S}=L(v,G),w=q();u.useEffect(()=>{s||!s&&(async()=>{try{const i=await V(t,n);i.length&&y(i)}catch{return n("Ocurrió un error"),!1}})()},[t,n,s]);const x=()=>{l({type:A.SET_TRATAMIENTO_FILTRADO,payload:null}),S(),w(-1)},C=async a=>{if(a.preventDefault(),F()){const d=U(p);(s?await N(d,r._id):await h(d))&&x()}else n("Faltan campos requeridos")},k=a=>{const d={target:{name:"nombre",value:a.target.textContent}};m(d)},P=a=>a.map(i=>i.nombre);return o.jsxs("section",{className:"grid grid-rows-[auto_1fr]  gap-4 px-4 py-8",children:[o.jsxs("h1",{className:"text-2xl text-color-violeta font-betonga text-center font-bold",children:[s?"Editar":"Crear"," Tratamiento"]}),o.jsxs("form",{className:"animate-fadeIn rounded-lg grid p-4 gap-4 max-w-md w-full self-start justify-self-center bg-color-verde-blanco border border-gray-300 shadow-lg",onSubmit:C,children:[b.length>0&&o.jsx(O,{name:"Servicios Disponibles",list:P(b),onClickFunction:k}),o.jsx($,{errors:g,handleChange:m,values:p}),o.jsx(z,{edicion:s,errors:g,handleChange:m,values:p}),o.jsxs("footer",{className:"grid grid-flow-col gap-2",children:[o.jsx(f,{className:"w-full",bgColor:!0,disabled:j,tipo:"submit",texto:"Guardar"}),o.jsx(f,{onClickFunction:x,texto:"Cerrar",tipo:"button",className:"w-full"})]})]})]})};export{re as default};
