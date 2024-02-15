import{j as e,k,a as D,R as A,r as F,i as E}from"./index-YAdz76Jm.js";import{B as g}from"./Button-qbGwCLcH.js";import{u as z}from"./useForm-kpLBmbY3.js";import{L as n}from"./LabelInput-iD2B8GI7.js";import{D as u}from"./Dropdown-UufBkZzb.js";import{S as I}from"./SelectServicio-mph11qzB.js";import{u as O,a as V}from"./usePaciente-eda74yU_.js";import"./getServiciosNombresYTratamientos-ybwHkVIj.js";import"./useLoaderContext-_SMLR0xo.js";function M(o){let a=new FormData;return a.append("nombre",o.nombre),a.append("fechaDeNac",o.fechaDeNac),a.append("cedula",o.cedula),a.append("edad",o.edad),a.append("sociedad",o.sociedad),a.append("telefono",o.telefono),a.append("nombreContacto2",o.nombreContacto2),a.append("telefonoContacto2",o.telefonoContacto2),a.append("alimentacion",o.alimentacion),a.append("descanso",o.descanso),a.append("hidratacion",o.hidratacion),a.append("alcohol",o.alcohol),a.append("fuma",o.fuma),a.append("alergia",o.alergia),a.append("circulatorio",o.circulatorio),a.append("embarazo",o.embarazo),a.append("operaciones",o.operaciones),a.append("oncologicas",o.oncologicas),a.append("enfermedades",o.enfermedades),a.append("medicamentos",o.medicamentos),a.append("implantes",o.implantes),a.append("tratamiento",o.tratamiento),a.append("servicio",o.servicio),a.append("observaciones",o.observaciones),a.append("foto",o.foto),a}const R=o=>{var m,b,l,s,x;const a=((m=o==null?void 0:o.tratamiento)==null?void 0:m.descripcion)||"",r=(b=o==null?void 0:o.tratamiento)==null?void 0:b.sesiones;let t="";return a&&r!==void 0&&(t=`${a} - ${r} ${r>1?"Sesiones":"Sesión"}`),{nombre:(o==null?void 0:o.nombre)||"",fechaDeNac:(o==null?void 0:o.fechaDeNac)||"",cedula:(o==null?void 0:o.cedula)||"",edad:(o==null?void 0:o.edad)||"",sociedad:(o==null?void 0:o.sociedad)||"",telefono:(o==null?void 0:o.telefono)||"",observaciones:(o==null?void 0:o.observaciones)||"",nombreContacto2:((l=o==null?void 0:o.contactoEmergencia)==null?void 0:l.nombreContacto2)||"",telefonoContacto2:((s=o==null?void 0:o.contactoEmergencia)==null?void 0:s.telefonoContacto2)||"",alimentacion:(o==null?void 0:o.alimentacion)||"",descanso:(o==null?void 0:o.descanso)||"",hidratacion:(o==null?void 0:o.hidratacion)||"",alcohol:(o==null?void 0:o.alcohol)||"",fuma:(o==null?void 0:o.fuma)||"",alergia:(o==null?void 0:o.alergia)||"",circulatorio:(o==null?void 0:o.circulatorio)||"",embarazo:(o==null?void 0:o.embarazo)||"",operaciones:(o==null?void 0:o.operaciones)||"",oncologicas:(o==null?void 0:o.oncologicas)||"",enfermedades:(o==null?void 0:o.enfermedades)||"",medicamentos:(o==null?void 0:o.medicamentos)||"",implantes:(o==null?void 0:o.implantes)||"",tratamiento:t||"",servicio:((x=o==null?void 0:o.servicio)==null?void 0:x.nombre)||"",foto:(o==null?void 0:o.foto)||null}},$={nombre:{required:!0}},_=({edicion:o,handleChange:a,errors:r,values:t})=>{var d;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{className:`${t!=null&&t.nombre?"capitalize":""}`,value:t.nombre,labelText:"Nombre:",name:"nombre",onChange:a,placeholder:"Maria Perez",type:"text",errors:r})}),e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:t.fechaDeNac,labelText:"Nacimiento:",name:"fechaDeNac",onChange:a,type:"date",errors:r})}),e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:t.cedula,labelText:"Cédula:",name:"cedula",onChange:a,type:"text",errors:r})}),e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:t.edad,labelText:"Edad:",name:"edad",onChange:a,type:"number",errors:r,min:0})}),e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:t.sociedad,labelText:"Emergencia / Sociedad:",name:"sociedad",onChange:a,type:"text",errors:r})}),e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:t.telefono,labelText:"Teléfono:",name:"telefono",onChange:a,type:"tel",errors:r})}),e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:t.observaciones,labelText:"Observaciones:",name:"observaciones",onChange:a,type:"text",errors:r})}),e.jsxs("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:[e.jsx("label",{children:"Contacto de Emergencia"}),e.jsx(n,{value:t.nombreContacto2,labelText:"Nombre:",name:"nombreContacto2",onChange:a,type:"text",errors:r}),e.jsx(n,{value:t.telefonoContacto2,labelText:"Teléfono:",name:"telefonoContacto2",onChange:a,type:"text",errors:r})]}),e.jsxs("div",{className:"grid gap-4",children:[e.jsx("label",{htmlFor:"Foto",children:o?"Cambiar Foto:":"Foto:"}),e.jsx("input",{name:"foto",className:"cursor-pointer border border-b border-slate-500 rounded-lg p-4",type:"file",accept:"image/*",onChange:a}),(t.foto||t.imgPreview)&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Imagen actual:"}),e.jsx("img",{className:"justify-self-center aspect-square rounded-lg object-cover object-center w-28 h-28",src:t.imgPreview||((d=t.foto)==null?void 0:d.secure_url),alt:`Imagen del paciente ${t.nombre||""}`})]})]})]})},B=({values:o,handleChange:a})=>{const r=(s,x)=>{const j=x.target.textContent;a({target:{name:s,value:j}})},t=["Buena","Regular","Mala"],d=["Menos de 6 horas","8 horas","Mas de 8 horas"],m=["Nunca tomo agua","1 litro de agua","2 o más litros de agua"],b=["Nunca","Ocasionalmente","Siempre"],l=["Nunca","Ocasionalmente","Siempre"];return e.jsxs(e.Fragment,{children:[e.jsx(u,{defaultValue:o.alimentacion,name:"Alimentación",list:t,onClickFunction:s=>{r("alimentacion",s)}}),e.jsx(u,{defaultValue:o.descanso,name:"Descanso",list:d,onClickFunction:s=>{r("descanso",s)}}),e.jsx(u,{defaultValue:o.hidratacion,name:"Hidratación",list:m,onClickFunction:s=>{r("hidratacion",s)}}),e.jsx(u,{defaultValue:o.alcohol,name:"Alcohol",list:b,onClickFunction:s=>{r("alcohol",s)}}),e.jsx(u,{defaultValue:o.fuma,name:"Fuma",list:l,onClickFunction:s=>{r("fuma",s)}})]})},L=({values:o,errors:a,handleChange:r})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:o.alergia,labelText:"Alergia:",name:"alergia",onChange:r,type:"text",errors:a})}),e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:o.circulatorio,labelText:"Problemas Circulatorios:",name:"circulatorio",onChange:r,type:"text",errors:a})}),e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:o.embarazo,labelText:"Embarazo:",name:"embarazo",onChange:r,type:"text",errors:a})}),e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:o.operaciones,labelText:"Operaciones:",name:"operaciones",onChange:r,type:"text",errors:a})}),e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:o.oncologicas,labelText:"Enfermedades Oncológicas:",name:"oncologicas",onChange:r,type:"text",errors:a})}),e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:o.enfermedades,labelText:"Otras enfermedades:",name:"enfermedades",onChange:r,type:"text",errors:a})}),e.jsx("div",{className:"grid gap-4 border-b border-slate-500 py-2",children:e.jsx(n,{value:o.medicamentos,labelText:"Medicamentos:",name:"medicamentos",onChange:r,type:"text",errors:a})}),e.jsx("div",{className:"grid gap-4 py-2",children:e.jsx(n,{value:o.implantes,labelText:"Implantes:",name:"implantes",onChange:r,type:"text",errors:a})})]}),U=({cambiarActivo:o,seccion:a})=>e.jsxs("article",{className:"relative grid justify-between grid-flow-col border-b border-black pb-2",children:[e.jsx(g,{id:"Personales",disabled:a.Personales,onClickFunction:o,tipo:"button",texto:"1",bgColor:a.Personales}),e.jsx(g,{id:"Costumbres",disabled:a.Costumbres,onClickFunction:o,tipo:"button",texto:"2",bgColor:a.Costumbres}),e.jsx(g,{id:"Afecciones",disabled:a.Afecciones,onClickFunction:o,tipo:"button",texto:"3",bgColor:a.Afecciones}),e.jsx(g,{id:"Servicio",disabled:a.Servicio,onClickFunction:o,tipo:"button",texto:"4",bgColor:a.Servicio})]}),Z=()=>{var p;const o=k(),a=(p=o.state)==null?void 0:p.paciente,r=D(),t=o.pathname===A.admin.editarPaciente,{paciente:d,dispatch:m}=O(),[b]=F.useState(R(d||a)),{handleChange:l,values:s,validateForm:x,errors:j,resetForm:N}=z(b,$),{agregarPaciente:P,editarPaciente:S}=V(),[c,T]=F.useState({Personales:!0,Costumbres:!1,Afecciones:!1,Servicio:!1}),w=h=>{const f=h.target.id,i={...c};if(i[f]=!c[f],i[f])for(const C in i)C!==f&&(i[C]=!1);T(i)},y=()=>{N(),m({type:E.SET_PACIENTE,payload:null}),r(-1)},v=async h=>{if(h.preventDefault(),x()){const i=M(s);(t?await S(i,d._id):await P(i))&&y()}};return e.jsxs("section",{className:"grid p-4",children:[e.jsxs("h1",{className:"font-betonga font-bold text-color-violeta text-2xl tracking-wider text-center mb-4",children:[t?"Editar ":"Agregar ","Paciente"]}),e.jsxs("form",{className:"animate-fadeIn rounded-lg p-4 max-w-2xl m-auto w-full grid gap-4 bg-color-verde-blanco border border-gray-300 shadow-lg",onSubmit:v,children:[e.jsx(U,{cambiarActivo:w,seccion:c}),c.Personales&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"font-betonga font-bold text-color-violeta text-xl tracking-wider",children:"Datos Personales"}),e.jsx(_,{edicion:t,errors:j,handleChange:l,values:s})]}),c.Costumbres&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"font-betonga font-bold text-color-violeta text-xl tracking-wider text-center",children:"Costumbres"}),e.jsx(B,{handleChange:l,values:s})]}),c.Afecciones&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"font-betonga font-bold text-color-violeta text-xl tracking-wider",children:"Afecciones"}),e.jsx(L,{errors:j,handleChange:l,values:s})]}),c.Servicio&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"font-betonga font-bold text-color-violeta text-xl tracking-wider text-center",children:"Servicios"}),e.jsx(I,{values:s,handleChange:l})]}),e.jsxs("footer",{className:"grid grid-flow-col gap-2 pt-4 ",children:[e.jsx(g,{className:"w-full",bgColor:!0,tipo:"submit",texto:"Guardar"}),e.jsx(g,{className:"w-full",onClickFunction:y,bgColor:!1,texto:"Cerrar"})]})]})]})};export{Z as default};
