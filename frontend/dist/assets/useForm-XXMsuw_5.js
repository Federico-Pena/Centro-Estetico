import{r as f}from"./index-eyZDGxlY.js";const l=(s,r,n,o)=>{const t=o[s];t&&(t.required&&(r==null||r===""||typeof r=="string"&&r.trim().length===0)?n(e=>({...e,[s]:"Este campo es requerido"})):t.minLength&&r.trim().length<t.minLength?n(e=>({...e,[s]:`Mínimo ${t.minLength} caracteres`})):t.maxLength&&r.trim().length>t.maxLength?n(e=>({...e,[s]:`Máximo ${t.maxLength} caracteres`})):t.minValue&&r<t.minValue?n(e=>({...e,[s]:`El valor debe ser mayor o igual a ${t.minValue}`})):t.maxValue&&r>t.maxValue?n(e=>({...e,[s]:`El valor debe ser menor o igual a ${t.maxValue}`})):t.pattern&&!t.pattern.test(r)?n(e=>({...e,[s]:t.message||"Formato no válido"})):Array.isArray(r)&&t.minItems&&r.length<t.minItems?n(e=>({...e,[s]:`Debes agregar al menos ${t.minItems} elemento`})):Array.isArray(r)&&t.maxItems&&r.length>t.maxItems?n(e=>({...e,[s]:`No puedes agregar más de ${t.maxItems} elementos`})):n(e=>({...e,[s]:void 0})))},x=(s,r,n,o,t)=>{const{name:e,value:a,files:g,type:c,checked:m}=s.target;if(r(i=>({...i,[e]:"",error:""})),c==="file"){if(n(i=>({...i,[e]:g[0]})),g[0]){const i=new FileReader;i.onload=function(d){n(h=>({...h,imgPreview:d.target.result}))},i.readAsDataURL(g[0])}}else n(c==="checkbox"?i=>({...i,[e]:m}):i=>p(i,e,a));o[e]&&t(e,a,r,o)},p=(s,r,n)=>{const o=r.split(".");let t={...s};return o.reduce((e,a,g)=>(g===o.length-1?e[a]=n:e[a]={...e[a]},e[a]),t),t},y=(s,r)=>{const[n,o]=f.useState(s),[t,e]=f.useState({});return f.useEffect(()=>{n&&Object.keys(r).forEach(m=>{l(m,n[m],e,r)})},[r,n]),{values:n,errors:t,handleChange:m=>{x(m,e,o,r,l)},resetForm:()=>{o(s),e({})},validateForm:()=>(Object.keys(r).forEach(m=>{l(m,n[m],e,r)}),Object.keys(t).every(m=>!t[m]))}};export{y as u};
