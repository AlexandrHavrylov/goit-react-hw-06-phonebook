(this["webpackJsonpgoit-react-hw-06-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-06-hooks-phonebook"]||[]).push([[0],{26:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var c,r,a,o,i=t(0),s=t.n(i),b=t(11),d=t.n(b),l=(t(26),t(17)),u=t(4),j=t(5),p=j.a.form(c||(c=Object(u.a)(["\n  width: 600px;\n  padding: 16px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border: 1px black solid;\n  border-radius: 5px;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: rgb(25 26 27 / 20%) 4px 4px 8px 0px;\n"]))),x=j.a.label(r||(r=Object(u.a)(["\n  font-size: 24px;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),O=j.a.input(a||(a=Object(u.a)(["\n  font-size: 16px;\n  width: 300px;\n  padding: 4px;\n  margin-top: 5px;\n  color: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.secondary}),(function(n){return n.theme.main})),f=j.a.button(o||(o=Object(u.a)(["\n  font-size: 20px;\n  font-weight: 700;\n  padding: 10px;\n  cursor: pointer;\n  margin-top: 10px;\n  text-align: center;\n  border-radius: 5px;\n  border: 0.5px black solid;\n  &:hover {\n    background-color: #8ecafc;\n  }\n"]))),h=t(6),g=t(7),m=t(37),v=Object(g.b)("contacts/add",(function(n,e){return{payload:{id:Object(m.a)(),name:n,number:e}}})),y=Object(g.b)("contacts/delete"),k=Object(g.b)("contacts/filter"),w=t(1);var C,z,A,F,S,L,T,B=function(){var n=Object(i.useState)(""),e=Object(l.a)(n,2),t=e[0],c=e[1],r=Object(i.useState)(""),a=Object(l.a)(r,2),o=a[0],s=a[1],b=Object(h.b)(),d=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":c(r);break;case"number":s(r)}};return Object(w.jsx)("div",{children:Object(w.jsxs)(p,{onSubmit:function(n){n.preventDefault(),b(v(t,o)),c(""),s("")},children:[Object(w.jsxs)(x,{children:["\u0418\u043c\u044f",Object(w.jsx)(O,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:t,onChange:d})]}),Object(w.jsxs)(x,{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",Object(w.jsx)(O,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:o,onChange:d})]}),Object(w.jsx)(f,{type:"submit",children:"Add contact"})]})})},D=j.a.ul(C||(C=Object(u.a)(["\n  margin: 0;\n  padding: 24px;\n  list-style: none;\n"]))),J=j.a.li(z||(z=Object(u.a)(["\n  position: relative;\n  padding: 10px;\n  padding-left: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  font-size: 24px;\n  font-weight: 500;\n  border: 1px gray solid;\n  border-radius: 10px;\n  box-shadow: rgb(25 26 27 / 20%) 1px 1px 1px 1px;\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),P=j.a.span(A||(A=Object(u.a)(["\n  margin-right: 56px;\n\n  svg {\n    position: absolute;\n    top: 15px;\n    left: 5px;\n    color: #010174;\n  }\n"]))),Z=j.a.button(F||(F=Object(u.a)(["\n  display: block;\n  font-size: 16px;\n  font-weight: 700;\n  padding: 10px;\n  cursor: pointer;\n\n  text-align: center;\n  border-radius: 5px;\n  border: 0.5px black solid;\n  &:hover {\n    background-color: tomato;\n  }\n"]))),q=t(20),I=function(){var n=Object(h.c)((function(n){return function(n,e){var t=e.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}(n.contacts.items,n.contacts.filter)})),e=Object(h.b)();return Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"Contacts"}),Object(w.jsx)(D,{children:n.map((function(n){var t=n.id,c=n.name,r=n.number;return Object(w.jsxs)(J,{children:[Object(w.jsxs)(P,{children:[Object(w.jsx)(q.a,{})," ",c,": ",r]}),Object(w.jsx)(Z,{onClick:function(){return e(y(t))},type:"button",children:"Delete"})]},t)}))})]})},M=j.a.div(S||(S=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n\n  padding: 24px;\n  align-items: center;\n  text-align: center;\n  color: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.secondary}),(function(n){return n.theme.main})),E=j.a.h1(L||(L=Object(u.a)(["\n  font-size: 36px;\n"]))),N=j.a.div(T||(T=Object(u.a)(["\n  padding: 24px;\n"]))),$=function(){var n=Object(h.c)((function(n){return n.contacts.filter})),e=Object(h.b)();return Object(w.jsx)(N,{children:Object(w.jsxs)(x,{children:["Find contatcs by Name",Object(w.jsx)(O,{type:"text",value:n,onChange:function(n){return e(k(n.target.value))}})]})})};var G,H=function(){return Object(w.jsxs)(M,{children:[Object(w.jsx)(E,{children:"Phonebook"}),Object(w.jsx)(B,{}),Object(w.jsx)($,{}),Object(w.jsx)(I,{})]})},K=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),a(n),o(n)}))},Q=t(18),R=t(13),U=t(14),V=t(2),W=Object(g.c)([],(G={},Object(U.a)(G,v,(function(n,e){var t=e.payload;return n.find((function(n){return n.name===t.name}))?(alert("".concat(t.name," is alredy in contacts ")),n):[t].concat(Object(R.a)(n))})),Object(U.a)(G,y,(function(n,e){var t=e.payload;return n.filter((function(n){return n.id!==t}))})),G)),X=Object(g.c)("",Object(U.a)({},k,(function(n,e){return e.payload}))),Y=Object(V.b)({items:W,filter:X}),_=t(8),nn=t(19),en={key:"contacts",storage:t.n(nn).a,blacklist:"filter"},tn=Object(R.a)(Object(g.d)({serializableCheck:{ignoredActions:[_.a,_.f,_.b,_.c,_.d,_.e]}})),cn=Object(g.a)({reducer:{contacts:Object(_.g)(en,Y)},middleware:tn,devTools:!1}),rn=Object(_.h)(cn);d.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(h.a,{store:cn,children:Object(w.jsx)(Q.a,{loading:null,persistor:rn,children:Object(w.jsx)(H,{})})})}),document.getElementById("root")),K()}},[[35,1,2]]]);
//# sourceMappingURL=main.a83595da.chunk.js.map