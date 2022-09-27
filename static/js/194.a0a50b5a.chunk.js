"use strict";(self.webpackChunkprototype_ilt_import=self.webpackChunkprototype_ilt_import||[]).push([[194],{7412:function(e,i,t){t.d(i,{a:function(){return l},i:function(){return p}});var r=t(6927),o=t(4070),n=(0,r.c)((function(e,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){(0,r.default)(1,arguments);var i=(0,t.default)(e);return i.setSeconds(0,0),i};var t=n(o.t),r=n(o.r);function n(e){return e&&e.__esModule?e:{default:e}}e.exports=i.default})),s=(0,r.c)((function(e,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,i){(0,r.default)(2,arguments);var o=(0,t.default)(e),n=(0,t.default)(i);return o.getTime()===n.getTime()};var t=s(n),r=s(o.r);function s(e){return e&&e.__esModule?e:{default:e}}e.exports=i.default})),l=(0,r.g)(s),c=(0,r.c)((function(e,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){(0,r.default)(1,arguments);var i=(0,t.default)(e);return i.setMilliseconds(0),i};var t=n(o.t),r=n(o.r);function n(e){return e&&e.__esModule?e:{default:e}}e.exports=i.default})),a=(0,r.c)((function(e,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,i){(0,r.default)(2,arguments);var o=(0,t.default)(e),n=(0,t.default)(i);return o.getTime()===n.getTime()};var t=n(c),r=n(o.r);function n(e){return e&&e.__esModule?e:{default:e}}e.exports=i.default})),p=(0,r.g)(a)},4194:function(e,i,t){t.r(i),t.d(i,{sympl_timepicker:function(){return p}});var r=t(402),o=t(533),n=(t(6927),t(4070),t(324),t(3023)),s=(t(1216),t(3277)),l=t(7412),c=function(e,i,t,r){function o(e){return e instanceof t?e:new t((function(i){i(e)}))}return new(t||(t=Promise))((function(t,n){function s(e){try{c(r.next(e))}catch(e){n(e)}}function l(e){try{c(r.throw(e))}catch(e){n(e)}}function c(e){e.done?t(e.value):o(e.value).then(s,l)}c((r=r.apply(e,i||[])).next())}))},a=function(e,i){var t,r,o,n,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return n={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function l(e){return function(i){return c([e,i])}}function c(n){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(o=2&n[0]?r.return:n[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,n[1])).done)return o;switch(r=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,r=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){s.label=n[1];break}if(6===n[0]&&s.label<o[1]){s.label=o[1],o=n;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(n);break}o[2]&&s.ops.pop(),s.trys.pop();continue}n=i.call(e,s)}catch(e){n=[6,e],r=0}finally{t=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}},p=function(){function e(e){var i=this;(0,r.r)(this,e),this.symplvalue=(0,r.c)(this,"symplvalue",7),this.symplvalidation=(0,r.c)(this,"symplvalidation",7),this.symplBlur=(0,r.c)(this,"symplBlur",7),this.symplFocus=(0,r.c)(this,"symplFocus",7),this.inputOnly=!1,this.hourFormat="24",this.stepHour=1,this.stepMinute=15,this.stepSecond=15,this.showSeconds=!1,this.showClear=!1,this.customLabel=!1,this.keyupEvent=function(e){return c(i,void 0,void 0,(function(){return a(this,(function(i){switch(i.label){case 0:return"Enter"!==e.key?[3,2]:[4,this.open()];case 1:return i.sent(),[3,4];case 2:return":"===e.key&&e.shiftKey&&e.ctrlKey?[4,this.timeElement.now()]:[3,4];case 3:i.sent(),e.preventDefault(),i.label=4;case 4:return[2]}}))}))}}return e.prototype.timeSelectedHandler=function(e){var i=e.detail;if(i)if(this.value){var t=this.showSeconds&&!(0,l.i)(i,this.value),r=!(0,l.a)(i,this.value);(t||r)&&(this.value=i)}else this.value=i},e.prototype.onValueChange=function(){return c(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,this.handleTimeBinding()];case 1:return e.sent(),this.symplvalue.emit(this.value),this.symplvalidation.emit(this.checkValidity()),[2]}}))}))},Object.defineProperty(e.prototype,"displayTime",{get:function(){return this.value&&this.isTimeValid()?(0,n.f)(this.value,this.timeFormat):null},enumerable:!1,configurable:!0}),e.prototype.clockClicked=function(){return c(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return this.input.focus(),[4,this.open()];case 1:return e.sent(),[2]}}))}))},e.prototype.open=function(){return c(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return this.inputOnly?[2]:this.callout&&this.callout.visible?[4,this.callout.hide()]:[3,2];case 1:return e.sent(),[3,5];case 2:return[4,this.handleTimeBinding()];case 3:return e.sent(),[4,this.callout.show()];case 4:e.sent(),e.label=5;case 5:return[2]}}))}))},e.prototype.close=function(){return c(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return this.callout&&this.callout.visible?[4,this.cancel()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},e.prototype.change=function(e){return c(this,void 0,void 0,(function(){var i;return a(this,(function(t){return(i=(0,s.p)(e.currentTarget.value,this.timeFormat,new Date))&&this.isValid(i)?this.value=i:this.clear(),[2]}))}))},e.prototype.componentDidLoad=function(){return c(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,this.handleTimeBinding()];case 1:return e.sent(),[2]}}))}))},e.prototype.componentWillRender=function(){return c(this,void 0,void 0,(function(){var e;return a(this,(function(i){return e=":mm",this.showSeconds&&(e+=":ss"),"12"===this.hourFormat?this.timeFormat="hh"+e+" a":this.timeFormat="HH"+e,[2]}))}))},e.prototype.checkValidity=function(){return(0,o.v)().addFieldCheck(this,this.isRequiredValid,"required",(0,o.g)(this)+" is required").addFieldCheck(this,this.isTimeValid,"invalid","Invalid time")},e.prototype.isRequiredValid=function(){return!this.required||!!this.value},e.prototype.isTimeValid=function(){return this.isValid(this.value)},e.prototype.isValid=function(e){return!e||e.getTime()===e.getTime()},e.prototype.handleTimeBinding=function(){return c(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return this.value?[3,3]:this.timeElement&&this.timeElement.reset?[4,this.timeElement.reset()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2];case 3:return this.timeElement&&this.timeElement.selectTime(this.value),[2]}}))}))},e.prototype.cancel=function(){return c(this,void 0,void 0,(function(){return a(this,(function(e){return this.callout.hide(),[2]}))}))},e.prototype.clear=function(){return c(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,this.timeElement.reset()];case 1:return e.sent(),this.value=null,[2]}}))}))},e.prototype.inputBlur=function(){this.isInputFocused=!1,this.symplBlur.emit()},e.prototype.inputFocus=function(){this.isInputFocused=!0,this.symplFocus.emit()},e.prototype.render=function(){var e=this,i={"sympl-time-picker":!0,"read-only":this.readOnly,disabled:this.disabled},t={"sympl-time-picker-input":!0,"sympl-time-picker-input-disabled":this.disabled,invalid:!!this.errorMessage&&this.errorMessage.trim().length>0},n={"sympl-time-picker-icon":!0,"sympl-time-picker-icon-read-only":this.readOnly,"icon-focused":this.isInputFocused,invalid:!!this.errorMessage&&this.errorMessage.trim().length>0};this.label&&("string"===typeof this.label?this.customLabel=!1:this.customLabel=!0);var s=this.showClear&&this.value;return(0,r.h)(r.H,null,(0,r.h)("div",{class:i},this.customLabel?(0,r.h)("sympl-label",{text:this.label.text,disabled:this.disabled,required:this.required,icon:this.label.icon,iconHoverText:this.label.hoverText},(0,r.h)("slot",null)):(0,r.h)("sympl-label",{text:this.label,disabled:this.disabled,required:this.required}),(0,r.h)("div",{class:"sympl-time-picker-input-container"},(0,r.h)("input",{class:t,disabled:this.disabled,placeholder:this.placeholder,readOnly:this.readOnly,required:this.required,onClick:this.readOnly?o.n:this.open.bind(this),value:this.displayTime,onChange:this.change.bind(this),onBlur:this.inputBlur.bind(this),onFocus:this.inputFocus.bind(this),ref:function(i){return e.input=i},onKeyUp:function(i){return e.keyupEvent(i)}}),s?(0,r.h)("button",{class:"sympl-time-picker-clear",type:"button",onClick:this.clear.bind(this)},(0,r.h)("i",{class:"si-x si-sm"})):null,(0,r.h)("div",{class:n,onClick:this.readOnly?o.n:this.clockClicked.bind(this)},(0,r.h)("i",{class:"si-clock si-sm"}))),(0,r.h)("div",{class:{"callout-container":!0}},(0,r.h)("sympl-callout",{focusable:!0,direction:"bottom-start",ref:function(i){return e.callout=i},onHidden:this.cancel.bind(this)},(0,r.h)("sympl-time",{ref:function(i){return e.timeElement=i},onTimeSelected:this.timeSelectedHandler.bind(this),hourFormat:this.hourFormat,showMeridiem:"12"===this.hourFormat,showSeconds:this.showSeconds,stepHour:this.stepHour,stepMinute:this.stepMinute,stepSecond:this.stepSecond}))),(0,r.h)("sympl-error",{message:this.errorMessage})))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{value:["onValueChange"]}},enumerable:!1,configurable:!0}),e}();p.style=":host{display:block}.sympl-time-picker{}.sympl-time-picker .callout-container{position:relative}.sympl-time-picker .sympl-callout:not(.sympl-callout-match-width){max-height:none;max-width:none}.sympl-time-picker .sympl-callout:not(.sympl-callout-match-width) .sympl-callout-content{max-height:none;max-width:none}.sympl-time-picker.disabled{opacity:50%;pointer-events:none}.sympl-time-picker.read-only{pointer-events:none}.sympl-time-picker-clear{background:transparent;border:1px solid transparent;cursor:pointer;line-height:0;margin-top:5px;padding:2px;position:absolute;right:30px}.sympl-time-picker-clear .si-x.si-sm::before{background-color:#2d4460}.sympl-time-picker-clear:focus-visible{border-color:#8ceabd;outline:none}.sympl-time-picker-icon{background-color:#fff;border:1px solid #627388;border-left:0;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;height:34px;min-width:28px}.sympl-time-picker-icon.invalid{border-color:#9c4527}.sympl-time-picker-icon-read-only{background-color:#eaeaeb;border-color:transparent;cursor:auto}.sympl-time-picker-icon .si-calendar,.sympl-time-picker-icon .si-clock{padding:8px 4px}.sympl-time-picker-icon .si-calendar::before,.sympl-time-picker-icon .si-clock::before{background-color:#2d4460}.sympl-time-picker-icon .si-calendar:hover::before,.sympl-time-picker-icon .si-clock:hover::before{background-color:#2d4460}.sympl-time-picker-icon .si-calendar:disabled::before,.sympl-time-picker-icon .si-clock:disabled::before{background-color:#94979a}.sympl-time-picker-input{font-size:0.875rem;background-color:#fff;border:1px solid #627388;-webkit-box-sizing:border-box;box-sizing:border-box;color:#292e35;height:34px;padding:8px;text-overflow:ellipsis;width:100%}.sympl-time-picker-input-container{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.sympl-time-picker-input-container:hover:not(:focus-within) .sympl-date-picker-icon,.sympl-time-picker-input-container:hover:not(:focus-within) .sympl-date-range-icon,.sympl-time-picker-input-container:hover:not(:focus-within) .sympl-time-picker-icon{background-color:#ddf9eb}.sympl-time-picker-input-container:focus-within{outline:none}.sympl-time-picker-input-container .icon-focused{border-color:#1e9a7c;-webkit-box-shadow:0 0 4px 0 #8ceabd;box-shadow:0 0 4px 0 #8ceabd}.sympl-time-picker-input.invalid{border-color:#9c4527}.sympl-time-picker-input:focus{border-color:#1e9a7c;-webkit-box-shadow:0 0 4px 0 #8ceabd;box-shadow:0 0 4px 0 #8ceabd;outline:none}.sympl-time-picker-input:not(.sympl-time-picker-input-disabled):-moz-read-only{background-color:#eaeaeb;border-color:transparent;color:#292e35}.sympl-time-picker-input:not(.sympl-time-picker-input-disabled):read-only{background-color:#eaeaeb;border-color:transparent;color:#292e35}.sympl-time-picker-error{color:#9c4527;font-size:0.75rem;display:-ms-flexbox;display:flex;padding-top:5px}.sympl-time-picker-error .error-message{padding-left:3px}.sympl-time-picker-error .si-error.si-sm::before{background-color:#9c4527}.theme-primary .sympl-time-picker{}.theme-primary .sympl-time-picker .callout-container{position:relative}.theme-primary .sympl-time-picker .sympl-callout:not(.sympl-callout-match-width){max-height:none;max-width:none}.theme-primary .sympl-time-picker .sympl-callout:not(.sympl-callout-match-width) .sympl-callout-content{max-height:none;max-width:none}.theme-primary .sympl-time-picker.disabled{opacity:50%;pointer-events:none}.theme-primary .sympl-time-picker.read-only{pointer-events:none}.theme-primary .sympl-time-picker-clear{background:transparent;border:1px solid transparent;cursor:pointer;line-height:0;margin-top:5px;padding:2px;position:absolute;right:30px}.theme-primary .sympl-time-picker-clear .si-x.si-sm::before{background-color:#2d4460}.theme-primary .sympl-time-picker-clear:focus-visible{border-color:#8ceabd;outline:none}.theme-primary .sympl-time-picker-icon{background-color:#fff;border:1px solid #627388;border-left:0;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;height:34px;min-width:28px}.theme-primary .sympl-time-picker-icon.invalid{border-color:#9c4527}.theme-primary .sympl-time-picker-icon-read-only{background-color:#eaeaeb;border-color:transparent;cursor:auto}.theme-primary .sympl-time-picker-icon .si-calendar,.theme-primary .sympl-time-picker-icon .si-clock{padding:8px 4px}.theme-primary .sympl-time-picker-icon .si-calendar::before,.theme-primary .sympl-time-picker-icon .si-clock::before{background-color:#2d4460}.theme-primary .sympl-time-picker-icon .si-calendar:hover::before,.theme-primary .sympl-time-picker-icon .si-clock:hover::before{background-color:#2d4460}.theme-primary .sympl-time-picker-icon .si-calendar:disabled::before,.theme-primary .sympl-time-picker-icon .si-clock:disabled::before{background-color:#94979a}.theme-primary .sympl-time-picker-input{font-size:0.875rem;background-color:#fff;border:1px solid #627388;-webkit-box-sizing:border-box;box-sizing:border-box;color:#292e35;height:34px;padding:8px;text-overflow:ellipsis;width:100%}.theme-primary .sympl-time-picker-input-container{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.theme-primary .sympl-time-picker-input-container:hover:not(:focus-within) .sympl-date-picker-icon,.theme-primary .sympl-time-picker-input-container:hover:not(:focus-within) .sympl-date-range-icon,.theme-primary .sympl-time-picker-input-container:hover:not(:focus-within) .sympl-time-picker-icon{background-color:#ddf9eb}.theme-primary .sympl-time-picker-input-container:focus-within{outline:none}.theme-primary .sympl-time-picker-input-container .icon-focused{border-color:#1e9a7c;-webkit-box-shadow:0 0 4px 0 #8ceabd;box-shadow:0 0 4px 0 #8ceabd}.theme-primary .sympl-time-picker-input.invalid{border-color:#9c4527}.theme-primary .sympl-time-picker-input:focus{border-color:#1e9a7c;-webkit-box-shadow:0 0 4px 0 #8ceabd;box-shadow:0 0 4px 0 #8ceabd;outline:none}.theme-primary .sympl-time-picker-input:not(.theme-primary .sympl-time-picker-input-disabled):-moz-read-only{background-color:#eaeaeb;border-color:transparent;color:#292e35}.theme-primary .sympl-time-picker-input:not(.theme-primary .sympl-time-picker-input-disabled):read-only{background-color:#eaeaeb;border-color:transparent;color:#292e35}.theme-primary .sympl-time-picker-error{color:#9c4527;font-size:0.75rem;display:-ms-flexbox;display:flex;padding-top:5px}.theme-primary .sympl-time-picker-error .error-message{padding-left:3px}.theme-primary .sympl-time-picker-error .si-error.si-sm::before{background-color:#9c4527}.sympl-time-picker .sympl-callout{min-width:124px;padding:0.5rem 14px}"}}]);
//# sourceMappingURL=194.a0a50b5a.chunk.js.map