(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/follow/follow"],{"28b5":function(t,n,o){},4752:function(t,n,o){"use strict";o.r(n);var e=o("8be0"),u=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,(function(){return e[t]}))}(i);n["default"]=u.a},5433:function(t,n,o){"use strict";var e={listScroll:function(){return o.e("components/list-scroll/list-scroll").then(o.bind(null,"2682"))},uniLoadMore:function(){return o.e("components/uni-load-more/uni-load-more").then(o.bind(null,"c40d"))},listCard:function(){return o.e("components/list-card/list-card").then(o.bind(null,"5544"))},listAuthor:function(){return o.e("components/list-author/list-author").then(o.bind(null,"0809"))}},u=function(){var t=this,n=t.$createElement;t._self._c},i=[];o.d(n,"b",(function(){return u})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return e}))},"8be0":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{activeIndex:0,list:[],authorLists:[],articleShow:!1,followShow:!1}},onLoad:function(){var n=this;t.$on("update_article",(function(){console.log("关注页面触发"),n.getFollow()})),t.$on("update_author",(function(){n.getAuhtor()})),this.getFollow(),this.getAuhtor()},methods:{change:function(t){this.activeIndex=t.detail.current},tab:function(t){this.activeIndex=t},getFollow:function(){var t=this;this.$api.get_follow().then((function(n){console.log(n);var o=n.data;t.list=o,t.articleShow=0===t.list.length}))},getAuhtor:function(){var t=this;this.$api.get_author().then((function(n){console.log(n);var o=n.data;t.authorLists=o,t.followShow=0===t.authorLists.length}))}}};n.default=o}).call(this,o("543d")["default"])},b774:function(t,n,o){"use strict";o.r(n);var e=o("5433"),u=o("4752");for(var i in u)"default"!==i&&function(t){o.d(n,t,(function(){return u[t]}))}(i);o("dcf7");var l,r=o("f0c5"),a=Object(r["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],l);n["default"]=a.exports},dcf7:function(t,n,o){"use strict";var e=o("28b5"),u=o.n(e);u.a},fbd8:function(t,n,o){"use strict";(function(t){o("7339");e(o("66fd"));var n=e(o("b774"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])}},[["fbd8","common/runtime","common/vendor"]]]);