(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{494:function(t,e,n){var content=n(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("2065bca8",content,!0,{sourceMap:!1})},495:function(t,e,n){var r=n(25),o=n(29),c=n(30),l=r(!1),d=o(c);l.push([t.i,"@font-face{font-family:Avenir;src:url("+d+') format("truetype")}@font-face{font-family:Avenir-Bold;src:url('+d+') format("truetype")}.v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}',""]),t.exports=l},499:function(t,e,n){var content=n(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("e23b7040",content,!0,{sourceMap:!1})},523:function(t,e,n){"use strict";var r=n(76),o=n(2),c=(n(32),n(75),n(62),n(40),n(56),n(5),n(119),n(11),n(13),n(12),n(17),n(14),n(18),n(494),n(484)),l=n(120),d=n(144),v=n(223),h=n(224),f=n(221),m=n(222),_=n(145),x=n(10),y=n(9),w=n(0);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $=Object(x.a)(d.a,v.a,h.a,f.a,m.a,l.a);e.a=$.extend({name:"v-dialog",directives:{ClickOutside:_.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,n;null!=(e=t.$refs.dialog)&&e.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,null==(n=t.$refs.dialog)||n.focus());t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(t){return!t.hasAttribute("disabled")}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:O({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=O(O({},data.style),{},{maxWidth:Object(w.h)(this.maxWidth),width:Object(w.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},528:function(t,e,n){var r=n(25),o=n(29),c=n(30),l=r(!1),d=o(c);l.push([t.i,"@font-face{font-family:Avenir;src:url("+d+') format("truetype")}@font-face{font-family:Avenir-Bold;src:url('+d+') format("truetype")}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=l},543:function(t,e,n){"use strict";n(11),n(13),n(12),n(5),n(17),n(14),n(18);var r=n(2),o=(n(32),n(218),n(219),n(499),n(220)),c=n(532),l=n(95),d=n(10);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},604:function(t,e,n){"use strict";n.r(e);var r=n(213),o=n(469),c=n(543),l=n(482),d=n(523),v=n(471),h=n(212),f=n(176),m=n(481),_=n(518),x=n(6),y=(n(5),n(42),n(45),n(580),n(315),n(34),n(57),{methods:{submitHandlerRegister:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoaded=!0,e.prev=1,t.register.id=t.$auth.user.id,e.next=5,t.$store.dispatch("users/edit",t.register);case 5:t.$toastr.s("SUCCESS MESSAGE","Successfully Added!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:t.isLoaded=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},onFileUpload:function(t){if(this.file=t,t=t.target.files[0],this.url=URL.createObjectURL(t),t.name.length>100)alert("255 characters exceeded filename.");else{try{if(t.size>16e6)return void alert("Only 15mb file can be accepted.");var e=new FormData;e.append("id",this.$auth.user.id),e.append("image",t),this.$store.dispatch("users/editImage",e)}catch(t){return void alert(t)}this.file=t}},cancelForm:function(){this.editForm=!1},refresh:function(){location="/account"},edit:function(){this.editForm=!0}},data:function(){return{image:"",isEdit:!1,register:{},url:"",editForm:!1,selectedItem:{}}}}),w=n(96),component=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-10"},[e(d.a,{model:{value:t.editForm,callback:function(e){t.editForm=e},expression:"editForm"}},[e("edit",{attrs:{selectedItem:t.$auth.user},on:{cancel:t.cancelForm,refresh:t.refresh}})],1),t._v(" "),e("div",{staticClass:"grey--text text-h5 pb-5"},[e(m.a,[e(l.a,[e("b",[t._v("My Account")])])],1)],1),t._v(" "),e("div",[e(c.a,{staticClass:"pa-10",attrs:{elevation:"1",color:"white"}},[e("div",[e("div",{attrs:{align:"center"}},[e(r.a,{staticClass:"white--text pointer",attrs:{size:"100",color:"grey"},on:{click:function(e){return t.$refs.file.click()}}},[e(f.a,{attrs:{src:t.$auth.user.image}})],1),t._v(" "),e("input",{ref:"file",staticClass:"d-none",attrs:{type:"file",id:"fileInput",accept:"image/png, image/jpeg"},on:{change:t.onFileUpload}}),t._v(" "),e("div",[e("b",[t._v(t._s(t.$auth.user.firstname)+" "+t._s(t.$auth.user.lastname))])]),t._v(" "),e("div",{staticClass:"grey--text"},[t._v(t._s(t.$auth.user.account_type))])],1)]),t._v(" "),e("div",{staticClass:"pt-10"},[e("div",[e(m.a,[e(l.a,[e("div",[t._v("\n                Full Name: "+t._s(t.$auth.user.firstname)+"\n                "+t._s(t.$auth.user.lastname)+"\n              ")]),t._v(" "),t.isEdit?e("div",[e(_.a,{attrs:{placeholder:"Enter first name",dense:"",outlined:""},model:{value:t.register.firstname,callback:function(e){t.$set(t.register,"firstname",e)},expression:"register.firstname"}})],1):t._e(),t._v(" "),t.isEdit?e("div",[e(_.a,{attrs:{placeholder:"Enter last name",dense:"",outlined:""},model:{value:t.register.lastname,callback:function(e){t.$set(t.register,"lastname",e)},expression:"register.lastname"}})],1):t._e()])],1)],1),t._v(" "),e("div",[e(m.a,[e(l.a,[e("div",[t._v("Birthday: "+t._s(t.$auth.user.birthdate))]),t._v(" "),t.isEdit?e("div",[e(_.a,{attrs:{dense:"",outlined:""},model:{value:t.register.birthdate,callback:function(e){t.$set(t.register,"birthdate",e)},expression:"register.birthdate"}})],1):t._e()])],1)],1),t._v(" "),e("div",[e(m.a,[e(l.a,[e("div",[t._v("Mobile: "+t._s(t.$auth.user.mobile_number))]),t._v(" "),t.isEdit?e("div",[e(_.a,{attrs:{dense:"",outlined:""},model:{value:t.register.mobile_number,callback:function(e){t.$set(t.register,"mobile_number",e)},expression:"register.mobile_number"}})],1):t._e()])],1)],1),t._v(" "),e("div",[e(m.a,[e(l.a,[e("div",[t._v("Email: "+t._s(t.$auth.user.email))])])],1)],1),t._v(" "),e(v.a),t._v(" "),e("div",{staticClass:"pt-5",attrs:{align:"end"}},[t.isEdit?e("div",[e(o.a,{attrs:{color:"#ffc625"},on:{click:t.submitHandlerRegister}},[e(h.a,[t._v("mdi-account-check")]),t._v(" "),e("div",{staticClass:"pt-1"},[t._v("Save Changes")])],1),t._v(" "),e(o.a,{attrs:{else:"",color:"grey"},on:{click:function(e){t.isEdit=!1}}},[e(h.a,[t._v("mdi-close")]),t._v(" "),e("div",{staticClass:"pt-1"},[t._v("Cancel")])],1)],1):e(o.a,{attrs:{color:"#ffc625"},on:{click:function(e){t.isEdit=!0}}},[e(h.a,[t._v("mdi-account-check")]),t._v(" "),e("div",{staticClass:"pt-1"},[t._v("Edit Account")])],1)],1)],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);