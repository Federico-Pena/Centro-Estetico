import{r as o,j as e,A as f}from"./index-Hh7_R6wJ.js";const g=({name:p,className:i,list:c,onClickFunction:m,defaultValue:l})=>{const[r,u]=o.useState(!1),[n,x]=o.useState(""),s=o.useRef(null);o.useEffect(()=>{const t=a=>{s.current&&!s.current.contains(a.target)&&u(!1)};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[]);const d=t=>{x(t.target.textContent),m(t)},b=l||(n&&c.includes(n)?n:p);return e.jsxs("article",{className:`grid  w-full gap-4 ${i||""} ${r?"grid-rows-[45px,1fr]":"grid-rows-1"}'`,children:[e.jsxs("button",{ref:s,onClick:()=>u(!r),className:`${r?"bg-transparent text-color-violeta":"  bg-white"} w-full capitalize m-auto border border-color-violeta font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-between gap-2 hover:bg-transparent hover:text-color-violeta transition-colors`,type:"button",children:[b,e.jsx(f,{className:`${r?"rotate-180":""} transition-transform`})]}),e.jsxs("div",{className:`${r?"opacity-100 scale-y-100 h-auto":"opacity-0 scale-y-0 h-0"} z-10 my-0 mx-auto bg-white rounded-lg w-full transition overflow-hidden`,children:[e.jsx("p",{onClick:d,className:"min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer"}),c.map((t,a)=>e.jsx("p",{onClick:d,className:"capitalize min-h-10 text-center p-2 border-b hover:bg-slate-300 transition-colors cursor-pointer",children:t},a))]})]})};export{g as D};
