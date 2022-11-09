(window.webpackJsonp=window.webpackJsonp||[]).push([[35,33,34],{483:function(e,t,n){"use strict";var r=n(16),o=(n(11),n(24),n(41),n(61),[function(e){return e&&Object.keys(e).length&&e.constructor===Object||"This is field is required"}]),c=[function(e){return"object"===Object(r.a)(e)||"This field must be a reference from the list"}];t.a={standardRules:[function(e){return!!e||"This field is required"}],emptyObjectFieldRule:o,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],emailFormatRule:[function(e){return null===e||""===e||(/.+@.+\..+/.test(e)||"E-mail must be valid")}],max10Char:[function(e){return e.length<=10||"Input too long!"}],max150Char:[function(e){return e.length<150||"Input too long!"}],mobileChar:[function(e){return 10===e.length&&!e.includes("-")||12===e.length||"Invalid mobile format"}],fieldArrayRule:[function(e){return 0!==e.length||"This field is required"}],fieldArraySingleRule:[function(e){return 0!==e.length||"This field is required"},function(e){return!(e.length>1)||"You must choose only 1 role"}],notObjectFieldRule:c}},489:function(e,t,n){var content=n(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("2065bca8",content,!0,{sourceMap:!1})},490:function(e,t,n){var r=n(25),o=n(29),c=n(30),l=r(!1),d=o(c);l.push([e.i,"@font-face{font-family:Avenir;src:url("+d+') format("truetype")}@font-face{font-family:Avenir-Bold;src:url('+d+') format("truetype")}.v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}',""]),e.exports=l},518:function(e,t,n){"use strict";var r=n(76),o=n(2),c=(n(31),n(74),n(62),n(41),n(61),n(5),n(119),n(11),n(13),n(12),n(19),n(14),n(20),n(489),n(479)),l=n(120),d=n(144),f=n(222),h=n(223),v=n(220),m=n(221),y=n(145),O=n(10),w=n(9),x=n(0);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k=Object(O.a)(d.a,f.a,h.a,v.a,m.a,l.a);t.a=k.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(o.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(e,"v-dialog--active",this.isActive),Object(o.a)(e,"v-dialog--persistent",this.persistent),Object(o.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(e,"v-dialog--scrollable",this.scrollable),Object(o.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){var t,n;null!=(t=e.$refs.dialog)&&t.contains(document.activeElement)||(e.previousActiveElement=document.activeElement,null==(n=e.$refs.dialog)||n.focus());e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===x.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(e){return!e.hasAttribute("disabled")}));o&&o.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(c.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:j({role:"dialog","aria-modal":e.hideOverlay?void 0:"true"},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=j(j({},data.style),{},{maxWidth:Object(x.h)(this.maxWidth),width:Object(x.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},527:function(e,t,n){"use strict";var r={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let o;const c=new Uint8Array(16);function l(){if(!o&&(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(c)}const d=[];for(let i=0;i<256;++i)d.push((i+256).toString(16).slice(1));function f(e,t=0){return(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase()}t.a=function(e,t,n){if(r.randomUUID&&!t&&!e)return r.randomUUID();const o=(e=e||{}).random||(e.rng||l)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=o[i];return t}return f(o)}},535:function(e,t,n){"use strict";n.r(t);var r=n(96),component=Object(r.a)({},undefined,undefined,!1,null,null,null);t.default=component.exports},541:function(e,t,n){"use strict";n.r(t);var r=n(467),o=n(542),c=n(478),l=n(525),d=n(513),f=(n(11),n(13),n(12),n(5),n(19),n(14),n(20),n(6)),h=n(2),v=(n(55),n(33),n(32),n(1)),m=n(527),y=n(487),O=n(118),w=n(483);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}v.a.use(y.a,{});var j={computed:_({},Object(O.b)("users",["user_residents"])),props:["account_type"],auth:!1,data:function(){var e;return _(_(_({userList:[],departMenu:!1},w.a),{},{e1:1,isLoading:!1,register:(e={firstname:"",lastname:"",gender:"",is_active:!0},Object(h.a)(e,"gender",""),Object(h.a)(e,"date_recorded",""),Object(h.a)(e,"email",""),Object(h.a)(e,"confirm_email",""),Object(h.a)(e,"mobile_number",""),Object(h.a)(e,"birthdate",""),Object(h.a)(e,"address",""),Object(h.a)(e,"province",""),Object(h.a)(e,"account_type","Resident"),Object(h.a)(e,"city",""),Object(h.a)(e,"barangay",""),Object(h.a)(e,"password",""),Object(h.a)(e,"confirm_password",""),e),file:"",isLoaded:!1},w.a),{},{isValid:!1,isRegister:!1})},created:function(){this.register.certificate_id=m.a(),console.log(this.$auth),this.$store.dispatch("users/viewUserResident")},methods:{onFileUpload:function(e){if(this.file=e,(e=e.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(e.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(e){return void alert(e)}this.file=e}},cancel:function(){this.$emit("cancel")},submitHandlerRegister:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new FormData,null!=e.file&&""!=e.file&&n.append("files",e.file),n.append("file_name",e.register.file_name),n.append("user_id",e.$auth.user.id),n.append("folder_id",e.$route.query.id),n.append("author","".concat(e.$auth.user.firstname," ").concat(e.$auth.user.lastname)),alert("".concat(e.$auth.user.firstname," ").concat(e.$auth.user.lastname)),e.isLoaded=!0,t.prev=8,t.next=11,e.$store.dispatch("localfiles/add",n);case 11:e.$toastr.s("SUCCESS MESSAGE","Successfully Added!"),e.$emit("cancel"),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),alert(t.t0);case 18:e.isLoaded=!1;case 19:case"end":return t.stop()}}),t,null,[[8,15]])})))()},selectRegister:function(){this.isRegister?this.isRegister=!1:this.isRegister=!0}}},k=n(96),component=Object(k.a)(j,(function(){var e=this,t=e._self._c;return t("div",[t(o.a,{staticClass:"pa-16"},[t("div"),e._v(" "),t(l.a,[t(c.a,[t(l.a,[t(c.a,{attrs:{cols:"12"}},[t("div",[e._v("File Name")]),e._v(" "),t("div",[t(d.a,{attrs:{rules:e.standardRules,outlined:"",dense:""},model:{value:e.register.file_name,callback:function(t){e.$set(e.register,"file_name",t)},expression:"register.file_name"}})],1)]),e._v(" "),t("div",[t(c.a,[t("input",{ref:"file",attrs:{type:"file",id:"fileInput"},on:{change:e.onFileUpload}})])],1)],1)],1)],1),e._v(" "),t("div",{attrs:{align:"end"}},[t(r.a,{attrs:{text:""},on:{click:e.cancel}},[e._v(" Close ")]),e._v(" "),t(r.a,{attrs:{color:"primary"},on:{click:e.submitHandlerRegister}},[e._v("\n        Save Changes\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},559:function(e,t,n){"use strict";n.r(t);var r=n(467),o=n(478),c=n(607),l=n(518),d=n(210),f=n(525),h=(n(11),n(13),n(12),n(5),n(19),n(14),n(20),n(2)),v=n(118),m=n(541),y=n(535);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var w={created:function(){this.$store.dispatch("localfiles/view")},methods:{downloadFile:function(e){location="/".concat(e.files)},refresh:function(){this.addForm=!1,this.$store.dispatch("classes/viewClassByAdmin")},cancelForm:function(){this.editForm=!1,this.addForm=!1,this.isConfirmation=!1}},data:function(){return{headers:[{text:"ID",value:"id"},{text:"File Name",value:"file_name"},{text:"Actions",value:"action"},,],editForm:!1,addForm:!1}},components:{Add:m.default,Edit:y.default},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(v.b)("localfiles",["file_data"]))},x=w,_=n(96),component=Object(_.a)(x,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-10"},[t(l.a,{attrs:{width:"500"},model:{value:e.addForm,callback:function(t){e.addForm=t},expression:"addForm"}},[t("add",{on:{cancel:e.cancelForm}})],1),e._v(" "),t(l.a,{model:{value:e.editForm,callback:function(t){e.editForm=t},expression:"editForm"}},[t("edit",{attrs:{selectedItem:e.selectedItem},on:{cancel:e.cancelForm,refresh:e.refresh}})],1),e._v(" "),t("div",{staticClass:"text-h5"},[t(f.a,[t(o.a,[t("b",[e._v("Your Local Files")])]),e._v(" "),t(o.a,{attrs:{align:"end"}},[t(r.a,{attrs:{outlined:""},on:{click:function(t){e.addForm=!0}}},[e._v("Upload File")])],1)],1)],1),e._v(" "),t("div",{staticClass:"pt-5"},[t(c.a,{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.file_data,"item-key":"name"},scopedSlots:e._u([{key:"item.action",fn:function(n){var r=n.item;return[t("div",{staticClass:"pointer",on:{click:function(t){return e.downloadFile(r)}}},[t(d.a,[e._v("mdi-download")]),e._v(" Download\n         ")],1)]}}],null,!0)})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);