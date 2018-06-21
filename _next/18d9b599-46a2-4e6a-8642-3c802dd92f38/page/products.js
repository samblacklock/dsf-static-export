module.exports=__NEXT_REGISTER_PAGE("/products",function(){var t=webpackJsonp([4],{330:function(t,e,r){t.exports=r(331)},331:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:true});var n=r(33);var o=r.n(n);var i=r(1);var a=r.n(i);var s=r(52);var u=r(53);function f(t){f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};return f(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(t,n.key,n)}}function p(t,e,r){e&&l(t.prototype,e);r&&l(t,r);return t}function h(t,e){if(e&&("object"===f(e)||"function"===typeof e))return e;return y(t)}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:false,writable:true,configurable:true}});e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var b=function(t){d(e,t);function e(t){var r;c(this,e);r=h(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));r.title=t.item.fields.title;r.description=t.item.fields.description;r.image=t.assets.filter(function(e){if(e.sys.id===t.item.fields.img.sys.id)return e}).map(function(t){return t.fields.file.url});return r}p(e,[{key:"render",value:function t(){return a.a.createElement("div",{className:"product"},a.a.createElement("div",{className:"description"},a.a.createElement("h3",null,this.title),a.a.createElement("p",null,this.description)),a.a.createElement("div",{className:"image-wrapper"},a.a.createElement("img",{src:this.image,alt:"image"})))}}]);return e}(i["Component"]);var m=b;var v=r(332);var w=r.n(v);var _="https://cdn.contentful.com";var E="pisf6zzt2wph";var g="03e973bf485cbf59d0aa2a0569b8b901e8e100c1d2128dcf917bb3234c4fb393";var P=w()("".concat(_,"/spaces/").concat(E,"/entries?access_token=").concat(g));var T=P;function A(t){A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};return A(t)}function B(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t,e){try{var r=i[t](e);var a=r.value}catch(t){o(t);return}r.done?n(a):Promise.resolve(a).then(s,u)}function s(t){a("next",t)}function u(t){a("throw",t)}s()})}}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(t,n.key,n)}}function j(t,e,r){e&&x(t.prototype,e);r&&x(t,r);return t}function S(t,e){if(e&&("object"===A(e)||"function"===typeof e))return e;return U(t)}function U(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:false,writable:true,configurable:true}});e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var I=a.a.createElement("div",null,a.a.createElement("h1",{className:"stylized-heading"},a.a.createElement("span",{className:"large"},"Our fireplace "),a.a.createElement("span",{className:"small"},"collection...")));var D=function(t){R(e,t);function e(){O(this,e);return S(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}j(e,[{key:"render",value:function t(){var e=this;return a.a.createElement(s["a"],null,a.a.createElement(u["a"],{style:"flat",content:I}),a.a.createElement("section",null,this.props.items?this.props.items.map(function(t,r){return a.a.createElement(m,{key:r,item:t,assets:e.props.assets})}):a.a.createElement("h3",null,"No items to show")))}}],[{key:"getInitialProps",value:function(){var t=B(o.a.mark(function t(){var e;return o.a.wrap(function t(r){while(1)switch(r.prev=r.next){case 0:r.next=2;return T;case 2:e=r.sent;if(!e.bodyUsed){r.next=7;break}r.t0=this.data;r.next=10;break;case 7:r.next=9;return e.json();case 9:r.t0=r.sent;case 10:this.data=r.t0;return r.abrupt("return",{items:this.data.items,assets:this.data.includes.Asset});case 12:case"end":return r.stop()}},t,this)}));return function e(){return t.apply(this,arguments)}}()}]);return e}(i["Component"]);var k=e["default"]=D},332:function(t,e,r){r(333);t.exports=self.fetch.bind(self)},333:function(t,e){(function(t){"use strict";if(t.fetch)return;var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{new Blob;return true}catch(t){return false}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer){var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"];var n=function(t){return t&&DataView.prototype.isPrototypeOf(t)};var o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1}}function i(t){"string"!==typeof t&&(t=String(t));if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){"string"!==typeof t&&(t=String(t));return t}function s(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};e.iterable&&(r[Symbol.iterator]=function(){return r});return r}function u(t){this.map={};t instanceof u?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}u.prototype.append=function(t,e){t=i(t);e=a(e);var r=this.map[t];this.map[t]=r?r+","+e:e};u.prototype["delete"]=function(t){delete this.map[i(t)]};u.prototype.get=function(t){t=i(t);return this.has(t)?this.map[t]:null};u.prototype.has=function(t){return this.map.hasOwnProperty(i(t))};u.prototype.set=function(t,e){this.map[i(t)]=a(e)};u.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)};u.prototype.keys=function(){var t=[];this.forEach(function(e,r){t.push(r)});return s(t)};u.prototype.values=function(){var t=[];this.forEach(function(e){t.push(e)});return s(t)};u.prototype.entries=function(){var t=[];this.forEach(function(e,r){t.push([r,e])});return s(t)};e.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=true}function c(t){return new Promise(function(e,r){t.onload=function(){e(t.result)};t.onerror=function(){r(t.error)}})}function l(t){var e=new FileReader;var r=c(e);e.readAsArrayBuffer(t);return r}function p(t){var e=new FileReader;var r=c(e);e.readAsText(t);return r}function h(t){var e=new Uint8Array(t);var r=new Array(e.length);for(var n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);e.set(new Uint8Array(t));return e.buffer}function d(){this.bodyUsed=false;this._initBody=function(t){this._bodyInit=t;if(t)if("string"===typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&n(t)){this._bodyArrayBuffer=y(t.buffer);this._bodyInit=new Blob([this._bodyArrayBuffer])}else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=y(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))};if(e.blob){this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))};this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(l)}}this.text=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return p(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)};e.formData&&(this.formData=function(){return this.text().then(w)});this.json=function(){return this.text().then(JSON.parse)};return this}var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t){var e=t.toUpperCase();return b.indexOf(e)>-1?e:t}function v(t,e){e=e||{};var r=e.body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url;this.credentials=t.credentials;e.headers||(this.headers=new u(t.headers));this.method=t.method;this.mode=t.mode;if(!r&&null!=t._bodyInit){r=t._bodyInit;t.bodyUsed=true}}else this.url=String(t);this.credentials=e.credentials||this.credentials||"omit";!e.headers&&this.headers||(this.headers=new u(e.headers));this.method=m(e.method||this.method||"GET");this.mode=e.mode||this.mode||null;this.referrer=null;if(("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})};function w(t){var e=new FormData;t.trim().split("&").forEach(function(t){if(t){var r=t.split("=");var n=r.shift().replace(/\+/g," ");var o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}});return e}function _(t){var e=new u;var r=t.replace(/\r?\n[\t ]+/g," ");r.split(/\r?\n/).forEach(function(t){var r=t.split(":");var n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}});return e}d.call(v.prototype);function E(t,e){e||(e={});this.type="default";this.status=void 0===e.status?200:e.status;this.ok=this.status>=200&&this.status<300;this.statusText="statusText"in e?e.statusText:"OK";this.headers=new u(e.headers);this.url=e.url||"";this._initBody(t)}d.call(E.prototype);E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})};E.error=function(){var t=new E(null,{status:0,statusText:""});t.type="error";return t};var g=[301,302,303,307,308];E.redirect=function(t,e){if(-1===g.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})};t.Headers=u;t.Request=v;t.Response=E;t.fetch=function(t,r){return new Promise(function(n,o){var i=new v(t,r);var a=new XMLHttpRequest;a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:_(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;n(new E(e,t))};a.onerror=function(){o(new TypeError("Network request failed"))};a.ontimeout=function(){o(new TypeError("Network request failed"))};a.open(i.method,i.url,true);"include"===i.credentials?a.withCredentials=true:"omit"===i.credentials&&(a.withCredentials=false);"responseType"in a&&e.blob&&(a.responseType="blob");i.headers.forEach(function(t,e){a.setRequestHeader(e,t)});a.send("undefined"===typeof i._bodyInit?null:i._bodyInit)})};t.fetch.polyfill=true})("undefined"!==typeof self?self:this)}},[330]);return{page:t.default}});