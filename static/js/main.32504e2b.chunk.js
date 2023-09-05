(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(21),a=c(6),s=(c(30),c(31),c(2)),r=(c(32),c(3)),j=function(e){return e.isActive?"navbar-item has-background-grey-lighter":"navbar-item"},i=function(){return Object(r.jsxs)("div",{"data-cy":"app",children:[Object(r.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(a.c,{className:j,to:"/",children:"Home"}),Object(r.jsx)(a.c,{className:j,to:"/people",children:"People"})]})})}),Object(r.jsx)("main",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(s.b,{})})})]})},l=function(){return Object(r.jsx)("h1",{className:"title",children:"Home Page"})},o=c(4),b=c(0),d=(c(34),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var O=function(e){var t=e.person,c=e.people,n=function(e,t){var c=e[0].toLowerCase()+e.slice(1);return"".concat(c," ").concat(t).split(" ").join("-")},j=Object(s.r)().personId,i=t.name,l=t.sex,o=t.born,b=t.died,d=t.motherName,h=t.fatherName,O=c.find((function(e){return e.name===d})),x=c.find((function(e){return e.name===h}));return Object(r.jsxs)("tr",{"data-cy":"person",className:j===n(i,o)?"has-background-warning":"",children:[Object(r.jsx)("td",{children:Object(r.jsx)(a.b,{to:"/people/".concat(n(i,o)),className:"f"===l?"has-text-danger":"",children:i})}),Object(r.jsx)("td",{children:l}),Object(r.jsx)("td",{children:o}),Object(r.jsx)("td",{children:b}),Object(r.jsx)("td",{children:O?Object(r.jsx)(a.b,{to:"/people/".concat(n(O.name,O.born)),className:"has-text-danger",children:O.name}):d||"-"}),Object(r.jsx)("td",{children:x?Object(r.jsx)(a.b,{to:"/people/".concat(n(x.name,x.born)),children:x.name}):h||"-"})]})},x=function(e){var t=e.people;return Object(r.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Sex"}),Object(r.jsx)("th",{children:"Born"}),Object(r.jsx)("th",{children:"Died"}),Object(r.jsx)("th",{children:"Mother"}),Object(r.jsx)("th",{children:"Father"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(O,{person:e,people:t})}))})]})},p=function(){var e=Object(b.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(!1),s=Object(o.a)(a,2),j=s[0],i=s[1],l=Object(b.useState)(!1),O=Object(o.a)(l,2),p=O[0],u=O[1];return Object(b.useEffect)((function(){i(!0),h().then(n).catch((function(){return u(!0)})).finally((function(){return i(!1)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"People Page"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsxs)("div",{className:"box table-container",children:[j&&Object(r.jsx)(d,{}),!c.length&&!j&&!p&&Object(r.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!!c.length&&!p&&Object(r.jsx)(x,{people:c}),p&&Object(r.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})]})},u=function(){return Object(r.jsx)(s.e,{children:Object(r.jsxs)(s.c,{path:"/",element:Object(r.jsx)(i,{}),children:[Object(r.jsx)(s.c,{index:!0,element:Object(r.jsx)(l,{})}),Object(r.jsx)(s.c,{path:"people",element:Object(r.jsx)(p,{}),children:Object(r.jsx)(s.c,{path:":personId"})}),Object(r.jsx)(s.c,{path:"/home",element:Object(r.jsx)(s.a,{to:"/",replace:!0})}),Object(r.jsx)(s.c,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})};Object(n.createRoot)(document.getElementById("root")).render(Object(r.jsx)(a.a,{children:Object(r.jsx)(u,{})}))}},[[35,1,2]]]);
//# sourceMappingURL=main.32504e2b.chunk.js.map