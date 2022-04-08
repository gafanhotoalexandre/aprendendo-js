(()=>{"use strict";var r,n,o,t,e,a,A,i,s,c,p,u,d,l,f={122:(r,n,o)=>{o.d(n,{Z:()=>i});var t=o(537),e=o.n(t),a=o(645),A=o.n(a)()(e());A.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap);"]),A.push([r.id,"/* Formatting CSS / General Settings */\r\n\r\n:root {\r\n    --primary-color: rgb(13, 106, 134);\r\n    --primary-color-light: rgb(47, 165, 201);\r\n    --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: none;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 1.3rem;\r\n    line-height: 2rem;\r\n}\r\n\r\n/* Container */\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n}\r\n\r\nform input,\r\nform textarea,\r\nform label,\r\nform button,\r\nbutton {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input,\r\nform textarea,\r\nform button,\r\nbutton {\r\n    border: 1px solid rgb(163, 163, 163);\r\n    border-radius: 5px;\r\n}\r\n\r\nform input {\r\n    font-size: 1.5rem;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus,\r\nform button:focus,\r\nbutton:focus {\r\n    border: none;\r\n    box-shadow: 0 0 2px 2px var(--primary-color-light);\r\n    transition: .3s;\r\n}\r\n\r\nform button,\r\nbutton {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n    padding: 15px 0;\r\n    margin-top: 25px;\r\n    transition: background-color .3s;\r\n}\r\n\r\nform button:hover,\r\nbutton:hover {\r\n    background-color: var(--primary-color-darker);\r\n}\r\n\r\n\r\n/* Calculator Styles */\r\nh1 {\r\n    text-align: center;\r\n}\r\n.calculator {\r\n    margin: auto;\r\n    width:  400px;\r\n}\r\n\r\n.display {\r\n    font-size: 2rem;\r\n    text-align: right;\r\n    width: 100%;\r\n}\r\n\r\n.btn {\r\n    border: none;\r\n    background-color: #dfdfdf;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    width: 100%;\r\n    height: 50px;\r\n\r\n    transition: .2s;\r\n}\r\n.btn:hover {\r\n    background-color: #838282;\r\n}\r\n\r\n.btn-eq {\r\n    background-color: var(--primary-color);\r\n}\r\n.btn-eq:hover {\r\n    background-color: var(--primary-color-darker);\r\n}\r\n\r\n/* Form Validate */\r\n.error-message {\r\n    font-size: .8rem;\r\n    font-weight: bold;\r\n    color: red;\r\n}\r\n\r\n/* Axios */\r\ntable,\r\ntable tr,\r\ntable tr td {\r\n    width: 100%;\r\n}\r\ntable tr td {\r\n    padding: 5px;\r\n}\r\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA,sCAAsC;;AAGtC;IACI,kCAAkC;IAClC,wCAAwC;IACxC,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,qCAAqC;IACrC,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA,cAAc;;AAEd;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;;;;;IAKI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;;;;IAII,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,eAAe;AACnB;;AAEA;;;IAGI,YAAY;IACZ,kDAAkD;IAClD,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;;IAEI,6CAA6C;AACjD;;;AAGA,sBAAsB;AACtB;IACI,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,eAAe;IACf,eAAe;IACf,WAAW;IACX,YAAY;;IAEZ,eAAe;AACnB;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sCAAsC;AAC1C;AACA;IACI,6CAA6C;AACjD;;AAEA,kBAAkB;AAClB;IACI,gBAAgB;IAChB,iBAAiB;IACjB,UAAU;AACd;;AAEA,UAAU;AACV;;;IAGI,WAAW;AACf;AACA;IACI,YAAY;AAChB",sourcesContent:["/* Formatting CSS / General Settings */\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');\r\n\r\n:root {\r\n    --primary-color: rgb(13, 106, 134);\r\n    --primary-color-light: rgb(47, 165, 201);\r\n    --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: none;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 1.3rem;\r\n    line-height: 2rem;\r\n}\r\n\r\n/* Container */\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n}\r\n\r\nform input,\r\nform textarea,\r\nform label,\r\nform button,\r\nbutton {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input,\r\nform textarea,\r\nform button,\r\nbutton {\r\n    border: 1px solid rgb(163, 163, 163);\r\n    border-radius: 5px;\r\n}\r\n\r\nform input {\r\n    font-size: 1.5rem;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus,\r\nform button:focus,\r\nbutton:focus {\r\n    border: none;\r\n    box-shadow: 0 0 2px 2px var(--primary-color-light);\r\n    transition: .3s;\r\n}\r\n\r\nform button,\r\nbutton {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n    padding: 15px 0;\r\n    margin-top: 25px;\r\n    transition: background-color .3s;\r\n}\r\n\r\nform button:hover,\r\nbutton:hover {\r\n    background-color: var(--primary-color-darker);\r\n}\r\n\r\n\r\n/* Calculator Styles */\r\nh1 {\r\n    text-align: center;\r\n}\r\n.calculator {\r\n    margin: auto;\r\n    width:  400px;\r\n}\r\n\r\n.display {\r\n    font-size: 2rem;\r\n    text-align: right;\r\n    width: 100%;\r\n}\r\n\r\n.btn {\r\n    border: none;\r\n    background-color: #dfdfdf;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    width: 100%;\r\n    height: 50px;\r\n\r\n    transition: .2s;\r\n}\r\n.btn:hover {\r\n    background-color: #838282;\r\n}\r\n\r\n.btn-eq {\r\n    background-color: var(--primary-color);\r\n}\r\n.btn-eq:hover {\r\n    background-color: var(--primary-color-darker);\r\n}\r\n\r\n/* Form Validate */\r\n.error-message {\r\n    font-size: .8rem;\r\n    font-weight: bold;\r\n    color: red;\r\n}\r\n\r\n/* Axios */\r\ntable,\r\ntable tr,\r\ntable tr td {\r\n    width: 100%;\r\n}\r\ntable tr td {\r\n    padding: 5px;\r\n}\r\n"],sourceRoot:""}]);const i=A},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var o="",t=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),t&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=r(n),t&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(r,o,t,e,a){"string"==typeof r&&(r=[[null,r,void 0]]);var A={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(A[s]=!0)}for(var c=0;c<r.length;c++){var p=[].concat(r[c]);t&&A[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),o&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=o):p[2]=o),e&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=e):p[4]="".concat(e)),n.push(p))}},n}},537:r=>{r.exports=function(r){var n=r[1],o=r[3];if(!o)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(e," */"),A=o.sources.map((function(r){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(r," */")}));return[n].concat(A).concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function o(r){for(var o=-1,t=0;t<n.length;t++)if(n[t].identifier===r){o=t;break}return o}function t(r,t){for(var a={},A=[],i=0;i<r.length;i++){var s=r[i],c=t.base?s[0]+t.base:s[0],p=a[c]||0,u="".concat(c," ").concat(p);a[c]=p+1;var d=o(u),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(l);else{var f=e(l,t);t.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}A.push(u)}return A}function e(r,n){var o=n.domAPI(n);return o.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;o.update(r=n)}else o.remove()}}r.exports=function(r,e){var a=t(r=r||[],e=e||{});return function(r){r=r||[];for(var A=0;A<a.length;A++){var i=o(a[A]);n[i].references--}for(var s=t(r,e),c=0;c<a.length;c++){var p=o(a[c]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:r=>{var n={};r.exports=function(r,o){var t=function(r){if(void 0===n[r]){var o=document.querySelector(r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(r){o=null}n[r]=o}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,o)=>{r.exports=function(r){var n=o.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(o){!function(r,n,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var e=void 0!==o.layer;e&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,e&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,o)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},C={};function m(r){var n=C[r];if(void 0!==n)return n.exports;var o=C[r]={id:r,exports:{}};return f[r](o,o.exports,m),o.exports}m.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return m.d(n,{a:n}),n},m.d=(r,n)=>{for(var o in n)m.o(n,o)&&!m.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},m.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),r=m(379),n=m.n(r),o=m(795),t=m.n(o),e=m(569),a=m.n(e),A=m(565),i=m.n(A),s=m(216),c=m.n(s),p=m(589),u=m.n(p),d=m(122),(l={}).styleTagTransform=u(),l.setAttributes=i(),l.insert=a().bind(null,"head"),l.domAPI=t(),l.insertStyleElement=c(),n()(d.Z,l),d.Z&&d.Z.locals&&d.Z.locals})();
//# sourceMappingURL=bundle.js.map