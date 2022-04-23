(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([n.id,"body{\n    height: 100vh;\n    width: 100%;\n    margin: 0;\n    background-size:cover;\n   \n}\n\n.navbar {\n    display: flex;\n    justify-content: flex-start;\n    padding-left: 20px;\n    gap: 10%;\n    padding: 0.5%;\n    align-items: center;\n    height: 10vh;\n    width: 100%;\n    margin-bottom: 20px;\n\n    background-color: rgb(83, 41, 1);\n\n}\n\n.site-title{\n    color: orangered;\n    font-size: 2em;\n    font-weight: bolder;\n\n}\n\n.btn-container{\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    width: 50%;\n}\n\n\n.btn-container > *{\n    font-size: 20px;\n    background-color: rgb(83, 41, 1);\n    width: 15%;\n\n    border: 0;\n}\n\n.btn-container > *:hover {\n    background-color: rgb(83, 41, 1);\n    color: white;\n}\n\n\n.main-site{\n    width: 100%;\n    height: 80vh;\n    display: flex;\n    justify-content: center;\n    \n}\n\n.home-card{\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    height: 90%;\n    font-size: 2rem;\n    \n    justify-content: center ;\n    align-items: center;\n\n    border-radius: 30px;\n\n    text-decoration: dashed;\n}\n\n.content{\n    color: rgb(238, 245, 178);\n    text-shadow: 2px 2px #ff0000;\n    text-align: center;\n    line-height: 3rem;\n}\n\n.contact-container {\n    width: 100%;\n    height: 80vh;\n\n    display: flex;\n    justify-content: center;\n    \n      \n}\n\n.contacts {\n    width: 30%;\n    height: 90%;    \n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 5px;\n    background: linear-gradient(#dbb03a,#cf2323);\n    opacity: 0.9;\n    box-shadow: 3px 5px;\n    \n    border-radius: 30px;\n}\n\n.contact-title {\n    font-size: 2rem;\n    font-weight: bolder;\n}\n\n.contacts > * {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n/*on hover make the icons bigger */\n#second-contact > *:hover{\n    width: 70px;\n    height: 70px;\n}\n\n/*on hover make the icons bigger */\n#third-contact > *:hover{\n    width: 70px;\n    height: 70px;\n}\n\n\n\n.menu-container {\n    width: 100%;\n    height: 80vh;\n\n    display: flex;\n    justify-content: center;\n    \n      \n}\n\n.menu {\n    width: 30%;\n    height: 90%;    \n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 15px;\n    background: linear-gradient(#dbb03a,#cf2323);\n    opacity: 0.9;\n    box-shadow: 3px 5px;\n    \n    border-radius: 30px;\n}\n\n.menu-title {\n    font-size: 2rem;\n    font-weight: bolder;\n}\n\n.menu > *:not(:first-child) {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nhr{\n    width: 50%;\n    text-align: left;\n    margin-left: 0;\n\n    color: red;\n}",""]);const c=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=i(h,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var c=t(a[o]);e[c].references--}for(var d=r(n,i),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{const n=t.p+"b220baee47bbf5539e29e9e9859703ff.png",e=t.p+"244231d855be9a47b6c02ef135d84a06.png",r=t.p+"f7682085370bd4eb0a2beb9cb27c4f34.jpg";function i(){let n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("div"),i=new Image(300,300);i.src=r,console.log(i),n.appendChild(e),n.id="main-site",e.appendChild(t),t.innerHTML="Welcome to our restaurant : Happy Meal! Here you will enjoy the finest flavours from around the world. Get ready for a delicious trip!",t.classList.add("content"),e.classList.add("home-card"),n.classList.add("main-site"),document.body.appendChild(n),document.body.style.backgroundImage="url('"+i.src+"')"}const a=t.p+"483964b5349d9f282a059039e9c4d6b0.jpg",o=t.p+"3a8b8856696a96ddba052e4733634f34.jpg",c=t.p+"b43d5590042449e63ac2e0f946493a30.jpg";var d=t(379),s=t.n(d),l=t(795),p=t.n(l),u=t(569),h=t.n(u),f=t(565),m=t.n(f),g=t(216),b=t.n(g),v=t(589),y=t.n(v),w=t(426),x={};x.styleTagTransform=y(),x.setAttributes=m(),x.insert=h().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=b(),s()(w.Z,x),w.Z&&w.Z.locals&&w.Z.locals;let C=document.body;!function(){let n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("div");e.classList.add("site-title"),e.innerHTML="HAPPY MEAL",t.classList.add("btn-container"),n.classList.add("navbar"),n.appendChild(e),n.appendChild(t);for(let n=0;n<3;n++){let e=document.createElement("button");switch(n){case 0:e.innerHTML="Home",e.id="home-btn";break;case 1:e.innerHTML="Menu",e.id="menu-btn";break;case 2:e.innerHTML="Contact",e.id="contact-btn"}t.appendChild(e)}document.body.appendChild(n)}(),i();let E=C.children.length;document.getElementById("contact-btn").addEventListener("click",(function(){C.hasChildNodes()&&C.removeChild(C.children[E-1]),function(){let t=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div");i.innerHTML="Contact us",t.classList.add("contact-container"),r.classList.add("contacts"),i.classList.add("contact-title"),r.appendChild(i),t.appendChild(r);for(let t=0;t<3;t++){let i=document.createElement("div");switch(t){case 0:i.innerHTML="Via telephone";let t=document.createElement("div");t.innerHTML="+306999998599",i.appendChild(t),i.id="first-contact";break;case 1:i.innerHTML="Via Facebook";let r=new Image(50,50);r.src=n,r.addEventListener("click",(function(){location.href="www.facebook.com"})),i.appendChild(r),i.id="second-contact";break;case 2:i.innerHTML="Via Instagram";let a=new Image(50,50);a.src=e,a.addEventListener("click",(function(){location.href="www.instagram.com"}),!1),i.appendChild(a),i.id="third-contact"}r.appendChild(i)}document.body.appendChild(t)}()})),document.getElementById("home-btn").addEventListener("click",(function(){C.hasChildNodes()&&C.removeChild(C.children[E-1]),i()})),document.getElementById("menu-btn").addEventListener("click",(function(){C.hasChildNodes()&&C.removeChild(C.children[E-1]),function(){let n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("div");t.innerHTML="MENU",n.classList.add("menu-container"),e.classList.add("menu"),t.classList.add("menu-title"),e.appendChild(t),n.appendChild(e);for(let n=0;n<3;n++){let t=document.createElement("div");switch(n){case 0:t.innerHTML="Hell Pizza: 9,50$";let n=new Image(100,100);n.src=c,t.appendChild(n),t.id="first-food";let r=document.createElement("hr");e.appendChild(r);break;case 1:t.innerHTML="Waffles: 8,60$";let i=new Image(100,100);i.src=a,t.appendChild(i),t.id="second-food";break;case 2:t.innerHTML="French Fries: 7,00$";let d=new Image(100,100);d.src=o,t.appendChild(d),t.id="third-food"}e.appendChild(t)}document.body.appendChild(n)}()}))})()})();