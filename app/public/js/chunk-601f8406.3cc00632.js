(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-601f8406"],{"03fa":function(e,t,a){},"9bad":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app-demo-socket-ipc"}},[e._m(0),a("div",{staticClass:"one-block-2"},[a("a-list",{attrs:{bordered:""}},[a("a-input-search",{on:{search:e.helloHandle},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}},[a("a-button",{attrs:{slot:"enterButton"},slot:"enterButton"},[e._v(" send ")])],1)],1)],1),e._m(1),a("div",{staticClass:"one-block-2"},[a("a-list",{attrs:{bordered:""}},[a("a-input-search",{on:{search:e.executeJSHandle},model:{value:e.content2,callback:function(t){e.content2=t},expression:"content2"}},[a("a-button",{attrs:{slot:"enterButton"},slot:"enterButton"},[e._v(" send ")])],1)],1)],1),e._m(2),a("div",{staticClass:"one-block-2"},[a("a-space",[a("a-button",{on:{click:e.socketMsgStart}},[e._v("开始")]),a("a-button",{on:{click:e.socketMsgStop}},[e._v("结束")]),e._v(" 结果："+e._s(e.socketMessageString)+" ")],1)],1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"one-block-1"},[a("span",[e._v(" 1. 渲染进程与主进程IPC通信 ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"one-block-1"},[a("span",[e._v(" 2. 主进程API执行网页函数 ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"one-block-1"},[a("span",[e._v(" 3. 长消息： 服务端持续向前端页面发消息 ")])])}],s=a("a358"),c={data:function(){return{content:"hello",content2:"hello world",reply:"",socketMessageString:""}},methods:{helloHandle:function(e){var t=this;this.$ipcCallMain("example.hello",e).then((function(e){t.$message.info(e)}))},executeJSHandle:function(e){Object(s["a"])("executeJS",{str:e}).then((function(e){0==e.code&&console.log(e.data)})).catch((function(e){console.log("err:",e)}))},socketMsgStart:function(){var e=this;e.$ipc.on("example.socketMessageStart",(function(t,a){console.log("[ipcRenderer] [socketMsgStart] result:",a),e.socketMessageString=a})),e.$ipc.send("example.socketMessageStart","时间")},socketMsgStop:function(){var e=this;e.$ipc.on("example.socketMessageStop",(function(t,a){console.log("[ipcRenderer] [socketMsgStop] result:",a),e.socketMessageString=a})),e.$ipc.send("example.socketMessageStop","")}}},l=c,i=(a("aeef"),a("2877")),r=Object(i["a"])(l,n,o,!1,null,"ce257054",null);t["default"]=r.exports},a358:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("b775"),o={openDir:"/api/v1/example/openLocalDir",uploadFile:"/api/v1/example/uploadFile",executeJS:"/api/v1/example/executeJS",setShortcut:"/api/v1/example/setShortcut",autoLaunchEnable:"/api/v1/example/autoLaunchEnable",autoLaunchDisable:"/api/v1/example/autoLaunchDisable",autoLaunchIsEnabled:"/api/v1/example/autoLaunchIsEnabled",openSoftware:"/api/v1/example/openSoftware",selectFileDir:"/api/v1/example/selectFileDir",messageShow:"/api/v1/example/messageShow",messageShowConfirm:"/api/v1/example/messageShowConfirm",testElectronApi:"/api/v1/example/testElectronApi"};function s(e,t){return Object(n["b"])({url:o[e],method:"post",data:t})}},aeef:function(e,t,a){"use strict";a("03fa")}}]);
//# sourceMappingURL=chunk-601f8406.3cc00632.js.map