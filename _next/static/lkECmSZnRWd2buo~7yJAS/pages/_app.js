(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{244:function(e,n,t){e.exports=t(356)},340:function(e,n,t){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=t(398),{page:e.exports.default}})},341:function(e,n,t){"use strict";var r=t(28),c=t(10);Object.defineProperty(n,"__esModule",{value:!0}),n.createUrl=C,n.Container=n.default=void 0;var i=c(t(55)),o=c(t(56)),u=c(t(342)),a=c(t(14)),f=c(t(15)),l=c(t(34)),s=c(t(35)),p=c(t(36)),h=c(t(24)),v=r(t(0)),d=c(t(21)),y=t(33),b=t(49),E=function(e){function n(){return(0,a.default)(this,n),(0,l.default)(this,(0,s.default)(n).apply(this,arguments))}var t;return(0,p.default)(n,e),(0,f.default)(n,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,b.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,n=e.router,t=e.Component,r=e.pageProps,c=C(n);return v.default.createElement(m,null,v.default.createElement(t,(0,u.default)({},r,{url:c})))}}],[{key:"getInitialProps",value:(t=(0,o.default)(i.default.mark(function e(n){var t,r,c;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.Component,n.router,r=n.ctx,e.next=3,(0,y.loadGetInitialProps)(t,r);case 3:return c=e.sent,e.abrupt("return",{pageProps:c});case 5:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}]),n}(v.Component);n.default=E,(0,h.default)(E,"childContextTypes",{headManager:d.default.object,router:d.default.object});var m=function(e){function n(){return(0,a.default)(this,n),(0,l.default)(this,(0,s.default)(n).apply(this,arguments))}return(0,p.default)(n,e),(0,f.default)(n,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var n=document.getElementById(e);n&&setTimeout(function(){return n.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),n}(v.Component);n.Container=m;var g=(0,y.execOnce)(function(){0});function C(e){var n=e.pathname,t=e.asPath,r=e.query;return{get query(){return g(),r},get pathname(){return g(),n},get asPath(){return g(),t},back:function(){g(),e.back()},push:function(n,t){return g(),e.push(n,t)},pushTo:function(n,t){g();var r=t?n:null,c=t||n;return e.push(r,c)},replace:function(n,t){return g(),e.replace(n,t)},replaceTo:function(n,t){g();var r=t?n:null,c=t||n;return e.replace(r,c)}}}},342:function(e,n,t){var r=t(87);function c(){return e.exports=c=r||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}e.exports=c},356:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(0),c=o(t(357)),i=o(t(358));function o(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};r.get||r.set?Object.defineProperty(n,t,r):n[t]=e[t]}return n.default=e,n}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,n){for(var t,r=0;r<n.length;r++)(t=n[r]).enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default=function(e,n){var t=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).localhost,o=void 0===t?"localhost":t;return function(t){var h=function(h){function v(){var e,n;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,v);for(var t=arguments.length,r=Array(t),c=0;c<t;c++)r[c]=arguments[c];return n=function(e,n){return!n||"object"!==u(n)&&"function"!=typeof n?s(e):n}(this,(e=f(v)).call.apply(e,[this].concat(r))),p(s(s(n)),"state",{analytics:void 0}),n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(v,r.Component),function(e,n,t){n&&a(e.prototype,n),t&&a(e,t)}(v,[{key:"componentDidMount",value:function(){var t=function(e){return location.hostname===e}(o)?i:c;t.init(e),t.pageview();var r=n.onRouteChangeComplete;n.onRouteChangeComplete=function(){"function"==typeof r&&r(),t.pageview()},this.setState({analytics:t})}},{key:"render",value:function(){return(0,r.createElement)(t,function(e){for(var n=1;n<arguments.length;n++){var t=null==arguments[n]?{}:arguments[n],r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){p(e,n,t[n])})}return e}({},this.props,{analytics:this.state.analytics}))}}]),v}();return t.getInitialProps&&(h.getInitialProps=t.getInitialProps),h}}},357:function(e,n,t){"use strict";var r,c=(r=t(396))&&r.__esModule?r:{default:r};Object.defineProperty(n,"__esModule",{value:!0}),n.init=function(e){i&&!window.GA_INITIALIZED&&e&&c.default.initialize(e)},n.pageview=function(){c.default.set({page:window.location.pathname}),c.default.pageview(window.location.pathname)},n.event=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";e&&n&&c.default.event({category:e,action:n})},n.exception=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];e&&c.default.exception({description:e,fatal:n})};var i="undefined"!=typeof window},358:function(e,n,t){"use strict";var r,c=(r=t(359))&&r.__esModule?r:{default:r};Object.defineProperty(n,"__esModule",{value:!0}),n.init=function(e){i("Analytics init triggered for ".concat(e))},n.pageview=function(){i("Pageview triggered for ".concat(window.location.pathname))},n.event=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";i("Event for category ".concat(e," and action ").concat(n," triggered"))},n.exception=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];i("".concat(n?"Fatal exception":"Exception"," with description ").concat(e))};var i=(0,c.default)("analytics")},359:function(e,n,t){(function(r){n.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},n.formatArgs=function(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;n.splice(1,0,t,"color: inherit");let r=0,c=0;n[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(r++,"%c"===e&&(c=r))}),n.splice(c,0,t)},n.save=function(e){try{e?n.storage.setItem("debug",e):n.storage.removeItem("debug")}catch(e){}},n.load=function(){let e;try{e=n.storage.getItem("debug")}catch(e){}!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG);return e},n.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},n.storage=function(){try{return localStorage}catch(e){}}(),n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=t(361)(n);const{formatters:c}=e.exports;c.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,t(360))},360:function(e,n){var t,r,c=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var a,f=[],l=!1,s=-1;function p(){l&&a&&(l=!1,a.length?f=a.concat(f):s=-1,f.length&&h())}function h(){if(!l){var e=u(p);l=!0;for(var n=f.length;n;){for(a=f,f=[];++s<n;)a&&a[s].run();s=-1,n=f.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function v(e,n){this.fun=e,this.array=n}function d(){}c.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];f.push(new v(e,n)),1!==f.length||l||u(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=d,c.addListener=d,c.once=d,c.off=d,c.removeListener=d,c.removeAllListeners=d,c.emit=d,c.prependListener=d,c.prependOnceListener=d,c.listeners=function(e){return[]},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},361:function(e,n,t){e.exports=function(e){function n(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return r.colors[Math.abs(n)%r.colors.length]}function r(e){let t;function o(...e){if(!o.enabled)return;const n=o,c=Number(new Date),i=c-(t||c);n.diff=i,n.prev=t,n.curr=c,t=c,e[0]=r.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let u=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(t,c)=>{if("%%"===t)return t;u++;const i=r.formatters[c];if("function"==typeof i){const r=e[u];t=i.call(n,r),e.splice(u,1),u--}return t}),r.formatArgs.call(n,e),(n.log||r.log).apply(n,e)}return o.namespace=e,o.enabled=r.enabled(e),o.useColors=r.useColors(),o.color=n(e),o.destroy=c,o.extend=i,"function"==typeof r.init&&r.init(o),r.instances.push(o),o}function c(){const e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function i(e,n){const t=r(this.namespace+(void 0===n?":":n)+e);return t.log=this.log,t}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){const e=[...r.names.map(o),...r.skips.map(o).map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){let n;r.save(e),r.names=[],r.skips=[];const t=("string"==typeof e?e:"").split(/[\s,]+/),c=t.length;for(n=0;n<c;n++)t[n]&&("-"===(e=t[n].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(n=0;n<r.instances.length;n++){const e=r.instances[n];e.enabled=r.enabled(e.namespace)}},r.enabled=function(e){if("*"===e[e.length-1])return!0;let n,t;for(n=0,t=r.skips.length;n<t;n++)if(r.skips[n].test(e))return!1;for(n=0,t=r.names.length;n<t;n++)if(r.names[n].test(e))return!0;return!1},r.humanize=t(362),Object.keys(e).forEach(n=>{r[n]=e[n]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=n,r.enable(r.load()),r}},362:function(e,n){var t=1e3,r=60*t,c=60*r,i=24*c,o=7*i,u=365.25*i;function a(e,n,t,r){var c=n>=1.5*t;return Math.round(e/t)+" "+r+(c?"s":"")}e.exports=function(e,n){n=n||{};var f=typeof e;if("string"===f&&e.length>0)return function(e){if((e=String(e)).length>100)return;var n=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!n)return;var a=parseFloat(n[1]);switch((n[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*u;case"weeks":case"week":case"w":return a*o;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*c;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===f&&!1===isNaN(e))return n.long?function(e){var n=Math.abs(e);if(n>=i)return a(e,n,i,"day");if(n>=c)return a(e,n,c,"hour");if(n>=r)return a(e,n,r,"minute");if(n>=t)return a(e,n,t,"second");return e+" ms"}(e):function(e){var n=Math.abs(e);if(n>=i)return Math.round(e/i)+"d";if(n>=c)return Math.round(e/c)+"h";if(n>=r)return Math.round(e/r)+"m";if(n>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},396:function(e,n,t){"use strict";function r(e){return e.replace(/^\s+|\s+$/g,"")}t.r(n);var c=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function i(e){console.warn("[react-ga]",e)}var o="REDACTED (Potential Email Address)";function u(e,n){return function(e){return/[^@]+@[^@]+/.test(e)}(e)?(i("This arg looks like an email address, redacting."),o):n?r(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,n,t){return n>0&&n+e.length!==t.length&&e.search(c)>-1&&":"!==t.charAt(n-2)&&("-"!==t.charAt(n+e.length)||"-"===t.charAt(n-1))&&t.charAt(n-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}var a=function(e){var n,t,r,c,i,o,u,a="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?a=e.gaAddress:e&&e.debug&&(a="https://www.google-analytics.com/analytics_debug.js"),n=window,t=document,r="script",c=a,i="ga",n.GoogleAnalyticsObject=i,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,o=t.createElement(r),u=t.getElementsByTagName(r)[0],o.async=1,o.src=c,u.parentNode.insertBefore(o,u)};function f(e){console.info("[react-ga]",e)}var l=[],s={calls:l,ga:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];l.push(n.concat())}},p=t(0),h=t.n(p),v=t(21),d=t.n(v);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function E(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var O="_blank",S=1,A=function(e){function n(){var e,t,r,c;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return r=this,c=(e=m(n)).call.apply(e,[this].concat(o)),t=!c||"object"!==y(c)&&"function"!=typeof c?C(r):c,w(C(C(t)),"handleClick",function(e){var r=t.props,c=r.target,i=r.eventLabel,o=r.to,u=r.onClick,a={label:i},f=c!==O,l=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===S);f&&l?(e.preventDefault(),n.trackLink(a,function(){window.location.href=o})):n.trackLink(a,function(){}),u&&u(e)}),t}var t,r,c;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,p["Component"]),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.to,t=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){w(e,n,t[n])})}return e}({},b(e,["to"]),{href:n,onClick:this.handleClick});return this.props.target===O&&(t.rel="noopener noreferrer"),delete t.eventLabel,h.a.createElement("a",t)}}])&&E(t.prototype,r),c&&E(t,c),n}();function T(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}w(A,"trackLink",function(){i("ga tracking not enabled")}),w(A,"propTypes",{eventLabel:d.a.string.isRequired,target:d.a.string,to:d.a.string,onClick:d.a.func}),w(A,"defaultProps",{target:null,to:null,onClick:null}),t.d(n,"initialize",function(){return G}),t.d(n,"ga",function(){return B}),t.d(n,"set",function(){return U}),t.d(n,"send",function(){return $}),t.d(n,"pageview",function(){return Z}),t.d(n,"modalview",function(){return L}),t.d(n,"timing",function(){return H}),t.d(n,"event",function(){return V}),t.d(n,"exception",function(){return N}),t.d(n,"plugin",function(){return Y}),t.d(n,"outboundLink",function(){return Q}),t.d(n,"OutboundLink",function(){return W}),t.d(n,"testModeAPI",function(){return X});var j=!1,D=!0,z=!1,I=!0,q=function(){var e;return z?s.ga.apply(s,arguments):"undefined"!=typeof window&&(window.ga?(e=window).ga.apply(e,arguments):i("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function M(e){return u(e,D)}function R(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var c=t[0];if("function"==typeof q){if("string"!=typeof c)return void i("ga command must be a string");!I&&Array.isArray(e)||q.apply(void 0,t),Array.isArray(e)&&e.forEach(function(e){q.apply(void 0,x(["".concat(e,".").concat(c)].concat(t.slice(1))))})}}function J(e,n){e?(n&&(n.debug&&!0===n.debug&&(j=!0),!1===n.titleCase&&(D=!1)),n&&n.gaOptions?q("create",e,n.gaOptions):q("create",e,"auto")):i("gaTrackingID is required in initialize()")}function G(e,n){if(n&&!0===n.testMode)z=!0;else{if("undefined"==typeof window)return!1;a(n)}return I=!n||"boolean"!=typeof n.alwaysSendToDefaultTracker||n.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach(function(e){"object"===P(e)?J(e.trackingId,e):i("All configs must be an object")}):J(e,n),!0}function B(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.length>0&&(q.apply(void 0,n),j&&(f("called ga('arguments');"),f("with arguments: ".concat(JSON.stringify(n))))),window.ga}function U(e,n){e?"object"===P(e)?(0===Object.keys(e).length&&i("empty `fieldsObject` given to .set()"),R(n,"set",e),j&&(f("called ga('set', fieldsObject);"),f("with fieldsObject: ".concat(JSON.stringify(e))))):i("Expected `fieldsObject` arg to be an Object"):i("`fieldsObject` is required in .set()")}function $(e,n){R(n,"send",e),j&&(f("called ga('send', fieldObject);"),f("with fieldObject: ".concat(JSON.stringify(e))),f("with trackers: ".concat(JSON.stringify(n))))}function Z(e,n,t){if(e){var c=r(e);if(""!==c){var o={};if(t&&(o.title=t),R(n,"send",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){F(e,n,t[n])})}return e}({hitType:"pageview",page:c},o)),j){f("called ga('send', 'pageview', path);");var u="";t&&(u=" and title: ".concat(t)),f("with path: ".concat(c).concat(u))}}else i("path cannot be an empty string in .pageview()")}else i("path is required in .pageview()")}function L(e,n){if(e){var t,c="/"===(t=r(e)).substring(0,1)?t.substring(1):t;if(""!==c){var o="/modal/".concat(c);R(n,"send","pageview",o),j&&(f("called ga('send', 'pageview', path);"),f("with path: ".concat(o)))}else i("modalName cannot be an empty string or a single / in .modalview()")}else i("modalName is required in .modalview(modalName)")}function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.category,t=e.variable,r=e.value,c=e.label,o=arguments.length>1?arguments[1]:void 0;if(n&&t&&r&&"number"==typeof r){var u={hitType:"timing",timingCategory:M(n),timingVar:M(t),timingValue:r};c&&(u.timingLabel=M(c)),$(u,o)}else i("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.category,t=e.action,r=e.label,c=e.value,o=e.nonInteraction,u=e.transport,a=T(e,["category","action","label","value","nonInteraction","transport"]),f=arguments.length>1?arguments[1]:void 0;if(n&&t){var l={hitType:"event",eventCategory:M(n),eventAction:M(t)};r&&(l.eventLabel=M(r)),void 0!==c&&("number"!=typeof c?i("Expected `args.value` arg to be a Number."):l.eventValue=c),void 0!==o&&("boolean"!=typeof o?i("`args.nonInteraction` must be a boolean."):l.nonInteraction=o),void 0!==u&&("string"!=typeof u?i("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(u)&&i("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=u)),Object.keys(a).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){l[e]=a[e]}),Object.keys(a).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){l[e]=a[e]}),$(l,f)}else i("args.category AND args.action are required in event()")}function N(e,n){var t=e.description,r=e.fatal,c={hitType:"exception"};t&&(c.exDescription=M(t)),void 0!==r&&("boolean"!=typeof r?i("`args.fatal` must be a boolean."):c.exFatal=r),$(c,n)}var Y={require:function(e,n){if(e){var t=r(e);if(""!==t)if(n){if("object"!==P(n))return void i("Expected `options` arg to be an Object");0===Object.keys(n).length&&i("Empty `options` given to .require()"),B("require",t,n),j&&f("called ga('require', '".concat(t,"', ").concat(JSON.stringify(n)))}else B("require",t),j&&f("called ga('require', '".concat(t,"');"));else i("`name` cannot be an empty string in .require()")}else i("`name` is required in .require()")},execute:function(e,n){var t,r;if(1==(arguments.length<=2?0:arguments.length-2)?t=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],t=arguments.length<=3?void 0:arguments[3]),"string"!=typeof e)i("Expected `pluginName` arg to be a String.");else if("string"!=typeof n)i("Expected `action` arg to be a String.");else{var c="".concat(e,":").concat(n);t=t||null,r&&t?(B(c,r,t),j&&(f("called ga('".concat(c,"');")),f('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(t))))):t?(B(c,t),j&&(f("called ga('".concat(c,"');")),f("with payload: ".concat(JSON.stringify(t))))):(B(c),j&&f("called ga('".concat(c,"');")))}}};function Q(e,n,t){if("function"==typeof n)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:M(e.label)},c=!1,o=setTimeout(function(){c=!0,n()},250);r.hitCallback=function(){clearTimeout(o),c||n()},$(r,t)}else i("args.label is required in outboundLink()");else i("hitCallback function is required")}A.origTrackLink=A.trackLink,A.trackLink=Q;var W=A,X=s;n.default={initialize:G,ga:B,set:U,send:$,pageview:Z,modalview:L,timing:H,event:V,exception:N,plugin:Y,outboundLink:Q,OutboundLink:W,testModeAPI:s}},398:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),i=t(88),o=t.n(i),u=t(22),a=t.n(u),f=t(41),l=t.n(f),s=t(244),p=t.n(s),h=(t(363),t(6)),v=t(12),d=t.n(v),y=(t(365),t(16)),b=t.n(y),E=function(e){return c.a.createElement("nav",{className:d()("topbar-mobile d-flex justify-content-between",e.className)},c.a.createElement(b.a,{href:"/"},c.a.createElement("a",{href:"/",className:"brand"},h.c)),c.a.createElement("button",{className:"border-0 bg-transparent text-black-50",onClick:e.onClickToggler},c.a.createElement("i",{className:"fas fa-bars"})))},m=Object(f.withRouter)(function(e){return c.a.createElement("div",{className:d()("side-menu",e.className)},c.a.createElement("div",{className:"side-menu-inner"},c.a.createElement(b.a,{href:"/"},c.a.createElement("a",{href:"/",className:"brand"},h.c)),c.a.createElement("p",{className:"text-muted font-weight-light pt-1"},c.a.createElement("small",null,"Study hard, play harder.")),c.a.createElement("ul",{className:"list list-unstyled"},c.a.createElement("li",{className:d()({"font-weight-bold":"/"===e.router.pathname})},c.a.createElement(b.a,{href:"/"},c.a.createElement("a",{href:"/"},"Home"))),c.a.createElement("li",{className:d()({"font-weight-bold":"/about"===e.router.pathname})},c.a.createElement(b.a,{href:"/about"},c.a.createElement("a",{href:"/about"},"About"))),c.a.createElement("li",{className:d()({"font-weight-bold":"/resume"===e.router.pathname})},c.a.createElement(b.a,{href:"/resume"},c.a.createElement("a",{href:"/resume"},"Resume"))))))}),g=(new Date).getFullYear(),C=function(){return c.a.createElement("footer",{className:"text-center mt-4"},c.a.createElement("p",{className:"mb-0 text-dark"},c.a.createElement("small",null,"© Yuku Takahashi ",g," - This work is licensed under a"," ",c.a.createElement("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY-NC-SA 4.0 "))))};function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,n){return(A=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var F=function(e){function n(e){var t,r,c;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,(t=!(c=S(n).call(this,e))||"object"!==w(c)&&"function"!=typeof c?T(r):c).state={expanded:!1},t.collapse=t.collapse.bind(T(T(t))),t.toggle=t.toggle.bind(T(T(t))),t}var t,r,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&A(e,n)}(n,c.a.Component),t=n,(r=[{key:"render",value:function(){return c.a.createElement("div",{className:d()("layout mx-md-auto d-md-flex",{expanded:this.state.expanded})},c.a.createElement(E,{className:"d-md-none py-4 px-3",onClickToggler:this.toggle}),c.a.createElement(m,{className:"d-md-block px-3 p-lg-5 py-4"}),c.a.createElement("div",{className:"flex-md-grow-1 bg-white px-sm-3 pt-lg-5 py-4 overflow-hidden",onClick:this.collapse},this.props.children,c.a.createElement(C,null)))}},{key:"toggle",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"collapse",value:function(){this.setState({expanded:!1})}}])&&O(t.prototype,r),i&&O(t,i),n}();function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,n){return!n||"object"!==P(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,n){return(z=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var I=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),j(this,D(n).apply(this,arguments))}var t,r,u;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&z(e,n)}(n,o.a),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.Component,t=e.pageProps;return c.a.createElement(i.Container,null,c.a.createElement(a.a,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),c.a.createElement("title",null,h.c),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/static/icons/apple-icon-57x57.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/static/icons/apple-icon-60x60.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/static/icons/apple-icon-72x72.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/static/icons/apple-icon-76x76.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/static/icons/apple-icon-114x114.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/static/icons/apple-icon-120x120.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/static/icons/apple-icon-144x144.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/static/icons/apple-icon-152x152.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/static/icons/apple-icon-180x180.png"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/static/icons/android-icon-192x192.png"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/static/icons/favicon-32x32.png"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/static/icons/favicon-96x96.png"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/static/icons/favicon-16x16.png"}),c.a.createElement("link",{rel:"icon",href:"/static/icons/favicon.ico"}),c.a.createElement("link",{rel:"manifest",href:"/static/config/manifest.json"}),c.a.createElement("meta",{name:"msapplication-TileColor",content:"#00BCD4"}),c.a.createElement("meta",{name:"msapplication-TileImage",content:"/static/icons/ms-icon-144x144.png"}),c.a.createElement("meta",{name:"msapplication-config",content:"/static/config/browserconfig.xml"}),c.a.createElement("meta",{name:"google-site-verification",content:"uoCr1A890A-K8B7GkFUvLlQ5ihZlFyR6gzvt4F-62u0"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700",rel:"stylesheet"}),c.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.6.3/js/all.js"})),c.a.createElement(F,null,c.a.createElement(n,t)))}}])&&x(t.prototype,r),u&&x(t,u),n}();n.default=p()("UA-4932407-15",l.a)(I)},88:function(e,n,t){e.exports=t(341)}},[[340,1,0,2]]]);