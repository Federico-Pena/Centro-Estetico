import{E as S}from"./index-BN4e8_cD.js";import{f as g}from"./formatHoraUser-DhkUKUiJ.js";const h=e=>{let o="";return e.sort((r,n)=>r.estado===S.cancelada&&n.estado!==S.cancelada?-1:r.estado!==S.cancelada&&n.estado===S.cancelada?1:0).forEach(r=>{o=r.estado}),o},O=(e,o)=>{if(!(e instanceof Date)||!Array.isArray(o))return{};const c=e.toISOString(),r=c.split("T")[0],n=g(e),a=new Date(`${e}`);a.setMinutes(a.getMinutes()+30);const D=a.toISOString(),f=`${r}T${n}`,l=o.find(t=>(new Date(t.horario.horaInicio).toISOString()===D||new Date(t.horario.horaDeFin).toISOString()===D)&&t.estado!==S.cancelada),i=o.filter(t=>{const s=new Date(t.horario.horaInicio).toISOString(),u=new Date(t.horario.horaDeFin).toISOString();return s===c||u===c}),m=h(i),d=i.some(t=>{var s;return((s=t.paciente)==null?void 0:s.nombre)==="admin"});return{id:f,estado:m,reservaAdmin:d,reservadas:i,proximaHoraNoDisponible:l}},w=(e,o,c,r,n)=>{const a=new Date(e);return Number.isNaN(a.getTime())?[]:(a.setDate(a.getDate()-a.getDay()),Array.from({length:o},(f,l)=>{const i=new Date(a),m=[];i.setDate(a.getDate()+l+1);for(let d=c;d<=r;d++)for(let t=0;t<60;t+=n)if(!(d===20&&t===30)){const s=new Date(i);s.setHours(d,t,0),m.push(s)}return{dia:i,horas:m}}))};export{O as c,w as f};