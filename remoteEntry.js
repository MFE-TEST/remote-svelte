var svelte;(()=>{"use strict";var e,t,r,o,n={},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+"."+{379:"e64c1eed5070897e4298",721:"1a428972a20a3788a9b4"}[e]+".js",i.miniCssF=e=>e+".css",i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="remote-svelte:",i.l=(r,o,n,a)=>{if(e[r])e[r].push(o);else{var l,s;if(void 0!==n)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var f=d[u];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+n){l=f;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",t+n),l.src=r),e[r]=[o];var c=(t,o)=>{l.onerror=l.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),s&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://mfe-test.github.io/remote-svelte/",r=e=>new Promise(((t,r)=>{var o=i.miniCssF(e),n=i.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=(i=r[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((n=(i=a[o]).getAttribute("data-href"))===e||n===t)return i}})(o,n))return t();((e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),o(s)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),o={801:0},i.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{721:1}[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={801:0};i.f.j=(t,r)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=i.p+i.u(t),l=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[a,l,s]=r,d=0;for(o in l)i.o(l,o)&&(i.m[o]=l[o]);for(s&&s(i),t&&t(r);d<a.length;d++)n=a[d],i.o(e,n)&&e[n]&&e[n][0](),e[a[d]]=0},r=self.webpackChunkremote_svelte=self.webpackChunkremote_svelte||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l,s,d,u,f={};l=f,s={"./App":()=>Promise.all([i.e(379),i.e(721)]).then((()=>()=>i(721)))},d=(e,t)=>(i.R=t,t=i.o(s,e)?s[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),i.R=void 0,t),u=(e,t)=>{if(i.S){var r=i.S.default,o="default";if(r&&r!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return i.S[o]=e,i.I(o,t)}},i.d(l,{get:()=>d,init:()=>u}),svelte=f})();