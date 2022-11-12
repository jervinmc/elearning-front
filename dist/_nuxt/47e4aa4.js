(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{488:function(e,t,r){"use strict";var n=r(16),c=(r(11),r(24),r(40),r(56),[function(e){return e&&Object.keys(e).length&&e.constructor===Object||"This is field is required"}]),o=[function(e){return"object"===Object(n.a)(e)||"This field must be a reference from the list"}];t.a={standardRules:[function(e){return!!e||"This field is required"}],emptyObjectFieldRule:c,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],emailFormatRule:[function(e){return null===e||""===e||(/.+@.+\..+/.test(e)||"E-mail must be valid")}],max10Char:[function(e){return e.length<=10||"Input too long!"}],max150Char:[function(e){return e.length<150||"Input too long!"}],mobileChar:[function(e){return 10===e.length&&!e.includes("-")||12===e.length||"Invalid mobile format"}],fieldArrayRule:[function(e){return 0!==e.length||"This field is required"}],fieldArraySingleRule:[function(e){return 0!==e.length||"This field is required"},function(e){return!(e.length>1)||"You must choose only 1 role"}],notObjectFieldRule:o}},498:function(e,t,r){r(4)({target:"Object",stat:!0},{is:r(308)})},532:function(e,t,r){"use strict";var n={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let c;const o=new Uint8Array(16);function l(){if(!c&&(c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(o)}const d=[];for(let i=0;i<256;++i)d.push((i+256).toString(16).slice(1));function f(e,t=0){return(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase()}t.a=function(e,t,r){if(n.randomUUID&&!t&&!e)return n.randomUUID();const c=(e=e||{}).random||(e.rng||l)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,t){r=r||0;for(let i=0;i<16;++i)t[r+i]=c[i];return t}return f(c)}},544:function(e,t,r){"use strict";r.r(t);var n=r(469),c=r(545),o=r(482),l=r(481),d=r(519),f=(r(11),r(13),r(12),r(5),r(17),r(14),r(18),r(6)),m=r(2),h=(r(57),r(34),r(31),r(1)),O=r(532),v=r(492),y=r(118),j=r(488);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}h.a.use(v.a,{});var R={computed:w({},Object(y.b)("users",["user_residents"])),props:["account_type"],auth:!1,data:function(){var e;return w(w(w({userList:[],departMenu:!1},j.a),{},{e1:1,isLoading:!1,register:(e={firstname:"",lastname:"",gender:"",is_active:!0},Object(m.a)(e,"gender",""),Object(m.a)(e,"date_recorded",""),Object(m.a)(e,"email",""),Object(m.a)(e,"confirm_email",""),Object(m.a)(e,"mobile_number",""),Object(m.a)(e,"birthdate",""),Object(m.a)(e,"address",""),Object(m.a)(e,"province",""),Object(m.a)(e,"account_type","Resident"),Object(m.a)(e,"city",""),Object(m.a)(e,"barangay",""),Object(m.a)(e,"password",""),Object(m.a)(e,"confirm_password",""),e),file:"",isLoaded:!1},j.a),{},{isValid:!1,isRegister:!1})},created:function(){this.register.certificate_id=O.a(),console.log(this.$auth),this.$store.dispatch("users/viewUserResident")},methods:{onFileUpload:function(e){if(this.file=e,(e=e.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(e.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(e){return void alert(e)}this.file=e}},cancel:function(){this.$emit("cancel")},submitHandlerRegister:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new FormData,null!=e.file&&""!=e.file&&r.append("files",e.file),r.append("file_name",e.register.file_name),r.append("user_id",e.$auth.user.id),r.append("folder_id",e.$route.query.id),r.append("author","".concat(e.$auth.user.firstname," ").concat(e.$auth.user.lastname)),alert("".concat(e.$auth.user.firstname," ").concat(e.$auth.user.lastname)),e.isLoaded=!0,t.prev=8,t.next=11,e.$store.dispatch("localfiles/add",r);case 11:e.$toastr.s("SUCCESS MESSAGE","Successfully Added!"),e.$emit("cancel"),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),alert(t.t0);case 18:e.isLoaded=!1;case 19:case"end":return t.stop()}}),t,null,[[8,15]])})))()},selectRegister:function(){this.isRegister?this.isRegister=!1:this.isRegister=!0}}},U=r(96),component=Object(U.a)(R,(function(){var e=this,t=e._self._c;return t("div",[t(c.a,{staticClass:"pa-16"},[t("div"),e._v(" "),t(l.a,[t(o.a,[t(l.a,[t(o.a,{attrs:{cols:"12"}},[t("div",[e._v("File Name")]),e._v(" "),t("div",[t(d.a,{attrs:{rules:e.standardRules,outlined:"",dense:""},model:{value:e.register.file_name,callback:function(t){e.$set(e.register,"file_name",t)},expression:"register.file_name"}})],1)]),e._v(" "),t("div",[t(o.a,[t("input",{ref:"file",attrs:{type:"file",id:"fileInput"},on:{change:e.onFileUpload}})])],1)],1)],1)],1),e._v(" "),t("div",{attrs:{align:"end"}},[t(n.a,{attrs:{text:""},on:{click:e.cancel}},[e._v(" Close ")]),e._v(" "),t(n.a,{attrs:{color:"primary"},on:{click:e.submitHandlerRegister}},[e._v("\n        Save Changes\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);