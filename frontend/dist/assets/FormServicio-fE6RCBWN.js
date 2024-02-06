import{r as m,j as e,D as T,o as P,a as R,R as A,u as V,c as _}from"./index-eyZDGxlY.js";import{u as O}from"./useForm-XXMsuw_5.js";import{B as n}from"./Button-gaWcEQck.js";import{u as $,a as z}from"./useServicio-bNlRR_FU.js";import{C as M}from"./CardServicio-JjuDaq4M.js";import{T as b}from"./TextAreaLabel-g80gc0D1.js";import{L as w}from"./LabelInput-hKgQ6xdJ.js";import"./useUserContext-o9xrNTqb.js";import"./formatFechaParaUser-QfX3A7Bl.js";import"./useFormReserva-FiSLYWgK.js";import"./compararFechas-CWI27YET.js";import"./useReservasContext-7CxyEjNX.js";import"./useObserver-6YU-PPv7.js";function G(o){const i=new FormData;return i.append("nombre",o.nombre.toLowerCase()),i.append("foto",o.imagen),i.append("descripcion",o.descripcion),i.append("descripcionSecundaria",o.descripcionSecundaria),i.append("tituloBeneficios",o.tituloBeneficios),o.beneficiosLista.forEach((s,t)=>{i.append(`beneficiosLista[${t}]`,s)}),i}const H=({handleChange:o,values:i,closeDialog:s})=>{const[t,c]=m.useState(""),d=a=>{a.preventDefault(),t.trim()&&(o({target:{name:"beneficiosLista",value:[...i.beneficiosLista,t]}}),c(""))},r=a=>{const l=i.beneficiosLista.filter(g=>g!==a);o({target:{name:"beneficiosLista",value:l}})};return e.jsx("dialog",{open:!0,className:"fixed inset-0 h-screen w-full z-50 bg-gradient-to-b from-white to-color-verde-blanco grid p-4 ",children:e.jsxs("form",{className:"animate-fadeIn grid gap-4 rounded-lg w-full max-w-lg m-auto p-4 bg-color-logo border border-black",title:"Formulario beneficio",children:[e.jsx(b,{name:"beneficiosLista",placeholder:"Beneficio",onChange:a=>c(a.target.value),value:t}),e.jsxs("strong",{className:"text-center text-color-violeta font-betonga text-xl tracking-wider",children:["Beneficios: ",i.beneficiosLista.length||0]}),e.jsx("div",{className:"grid gap-4 max-h-72 overflow-auto p-4",children:i.beneficiosLista.map((a,l)=>e.jsxs("ul",{className:"grid gap-4 border border-slate-500 rounded-lg p-4 items-center grid-cols-[auto_1fr_auto]",children:[e.jsx("li",{children:l+1}),e.jsx("li",{children:a}),e.jsx("li",{className:"[&>svg]:text-xl [&>svg]:cursor-pointer hover:[&>svg]:scale-110 hover:[&>svg]:text-color-violeta [&>svg]:transition",onClick:()=>r(a),children:e.jsx(T,{})})]},l))}),e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsx(n,{bgColor:!0,tipo:"submit",texto:"Agregar",onClickFunction:d}),e.jsx(n,{tipo:"button",texto:"Volver",onClickFunction:s})]})]})})},U=({servicio:o,values:i,handleChange:s,errors:t,masInfo:c,edicion:d})=>{var r,a;return e.jsxs("section",{className:`grid gap-4 border-t border-slate-500 py-2  ${c?"hidden":""}`,children:[e.jsx("div",{className:"grid gap-4 border-slate-500 py-2",children:e.jsx(w,{className:`${o!=null&&o.nombre?"capitalize":""}`,disabled:!!(o!=null&&o.nombre),value:i.nombre,labelText:"Nombre:",name:"nombre",onChange:s,placeholder:"Drenaje Linfático",type:"text",errors:t})}),e.jsxs("div",{className:"grid gap-4 border-t border-slate-500 py-2",children:[e.jsx("label",{htmlFor:"imagen",children:d?"Cambiar imagen:":"Imagen:"}),e.jsx("input",{name:"imagen",id:"imagen",className:"cursor-pointer border border-slate-500 rounded-lg p-4",type:"file",accept:"image/*",onChange:s}),(i.imgPreview||((r=o.imagen)==null?void 0:r.secure_url))&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Imagen actual"}),e.jsx("img",{className:"justify-self-center aspect-square rounded-lg object-cover object-center",src:i.imgPreview||((a=o.imagen)==null?void 0:a.secure_url),alt:`Imagen de servicio ${i.nombre||""}`})]}),t.imagen&&e.jsxs("small",{className:"text-red-600",children:["* ",t.imagen]})]}),e.jsx("div",{className:"grid gap-4 border-t border-slate-500 py-2",children:e.jsx(b,{name:"descripcion",labelText:"Descripción:",value:i.descripcion,onChange:s,error:t.descripcion,placeholder:"El drenaje linfático es una técnica de masaje suave y ligero que se utiliza para estimular el sistema linfático del cuerpo. El sistema linfático es una red compleja de vasos y ganglios linfáticos que ayudan a eliminar los desechos y el exceso de líquido de los tejidos."})})]})},J=({masInfo:o,values:i,handleChange:s,errors:t,openDialog:c,handleVerServicio:d})=>{var r;return e.jsxs("section",{className:`${o?"":"hidden"}`,children:[e.jsx("div",{className:"grid gap-4 border-t border-slate-500 py-2",children:e.jsx(b,{name:"descripcionSecundaria",labelText:"Descripción Mas info:",value:i.descripcionSecundaria,onChange:s,error:t.descripcionSecundaria,placeholder:"Durante una sesión de drenaje linfático, se aplican movimientos suaves y rítmicos sobre la piel, siguiendo el trayecto de los vasos linfáticos. Estos movimientos tienen como objetivo estimular el flujo de la linfa, un líquido transparente que transporta nutrientes y desechos a través del sistema linfático"})}),e.jsx("div",{className:"grid gap-4 border-t border-slate-500 py-2",children:e.jsx(w,{value:i.tituloBeneficios,labelText:"Titulo Beneficios:",name:"tituloBeneficios",onChange:s,placeholder:"El drenaje linfático puede tener varios beneficios para el cuerpo",type:"text",errors:t})}),e.jsxs("div",{className:"grid gap-4 border-t border-slate-500 py-4",children:[e.jsx(n,{className:"w-full",tipo:"button",texto:"Añadir beneficio",onClickFunction:c}),e.jsxs("p",{children:["Beneficios agregados: ",(r=i.beneficiosLista)==null?void 0:r.length]})]}),t.beneficiosLista&&e.jsxs("small",{className:"text-red-500",children:["* ",t.beneficiosLista]}),e.jsx(n,{className:"w-full my-2",onClickFunction:d,tipo:"button",texto:"Pre-visualizar"})]})},K=({setMasInfo:o,masInfo:i})=>e.jsxs("header",{className:"relative grid justify-between grid-flow-col w-1/2 mx-auto",children:[e.jsx(n,{bgColor:!i,onClickFunction:()=>{o(!1)},texto:"1",tipo:"button"}),e.jsx(n,{bgColor:i,onClickFunction:()=>{o(!0)},texto:"2",tipo:"button"})]}),Q={nombre:{required:!0},imagen:{required:!0},descripcion:{required:!0},descripcionSecundaria:{required:!0},tituloBeneficios:{required:!0},beneficiosLista:{minItems:1}},W={nombre:"",imagen:null,imgPreview:"",descripcion:"",descripcionSecundaria:"",tituloBeneficios:"",beneficiosLista:[]},ue=()=>{var S;const o=P(),i=(S=o.state)==null?void 0:S.servicio,s=R(),t=o.pathname===A.admin.editarServicio,{dispatch:c}=$(),{setMensaje:d}=V(),[r,a]=m.useState(!1),[l,g]=m.useState(!1),[p,f]=m.useState(!1),[j]=m.useState(i||W),C=m.useRef(),{editarServicio:y,agregarServicio:F}=z(),{handleChange:x,values:u,validateForm:L,errors:h,resetForm:D}=O(j,Q),I=()=>{a(!0)},k=()=>{a(!1)},B=()=>{f(!0),window.scrollTo({behavior:"smooth",top:0})},v=()=>{f(!1),D(),c({type:_.SET_SERVICIO,payload:null}),s(-1)},q=async E=>{if(E.preventDefault(),L()){const N=G(u);(t?await y(N):await F(N))&&v()}else d("Faltan campos requeridos")};return e.jsxs("section",{className:"grid gap-4 px-4 py-8",ref:C,children:[!p&&e.jsx("h1",{className:"uppercase w-full text-center text-color-violeta font-bold font-betonga text-2xl tracking-widest",children:t?"Editar servicio":"Agregar servicio"}),p&&e.jsx(n,{className:"m-auto",onClickFunction:()=>f(!1),texto:"Cerrar",tipo:"button"}),!p&&e.jsxs("form",{onSubmit:q,className:"animate-fadeIn bg-color-logo grid gap-4 px-4 py-8 rounded-lg max-w-lg m-auto w-full border border-black",title:"Formulario agregar servicio",children:[e.jsx(K,{masInfo:l,setMasInfo:g}),e.jsx(U,{edicion:t,errors:h,handleChange:x,masInfo:l,servicio:j,values:u}),e.jsx(J,{errors:h,handleChange:x,handleVerServicio:B,masInfo:l,openDialog:I,values:u}),e.jsxs("footer",{className:"grid grid-flow-col gap-2",children:[e.jsx(n,{className:"w-full",bgColor:!0,tipo:"submit",texto:"Guardar"}),e.jsx(n,{className:"w-full",onClickFunction:v,texto:"Cerrar",tipo:"button"})]})]}),r&&e.jsx(H,{closeDialog:k,handleChange:x,values:u}),p&&e.jsx(M,{servicio:u,className:"m-auto"})]})};export{ue as default};
