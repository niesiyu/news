(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabbar-my-my"],{"19cd":function(e,t,i){"use strict";i.r(t);var n=i("d7fe"),a=i("9952");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("f422");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"3ce82bcb",null,!1,n["a"],r);t["default"]=s.exports},9952:function(e,t,i){"use strict";i.r(t);var n=i("b144"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},b144:function(e,t,i){"use strict";var n=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("f3f3")),o=i("2f62"),r={data:function(){return{}},computed:(0,a.default)({},(0,o.mapState)(["userinfo"])),onLoad:function(){},methods:{open:function(){uni.navigateTo({url:"/pages/my-article/my-article"})},feedback:function(){uni.navigateTo({url:"/pages/feedback/feedback"})}}};t.default=r},d0b4:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-3ce82bcb]{background-color:#f5f5f5}.my-header[data-v-3ce82bcb]{position:relative;padding-bottom:15px}.my-header .my-header__background[data-v-3ce82bcb]{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-filter:blur(8px);filter:blur(8px);opacity:.3}.my-header .my-header__background uni-image[data-v-3ce82bcb]{width:100%;height:100%}.my-header .my-header__logo[data-v-3ce82bcb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:30px}.my-header .my-header__logo .my-header__logo-box[data-v-3ce82bcb]{width:60px;height:60px;border-radius:50%;overflow:hidden}.my-header .my-header__logo .my-header__logo-box uni-image[data-v-3ce82bcb]{width:100%;height:100%}.my-header .my-header__logo .my-header__name[data-v-3ce82bcb]{margin-top:15px;font-size:16px;font-weight:700}.my-header .my-header__info[data-v-3ce82bcb]{margin-top:15px;display:-webkit-box;display:-webkit-flex;display:flex}.my-header .my-header__info .my-header__info-box[data-v-3ce82bcb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:12px;color:#999}.my-header .my-header__info .my-header__info-box .my-header__info-title[data-v-3ce82bcb]{font-size:14px;color:#333}.my-content .my-content__list[data-v-3ce82bcb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:15px;margin-bottom:10px;background-color:#fff;color:#333;font-size:14px}.my-content .my-content__list .my-content__list-title[data-v-3ce82bcb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.my-content .my-content__list .my-content__list-title .icons[data-v-3ce82bcb]{margin-right:5px}body.?%PAGE?%[data-v-3ce82bcb]{background-color:#f5f5f5}',""]),e.exports=t},d7fe:function(e,t,i){"use strict";var n={uniIcons:i("7776").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"my-header"},[i("v-uni-view",{staticClass:"my-header__background"},[i("v-uni-image",{attrs:{src:e.userinfo.avatar,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"my-header__logo"},[i("v-uni-view",{staticClass:"my-header__logo-box"},[i("v-uni-image",{attrs:{src:e.userinfo.avatar,mode:"aspectFill"}})],1),i("v-uni-text",{staticClass:"my-header__name"},[e._v(e._s(e.userinfo.author_name))])],1),i("v-uni-view",{staticClass:"my-header__info"},[i("v-uni-view",{staticClass:"my-header__info-box"},[i("v-uni-text",{staticClass:"my-header__info-title"},[e._v("被关注")]),i("v-uni-text",[e._v(e._s(e.userinfo.follow_count))])],1),i("v-uni-view",{staticClass:"my-header__info-box"},[i("v-uni-text",{staticClass:"my-header__info-title"},[e._v("粉丝")]),i("v-uni-text",[e._v(e._s(e.userinfo.fans_count))])],1),i("v-uni-view",{staticClass:"my-header__info-box"},[i("v-uni-text",{staticClass:"my-header__info-title"},[e._v("积分")]),i("v-uni-text",[e._v(e._s(e.userinfo.integral_count||0))])],1)],1)],1),i("v-uni-view",{staticClass:"my-content"},[i("v-uni-view",{staticClass:"my-content__list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"my-content__list-title"},[i("uni-icons",{staticClass:"icons",attrs:{type:"contact",size:"16",color:"#666"}}),i("v-uni-text",[e._v("我的文章")])],1),i("uni-icons",{attrs:{type:"arrowright",size:"14",color:"#666"}})],1),i("v-uni-view",{staticClass:"my-content__list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.feedback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"my-content__list-title"},[i("uni-icons",{staticClass:"icons",attrs:{type:"help",size:"16",color:"#666"}}),i("v-uni-text",[e._v("意见反馈")])],1),i("uni-icons",{attrs:{type:"arrowright",size:"14",color:"#666"}})],1)],1)],1)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},e398:function(e,t,i){var n=i("d0b4");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("276294a6",n,!0,{sourceMap:!1,shadowMode:!1})},f422:function(e,t,i){"use strict";var n=i("e398"),a=i.n(n);a.a}}]);