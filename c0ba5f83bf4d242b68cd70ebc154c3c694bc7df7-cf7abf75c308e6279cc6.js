(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2360],{9951:function(t,n,e){"use strict";var r=e(7294),o=e(9352);const i=t=>{let{className:n}=t;return r.createElement("div",{className:"opacity-20 hover:opacity-80 transition-opacity duration-150 ease-in-out z-50 "+n},r.createElement("button",{className:"ghost text-4xl",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},r.createElement(o.gcy,null)))};n.Z=(0,r.memo)(i)},5437:function(t,n,e){"use strict";var r=e(7294),o=e(3493),i=e.n(o);n.Z=t=>{let{className:n="",children:e,hidden:o=!0,visiblePageYOffset:c=500}=t;const{0:u,1:a}=(0,r.useState)(o),f=i()((()=>{a(window.pageYOffset<=c)}),150);return(0,r.useLayoutEffect)((()=>(window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)})),[]),r.createElement("div",{className:(u?"hidden":"")+" "+n},e)}},2705:function(t,n,e){var r=e(5639).Symbol;t.exports=r},4239:function(t,n,e){var r=e(2705),o=e(9607),i=e(2333),c="[object Null]",u="[object Undefined]",a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:c:a&&a in Object(t)?o(t):i(t)}},7561:function(t,n,e){var r=e(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},1957:function(t,n,e){var r="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=r},9607:function(t,n,e){var r=e(2705),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var n=i.call(t,u),e=t[u];try{t[u]=void 0;var r=!0}catch(a){}var o=c.call(t);return r&&(n?t[u]=e:delete t[u]),o}},2333:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},5639:function(t,n,e){var r=e(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},7990:function(t){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},3279:function(t,n,e){var r=e(3218),o=e(7771),i=e(4841),c="Expected a function",u=Math.max,a=Math.min;t.exports=function(t,n,e){var f,s,l,v,p,d,m=0,x=!1,y=!1,b=!0;if("function"!=typeof t)throw new TypeError(c);function g(n){var e=f,r=s;return f=s=void 0,m=n,v=t.apply(r,e)}function h(t){var e=t-d;return void 0===d||e>=n||e<0||y&&t-m>=l}function w(){var t=o();if(h(t))return j(t);p=setTimeout(w,function(t){var e=n-(t-d);return y?a(e,l-(t-m)):e}(t))}function j(t){return p=void 0,b&&f?g(t):(f=s=void 0,v)}function E(){var t=o(),e=h(t);if(f=arguments,s=this,d=t,e){if(void 0===p)return function(t){return m=t,p=setTimeout(w,n),x?g(t):v}(d);if(y)return clearTimeout(p),p=setTimeout(w,n),g(d)}return void 0===p&&(p=setTimeout(w,n)),v}return n=i(n)||0,r(e)&&(x=!!e.leading,l=(y="maxWait"in e)?u(i(e.maxWait)||0,n):l,b="trailing"in e?!!e.trailing:b),E.cancel=function(){void 0!==p&&clearTimeout(p),m=0,f=d=s=p=void 0},E.flush=function(){return void 0===p?v:j(o())},E}},3218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,n,e){var r=e(4239),o=e(7005),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},7771:function(t,n,e){var r=e(5639);t.exports=function(){return r.Date.now()}},3493:function(t,n,e){var r=e(3279),o=e(3218),i="Expected a function";t.exports=function(t,n,e){var c=!0,u=!0;if("function"!=typeof t)throw new TypeError(i);return o(e)&&(c="leading"in e?!!e.leading:c,u="trailing"in e?!!e.trailing:u),r(t,n,{leading:c,maxWait:n,trailing:u})}},4841:function(t,n,e){var r=e(7561),o=e(3218),i=e(3448),c=NaN,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return c;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var e=a.test(t);return e||f.test(t)?s(t.slice(2),e?2:8):u.test(t)?c:+t}},1151:function(t,n,e){"use strict";e.d(n,{Zo:function(){return u},ah:function(){return i}});var r=e(7294);const o=r.createContext({});function i(t){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof t?t(n):{...n,...t}),[n,t])}const c={};function u({components:t,children:n,disableParentContext:e}){let u;return u=e?"function"==typeof t?t({}):t||c:i(t),r.createElement(o.Provider,{value:u},n)}}}]);
//# sourceMappingURL=c0ba5f83bf4d242b68cd70ebc154c3c694bc7df7-cf7abf75c308e6279cc6.js.map