(this["webpackJsonpmy-booker"]=this["webpackJsonpmy-booker"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},198:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(23),o=n.n(s),i=(n(100),n(25)),l=n(16),j=(n(101),n(15)),d=n(33),u=n(87),b=n(14),h=n.n(b),O=n(18),p=function(e){return{Authorization:"Bearer "+e}},m=function(){var e=Object(O.a)(h.a.mark((function e(t,n){var r,c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://app.snapnurse.com/api/v1/admin/timecards/"+t,e.prev=1,console.log("Fetching one timecard from api..."),e.next=5,fetch(r,{headers:p(n)});case 5:return c=e.sent,e.next=8,c.json();case 8:return a=e.sent,console.log("Api response:"),console.log(a),e.abrupt("return",a);case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(O.a)(h.a.mark((function e(t){var n,r,c,a,s,o,i,l,j,d,u,b;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.authorization,r=t.end,c=t.facilityId,a=t.page,s=void 0===a?0:a,o=t.limit,i=void 0===o?100:o,l=v(r),j=v(g(-14,r)),d=s*i,e.prev=4,console.log("Fetching from api..."),console.log(c),e.next=9,fetch("https://app.snapnurse.com/api/v1/admin/timecards?type=HOURLY".concat(c?"&facilityId="+c:"","&status[]=submitted&status[]=confirmed&status[]=preapproved&workDate[$gte]=").concat(j,"&workDate[$lte]=").concat(l,"&platformId=1&$limit=").concat(i,"&$skip=").concat(d,"&$sort[createdAt]=-1"),{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9",authorization:n,"if-none-match":'W/"87e67-gQagPz/QZeu/cqOYYc7FtOQM+Fc"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","sec-gpc":"1"},referrer:"https://app.snapnurse.com/admin/timecards?page=1&startDate=01/10/2021&endDate=01/22/2021&dateRangeType=workDate&type=HOURLY",referrerPolicy:"strict-origin-when-cross-origin",body:null,method:"GET",mode:"cors"});case 9:return u=e.sent,e.next=12,u.json();case 12:return b=e.sent,console.log("Api response:"),console.log(b),e.abrupt("return",b);case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(t,n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://app.snapnurse.com/api/v1/facilities/autocomplete?q=".concat(t,"&enableAll=no"),{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9",authorization:n,"if-none-match":'W/"577-j9ph8lbWP/pRd10MYiRA9tkI5NY"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","sec-gpc":"1"},referrer:"https://app.snapnurse.com/admin/timecards?startDate=02/24/2021&endDate=03/10/2021&dateRangeType=workDate&type=HOURLY&page=1",referrerPolicy:"strict-origin-when-cross-origin",body:null,method:"GET",mode:"cors"});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,console.log("Api response:"),console.log(c),e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return new Date((new Date).setDate(t.getDate()+e))},v=function(e){return e.toISOString().slice(0,10)},y=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n,r,c,a=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:"",e.prev=2,console.log("Logging in..."),e.next=6,fetch("https://app.snapnurse.com/api/v1/authentication",{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9","content-type":"application/json;charset=UTF-8","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","sec-gpc":"1"},referrer:"https://app.snapnurse.com/login",referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify({strategy:"local",login:t,password:n}),method:"POST",mode:"cors"});case 6:return r=e.sent,console.log("Api response:"),e.next=10,r.json();case 10:return c=e.sent,console.log(c),e.abrupt("return",c);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}(),S=Object(c.createContext)(null),k=function(e){var t=e.children,n=I();return Object(r.jsx)(S.Provider,{value:n,children:t})},w=function(){return Object(c.useContext)(S)},I=function(){var e=Object(c.useState)(localStorage.getItem("user")),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(localStorage.getItem("token")),s=Object(j.a)(a,2),o=s[0],i=s[1];return{user:n,token:o,signin:function(){var e=Object(O.a)(h.a.mark((function e(t,c){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Signing in from useProvideAuth..."),e.next=4,y(t,c);case 4:a=e.sent,console.log(a),a.user&&a.accessToken?(console.log("Success!"),r(a.user),localStorage.setItem("user",JSON.stringify(n)),i(a.accessToken),localStorage.setItem("token",a.accessToken)):(console.log("Login failure..."),console.log(a)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Unable to sign in..."),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),signout:function(){r(null),i(null),localStorage.removeItem("user"),localStorage.removeItem("token")}}},C=n(44),T=n.n(C),P=(n(123),n(88)),L=n.n(P),R=n(93),F=(n(126),n(127),function(e){return e.user&&e.user.firstName+" "+e.user.lastName}),N=function(e){return Number.parseFloat(e)||0},A=function(e){return N((N(e.amount)+N(e.stipendPaymentAmount)).toFixed(2))},D=function(e){return A(e)>=2e3},G=function(e){var t=e.startTime,n=e.endTime,c=e.lunchInMinutes,a=e.overtimeHours,s=e.doubletimeHours,o=e.weeklyHours;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Start: "}),t]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Stop: "}),n]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Lunch: "}),c]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Overtime hours: "}),a]}),Number.parseFloat(s)?Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Overtime hours: "}),s]}):null,Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Weekly hours: "}),o]})]})},H=function(e){var t=e.timecardPayRate;if(!t)return"";var n=t.description,r=t.payRate,c=t.overtimePayRate,a=t.doubletimePayRate;return"".concat(n,"\n").concat(r," / ").concat(a," / ").concat(c)};var U=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),o=Object(j.a)(s,2),i=o[0],b=o[1],h=Object(c.useState)(1),O=Object(j.a)(h,2),p=O[0],m=O[1],g=Object(c.useState)(!1),v=Object(j.a)(g,2),y=v[0],S=v[1],k=Object(c.useState)(!1),I=Object(j.a)(k,2),C=I[0],P=I[1],N=Object(c.useState)(new Date),U=Object(j.a)(N,2),V=U[0],M=U[1],E=Object(c.useState)(null),W=Object(j.a)(E,2),$=W[0],_=W[1],J=Object(c.useState)(null),Y=Object(j.a)(J,2),z=Y[0],B=Y[1],q=Object(c.useState)([]),Q=Object(j.a)(q,2),K=Q[0],Z=Q[1],X=Object(c.useState)(!1),ee=Object(j.a)(X,2),te=ee[0],ne=ee[1],re=Object(l.g)(),ce=w();Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("timecards"));e&&e.length&&(a(e),b(Number.parseInt(localStorage.getItem("total"))),_(new Date(localStorage.getItem("updated"))))}),[]);var ae=function(e){return e?Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.workDate}),Object(r.jsx)("td",{children:e.createdAt}),Object(r.jsx)("td",{children:F(e)}),Object(r.jsx)("td",{children:G(e)}),Object(r.jsx)("td",{children:H(e)}),Object(r.jsx)("td",{children:e.facility.name}),Object(r.jsx)("td",{children:e.type}),Object(r.jsx)("td",{children:e.status}),Object(r.jsx)("td",{children:e.timecardPhotoUrls?e.timecardPhotoUrls.length:""}),Object(r.jsxs)("td",{children:["$",A(e)]}),Object(r.jsxs)("td",{children:[Object(r.jsx)(d.a,{onClick:function(){return re.push("/timecards/view?id="+e.id)},children:"Actions"}),Object(r.jsx)("a",{href:"https://app.snapnurse.com/admin/timecards?type=HOURLY&dateRangeType=workDate&page=1&userId=".concat(e.userId),target:"_blank",rel:"noreferrer",onClick:function(){return a(n.filter((function(t){return t.userId!==e.userId})))},style:e.visited?{color:"red"}:null,children:"Open in Booker"})]})]},e.id):null},se=C?Object(r.jsx)(T.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}):Object(r.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:["Work Date","Created At","Worker","Details","Pay Rates","Facility","Type","Status","Images","Total","Inspect"].map((function(e){return Object(r.jsx)("th",{children:e})}))})}),Object(r.jsx)("tbody",{children:y?n.filter(D).map(ae):n.map(ae)})]}),oe=Math.ceil(i/100);return Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"End Date: "}),Object(r.jsx)(L.a,{selected:V,onChange:function(e){M(e)}}),Object(r.jsx)("span",{style:{marginRight:"1em"}}),Object(r.jsx)("span",{children:"Page: "}),Object(r.jsx)("input",{type:"number",value:p,min:"1",max:oe||1,onChange:function(e){return m(Number.parseInt(e.target.value))}}),Object(r.jsxs)("span",{style:{marginRight:"1em"},children:["of ",oe]}),Object(r.jsx)(d.a,{onClick:function(){P(!0),x({authorization:ce.token,end:V,page:p-1,facilityId:z&&z.id}).then((function(e){var t=new Date;e.data&&e.hasOwnProperty("total")?(localStorage.setItem("timecards",JSON.stringify(e.data)),localStorage.setItem("total",JSON.stringify(e.total)),localStorage.setItem("updated",t.toISOString()),a(e.data),b(e.total),_(t)):"Forbidden"===e.name?(console.log("Token expired. Signing out..."),ce.signout(),re.push("/login")):(console.log("Problem fetching timecards..."),console.log(e)),P(!1)}))},children:"Fetch Timecards"}),Object(r.jsxs)(d.a,{variant:"secondary",onClick:function(){return S(!y)},children:["Show ",y?"All Timecards":"Only Super Admin"]}),"Facility:",Object(r.jsx)(R.a,{id:"facilityTypeahead",isLoading:te,labelKey:"name",onChange:function(e){console.log("Facility selected"),console.log(e[0]),B(e[0])},onSearch:function(e){ne(!0),f(e,ce.token).then((function(e){Z(e),ne(!1)}))},options:K}),Object(r.jsxs)("section",{id:"timecardStats",children:[Object(r.jsxs)("span",{style:{paddingRight:"3em"},children:["Total Timecards: ",i]}),Object(r.jsxs)("span",{style:{paddingRight:"3em"},children:["Admin Approvals (this page):"," ",n?n.filter(D).length:0]}),$?Object(r.jsxs)("span",{children:["Last Updated: ",$.toLocaleString()]}):null]}),se]})},V=n(206),M=n(205),E=n(89),W=n(207),$=n(21),_=(n(198),function(e){return e.user?e.user.firstName+" "+e.user.lastName:""}),J=function(e){var t=e.timecardPayRate;if(!t)return"";var n=t.description,r=t.payRate,c=t.overtimePayRate,a=t.doubletimePayRate;return"".concat(n,"\n").concat(r," / ").concat(a," / ").concat(c)},Y=function(e){return Number.parseFloat(e)},z=function(e){return(Y(e.amount)-Y(e.overtimeAmount)-Y(e.doubletimeAmount))/Y(e.timecardPayRate.payRate)},B=function(e){return z(e)+Y(e.overtimeHours)+Y(e.doubletimeHours)},q=function(e){return Number.parseFloat(e.stipendPaymentAmount)+Number.parseFloat(e.total)},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=new Date(e),n=t.getHours()>=12?"pm":"am";return t.toDateString()+" @ "+t.getHours()%12+":"+t.getMinutes().toString().padStart(2,"0")+" "+n+" ("+t.getHours().toString().padStart(2,"0")+t.getMinutes().toString().padStart(2,"0")+")"},K=function(e){var t=e.tc;return Object(r.jsxs)($.a,{children:[Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formType",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Type"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.type})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formFacility",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Facility"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.facility&&t.facility.name})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formUnitNumber",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Unit Number"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.unitNumber||"-"})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formFacilityManager",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Facility Manager"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.facilityManager||"-"})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formPayRateDescription",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Pay Rate Description"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.timecardPayRate&&t.timecardPayRate.description||"-"})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formWorker",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Worker"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:_(t)})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formStartShift",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Start Shift"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:Q(t.startTime)})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formEndShift",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"End Shift"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:Q(t.endTime)})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formLunch",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Lunch"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:t.lunchInMinutes+" min"})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formRegularHours",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Regular Hours"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:z(t)})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formOvertimeHours",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Overtime Hours"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:Y(t.overtimeHours)})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formTotalHoursWorked",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Total Hours Worked"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:B(t)})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formRate",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Rate"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:J(t)})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formRegularPay",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Regular Pay"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"$"+t.amount})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formOvertimePay",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Overtime Pay"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"$"+t.overtimeAmount})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formNonTaxableAdjustment",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Non Taxable Adjustment"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{defaultValue:"Set non taxable adjustment for a worker"})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formAdjustment",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Adjustment"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"Set adjustment if needed"})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formMemo",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Memo"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"Additional notes can be here"})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formStipend",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Stipend(Pro-Rated)"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"$"+t.stipendPaymentAmount})})]}),Object(r.jsxs)($.a.Group,{as:M.a,controlId:"formTotal",children:[Object(r.jsx)($.a.Label,{column:!0,sm:"2",children:Object(r.jsx)("strong",{children:"Total"})}),Object(r.jsx)(E.a,{sm:"10",children:Object(r.jsx)($.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"$"+q(t)})})]})]})},Z=n(39),X=n(90),ee=function(e){var t=e.timecardPhotoUrls,n=Object(c.useState)(1),a=Object(j.a)(n,2),s=a[0],o=a[1],i=t.map((function(e,t){return Object(r.jsx)(Z.a.Item,{active:t+1===s,children:t+1},e.id)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)(X.a,{src:t&&t.length?t[s-1].url:null,alt:"Worker-uploaded timecard image.",fluid:!0}),Object(r.jsxs)(Z.a,{children:[Object(r.jsx)(Z.a.Prev,{onClick:function(){s+1<=t.length&&o(s+1)},disabled:1===s}),i,Object(r.jsx)(Z.a.Next,{onClick:function(){s-1>=1&&o(s-1)},disabled:s===t.length})]})]})},te=function(e){var t=Object(c.useState)(null),n=Object(j.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)(0),i=Object(j.a)(o,2),u=i[0],b=i[1],h=w(),O=new URLSearchParams(Object(l.h)().search);return Object(c.useEffect)((function(){var e=!0;if(console.log(u),b(u+1),u>1)return function(){return e=!1};if(h.token){var t=O.get("id");m(t,h.token).then((function(t){console.log("Fetched one timecard..."),console.log(e),console.log(JSON.stringify(Object.keys(t))),e&&t&&s(t)}))}return function(){return e=!1}}),[]),a?Object(r.jsx)(V.a,{fluid:!0,children:Object(r.jsxs)(M.a,{children:[Object(r.jsx)(E.a,{children:Object(r.jsx)(ee,{timecardPhotoUrls:a.timecardPhotoUrls})}),Object(r.jsx)(E.a,{children:Object(r.jsx)(K,{tc:a})}),Object(r.jsx)(E.a,{xs:1,children:Object(r.jsxs)(W.a,{vertical:!0,children:[Object(r.jsx)(d.a,{variant:"success",children:"Approve"}),Object(r.jsx)(d.a,{variant:"warning",children:"Reject"}),Object(r.jsx)(d.a,{variant:"primary",children:"Edit"}),Object(r.jsx)(d.a,{variant:"danger",children:"Remove"}),Object(r.jsx)(d.a,{variant:"secondary",children:"Cancel"})]})})]})}):null},ne=n(49),re=n(65),ce=Object(l.i)((function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(j.a)(s,2),i=o[0],u=o[1],b=Object(l.g)(),p=Object(l.h)(),m=w(),x=(p.state||{from:{pathname:"/"}}).from,f=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m.signin(n,i);case 3:b.replace(x);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"Login",children:[Object(r.jsxs)("p",{children:["You must log in to view the page at ",x.pathname]}),Object(r.jsxs)($.a,{onSubmit:f,children:[Object(r.jsxs)($.a.Group,{controlId:"email",children:[Object(r.jsx)($.a.Label,{children:"Email"}),Object(r.jsx)($.a.Control,{autoFocus:!0,type:"email",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(r.jsxs)($.a.Group,{controlId:"password",children:[Object(r.jsx)($.a.Label,{children:"Password"}),Object(r.jsx)($.a.Control,{type:"password",value:i,onChange:function(e){return u(e.target.value)}})]}),Object(r.jsx)(d.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0&&i.length>0),children:"Login"})]})]})})),ae=n(66),se=n(94),oe=function(e){var t=e.children,n=Object(se.a)(e,["children"]),c=w();return Object(r.jsx)(l.b,Object(ae.a)(Object(ae.a)({},n),{},{render:function(e){var n=e.location;return c.user?t:Object(r.jsx)(l.a,{to:{pathname:"/login",state:{from:n}}})}}))},ie=function(){var e=Object(l.g)(),t=w();return t.user?Object(r.jsxs)("p",{style:{color:"white"},children:["Welcome!"," ",Object(r.jsx)(d.a,{variant:"danger",onClick:function(){t.signout((function(){return e.push("/")}))},children:"Sign out"})]}):Object(r.jsx)("p",{style:{color:"white"},children:"You are not logged in."})},le=n(91),je=n(92),de=function(e){var t=e.text,n=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{navigator.clipboard.writeText(t)}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(d.a,{variant:"outline-secondary",size:"sm",onClick:function(){return n(t)},children:Object(r.jsx)(le.a,{icon:je.a})})})},ue=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{navigator.clipboard.writeText(t)}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n,r,c=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return r=e.sent,e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return(e.getMonth()+1).toString().padStart(2,"0")+"/"+e.getDate().toString().padStart(2,"0")+"/"+e.getFullYear()},Oe=function(){var e,t=new Date,n=new Date(t.getTime()-10368e5),r={startDate:he(n),endDate:he(t),type:"HOURLY",status:"submitted,confirmed,preapproved",dateRangeType:"workDate"};return e=r,Object.keys(e).map((function(t){return t+"="+e[t]})).join("&")},pe=function(e){var t=e.displayText;return Object(r.jsx)("a",{href:"https://www.snapnursebooker.com/admin/timecards?"+Oe(),target:"_blank",rel:"noreferrer",children:t})};var me=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),o=Object(j.a)(s,2),i=o[0],l=o[1],b=Object(c.useState)(!1),p=Object(j.a)(b,2),m=p[0],x=p[1],f=function(){a(""),l([]),localStorage.removeItem("output"),localStorage.removeItem("super_admin_list")};Object(c.useEffect)((function(){x(!0);var e=localStorage.getItem("output");try{var t=JSON.parse(localStorage.getItem("super_admin_list"));e&&a(e),t&&t.length&&l(t)}catch(n){console.log(n)}x(!1)}),[]);var g=m?Object(r.jsx)(T.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:9e3}):n?Object(r.jsxs)("div",{id:"outputDisplay",children:[Object(r.jsx)("div",{children:Object(r.jsxs)("em",{children:[n.split("\n").length-3," Total Timecards"]})}),Object(r.jsxs)("div",{className:"float-right",children:[Object(r.jsx)(d.a,{variant:"danger",onClick:f,children:"Reset"}),Object(r.jsx)(d.a,{variant:"info",onClick:function(){var e="Holiday Pay Adjustments"+(new Date).toISOString()+".csv";!function(e,t,n){var r=document.createElement("a"),c=new Blob([e],{type:n});r.href=URL.createObjectURL(c),r.download=t,r.click(),URL.revokeObjectURL(r.href)}(n,e,"text/csv")},children:"Download"})]}),Object(r.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Created At"}),Object(r.jsx)("th",{children:"Worker"}),Object(r.jsx)("th",{children:"Start Time"}),Object(r.jsx)("th",{children:"End Time"}),Object(r.jsx)("th",{children:"Total Hours"}),Object(r.jsx)("th",{children:"Overtime"}),Object(r.jsx)("th",{children:"Pay Rate"}),Object(r.jsx)("th",{children:"Memo"}),Object(r.jsx)("th",{children:"Adjustment"}),Object(r.jsx)("th",{children:"Total"})]})}),Object(r.jsx)("tbody",{children:n.split("\n").slice(1).map((function(e){var t=e.split(","),n=Object(j.a)(t,11),c=n[0],a=n[1],s=n[2],o=n[3],i=n[4],l=n[5],d=n[6],u=n[7],b=n[8],h=n[9],O=n[10],p=Number.parseFloat(O)>=2e3?{color:"red"}:{};return Object(r.jsx)("tr",{style:p,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("td",{children:c}),Object(r.jsx)("td",{children:a}),Object(r.jsxs)("td",{children:[s,Object(r.jsx)("div",{className:"float-right",children:Object(r.jsx)(de,{text:s})})]}),Object(r.jsx)("td",{children:o}),Object(r.jsx)("td",{children:i}),Object(r.jsx)("td",{children:l}),Object(r.jsx)("td",{children:d}),Object(r.jsxs)("td",{children:["$",u]}),Object(r.jsxs)("td",{children:[b," HOL",Object(r.jsx)("div",{className:"float-right",children:Object(r.jsx)(de,{text:b+" HOL"})})]}),Object(r.jsxs)("td",{children:["$",h,Object(r.jsx)("div",{className:"float-right",children:Object(r.jsx)(de,{text:Number.parseFloat(h).toFixed(2)})})]}),Object(r.jsxs)("td",{children:["$",O]})]})})}))})]})]}):null;return Object(r.jsxs)("div",{className:"App",children:["Follow ",Object(r.jsx)(pe,{displayText:"this link"}),' and click "Export CSV".',Object(r.jsx)($.a,{children:Object(r.jsx)($.a.Group,{children:Object(r.jsx)($.a.File,{id:"fileChooser",label:"Select the downloaded text file in your Downloads folder.",multiple:!1,accept:".csv,.txt,text/csv,text/plain",onChange:function(e){return function(e){f(),x(!0);var t=e.target.files[0],n=new FileReader;try{n.readAsText(t)}catch(r){x(!1),console.log(r)}n.onload=Object(O.a)(h.a.mark((function e(){var t,r,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("POSTING..."),t={date:"2021-01-01",csv:n.result},console.log(JSON.stringify(t)),e.next=6,be("https://lraulin.pythonanywhere.com/holiday",t);case 6:r=e.sent,c=r.csv,s=r.super_admin_list,a(c),localStorage.setItem("output",c),s.length&&(l(s),localStorage.setItem("super_admin_list",JSON.stringify(s))),x(!1);case 13:case"end":return e.stop()}}),e)}))),n.onerror=function(){x(!1),console.log(n.error)}}(e)}})})}),i.length?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h3",{children:["Admin Approval Needed For (",i.length,"):"]}),i.map((function(e){return Object(r.jsxs)("span",{onClick:function(){return function(e){ue(e),l(i.filter((function(t){return t!==e})))}(e)},children:[e,","]})}))]}):null,g]})},xe=function(){return Object(r.jsx)(k,{children:Object(r.jsxs)(i.a,{basename:"/my-booker",children:[Object(r.jsxs)(re.a,{bg:"dark",variant:"dark",children:[Object(r.jsx)(re.a.Brand,{href:"",children:"Navbar"}),Object(r.jsxs)(ne.a,{className:"mr-auto",children:[Object(r.jsx)(ne.a.Link,{as:i.b,to:"/timecards",children:"Timecards"}),Object(r.jsx)(ne.a.Link,{as:i.b,to:"/holiday-pay-calculator",children:"Holiday Pay Calculator"}),Object(r.jsx)("a",{className:"nav-link",href:"https://chat.google.com/u/1/room/AAAA1tx9m64",target:"_blank",rel:"noreferrer",children:"Team Chat"}),Object(r.jsx)("a",{className:"nav-link",href:"https://snapnurse.paymint.today/worker/timecards",target:"_blank",rel:"noreferrer",children:"Internal Payroll"}),Object(r.jsx)("a",{className:"nav-link",href:"https://mail.google.com/mail/u/1/#inbox",target:"_blank",rel:"noreferrer",children:"Gmail"})]}),Object(r.jsx)(ie,{})]}),Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{path:"/login",component:ce}),Object(r.jsx)(oe,{path:"/timecards",exact:!0,children:Object(r.jsx)(U,{})}),Object(r.jsx)(oe,{path:"/timecards/view",children:Object(r.jsx)(te,{})}),Object(r.jsx)(l.b,{path:"/holiday-pay-calculator",children:Object(r.jsx)(me,{})})]})]})})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,208)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(xe,{})}),document.getElementById("root")),fe()}},[[203,1,2]]]);
//# sourceMappingURL=main.80fd4bb8.chunk.js.map