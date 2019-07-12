(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,n,t){e.exports=t(56)},56:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),l=t(22),i=t.n(l),c=t(6),o=t(13),u=t(27),d=t(14),s=t(16),m={HOME:{LABEL:"Home",PATH:"/"},MOVIE:{LABEL:"Movies",PATH:"/movies"},DASHBOARD:{LABEL:"Dashboard",PATH:"/dashboard"},LOGIN:{LABEL:"Login",PATH:"/login"}},f=t(24),h=t(1),b=t(2),E={black:"#000000",white:"#ffffff",transparent:"transparent",light:{98:"#fafafa",96:"#f5f5f5",93:"#eee",91:"#e8e8e8",87:"#ddd",85:"#d8d8d8",80:"#ccc",70:"#b3b3b3",67:"#aaa",62:"#9e9e9e",60:"#999",58:"#959595",48:"#7a7a7a",40:"#666",38:"#616161",30:"#4d4d4d",20:"#333",18:"#2d2d2d",13:"#212121"},red:{1:"#f72222"},primary:"#764ba2",primaryGradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};var p=function(e){if(function(e){if(!Number.isInteger(e))throw new Error("Argument must be an INTEGER NUMBER");return e}(e))return"".concat(e/16*1,"rem")};function g(){var e=Object(h.a)(["\n  ","\n  \n  color: ",";\n\n  background: ",";\n  \n  \n  border-radius: ",";\n\n  border-bottom-right-radius: ",";\n  \n  border-top-right-radius: ",";\n\n  border-top-left-radius: ",";\n\n  border-bottom-left-radius: ",";\n  \n  height: ",";\n\n  padding: ",";\n\n  a {\n    color: ",";\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(h.a)(["\n  align-items: center;\n  background-color: transparent;\n  border-color: transparent;\n  border-radius: ",";\n  border-style: solid;\n  border-width: ",";\n  color: ",";\n  cursor: pointer;\n  font-size: ",";\n  font-weight: bold;\n  display: inline-flex;\n  justify-content: center;\n  padding: "," ",";\n  position: relative;\n  transition: all .5s;\n"]);return v=function(){return e},e}var O=Object(b.b)(v(),p(3),p(1),E.black,p(14),p(8),p(16)),j=b.c.button(g(),O,function(e){var n=e.solid,t=e.outlined,r=e.text,a=e.anchor;return n?E.white:r?E.black:t||a?E.primaryGradient:E.black},function(e){var n=e.solid;e.text,e.anchor,e.outlined;return n?E.primaryGradient:E.transparent},function(e){return e.rounded?"50%":p(4)},function(e){var n=e.rounded,t=e.left;return n&&t?"0":p(4)},function(e,n){return e&&n?"0":p(4)},function(e){var n=e.rounded,t=e.right;return n&&t?"0":p(4)},function(e){var n=e.rounded,t=e.right;return n&&t?"0":p(4)},function(e){var n=e.rounded,t=e.sm,r=e.md,a=e.lg;return n&&t?p(30):n&&r?p(40):n&&a?p(50):"auto"},function(e){return e.rounded?p(8):p(8)+" "+p(16)},function(e){var n=e.text,t=e.anchor;return n?E.black:t?E.primary:E.black}),y=function(e){var n=e.type,t=e.handleClick,r=e.classes,l=e.iconName,i=e.children,c=e.disabled,o=e.title,u=Object(f.a)(e,["type","handleClick","classes","iconName","children","disabled","title"]),d=n&&""!==n?n:"submit";return a.a.createElement(j,Object.assign({type:d,onClick:t,className:"button ".concat(r||""),disabled:c,title:o||""},u),l?a.a.createElement("i",{className:l}):null,i)};function w(){var e=Object(h.a)(["\n    color: ",";\n    font-size: 24px;\n"]);return w=function(){return e},e}var x=b.c.h3(w(),E.light[33]),S=function(e){var n=e.message;return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Oops..."),a.a.createElement(x,null,n))};function R(){var e=Object(h.a)(["\n    align-items: center;\n    border: "," solid ",";\n    border-radius: ",";\n    box-shadow: none;\n    display: inline-flex;\n    font-size: ",";\n    height: ",";\n    justify-content: flex-start;\n    line-height: $control-line-height;\n    padding: ",";\n    transition: all .4s;\n    width: 100%;\n"]);return R=function(){return e},e}var k=Object(b.b)(R(),p(1),E.light[80],p(2),p(16),p(32),p(16));function A(){var e=Object(h.a)(["\n  color: red;\n  display: ",";\n  font-size: ",";\n  padding: "," "," 0 ",";\n  transition: all 0.5s;\n"]);return A=function(){return e},e}function I(){var e=Object(h.a)(["\n  ","\n\n  border-left-color: ",";\n  border-left-width: ",";\n\n  &:hover,\n  &:focus {\n    border-color: ",";\n    border-left-width: ",";\n  }\n"]);return I=function(){return e},e}function L(){var e=Object(h.a)(["\n    margin-bottom: ",";\n"]);return L=function(){return e},e}var _=b.c.div(L(),p(16)),N=b.c.input(I(),k,function(e){var n=e.errors,t=e.name;return n&&n[t]?"red":E.light[87]},function(e){var n=e.errors,t=e.name;return n&&n[t]?p(5):p(1)},function(e){var n=e.errors,t=e.name;return n&&n[t]?"red":E.light[87]},function(e){var n=e.errors,t=e.name;return n&&n[t]?p(5):p(1)}),C=b.c.span(A(),function(e){var n=e.errors,t=e.name;return n[t]&&n[t].message?"flex":"none"},p(14),p(4),p(8),p(8)),P=function(e){var n=e.classes,t=e.placeholder,r=e.id,l=e.name,i=e.disabled,c=e.type,o=e.register,u=e.errors,d=e.handleKeyUp;return a.a.createElement(_,null,a.a.createElement(N,{type:c||"text",id:r&&r,name:l,ref:o,errors:u,className:"input ".concat(n||""),placeholder:t,disabled:i,onKeyUp:d}),u[l]?a.a.createElement(C,{errors:u,name:l},u[l]&&u[l].message):null)};function D(){var e=Object(h.a)(["\n    height: 100%;\n    padding: ",";\n    @media(min-width: ",") {\n        padding: 0;\n        width: 80%;\n        margin: 0 auto;\n    }\n"]);return D=function(){return e},e}var T=b.c.div(D(),p(16),p(768)),H=function(e){var n=e.children;return a.a.createElement(T,null,n)};function G(){var e=Object(h.a)(["\n    ","\n\n    border-left-color: ",";\n  border-left-width: ",";\n\n  &:hover,\n  &:focus {\n    border-color: ",";\n    border-left-width: ",";\n  }\n"]);return G=function(){return e},e}var M=b.c.input(G(),k,function(e){var n=e.errors,t=e.name;return n&&n[t]?"red":E.light[80]},function(e){var n=e.errors,t=e.name;return n&&n[t]?p(5):p(1)},function(e){var n=e.errors,t=e.name;return n&&n[t]?"red":E.light[87]},function(e){var n=e.errors,t=e.name;return n&&n[t]?p(5):p(1)}),V=function(e){var n=e.classes,t=e.placeholder,r=e.id,l=e.name,i=e.value,c=e.disabled,o=e.type,u=e.handleKeyUp,d=e.handleChange,s=e.submit;return a.a.createElement(M,{type:o,id:r,name:l,value:i,className:"input ".concat(n||""),placeholder:t,disabled:c,onKeyUp:u,onChange:d,onSubmit:s})};function U(){var e=Object(h.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return U=function(){return e},e}var z=Object(b.d)(U());function B(){var e=Object(h.a)(["\n    display: flex;\n    height: 100%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n"]);return B=function(){return e},e}function F(){var e=Object(h.a)(["\n  display: inline-block;\n  width: ",";\n  height: ",';\n\n    &:after {\n    content: " ";\n    display: block;\n    width: ',";\n    height: ",";\n    margin: ",";\n    border-radius: 50%;\n    border: "," solid ",";\n    border-color: "," transparent "," transparent;\n    animation: "," 1.2s linear infinite;\n    }\n"]);return F=function(){return e},e}var W=24,K=32,X=46,q=b.c.div(F(),p(64),p(64),function(e){var n=e.small,t=e.medium,r=e.big;return p(n?W:t?K:r?X:46)},function(e){var n=e.small,t=e.medium,r=e.big;return p(n?W:t?K:r?X:46)},p(1),p(5),E.primary,E.primary,E.primary,z),J=b.c.div(B()),Y=function(e){return a.a.createElement(J,null,a.a.createElement(q,e))};function $(){var e=Object(h.a)(["\n    font-family: 'Kanit';\n    font-size: ",";\n    font-weight: bold;\n\n    h1 {\n        margin: 0;\n    }\n\n    a {\n        color: ",";\n        text-decoration: none;\n    }\n"]);return $=function(){return e},e}function Q(){var e=Object(h.a)(["\n    align-items: center;\n    display: flex;\n    justify-content: flex-end;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n\n    li {\n        a {\n            color: ",";\n            font-size: ",";\n            font-weight: 200;\n            outline: none;\n            padding: "," ",";\n            position: relative;\n\n            &:after {\n                background: white;\n                bottom: ",";\n                content: '';\n                position: absolute;\n                height: ",";\n                left: 0;\n                transition: width .4s;\n                width: 0;\n\n            }\n\n            &:hover, &:focus {\n                \n                &:after {\n                    width: 95%;\n                }\n            }\n        }\n    }\n"]);return Q=function(){return e},e}function Z(){var e=Object(h.a)(["\n    background: ",";\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    padding: ",";\n\n    @media(min-width: 768px) {\n        justify-content: space-between;\n        flex-direction: row;\n    }\n"]);return Z=function(){return e},e}var ee=b.c.nav(Z(),E.primaryGradient,p(32)),ne=b.c.ul(Q(),E.white,p(16),p(8),p(10),p(-5),p(2)),te=b.c.div($(),p(24),E.white),re=function(){return a.a.createElement(ee,null,a.a.createElement(te,null,a.a.createElement(d.b,{to:m.HOME.PATH},a.a.createElement("h1",null,"MovieFlix"))),a.a.createElement(ne,null,Object.keys(m).map(function(e){return a.a.createElement("li",{key:m[e].PATH},a.a.createElement(d.b,{to:m[e].PATH},m[e].LABEL))})))},ae=t(19),le=t(39);function ie(){var e=Object(h.a)(["\n    align-items: center;\n    display: flex;\n    border-radius: ",";\n    background: ",";\n    height: auto;\n    justify-content: center;\n    min-height: ",";\n    padding: "," ",";\n    top: 50%;\n    left: 50%;\n    position:fixed;\n    transform: translate(-50%,-50%);\n    width: 80%;\n\n"]);return ie=function(){return e},e}function ce(){var e=Object(h.a)(["\n    background: rgba(0, 0, 0, 0.1);\n    display: ",";\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width:100%;\n"]);return ce=function(){return e},e}function oe(){var e=Object(h.a)(["\n    color: ",";\n    border: "," solid ",";\n    border-radius: ",";\n    cursor: pointer;\n    font-size: ",";\n    position: absolute;\n    top: 0;\n    right: ",";\n"]);return oe=function(){return e},e}var ue=Object(b.c)(ae.a)(oe(),E.white,p(1),E.primary,p(3),p(40),p(-50)),de=b.c.div(ce(),function(e){return e.show?"block":"none"}),se=b.c.div(ie(),p(3),E.white,p(490),p(32),p(16)),me=function(e){var n=e.handleClose,t=e.children;return a.a.createElement(de,e,a.a.createElement(se,{className:"modal-main"},a.a.createElement(ue,{onClick:n,icon:le.a}),t))},fe=function(e){var n=e.component,t=Object(f.a)(e,["component"]),r=Object(c.c)(function(e){return e}).user.isLogged;return a.a.createElement(s.b,Object.assign({},t,{render:function(e){return r?a.a.createElement(n,e):a.a.createElement(s.a,{to:{pathname:m.LOGIN.PATH,state:{from:e.location}}})}}))},he=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Home"),a.a.createElement("p",null,"Wecome to the application main page"))},be=t(11),Ee="SEARCH_MOVIE_PENDING",pe="SEARCH_MOVIE_SUCCESS",ge="SEARCH_MOVIE_ERROR",ve="MOVIE_DETAILS_PENDING",Oe="MOVIE_DETAILS_SUCCESS",je="MOVIE_DETAILS_ERROR",ye="LOGIN_USER_PENDING",we="LOGIN_USER_SUCCESS",xe="LOGIN_USER_ERROR";var Se=function(e){return function(n){n({type:Ee});fetch("http://www.omdbapi.com/?apikey=1244f9a6&page=1&s="+e).then(function(e){return e.json()}).then(function(e){if("False"===e.Response)throw e.Error;n({type:pe,movie:e})}).catch(function(e){n(function(e){return{type:ge,error:e}}(e))})}};var Re=function(e){return function(n){n({type:ve});fetch("http://www.omdbapi.com/?apikey=1244f9a6&page=1&i="+e).then(function(e){return e.json()}).then(function(e){if("False"===e.Response)throw e.Error;n({type:Oe,details:e})}).catch(function(e){n(function(e){return{type:je,error:e}}(e))})}};var ke=function(e){return function(n){n({type:we,user:e})}},Ae=function(){var e=Object(c.b)();return{searchMovieAction:Object(r.useCallback)(function(n){return e(Se(n))},[e]),movieDetailsAction:Object(r.useCallback)(function(n){return e(Re(n))},[e]),loginUserAction:Object(r.useCallback)(function(n){return e(ke(n))},[e])}},Ie=t(20),Le=t(7),_e=function(e){var n=Object(r.useState)(e||{}),t=Object(be.a)(n,2),a=t[0],l=t[1];return{values:a,setValues:l,handleInputChange:function(e){var n=e.target,t=n.name,r=n.value;e.persist(),l(function(e){return Object(Le.a)({},e,Object(Ie.a)({},t,r))})}}},Ne=t(23);function Ce(){var e=Object(h.a)(["\n    align-items: center;\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: ",";\n"]);return Ce=function(){return e},e}function Pe(){var e=Object(h.a)(["\n  \n    background: ",";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin-top: 0;\n"]);return Pe=function(){return e},e}function De(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return De=function(){return e},e}function Te(){var e=Object(h.a)(["\n    margin-right: 16px;\n"]);return Te=function(){return e},e}function He(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n\n    @media(min-width: 768px) {\n        flex-direction: row;\n    }\n"]);return He=function(){return e},e}var Ge=b.c.div(He()),Me=b.c.div(Te()),Ve=b.c.div(De()),Ue=b.c.h2(Pe(),E.primaryGradient),ze=b.c.div(Ce(),E.light[67],p(16)),Be=function(e){var n=e.match.params.imdbID,t=Ae().movieDetailsAction;Object(r.useEffect)(function(){t(n)},[n]);var l=Object(c.c)(function(e){return e}).details,i=l.details,o=l.pending,u=l.error;if(o)return a.a.createElement(Y,null);if(u)return a.a.createElement("div",null,a.a.createElement("p",null,"Oops..."),a.a.createElement("h3",null,u));if(0!==Object.keys(i).length){var d=i.Actors,s=i.Awards,m=i.Country,f=i.Director,h=i.Genre,b=i.Language,E=i.Plot,p=i.Poster,g=i.Production,v=i.Ratings,O=i.Released,j=i.Response,y=i.Runtime,w=i.Title,x=i.Website,S=i.Writer,R=i.Year,k=i.imdbID,A=i.imdbRating;return a.a.createElement(Ge,null,a.a.createElement(Me,null,"N/A"!==p?a.a.createElement("img",{src:p,alt:w}):a.a.createElement(ze,null,a.a.createElement(ae.a,{icon:Ne.a,style:{fontSize:"100px"}}),a.a.createElement("span",null,"Image unnavailable :("))),a.a.createElement(Ve,null,a.a.createElement(Ue,null,w),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",null,"IMDB ID"),a.a.createElement("td",null,k)," "),a.a.createElement("tr",null,a.a.createElement("th",null,"Actors"),a.a.createElement("td",null,d)," "),a.a.createElement("tr",null,a.a.createElement("th",null,"Awards"),a.a.createElement("td",null,s)," "),a.a.createElement("tr",null,a.a.createElement("th",null,"Country")," ",a.a.createElement("td",null,m)," "),a.a.createElement("tr",null,a.a.createElement("th",null,"Director")," ",a.a.createElement("td",null,f)," "),a.a.createElement("tr",null,a.a.createElement("th",null,"Genre")," ",a.a.createElement("td",null,h)," "),a.a.createElement("tr",null,a.a.createElement("th",null,"Language"),a.a.createElement("td",null,b)),a.a.createElement("tr",null,a.a.createElement("th",null,"Plot"),a.a.createElement("td",null,E)),a.a.createElement("tr",null,a.a.createElement("th",null,"Production"),"  ",a.a.createElement("td",null,g)),a.a.createElement("tr",null,a.a.createElement("th",null,"Ratings"),a.a.createElement("td",null,v.map(function(e){return a.a.createElement("div",null,e.Source," - ",e.Value)}))),a.a.createElement("tr",null,a.a.createElement("th",null,"Released"),a.a.createElement("td",null,O)),a.a.createElement("tr",null,a.a.createElement("th",null,"Response"),a.a.createElement("td",null,j)),a.a.createElement("tr",null,a.a.createElement("th",null,"Runtime"),a.a.createElement("td",null,y)),a.a.createElement("tr",null,a.a.createElement("th",null,"Writer"),a.a.createElement("td",null,S)),a.a.createElement("tr",null,a.a.createElement("th",null,"Year"),a.a.createElement("td",null,R)),a.a.createElement("tr",null,a.a.createElement("th",null,"Website"),a.a.createElement("td",null,a.a.createElement("a",{href:x},x))),a.a.createElement("tr",null,a.a.createElement("th",null,"imdbRating"),a.a.createElement("td",null,A))))))}return a.a.createElement("h2",null,"Nothing encountered")};function Fe(){var e=Object(h.a)(["\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    padding: ",";\n"]);return Fe=function(){return e},e}function We(){var e=Object(h.a)(["\n  font-size: ",";\n  &:hover {\n    color: ",";\n  }\n"]);return We=function(){return e},e}function Ke(){var e=Object(h.a)(["\n    color: ",";\n    font-size: ",";\n    font-weight: 200;\n    padding: "," ",";\n"]);return Ke=function(){return e},e}function Xe(){var e=Object(h.a)(["\n    height: auto;\n    width: 100%;\n    transition: opacity .5s;\n    &:hover {\n        opacity: .8;\n    }\n"]);return Xe=function(){return e},e}function qe(){var e=Object(h.a)(["\n    max-height: ",";\n    overflow: hidden;\n"]);return qe=function(){return e},e}function Je(){var e=Object(h.a)(["\n    color: ",";\n    border: "," solid ",";\n    display: flex;\n    flex-direction: column;\n    text-decoration: none;\n    transition: all .5s;\n    &:hover {\n        background: ",";\n        box-shadow: 0 "," "," "," rgba(0, 0, 0, 0.1), 0 "," "," "," rgba(0, 0, 0, 0.05);\n    }\n    }\n    svg {\n        color: ",";\n    }\n"]);return Je=function(){return e},e}var Ye=b.c.div(Je(),E.light[20],p(1),E.light[96],E.light[98],p(10),p(15),p(-3),p(4),p(6),p(-2),E.light[80]),$e=b.c.div(qe(),p(370)),Qe=b.c.img(Xe()),Ze=b.c.h2(Ke(),E.light[13],p(16),p(16),p(8)),en=b.c.p(We(),p(14),E.primary),nn=b.c.div(Fe(),p(16)),tn=function(e){var n=e.data,t=n.Title,r=n.Plot,l=n.Poster;return a.a.createElement(Ye,null,a.a.createElement($e,null,"N/A"!==l?a.a.createElement(Qe,{src:l,alt:t}):a.a.createElement(nn,null,a.a.createElement(ae.a,{icon:Ne.a,style:{fontSize:"100px"}}))),a.a.createElement("div",null,a.a.createElement(Ze,null,t),a.a.createElement(en,null,r)))},rn=0,an=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id";return rn++,"".concat(e).concat(rn)};function ln(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: "," auto 0 auto;\n  width: 100%;\n\n  @media(min-width: ",") {\n    margin: "," auto 0 auto;\n    width: 50%;\n  }\n\n  .input {\n    flex-grow: 1;\n  }\n  .button {\n\n  }\n"]);return ln=function(){return e},e}function cn(){var e=Object(h.a)(["\n  margin: ",";\n  width: 20%;\n"]);return cn=function(){return e},e}function on(){var e=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return on=function(){return e},e}var un=b.c.div(on()),dn=b.c.div(cn(),p(16)),sn=b.c.form(ln(),p(20),p(768),p(100)),mn=function(e){var n=e.match,t=Object(r.useState)(!1),l=Object(be.a)(t,2),i=l[0],o=l[1],u=Ae().searchMovieAction,m=_e({searchValue:""}),f=m.values,h=m.handleInputChange,b=Object(c.c)(function(e){return e}).movie,E=b.movie,p=b.totalResults,g=b.pending,v=b.error;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(sn,{onSubmit:function(e){e.preventDefault();var n=f.searchValue;n&&u(n)}},a.a.createElement(V,{name:"searchValue",value:f.searchValue,placeholder:"Search a movie...",handleChange:h}),a.a.createElement(y,{solid:!0,rounded:!0,right:!0},"Search"))),g&&a.a.createElement(Y,{medium:!0}),v&&a.a.createElement(S,{message:v}),E&&E.length>0&&!g&&!v&&a.a.createElement("p",null,"We found ",a.a.createElement("strong",null,p),1==p?"result!":" results!"),a.a.createElement(un,null,E&&E.map(function(e){var t=e.Title,r=e.Poster,l=e.Plot,i=e.imdbID;return a.a.createElement(dn,{key:an()},a.a.createElement(d.b,{to:"".concat(n.url,"/").concat(i),onClick:o},a.a.createElement(tn,{data:{Title:t,Poster:r,Plot:l}})))}),a.a.createElement(me,{handleClose:function(){o(!i)},show:i},a.a.createElement(s.b,{exact:!0,path:"".concat(n.path,"/:imdbID"),render:function(e){return a.a.createElement(Be,Object.assign({data:E},e))}}))))},fn=function(){var e=Object(c.c)(function(e){return e}).user.user;return a.a.createElement("div",null,a.a.createElement("h2",null,"Dashboard"),a.a.createElement("p",null,"Seja bem vindo",a.a.createElement("strong",null," ",e.username," "),"!"))},hn=t(40);function bn(){var e=Object(h.a)(["\n   display: flex;\n   flex-direction: column;\n   width: 80%;\n   margin: 0 auto;\n   @media(min-width: ",") {\n      width: 30%;\n   }\n"]);return bn=function(){return e},e}var En=b.c.form(bn(),p(768)),pn=function(e){var n=e.onSubmit,t=Object(hn.a)(),r=t.register,l=t.handleSubmit,i=t.errors;return a.a.createElement("div",null,a.a.createElement(En,{onSubmit:l(n)},a.a.createElement(P,{name:"username",placeholder:"Username",register:r({required:!0}),errors:i}),a.a.createElement(P,{type:"password",name:"password",register:r({required:!0}),placeholder:"Password",errors:i}),a.a.createElement(y,{type:"submit",solid:!0},"Login")))};function gn(){var e=Object(h.a)(["\n   display: flex;\n   justify-content: center;\n   margin: "," 0;\n"]);return gn=function(){return e},e}var vn=b.c.p(gn(),p(50)),On=function(e){var n=e.location.state,t=e.history,l=Ae().loginUserAction,i=Object(c.c)(function(e){return e}).user,o=i.isLogged,u=i.pending,d=i.error,m=Object(r.useState)(!1),f=Object(be.a)(m,2),h=f[0],b=f[1];Object(r.useEffect)(function(){h&&b(!0)},o);var E=(n||{from:{pathname:"/"}}).from;return h?a.a.createElement(s.a,{to:E}):d?a.a.createElement("h3",null,"Bad crendentials"):u?a.a.createElement(Y,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(vn,null,"Voc\xea deve logar para ver a p\xe1gina",a.a.createElement("strong",null," ",E.pathname," ")),a.a.createElement(pn,{onSubmit:function(e){l(e),t.push("/dashboard")}}))};function jn(){var e=Object(h.a)(["\n    html {\n        height: 100%;\n    }\n\n    *, *:after, *:before {\n        box-sizing: border-box;\n    }\n\n    body {\n        /* background-image: linear-gradient(110deg, #f93d66, #6d47d9); */\n        background-repeat: no-repeat;\n        margin: 0;\n        padding: 0;\n    }\n    html, body {\n        font-family: 'Roboto';\n        height: 100%;\n    }\n    #root {\n        height: 100%;\n    \n        & > div {\n            height: 100%;\n\n        }\n    }\n\n    a {\n        color: ",";\n        text-decoration: none;\n    }\n"]);return jn=function(){return e},e}var yn,wn=Object(b.a)(jn(),E.primary),xn=function(){return a.a.createElement("div",null,a.a.createElement(wn,null),a.a.createElement(re,null),a.a.createElement(H,null,a.a.createElement(s.d,null,a.a.createElement(s.b,{path:m.LOGIN.PATH,component:On}),a.a.createElement(s.b,{exact:!0,path:m.HOME.PATH,component:he}),a.a.createElement(s.b,{path:m.MOVIE.PATH,component:mn}),a.a.createElement(fe,{component:fn}))))},Sn={pending:!1,movie:[],totalResults:0,error:null},Rn={pending:!1,details:{},error:null},kn={pending:!1,isLogged:!1,user:{},error:null},An=Object(o.c)({movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Sn,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.movie,a=n.error;switch(t){case Ee:return Object(Le.a)({},e,{movie:[],totalResults:0,pending:!0});case pe:return Object(Le.a)({},e,{pending:!1,movie:r.Search,totalResults:r.totalResults,error:null});case ge:return Object(Le.a)({},e,{movie:[],pending:!1,totalResults:0,error:a});default:return e}},details:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rn,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.details,a=n.error;switch(t){case ve:return Object(Le.a)({},e,{details:{},pending:!0});case Oe:return Object(Le.a)({},e,{pending:!1,details:r});case je:return Object(Le.a)({},e,{details:{},pending:!1,error:a});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kn,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.user,a=n.error;switch(t){case ye:return Object(Le.a)({},e,{user:{},pending:!0});case we:return Object(Le.a)({},e,{pending:!1,isLogged:!0,user:r});case xe:return Object(Le.a)({},e,{pending:!1,isLogged:!1,user:{},error:a});default:return e}}}),In=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__();yn=window.navigator.userAgent.includes("Chrome")?Object(o.e)(An,Object(o.d)(Object(o.a)(u.a),In)):Object(o.e)(An,Object(o.d)(Object(o.a)(u.a))),i.a.render(a.a.createElement(c.a,{store:yn},a.a.createElement(d.a,null,a.a.createElement(xn,null))),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2467f513.chunk.js.map