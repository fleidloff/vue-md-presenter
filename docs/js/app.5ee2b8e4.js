(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],d=0,p=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function a(e){return u.p+"js/"+({present:"present"}[e]||e)+"."+{present:"e53825dc"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-md-presenter/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"49bd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("830f"),o=n("5c40"),c={id:"app"},a={id:"nav"},u=Object(o["h"])("Edit"),i=Object(o["h"])("| "),s=Object(o["h"])("Present");function d(e,t){var n=Object(o["v"])("router-link"),r=Object(o["v"])("router-view");return Object(o["r"])(),Object(o["e"])("div",c,[Object(o["i"])("div",a,[Object(o["i"])(n,{to:"/"},{default:Object(o["C"])((function(){return[u]})),_:1}),i,Object(o["i"])(n,{to:"/present"},{default:Object(o["C"])((function(){return[s]})),_:1})]),Object(o["i"])(r)])}n("64be");const f={};f.render=d;var p=f,l=Object(o["E"])("data-v-11a567e6");Object(o["u"])("data-v-11a567e6");var b={class:"editor"};Object(o["s"])();var v=l((function(e,t){return Object(o["r"])(),Object(o["e"])("div",b,[Object(o["D"])(Object(o["i"])("textarea",{cols:"30",rows:"10","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.content=t})},null,512),[[r["c"],e.content]])])})),h={data:function(){return{}},computed:{content:{get:function(){return this.$store.state.content},set:function(e){return this.$store.commit("changeContent",e)}}}};n("ac6f");h.render=v,h.__scopeId="data-v-11a567e6";var j=h,O=n("9ff4"),m=Object(o["E"])("data-v-03498f8c");Object(o["u"])("data-v-03498f8c");var g={class:"markdown"},w={class:"markdown-pagination"};Object(o["s"])();var y=m((function(e,t){var n=Object(o["v"])("arrow-handler");return Object(o["r"])(),Object(o["e"])(o["b"],null,[Object(o["i"])("div",g,[Object(o["i"])(r["a"],{name:"slide-fade",mode:"out-in"},{default:m((function(){return[(Object(o["r"])(),Object(o["e"])("div",{key:e.page,innerHTML:e.content},null,8,["innerHTML"]))]})),_:1})]),Object(o["i"])("div",w,[Object(o["i"])("button",{onClick:t[1]||(t[1]=function(t){return e.updatePage(-1)})},"-"),Object(o["i"])("span",null,"page: "+Object(O["F"])(e.currentPage)+" / "+Object(O["F"])(e.numPages),1),Object(o["i"])("button",{onClick:t[2]||(t[2]=function(t){return e.updatePage(1)})},"+"),Object(o["i"])(n,{update:e.updatePage},null,8,["update"])])],64)})),P=(n("ac1f"),n("1276"),n("8ddc"));function k(e){var t=e.target||e.srcElement;switch(t.tagName.toUpperCase()){default:return!1;case"INPUT":case"TEXTAREA":case"SELECT":return!0}}var E={render:function(){return[]},props:{update:Function},mounted:function(){window.addEventListener("keydown",this.onKeyPress)},unmounted:function(){window.removeEventListener("keydown",this.onKeyPress)},methods:{onKeyPress:function(e){if(!k(e))switch(e.key){default:break;case"ArrowLeft":this.update(-1);break;case"ArrowRight":this.update(1);break}}}},C={components:{"arrow-handler":E},data:function(){return{page:1}},methods:{updatePage:function(e){this.page=this.currentPage+e}},computed:{splitContent:function(){return this.$store.state.content.split("---")},content:function(){return P["markdown"].toHTML(this.splitContent[this.currentPage-1])},numPages:function(){return this.splitContent.length},currentPage:function(){return this.page<1?1:this.page>this.numPages?this.numPages:this.page}}};n("6480");C.render=y,C.__scopeId="data-v-03498f8c";var _=C,T=n("5502"),L=Object(T["a"])({state:{content:"\nHello, Vuex\n---\nPAGE 2\n---\nPAGE 3\n"},mutations:{changeContent:function(e,t){e.content=t}},actions:{changeContent:function(e,t){e.commit("changeContent",t)}},modules:{}}),x=(n("d3b7"),n("8c4f")),A={class:"edit"};function M(e,t){var n=Object(o["v"])("editor"),r=Object(o["v"])("markdown");return Object(o["r"])(),Object(o["e"])("div",A,[Object(o["i"])(n),Object(o["i"])(r)])}const S={};S.render=M;var H=S,F=[{path:"/",name:"Edit",component:H},{path:"/present",name:"Present",component:function(){return n.e("present").then(n.bind(null,"9647"))}}],I=Object(x["a"])({history:Object(x["b"])(),routes:F}),K=I,U=Object(r["b"])(p).use(K).use(L);U.component("editor",j),U.component("markdown",_),U.mount("#app")},6480:function(e,t,n){"use strict";n("a4a0")},"64be":function(e,t,n){"use strict";n("c894")},a4a0:function(e,t,n){},ac6f:function(e,t,n){"use strict";n("49bd")},c894:function(e,t,n){}});
//# sourceMappingURL=app.5ee2b8e4.js.map