(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"body{\n    height: 100vh;\n    width: 100%;\n    margin: 0;\n    background: linear-gradient(#d868ba,#a5295f);\n   \n}\n\n.navbar {\n    display: flex;\n    justify-content: flex-start;\n    padding-left: 20px;\n    gap: 10%;\n    padding: 0.5%;\n    align-items: center;\n    height: 10vh;\n    width: 100%;\n    margin-bottom: 20px;\n\n    background-color: rgb(83, 41, 1);\n\n}\n\n.site-title{\n    font-family: 'Times New Roman', Times, serif;\n    color: white;\n    font-size: 2em;\n    font-weight: bolder;\n}\n\n.btn-container{\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    width: 50%;\n}\n\n\n.btn-container > *{\n    background-color: rgb(252, 252, 252);\n    width: 15%;\n\n    border-radius: 15px;\n}\n\n#contact-btn{\n    color:palegoldenrod;\n}\n\n.main-site{\n    width: 100%;\n    height: 80vh;\n    display: flex;\n    justify-content: center;\n}\n\n.home-card{\n    display: flex;\n    flex-direction: column;\n    width: 30%;\n    height: 90%;\n    background-color: rgb(152, 78, 185);\n    padding: 10px;\n    margin-bottom: 20px;\n    gap: 20%;\n    justify-content: center ;\n    align-items: center;\n\n    text-decoration: dashed;\n}\n\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=a(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{const e=t.p+"483964b5349d9f282a059039e9c4d6b0.jpg";var n=t(379),r=t.n(n),a=t(795),o=t.n(a),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),u=t.n(l),p=t(589),f=t.n(p),m=t(426),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,function(){let e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div");n.classList.add("site-title"),n.innerHTML="HAPPY MEAL",t.classList.add("btn-container"),e.classList.add("navbar"),e.appendChild(n),e.appendChild(t);for(let e=0;e<3;e++){let n=document.createElement("button");switch(e){case 0:n.innerHTML="Home",n.id="home-btn";break;case 1:n.innerHTML="Menu",n.id="menu-btn";break;case 2:n.innerHTML="Contact",n.id="contact-btn"}t.appendChild(n)}document.body.appendChild(e)}(),function(){let n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),a=new Image(200,200);a.src=e,n.appendChild(t),t.appendChild(r),t.appendChild(a),r.innerHTML="Welcome to our restaurant : Happy Meal! Here you will enjoy the finest flavours from around the world. Get ready for an amazing trip.",r.classList.add("content"),t.classList.add("home-card"),n.classList.add("main-site"),document.body.appendChild(n)}(),document.getElementById("contact-btn").addEventListener("click",function(){let e=document.createElement("div");e.innerHTML="FU ALL",document.body.appendChild(e)}())})()})();