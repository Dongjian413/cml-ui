var __CML__GLOBAL=require("./manifest.js");__CML__GLOBAL.webpackJsonp([1],{193:function(e,t,u){u(194),u(195)},194:function(e,t){},195:function(e,t,u){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var f=u(0),a=n(f),l=u(1),o=n(l),r=u(196),d=n(r),_=u(94),i=n(_),c=u(2),E=n(c),s=function(){function e(){(0,a.default)(this,e),this.data={store:d.default,routerConfig:i.default}}return(0,o.default)(e,[{key:"created",value:function(e){}}]),e}();t.default=new s,t.default=E.default.createApp(t.default).getOptions()},196:function(e,t,u){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var f=u(197),a=n(f),l=u(200),o=n(l),r=u(203),d=n(r),_=u(205),i=n(_),c=u(91),E=n(c);t.default=(0,E.default)({actions:a.default,getters:o.default,state:d.default,mutations:i.default})},197:function(e,t,u){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var f=u(15),a=n(f),l=u(198),o=n(l);t.default=(0,a.default)({},o.default)},198:function(e,t,u){function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}function f(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(22),l=f(a),o=u(14),r=f(o),d=u(93),_=n(d),i=u(199),c=n(i);t.default=(0,l.default)({},c.INDEX_CHANGE_NAME,function(e){var t=e.commit;e.state,arguments.length>1&&void 0!==arguments[1]&&arguments[1],new r.default(function(e,t){setTimeout(function(){e("action名称"+(new Date).getTime())},2e3)}).then(function(e){t(_.CHANGE_NAME,e)})})},199:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INDEX_CHANGE_NAME="INDEX_CHANGE_NAME"},200:function(e,t,u){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var f=u(15),a=n(f),l=u(201),o=n(l);t.default=(0,a.default)({},o.default)},201:function(e,t,u){Object.defineProperty(t,"__esModule",{value:!0});var n,f=u(22),a=function(e){return e&&e.__esModule?e:{default:e}}(f),l=u(202),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}(l);t.default=(n={},(0,a.default)(n,o.INDEX_DESC_NAME,function(e,t){return"我叫："+e.index.name+"。"}),(0,a.default)(n,o.INDEX_DESC_AGE,function(e,t){return"今年："+e.index.age+" 岁。"}),n)},202:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INDEX_DESC_NAME="INDEX_DESC_NAME",t.INDEX_DESC_AGE="INDEX_DESC_AGE"},203:function(e,t,u){Object.defineProperty(t,"__esModule",{value:!0});var n=u(204),f=function(e){return e&&e.__esModule?e:{default:e}}(n),a={index:f.default};t.default=a},204:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var u={name:"李四",age:"18"};t.default=u},205:function(e,t,u){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var f=u(15),a=n(f),l=u(206),o=n(l);t.default=(0,a.default)({},o.default)},206:function(e,t,u){Object.defineProperty(t,"__esModule",{value:!0});var n,f=u(22),a=function(e){return e&&e.__esModule?e:{default:e}}(f),l=u(93),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}(l),r=(n={},(0,a.default)(n,o.INDEX_REPLACE_STATE,function(e,t){e.index=t}),(0,a.default)(n,o.INDEX_CHANGE_NAME,function(e,t){e.index.name=t}),(0,a.default)(n,o.INDEX_CHANGE_AGE,function(e,t){e.index.age=t}),n);t.default=r},93:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INDEX_REPLACE_STATE="REPLACE_INDEX_STATE",t.INDEX_CHANGE_NAME="INDEX_CHANGE_NAME",t.INDEX_CHANGE_AGE="INDEX_CHANGE_AGE"}},[193]);