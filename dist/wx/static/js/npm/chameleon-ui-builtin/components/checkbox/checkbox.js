var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([8],{349:function(e,t,n){n(350),n(351)},350:function(e,t){},351:function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),h=i(c),d=n(1),s=i(d),u=n(2),a=i(u),o=function(){function e(){(0,h.default)(this,e),this.props={checked:{type:Boolean,default:!1},label:{type:String},disabled:{type:Boolean,default:!1},position:{type:String,default:"left"},groupIndex:{type:Number,default:-1}},this.data={checkedImg:n(352),uncheckImg:n(353),innerChecked:!1},this.computed={checkStyle:function(){var e="";return this.disabled&&(e+="opacity:0.5;"),"right"==this.position?e+="position:absolute;right:0;margin-right:45cpx;":e+="margin-right:13cpx;",e},checkImg:function(){return this.innerChecked?this.checkedImg:this.uncheckImg},checkClass:function(){return this.disabled?"cml-checkbox-disabled":this.innerChecked?"cml-checkbox-checked":"cml-checkbox-uncheck"}},this.watch={checked:function(e){this.innerChecked=e}},this.methods={changeCheck:function(){if(!this.disabled){this.innerChecked=!this.innerChecked;var e={value:this.innerChecked};-1!==this.groupIndex&&(e.index=this.groupIndex),this.$cmlEmit("changeevent",e),this.$cmlEmit("change",e)}}}}return(0,s.default)(e,[{key:"created",value:function(){var e=this.checked;this.innerChecked=e}}]),e}();t.default=new o,t.default=a.default.createComponent(t.default).getOptions()},352:function(e,t,n){e.exports=n.p+"static/img/selected_520dcc8.png"},353:function(e,t,n){e.exports=n.p+"static/img/unselected_4e38c39.png"}},[349]);