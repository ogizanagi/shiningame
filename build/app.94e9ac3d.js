(self.webpackChunkshiningame=self.webpackChunkshiningame||[]).push([[143],{7338:(t,e,n)=>{var r={"./affix_navbar_controller.js":1925,"./ambiant_light_controller.js":8939,"./fullscreen_controller.js":6103,"./game_thumbnails_parallax_controller.js":6350,"./lazy_image_controller.js":5213,"./spoiler_controller.js":3864,"./swup_plugins_controller.js":2330};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=7338},8205:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r={"symfony--ux-lazy-image--lazy-image":Promise.resolve().then(n.bind(n,7759)),"symfony--ux-swup--swup":Promise.resolve().then(n.bind(n,7565))}},1925:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});n(8304),n(4812),n(489),n(1539),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(a,t);var e,n,r,f=u(a);function a(){return o(this,a),f.apply(this,arguments)}return e=a,(n=[{key:"connect",value:function(){var t=this,e=!1,n=!1,r=document.querySelector(".game-banner").offsetHeight;window.document.addEventListener("scroll",(function(){var o=window.scrollY;n&&o>=r||!n&&o<r||(e||window.requestAnimationFrame((function(){o>=r?(t.element.classList.add("navbar-items--fixed"),n=!0):(t.element.classList.remove("navbar-items--fixed"),n=!1),e=!1})),e=!0)}))}}])&&i(e.prototype,n),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(n(6599).Qr)},8939:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});n(8304),n(4812),n(489),n(1539),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(a,t);var e,n,r,f=u(a);function a(){return o(this,a),f.apply(this,arguments)}return e=a,(n=[{key:"connect",value:function(){this.element.addEventListener("click",(function(){document.querySelector(".page").classList.toggle("ambiant"),document.activeElement&&document.activeElement.blur()}))}}])&&i(e.prototype,n),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(n(6599).Qr)},6103:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});n(8304),n(4812),n(489),n(1539),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(a,t);var e,n,r,f=u(a);function a(){return o(this,a),f.apply(this,arguments)}return e=a,(n=[{key:"initialize",value:function(){document.addEventListener("fullscreenchange",(function(){document.fullscreenElement?document.querySelector(".page").classList.add("fullscreen"):document.querySelector(".page").classList.remove("fullscreen")}))}},{key:"connect",value:function(){this.element.addEventListener("click",(function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen(),document.activeElement&&document.activeElement.blur()}))}}])&&i(e.prototype,n),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(n(6599).Qr)},6350:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});n(1058),n(8304),n(4812),n(489),n(1539),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(a,t);var e,n,r,f=u(a);function a(){return o(this,a),f.apply(this,arguments)}return e=a,(n=[{key:"connect",value:function(){var t=this,e=!1;window.addEventListener("scroll",(function(){var n=window.scrollY;n>=400||n<0||(e||window.requestAnimationFrame((function(){!function(e){t.element.style.setProperty("--tw-translate-y","-".concat(parseInt(e/5),"px"))}(n),e=!1})),e=!0)}))}}])&&i(e.prototype,n),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(n(6599).Qr)},5213:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});n(2564),n(6699),n(2023),n(9070),n(8304),n(4812),n(489),n(1539),n(2419),n(8011),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(a,t);var e,n,r,f=u(a);function a(){return o(this,a),f.apply(this,arguments)}return e=a,n=[{key:"connect",value:function(){var t=this;this.element.getAttribute("data-hd-add-width")&&(this.element.width=this.element.getAttribute("data-hd-add-width"));var e=this.element.getAttribute("data-hd-src"),n=this.element.getAttribute("data-hd-srcset"),r=setInterval((function(){if(t.constructor.ready||t.constructor.done.includes(e)){clearInterval(r),t.constructor.ready=!1;var o=new Image;o.addEventListener("load",(function(){t.element.src=e,n&&(t.element.srcset=n),t.element.getAttribute("data-hd-add-width")&&t.element.removeAttribute("width"),t._dispatchEvent("lazy-image:ready",{image:o}),t.constructor.ready=!0,t.constructor.done.push(e)})),o.src=e,n&&(o.srcset=n),t._dispatchEvent("lazy-image:connect",{image:o})}}),50)}},{key:"_dispatchEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.element.dispatchEvent(new CustomEvent(t,{detail:e}))}}],n&&i(e.prototype,n),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(n(6599).Qr);l(s,"ready",!0),l(s,"done",[])},3864:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});n(8304),n(4812),n(489),n(1539),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(a,t);var e,n,r,f=u(a);function a(){return o(this,a),f.apply(this,arguments)}return e=a,(n=[{key:"connect",value:function(){var t=this;this.element.addEventListener("click",(function e(n){n.preventDefault(),n.stopPropagation(),t.element.classList.remove("spoiler"),t.element.removeEventListener("click",e)}))}}])&&i(e.prototype,n),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(n(6599).Qr)},2330:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>y});n(8304),n(4812),n(489),n(1539),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);var r=n(6599),o=n(537),i=n(7652);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(s,t);var e,n,r,c=l(s);function s(){return u(this,s),c.apply(this,arguments)}return e=s,(n=[{key:"connect",value:function(){this.element.addEventListener("swup:pre-connect",this._onPreConnect)}},{key:"disconnect",value:function(){this.element.removeEventListener("swup:pre-connect",this._onPreConnect)}},{key:"_onPreConnect",value:function(t){t.detail.options.plugins.push(new o.Z({doScrollingRightAway:!1,animateScroll:{betweenPages:!1}}),new i.Z({transition:300,delay:100,initialValue:.25,hideImmediately:!0}))}}])&&f(e.prototype,n),r&&f(e,r),Object.defineProperty(e,"prototype",{writable:!1}),s}(r.Qr)},6953:(t,e,n)=>{"use strict";(0,n(2192).x)(n(7338))},7759:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});n(1249),n(7941),n(2222),n(8702),n(9600),n(8304),n(4812),n(489),n(6992),n(1539),n(3948),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(8783);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(a,t);var e,n,r,f=u(a);function a(){return o(this,a),f.apply(this,arguments)}return e=a,(n=[{key:"connect",value:function(){var t=this,e=new Image,n=this.element,r=this._calculateSrcsetString();e.addEventListener("load",(function(){n.src=t.srcValue,r&&(n.srcset=r),t._dispatchEvent("lazy-image:ready",{image:e})})),e.src=this.srcValue,r&&(e.srcset=r),this._dispatchEvent("lazy-image:connect",{image:e})}},{key:"_calculateSrcsetString",value:function(){var t=this;return this.hasSrcsetValue?Object.keys(this.srcsetValue).map((function(e){return"".concat(t.srcsetValue[e]," ").concat(e)})).join(", ").trimEnd():""}},{key:"_dispatchEvent",value:function(t,e){this.element.dispatchEvent(new CustomEvent(t,{detail:e}))}}])&&i(e.prototype,n),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(n(6599).Qr);l.values={src:String,srcset:Object}},7565:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>v});n(2222),n(7327),n(1539),n(2772),n(8304),n(4812),n(489),n(6992),n(3948),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(8783);var r=n(6599),o=n(2593),i=n(3784),c=n(3766),u=n(2460),f=n.n(u),a=n(9717),l=n.n(a);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(a,t);var e,n,r,u=d(a);function a(){return p(this,a),u.apply(this,arguments)}return e=a,(n=[{key:"connect",value:function(){var t=this.containersValue,e=this.mainElementValue||t[0]||"#swup",n=[e].concat(t),r={containers:n.filter((function(t,e){return n.indexOf(t)===e})),plugins:["slide"===this.themeValue?new(l())({mainElement:e}):new(f())({mainElement:e}),new c.Z]};this.hasMainElementValue&&(r.mainElement=this.mainElementValue),this.hasAnimateHistoryBrowsingValue&&(r.animateHistoryBrowsing=this.animateHistoryBrowsingValue),this.hasAnimationSelectorValue&&(r.animationSelector=this.animationSelectorValue),this.hasCacheValue&&(r.cache=this.cacheValue),this.hasLinkSelectorValue&&(r.linkSelector=this.linkSelectorValue),this.debugValue&&r.plugins.push(new i.Z),this._dispatchEvent("swup:pre-connect",{options:r});var u=new o.Z(r);this._dispatchEvent("swup:connect",{swup:u,options:r})}},{key:"_dispatchEvent",value:function(t,e){this.element.dispatchEvent(new CustomEvent(t,{detail:e}))}}])&&y(e.prototype,n),r&&y(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(r.Qr);v.values={animateHistoryBrowsing:Boolean,animationSelector:String,cache:Boolean,containers:Array,linkSelector:String,theme:String,debug:Boolean,mainElement:String}}},t=>{t.O(0,[972],(()=>{return e=6953,t(t.s=e);var e}));t.O()}]);