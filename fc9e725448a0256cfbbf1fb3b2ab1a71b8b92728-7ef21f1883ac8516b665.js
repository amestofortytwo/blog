(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3318],{9951:function(t,n,e){"use strict";var r=e(7294),o=e(9352);const i=t=>{let{className:n}=t;return r.createElement("div",{className:`opacity-20 hover:opacity-80 transition-opacity duration-150 ease-in-out z-50 ${n}`},r.createElement("button",{className:"ghost text-4xl",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},r.createElement(o.gcy,null)))};n.Z=(0,r.memo)(i)},5437:function(t,n,e){"use strict";var r=e(7294),o=e(3493),i=e.n(o);n.Z=t=>{let{className:n="",children:e,hidden:o=!0,visiblePageYOffset:c=500}=t;const{0:u,1:a}=(0,r.useState)(o),f=i()((()=>{a(window.pageYOffset<=c)}),150);return(0,r.useLayoutEffect)((()=>(window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)})),[]),r.createElement("div",{className:`${u?"hidden":""} ${n}`},e)}},2705:function(t,n,e){var r=e(5639).Symbol;t.exports=r},4239:function(t,n,e){var r=e(2705),o=e(9607),i=e(2333),c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?o(t):i(t)}},7561:function(t,n,e){var r=e(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},1957:function(t,n,e){var r="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=r},9607:function(t,n,e){var r=e(2705),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var n=i.call(t,u),e=t[u];try{t[u]=void 0;var r=!0}catch(a){}var o=c.call(t);return r&&(n?t[u]=e:delete t[u]),o}},2333:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},5639:function(t,n,e){var r=e(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},7990:function(t){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},3279:function(t,n,e){var r=e(3218),o=e(7771),i=e(4841),c=Math.max,u=Math.min;t.exports=function(t,n,e){var a,f,s,l,v,p,d=0,m=!1,x=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=a,r=f;return a=f=void 0,d=n,l=t.apply(r,e)}function g(t){var e=t-p;return void 0===p||e>=n||e<0||x&&t-d>=s}function h(){var t=o();if(g(t))return w(t);v=setTimeout(h,function(t){var e=n-(t-p);return x?u(e,s-(t-d)):e}(t))}function w(t){return v=void 0,y&&a?b(t):(a=f=void 0,l)}function j(){var t=o(),e=g(t);if(a=arguments,f=this,p=t,e){if(void 0===v)return function(t){return d=t,v=setTimeout(h,n),m?b(t):l}(p);if(x)return clearTimeout(v),v=setTimeout(h,n),b(p)}return void 0===v&&(v=setTimeout(h,n)),l}return n=i(n)||0,r(e)&&(m=!!e.leading,s=(x="maxWait"in e)?c(i(e.maxWait)||0,n):s,y="trailing"in e?!!e.trailing:y),j.cancel=function(){void 0!==v&&clearTimeout(v),d=0,a=p=f=v=void 0},j.flush=function(){return void 0===v?l:w(o())},j}},3218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,n,e){var r=e(4239),o=e(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},7771:function(t,n,e){var r=e(5639);t.exports=function(){return r.Date.now()}},3493:function(t,n,e){var r=e(3279),o=e(3218);t.exports=function(t,n,e){var i=!0,c=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(e)&&(i="leading"in e?!!e.leading:i,c="trailing"in e?!!e.trailing:c),r(t,n,{leading:i,maxWait:n,trailing:c})}},4841:function(t,n,e){var r=e(7561),o=e(3218),i=e(3448),c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var e=u.test(t);return e||a.test(t)?f(t.slice(2),e?2:8):c.test(t)?NaN:+t}},1151:function(t,n,e){"use strict";e.d(n,{Zo:function(){return u},ah:function(){return i}});var r=e(7294);const o=r.createContext({});function i(t){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof t?t(n):{...n,...t}),[n,t])}const c={};function u({components:t,children:n,disableParentContext:e}){let u;return u=e?"function"==typeof t?t({}):t||c:i(t),r.createElement(o.Provider,{value:u},n)}}}]);
//# sourceMappingURL=fc9e725448a0256cfbbf1fb3b2ab1a71b8b92728-7ef21f1883ac8516b665.js.map