if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const u=s=>i(s,l),t={module:{uri:l},exports:o,require:u};e[l]=Promise.all(r.map((s=>t[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Administración-df7n13pd.js",revision:null},{url:"assets/Button-Upt60w8G.js",revision:null},{url:"assets/Calendario-9E5KpvLi.js",revision:null},{url:"assets/compararFechas-I2kUju9M.js",revision:null},{url:"assets/Contacto-rlMESvLL.js",revision:null},{url:"assets/ContenedorReservas-tqGYx1il.js",revision:null},{url:"assets/Dropdown-qDlNTB9Q.js",revision:null},{url:"assets/Estadisticas-_ZQ4prJ8.js",revision:null},{url:"assets/formatHoraUser-TJ92Iw1g.js",revision:null},{url:"assets/FormServicio-qHAipFuA.js",revision:null},{url:"assets/FormTratamiento-W4xb2WGx.js",revision:null},{url:"assets/FormularioContacto-VQIgTQ8p.js",revision:null},{url:"assets/FormularioPaciente-IbSEDedA.js",revision:null},{url:"assets/FormularioReservaAdmin-1-Fn08tx.js",revision:null},{url:"assets/getServiciosNombresYTratamientos-97wtVCyz.js",revision:null},{url:"assets/Home-A7r7d7xa.js",revision:null},{url:"assets/index-5I1qHwtd.css",revision:null},{url:"assets/index-Hh7_R6wJ.js",revision:null},{url:"assets/LabelInput-FL_WFd5g.js",revision:null},{url:"assets/LoaderChico-cT-pATF9.js",revision:null},{url:"assets/Nosotros-Ut4Z4_iz.js",revision:null},{url:"assets/OpenInfo-jv49R_IV.js",revision:null},{url:"assets/Pagination-6RfmRXCu.js",revision:null},{url:"assets/ReservasPaciente-mw81GtOn.js",revision:null},{url:"assets/SelectServicio-dSXKXpQ1.js",revision:null},{url:"assets/Servicios-P6CuKPZ9.js",revision:null},{url:"assets/TextAreaLabel-hDeLTtfO.js",revision:null},{url:"assets/TransitionNumber-VCNzTbWL.js",revision:null},{url:"assets/useForm-FkYXM2nw.js",revision:null},{url:"assets/useFormReserva-caWhrk6S.js",revision:null},{url:"assets/useObserver-jBAvkzED.js",revision:null},{url:"assets/usePaciente-mzF8usAv.js",revision:null},{url:"assets/useReservasContext-_ngMcy1i.js",revision:null},{url:"assets/useServicio-ipePLVZF.js",revision:null},{url:"assets/useTratamientos-fiEwxHln.js",revision:null},{url:"assets/useUserContext-DcMwd5wI.js",revision:null},{url:"index.html",revision:"416e8ad1e78b513dc9751c7bfc312389"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/icons/favicon.ico",revision:"be6863711955c5ec7d1ba30bacc34050"},{url:"assets/icons/icon-192.png",revision:"ef7a5ac8f511722a8e1ab2b3e4a71a32"},{url:"assets/icons/icon-512.png",revision:"a2d9a3864d96c15be6831c3d5a8986a1"},{url:"assets/icons/icon-192-maskable.png",revision:"e92cace4747250c8d2c63598a4042637"},{url:"assets/icons/icon-512-maskable.png",revision:"b157bc3e6bb39411a2e601d77a5afa4e"},{url:"manifest.webmanifest",revision:"bc7bfd0302cd5989b710f04899116e7e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
