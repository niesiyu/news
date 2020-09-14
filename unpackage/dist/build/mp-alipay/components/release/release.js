;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/release/release"],{"0bad":function(n,t,e){"use strict";e.r(t);var u=e("daf5"),o=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);t["default"]=o.a},"23b2":function(n,t,e){},"2fd6":function(n,t,e){"use strict";var u={uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"e4fb"))}},o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return u}))},daf5:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={props:{show:{type:Boolean,default:!1}},data:function(){return{commentsValue:""}},methods:{open:function(){this.commentsValue="",this.$refs.popup.open()},close:function(){this.commentsValue="",this.$refs.popup.close()},submit:function(){this.commentsValue?this.$emit("submit",this.commentsValue):n.showToast({title:"请输入评论内容",icon:"none"})}}};t.default=e}).call(this,e("c11b")["default"])},dd35:function(n,t,e){"use strict";var u=e("23b2"),o=e.n(u);o.a},f491:function(n,t,e){"use strict";e.r(t);var u=e("2fd6"),o=e("0bad");for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);e("dd35");var c,s=e("f0c5"),a=Object(s["a"])(o["default"],u["b"],u["c"],!1,null,"144e9e96",null,!1,u["a"],c);t["default"]=a.exports}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/release/release-create-component',
    {
        'components/release/release-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("f491"))
        })
    },
    [['components/release/release-create-component']]
]);
