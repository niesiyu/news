;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/tab/tab"],{"076c":function(n,t,e){},"07f2":function(n,t,e){"use strict";var u=e("076c"),c=e.n(u);c.a},2821:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={props:{list:{type:Array,default:function(){return[]}},tabIndex:{type:Number,default:0}},watch:{tabIndex:function(n){this.activeIndex=n}},data:function(){return{activeIndex:0}},methods:{clickTab:function(n,t){this.activeIndex=t,this.$emit("tab",{data:n,index:t})},open:function(){n.navigateTo({url:"/pages/home-label/home-label"})}}};t.default=e}).call(this,e("c11b")["default"])},"3f56":function(n,t,e){"use strict";e.r(t);var u=e("fe7a"),c=e("bbc7");for(var a in c)"default"!==a&&function(n){e.d(t,n,(function(){return c[n]}))}(a);e("07f2");var i,o=e("f0c5"),r=Object(o["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);t["default"]=r.exports},bbc7:function(n,t,e){"use strict";e.r(t);var u=e("2821"),c=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);t["default"]=c.a},fe7a:function(n,t,e){"use strict";var u={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"7776"))}},c=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return u}))}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/tab/tab-create-component',
    {
        'components/tab/tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("3f56"))
        })
    },
    [['components/tab/tab-create-component']]
]);
