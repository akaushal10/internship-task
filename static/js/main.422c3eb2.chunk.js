(this.webpackJsonpinternship=this.webpackJsonpinternship||[]).push([[0],{139:function(e,t,r){},141:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(13),c=r.n(s),o=r(99),i=r(24),l=r(34),u=r(100),d=r(15),j="REQUEST_LOGIN",m="LOGIN_SUCCESS",b="LOGIN_FAILURE",p="IS_VERIFIED",h="CHECK_VERIFIED",x="REQUEST_CREATE_PROFILE",O="SUCCESS_CREATE_PROFILE",f="FAILURE_CREATE_PROFILE",g={loading:!1,errorMessage:"",email:"",status:0,errorStatus:!1,auth:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),{},{loading:!0,errorStatus:!1,errorMessage:""});case b:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,errorStatus:!0,errorMessage:t.payload});case m:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,errorStatus:!1,errorMessage:""},t.payload);case h:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case p:return Object(d.a)(Object(d.a)({},e),{},{loading:!1},t.payload);case x:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case O:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,errorStatus:!1,errorMessage:""},t.payload);case f:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,email:"",errorStatus:!0,errorMessage:t.payload});default:return e}},v=Object(l.c)({login:w}),y=r(21),S=r.n(y),k=r(25),I=function(e){return{type:m,payload:e}},C=function(e){return{type:b,payload:e}},E=function(e){return{type:p,payload:e}},N=function(e){return{type:O,payload:e}},P=function(e){return{type:f,payload:e}},R=r(64),L=r(65),F=r.n(L),A="https://user34235.herokuapp.com",T=function(){var e=Object(R.a)(S.a.mark((function e(t){var r,n,a,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,n=t.password,e.prev=1,e.next=4,F.a.post("".concat(A,"/api/authLogin"),{username:r,password:n});case 4:if(a=e.sent,!(s=a.data).email){e.next=13;break}return localStorage.setItem("token",s.token),localStorage.setItem("email",s.email),localStorage.setItem("auth",s.id),e.abrupt("return",{email:s.email,status:s.status,expiry:s.expiry,auth:s.id,name:s.name});case 13:throw new Error(s.message);case 14:e.next=19;break;case 16:throw e.prev=16,e.t0=e.catch(1),e.t0;case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(R.a)(S.a.mark((function e(t){var r,n,a,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.token,n=t.email,e.prev=1,e.next=4,F.a.post("".concat(A,"/api/isVerify"),{token:r,email:n});case 4:if(a=e.sent,!(s=a.data).email){e.next=10;break}return e.abrupt("return",s);case 10:throw new Error(s.message);case 11:e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(1),e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(R.a)(S.a.mark((function e(t){var r,n,a,s,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,n=t.username,a=t.password,e.prev=1,e.next=4,F.a.post("".concat(A,"/api/user"),{email:r,username:n,password:a});case 4:if(s=e.sent,!(c=s.data).error){e.next=10;break}throw new Error(c.error);case 10:return localStorage.setItem("token",c.token),localStorage.setItem("email",c.email),e.abrupt("return",c);case 13:e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(1),e.t0;case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),D=S.a.mark(q),U=S.a.mark(z),W=S.a.mark(V),B=S.a.mark(G);function q(e){var t;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(k.b)(T,e.payload);case 3:return t=r.sent,r.next=6,Object(k.c)(I(t));case 6:r.next=13;break;case 8:return r.prev=8,r.t0=r.catch(0),console.log(r.t0),r.next=13,Object(k.c)(C(r.t0.message));case 13:case"end":return r.stop()}}),D,null,[[0,8]])}function z(e){var t;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(k.b)(_,e.payload);case 3:return t=r.sent,r.next=6,Object(k.c)(E(t));case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(k.c)(E(""));case 12:case"end":return r.stop()}}),U,null,[[0,8]])}function V(e){var t;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(k.b)(M,e.payload);case 3:return t=r.sent,r.next=6,Object(k.c)(N(t));case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(k.c)(P(r.t0.message));case 12:case"end":return r.stop()}}),W,null,[[0,8]])}function G(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)(j,q);case 2:return e.next=4,Object(k.d)(h,z);case 4:return e.next=6,Object(k.d)(x,V);case 6:case"end":return e.stop()}}),B)}var H=S.a.mark(Q);function Q(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([G()]);case 2:case"end":return e.stop()}}),H)}var $=Object(u.a)(),J=Object(l.e)(v,Object(l.a)($));J.subscribe((function(){return console.log("Updated State : ",J.getState())}));$.run(Q);var K=J,Z=r(33),X=r(191),Y=r(177),ee=r(2),te=function(e){var t=e.loading;return Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsx)(X.a,{style:{zIndex:"100"},open:t,children:Object(ee.jsx)(Y.a,{color:"inherit"})})})},re=r(178),ne=r(142),ae=r(179),se=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.login}));Object(n.useEffect)((function(){e({type:"REQUEST_USER_DATA"})}),[]);return Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsx)(re.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{marginTop:"100px"},spacing:4,children:Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(re.a,{item:!0,children:Object(ee.jsxs)(ne.a,{variant:"h5",children:["Welcome ",t.name]})}),Object(ee.jsx)(re.a,{item:!0,children:Object(ee.jsx)(ae.a,{variant:"contained",color:"primary",onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("email"),window.location.reload()},children:"Logout"})})]})})})},ce=function(){return Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsx)(se,{})})},oe=r(188),ie=r(185),le=r(182),ue=r(190),de=r(186),je=r(187),me=r(96),be=r.n(me),pe=r(189),he=r(52),xe={username:"",password:""},Oe=function(e){var t={};return e.username?e.username.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)||(t.username="Email is invalid !"):t.username="Required",e.password||(t.password="Required"),t},fe=r(180),ge=Object(fe.a)((function(e){return{roundedCorner:{borderRadius:"5px"},lockIcon:{fontSize:"50px"},center:{textAlign:"center !important"}}}));function we(e){return Object(ee.jsx)(pe.a,Object(d.a)({elevation:6,variant:"filled"},e))}var ve=function(e){var t=e.openLogin,r=e.setOpenLogin,a=ge(),s=Object(i.c)((function(e){return e.login})),c=(s.loading,s.errorMessage),o=s.errorStatus,l=Object(i.b)(),u=Object(n.useState)(o),m=Object(Z.a)(u,2),b=m[0],p=m[1],h=Object(n.useState)(!1),x=Object(Z.a)(h,2),O=x[0],f=x[1],g=function(e,t){"clickaway"!==t&&p(!1)},w=function(){f(!O)},v=function(e){e.preventDefault()};return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(re.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:"bg-light",id:"login-section",children:Object(ee.jsxs)(re.a,{container:!0,item:!0,id:"login-inner-section",xs:11,md:10,className:a.roundedCorner,direction:"row",justify:"center",alignItems:"center",children:[Object(ee.jsxs)(re.a,{item:!0,xs:12,md:4,className:"text-center p-3",children:[Object(ee.jsx)(be.a,{className:a.lockIcon}),Object(ee.jsx)("p",{style:{width:"50%"},className:"mx-auto fw-bold fs-5",children:"Enter into Website"})]}),Object(ee.jsx)(re.a,{container:!0,direction:"row",justify:"center",alignItems:"center",item:!0,xs:12,md:8,children:Object(ee.jsx)(he.b,{initialValues:Object(d.a)({},xe),validate:Oe,onSubmit:function(e){var t;l((t={username:e.username,password:e.password},{type:j,payload:t})),p(o)},children:function(e){return Object(ee.jsx)(he.a,{children:Object(ee.jsxs)(re.a,{container:!0,item:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(ee.jsxs)(re.a,{item:!0,xs:12,className:"mt-5 mb-2 fs-3 text-center fw-bolder",children:["Log in"," "]}),Object(ee.jsx)(re.a,{item:!0,xs:9,className:"my-3",children:Object(ee.jsx)(oe.a,{fullWidth:!0,id:"login-username",name:"username",label:"Email",value:e.values.username,onChange:e.handleChange,error:e.touched.username&&Boolean(e.errors.username),helperText:e.touched.username&&e.errors.username})}),Object(ee.jsx)(re.a,{item:!0,xs:9,className:"my-3",children:Object(ee.jsx)(oe.a,{fullWidth:!0,id:"login-password",name:"password",label:"Password",type:O?"text":"password",value:e.values.password,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password,InputProps:{endAdornment:Object(ee.jsx)(ie.a,{position:"end",children:Object(ee.jsx)(le.a,{"aria-label":"toggle password visibility",onClick:w,onMouseDown:v,children:O?Object(ee.jsx)(de.a,{}):Object(ee.jsx)(je.a,{})})})}})}),Object(ee.jsx)(re.a,{container:!0,direction:"row",justify:"flex-end",item:!0,xs:9,children:Object(ee.jsx)(re.a,{component:ae.a,className:"fw-bold text-decoration-none",item:!0,children:"Forgot Password ?"})}),Object(ee.jsxs)(re.a,{container:!0,item:!0,direction:"row",justify:"space-around",xs:12,sm:9,className:"my-5 text-center",children:[Object(ee.jsx)(re.a,{component:ae.a,type:"submit",style:{borderRadius:"none"},item:!0,xs:4,md:3,className:"login-submit-button fw-bold fs-6",children:"Login"}),Object(ee.jsx)(re.a,{item:!0,xs:4,sm:3,component:ae.a,style:{borderRadius:"none"},className:"login-register-button fw-bold fs-6",onClick:function(){r(!t)},children:"Sign UP"})]})]})})}})})]})}),Object(ee.jsx)(ue.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:b,autoHideDuration:4e3,onClose:g,children:Object(ee.jsx)(we,{onClose:g,severity:"error",children:c})})]})},ye=r(192),Se=r(97),ke=r.n(Se),Ie={email:"",username:"",password:"",confirmPassword:""},Ce=function(e){var t={},r=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!_@#\$%\^&\*])(?=.{8,})/;return e.email?e.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)||(t.email="Email is invalid !"):t.email="Required",e.username?e.username.length<3?t.username="Name should be less than 3 latters":e.username.length>50&&(t.username="Name should be more than 50 latters"):t.username="Required",e.password?e.password.match(r)||(t.password="Password is invalid !"):t.password="Required",e.confirmPassword?e.confirmPassword.match(r)?e.password!==e.confirmPassword&&(t.confirmPassword="Password doesn't match !"):t.confirmPassword="Confirm Password is invalid !":t.confirmPassword="Required",t},Ee=Object(fe.a)((function(e){return{roundedCorner:{borderRadius:"5px"},personIcon:{fontSize:"50px"},center:{textAlign:"center !important"}}}));function Ne(e){return Object(ee.jsx)(pe.a,Object(d.a)({elevation:6,variant:"filled"},e))}var Pe=function(e){var t=e.openLogin,r=e.setOpenLogin,a=Object(i.c)((function(e){return e.login})),s=(a.loading,a.errorMessage),c=a.errorStatus,o=Object(i.b)(),l=Object(n.useState)(c),u=Object(Z.a)(l,2),j=u[0],m=u[1],b=Object(n.useState)(!1),p=Object(Z.a)(b,2),h=p[0],O=p[1],f=Ee(),g=function(e,t){"clickaway"!==t&&m(!1)},w=function(){O(!h)},v=function(e){e.preventDefault()};return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(re.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:"bg-light p-4",id:"login-section",children:Object(ee.jsxs)(re.a,{container:!0,item:!0,id:"login-inner-section",md:10,className:f.roundedCorner,direction:"row",justify:"center",alignItems:"center",children:[Object(ee.jsxs)(re.a,{item:!0,xs:8,md:4,className:"".concat(f.center," p-3"),children:[Object(ee.jsx)(ke.a,{className:f.personIcon}),Object(ee.jsx)("p",{style:{width:"60%"},className:"mx-auto fw-bold fs-5",children:"Make your profile"})]}),Object(ee.jsxs)(re.a,{container:!0,direction:"row",justify:"center",alignItems:"center",item:!0,md:8,children:[Object(ee.jsxs)(re.a,{item:!0,xs:9,className:"mt-5 mb-2 fs-3 text-center fw-bolder",children:["Create Profile"," "]}),Object(ee.jsx)(he.b,{initialValues:Object(d.a)({},Ie),validate:Ce,onSubmit:function(e){var t;o((t={email:e.email,password:e.password,username:e.username},{type:x,payload:t})),m(c)},children:function(e){return Object(ee.jsx)(he.a,{children:Object(ee.jsxs)(re.a,{item:!0,container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(ee.jsx)(re.a,{item:!0,xs:9,className:"my-2",children:Object(ee.jsx)(oe.a,{fullWidth:!0,id:"register-email",name:"email",label:"Email",value:e.values.email,onChange:e.handleChange,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email})}),Object(ee.jsx)(re.a,{item:!0,xs:9,className:"my-2",children:Object(ee.jsx)(oe.a,{fullWidth:!0,id:"register-name",name:"username",label:"Name",value:e.values.username,onChange:e.handleChange,error:e.touched.username&&Boolean(e.errors.username),helperText:e.touched.username&&e.errors.username})}),Object(ee.jsx)(re.a,{item:!0,xs:9,className:"my-2",children:Object(ee.jsx)(ye.a,{title:"Password should be min 8 digit long alphanumric,with a mixture of uppercase,lowercase,digit and special characters.",children:Object(ee.jsx)(oe.a,{fullWidth:!0,id:"login-password",name:"password",label:"Password",type:h?"text":"password",value:e.values.password,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password,InputProps:{endAdornment:Object(ee.jsx)(ie.a,{position:"end",children:Object(ee.jsx)(le.a,{"aria-label":"toggle password visibility",onClick:w,onMouseDown:v,children:h?Object(ee.jsx)(de.a,{}):Object(ee.jsx)(je.a,{})})})}})})}),Object(ee.jsx)(re.a,{item:!0,xs:9,className:"my-2",children:Object(ee.jsx)(ye.a,{title:"Password should be min 8 digit long alphanumric,with a mixture of uppercase,lowercase,digit and special characters.",children:Object(ee.jsx)(oe.a,{fullWidth:!0,id:"login-password",name:"confirmPassword",label:"Confirm Password",type:h?"text":"password",value:e.values.confirmPassword,onChange:e.handleChange,error:e.touched.confirmPassword&&Boolean(e.errors.confirmPassword),helperText:e.touched.confirmPassword&&e.errors.confirmPassword,InputProps:{endAdornment:Object(ee.jsx)(ie.a,{position:"end",children:Object(ee.jsx)(le.a,{"aria-label":"toggle password visibility",onClick:w,onMouseDown:v,children:h?Object(ee.jsx)(de.a,{}):Object(ee.jsx)(je.a,{})})})}})})}),Object(ee.jsx)(re.a,{container:!0,direction:"row",justify:"flex-end",item:!0,xs:9,children:Object(ee.jsx)(re.a,{component:ae.a,className:"fw-bold text-decoration-none",item:!0,onClick:function(){return r(!t)},children:"Already have an Account"})}),Object(ee.jsx)(re.a,{item:!0,xs:9,className:"my-5 text-center",children:Object(ee.jsx)(ae.a,{type:"submit",style:{borderRadius:"none"},className:"login-submit-button fw-bold py-2 fs-6",children:"Create Profile"})})]})})}})]})]})}),Object(ee.jsx)(ue.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:j,autoHideDuration:4e3,onClose:g,children:Object(ee.jsx)(Ne,{onClose:g,severity:"error",children:s})})]})},Re=function(){var e=Object(n.useState)(!0),t=Object(Z.a)(e,2),r=t[0],a=t[1];return Object(ee.jsx)(ee.Fragment,{children:r?Object(ee.jsx)(ve,{openLogin:r,setOpenLogin:a}):Object(ee.jsx)(Pe,{openLogin:r,setOpenLogin:a})})},Le=function(){var e=Object(i.c)((function(e){return e.login})).email;return Object(ee.jsx)(ee.Fragment,{children:e?Object(ee.jsx)(ce,{}):Object(ee.jsx)(Re,{})})},Fe=function(){var e=Object(i.c)((function(e){return e.login})).loading,t=Object(i.c)((function(e){return e.login})).email,r=Object(n.useState)(!1),a=Object(Z.a)(r,2),s=(a[0],a[1]),c=Object(i.b)(),o=function(){return!!localStorage.getItem("token")&&(c((e={token:localStorage.getItem("token"),email:localStorage.getItem("email")},{type:h,payload:e})),!!t);var e};return Object(n.useEffect)((function(){s(o())}),[]),Object(ee.jsx)(ee.Fragment,{children:e?Object(ee.jsx)(te,{loading:e}):Object(ee.jsx)(Le,{})})};r(139);var Ae=function(){return Object(ee.jsx)(i.a,{store:K,children:Object(ee.jsx)(o.a,{children:Object(ee.jsx)(Fe,{})})})};c.a.render(Object(ee.jsx)(a.a.StrictMode,{children:Object(ee.jsx)(Ae,{})}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.422c3eb2.chunk.js.map