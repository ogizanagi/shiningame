(self.webpackChunkshiningame=self.webpackChunkshiningame||[]).push([[143],{7338:(t,e,n)=>{var r={"./ambiant_light_controller.js":8939,"./fullscreen_controller.js":6103,"./game_thumbnails_parallax_controller.js":6350,"./lazy_image_controller.js":5213,"./spoiler_controller.js":3864};function o(t){var e=c(t);return n(e)}function c(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=c,t.exports=o,o.id=7338},8205:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r={"symfony--ux-lazy-image--lazy-image":Promise.resolve().then(n.bind(n,7759))}},8939:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});n(8304),n(4812),n(489),n(1539),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(l,t);var e,n,r,f=u(l);function l(){return o(this,l),f.apply(this,arguments)}return e=l,(n=[{key:"connect",value:function(){this.element.addEventListener("click",(function(){document.documentElement.classList.toggle("ambiant"),document.activeElement&&document.activeElement.blur()}))}}])&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),l}(n(7931).Controller)},6103:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});n(8304),n(4812),n(489),n(1539),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(l,t);var e,n,r,f=u(l);function l(){return o(this,l),f.apply(this,arguments)}return e=l,(n=[{key:"initialize",value:function(){document.addEventListener("fullscreenchange",(function(){document.fullscreenElement?document.documentElement.classList.add("fullscreen"):document.documentElement.classList.remove("fullscreen")}))}},{key:"connect",value:function(){this.element.addEventListener("click",(function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen(),document.activeElement&&document.activeElement.blur()}))}}])&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),l}(n(7931).Controller)},6350:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});n(1058),n(8304),n(4812),n(489),n(1539),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(l,t);var e,n,r,f=u(l);function l(){return o(this,l),f.apply(this,arguments)}return e=l,(n=[{key:"connect",value:function(){var t=this,e=!1;window.addEventListener("scroll",(function(){var n=window.scrollY;n>=400||n<0||(e||window.requestAnimationFrame((function(){!function(e){t.element.style.setProperty("--tw-translate-y","-".concat(parseInt(e/5),"px"))}(n),e=!1})),e=!0)}))}}])&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),l}(n(7931).Controller)},5213:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});n(2564),n(6699),n(2023),n(9070),n(8304),n(4812),n(489),n(1539),n(2419),n(8011),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(l,t);var e,n,r,f=u(l);function l(){return o(this,l),f.apply(this,arguments)}return e=l,n=[{key:"connect",value:function(){var t=this;this.element.getAttribute("data-hd-add-width")&&(this.element.width=this.element.getAttribute("data-hd-add-width"));var e=this.element.getAttribute("data-hd-src"),n=this.element.getAttribute("data-hd-srcset"),r=setInterval((function(){if(t.constructor.ready||t.constructor.done.includes(e)){clearInterval(r),t.constructor.ready=!1;var o=new Image;o.addEventListener("load",(function(){t.element.src=e,n&&(t.element.srcset=n),t.element.getAttribute("data-hd-add-width")&&t.element.removeAttribute("width"),t._dispatchEvent("lazy-image:ready",{hd:o}),t.constructor.ready=!0,t.constructor.done.push(e)})),o.src=e,n&&(o.srcset=n),t._dispatchEvent("lazy-image:connect",{hd:o})}}),50)}},{key:"_dispatchEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=document.createEvent("CustomEvent");o.initCustomEvent(t,n,r,e),this.element.dispatchEvent(o)}}],n&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),l}(n(7931).Controller);a(s,"ready",!0),a(s,"done",[])},3864:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});n(8304),n(4812),n(489),n(1539),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(l,t);var e,n,r,f=u(l);function l(){return o(this,l),f.apply(this,arguments)}return e=l,(n=[{key:"connect",value:function(){var t=this;this.element.addEventListener("click",(function e(n){n.preventDefault(),n.stopPropagation(),t.element.classList.remove("spoiler"),t.element.removeEventListener("click",e)}))}}])&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),l}(n(7931).Controller)},6953:(t,e,n)=>{"use strict";(0,n(2192).x)(n(7338))},7759:(t,e,n)=>{"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}n(2526),n(1817),n(1539),n(2165),n(6992),n(8783),n(3948),n(9070),n(8011),n(8304),n(2419),n(3710),n(489),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(l,t);var e,n,r,f=u(l);function l(){return o(this,l),f.apply(this,arguments)}return e=l,n=[{key:"connect",value:function(){var t=this,e=new Image;e.addEventListener("load",(function(){t.element.src=t.element.getAttribute("data-hd-src"),t._dispatchEvent("lazy-image:ready",{hd:e})})),e.src=this.element.getAttribute("data-hd-src"),this._dispatchEvent("lazy-image:connect",{hd:e})}},{key:"_dispatchEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=document.createEvent("CustomEvent");o.initCustomEvent(t,n,r,e),this.element.dispatchEvent(o)}}],n&&c(e.prototype,n),r&&c(e,r),l}(n(7931).Controller);e.default=a}},t=>{t.O(0,[272],(()=>{return e=6953,t(t.s=e);var e}));t.O()}]);