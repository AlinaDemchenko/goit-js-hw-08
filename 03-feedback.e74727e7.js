!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,b=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var o,i,f,u,a,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,a=setTimeout(T,t),s?p(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=f}function T(){var e=g();if(O(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-l);return d?b(n,f-(e-c)):n}(e))}function h(e){return a=void 0,m&&o?p(e):(o=i=void 0,u)}function w(){var e=g(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===a)return S(l);if(d)return a=setTimeout(T,t),p(l)}return void 0===a&&(a=setTimeout(T,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,f=(d="maxWait"in n)?v(j(n.maxWait)||0,t):f,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=i=a=void 0},w.flush=function(){return void 0===a?u:h(g())},w}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||a.test(t)?l(t.slice(2),r?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var S,O={form:document.querySelector(".feedback-form"),button:document.querySelector(".submit")},T=O.form.elements.email,h=O.form.elements.message;S=JSON.parse(localStorage.getItem("feedback-form-state"))||{},T.value=S.email||"",h.value=S.message||"",O.form.addEventListener("input",e(t)((function(e){var t={};t.email=T.value||"",t.message=h.value||"",localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),O.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.e74727e7.js.map
