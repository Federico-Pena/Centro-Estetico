import{r as c,T as _,b as T,j as l,c as u,d as w}from"./index-TJkQKCZh.js";const m={_origin:"https://api.emailjs.com"},y=(t,e="https://api.emailjs.com")=>{m._userID=t,m._origin=e},b=(t,e,a)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class p{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const h=(t,e,a={})=>new Promise((n,o)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:r})=>{const i=new p(r);i.status===200||i.text==="OK"?n(i):o(i)}),s.addEventListener("error",({target:r})=>{o(new p(r))}),s.open("POST",m._origin+t,!0),Object.keys(a).forEach(r=>{s.setRequestHeader(r,a[r])}),s.send(e)}),C=(t,e,a,n)=>{const o=n||m._userID;return b(o,t,e),h("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:t,template_id:e,template_params:a}),{"Content-type":"application/json"})},F=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},q=(t,e,a,n)=>{const o=n||m._userID,s=F(a);b(o,t,e);const r=new FormData(s);return r.append("lib_version","3.11.0"),r.append("service_id",t),r.append("template_id",e),r.append("user_id",o),h("/api/v1.0/email/send-form",r)},E={init:y,send:C,sendForm:q},N={nombre:"",email:"",mensaje:""},S={nombre:{required:!0},email:{required:!0},mensaje:{required:!0}},L=()=>{const[t,e]=c.useState(!1),{setMensaje:a}=c.useContext(_),{handleChange:n,errors:o,values:s,validateForm:r}=T(N,S),i=c.useRef(),x="service_3mqr8ss",f="template_23d4l5g",v="NCv2l40Y5RE_Uxdpp",j=async g=>{g.preventDefault();const d=i.current;if(r()){try{e(!0),await E.sendForm(x,f,d,v),a("Mensaje enviado")}catch{a("Ocurrió un error")}e(!1),d.reset()}else a("Faltan campos requeridos")};return l.jsxs("form",{className:"py-8 px-4 border border-slate-600 rounded max-w-md grid gap-4 m-auto bg-color-logo",ref:i,onSubmit:j,children:[l.jsx("h2",{className:"font-betonga text-color-violeta text-2xl font-bold",children:"Contáctenos"}),l.jsx("h3",{className:"mb-8",children:"Con gusto contestaremos cualquier consulta"}),l.jsx(u,{labelText:"Nombre",errors:o,onChange:n,type:"text",placeholder:"Nombre",value:s.nombre,name:"nombre"}),l.jsx(u,{labelText:"Email",errors:o,onChange:n,type:"email",placeholder:"Email",value:s.email,name:"email"}),l.jsx(w,{labelText:"Mensaje",name:"mensaje",placeholder:"Mensaje",value:s.mensaje,error:o.mensaje,onChange:n}),l.jsx("button",{className:"font-bold mt-8 mx-auto max-w-fit h-max text-slate-50 border-color-violeta bg-color-violeta border-[1px] rounded-md grid place-content-center py-2 px-4 transition-colors hover:text-color-violeta hover:bg-slate-50",type:"submit",children:t?"Enviando":"Enviar"})]})};export{L as F};
