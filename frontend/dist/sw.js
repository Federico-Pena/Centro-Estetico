if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const a=s=>i(s,l),u={module:{uri:l},exports:o,require:a};e[l]=Promise.all(r.map((s=>u[s]||a(s)))).then((s=>(n(...s),o)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Administración-ICUEzBx9.js",revision:null},{url:"assets/Button-gaWcEQck.js",revision:null},{url:"assets/Calendario-7GLJOLGG.js",revision:null},{url:"assets/CardServicio-JjuDaq4M.js",revision:null},{url:"assets/compararFechas-CWI27YET.js",revision:null},{url:"assets/Contacto-xjJCnoQv.js",revision:null},{url:"assets/ContenedorReservas-lbV-lV1T.js",revision:null},{url:"assets/Dropdown-76wuP7T9.js",revision:null},{url:"assets/Estadisticas-LnycH7zu.js",revision:null},{url:"assets/formatFechaParaUser-QfX3A7Bl.js",revision:null},{url:"assets/formatHoraUser-TJ92Iw1g.js",revision:null},{url:"assets/FormServicio-fE6RCBWN.js",revision:null},{url:"assets/FormTratamiento-x9BcIanK.js",revision:null},{url:"assets/FormularioContacto-ZC72L0no.js",revision:null},{url:"assets/FormularioPaciente-zVLQBPHw.js",revision:null},{url:"assets/FormularioReservaAdmin-mBbs41ex.js",revision:null},{url:"assets/getServiciosNombresYTratamientos-6AjgGPY9.js",revision:null},{url:"assets/Home-9g9YjR6T.js",revision:null},{url:"assets/index-eyZDGxlY.js",revision:null},{url:"assets/index-peFgdX7T.css",revision:null},{url:"assets/LabelInput-hKgQ6xdJ.js",revision:null},{url:"assets/LoaderChico-GUMo0G8g.js",revision:null},{url:"assets/Nosotros-ENIp6o_J.js",revision:null},{url:"assets/Pagination-_SMd9H3I.js",revision:null},{url:"assets/ReservasPaciente-NRr-oNaY.js",revision:null},{url:"assets/SelectServicio-2xayXesX.js",revision:null},{url:"assets/Servicios-LadDMl-e.js",revision:null},{url:"assets/TextAreaLabel-g80gc0D1.js",revision:null},{url:"assets/TransitionNumber-UPsjx5NY.js",revision:null},{url:"assets/useForm-XXMsuw_5.js",revision:null},{url:"assets/useFormReserva-FiSLYWgK.js",revision:null},{url:"assets/useObserver-6YU-PPv7.js",revision:null},{url:"assets/usePaciente-1DX2FtY3.js",revision:null},{url:"assets/useReservasContext-7CxyEjNX.js",revision:null},{url:"assets/useServicio-bNlRR_FU.js",revision:null},{url:"assets/useTratamientos-EU6NZQm0.js",revision:null},{url:"assets/useUserContext-o9xrNTqb.js",revision:null},{url:"index.html",revision:"ac3a11232ceace113d420e498fe1601b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/icons/favicon.ico",revision:"be6863711955c5ec7d1ba30bacc34050"},{url:"assets/icons/icon-192.png",revision:"ef7a5ac8f511722a8e1ab2b3e4a71a32"},{url:"assets/icons/icon-512.png",revision:"a2d9a3864d96c15be6831c3d5a8986a1"},{url:"assets/icons/icon-192-maskable.png",revision:"e92cace4747250c8d2c63598a4042637"},{url:"assets/icons/icon-512-maskable.png",revision:"b157bc3e6bb39411a2e601d77a5afa4e"},{url:"manifest.webmanifest",revision:"bc7bfd0302cd5989b710f04899116e7e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
