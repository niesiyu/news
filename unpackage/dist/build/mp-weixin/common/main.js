(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{2154:function(e,t,n){"use strict";(function(e){n("7339");var t=u(n("66fd")),r=u(n("a244")),o=u(n("fc46")),c=u(n("5723"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.config.productionTip=!1,t.default.prototype.$api=o.default,r.default.mpType="app";var l=new t.default(f({store:c.default},r.default));e(l).$mount()}).call(this,n("543d")["createApp"])},"31ca":function(e,t,n){},"387f":function(e,t,n){"use strict";n.r(t);var r=n("79c9"),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t["default"]=o.a},"79c9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={onLaunch:function(){var e=this;console.log("App Launch"),this.$api.get_user({user_id:"5f5aea98b3343b0001facf37"}).then((function(t){var n=t.data;e.$store.dispatch("set_userinfo",n)}))},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=r},a244:function(e,t,n){"use strict";n.r(t);var r=n("387f");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("bf75");var c,u,a,f,i=n("f0c5"),l=Object(i["a"])(r["default"],c,u,!1,null,null,null,!1,a,f);t["default"]=l.exports},bf75:function(e,t,n){"use strict";var r=n("31ca"),o=n.n(r);o.a}},[["2154","common/runtime","common/vendor"]]]);