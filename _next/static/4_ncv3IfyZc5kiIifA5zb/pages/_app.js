(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{248:function(e,t,n){e.exports=n(360)},344:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(393),{page:e.exports.default}})},345:function(e,t,n){"use strict";var r=n(26),c=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=C,t.Container=t.default=void 0;var i=c(n(53)),o=c(n(54)),u=c(n(346)),a=c(n(13)),f=c(n(14)),l=c(n(32)),s=c(n(33)),p=c(n(34)),h=c(n(22)),v=r(n(0)),d=c(n(19)),y=n(31),b=n(46),E=function(e){function t(){return(0,a.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}var n;return(0,p.default)(t,e),(0,f.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,b.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,c=C(t);return v.default.createElement(g,null,v.default.createElement(n,(0,u.default)({},r,{url:c})))}}],[{key:"getInitialProps",value:(n=(0,o.default)(i.default.mark(function e(t){var n,r,c;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,y.loadGetInitialProps)(n,r);case 3:return c=e.sent,e.abrupt("return",{pageProps:c});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(v.Component);t.default=E,(0,h.default)(E,"childContextTypes",{headManager:d.default.object,router:d.default.object});var g=function(e){function t(){return(0,a.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(v.Component);t.Container=g;var m=(0,y.execOnce)(function(){0});function C(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return m(),r},get pathname(){return m(),t},get asPath(){return m(),n},back:function(){m(),e.back()},push:function(t,n){return m(),e.push(t,n)},pushTo:function(t,n){m();var r=n?t:null,c=n||t;return e.push(r,c)},replace:function(t,n){return m(),e.replace(t,n)},replaceTo:function(t,n){m();var r=n?t:null,c=n||t;return e.replace(r,c)}}}},346:function(e,t,n){var r=n(86);function c(){return e.exports=c=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}e.exports=c},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0),c=o(n(361)),i=o(n(362));function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e,t){var n=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).localhost,o=void 0===n?"localhost":n;return function(n){var h=function(h){function v(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v);for(var n=arguments.length,r=Array(n),c=0;c<n;c++)r[c]=arguments[c];return t=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?s(e):t}(this,(e=f(v)).call.apply(e,[this].concat(r))),p(s(s(t)),"state",{analytics:void 0}),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(v,r.Component),function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(v,[{key:"componentDidMount",value:function(){var n=function(e){return location.hostname===e}(o)?i:c;n.init(e),n.pageview();var r=t.onRouteChangeComplete;t.onRouteChangeComplete=function(){"function"==typeof r&&r(),n.pageview()},this.setState({analytics:n})}},{key:"render",value:function(){return(0,r.createElement)(n,function(e){for(var t=1;t<arguments.length;t++){var n=null==arguments[t]?{}:arguments[t],r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){p(e,t,n[t])})}return e}({},this.props,{analytics:this.state.analytics}))}}]),v}();return n.getInitialProps&&(h.getInitialProps=n.getInitialProps),h}}},361:function(e,t,n){"use strict";var r,c=(r=n(391))&&r.__esModule?r:{default:r};Object.defineProperty(t,"__esModule",{value:!0}),t.init=function(e){i&&!window.GA_INITIALIZED&&e&&c.default.initialize(e)},t.pageview=function(){c.default.set({page:window.location.pathname}),c.default.pageview(window.location.pathname)},t.event=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";e&&t&&c.default.event({category:e,action:t})},t.exception=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];e&&c.default.exception({description:e,fatal:t})};var i="undefined"!=typeof window},362:function(e,t,n){"use strict";var r,c=(r=n(363))&&r.__esModule?r:{default:r};Object.defineProperty(t,"__esModule",{value:!0}),t.init=function(e){i("Analytics init triggered for ".concat(e))},t.pageview=function(){i("Pageview triggered for ".concat(window.location.pathname))},t.event=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";i("Event for category ".concat(e," and action ").concat(t," triggered"))},t.exception=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];i("".concat(t?"Fatal exception":"Exception"," with description ").concat(e))};var i=(0,c.default)("analytics")},363:function(e,t,n){(function(r){t.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,c=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(r++,"%c"===e&&(c=r))}),t.splice(c,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n(365)(t);const{formatters:c}=e.exports;c.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,n(364))},364:function(e,t){var n,r,c=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var a,f=[],l=!1,s=-1;function p(){l&&a&&(l=!1,a.length?f=a.concat(f):s=-1,f.length&&h())}function h(){if(!l){var e=u(p);l=!0;for(var t=f.length;t;){for(a=f,f=[];++s<t;)a&&a[s].run();s=-1,t=f.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function d(){}c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new v(e,t)),1!==f.length||l||u(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=d,c.addListener=d,c.once=d,c.off=d,c.removeListener=d,c.removeAllListeners=d,c.emit=d,c.prependListener=d,c.prependOnceListener=d,c.listeners=function(e){return[]},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},365:function(e,t,n){e.exports=function(e){function t(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function r(e){let n;function o(...e){if(!o.enabled)return;const t=o,c=Number(new Date),i=c-(n||c);t.diff=i,t.prev=n,t.curr=c,n=c,e[0]=r.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let u=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,c)=>{if("%%"===n)return n;u++;const i=r.formatters[c];if("function"==typeof i){const r=e[u];n=i.call(t,r),e.splice(u,1),u--}return n}),r.formatArgs.call(t,e),(t.log||r.log).apply(t,e)}return o.namespace=e,o.enabled=r.enabled(e),o.useColors=r.useColors(),o.color=t(e),o.destroy=c,o.extend=i,"function"==typeof r.init&&r.init(o),r.instances.push(o),o}function c(){const e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function i(e,t){const n=r(this.namespace+(void 0===t?":":t)+e);return n.log=this.log,n}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){const e=[...r.names.map(o),...r.skips.map(o).map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){let t;r.save(e),r.names=[],r.skips=[];const n=("string"==typeof e?e:"").split(/[\s,]+/),c=n.length;for(t=0;t<c;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(t=0;t<r.instances.length;t++){const e=r.instances[t];e.enabled=r.enabled(e.namespace)}},r.enabled=function(e){if("*"===e[e.length-1])return!0;let t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=n(366),Object.keys(e).forEach(t=>{r[t]=e[t]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=t,r.enable(r.load()),r}},366:function(e,t){var n=1e3,r=60*n,c=60*r,i=24*c,o=7*i,u=365.25*i;function a(e,t,n,r){var c=t>=1.5*n;return Math.round(e/n)+" "+r+(c?"s":"")}e.exports=function(e,t){t=t||{};var f=typeof e;if("string"===f&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*u;case"weeks":case"week":case"w":return a*o;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*c;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===f&&!1===isNaN(e))return t.long?function(e){var t=Math.abs(e);if(t>=i)return a(e,t,i,"day");if(t>=c)return a(e,t,c,"hour");if(t>=r)return a(e,t,r,"minute");if(t>=n)return a(e,t,n,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=i)return Math.round(e/i)+"d";if(t>=c)return Math.round(e/c)+"h";if(t>=r)return Math.round(e/r)+"m";if(t>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},391:function(e,t,n){"use strict";function r(e){return e.replace(/^\s+|\s+$/g,"")}n.r(t);var c=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function i(e){console.warn("[react-ga]",e)}var o="REDACTED (Potential Email Address)";function u(e,t){return function(e){return/[^@]+@[^@]+/.test(e)}(e)?(i("This arg looks like an email address, redacting."),o):t?r(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(c)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}var a=function(e){var t,n,r,c,i,o,u,a="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?a=e.gaAddress:e&&e.debug&&(a="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",c=a,i="ga",t.GoogleAnalyticsObject=i,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,o=n.createElement(r),u=n.getElementsByTagName(r)[0],o.async=1,o.src=c,u.parentNode.insertBefore(o,u)};function f(e){console.info("[react-ga]",e)}var l=[],s={calls:l,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];l.push(t.concat())}},p=n(0),h=n.n(p),v=n(19),d=n.n(v);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w="_blank",S=1,A=function(e){function t(){var e,n,r,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return r=this,c=(e=g(t)).call.apply(e,[this].concat(o)),n=!c||"object"!==y(c)&&"function"!=typeof c?C(r):c,O(C(C(n)),"handleClick",function(e){var r=n.props,c=r.target,i=r.eventLabel,o=r.to,u=r.onClick,a={label:i},f=c!==w,l=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===S);f&&l?(e.preventDefault(),t.trackLink(a,function(){window.location.href=o})):t.trackLink(a,function(){}),u&&u(e)}),n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,p["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}({},b(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===w&&(n.rel="noopener noreferrer"),delete n.eventLabel,h.a.createElement("a",n)}}])&&E(n.prototype,r),c&&E(n,c),t}();function T(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}O(A,"trackLink",function(){i("ga tracking not enabled")}),O(A,"propTypes",{eventLabel:d.a.string.isRequired,target:d.a.string,to:d.a.string,onClick:d.a.func}),O(A,"defaultProps",{target:null,to:null,onClick:null}),n.d(t,"initialize",function(){return G}),n.d(t,"ga",function(){return B}),n.d(t,"set",function(){return U}),n.d(t,"send",function(){return $}),n.d(t,"pageview",function(){return Z}),n.d(t,"modalview",function(){return L}),n.d(t,"timing",function(){return H}),n.d(t,"event",function(){return V}),n.d(t,"exception",function(){return N}),n.d(t,"plugin",function(){return Y}),n.d(t,"outboundLink",function(){return Q}),n.d(t,"OutboundLink",function(){return W}),n.d(t,"testModeAPI",function(){return X});var j=!1,D=!0,z=!1,I=!0,q=function(){var e;return z?s.ga.apply(s,arguments):"undefined"!=typeof window&&(window.ga?(e=window).ga.apply(e,arguments):i("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function M(e){return u(e,D)}function R(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var c=n[0];if("function"==typeof q){if("string"!=typeof c)return void i("ga command must be a string");!I&&Array.isArray(e)||q.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){q.apply(void 0,x(["".concat(e,".").concat(c)].concat(n.slice(1))))})}}function J(e,t){e?(t&&(t.debug&&!0===t.debug&&(j=!0),!1===t.titleCase&&(D=!1)),t&&t.gaOptions?q("create",e,t.gaOptions):q("create",e,"auto")):i("gaTrackingID is required in initialize()")}function G(e,t){if(t&&!0===t.testMode)z=!0;else{if("undefined"==typeof window)return!1;a(t)}return I=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach(function(e){"object"===P(e)?J(e.trackingId,e):i("All configs must be an object")}):J(e,t),!0}function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(q.apply(void 0,t),j&&(f("called ga('arguments');"),f("with arguments: ".concat(JSON.stringify(t))))),window.ga}function U(e,t){e?"object"===P(e)?(0===Object.keys(e).length&&i("empty `fieldsObject` given to .set()"),R(t,"set",e),j&&(f("called ga('set', fieldsObject);"),f("with fieldsObject: ".concat(JSON.stringify(e))))):i("Expected `fieldsObject` arg to be an Object"):i("`fieldsObject` is required in .set()")}function $(e,t){R(t,"send",e),j&&(f("called ga('send', fieldObject);"),f("with fieldObject: ".concat(JSON.stringify(e))),f("with trackers: ".concat(JSON.stringify(t))))}function Z(e,t,n){if(e){var c=r(e);if(""!==c){var o={};if(n&&(o.title=n),R(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){F(e,t,n[t])})}return e}({hitType:"pageview",page:c},o)),j){f("called ga('send', 'pageview', path);");var u="";n&&(u=" and title: ".concat(n)),f("with path: ".concat(c).concat(u))}}else i("path cannot be an empty string in .pageview()")}else i("path is required in .pageview()")}function L(e,t){if(e){var n,c="/"===(n=r(e)).substring(0,1)?n.substring(1):n;if(""!==c){var o="/modal/".concat(c);R(t,"send","pageview",o),j&&(f("called ga('send', 'pageview', path);"),f("with path: ".concat(o)))}else i("modalName cannot be an empty string or a single / in .modalview()")}else i("modalName is required in .modalview(modalName)")}function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,c=e.label,o=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"==typeof r){var u={hitType:"timing",timingCategory:M(t),timingVar:M(n),timingValue:r};c&&(u.timingLabel=M(c)),$(u,o)}else i("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,c=e.value,o=e.nonInteraction,u=e.transport,a=T(e,["category","action","label","value","nonInteraction","transport"]),f=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:M(t),eventAction:M(n)};r&&(l.eventLabel=M(r)),void 0!==c&&("number"!=typeof c?i("Expected `args.value` arg to be a Number."):l.eventValue=c),void 0!==o&&("boolean"!=typeof o?i("`args.nonInteraction` must be a boolean."):l.nonInteraction=o),void 0!==u&&("string"!=typeof u?i("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(u)&&i("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=u)),Object.keys(a).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){l[e]=a[e]}),Object.keys(a).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){l[e]=a[e]}),$(l,f)}else i("args.category AND args.action are required in event()")}function N(e,t){var n=e.description,r=e.fatal,c={hitType:"exception"};n&&(c.exDescription=M(n)),void 0!==r&&("boolean"!=typeof r?i("`args.fatal` must be a boolean."):c.exFatal=r),$(c,t)}var Y={require:function(e,t){if(e){var n=r(e);if(""!==n)if(t){if("object"!==P(t))return void i("Expected `options` arg to be an Object");0===Object.keys(t).length&&i("Empty `options` given to .require()"),B("require",n,t),j&&f("called ga('require', '".concat(n,"', ").concat(JSON.stringify(t)))}else B("require",n),j&&f("called ga('require', '".concat(n,"');"));else i("`name` cannot be an empty string in .require()")}else i("`name` is required in .require()")},execute:function(e,t){var n,r;if(1==(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!=typeof e)i("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)i("Expected `action` arg to be a String.");else{var c="".concat(e,":").concat(t);n=n||null,r&&n?(B(c,r,n),j&&(f("called ga('".concat(c,"');")),f('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(B(c,n),j&&(f("called ga('".concat(c,"');")),f("with payload: ".concat(JSON.stringify(n))))):(B(c),j&&f("called ga('".concat(c,"');")))}}};function Q(e,t,n){if("function"==typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:M(e.label)},c=!1,o=setTimeout(function(){c=!0,t()},250);r.hitCallback=function(){clearTimeout(o),c||t()},$(r,n)}else i("args.label is required in outboundLink()");else i("hitCallback function is required")}A.origTrackLink=A.trackLink,A.trackLink=Q;var W=A,X=s;t.default={initialize:G,ga:B,set:U,send:$,pageview:Z,modalview:L,timing:H,event:V,exception:N,plugin:Y,outboundLink:Q,OutboundLink:W,testModeAPI:s}},393:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(92),o=n.n(i),u=n(11),a=n.n(u),f=n(20),l=n.n(f),s=n(248),p=n.n(s),h=(n(367),n(3)),v=n(5),d=n.n(v),y=(n(369),n(10)),b=n.n(y),E=function(e){return c.a.createElement("nav",{className:d()("topbar-mobile d-flex justify-content-between",e.className)},c.a.createElement(b.a,{href:"/"},c.a.createElement("a",{href:"/",className:"brand"},h.c)),c.a.createElement("button",{className:"border-0 bg-transparent text-black-50",onClick:e.onClickToggler},c.a.createElement("i",{className:"fas fa-bars"})))},g=Object(f.withRouter)(function(e){return c.a.createElement("div",{className:d()("side-menu",e.className)},c.a.createElement("div",{className:"side-menu-inner"},c.a.createElement(b.a,{href:"/"},c.a.createElement("a",{href:"/",className:"brand"},h.c)),c.a.createElement("p",{className:"text-muted font-weight-light pt-1"},c.a.createElement("small",null,"Study hard, play harder.")),c.a.createElement("ul",{className:"list list-unstyled"},c.a.createElement("li",{className:d()({"font-weight-bold":"/"===e.router.pathname})},c.a.createElement(b.a,{href:"/"},c.a.createElement("a",{href:"/"},"Home"))),c.a.createElement("li",{className:d()({"font-weight-bold":"/about"===e.router.pathname})},c.a.createElement(b.a,{href:"/about"},c.a.createElement("a",{href:"/about"},"About"))),c.a.createElement("li",{className:d()({"font-weight-bold":"/resume"===e.router.pathname})},c.a.createElement(b.a,{href:"/resume"},c.a.createElement("a",{href:"/resume"},"Resume"))))))}),m=(new Date).getFullYear(),C=function(){return c.a.createElement("footer",{className:"text-center mt-4"},c.a.createElement("p",{className:"mb-0 text-dark"},"Copyright © Yuku Takahashi ",m))};function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var F=function(e){function t(e){var n,r,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(c=S(t).call(this,e))||"object"!==O(c)&&"function"!=typeof c?T(r):c).state={expanded:!1},n.collapse=n.collapse.bind(T(T(n))),n.toggle=n.toggle.bind(T(T(n))),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,c.a.Component),n=t,(r=[{key:"render",value:function(){return c.a.createElement("div",{className:d()("layout d-md-flex",{expanded:this.state.expanded})},c.a.createElement(E,{className:"d-md-none py-4 px-3",onClickToggler:this.toggle}),c.a.createElement(g,{className:"d-md-block px-3 p-lg-5 py-4"}),c.a.createElement("div",{className:"flex-md-grow-1 bg-white px-3 pt-lg-5 py-4",onClick:this.collapse},this.props.children,c.a.createElement(C,null)))}},{key:"toggle",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"collapse",value:function(){this.setState({expanded:!1})}}])&&w(n.prototype,r),i&&w(n,i),t}();function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,D(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,o.a),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return c.a.createElement(i.Container,null,c.a.createElement(a.a,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),c.a.createElement("title",null,h.c),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/static/icons/apple-icon-57x57.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/static/icons/apple-icon-60x60.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/static/icons/apple-icon-72x72.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/static/icons/apple-icon-76x76.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/static/icons/apple-icon-114x114.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/static/icons/apple-icon-120x120.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/static/icons/apple-icon-144x144.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/static/icons/apple-icon-152x152.png"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/static/icons/apple-icon-180x180.png"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/static/icons/android-icon-192x192.png"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/static/icons/favicon-32x32.png"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/static/icons/favicon-96x96.png"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/static/icons/favicon-16x16.png"}),c.a.createElement("link",{rel:"icon",href:"/static/icons/favicon.ico"}),c.a.createElement("link",{rel:"manifest",href:"/static/config/manifest.json"}),c.a.createElement("meta",{name:"msapplication-TileColor",content:"#00BCD4"}),c.a.createElement("meta",{name:"msapplication-TileImage",content:"/static/icons/ms-icon-144x144.png"}),c.a.createElement("meta",{name:"msapplication-config",content:"/static/config/browserconfig.xml"}),c.a.createElement("meta",{name:"theme-color",content:"#00BCD4"}),c.a.createElement("meta",{name:"google-site-verification",content:"uoCr1A890A-K8B7GkFUvLlQ5ihZlFyR6gzvt4F-62u0"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700",rel:"stylesheet"}),c.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.6.3/js/all.js"})),c.a.createElement(F,null,c.a.createElement(t,n)))}}])&&x(n.prototype,r),u&&x(n,u),t}();t.default=p()("UA-4932407-15",l.a)(I)},92:function(e,t,n){e.exports=n(345)}},[[344,1,0,2]]]);