(this["webpackJsonpreinforcement-timer"]=this["webpackJsonpreinforcement-timer"]||[]).push([[0],{36:function(e,n,t){e.exports=t(45)},45:function(e,n,t){"use strict";t.r(n);var r=t(10),a=t(0),c=t.n(a),i=t(14),o=t.n(i),l=t(19),u=t(9),f={1:[5,2,6,3,7,3,5,1,7,4,3,5,1],2:[7,3,10,5,8,4,7,2,5,10,3,7,2],3:[10,5,8,4,12,6,10,3,7,10,5,12,1,10,3],4:[12,6,10,4,15,7,12,6,15,8,12,2,10,4],5:[15,7,12,8,13,6,20,2,10,7,15,9,20,12,8,15,7,3],6:[20,10,12,8,15,9,17,10,25,15,2,20,10,25,13,5],7:[15,25,12,20,5,15,25,2,18,30,12,25,15,30,25,12,3],8:[25,29,15,20,10,17,35,5,25,30,15,20,35,17,30,15,5]},s=t(46),m=t(61),b=t(65),d=t(63),v=t(64),h=t(66),j=t(67),p=t(62);function O(){var e=Object(r.a)(["\n    &&& {\n        background-color: ",";\n        color: ",";\n    }\n"]);return O=function(){return e},e}function E(){var e=Object(r.a)(["\n    display: flex;\n    align-items: center;\n    height: 100%;\n"]);return E=function(){return e},e}function g(){var e=Object(r.a)(["\n    font-size: 2.5rem;\n    font-weight: 700;\n    margin: 0;\n"]);return g=function(){return e},e}function k(){var e=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return k=function(){return e},e}function w(){var e=Object(r.a)(["\n    min-width: 100px;\n    height: 90%;\n    overflow: auto;\n"]);return w=function(){return e},e}function y(){var e=Object(r.a)(["\n    margin-top: 0;\n"]);return y=function(){return e},e}function x(){var e=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n"]);return x=function(){return e},e}var S=u.default.div(x()),C=u.default.h1(y()),I=Object(u.default)(m.a)(w()),B=u.default.header(k()),J=u.default.p(g()),W=u.default.main(E()),z=Object(u.default)(s.a)(O(),(function(e){return e.selected?"hotpink":"inherit"}),(function(e){return e.selected?"black":"inherit"})),F=function(){var e=Object(a.useState)(1),n=Object(l.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(0),o=Object(l.a)(i,2),u=o[0],s=o[1],m=Object(a.useState)(!1),O=Object(l.a)(m,2),E=O[0],g=O[1],k=Object(a.useState)(f[t][u]),w=Object(l.a)(k,2),y=w[0],x=w[1];Object(a.useEffect)((function(){return s(0)}),[t]),Object(a.useEffect)((function(){g(!1),x(f[t][u])}),[u,t]),function(e,n){var t=Object(a.useRef)(e);Object(a.useEffect)((function(){t.current=e}),[e]),Object(a.useEffect)((function(){if(null!==n){var e=setInterval((function(){t.current()}),n);return function(){return clearInterval(e)}}}),[n])}((function(){y>0&&x((function(e){return e-1})),0===y&&(s((function(e){return e<f[t].length-1?e+1:0})),g(!1))}),E?1e3:null);return c.a.createElement(S,null,c.a.createElement(B,null,c.a.createElement(C,{"aria-live":"polite"},"Level ",t),c.a.createElement(J,{"aria-live":E?"polite":"off"},y)),c.a.createElement(W,null,c.a.createElement(p.a,{disabled:1===t,onClick:function(){t>1&&r((function(e){return e-1}))},"aria-label":"go to previous level"},c.a.createElement(d.a,null)),c.a.createElement(I,{orientation:"vertical",color:"primary","aria-label":"time selector button group"},f[t].map((function(e,n){return c.a.createElement(z,{onClick:function(){g(!1),s(n)},"aria-label":"Select time period of ".concat(e," seconds"),selected:n===u},e)}))),c.a.createElement(p.a,{disabled:8===t,onClick:function(){t<8&&r((function(e){return e+1}))},"aria-label":"next level"},c.a.createElement(v.a,null)),c.a.createElement(b.a,{onClick:function(){return g((function(e){return!e}))},style:{position:"absolute",bottom:"16px",right:"16px"},color:"primary","aria-label":E?"stop timer":"start timer"},E?c.a.createElement(h.a,null):c.a.createElement(j.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=t(30),H=t.n(G),L=t(68);function R(){var e=Object(r.a)(["\n","\nbody {\nfont-family: Helvetica, Sans-Serif;\n}\n"]);return R=function(){return e},e}var $=Object(u.createGlobalStyle)(R(),H.a);o.a.render(c.a.createElement(L.b,{injectFirst:!0},c.a.createElement($,null),c.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.1c2c1f36.chunk.js.map