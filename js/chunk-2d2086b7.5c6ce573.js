(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),s("form",{staticClass:"form-box"},[s("div",{staticClass:"form-group"},[s("label",[t._v("信箱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.account.email,expression:"$store.state.account.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter email",name:"account"},domProps:{value:t.$store.state.account.email},on:{input:function(e){e.target.composing||t.$set(t.$store.state.account,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[t._v("密碼")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.account.password,expression:"$store.state.account.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",name:"password"},domProps:{value:t.$store.state.account.password},on:{input:function(e){e.target.composing||t.$set(t.$store.state.account,"password",e.target.value)}}})]),t._m(1),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.login()}}},[t._v("登入")]),s("button",{staticClass:"btn btn-danger ml-3",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.registered()}}},[t._v("註冊")])])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo_box"},[s("img",{staticClass:"logo",attrs:{src:"https://i.imgur.com/4PvYjzf.png",alt:""}}),s("h1",[t._v("沒星巴克好喝咖啡館")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group form-check"},[s("input",{staticClass:"form-check-input",attrs:{type:"checkbox"}}),s("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Check me out")])])}],r={data:function(){return{}},computed:{isLoading:function(){return this.$store.state.isLoading}},methods:{login:function(){this.$store.dispatch("login")},registered:function(){this.$store.dispatch("registered")}}},n=r,i=s("2877"),c=Object(i["a"])(n,a,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.5c6ce573.js.map