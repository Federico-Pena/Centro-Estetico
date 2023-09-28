const n=async(s,a,r)=>{try{const e=await(await fetch(s,a)).json();return r(e),e}catch(t){return r(t),t}};export{n as f};
