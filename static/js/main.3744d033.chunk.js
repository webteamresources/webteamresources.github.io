(this.webpackJsonpsocietyapp=this.webpackJsonpsocietyapp||[]).push([[0],{73:function(e,a,t){e.exports=t(86)},78:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),m=(t(78),t(28));var i=function(){return r.a.createElement("div",null,r.a.createElement(m.b,{exact:!0,activeClassName:"active",to:"/"},r.a.createElement("h1",null,"Society App")))},c=t(123),s=t(119),u=t(116),p=t(120),d=t(118),g=t(122),E=t(113),h=t(117),v=t(121),b=t(115),f=t(42),y=t.n(f),w=t(52),k=t(114);var N=function(){return r.a.createElement(w.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(E.a,{color:"inherit",href:"#"},"Society App")," ",(new Date).getFullYear(),".")};var x=Object(k.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function C(){var e=x();return r.a.createElement(b.a,{container:!0,component:"main",className:e.root},r.a.createElement(u.a,null),r.a.createElement(b.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(b.a,{item:!0,xs:12,sm:8,md:5,component:h.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(c.a,{className:e.avatar},r.a.createElement(y.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(d.a,{control:r.a.createElement(g.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,href:"/Home"},"Sign In"),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(E.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(b.a,{item:!0},r.a.createElement(m.b,{className:"nav-link",exact:!0,activeClassName:"active",to:"/SignUp"},"Don't have an account? Sign Up"))),r.a.createElement(v.a,{mt:5},r.a.createElement(N,null))))))}var S=t(14),W=Object(S.a)(),q=Object(k.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function I(){var e=q();return r.a.createElement(b.a,{container:!0,component:"main",className:e.root},r.a.createElement(u.a,null),r.a.createElement(b.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(b.a,{item:!0,xs:12,sm:8,md:5,component:h.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(c.a,{className:e.avatar},r.a.createElement(y.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h5"},"Register"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),W.push("/Home")}},r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Full Name",name:"name",autoComplete:"name",autoFocus:!0}),r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"}),r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"mobile",label:"Mobile Number",name:"mobile",autoComplete:"mobile"}),r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,href:"/Home"},"Sign Up"),r.a.createElement(v.a,{mt:5},r.a.createElement(N,null))))))}var D=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome"))},F=t(10);var A=function(){return r.a.createElement(m.a,{history:W},r.a.createElement(i,null),r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/",exact:!0,component:C}),r.a.createElement(F.a,{path:"/Home",component:D}),r.a.createElement(F.a,{path:"/signup",component:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.3744d033.chunk.js.map