(this["webpackJsonpreinforcement-timer"]=this["webpackJsonpreinforcement-timer"]||[]).push([[0],{45:function(e,n,t){e.exports=t(55)},55:function(e,n,t){"use strict";t.r(n);var a=t(10),i=t(0),r=t.n(i),l=t(15),c=t.n(l),o=t(24),u=t(9),d={1:[5,2,6,3,7,3,5,1,7,4,3,5,1],2:[7,3,10,5,8,4,7,2,5,10,3,7,2],3:[10,5,8,4,12,6,10,3,7,10,5,12,1,10,3],4:[12,6,10,4,15,7,12,6,15,8,12,2,10,4],5:[15,7,12,8,13,6,20,2,10,7,15,9,20,12,8,15,7,3],6:[20,10,12,8,15,9,17,10,25,15,2,20,10,25,13,5],7:[15,25,12,20,5,15,25,2,18,30,12,25,15,30,25,12,3],8:[25,29,15,20,10,17,35,5,25,30,15,20,35,17,30,15,5]},m=t(80),s=t(74),f=t(75),v=t(76),E=t(78),p=t(79),y=t(82),b=t(73),g=t(40),T=t.n(g),h=t(39),j=t.n(h);function O(){var e=Object(a.a)(["\n  width: 100%;\n"]);return O=function(){return e},e}var x=Object(u.default)(y.a)(O()),k=function(e){return r.a.createElement(x,{variant:"dots",steps:e.stepCount,position:"static",activeStep:e.activeStep,nextButton:r.a.createElement(b.a,{size:"small",onClick:function(){return e.dispatch({type:"LEVEL_CHANGED",payload:"increment"})},disabled:e.activeStep===e.stepCount-1},"Next",r.a.createElement(j.a,null)),backButton:r.a.createElement(b.a,{size:"small",onClick:function(){return e.dispatch({type:"LEVEL_CHANGED",payload:"decrement"})},disabled:0===e.activeStep},r.a.createElement(T.a,null),"Back")})},I=t(13),L=function(e,n){switch(n.type){case"LEVEL_CHANGED":return"increment"===n.payload&&e.level<Object.keys(d).length?{intervalIndex:0,level:e.level+1,isTimerTicking:!1}:"decrement"===n.payload&&e.level>1?{intervalIndex:0,level:e.level-1,isTimerTicking:!1}:Object(I.a)({},e);case"INTERVAL_CHANGED":return"increment"===n.payload&&e.intervalIndex<d[e.level].length-1?Object(I.a)({},e,{intervalIndex:e.intervalIndex+1,isTimerTicking:!1}):"decrement"===n.payload&&e.intervalIndex>0?Object(I.a)({},e,{intervalIndex:e.intervalIndex-1,isTimerTicking:!1}):Object(I.a)({},e);case"TIMER_BUTTON_CLICKED":return e.intervalIndex===d[e.level].length-1&&0===n.payload.timeLeft?Object(I.a)({},e,{isTimerTicking:!1,intervalIndex:0}):e.isTimerTicking?Object(I.a)({},e,{isTimerTicking:!1}):!1===e.isTimerTicking?Object(I.a)({},e,{isTimerTicking:!0}):Object(I.a)({},e)}},C=t(77);function w(){var e=Object(a.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    flex-grow: 1;\n    @media only screen and (max-width: 480px) {\n        width: 100%;\n    }\n"]);return w=function(){return e},e}function A(){var e=Object(a.a)(["\n    font-size: 1rem;\n    font-weight: 400;\n    margin: 0;\n    text-align: center;\n"]);return A=function(){return e},e}function N(){var e=Object(a.a)(["\n    font-size: 10rem;\n    font-weight: 700;\n    margin: 0;\n"]);return N=function(){return e},e}function _(){var e=Object(a.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    flex-grow: 2;\n"]);return _=function(){return e},e}function D(){var e=Object(a.a)(["\n    margin-top: 0;\n"]);return D=function(){return e},e}function G(){var e=Object(a.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n"]);return G=function(){return e},e}var H=u.default.div(G()),R=u.default.h1(D()),S=u.default.header(_()),V=u.default.p(N()),B=u.default.p(A()),z=u.default.nav(w()),U={level:1,intervalIndex:0,isTimerTicking:!1},K=function(){var e=Object(i.useReducer)(L,U),n=Object(o.a)(e,2),t=n[0],a=n[1],l=Object(i.useState)(d[t.level][0]),c=Object(o.a)(l,2),u=c[0],y=c[1],b=Object(i.useState)(!0),g=Object(o.a)(b,2),T=g[0],h=g[1];Object(i.useEffect)((function(){return y(d[t.level][t.intervalIndex])}),[t.level,t.intervalIndex]);var j=Object(i.useCallback)((function(e){"Space"===e.code?a({type:"TIMER_BUTTON_CLICKED",payload:{timeLeft:u}}):"ArrowDown"===e.code?a({type:"LEVEL_CHANGED",payload:"decrement"}):"ArrowUp"===e.code?a({type:"LEVEL_CHANGED",payload:"increment"}):"ArrowRight"===e.code?a({type:"INTERVAL_CHANGED",payload:"increment"}):"ArrowLeft"===e.code&&a({type:"INTERVAL_CHANGED",payload:"decrement"})}),[u]);return Object(i.useEffect)((function(){return document.addEventListener("keydown",j),function(){return document.removeEventListener("keydown",j)}})),Object(i.useEffect)((function(){0===u?h(!1):t.isTimerTicking&&h(!0)}),[u,t.isTimerTicking]),function(e,n){var t=Object(i.useRef)(e);Object(i.useEffect)((function(){t.current=e}),[e]),Object(i.useEffect)((function(){if(null!==n){var e=setInterval((function(){t.current()}),n);return function(){return clearInterval(e)}}}),[n])}((function(){u>0&&y((function(e){return e-1})),0===u&&a({type:"INTERVAL_CHANGED",payload:"increment"})}),t.isTimerTicking?1e3:null),r.a.createElement(H,null,r.a.createElement(S,null,r.a.createElement(C.a,{disabled:0===t.intervalIndex,onClick:function(){return a({type:"INTERVAL_CHANGED",payload:"decrement"})}},r.a.createElement(E.a,null)),r.a.createElement("div",{style:{flex:1}},r.a.createElement(V,{"aria-live":T?"polite":"off"},u),r.a.createElement(B,null,t.intervalIndex+1," / ",d[t.level].length)),r.a.createElement(C.a,{disabled:t.intervalIndex===d[t.level].length-1,onClick:function(){return a({type:"INTERVAL_CHANGED",payload:"increment"})}},r.a.createElement(p.a,null))),r.a.createElement(z,null,r.a.createElement(m.a,{onClick:function(){return a({type:"TIMER_BUTTON_CLICKED",payload:{timeLeft:u}})},color:"primary","aria-label":t.isTimerTicking?"stop timer":"start timer","aria-pressed":t.isTimerTicking,style:{marginBottom:"2rem"}},function(e,n,t,a){return t===d[n].length-1&&0===a?r.a.createElement(s.a,null):e?r.a.createElement(f.a,null):r.a.createElement(v.a,null)}(t.isTimerTicking,t.level,t.intervalIndex,u)),r.a.createElement(R,{"aria-live":"polite"},"Level ",t.level),r.a.createElement(k,{activeStep:t.level-1,dispatch:a,stepCount:Object.keys(d).length})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=t(41),J=t.n(M),W=t(81);function F(){var e=Object(a.a)(["\n","\nhtml, body {\n  height: 100%;\n}\nbody {\n  font-family: Helvetica, Sans-Serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n}\n#root {\n  height: 100%;\n}\n"]);return F=function(){return e},e}var $=Object(u.createGlobalStyle)(F(),J.a);c.a.render(r.a.createElement(W.b,{injectFirst:!0},r.a.createElement($,null),r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.e2c1d021.chunk.js.map