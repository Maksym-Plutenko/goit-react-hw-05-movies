"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var r=a(861),n=a(439),s=a(757),c=a.n(s),u=a(791),i=a(689),o=a(282),p="Cast_list__GlWio",f="Cast_item__a0CDL",l="Cast_img__-isbW",h="Cast_name__6UbFm",d="Cast_character__tKDlA",m=a(184),v=function(){var e=(0,u.useState)([]),t=(0,n.Z)(e,2),a=t[0],s=t[1],v=(0,i.UO)().movieId;return(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.cast(t);case 2:a=e.sent,s(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(v)}),[v]),(0,m.jsx)("ul",{className:p,children:a.map((function(e){return(0,m.jsxs)("li",{className:f,children:[e.profile_path?(0,m.jsx)("img",{className:l,src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:"".concat(e.name)}):(0,m.jsx)("img",{className:l,src:"https://freesvg.org/img/1367934593.png",alt:"not found"}),(0,m.jsx)("p",{className:h,children:e.name}),(0,m.jsxs)("p",{className:d,children:["Character: ",e.character]})]},e.id)}))})}},282:function(e,t,a){var r=a(861),n=a(757),s=a.n(n),c=a(243),u={key:"api_key=c8502b1448a0f91350559a97552ddf48",trending:function(){var e=this;return(0,r.Z)(s().mark((function t(){var a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.Z.defaults.baseURL="https://api.themoviedb.org/3/",t.next=3,c.Z.get("trending/movie/day?".concat(e.key));case 3:return a=t.sent,t.abrupt("return",a.data.results);case 5:case"end":return t.stop()}}),t)})))()},seach:function(e){var t=this;return(0,r.Z)(s().mark((function a(){var r;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.Z.defaults.baseURL="https://api.themoviedb.org/3/",a.next=3,c.Z.get("search/movie?".concat(t.key,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return r=a.sent,a.abrupt("return",r.data.results);case 5:case"end":return a.stop()}}),a)})))()},details:function(e){var t=this;return(0,r.Z)(s().mark((function a(){var r;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.Z.defaults.baseURL="https://api.themoviedb.org/3/",a.next=3,c.Z.get("movie/".concat(e,"?").concat(t.key,"&language=en-US"));case 3:return r=a.sent,a.abrupt("return",r.data);case 5:case"end":return a.stop()}}),a)})))()},cast:function(e){var t=this;return(0,r.Z)(s().mark((function a(){var r;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.Z.defaults.baseURL="https://api.themoviedb.org/3/",a.next=3,c.Z.get("movie/".concat(e,"/credits?").concat(t.key,"&language=en-US"));case 3:return r=a.sent,a.abrupt("return",r.data.cast);case 5:case"end":return a.stop()}}),a)})))()},rewiews:function(e){var t=this;return(0,r.Z)(s().mark((function a(){var r;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.Z.defaults.baseURL="https://api.themoviedb.org/3/",a.next=3,c.Z.get("movie/".concat(e,"/reviews?").concat(t.key,"&language=en-US"));case 3:return r=a.sent,a.abrupt("return",r.data.results);case 5:case"end":return a.stop()}}),a)})))()}};t.Z=u}}]);
//# sourceMappingURL=76.33b19eda.chunk.js.map