(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4619],{9733:function(e){"use strict";function t(){return null}function r(){return t}t.isRequired=t,e.exports={and:r,between:r,booleanSome:r,childrenHavePropXorChildren:r,childrenOf:r,childrenOfType:r,childrenSequenceOf:r,componentWithName:r,disallowedIf:r,elementType:r,empty:r,explicitNull:r,forbidExtraProps:Object,integer:r,keysOf:r,mutuallyExclusiveProps:r,mutuallyExclusiveTrueProps:r,nChildren:r,nonNegativeInteger:t,nonNegativeNumber:r,numericString:r,object:r,or:r,predicate:r,range:r,ref:r,requiredBy:r,restrictedProp:r,sequenceOf:r,shape:r,stringEndsWith:r,stringStartsWith:r,uniqueArray:r,uniqueArrayOf:r,valuesOf:r,withShape:r}},8341:function(e,t,r){e.exports=r(9733)},1924:function(e,t,r){"use strict";var n=r(210),o=r(5559),a=o(n("String.prototype.indexOf"));e.exports=function(e,t){var r=n(e,!!t);return"function"==typeof r&&a(e,".prototype.")>-1?o(r):r}},5559:function(e,t,r){"use strict";var n=r(8612),o=r(210),a=o("%Function.prototype.apply%"),i=o("%Function.prototype.call%"),l=o("%Reflect.apply%",!0)||n.call(i,a),c=o("%Object.getOwnPropertyDescriptor%",!0),s=o("%Object.defineProperty%",!0),u=o("%Math.max%");if(s)try{s({},"a",{value:1})}catch(f){s=null}e.exports=function(e){var t=l(n,i,arguments);c&&s&&(c(t,"length").configurable&&s(t,"length",{value:1+u(0,e.length-(arguments.length-1))}));return t};var p=function(){return l(n,a,arguments)};s?s(e.exports,"apply",{value:p}):e.exports.apply=p},7734:function(e,t,r){"use strict";r.r(t),r.d(t,{addEventListener:function(){return s}});var n=!("undefined"==typeof window||!window.document||!window.document.createElement);var o=void 0;function a(){return void 0===o&&(o=function(){if(!n)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),r=function(){};window.addEventListener("testPassiveEventSupport",r,t),window.removeEventListener("testPassiveEventSupport",r,t)}catch(o){}return e}()),o}function i(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function l(e){this.target=e,this.events={}}l.prototype.getEventHandlers=function(e,t){var r,n=String(e)+" "+String((r=t)?!0===r?100:(r.capture<<0)+(r.passive<<1)+(r.once<<2):0);return this.events[n]||(this.events[n]={handlers:[],handleEvent:void 0},this.events[n].nextHandlers=this.events[n].handlers),this.events[n]},l.prototype.handleEvent=function(e,t,r){var n=this.getEventHandlers(e,t);n.handlers=n.nextHandlers,n.handlers.forEach((function(e){e&&e(r)}))},l.prototype.add=function(e,t,r){var n=this,o=this.getEventHandlers(e,r);i(o),0===o.nextHandlers.length&&(o.handleEvent=this.handleEvent.bind(this,e,r),this.target.addEventListener(e,o.handleEvent,r)),o.nextHandlers.push(t);var a=!0;return function(){if(a){a=!1,i(o);var l=o.nextHandlers.indexOf(t);o.nextHandlers.splice(l,1),0===o.nextHandlers.length&&(n.target&&n.target.removeEventListener(e,o.handleEvent,r),o.handleEvent=void 0)}}};var c="__consolidated_events_handlers__";function s(e,t,r,n){e[c]||(e[c]=new l(e));var o=function(e){if(e)return a()?e:!!e.capture}(n);return e[c].add(t,r,o)}},4289:function(e,t,r){"use strict";var n=r(2215),o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),a=Object.prototype.toString,i=Array.prototype.concat,l=Object.defineProperty,c=r(1044)(),s=l&&c,u=function(e,t,r,n){if(t in e)if(!0===n){if(e[t]===r)return}else if("function"!=typeof(o=n)||"[object Function]"!==a.call(o)||!n())return;var o;s?l(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r},p=function(e,t){var r=arguments.length>2?arguments[2]:{},a=n(t);o&&(a=i.call(a,Object.getOwnPropertySymbols(t)));for(var l=0;l<a.length;l+=1)u(e,a[l],t[a[l]],r[a[l]])};p.supportsDescriptors=!!s,e.exports=p},1676:function(e){"use strict";e.exports=function(e){if(arguments.length<1)throw new TypeError("1 argument is required");if("object"!=typeof e)throw new TypeError("Argument 1 (”other“) to Node.contains must be an instance of Node");var t=e;do{if(this===t)return!0;t&&(t=t.parentNode)}while(t);return!1}},2483:function(e,t,r){"use strict";var n=r(4289),o=r(1676),a=r(4356),i=a(),l=function(e,t){return i.apply(e,[t])};n(l,{getPolyfill:a,implementation:o,shim:r(1514)}),e.exports=l},4356:function(e,t,r){"use strict";var n=r(1676);e.exports=function(){if("undefined"!=typeof document){if(document.contains)return document.contains;if(document.body&&document.body.contains)try{if("boolean"==typeof document.body.contains.call(document,""))return document.body.contains}catch(e){}}return n}},1514:function(e,t,r){"use strict";var n=r(4289),o=r(4356);e.exports=function(){var e=o();return"undefined"!=typeof document&&(n(document,{contains:e},{contains:function(){return document.contains!==e}}),"undefined"!=typeof Element&&n(Element.prototype,{contains:e},{contains:function(){return Element.prototype.contains!==e}})),e}},7648:function(e){"use strict";var t="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,n=Object.prototype.toString,o="[object Function]";e.exports=function(e){var a=this;if("function"!=typeof a||n.call(a)!==o)throw new TypeError(t+a);for(var i,l=r.call(arguments,1),c=Math.max(0,a.length-l.length),s=[],u=0;u<c;u++)s.push("$"+u);if(i=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof i){var t=a.apply(this,l.concat(r.call(arguments)));return Object(t)===t?t:this}return a.apply(e,l.concat(r.call(arguments)))})),a.prototype){var p=function(){};p.prototype=a.prototype,i.prototype=new p,p.prototype=null}return i}},8612:function(e,t,r){"use strict";var n=r(7648);e.exports=Function.prototype.bind||n},5911:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(1883),o=r(7294),a=r(498),i=r(7660);const l=e=>{let{icon:t,className:r=""}=e;const n=i.$s[t].icon;return o.createElement(n,{className:r})},c=e=>{let{data:t,className:r=""}=e;return o.createElement("ul",{className:"list-none grid grid-flow-col-dense auto-cols-auto "+r},t.map((e=>{var t;let[r,n]=e,a=(null===(t=i.$s[r])||void 0===t?void 0:t.url)+"/"+n;return(/^(?:https?:\/\/)/.test(n)||/^mailto:/.test(n))&&(a=n),o.createElement("li",{key:r},o.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},o.createElement(l,{className:"site-link",icon:r})))})))};var s=(0,o.memo)(c);const u=e=>{let{bio:t,name:r,initial:i,avatar:{normal:l,className:c="h-32 w-32"},sns:u,className:p="",yamlId:f}=e;return o.createElement("div",{className:p+" flex flex-wrap space-x-0 sm:space-x-8"},o.createElement("div",{className:"w-full sm:w-auto text-center"},o.createElement(a.Z,{className:"mb-4 "+c,initial:i,image:l})),o.createElement("div",{className:"flex flex-col items-stretch justify-between flex-1 text-center sm:text-left"},o.createElement("h3",{className:"leading-tight md:leading-tight"},r,f&&o.createElement(n.rU,{to:"/authors/@"+f,className:"site-link mx-2"},o.createElement("small",null,"@",f))),o.createElement("p",{className:"text-base"},t),o.createElement(s,{className:"max-w-lg text-xl my-0",data:u})))};var p=(0,o.memo)(u)},498:function(e,t,r){"use strict";var n=r(7294),o=r(8032);const a=e=>{let{image:t,initial:r,className:a=""}=e;const i=(0,o.c)(t);return i?n.createElement(o.G,{className:"rounded-full z-0 ring-2 ring-white dark:ring-gray-600 avatar avatar-rounded "+a,image:i,alt:""}):n.createElement("figure",{className:"avatar avatar-rounded bg-gray-500 text-white ring ring-white "+a,"data-initial":r})};t.Z=(0,n.memo)(a)},9586:function(e,t,r){"use strict";var n=r(7294),o=r(1883);const a=e=>{let{categories:t,className:r}=e;return t&&t.length?n.createElement("div",{className:"flex flex-wrap gap-3 "+r},t.map(((e,t)=>n.createElement(o.rU,{className:"site-tag block",key:t,to:"/categories/"+e},e)))):n.createElement(n.Fragment,null)};t.Z=(0,n.memo)(a)},9286:function(e,t,r){"use strict";var n=r(7294),o=r(3854),a=r(1883),i=r(9834),l=r(498);const c=e=>{let{data:t}=e;const r=Array.from(t);return r.length>3&&(r.length=3),n.createElement("div",{className:"flex overflow-hidden -space-x-3 p-1"},r.map((e=>{let{id:t,initial:r,avatar:{normal:o}}=e;return n.createElement(l.Z,{className:"h-8 w-8",key:t,initial:r,image:o})})))},s=e=>{let{data:t}=e;const r=t.map((e=>{let{name:t}=e;return t.substring(0,t.indexOf(" "))}));return t.length>3&&(r.length=3,r.push("+"+(t.length-3))),n.createElement("span",{className:"self-center site-link"},r.join(", "))},u=e=>{let{data:t}=e;return n.createElement("ul",{className:"list-none m-0 -m-2 rounded"},t.map((e=>{let{id:t,yamlId:r,initial:o,avatar:{normal:i},name:c}=e;return n.createElement("li",{key:t,className:"m-0 p-3"},n.createElement(a.rU,{className:"flex space-x-4 justify-center",to:"/authors/@"+r},n.createElement(l.Z,{className:"h-8 w-8",initial:o,image:i}),n.createElement("span",{className:"self-center site-link"},c)))})))},p=e=>{let{data:t}=e;if(1==t.length)return n.createElement(u,{data:t});const{0:r,1:a}=(0,n.useState)(!1),l=()=>{a(!r)};return n.createElement("div",{className:"relative rounded hover:bg-gray-100 dark:hover:bg-gray-800 -mx-3"},n.createElement("div",{"aria-hidden":!0,className:"flex space-x-2 justify-center p-3 cursor-pointer",onClick:l,onKeyDown:l},n.createElement(c,{data:t}),n.createElement(s,{data:t}),n.createElement(o.kzR,{size:20,className:"self-center"})),r&&n.createElement(i.default,{onOutsideClick:l},n.createElement("div",{"aria-hidden":!0,className:"absolute top-0 left-0 w-full h-full z-50\n            "+(r?"block":"hidden")+"\n            ",onClick:l,onKeyDown:l},n.createElement("div",{className:"flex bg-gray-100 dark:bg-gray-800 p-3 rounded justify-between"},n.createElement(u,{data:t}),n.createElement(o.lVW,{size:20,className:"self-start mt-3"})))))};t.Z=(0,n.memo)(p)},197:function(e,t,r){"use strict";var n=r(7294);const o=e=>{let{timeToRead:t,date:r,className:o=""}=e;return n.createElement("span",{className:"text-gray-500 "+o},r," • ",Math.round(t)," min read")};t.Z=(0,n.memo)(o)},8188:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294),o=r(1883),a=r(8032),i=r(9586),l=r(197);const c=e=>{let{title:t,description:r,date:c,categories:s,hero:u,timeToRead:p,slug:f}=e;const y=(0,a.c)(null==u?void 0:u.normal);return n.createElement("div",{className:"panel"},n.createElement(o.rU,{to:f},y?n.createElement("div",{className:"panel-image"},n.createElement(a.G,{image:y,alt:""})):null,n.createElement("h3",null,t)),n.createElement("p",{className:"panel-content"},r),n.createElement(i.Z,{categories:s}),n.createElement("br",null),n.createElement("span",{className:"panel-footer"},n.createElement(l.Z,{timeToRead:p,date:c})))};var s=(0,n.memo)(c);const u=e=>{let{posts:t,className:r=""}=e;return n.createElement("div",{className:r},t.map((e=>{let{id:t,timeToRead:r,frontmatter:{categories:o,date:a,description:i,hero:l,title:c},fields:{slug:u}}=e;return n.createElement(s,{key:t,title:c,description:i,date:a,categories:o,hero:l,slug:u,timeToRead:r})})))};var p=(0,n.memo)(u)},2271:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),o=r(5648),a=r(7660),i=r(3035),l=r(4405);function c(e){return(0,l.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}}]})(e)}var s=r(7735);const u=(0,n.forwardRef)(((e,t)=>{const r=(0,n.useRef)(null),{0:l,1:u}=(0,n.useState)(0),{0:p,1:f}=(0,n.useState)(0);(0,n.useLayoutEffect)((()=>{if(r.current){const e=r.current.getBoundingClientRect();u(e.width),f(e.height)}else u(0),f(0)}),[r]);const{left:y,top:d,textContent:m}=(0,o.td)(t.current||document.body,l/2,p+12);return n.createElement("div",{className:"selection-popup absolute justify-center items-center space-x-6 dark:text-black "+(""!=m?"opacity-100 z-50":"opacity-0 z-0"),style:{left:y,top:d},ref:r},n.createElement("span",null,"Share: "),n.createElement("a",{target:"_blank",rel:"noreferrer",onClick:()=>(0,i.hb)(a.xh,{share:"Twitter"}),href:'https://twitter.com/intent/tweet?text="'+m+'" -- '+window.location.href},n.createElement(s.mWf,null)),n.createElement("button",{className:"text-gray-500",onClick:()=>{(0,i.vQ)(m),(0,i.hb)(a.xh,{share:"copy"})}},n.createElement(c,{size:20})))})),p=(e,t)=>n.createElement(i.h_,null,n.createElement(u,{ref:t}));var f=(0,n.memo)((0,n.forwardRef)(p))},8762:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(7294),o=r(9352),a=r(3035),i=r(7660);var l=e=>{let{children:t,text:r="",active:o,className:a=""}=e;return n.createElement("span",{className:"tooltip tooltip-top-center "+(o?"active":"")+" "+a},t,n.createElement("span",{className:"tooltip-container transition-color delay-100 duration-200 ease rounded text-sm bg-gray-200 dark:bg-gray-800"},n.createElement("span",{className:"whitespace-pre"},r)))};const c=i.$s.twitter.icon,s=i.$s.facebook.icon,u=i.$s.linkedin.icon,p=i.$s.pocket.icon,f=e=>{let{title:t,url:r,hashtags:f,description:y,className:d="",twitter:m,facebook:h,linkedin:v,pocket:g,copy:b}=e;return n.createElement("span",{className:"flex items-center "+d},m&&n.createElement(l,{text:"Share to Twitter"},n.createElement("div",{className:"site-link"},n.createElement("a",{target:"_blank",rel:"noreferrer",onClick:()=>(0,a.hb)(i.xh,{share:"Twitter"}),href:"https://twitter.com/share"+(0,a.jv)({title:t,url:r,hashtags:f})},n.createElement(c,null)))),h&&n.createElement(l,{text:"Share to Facebook"},n.createElement("div",{className:"site-link"},n.createElement("a",{target:"_blank",rel:"noreferrer",onClick:()=>(0,a.hb)(i.xh,{share:"Facebook"}),href:"https://www.facebook.com/sharer/sharer.php"+(0,a.jv)({title:t,u:r,description:y,hashtag:f})},n.createElement(s,null)))),v&&n.createElement(l,{text:"Share to Linkedin"},n.createElement("div",{className:"site-link"},n.createElement("a",{target:"_blank",rel:"noreferrer",onClick:()=>(0,a.hb)(i.xh,{share:"Linkedin"}),href:"https://linkedin.com/shareArticle"+(0,a.jv)({title:t,url:r,summary:y})},n.createElement(u,null)))),g&&n.createElement(l,{text:"Share to Pocket"},n.createElement("div",{className:"site-link"},n.createElement("a",{target:"_blank",rel:"noreferrer",onClick:()=>(0,a.hb)(i.xh,{share:"Pocket"}),href:"https://getpocket.com/save"+(0,a.jv)({title:t,url:r})},n.createElement(p,null)))),b&&n.createElement(l,{text:"Copy URL address"},n.createElement("div",{className:"site-link"},n.createElement("a",{onClick:()=>{(0,a.vQ)(window.location.href),(0,a.hb)(i.xh,{share:"copy"})}},n.createElement(o.DNM,{className:"text-[110%]"})))))};var y=(0,n.memo)(f)},5555:function(e,t,r){"use strict";var n=r(7294);const o=(0,n.forwardRef)(((e,t)=>{let{items:r,levels:a,lvlRef:i}=e;return i.current<a?(i.current++,n.createElement("ul",{ref:t,className:"list-none"},r.map(((e,t)=>n.createElement("li",{className:"mt-2",key:t},n.createElement("a",{className:"site-link",href:e.url},e.title),e.items&&n.createElement(o,{items:e.items,levels:a,lvlRef:i})))))):n.createElement(n.Fragment,null)})),a=(e,t)=>{let{className:r="",title:a="Table of Contents",levels:i=2,items:l}=e;const c=(0,n.useRef)(0),s=(0,n.useRef)(null),u=new Map;return(0,n.useLayoutEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{const t=u.get(e.target);e.intersectionRatio<=0&&e.boundingClientRect.bottom<=0&&(t.bottom=e.boundingClientRect.bottom,t.prev.classList.remove("active"),t.next.classList.add("active")),e.intersectionRatio>0&&e.boundingClientRect.bottom>0&&t.bottom<0&&(t.bottom=e.boundingClientRect.bottom,t.next.classList.remove("active"),t.prev.classList.add("active"))}))}));if(s.current){const r=s.current.querySelectorAll("a[href]");if(!r)return;r.forEach(((n,o)=>{var a;const i=n.getAttribute("href"),l=t.current.querySelector('a[href="'+i+'"]');if(!l)return;const c=null!==(a=l.parentElement.previousElementSibling)&&void 0!==a?a:l.parentElement;u.set(c,{prev:r[Math.max(o-1,0)],next:r[o]}),e.observe(c)}))}}),[]),n.createElement("div",{className:"table-of-contents "+r},n.createElement("h5",null,a),n.createElement(o,{ref:s,items:l,levels:i,lvlRef:c}))};t.Z=(0,n.memo)((0,n.forwardRef)(a))},210:function(e,t,r){"use strict";var n,o=SyntaxError,a=Function,i=TypeError,l=function(e){try{return a('"use strict"; return ('+e+").constructor;")()}catch(t){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"")}catch(R){c=null}var s=function(){throw new i},u=c?function(){try{return s}catch(e){try{return c(arguments,"callee").get}catch(t){return s}}}():s,p=r(1405)(),f=Object.getPrototypeOf||function(e){return e.__proto__},y={},d="undefined"==typeof Uint8Array?n:f(Uint8Array),m={"%AggregateError%":"undefined"==typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":p?f([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":y,"%AsyncGenerator%":y,"%AsyncGeneratorFunction%":y,"%AsyncIteratorPrototype%":y,"%Atomics%":"undefined"==typeof Atomics?n:Atomics,"%BigInt%":"undefined"==typeof BigInt?n:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?n:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?n:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?n:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":a,"%GeneratorFunction%":y,"%Int8Array%":"undefined"==typeof Int8Array?n:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?n:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":p?f(f([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"undefined"==typeof Map?n:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&p?f((new Map)[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?n:Promise,"%Proxy%":"undefined"==typeof Proxy?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?n:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&p?f((new Set)[Symbol.iterator]()):n,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":p?f(""[Symbol.iterator]()):n,"%Symbol%":p?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":u,"%TypedArray%":d,"%TypeError%":i,"%Uint8Array%":"undefined"==typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?n:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?n:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?n:WeakSet};try{null.error}catch(R){var h=f(f(R));m["%Error.prototype%"]=h}var v=function e(t){var r;if("%AsyncFunction%"===t)r=l("async function () {}");else if("%GeneratorFunction%"===t)r=l("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=l("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&(r=f(o.prototype))}return m[t]=r,r},g={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},b=r(8612),E=r(7642),w=b.call(Function.call,Array.prototype.concat),x=b.call(Function.apply,Array.prototype.splice),A=b.call(Function.call,String.prototype.replace),k=b.call(Function.call,String.prototype.slice),O=b.call(Function.call,RegExp.prototype.exec),P=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,N=/\\(\\)?/g,S=function(e){var t=k(e,0,1),r=k(e,-1);if("%"===t&&"%"!==r)throw new o("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new o("invalid intrinsic syntax, expected opening `%`");var n=[];return A(e,P,(function(e,t,r,o){n[n.length]=r?A(o,N,"$1"):t||e})),n},j=function(e,t){var r,n=e;if(E(g,n)&&(n="%"+(r=g[n])[0]+"%"),E(m,n)){var a=m[n];if(a===y&&(a=v(n)),void 0===a&&!t)throw new i("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:a}}throw new o("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new i("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new i('"allowMissing" argument must be a boolean');if(null===O(/^%?[^%]*%?$/,e))throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=S(e),n=r.length>0?r[0]:"",a=j("%"+n+"%",t),l=a.name,s=a.value,u=!1,p=a.alias;p&&(n=p[0],x(r,w([0,1],p)));for(var f=1,y=!0;f<r.length;f+=1){var d=r[f],h=k(d,0,1),v=k(d,-1);if(('"'===h||"'"===h||"`"===h||'"'===v||"'"===v||"`"===v)&&h!==v)throw new o("property names with quotes must have matching quotes");if("constructor"!==d&&y||(u=!0),E(m,l="%"+(n+="."+d)+"%"))s=m[l];else if(null!=s){if(!(d in s)){if(!t)throw new i("base intrinsic for "+e+" exists, but the property is not available.");return}if(c&&f+1>=r.length){var g=c(s,d);s=(y=!!g)&&"get"in g&&!("originalValue"in g.get)?g.get:s[d]}else y=E(s,d),s=s[d];y&&!u&&(m[l]=s)}}return s}},1044:function(e,t,r){"use strict";var n=r(210)("%Object.defineProperty%",!0),o=function(){if(n)try{return n({},"a",{value:1}),!0}catch(e){return!1}return!1};o.hasArrayLengthDefineBug=function(){if(!o())return null;try{return 1!==n([],"length",{value:1}).length}catch(e){return!0}},e.exports=o},1405:function(e,t,r){"use strict";var n="undefined"!=typeof Symbol&&Symbol,o=r(5419);e.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&o())))}},5419:function(e){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},7642:function(e,t,r){"use strict";var n=r(8612);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},8987:function(e,t,r){"use strict";var n;if(!Object.keys){var o=Object.prototype.hasOwnProperty,a=Object.prototype.toString,i=r(1414),l=Object.prototype.propertyIsEnumerable,c=!l.call({toString:null},"toString"),s=l.call((function(){}),"prototype"),u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(e){var t=e.constructor;return t&&t.prototype===e},f={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!f["$"+e]&&o.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{p(window[e])}catch(t){return!0}}catch(t){return!0}return!1}();n=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===a.call(e),n=i(e),l=t&&"[object String]"===a.call(e),f=[];if(!t&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var d=s&&r;if(l&&e.length>0&&!o.call(e,0))for(var m=0;m<e.length;++m)f.push(String(m));if(n&&e.length>0)for(var h=0;h<e.length;++h)f.push(String(h));else for(var v in e)d&&"prototype"===v||!o.call(e,v)||f.push(String(v));if(c)for(var g=function(e){if("undefined"==typeof window||!y)return p(e);try{return p(e)}catch(t){return!1}}(e),b=0;b<u.length;++b)g&&"constructor"===u[b]||!o.call(e,u[b])||f.push(u[b]);return f}}e.exports=n},2215:function(e,t,r){"use strict";var n=Array.prototype.slice,o=r(1414),a=Object.keys,i=a?function(e){return a(e)}:r(8987),l=Object.keys;i.shim=function(){if(Object.keys){var e=function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2);e||(Object.keys=function(e){return o(e)?l(n.call(e)):l(e)})}else Object.keys=i;return Object.keys||i},e.exports=i},1414:function(e){"use strict";var t=Object.prototype.toString;e.exports=function(e){var r=t.call(e),n="[object Arguments]"===r;return n||(n="[object Array]"!==r&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===t.call(e.callee)),n}},3513:function(e,t,r){"use strict";var n=r(1897),o=r(1924),a=o("Object.prototype.propertyIsEnumerable"),i=o("Array.prototype.push");e.exports=function(e){var t=n(e),r=[];for(var o in t)a(t,o)&&i(r,t[o]);return r}},5869:function(e,t,r){"use strict";var n=r(4289),o=r(5559),a=r(3513),i=r(7164),l=r(6970),c=o(i(),Object);n(c,{getPolyfill:i,implementation:a,shim:l}),e.exports=c},7164:function(e,t,r){"use strict";var n=r(3513);e.exports=function(){return"function"==typeof Object.values?Object.values:n}},6970:function(e,t,r){"use strict";var n=r(7164),o=r(4289);e.exports=function(){var e=n();return o(Object,{values:e},{values:function(){return Object.values!==e}}),e}},6428:function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=u(r(7294)),a=u(r(5697)),i=r(8341),l=r(7734),c=u(r(5869)),s=u(r(2483));function u(e){return e&&e.__esModule?e:{default:e}}var p={BLOCK:"block",FLEX:"flex",INLINE:"inline",INLINE_BLOCK:"inline-block",CONTENTS:"contents"},f=(0,i.forbidExtraProps)({children:a.default.node.isRequired,onOutsideClick:a.default.func.isRequired,disabled:a.default.bool,useCapture:a.default.bool,display:a.default.oneOf((0,c.default)(p))}),y={disabled:!1,useCapture:!0,display:p.BLOCK},d=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return a.onMouseDown=a.onMouseDown.bind(a),a.onMouseUp=a.onMouseUp.bind(a),a.setChildNodeRef=a.setChildNodeRef.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.disabled,r=e.useCapture;t||this.addMouseDownEventListener(r)}},{key:"componentDidUpdate",value:function(e){var t=e.disabled,r=this.props,n=r.disabled,o=r.useCapture;t!==n&&(n?this.removeEventListeners():this.addMouseDownEventListener(o))}},{key:"componentWillUnmount",value:function(){this.removeEventListeners()}},{key:"onMouseDown",value:function(e){var t=this.props.useCapture;this.childNode&&(0,s.default)(this.childNode,e.target)||(this.removeMouseUp&&(this.removeMouseUp(),this.removeMouseUp=null),this.removeMouseUp=(0,l.addEventListener)(document,"mouseup",this.onMouseUp,{capture:t}))}},{key:"onMouseUp",value:function(e){var t=this.props.onOutsideClick,r=this.childNode&&(0,s.default)(this.childNode,e.target);this.removeMouseUp&&(this.removeMouseUp(),this.removeMouseUp=null),r||t(e)}},{key:"setChildNodeRef",value:function(e){this.childNode=e}},{key:"addMouseDownEventListener",value:function(e){this.removeMouseDown=(0,l.addEventListener)(document,"mousedown",this.onMouseDown,{capture:e})}},{key:"removeEventListeners",value:function(){this.removeMouseDown&&this.removeMouseDown(),this.removeMouseUp&&this.removeMouseUp()}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.display;return o.default.createElement("div",{ref:this.setChildNodeRef,style:r!==p.BLOCK&&(0,c.default)(p).includes(r)?{display:r}:void 0},t)}}]),t}(o.default.Component);t.default=d,d.propTypes=f,d.defaultProps=y},9834:function(e,t,r){e.exports=r(6428)},1897:function(e,t,r){"use strict";e.exports=r(4559)},4559:function(e,t,r){"use strict";var n=r(210)("%TypeError%");e.exports=function(e,t){if(null==e)throw new n(t||"Cannot call method on "+e);return e}}}]);
//# sourceMappingURL=d000835e5016b1f742be37b2c6572b6c77151c82-9f6ae741e0708adde639.js.map