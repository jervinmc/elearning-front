(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{270:function(t,e,r){var content=r(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("4d6a2e0f",content,!0,{sourceMap:!1})},293:function(t,e,r){"use strict";var n=r(475),o=r(481),c=r(211),f=r(467),l=r(478),d=r(482),m=r(210),v=r(176),h=r(208),_=r(137),x=r(209),w=r(71),$=r(480),R=r(468),k=r(476),S=r(477),E=(r(33),{methods:{goToAccount:function(){location="/account"},pushRoute:function(link){window.location.href="/".concat(link)},goIndex:function(){window.location.href="/"}},name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!0,fixed:!1,iconFooter:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],items_admin:[{icon:"mdi-chart-bubble",title:"List of Class",to:"/admin/classes"},{icon:"mdi-chart-bubble",title:"Classroom Folders",to:"/folder"}],items:[{icon:"mdi-chart-bubble",title:"Classes",to:"/students/classes"},{icon:"mdi-chart-bubble",title:"Offline Files",to:"/students/offline"},{icon:"mdi-chart-bubble",title:"Classroom Folders",to:"/folder"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}}),y=r(96),component=Object(y.a)(E,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},["login"!=t.$route.name&&"index"!=t.$route.name&&t.$auth.loggedIn&&"contact"!=t.$route.name?e(k.a,{attrs:{color:"secondary",dark:"","mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e("div",[e(v.a,{attrs:{src:"/images/logo_elearning.jpg",height:"50",width:"50"}})],1),t._v(" "),e(h.a,t._l("Student"==t.$auth.user.account_type?t.items:t.items_admin,(function(r,i){return e(_.a,{key:i,attrs:{to:r.to,router:"",exact:""}},[e(x.a,[e(m.a,[t._v(t._s(r.icon))])],1),t._v(" "),e(w.a,[e(w.b,{domProps:{textContent:t._s(r.title)}})],1)],1)})),1)],1):t._e(),t._v(" "),"login"==t.$route.name||"about"==t.$route.name||"index"==t.$route.name||"register"==t.$route.name||"contact"==t.$route.name?e(o.a,{attrs:{color:"white","clipped-left":t.clipped,fixed:"",app:""}},[e("div",{attrs:{align:"start"}},[e(v.a,{staticClass:"pointer",attrs:{src:"/logo.jpeg",height:"50",width:"100",contain:""},on:{click:t.goIndex}})],1),t._v(" "),e(S.a),t._v(" "),t.$auth.loggedIn?t._e():e("div",{class:"login"==t.$route.name?"px-10 pointer secondary--text":"px-10 pointer",on:{click:function(e){return t.pushRoute("about")}}},[t._v("\n      About\n    ")]),t._v(" "),t.$auth.loggedIn?t._e():e("div",{class:"login"==t.$route.name?"px-10 pointer secondary--text":"px-10 pointer",on:{click:function(e){return t.pushRoute("login")}}},[t._v("\n      Login\n    ")]),t._v(" "),t.$auth.loggedIn?e("div",{staticClass:"px-10 pointer"},[e(f.a,{attrs:{dark:"",depressed:"",color:"secondary"},on:{click:function(e){return t.$auth.logout()}}},[t._v("\n        Logout\n      ")])],1):e("div",{staticClass:"px-10 pointer"},[e(f.a,{attrs:{dark:"",depressed:"",color:"secondary"},on:{click:function(e){return t.pushRoute("register")}}},[t._v("\n        Sign up\n      ")])],1)],1):e(o.a,{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[e("div",{staticClass:"text-h5"},[e("b",[t._v("Welcome to e-learning!")])]),t._v(" "),e(S.a),t._v(" "),e(l.a,{attrs:{cols:"auto"}},[e(c.a,{staticClass:"white--text pointer",attrs:{size:"60",color:"grey"}},[e(v.a,{attrs:{src:t.$auth.user.image}})],1)],1),t._v(" "),t.$auth.loggedIn?e("div",[e(R.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e(l.a,t._g(t._b({},"v-col",o,!1),n),[e("div",[t._v(t._s(t.$auth.user.firstname)+" "+t._s(t.$auth.user.lastname))]),t._v(" "),e("div",[t._v(t._s(t.$auth.user.account_type))])])]}}],null,!1,772794457)},[t._v(" "),e(h.a,[e(_.a,[e(w.b,{staticClass:"pointer",on:{click:function(e){return t.goToAccount()}}},[t._v("My Account")])],1),t._v(" "),e(_.a,[e(w.b,{staticClass:"pointer",on:{click:function(e){return t.$auth.logout()}}},[t._v("Logout")])],1)],1)],1)],1):t._e()],1),t._v(" "),e($.a,[e(d.a,{staticClass:"pa-0",attrs:{fluid:""}},[e("Nuxt")],1)],1),t._v(" "),e(k.a,{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[e(h.a,[e(_.a,{nativeOn:{click:function(e){t.right=!t.right}}},[e(x.a,[e(m.a,{attrs:{light:""}},[t._v(" mdi-repeat ")])],1),t._v(" "),e(w.b,[t._v("Switch drawer (click me)")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},30:function(t,e,r){t.exports=r.p+"fonts/AvenirLTStd-Book.813557d.otf"},319:function(t,e,r){r(320),t.exports=r(321)},361:function(t,e,r){"use strict";r(270)},362:function(t,e,r){var n=r(25)(!1);n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=n},365:function(t,e,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("168108f4",content,!0,{sourceMap:!1})},366:function(t,e,r){var n=r(25),o=r(29),c=r(30),f=n(!1),l=o(c);f.push([t.i,'@font-face{font-family:"Avenir";src:local("Avenir"),url('+l+')}html{font-family:"Avenir"}.pointer{cursor:pointer}.pointer:hover{cursor:pointer;color:#ef5777}.centralized-item{display:flex;justify-content:center;align-content:center}',""]),t.exports=f},427:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(55),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/classes/",data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},edit:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,console.log(e),n.next=4,r.$axios.$put("/classes/".concat(e.id,"/"),e);case 4:n.sent.customer=e;case 6:case"end":return n.stop()}}),n)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/classes/");case 3:o=r.sent,n("SET_CLASSES",o);case 5:case"end":return r.stop()}}),r)})))()},viewClassByAdmin:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/classes-admin/");case 3:o=r.sent,n("SET_CLASSES",o);case 5:case"end":return r.stop()}}),r)})))()},viewStudentClass:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/student-class/".concat(data,"/"));case 3:o=r.sent,n("SET_CLASSES_STUDENT",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},428:function(t,e,r){"use strict";r.r(e);e.default={SET_CLASSES:function(t,e){t.classes_data=e},SET_CLASSES_STUDENT:function(t,e){t.student_class_data=e}}},429:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},classes_data:[],student_class_data:[]}}},430:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(55),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/enroll/",data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},edit:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$put("/enroll/".concat(data.id,"/"),data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/enroll/");case 3:o=r.sent,n("SET_ENROLL",o);case 5:case"end":return r.stop()}}),r)})))()},viewByStudent:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/enrolled-student/");case 3:o=r.sent,n("SET_ENROLL",o);case 5:case"end":return r.stop()}}),r)})))()},viewByCode:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/enrolled-code/".concat(data,"/"));case 3:o=r.sent,n("SET_ENROLL",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},431:function(t,e,r){"use strict";r.r(e);e.default={SET_ENROLL:function(t,e){t.enroll_data=e}}},432:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},enroll_data:[]}}},433:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(55),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/classroomfiles/",data,{headers:{"Content-Type":"multipart/form-data"}});case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},edit:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,console.log(customer),r.next=4,e.$axios.$put("/classroomfiles/".concat(data.id,"/"),data);case 4:r.sent.data=data;case 6:case"end":return r.stop()}}),r)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/classroomfiles/");case 3:o=r.sent,n("SET_FILES",o);case 5:case"end":return r.stop()}}),r)})))()},viewByFolderid:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/classroomfiles-folderid/".concat(data,"/"));case 3:o=r.sent,n("SET_FILES",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},434:function(t,e,r){"use strict";r.r(e);e.default={SET_FILES:function(t,e){t.file_data=e}}},435:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},file_data:[]}}},436:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(55),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/folder/",data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},edit:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,console.log(customer),r.next=4,e.$axios.$put("/folder/".concat(data.id,"/"),data);case 4:r.sent.data=data;case 6:case"end":return r.stop()}}),r)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/folder/");case 3:o=r.sent,n("SET_FOLDER",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},437:function(t,e,r){"use strict";r.r(e);e.default={SET_FOLDER:function(t,e){t.folder_data=e}}},438:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},folder_data:[]}}},439:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(55),{add:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,e.$axios.$post("/localfiles/",data);case 3:r.sent.data=data;case 5:case"end":return r.stop()}}),r)})))()},edit:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,console.log(customer),r.next=4,e.$axios.$put("/localfiles/".concat(data.id,"/"),data);case 4:r.sent.data=data;case 6:case"end":return r.stop()}}),r)})))()},view:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("/localfiles/");case 3:o=r.sent,n("SET_FILE",o);case 5:case"end":return r.stop()}}),r)})))()}});e.default=o},440:function(t,e,r){"use strict";r.r(e);e.default={SET_FILE:function(t,e){t.file_data=e}}},441:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},file_data:[]}}},442:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(55),{add:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,console.log(e),n.next=4,r.$axios.$post("/signup/",e);case 4:n.sent.customer=e;case 6:case"end":return n.stop()}}),n)})))()},edit:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,console.log(e),n.next=4,r.$axios.$put("/users/".concat(e.id,"/"),e);case 4:n.sent.customer=e;case 6:case"end":return n.stop()}}),n)})))()},editImage:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,console.log(e),n.next=4,r.$axios.$put("/users/".concat(e.get("id"),"/"),e,{headers:{"Content-Type":"multipart/form-data"}});case 4:n.sent.customer=e;case 6:case"end":return n.stop()}}),n)})))()}});e.default=o},443:function(t,e,r){"use strict";r.r(e);e.default={ADD_USER:function(t,e){t.customers.unshift(e)}}},444:function(t,e,r){"use strict";r.r(e);e.default=function(){return{page_size:10,query_results:{},users:[],selected_customer:{}}}},90:function(t,e,r){"use strict";var n=r(475),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(361),r(96)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[319,55,8,56]]]);