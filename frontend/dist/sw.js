if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const a=s=>i(s,l),c={module:{uri:l},exports:o,require:a};e[l]=Promise.all(n.map((s=>c[s]||a(s)))).then((s=>(r(...s),o)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/BotonPrimario-55bf5f35.js",revision:null},{url:"assets/Calendario-9b7a231c.js",revision:null},{url:"assets/Calendario-dabf9d35.css",revision:null},{url:"assets/Contacto-2005cfeb.css",revision:null},{url:"assets/Contacto-e05ed1f4.js",revision:null},{url:"assets/ContadorReservas-8179b768.css",revision:null},{url:"assets/ContadorReservas-a3825f53.js",revision:null},{url:"assets/FormularioContacto-0557213d.css",revision:null},{url:"assets/FormularioContacto-96efbf97.js",revision:null},{url:"assets/FormularioReserva-ca22a861.css",revision:null},{url:"assets/FormularioReserva-cb0d2d0f.js",revision:null},{url:"assets/Home-62d21767.css",revision:null},{url:"assets/Home-6713fa3b.js",revision:null},{url:"assets/index-ef9425d3.js",revision:null},{url:"assets/index-fc73c674.css",revision:null},{url:"assets/Notificacion-1dc4e638.css",revision:null},{url:"assets/Notificacion-6a16bced.js",revision:null},{url:"assets/PacientesPage-14169b1b.js",revision:null},{url:"assets/PacientesPage-fcde391f.css",revision:null},{url:"assets/Reservas-3cb2c2b6.js",revision:null},{url:"assets/Reservas-8a2c4aa4.css",revision:null},{url:"assets/Servicios-81d4b72b.css",revision:null},{url:"assets/Servicios-bd639308.js",revision:null},{url:"assets/SobreMi-6cc1e98b.js",revision:null},{url:"assets/SobreMi-b161b141.css",revision:null},{url:"index.html",revision:"f203cb264dfee85fd152785227785a6d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/icons/favicon.ico",revision:"be6863711955c5ec7d1ba30bacc34050"},{url:"assets/icons/icon-192.png",revision:"ef7a5ac8f511722a8e1ab2b3e4a71a32"},{url:"assets/icons/icon-512.png",revision:"a2d9a3864d96c15be6831c3d5a8986a1"},{url:"assets/icons/icon-192-maskable.png",revision:"e92cace4747250c8d2c63598a4042637"},{url:"assets/icons/icon-512-maskable.png",revision:"b157bc3e6bb39411a2e601d77a5afa4e"},{url:"manifest.webmanifest",revision:"09a2655f2ee46bfaf3131237084e4a13"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
