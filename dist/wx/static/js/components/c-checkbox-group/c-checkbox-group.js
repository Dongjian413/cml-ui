var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([37],{323:function(e,t,i){i(324),i(325)},324:function(e,t){},325:function(e,t,i){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(68),a=n(o),l=i(0),u=n(l),r=i(1),f=n(r),d=i(2),s=n(d),c=function(){function e(){(0,u.default)(this,e),this.props={option:{type:Array,default:[]},position:{type:String,default:"left"},horizontal:{type:Boolean,default:!1}},this.data={},this.computed={horizontalStyle:function(){return this.horizontal?"display:inline-flex;flex-direction:row;align-items:center;flex-wrap:wrap;flex:1;":""},subPosition:function(){return"right"!==this.position||this.horizontal?"left":"right"}},this.watch={},this.methods={valueChange:function(e){var t=JSON.parse((0,a.default)(this.option)),i=t[e.detail.index];i={checked:e.detail.value,label:i.label,disabled:i.disabled},t[e.detail.index]=i;var n=[];t.forEach(function(e){e.checked&&n.push(e.label)}),this.$cmlEmit("groupchange",{index:e.detail.index,value:t,selected:n})}}}return(0,f.default)(e,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){this.checkList=JSON.parse((0,a.default)(this.option))}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),e}();t.default=new c,t.default=s.default.createComponent(t.default).getOptions()}},[323]);