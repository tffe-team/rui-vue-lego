(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{447:function(t,s,n){"use strict";n.r(s);var i=n(448),c=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(s,t,(function(){return i[t]}))}(o);s.default=c.a},448:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"Toast",methods:{onShortClick:function(){this.$toast.info({message:"我是单行文字，我是居中对齐"})},onLongClick:function(){this.$toast.info({message:"我这里是非常长长长长长长长长长长长长长长长的多行文字，我是居左对齐"})},onInfoClick:function(){this.$toast.info({message:"我是普通通知"})},onSuccessClick:function(){this.$toast.success({message:"我是成功通知"})},onErrorClick:function(){this.$toast.error({message:"我是错误通知"})},onCloseEventClick:function(){this.$toast.success({message:"我关闭后在控制台打印已经关闭了",onClose:function(){console.log("已经关闭了")}})}}}},458:function(t,s,n){"use strict";var i=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"m-vue-lego-toast rui-flex"},[n("div",{staticClass:"flex bd"},[n("h3",{staticClass:"g-title"},[t._v("基础用法")]),t._v(" "),n("div",{staticClass:"btn-box"},[n("div",{staticClass:"rui-btn g-btn g-success-btn",on:{click:t.onShortClick}},[t._v("单行文字")]),t._v(" "),n("div",{staticClass:"rui-btn g-btn g-success-btn",on:{click:t.onLongClick}},[t._v("多行文字")])]),t._v(" "),n("h3",{staticClass:"g-title"},[t._v("通知类型")]),t._v(" "),n("div",{staticClass:"btn-box"},[n("div",{staticClass:"rui-btn g-btn g-success-btn",on:{click:t.onInfoClick}},[t._v("普通通知")]),t._v(" "),n("div",{staticClass:"rui-btn g-btn",on:{click:t.onSuccessClick}},[t._v("成功通知")]),t._v(" "),n("div",{staticClass:"rui-btn g-btn g-error-btn",on:{click:t.onErrorClick}},[t._v("错误通知")])]),t._v(" "),n("h3",{staticClass:"g-title"},[t._v("自定义配置")]),t._v(" "),n("div",{staticClass:"btn-box"},[n("div",{staticClass:"rui-btn g-btn",on:{click:t.onCloseEventClick}},[t._v("自定义关闭回调")])])])])},c=[];i._withStripped=!0,n.d(s,"a",(function(){return i})),n.d(s,"b",(function(){return c}))},459:function(t,s,n){"use strict";n.r(s);var i=n(458),c=n(447);for(var o in c)"default"!==o&&function(t){n.d(s,t,(function(){return c[t]}))}(o);var e=n(15),a=Object(e.a)(c.default,i.a,i.b,!1,null,"2e73cf36",null);a.options.__file="examples/components/Toast.vue",s.default=a.exports}}]);