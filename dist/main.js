(()=>{"use strict";var e={352:(e,t,r)=>{r.d(t,{Z:()=>p});var o=r(81),n=r.n(o),c=r(645),a=r.n(c),i=r(667),d=r.n(i),l=new URL(r(808),r.b),s=a()(n()),u=d()(l);s.push([e.id,`body{line-height:1;width:100vw;height:100vh;display:grid;grid-template-columns:2fr 6fr;margin:0;padding:0;font-family:"Alegreya",serif}.navbar{grid-column:1/2;background-color:#383838;display:flex;flex-direction:column;align-items:center;width:100%;height:100vh;padding:10% 0 10% 0;box-sizing:border-box}.navbar h2{color:#e8f9fd;font-weight:400}.navbar button{text-align:start;border-radius:10px;border:none;width:100%;padding:3%;font-size:large;font-family:"Macondo",cursive}.projectsSection{width:80%;display:grid;grid-template-columns:1fr;gap:20px}.projectsSection button{background-color:#414141;color:#e8f9fd;transition:.2s}.projectsSection button:hover{background-color:#4c4c4c}.formToCreateNewProject{display:none;border-radius:10px;width:100%;background-color:#414141;transition:.2s;padding:3%;box-sizing:border-box}.formToCreateNewProject:hover{background-color:#4c4c4c}.formToCreateNewProject form{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;place-items:center;gap:10px}.formToCreateNewProject form input{width:90%;align-items:center;background-color:#383838;border:none;font-size:medium;padding:2%;color:#e8f9fd;grid-row:1/2;grid-column:1/3;border-radius:5px}.formToCreateNewProject form input:hover{background-color:#595959}.formToCreateNewProject form button{text-align:center;width:90%;background-color:#383838}.formToCreateNewProject form button:hover{background-color:#595959}.new_Project{background-color:#414141;color:#e8f9fd;transition:.2s;display:grid;grid-template-columns:4fr 1fr}.new_Project:hover{background-color:#4c4c4c}.rightPart{display:block;text-align:center;background-color:#383838;width:60%;border-radius:5px}.rightPart:hover{background-color:#414141}.rightSide{background-color:#414141;box-sizing:border-box;grid-column:2/3;width:100%;padding:3%}.rightSide h1{color:#e8f9fd;font-size:x-large;font-weight:500;font-family:"Alegreya",serif}.makingTodo{margin-top:3%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.makingTodo button{color:#383838;font-size:large;padding:.5%;width:90%;border-radius:10px;border:none;background-color:#d9d9d9;transition:.2s;font-family:"Macondo",cursive;margin-bottom:20px}.makingTodo button:hover{background-color:#e9e9e9;color:#121212}.newDiv{margin-bottom:20px;border-radius:10px;width:80%;display:grid;grid-template-columns:4fr 1fr;background-color:#383838;color:#e8f9fd;padding-left:10%;font-size:1rem}.interface{display:none;background-color:#383838;width:60%;border-radius:10px;color:#383838;border:1px dashed #e8f9fd;padding-left:1%;padding-right:1%;padding-top:1%;margin-bottom:20px}.interface form{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr;gap:10px}.interface form input{text-align:center;border-radius:10px}.interface form input:first-of-type{text-align:start;grid-column:1/4;width:100%;background-color:#414141;border:none;font-size:medium;padding:.4% .2% .4% .2%;color:#e8f9fd}.interface form input:first-of-type::placeholder{color:#e8f9fd}.interface form input:first-of-type:hover{background-color:#4c4c4c}.interface form input:nth-of-type(2){text-align:center;background-color:#414141;border:none;width:90%;grid-row:2/3;grid-column:1/2;color:#e8f9fd}.interface form input:nth-of-type(2):hover{background-color:#4c4c4c}.interface form input:nth-of-type(2)::-webkit-calendar-picker-indicator{filter:invert(1)}.interface form select{border-radius:10px;text-align:center;background-color:#414141;color:#e8f9fd;border:none;width:90%;grid-row:2/3;grid-column:2/3}.interface form select:hover{background-color:#4c4c4c}.interface form button{grid-row:3/4;grid-column:1/2;background-image:url(${u});background-repeat:no-repeat;width:30px;height:1em;object-fit:cover}`,""]);const p=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,n,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(a[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&a[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),n&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=n):s[4]="".concat(n)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var d=e[i],l=o.base?d[0]+o.base:d[0],s=c[l]||0,u="".concat(l," ").concat(s);c[l]=s+1;var p=r(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=n(f,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var c=o(e=e||[],n=n||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=r(c[a]);t[i].references--}for(var d=o(e,n),l=0;l<c.length;l++){var s=r(c[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}c=d}}},569:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var c=r.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},808:(e,t,r)=>{e.exports=r.p+"afd9ff4fa8f3c0a648f1.svg"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,r),c.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!e;)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0;var o={};(()=>{r.d(o,{h:()=>N});var e=r(379),t=r.n(e),n=r(795),c=r.n(n),a=r(569),i=r.n(a),d=r(565),l=r.n(d),s=r(216),u=r.n(s),p=r(589),f=r.n(p),m=r(352),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=u(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const b={project:[{project:"",tasks:[],date:[]}]},h=document.querySelector(".interface"),y=document.querySelector(".makingTodo"),v=document.querySelector(".taskForm"),x=document.querySelector(".interface"),w=document.querySelector(".formToCreateNewProject"),j=document.querySelector(".projectsSection"),S=e=>{w.style.display="none";const t=document.createElement("button");t.classList.add("new_Project");const r=document.createElement("div");r.classList.add("leftPart"),r.innerText=e;const o=document.createElement("div");o.innerText="X",o.classList.add("rightPart"),t.append(r),t.append(o),j.appendChild(t)},k=(e,t,r)=>{const o=document.createElement("div");o.classList.add("newDiv");const n=document.createElement("p");n.innerText=e;const c=document.createElement("p");c.innerText=t,"!!1"==r?(o.style.borderTop="4px solid",o.style.borderTopColor="#CF455C"):"!!2"==r?(o.style.borderTop="4px solid",o.style.borderTopColor="#FF8A5C"):"!!3"==r?(o.style.borderTop="4px solid",o.style.borderTopColor="#FFDD67"):(o.style.borderTop="4px solid",o.style.borderTopColor="#59CE8F"),o.appendChild(n),o.appendChild(c),y.append(o)};v.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector(".task"),r=document.querySelector(".date"),o=document.querySelector(".prioritySelect");""==t.value&&""==r.value&&"!!1"==o.value||(x.style.display="none",((e,t,r)=>{const o=document.createElement("div");o.classList.add("newDiv");const n=document.createElement("p");n.innerText=e.value;const c=document.createElement("p");c.innerText=t.value,"!!1"==r.value?(o.style.borderTop="4px solid",o.style.borderTopColor="#CF455C"):"!!2"==r.value?(o.style.borderTop="4px solid",o.style.borderTopColor="#FF8A5C"):"!!3"==r.value?(o.style.borderTop="4px solid",o.style.borderTopColor="#FFDD67"):(o.style.borderTop="4px solid",o.style.borderTopColor="#59CE8F"),function(e,t,r){if(localStorage.getItem("data")){const o=JSON.parse(localStorage.getItem("data"));for(let n=0;n<o.project.length;n++)o.project[n].project==r.selectedIs&&(o.project[n].project=r.selectedIs,o.project[n].tasks.push(e),o.project[n].date.push(t),localStorage.setItem("data",JSON.stringify(o)))}else{const o=b;o.project[0].project=r.selectedIs,o.project[0].tasks.push(e),o.project[0].date.push(t),localStorage.setItem("data",JSON.stringify(o))}}(e.value,t.value,N),o.appendChild(n),o.appendChild(c),y.append(o)})(t,r,o))}));const T=document.querySelector(".inboxButton");function C(e){e.forEach((e=>{const t=document.querySelectorAll(".new_Project");e.addEventListener("click",(()=>{N.selectedIs=e.children[0].innerText,t.forEach((e=>{e.style.backgroundColor="#414141"})),T.style.backgroundColor="#414141",e.style.backgroundColor="#181818"}))}))}document.querySelector("body").onload=void(T.style.backgroundColor="#181818"),T.addEventListener("click",(()=>{N.selectedIs=T.innerText.toLowerCase(),N.selectedIs==T.innerText.toLowerCase()&&(N.selectedIs="inbox",T.style.backgroundColor="#181818",document.querySelectorAll(".new_Project").forEach((e=>{e.style.backgroundColor="#414141"})))}));const E=document.querySelector(".newProject"),P=document.querySelector(".projectsSection"),q=document.querySelector(".newProjectForm"),I=document.querySelector(".formToCreateNewProject"),L=document.querySelector(".newTask");document.querySelector("body").onload=function(){if(null!==localStorage.getItem("data")){const e=JSON.parse(localStorage.getItem("data"));for(let t=0;t<e.project.length;t++)if("inbox"!=e.project[t].project){S(e.project[t].project);for(let r=0;r<e.project[t].tasks.length||r<e.project[t].date.length;r++)k(e.project[t].tasks[r],e.project[t].date[r])}else for(let r=0;r<e.project[t].tasks.length||r<e.project[t].date.length;r++)k(e.project[t].tasks[r],e.project[t].date[r])}}();var N={selectedIs:"inbox"};E.addEventListener("click",(()=>{I.style.display="block"})),q.addEventListener("submit",(e=>{e.preventDefault();const t=(e=>{w.style.display="none";const t=document.createElement("button");t.classList.add("new_Project");const r=document.createElement("div");r.classList.add("leftPart"),r.innerText=e;const o=document.createElement("div");return o.innerText="X",o.classList.add("rightPart"),t.append(r),t.append(o),function(e){const t={project:[{project:e,tasks:[],date:[]}]};if(null==localStorage.getItem("data"))localStorage.setItem("data",JSON.stringify(t));else{const e=JSON.parse(localStorage.getItem("data"));e.project[e.project.length]=t,localStorage.setItem("data",JSON.stringify(e))}}(e),t})(document.querySelector(".projectName").value);P.appendChild(t),C(document.querySelectorAll(".new_Project")),document.querySelectorAll(".rightPart").forEach((e=>{e.addEventListener("click",(()=>{e.parentElement.remove()}))}))})),C(document.querySelectorAll(".new_Project")),document.querySelectorAll(".rightPart").forEach((e=>{e.addEventListener("click",(()=>{e.parentElement.remove()}))})),L.addEventListener("click",(()=>{h.style.display="block"}))})()})();