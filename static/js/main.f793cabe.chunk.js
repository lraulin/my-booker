(this["webpackJsonpmy-booker"]=this["webpackJsonpmy-booker"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),o=n(20),s=n.n(o),l=(n(47),n(18)),i=n(6),u=(n(48),n(10)),j=n(35),d=n(59),b=n(8),h=n.n(b),O=n(13),m="https://app.snapnurse.com/api/v1",x=function(e){return{Authorization:"Bearer "+e}},p=function(){var e=Object(O.a)(h.a.mark((function e(t,n){var r,c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m+"/admin/timecards/"+t,e.prev=1,console.log("Fetching one timecard from api..."),e.next=5,fetch(r,{headers:x(n)});case 5:return c=e.sent,e.next=8,c.json();case 8:return a=e.sent,console.log("Api response:"),console.log(a),e.abrupt("return",a);case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(t){var n,r,c,a,o,s,l,i,u,j,d,b;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.authorization,r=t.endDate,c=void 0===r?v(new Date):r,a=t.startDate,o=void 0===a?v(g(-14)):a,s=t.page,l=void 0===s?0:s,i=t.limit,j=l*(u=void 0===i?100:i),e.prev=2,console.log("Fetching from api..."),e.next=6,fetch("https://app.snapnurse.com/api/v1/admin/timecards?type=HOURLY&status[]=submitted&status[]=confirmed&status[]=preapproved&workDate[$gte]=".concat(o,"&workDate[$lte]=").concat(c,"&platformId=1&$limit=").concat(u,"&$skip=").concat(j,"&$sort[createdAt]=-1"),{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9",authorization:n,"if-none-match":'W/"87e67-gQagPz/QZeu/cqOYYc7FtOQM+Fc"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","sec-gpc":"1"},referrer:"https://app.snapnurse.com/admin/timecards?page=1&startDate=01/10/2021&endDate=01/22/2021&dateRangeType=workDate&type=HOURLY",referrerPolicy:"strict-origin-when-cross-origin",body:null,method:"GET",mode:"cors"});case 6:return d=e.sent,e.next=9,d.json();case 9:return b=e.sent,console.log("Api response:"),console.log(b),e.abrupt("return",b);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),g=function(e){return new Date((new Date).setDate((new Date).getDate()+e))},v=function(e){return e.toISOString().slice(0,10)},y=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n,r,c=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify(n)});case 4:return r=e.sent,e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n,r,c,a=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:"",e.prev=2,console.log("Logging in..."),r=m+"/authentication",e.next=7,y(r,{strategy:"local",email:t,password:n});case 7:return c=e.sent,console.log("Api response:"),console.log(c),e.abrupt("return",c);case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),k=Object(c.createContext)(null),I=function(e){var t=e.children,n=C();return Object(r.jsx)(k.Provider,{value:n,children:t})},w=function(){return Object(c.useContext)(k)},C=function(){var e=Object(c.useState)(localStorage.getItem("user")),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(localStorage.getItem("token")),o=Object(u.a)(a,2),s=o[0],l=o[1];return{user:n,token:s,signin:function(){var e=Object(O.a)(h.a.mark((function e(t,c){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Signing in from useProvideAuth..."),e.next=4,S(t,c);case 4:a=e.sent,console.log(a),a.user&&a.accessToken?(console.log("Success!"),r(a.user),localStorage.setItem("user",JSON.stringify(n)),l(a.accessToken),localStorage.setItem("token",a.accessToken)):(console.log("Login failure..."),console.log(a)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Unable to sign in..."),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),signout:function(){r(null),l(null),localStorage.removeItem("user"),localStorage.removeItem("token")}}},P=function(e){return e.user&&e.user.firstName+" "+e.user.lastName},L=function(e){return Number.parseFloat(e)||0},R=function(e){return L((L(e.amount)+L(e.stipendPaymentAmount)).toFixed(2))},A=function(e){var t=e.workDate,n=e.startTime,r=e.endTime,c=e.lunchInMinutes,a=e.overtimeHours,o=e.weeklyHours;return"".concat(t,"\n  ").concat(n," - ").concat(r,"\n  ").concat(c," min lunch\n  Overtime hours=").concat(a,"\n  Weekly hours=").concat(o)},T=function(e){var t=e.confirmUserId,n=e.confirmedAt;return t?"User #".concat(t," on ").concat(n):""},D=function(e){var t=e.approvedUserId,n=e.approvedAt;return t?"User #".concat(t," on ").concat(n):""},G=function(e){var t=e.timecardPayRate;if(!t)return"";var n=t.description,r=t.payRate,c=t.overtimePayRate,a=t.doubletimePayRate;return"".concat(n,"\n").concat(r," / ").concat(a," / ").concat(c)},N=function(e){var t=e.stipendPaymentAmount,n=e.stipendRuleAmount,r=e.stipendRuleDays;return n?"$".concat(t,"\n  $").concat(n," / ").concat(r):""},F=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(0),s=Object(u.a)(o,2),l=s[0],i=s[1],b=Object(c.useState)(!1),h=Object(u.a)(b,2),O=h[0],m=h[1],x=w();Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("timecards"));e&&e.length&&a(e)}),[]);var p=function(e){return e?Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.workDate}),Object(r.jsx)("td",{children:e.createdAt}),Object(r.jsx)("td",{children:P(e)}),Object(r.jsx)("td",{children:A(e)}),Object(r.jsx)("td",{children:e.memo}),Object(r.jsx)("td",{children:T(e)}),Object(r.jsx)("td",{children:D(e)}),Object(r.jsx)("td",{children:G(e)}),Object(r.jsx)("td",{children:e.agency}),Object(r.jsx)("td",{children:e.type}),Object(r.jsx)("td",{children:e.status}),Object(r.jsx)("td",{children:e.timecardPhotoUrls?e.timecardPhotoUrls.length:""}),Object(r.jsx)("td",{children:N(e)}),Object(r.jsxs)("td",{children:["$",R(e)]}),Object(r.jsx)("td",{children:Object(r.jsx)("a",{href:"https://app.snapnurse.com/admin/timecards?type=HOURLY&dateRangeType=workDate&page=1&userId=".concat(e.userId),target:"_blank",rel:"noreferrer",onClick:function(){return a(n.filter((function(t){return t.userId!==e.userId})))},style:e.visited?{color:"red"}:null,children:"Open in Booker"})})]},e.id):null};return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"number",value:l,min:"0",onChange:function(e){return i(Number.parseInt(e.target.value))}}),Object(r.jsx)(j.a,{onClick:function(){f({authorization:x.token,page:l}).then((function(e){e.data&&e.data.length?(localStorage.setItem("timecards",JSON.stringify(e.data)),a(e.data)):e.tokenExpired?(console.log("Token expired. Signing out..."),x.signout()):(console.log("Problem fetching timecards..."),console.log(e))}))},children:"Fetch Timecards"}),Object(r.jsxs)(j.a,{variant:"secondary",onClick:function(){return m(!O)},children:["Show ",O?"All":"Only Super Admin"]}),Object(r.jsxs)("section",{id:"timecardStats",children:[Object(r.jsxs)("p",{children:["Total Shown: ",n.length]}),Object(r.jsxs)("p",{children:["Admin Approvals:"," ",n.filter((function(e){return R(e)>=2e3})).length]}),Object(r.jsxs)("p",{children:["Zero-Hour:"," ",n.filter((function(e){return R(e)<=L(e.stipendPaymentAmount)})).length]})]}),Object(r.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:["Work Date","Created At","Worker","Details","Memo","Confirmed","Approved","Pay Rates","Agency","Type","Status","Image","Stipend","Total","Inspect"].map((function(e){return Object(r.jsx)("th",{children:e})}))})}),Object(r.jsx)("tbody",{children:O?n.filter((function(e){return R(e)>=2e3})).map((function(e){return p(e)})):n.map((function(e){return p(e)}))})]})]})},V=n(61),H=n(60),U=n(36),M=n(62),$=n(17),W=(n(50),function(e){return e.user?e.user.firstName+" "+e.user.lastName:""}),E=function(e){var t=e.timecardPayRate;if(!t)return"";var n=t.description,r=t.payRate,c=t.overtimePayRate,a=t.doubletimePayRate;return"".concat(n,"\n").concat(r," / ").concat(a," / ").concat(c)},J=function(e){return Number.parseFloat(e)},Y=function(e){return(J(e.amount)-J(e.overtimeAmount)-J(e.doubletimeAmount))/J(e.timecardPayRate.payRate)},z=function(e){return Y(e)+J(e.overtimeHours)+J(e.doubletimeHours)},B=function(e){return Number.parseFloat(e.stipendPaymentAmount)+Number.parseFloat(e.total)},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=new Date(e),n=t.getHours()>=12?"pm":"am";return t.toDateString()+" @ "+t.getHours()%12+":"+t.getMinutes().toString().padStart(2,"0")+" "+n+" ("+t.getHours().toString().padStart(2,"0")+t.getMinutes().toString().padStart(2,"0")+")"},q=function(e){var t=e.tc;return Object(r.jsxs)($.a,{children:[Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formType",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Type"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.type})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formFacility",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Facility"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.facility&&t.facility.name})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formUnitNumber",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Unit Number"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.unitNumber||"-"})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formFacilityManager",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Facility Manager"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.facilityManager||"-"})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formPayRateDescription",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Pay Rate Description"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.timecardPayRate&&t.timecardPayRate.description||"-"})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formWorker",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Worker"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:W(t)})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formStartShift",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Start Shift"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:Q(t.startTime)})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formEndShift",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"End Shift"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:Q(t.endTime)})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formLunch",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Lunch"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.lunchInMinutes+" min"})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formRegularHours",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Regular Hours"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:Y(t)})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formOvertimeHours",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Overtime Hours"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:J(t.overtimeHours)})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formTotalHoursWorked",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Total Hours Worked"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:z(t)})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formRate",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Rate"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:E(t)})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formRegularPay",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Regular Pay"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"$"+t.amount})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formOvertimePay",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Overtime Pay"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"$"+t.overtimeAmount})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formNonTaxableAdjustment",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Non Taxable Adjustment"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{defaultValue:"Set non taxable adjustment for a worker"})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formAdjustment",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Adjustment"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"Set adjustment if needed"})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formMemo",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Memo"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"Additional notes can be here"})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formStipend",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Stipend(Pro-Rated)"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"$"+t.stipendPaymentAmount})})]}),Object(r.jsxs)($.a.Group,{as:H.a,controlId:"formTotal",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Total"})}),Object(r.jsx)(U.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"$"+B(t)})})]})]})},Z=n(21),_=n(37),K=function(e){var t=e.timecardPhotoUrls,n=Object(c.useState)(1),a=Object(u.a)(n,2),o=a[0],s=a[1],l=t.map((function(e,t){return Object(r.jsx)(Z.a.Item,{active:t+1===o,children:t+1},e.id)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)(_.a,{src:t&&t.length?t[o-1].url:null,alt:"Worker-uploaded timecard image.",fluid:!0}),Object(r.jsxs)(Z.a,{children:[Object(r.jsx)(Z.a.Prev,{onClick:function(){o+1<=t.length&&s(o+1)},disabled:1===o}),l,Object(r.jsx)(Z.a.Next,{onClick:function(){o-1>=1&&s(o-1)},disabled:o===t.length})]})]})},X=function(e){var t=Object(c.useState)(null),n=Object(u.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)(0),l=Object(u.a)(s,2),d=l[0],b=l[1],h=w(),O=new URLSearchParams(Object(i.h)().search);return Object(c.useEffect)((function(){var e=!0;if(console.log(d),b(d+1),d>1)return function(){return e=!1};if(h.token){var t=O.get("id");p(t,h.token).then((function(t){console.log("Fetched one timecard..."),console.log(e),console.log(JSON.stringify(Object.keys(t))),e&&t&&o(t)}))}return function(){return e=!1}}),[]),a?Object(r.jsx)(V.a,{fluid:!0,children:Object(r.jsxs)(H.a,{children:[Object(r.jsx)(U.a,{children:Object(r.jsx)(K,{timecardPhotoUrls:a.timecardPhotoUrls})}),Object(r.jsx)(U.a,{children:Object(r.jsx)(q,{tc:a})}),Object(r.jsx)(U.a,{xs:1,children:Object(r.jsxs)(M.a,{vertical:!0,children:[Object(r.jsx)(j.a,{variant:"success",children:"Approve"}),Object(r.jsx)(j.a,{variant:"warning",children:"Reject"}),Object(r.jsx)(j.a,{variant:"primary",children:"Edit"}),Object(r.jsx)(j.a,{variant:"danger",children:"Remove"}),Object(r.jsx)(j.a,{variant:"secondary",children:"Cancel"})]})})]})}):null},ee=n(63),te=n(64),ne=Object(i.i)((function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),s=Object(u.a)(o,2),l=s[0],d=s[1],b=Object(i.g)(),m=Object(i.h)(),x=w(),p=(m.state||{from:{pathname:"/"}}).from,f=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.signin(n,l);case 3:b.replace(p);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"Login",children:[Object(r.jsxs)("p",{children:["You must log in to view the page at ",p.pathname]}),Object(r.jsxs)($.a,{onSubmit:f,children:[Object(r.jsxs)($.a.Group,{controlId:"email",children:[Object(r.jsx)($.a.Label,{children:"Email"}),Object(r.jsx)($.a.Control,{autoFocus:!0,type:"email",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(r.jsxs)($.a.Group,{controlId:"password",children:[Object(r.jsx)($.a.Label,{children:"Password"}),Object(r.jsx)($.a.Control,{type:"password",value:l,onChange:function(e){return d(e.target.value)}})]}),Object(r.jsx)(j.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0&&l.length>0),children:"Login"})]})]})})),re=n(33),ce=n(41),ae=function(e){var t=e.children,n=Object(ce.a)(e,["children"]),c=w();return Object(r.jsx)(i.b,Object(re.a)(Object(re.a)({},n),{},{render:function(e){var n=e.location;return c.user?t:Object(r.jsx)(i.a,{to:{pathname:"/login",state:{from:n}}})}}))},oe=function(){var e=Object(i.g)(),t=w();return t.user?Object(r.jsxs)("p",{style:{color:"white"},children:["Welcome!"," ",Object(r.jsx)(j.a,{variant:"danger",onClick:function(){t.signout((function(){return e.push("/")}))},children:"Sign out"})]}):Object(r.jsx)("p",{style:{color:"white"},children:"You are not logged in."})},se=function(){return Object(r.jsx)(I,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsxs)(ee.a,{bg:"dark",variant:"dark",children:[Object(r.jsx)(ee.a.Brand,{href:"#home",children:"Navbar"}),Object(r.jsx)(te.a,{className:"mr-auto",children:Object(r.jsx)(te.a.Link,{as:l.b,to:"/timecards",children:"Timecards"})}),Object(r.jsx)(oe,{})]}),Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/login",component:ne}),Object(r.jsx)(ae,{path:"/timecards",exact:!0,children:Object(r.jsx)(F,{})}),Object(r.jsx)(ae,{path:"/timecards/view",children:Object(r.jsx)(X,{})})]})]})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(se,{})}),document.getElementById("root")),le()}},[[57,1,2]]]);
//# sourceMappingURL=main.f793cabe.chunk.js.map