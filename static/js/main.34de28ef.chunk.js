(this["webpackJsonpguest-book"]=this["webpackJsonpguest-book"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),o=n.n(a),i=(n(12),n(7)),m=n(2),r=(n(13),n(0));var l=function(e){var t=e.comments;return Object(r.jsx)("div",{className:"comments",children:Object(r.jsx)("ul",{className:"comments__list",children:t.length>0?t.map((function(e){return Object(r.jsxs)("li",{className:"comments__item",children:[Object(r.jsxs)("p",{className:"comments__name",children:[Object(r.jsx)("strong",{children:e.name}),Object(r.jsx)("span",{className:"comments__date",children:"".concat(e.date," in ").concat(e.time)})]}),Object(r.jsx)("p",{className:"comments__text",children:e.text})]},e.id)})):""})})},u="https://blooming-beach-26580.herokuapp.com";var j=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),o=Object(m.a)(a,2),j=o[0],b=o[1],d=Object(c.useState)(!1),h=Object(m.a)(d,2),p=h[0],O=h[1],f=Object(c.useState)([]),x=Object(m.a)(f,2),g=x[0],_=x[1],N=Object(c.useState)(""),v=Object(m.a)(N,2),C=v[0],w=v[1];return Object(c.useEffect)((function(){O(!1)}),[n,j]),Object(c.useEffect)((function(){fetch(u).then((function(e){if(!e.ok)throw new Error("Failed to load comments");return e.json()})).then((function(e){_(Object(i.a)(e).reverse())}))}),[C]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("form",{className:"NewCommentForm",children:[Object(r.jsx)("p",{className:"App__fill",children:"Leave your comment"}),Object(r.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input input is-primary",autoComplete:"off",value:n,onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("textarea",{name:"text",placeholder:"Type your comment here",className:"NewCommentForm__input input is-primary",value:j,onChange:function(e){return b(e.target.value)}}),p&&Object(r.jsx)("div",{className:"NewCommentForm__error",children:"Please fill all fields"}),Object(r.jsx)("button",{type:"submit",className:"NewCommentForm__button button is-success is-light",onClick:function(){if(j.trim()&&n.trim()){var e=new Date,t={name:n,text:j,id:e,date:e.toLocaleDateString(),time:e.toLocaleTimeString()};w(e),s(""),b(""),function(e){var t=new XMLHttpRequest;t.open("POST",u),t.send(JSON.stringify(e))}(t)}else O(!0)},children:"Add a comment"})]}),g.length>0&&Object(r.jsx)(l,{comments:g})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.34de28ef.chunk.js.map