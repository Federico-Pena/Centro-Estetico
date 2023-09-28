import{r as N,U as be,j as e,B as ce,b as De,c as Ie,g as ze,a as Ve,M as ge}from"./index-7bc7cf19.js";import{u as Ce,S as Ee,a as ye,F as Be,C as Le,b as qe,c as He}from"./ContenedorReservas-6c9bf801.js";import{B as we}from"./BotonPrimario-e990d38c.js";import{L as _e,f as $e}from"./diasSemanaConHoras-5d2e9931.js";import{a as Pe,H as We}from"./constantes-5e793bc1.js";import{f as Ne}from"./fetchData-919cca5f.js";function Fe(i,D){let p=new FormData;return p.append("nombre",i.nombre.value),p.append("fechaDeNac",i.fechaDeNac.value),p.append("cedula",i.cedula.value),p.append("edad",i.edad.value),p.append("sociedad",i.sociedad.value),p.append("telefono",i.telefono.value),p.append("nombreContacto2",i.nombreContacto2.value),p.append("telefonoContacto2",i.telefonoContacto2.value),p.append("alimentacion",i.alimentacion.value),p.append("descanso",i.descanso.value),p.append("hidratacion",i.hidratacion.value),p.append("alcohol",i.alcohol.value),p.append("fuma",i.fuma.value),p.append("alergia",i.alergia.value),p.append("circulatorio",i.circulatorio.value),p.append("embarazo",i.embarazo.value),p.append("operaciones",i.operaciones.value),p.append("oncologicas",i.oncologicas.value),p.append("enfermedades",i.enfermedades.value),p.append("medicamentos",i.medicamentos.value),p.append("implantes",i.implantes.value),p.append("tratamiento",i.tratamiento.value),p.append("observaciones",i.observaciones.value),p.append("foto",D),p}const Ge=({paciente:i,cerrarForm:D,actualizarPacientes:p})=>{const[k,q]=N.useState(null),[I,w]=N.useState(!1),{accessToken:z}=N.useContext(be),s=N.useRef(null),{tratamientos:m}=Ce();N.useEffect(()=>{let T={top:s.current.offsetTop-100,left:0,behavior:"smooth"};window.scrollTo(T)},[]);const f=async T=>{T.preventDefault(),w(!0);const V=T.target,U=Fe(V,k),te=`${Pe.paciente.editarPaciente}${i._id}`,ae={method:"PUT",body:U,headers:{authorization:`Bearer ${z}`}};await Ne(te,ae,p),D(),w(!1)},O=T=>{const V=T.target.files[0];q(V)};return e.jsxs("form",{className:"formEditarPaciente",onSubmit:f,ref:s,children:[e.jsx(ce,{tipo:"button",onClickFunction:D,texto:"🡸"}),e.jsx("h1",{children:"Editar Paciente"}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Nombre"}),e.jsx("input",{type:"text",name:"nombre",defaultValue:i.nombre})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Nacimiento"}),e.jsx("input",{type:"date",name:"fechaDeNac",defaultValue:i.fechaDeNac})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Cédula"}),e.jsx("input",{type:"number",name:"cedula",defaultValue:i.cedula})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Edad"}),e.jsx("input",{type:"number",name:"edad",defaultValue:i.edad})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Emergencia/Sociedad "}),e.jsx("input",{type:"text",name:"sociedad",defaultValue:i.sociedad})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Teléfono"}),e.jsx("input",{type:"number",name:"telefono",defaultValue:i.telefono})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Observaciones"}),e.jsx("input",{type:"text",name:"observaciones",defaultValue:i.observaciones})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Foto"}),e.jsx("input",{name:"foto",type:"file",onChange:O})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Contacto de Emergencia "}),e.jsxs("div",{className:"contactoEmergencia",children:[e.jsx("input",{type:"text",name:"nombreContacto2",placeholder:"Nombre",defaultValue:i.contactoEmergencia.nombreContacto2}),e.jsx("input",{type:"number",placeholder:"Teléfono",name:"telefonoContacto2",defaultValue:i.contactoEmergencia.telefonoContacto2})]})]}),e.jsxs("div",{className:"inputSelect",children:[e.jsx("label",{children:"Alimentación "}),e.jsxs("select",{name:"alimentacion",children:[e.jsx("option",{value:i.alimentacion,children:i.alimentacion}),e.jsx("option",{value:"Buena",children:"Buena"}),e.jsx("option",{value:"Regular",children:"Regular"}),e.jsx("option",{value:"Mala",children:"Mala"})]})]}),e.jsxs("div",{className:"inputSelect",children:[e.jsx("label",{children:"Descanso"}),e.jsxs("select",{name:"descanso",children:[e.jsx("option",{value:i.descanso,children:i.descanso}),e.jsx("option",{value:"Menos de 6 horas",children:"Menos de 6 horas"}),e.jsx("option",{value:"8 horas",children:"8 horas"}),e.jsx("option",{value:"Mas de 8 horas",children:"Mas de 8 horas"})]})]}),e.jsxs("div",{className:"inputSelect",children:[e.jsx("label",{children:"Hidratación"}),e.jsxs("select",{name:"hidratacion",children:[e.jsx("option",{value:i.hidratacion,children:i.hidratacion}),e.jsx("option",{value:"2 o más litros de agua",children:"2 o más litros de agua"}),e.jsx("option",{value:"1 litro de agua",children:"1 litro de agua"}),e.jsx("option",{value:"Nunca tomo agua",children:"Nunca tomo agua"})]})]}),e.jsxs("div",{className:"inputSelect",children:[e.jsx("label",{children:"Alcohol"}),e.jsxs("select",{name:"alcohol",children:[e.jsx("option",{value:i.alcohol,children:i.alcohol}),e.jsx("option",{value:"Siempre",children:"Siempre"}),e.jsx("option",{value:"Ocasionalmente",children:"Ocasionalmente"}),e.jsx("option",{value:"Nunca",children:"Nunca"})]})]}),e.jsxs("div",{className:"inputSelect",children:[e.jsx("label",{children:"Fuma"}),e.jsxs("select",{name:"fuma",children:[e.jsx("option",{value:i.fuma,children:i.fuma}),e.jsx("option",{value:"Siempre",children:"Siempre"}),e.jsx("option",{value:"Ocasionalmente",children:"Ocasionalmente"}),e.jsx("option",{value:"Nunca",children:"Nunca"})]})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Alergia"}),e.jsx("input",{type:"text",name:"alergia",defaultValue:i.alergia})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Problemas Circulatorios"}),e.jsx("input",{type:"text",name:"circulatorio",defaultValue:i.circulatorio})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Embarazo"}),e.jsx("input",{type:"text",name:"embarazo",defaultValue:i.embarazo})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Operaciones"}),e.jsx("input",{type:"text",name:"operaciones",defaultValue:i.operaciones})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Enfermedades oncológicas"}),e.jsx("input",{type:"text",name:"oncologicas",defaultValue:i.oncologicas})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Otras enfermedades"}),e.jsx("input",{type:"text",name:"enfermedades",defaultValue:i.enfermedades})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Medicamentos"}),e.jsx("input",{type:"text",name:"medicamentos",defaultValue:i.medicamentos})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{children:"Implantes"}),e.jsx("input",{type:"text",name:"implantes",defaultValue:i.implantes})]}),e.jsx(Ee,{reserva:i,className:"inputSelect",tratamientos:m,name:"tratamiento"}),e.jsx(we,{tipo:"submit",className:I?"submitEditarAdmin":"",texto:I?e.jsx(_e,{}):"Editar"})]})};var Te={exports:{}};(function(i,D){(function(p,k){i.exports=k(N,De)})(typeof self<"u"?self:Ie,function(p,k){return function(){var q={156:function(s){s.exports=p},111:function(s){s.exports=k},582:function(s,m,f){f.r(m),f.d(m,{__assign:function(){return V},__asyncDelegator:function(){return ue},__asyncGenerator:function(){return fe},__asyncValues:function(){return de},__await:function(){return Q},__awaiter:function(){return _},__classPrivateFieldGet:function(){return pe},__classPrivateFieldIn:function(){return C},__classPrivateFieldSet:function(){return he},__createBinding:function(){return g},__decorate:function(){return te},__esDecorate:function(){return Y},__exportStar:function(){return S},__extends:function(){return T},__generator:function(){return A},__importDefault:function(){return oe},__importStar:function(){return Z},__makeTemplateObject:function(){return xe},__metadata:function(){return v},__param:function(){return ae},__propKey:function(){return l},__read:function(){return H},__rest:function(){return U},__runInitializers:function(){return K},__setFunctionName:function(){return h},__spread:function(){return y},__spreadArray:function(){return re},__spreadArrays:function(){return J},__values:function(){return R}});var O=function(t,a){return O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,r){o.__proto__=r}||function(o,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(o[n]=r[n])},O(t,a)};function T(t,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function o(){this.constructor=t}O(t,a),t.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o)}var V=function(){return V=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++)for(var n in a=arguments[o])Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);return t},V.apply(this,arguments)};function U(t,a){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&a.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]])}return o}function te(t,a,o,r){var n,d=arguments.length,c=d<3?a:r===null?r=Object.getOwnPropertyDescriptor(a,o):r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(t,a,o,r);else for(var x=t.length-1;x>=0;x--)(n=t[x])&&(c=(d<3?n(c):d>3?n(a,o,c):n(a,o))||c);return d>3&&c&&Object.defineProperty(a,o,c),c}function ae(t,a){return function(o,r){a(o,r,t)}}function Y(t,a,o,r,n,d){function c(se){if(se!==void 0&&typeof se!="function")throw new TypeError("Function expected");return se}for(var x,M=r.kind,E=M==="getter"?"get":M==="setter"?"set":"value",u=!a&&t?r.static?t:t.prototype:null,b=a||(u?Object.getOwnPropertyDescriptor(u,r.name):{}),B=!1,W=o.length-1;W>=0;W--){var ee={};for(var ie in r)ee[ie]=ie==="access"?{}:r[ie];for(var ie in r.access)ee.access[ie]=r.access[ie];ee.addInitializer=function(se){if(B)throw new TypeError("Cannot add initializers after decoration has completed");d.push(c(se||null))};var ne=(0,o[W])(M==="accessor"?{get:b.get,set:b.set}:b[E],ee);if(M==="accessor"){if(ne===void 0)continue;if(ne===null||typeof ne!="object")throw new TypeError("Object expected");(x=c(ne.get))&&(b.get=x),(x=c(ne.set))&&(b.set=x),(x=c(ne.init))&&n.unshift(x)}else(x=c(ne))&&(M==="field"?n.unshift(x):b[E]=x)}u&&Object.defineProperty(u,r.name,b),B=!0}function K(t,a,o){for(var r=arguments.length>2,n=0;n<a.length;n++)o=r?a[n].call(t,o):a[n].call(t);return r?o:void 0}function l(t){return typeof t=="symbol"?t:"".concat(t)}function h(t,a,o){return typeof a=="symbol"&&(a=a.description?"[".concat(a.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:o?"".concat(o," ",a):a})}function v(t,a){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,a)}function _(t,a,o,r){return new(o||(o=Promise))(function(n,d){function c(E){try{M(r.next(E))}catch(u){d(u)}}function x(E){try{M(r.throw(E))}catch(u){d(u)}}function M(E){var u;E.done?n(E.value):(u=E.value,u instanceof o?u:new o(function(b){b(u)})).then(c,x)}M((r=r.apply(t,a||[])).next())})}function A(t,a){var o,r,n,d,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return d={next:x(0),throw:x(1),return:x(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function x(M){return function(E){return function(u){if(o)throw new TypeError("Generator is already executing.");for(;d&&(d=0,u[0]&&(c=0)),c;)try{if(o=1,r&&(n=2&u[0]?r.return:u[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,u[1])).done)return n;switch(r=0,n&&(u=[2&u[0],n.value]),u[0]){case 0:case 1:n=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((n=(n=c.trys).length>0&&n[n.length-1])||u[0]!==6&&u[0]!==2)){c=0;continue}if(u[0]===3&&(!n||u[1]>n[0]&&u[1]<n[3])){c.label=u[1];break}if(u[0]===6&&c.label<n[1]){c.label=n[1],n=u;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(u);break}n[2]&&c.ops.pop(),c.trys.pop();continue}u=a.call(t,c)}catch(b){u=[6,b],r=0}finally{o=n=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([M,E])}}}var g=Object.create?function(t,a,o,r){r===void 0&&(r=o);var n=Object.getOwnPropertyDescriptor(a,o);n&&!("get"in n?!a.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return a[o]}}),Object.defineProperty(t,r,n)}:function(t,a,o,r){r===void 0&&(r=o),t[r]=a[o]};function S(t,a){for(var o in t)o==="default"||Object.prototype.hasOwnProperty.call(a,o)||g(a,t,o)}function R(t){var a=typeof Symbol=="function"&&Symbol.iterator,o=a&&t[a],r=0;if(o)return o.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")}function H(t,a){var o=typeof Symbol=="function"&&t[Symbol.iterator];if(!o)return t;var r,n,d=o.call(t),c=[];try{for(;(a===void 0||a-- >0)&&!(r=d.next()).done;)c.push(r.value)}catch(x){n={error:x}}finally{try{r&&!r.done&&(o=d.return)&&o.call(d)}finally{if(n)throw n.error}}return c}function y(){for(var t=[],a=0;a<arguments.length;a++)t=t.concat(H(arguments[a]));return t}function J(){for(var t=0,a=0,o=arguments.length;a<o;a++)t+=arguments[a].length;var r=Array(t),n=0;for(a=0;a<o;a++)for(var d=arguments[a],c=0,x=d.length;c<x;c++,n++)r[n]=d[c];return r}function re(t,a,o){if(o||arguments.length===2)for(var r,n=0,d=a.length;n<d;n++)!r&&n in a||(r||(r=Array.prototype.slice.call(a,0,n)),r[n]=a[n]);return t.concat(r||Array.prototype.slice.call(a))}function Q(t){return this instanceof Q?(this.v=t,this):new Q(t)}function fe(t,a,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,n=o.apply(t,a||[]),d=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(b){n[b]&&(r[b]=function(B){return new Promise(function(W,ee){d.push([b,B,W,ee])>1||x(b,B)})})}function x(b,B){try{(W=n[b](B)).value instanceof Q?Promise.resolve(W.value.v).then(M,E):u(d[0][2],W)}catch(ee){u(d[0][3],ee)}var W}function M(b){x("next",b)}function E(b){x("throw",b)}function u(b,B){b(B),d.shift(),d.length&&x(d[0][0],d[0][1])}}function ue(t){var a,o;return a={},r("next"),r("throw",function(n){throw n}),r("return"),a[Symbol.iterator]=function(){return this},a;function r(n,d){a[n]=t[n]?function(c){return(o=!o)?{value:Q(t[n](c)),done:!1}:d?d(c):c}:d}}function de(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a,o=t[Symbol.asyncIterator];return o?o.call(t):(t=R(t),a={},r("next"),r("throw"),r("return"),a[Symbol.asyncIterator]=function(){return this},a);function r(n){a[n]=t[n]&&function(d){return new Promise(function(c,x){(function(M,E,u,b){Promise.resolve(b).then(function(B){M({value:B,done:u})},E)})(c,x,(d=t[n](d)).done,d.value)})}}}function xe(t,a){return Object.defineProperty?Object.defineProperty(t,"raw",{value:a}):t.raw=a,t}var F=Object.create?function(t,a){Object.defineProperty(t,"default",{enumerable:!0,value:a})}:function(t,a){t.default=a};function Z(t){if(t&&t.__esModule)return t;var a={};if(t!=null)for(var o in t)o!=="default"&&Object.prototype.hasOwnProperty.call(t,o)&&g(a,t,o);return F(a,t),a}function oe(t){return t&&t.__esModule?t:{default:t}}function pe(t,a,o,r){if(o==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof a=="function"?t!==a||!r:!a.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?r:o==="a"?r.call(t):r?r.value:a.get(t)}function he(t,a,o,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof a=="function"?t!==a||!n:!a.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(t,o):n?n.value=o:a.set(t,o),o}function C(t,a){if(a===null||typeof a!="object"&&typeof a!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof t=="function"?a===t:t.has(a)}m.default={__extends:T,__assign:V,__rest:U,__decorate:te,__param:ae,__metadata:v,__awaiter:_,__generator:A,__createBinding:g,__exportStar:S,__values:R,__read:H,__spread:y,__spreadArrays:J,__spreadArray:re,__await:Q,__asyncGenerator:fe,__asyncDelegator:ue,__asyncValues:de,__makeTemplateObject:xe,__importStar:Z,__importDefault:oe,__classPrivateFieldGet:pe,__classPrivateFieldSet:he,__classPrivateFieldIn:C}}},I={};function w(s){var m=I[s];if(m!==void 0)return m.exports;var f=I[s]={exports:{}};return q[s](f,f.exports,w),f.exports}w.d=function(s,m){for(var f in m)w.o(m,f)&&!w.o(s,f)&&Object.defineProperty(s,f,{enumerable:!0,get:m[f]})},w.o=function(s,m){return Object.prototype.hasOwnProperty.call(s,m)},w.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var z={};return function(){var s=z;Object.defineProperty(s,"__esModule",{value:!0}),s.useReactToPrint=s.PrintContextConsumer=void 0;var m=w(582),f=w(156),O=w(111),T=Object.prototype.hasOwnProperty.call(f,"createContext"),V=Object.prototype.hasOwnProperty.call(f,"useMemo")&&Object.prototype.hasOwnProperty.call(f,"useCallback"),U=T?f.createContext({}):null;s.PrintContextConsumer=U?U.Consumer:function(){return null};var te={copyStyles:!0,pageStyle:`
        @page {
            /* Remove browser default header (title) and footer (url) */
            margin: 0;
        }
        @media print {
            body {
                /* Tell browsers to print background colors */
                -webkit-print-color-adjust: exact; /* Chrome/Safari/Edge/Opera */
                color-adjust: exact; /* Firefox */
            }
        }
    `,removeAfterPrint:!1,suppressErrors:!1},ae=function(Y){function K(){var l=Y!==null&&Y.apply(this,arguments)||this;return l.startPrint=function(h){var v=l.props,_=v.onAfterPrint,A=v.onPrintError,g=v.print,S=v.documentTitle;setTimeout(function(){var R,H;if(h.contentWindow)if(h.contentWindow.focus(),g)g(h).then(function(){return _==null?void 0:_()}).then(function(){return l.handleRemoveIframe()}).catch(function(re){A?A("print",re):l.logMessages(["An error was thrown by the specified `print` function"])});else{if(h.contentWindow.print){var y=(H=(R=h.contentDocument)===null||R===void 0?void 0:R.title)!==null&&H!==void 0?H:"",J=h.ownerDocument.title;S&&(h.ownerDocument.title=S,h.contentDocument&&(h.contentDocument.title=S)),h.contentWindow.print(),S&&(h.ownerDocument.title=J,h.contentDocument&&(h.contentDocument.title=y))}else l.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);_==null||_(),l.handleRemoveIframe()}else l.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"])},500)},l.triggerPrint=function(h){var v=l.props,_=v.onBeforePrint,A=v.onPrintError;if(_){var g=_();g&&typeof g.then=="function"?g.then(function(){l.startPrint(h)}).catch(function(S){A&&A("onBeforePrint",S)}):l.startPrint(h)}else l.startPrint(h)},l.handleClick=function(){var h=l.props,v=h.onBeforeGetContent,_=h.onPrintError;if(v){var A=v();A&&typeof A.then=="function"?A.then(l.handlePrint).catch(function(g){_&&_("onBeforeGetContent",g)}):l.handlePrint()}else l.handlePrint()},l.handlePrint=function(){var h=l.props,v=h.bodyClass,_=h.content,A=h.copyStyles,g=h.fonts,S=h.pageStyle,R=h.nonce,H=_();if(H!==void 0)if(H!==null){var y=document.createElement("iframe");y.width="".concat(document.documentElement.clientWidth,"px"),y.height="".concat(document.documentElement.clientHeight,"px"),y.style.position="absolute",y.style.top="-".concat(document.documentElement.clientHeight+100,"px"),y.style.left="-".concat(document.documentElement.clientWidth+100,"px"),y.id="printWindow",y.srcdoc="<!DOCTYPE html>";var J=(0,O.findDOMNode)(H);if(J){var re=J.cloneNode(!0),Q=re instanceof Text,fe=document.querySelectorAll("link[rel='stylesheet']"),ue=Q?[]:re.querySelectorAll("img"),de=Q?[]:re.querySelectorAll("video"),xe=g?g.length:0;l.numResourcesToLoad=fe.length+ue.length+de.length+xe,l.resourcesLoaded=[],l.resourcesErrored=[];var F=function(Z,oe){l.resourcesLoaded.includes(Z)?l.logMessages(["Tried to mark a resource that has already been handled",Z],"debug"):(oe?(l.logMessages(m.__spreadArray(['"react-to-print" was unable to load a resource but will continue attempting to print the page'],m.__read(oe),!1)),l.resourcesErrored.push(Z)):l.resourcesLoaded.push(Z),l.resourcesLoaded.length+l.resourcesErrored.length===l.numResourcesToLoad&&l.triggerPrint(y))};y.onload=function(){var Z,oe,pe,he;y.onload=null;var C=y.contentDocument||((oe=y.contentWindow)===null||oe===void 0?void 0:oe.document);if(C){C.body.appendChild(re),g&&(!((pe=y.contentDocument)===null||pe===void 0)&&pe.fonts&&(!((he=y.contentWindow)===null||he===void 0)&&he.FontFace)?g.forEach(function($){var j=new FontFace($.family,$.source,{weight:$.weight,style:$.style});y.contentDocument.fonts.add(j),j.loaded.then(function(){F(j)}).catch(function(P){F(j,["Failed loading the font:",j,"Load error:",P])})}):(g.forEach(function($){return F($)}),l.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));var t=typeof S=="function"?S():S;if(typeof t!="string")l.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof t,'". Styles from `pageStyle` will not be applied.')]);else{var a=C.createElement("style");R&&(a.setAttribute("nonce",R),C.head.setAttribute("nonce",R)),a.appendChild(C.createTextNode(t)),C.head.appendChild(a)}if(v&&(Z=C.body.classList).add.apply(Z,m.__spreadArray([],m.__read(v.split(" ")),!1)),!Q){for(var o=Q?[]:J.querySelectorAll("canvas"),r=C.querySelectorAll("canvas"),n=0;n<o.length;++n){var d=o[n],c=r[n].getContext("2d");c&&c.drawImage(d,0,0)}var x=function($){var j=ue[$],P=j.getAttribute("src");if(P){var G=new Image;G.onload=function(){return F(j)},G.onerror=function(le,me,ve,X,L){return F(j,["Error loading <img>",j,"Error",L])},G.src=P}else F(j,['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it. The <img> is:',j])};for(n=0;n<ue.length;n++)x(n);var M=function($){var j=de[$];j.preload="auto";var P=j.getAttribute("poster");if(P){var G=new Image;G.onload=function(){return F(j)},G.onerror=function(le,me,ve,X,L){return F(j,["Error loading video poster",P,"for video",j,"Error:",L])},G.src=P}else j.readyState>=2?F(j):(j.onloadeddata=function(){return F(j)},j.onerror=function(le,me,ve,X,L){return F(j,["Error loading video",j,"Error",L])},j.onstalled=function(){return F(j,["Loading video stalled, skipping",j])})};for(n=0;n<de.length;n++)M(n);var E="input",u=J.querySelectorAll(E),b=C.querySelectorAll(E);for(n=0;n<u.length;n++)b[n].value=u[n].value;var B="input[type=checkbox],input[type=radio]",W=J.querySelectorAll(B),ee=C.querySelectorAll(B);for(n=0;n<W.length;n++)ee[n].checked=W[n].checked;var ie="select",ne=J.querySelectorAll(ie),se=C.querySelectorAll(ie);for(n=0;n<ne.length;n++)se[n].value=ne[n].value}if(A)for(var Se=document.querySelectorAll("style, link[rel='stylesheet']"),Ae=function($,j){var P=Se[$];if(P.tagName.toLowerCase()==="style"){var G=C.createElement(P.tagName),le=P.sheet;if(le){var me="";try{for(var ve=le.cssRules.length,X=0;X<ve;++X)typeof le.cssRules[X].cssText=="string"&&(me+="".concat(le.cssRules[X].cssText,`\r
`))}catch{l.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",P],"warning")}G.setAttribute("id","react-to-print-".concat($)),R&&G.setAttribute("nonce",R),G.appendChild(C.createTextNode(me)),C.head.appendChild(G)}}else if(P.getAttribute("href"))if(P.hasAttribute("disabled"))l.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:",P],"warning"),F(P);else{for(var L=C.createElement(P.tagName),Me=(X=0,P.attributes.length);X<Me;++X){var je=P.attributes[X];je&&L.setAttribute(je.nodeName,je.nodeValue||"")}L.onload=function(){return F(L)},L.onerror=function(Oe,en,nn,tn,ke){return F(L,["Failed to load",L,"Error:",ke])},R&&L.setAttribute("nonce",R),C.head.appendChild(L)}else l.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:",P],"warning"),F(P)},Re=(n=0,Se.length);n<Re;++n)Ae(n)}l.numResourcesToLoad!==0&&A||l.triggerPrint(y)},l.handleRemoveIframe(!0),document.body.appendChild(y)}else l.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop'])}else l.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);else l.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"])},l.handleRemoveIframe=function(h){var v=l.props.removeAfterPrint;if(h||v){var _=document.getElementById("printWindow");_&&document.body.removeChild(_)}},l.logMessages=function(h,v){v===void 0&&(v="error"),l.props.suppressErrors||(v==="error"?console.error(h):v==="warning"?console.warn(h):v==="debug"&&console.debug(h))},l}return m.__extends(K,Y),K.prototype.render=function(){var l=this.props,h=l.children,v=l.trigger;if(v)return f.cloneElement(v(),{onClick:this.handleClick});if(!U)return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']),null;var _={handlePrint:this.handleClick};return f.createElement(U.Provider,{value:_},h)},K.defaultProps=te,K}(f.Component);s.default=ae,s.useReactToPrint=function(Y){if(!V)return Y.suppressErrors||console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'),function(){throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')};var K=f.useMemo(function(){return new ae(m.__assign(m.__assign({},te),Y))},[Y]);return f.useCallback(function(){return K.handleClick()},[K])}}(),z}()})})(Te);var Ue=Te.exports;const Ye=ze(Ue),Ke=({referencia:i})=>e.jsx(Ye,{bodyClass:"imprimirPaciente",trigger:()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-printer",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),e.jsx("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})]}),content:()=>i.current});const Je=({paciente:i,cerrarReservas:D})=>{const[p,k]=N.useState(!1),{reservasPaciente:q,loading:I,actualizarReservaPaciente:w,eliminarReservaPaciente:z}=ye(i._id),s=()=>{k(!p)};return e.jsxs("div",{className:"reservasPaciente",children:[I&&e.jsx("div",{className:"loaderContainer",children:e.jsx(Ve,{})}),e.jsx(ce,{className:"btnVolverPacientesPage",onClickFunction:D,texto:"Volver"}),e.jsxs("h2",{children:["Reservas de ",i.nombre]}),e.jsx(we,{onClickFunction:s,texto:"Agregar Reserva"}),p?e.jsx(Be,{actualizarReserva:w,setForm:s,reserva:{pacienteNombre:i.nombre,fecha:We.split("T")[0]}}):e.jsx(Le,{actualizarReservaEliminada:z,actualizarReservas:w,reservas:q})]})},Qe=({paciente:i,setPacientes:D})=>{const[p,k]=N.useState(!1),[q,I]=N.useState(!1),[w,z]=N.useState(!1),[s,m]=N.useState(i),{accessToken:f}=N.useContext(be),{setMensaje:O}=N.useContext(ge),T=N.useRef();N.useEffect(()=>{T.current.scrollIntoView({behavior:"smooth",block:"center"})},[]);const V=()=>{I(!0)},U=()=>{I(!1)},te=async()=>{const g={headers:{authorization:`Bearer ${f}`},method:"DELETE"},S=`${Pe.paciente.eliminarPaciente}${i._id}`;await Ne(S,g,R=>{const{mensaje:H,userExistente:y}=R;O(H),D()}),k(!1)},ae=()=>{k(!1)},Y=g=>{if(console.log(g),g.mensaje){const S=g.mensaje;O(S)}else{const S=`Paciente nuevo ${g.nombre}.`;O(S),m(g),z(!1)}},K=()=>{z(!0)},[l,h,v]=s.fechaDeNac.split("-"),_=new Date(l,h,v),A=$e({fecha:_});return w?e.jsx(Ge,{paciente:s,cerrarForm:()=>z(!1),actualizarPacientes:Y}):q?e.jsx(Je,{paciente:s,cerrarReservas:U}):e.jsxs("div",{className:"containerPaciente",children:[e.jsxs("div",{className:"botones",children:[e.jsx("div",{className:"imprimir",children:e.jsx(Ke,{referencia:T})}),e.jsx(ce,{texto:"Reservas",onClickFunction:V}),e.jsx(ce,{texto:"Editar",onClickFunction:K}),e.jsx(ce,{texto:"Eliminar",onClickFunction:()=>k(!0)})]}),e.jsx("picture",{className:"containerFoto",children:e.jsx("img",{src:s.foto.secure_url,alt:`Foto del paciente ${s.nombre}`,className:"paciente-foto"})}),e.jsxs("div",{className:"divImprimir",ref:T,children:[e.jsxs("div",{className:"paciente-details",children:[e.jsx("h4",{children:"Detalles del paciente"}),e.jsxs("ul",{children:[e.jsxs("li",{className:"nombre",children:[e.jsx("span",{children:"Nombre:"})," ",s.nombre]}),e.jsxs("li",{children:[e.jsx("span",{children:"Nacimiento:"}),A||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Cédula:"})," ",s.cedula||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Edad:"})," ",s.edad||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Sociedad:"})," ",s.sociedad||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Teléfono:"})," ",s.telefono||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Obs:"})," ",s.observaciones||"-"]}),e.jsxs("li",{className:"nombre",children:[e.jsx("span",{children:"Tratamiento:"})," ",s.tratamiento||"-"]})]})]}),e.jsxs("div",{className:"paciente-details",children:[e.jsx("h4",{children:"Contacto de Emergencia"}),e.jsxs("ul",{children:[e.jsxs("li",{className:"nombre",children:[e.jsx("span",{children:"Nombre:"}),s.contactoEmergencia.nombreContacto2||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Teléfono:"}),s.contactoEmergencia.telefonoContacto2||"-"]})]})]}),e.jsxs("div",{className:"paciente-details",children:[e.jsx("h4",{children:"Costumbres Diarias"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{children:"Alimentación:"}),s.alimentacion||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Descanso:"})," ",s.descanso||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Hidratación:"})," ",s.hidratacion||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Alcohol:"})," ",s.alcohol||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Fuma:"})," ",s.fuma||"-"]})]})]}),e.jsxs("div",{className:"paciente-details",children:[e.jsx("h4",{children:"Condiciones"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{children:"Alergia:"})," ",s.alergia||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Problema Circulatorio:"}),s.circulatorio||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Embarazo:"})," ",s.embarazo||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Operaciones:"})," ",s.operaciones||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Oncológicas:"})," ",s.oncologicas||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Otras Enfermedades:"}),s.enfermedades||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Medicamentos:"}),s.medicamentos||"-"]}),e.jsxs("li",{children:[e.jsx("span",{children:"Implantes:"})," ",s.implantes||"-"]})]})]})]}),p&&e.jsx(qe,{titulo:"Borrar Paciente",mensaje:`¿Estás seguro de que deseas eliminar al paciente ${i.nombre}?`,onConfirm:te,onCancel:ae})]})},Xe=({nuevoPaciente:i})=>{const[D,p]=N.useState(null),{loading:k}=ye(),{setMensaje:q}=N.useContext(ge),{accessToken:I}=N.useContext(be),{tratamientos:w}=Ce(),z=async m=>{m.preventDefault();const f=m.target,O=Fe(f,D);if(O.get("nombre").trim()){const T=Pe.paciente.agregarPaciente,V={method:"POST",body:O,headers:{authorization:`Bearer ${I}`}};await Ne(T,V,i),f.reset()}else q("Campo nombre vacío")},s=m=>{const f=m.target.files[0];p(f)};return e.jsx(e.Fragment,{children:e.jsxs("form",{className:"formPaciente",onSubmit:z,children:[e.jsx("h1",{children:"Agregar Paciente"}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"nombre",children:"Nombre"}),e.jsx("input",{type:"text",id:"nombre",name:"nombre"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"fechaDeNac",children:"Nacimiento"}),e.jsx("input",{type:"date",id:"fechaDeNac",name:"fechaDeNac"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"cedula",children:"Cédula"}),e.jsx("input",{type:"number",id:"cedula",name:"cedula"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"edad",children:"Edad"}),e.jsx("input",{type:"number",id:"edad",name:"edad"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"sociedad",children:"Emergencia/Sociedad "}),e.jsx("input",{type:"text",id:"sociedad",name:"sociedad"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"telefono",children:"Teléfono"}),e.jsx("input",{type:"number",id:"telefono",name:"telefono"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"observaciones",children:"Observaciones"}),e.jsx("input",{type:"text",id:"observaciones",name:"observaciones"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"foto",children:"Foto"}),e.jsx("input",{id:"foto",name:"foto",type:"file",onChange:s})]}),e.jsxs("div",{className:"input ",children:[e.jsx("label",{htmlFor:"nombreContacto2",children:"Contacto de Emergencia "}),e.jsxs("div",{className:"contactoEmergencia",children:[e.jsx("input",{type:"text",id:"nombreContacto2",name:"nombreContacto2",placeholder:"Nombre"}),e.jsx("input",{type:"number",name:"telefonoContacto2",placeholder:"Teléfono"})]})]}),e.jsxs("div",{className:"inputSelect",children:[e.jsx("label",{children:"Alimentación "}),e.jsxs("select",{name:"alimentacion",children:[e.jsx("option",{value:"",children:"Seleccione una opción"}),e.jsx("option",{value:"Buena",children:"Buena"}),e.jsx("option",{value:"Regular",children:"Regular"}),e.jsx("option",{value:"Mala",children:"Mala"})]})]}),e.jsxs("div",{className:"inputSelect",children:[e.jsx("label",{children:"Descanso"}),e.jsxs("select",{name:"descanso",children:[e.jsx("option",{value:"",children:"Seleccione una opción"}),e.jsx("option",{value:"Menos de 6 horas",children:"Menos de 6 horas"}),e.jsx("option",{value:"8 horas",children:"8 horas"}),e.jsx("option",{value:"Mas de 8 horas",children:"Mas de 8 horas"})]})]}),e.jsxs("div",{className:"inputSelect",children:[e.jsx("label",{children:"Hidratación"}),e.jsxs("select",{name:"hidratacion",children:[e.jsx("option",{value:"",children:"Seleccione una opción"}),e.jsx("option",{value:"2 o más litros de agua",children:"2 o más litros de agua"}),e.jsx("option",{value:"1 litro de agua",children:"1 litro de agua"}),e.jsx("option",{value:"Nunca tomo agua",children:"Nunca tomo agua"})]})]}),e.jsxs("div",{className:"inputSelect",children:[e.jsx("label",{children:"Alcohol"}),e.jsxs("select",{name:"alcohol",children:[e.jsx("option",{value:"",children:"Seleccione una opción"}),e.jsx("option",{value:"Siempre",children:"Siempre"}),e.jsx("option",{value:"Ocasionalmente",children:"Ocasionalmente"}),e.jsx("option",{value:"Nunca",children:"Nunca"})]})]}),e.jsxs("div",{className:"inputSelect",children:[e.jsx("label",{children:"Fuma"}),e.jsxs("select",{name:"fuma",children:[e.jsx("option",{value:"",children:"Seleccione una opción"}),e.jsx("option",{value:"Siempre",children:"Siempre"}),e.jsx("option",{value:"Ocasionalmente",children:"Ocasionalmente"}),e.jsx("option",{value:"Nunca",children:"Nunca"})]})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"alergia",children:"Alergia"}),e.jsx("input",{type:"text",id:"alergia",name:"alergia"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"circulatorio",children:"Problemas Circulatorios"}),e.jsx("input",{type:"text",id:"circulatorio",name:"circulatorio"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"embarazo",children:"Embarazo"}),e.jsx("input",{type:"text",id:"embarazo",name:"embarazo"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"operaciones",children:"Operaciones"}),e.jsx("input",{type:"text",id:"operaciones",name:"operaciones"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"oncologicas",children:"Enfermedades oncológicas"}),e.jsx("input",{type:"text",id:"oncologicas",name:"oncologicas"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"enfermedades",children:"Otras enfermedades"}),e.jsx("input",{type:"text",id:"enfermedades",name:"enfermedades"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"medicamentos",children:"Medicamentos"}),e.jsx("input",{type:"text",id:"medicamentos",name:"medicamentos"})]}),e.jsxs("div",{className:"input",children:[e.jsx("label",{htmlFor:"implantes",children:"Implantes"}),e.jsx("input",{type:"text",id:"implantes",name:"implantes"})]}),e.jsx(Ee,{className:"inputSelect",tratamientos:w,name:"tratamiento"}),e.jsx(we,{texto:k?e.jsx(_e,{}):"Guardar"})]})})},Ze=Xe;function un(){const[i,D]=N.useState(!1),{setPacientes:p,getPaciente:k,pacientes:q,loading:I}=ye(),{setMensaje:w}=N.useContext(ge),z=()=>{D(!i)},s=m=>{if(m.mensaje){const f=m.mensaje;w(f)}else{D(!1);const f=`Nuevo paciente ${m.nombre}
			`;w(f),p(O=>[...O,m])}};return e.jsx(e.Fragment,{children:e.jsxs("main",{className:"containerPacientesPage",children:[e.jsx(ce,{className:"btn-cerrarFormulario",onClickFunction:z,texto:I?e.jsx(_e,{}):i?"Cerrar Formulario":"Agregar Nuevo Paciente"}),q.length>0&&!i&&e.jsxs("div",{className:"containersCardsPacientes",children:[e.jsx(ce,{onClickFunction:()=>p([]),texto:"Ocultar Paciente"}),q.map(m=>e.jsx(Qe,{paciente:m,setPacientes:()=>{p([])}},m._id))]}),i&&e.jsx(Ze,{nuevoPaciente:s}),!q.length&&!i&&e.jsx(He,{onChangeNombre:k})]})})}export{un as default};
