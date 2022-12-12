(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{488:function(e,t,r){"use strict";var n=r(16),o=(r(11),r(24),r(40),r(56),[function(e){return e&&Object.keys(e).length&&e.constructor===Object||"This is field is required"}]),c=[function(e){return"object"===Object(n.a)(e)||"This field must be a reference from the list"}];t.a={standardRules:[function(e){return!!e||"This field is required"}],emptyObjectFieldRule:o,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],emailFormatRule:[function(e){return null===e||""===e||(/.+@.+\..+/.test(e)||"E-mail must be valid")}],max10Char:[function(e){return e.length<=10||"Input too long!"}],max150Char:[function(e){return e.length<150||"Input too long!"}],mobileChar:[function(e){return 10===e.length&&!e.includes("-")||12===e.length||"Invalid mobile format"}],fieldArrayRule:[function(e){return 0!==e.length||"This field is required"}],fieldArraySingleRule:[function(e){return 0!==e.length||"This field is required"},function(e){return!(e.length>1)||"You must choose only 1 role"}],notObjectFieldRule:c}},532:function(e,t,r){"use strict";var n={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let o;const c=new Uint8Array(16);function l(){if(!o&&(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(c)}const d=[];for(let i=0;i<256;++i)d.push((i+256).toString(16).slice(1));function f(e,t=0){return(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase()}t.a=function(e,t,r){if(n.randomUUID&&!t&&!e)return n.randomUUID();const o=(e=e||{}).random||(e.rng||l)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(let i=0;i<16;++i)t[r+i]=o[i];return t}return f(o)}},539:function(e,t,r){"use strict";r.r(t);var n=r(469),o=r(545),c=r(482),l=r(481),d=r(567),f=r(519),m=(r(11),r(13),r(12),r(5),r(17),r(14),r(18),r(6)),v=r(2),h=(r(57),r(1)),y=r(532),O=r(492),j=r(118),_=r(488);function R(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}h.a.use(O.a,{});var U={computed:w(w({},Object(j.b)("users",["user_residents"])),Object(j.b)("classes",["classes_data"])),props:["account_type"],auth:!1,data:function(){var e;return w(w(w({userList:[],departMenu:!1},_.a),{},{e1:1,isLoading:!1,register:(e={firstname:"",lastname:"",gender:"",is_active:!0},Object(v.a)(e,"gender",""),Object(v.a)(e,"date_recorded",""),Object(v.a)(e,"email",""),Object(v.a)(e,"confirm_email",""),Object(v.a)(e,"mobile_number",""),Object(v.a)(e,"birthdate",""),Object(v.a)(e,"address",""),Object(v.a)(e,"province",""),Object(v.a)(e,"account_type","Resident"),Object(v.a)(e,"city",""),Object(v.a)(e,"barangay",""),Object(v.a)(e,"password",""),Object(v.a)(e,"confirm_password",""),e),isLoaded:!1},_.a),{},{isValid:!1,isRegister:!1})},created:function(){this.$store.dispatch("classes/viewClassByAdmin"),this.register.certificate_id=y.a(),console.log(this.$auth),this.$store.dispatch("users/viewUserResident")},methods:{cancel:function(){this.$emit("cancel")},submitHandlerRegister:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoaded=!0,t.prev=1,t.next=4,e.$store.dispatch("folder/add",e.register);case 4:e.$toastr.s("SUCCESS MESSAGE","Successfully Added!"),e.$emit("cancel"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert(t.t0);case 11:e.isLoaded=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},selectRegister:function(){this.isRegister?this.isRegister=!1:this.isRegister=!0}}},C=r(96),component=Object(C.a)(U,(function(){var e=this,t=e._self._c;return t("div",[t(o.a,{staticClass:"pa-16"},[t("div"),e._v(" "),t(l.a,[t(c.a,[t(l.a,[t(c.a,{attrs:{cols:"12"}},[t("div",[e._v("Folder Name")]),e._v(" "),t("div",[t(f.a,{attrs:{rules:e.standardRules,outlined:"",dense:""},model:{value:e.register.folder_name,callback:function(t){e.$set(e.register,"folder_name",t)},expression:"register.folder_name"}})],1)]),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t("div",[e._v("Category")]),e._v(" "),t("div",[t(d.a,{attrs:{rules:e.standardRules,outlined:"",dense:"",items:["Modules","Activity"]},model:{value:e.register.category,callback:function(t){e.$set(e.register,"category",t)},expression:"register.category"}})],1)]),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t("div",[e._v("Code")]),e._v(" "),t("div",[t(d.a,{attrs:{rules:e.standardRules,outlined:"",dense:"",items:e.classes_data,"item-value":"code","item-text":"code"},model:{value:e.register.code,callback:function(t){e.$set(e.register,"code",t)},expression:"register.code"}})],1)])],1)],1)],1),e._v(" "),t("div",{attrs:{align:"end"}},[t(n.a,{attrs:{text:""},on:{click:e.cancel}},[e._v(" Close ")]),e._v(" "),t(n.a,{attrs:{color:"primary"},on:{click:e.submitHandlerRegister}},[e._v("\n        Save Changes\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);