(this["webpackJsonptoday-calls-app"]=this["webpackJsonptoday-calls-app"]||[]).push([[0],[,,,function(e,t,l){e.exports={nextCall:"NextCall_nextCall__2hiNO",nextCall__wrap:"NextCall_nextCall__wrap__E-JmG",nextCall__title:"NextCall_nextCall__title__3uk50",nextCall__inputWrap:"NextCall_nextCall__inputWrap__3k8d4",nextCall__inputsWrap:"NextCall_nextCall__inputsWrap__2i2Go",nextCall__input:"NextCall_nextCall__input__3VO86",nextCall__inputName:"NextCall_nextCall__inputName__3dOlZ",nextCall__inputPhone:"NextCall_nextCall__inputPhone__37SD1",nextCall__inputTime:"NextCall_nextCall__inputTime__2rI6V"}},,,,function(e,t,l){e.exports={header:"Header_header__2vzj5",header__container:"Header_header__container__3VRL9",header__title:"Header_header__title__2pv23"}},,function(e,t,l){e.exports={title:"Title_title__38Rue",title__name:"Title_title__name__G7AnC","main-title":"Title_main-title__15ozn"}},function(e,t,l){},,function(e,t,l){e.exports={button:"Button_button__9OKbO"}},,,,,,function(e,t,l){},,function(e,t,l){},function(e,t,l){"use strict";l.r(t);var a=l(1),c=l.n(a),s=l(11),n=l.n(s),i=l(13),r=l(2),o=(l(18),l(4)),_=l(9),j=l.n(_),d=l(0),u=function(e){return Object(d.jsx)("div",{className:j.a.title,children:Object(d.jsx)("h2",{className:"".concat(j.a.title__name," ").concat(e.classes),children:e.text})})},b=l(12),m=l.n(b),x=function(e){return Object(d.jsx)("button",{onClick:e.click,type:e.type,className:"".concat(m.a.button," ").concat(e.classes),children:e.text})},O=(l(10),function(){return{addItemToStorage:Object(a.useCallback)((function(e,t,l,a,c){var s={id:Date.now(),name:e,phone:t,time:l,milisec:a,finish:c};localStorage.setItem("".concat(a),JSON.stringify(s))}),[]),getItemsFromStorage:Object(a.useCallback)((function(){var e=[],t=[];for(var l in localStorage)localStorage.hasOwnProperty(l)&&(e.push(localStorage.getItem(l)),e.forEach((function(e){t.push(JSON.parse(e))})));return t}),[]),deleteItemsFromStorage:Object(a.useCallback)((function(e){localStorage.removeItem(e)}),[])}}),h=function(e){var t=e.create,l=Object(a.useState)({name:"",phone:"",time:""}),c=Object(r.a)(l,2),s=c[0],n=c[1],i=Object(a.useState)(""),_=Object(r.a)(i,2),j=_[0],b=_[1],m=Object(a.useState)(""),h=Object(r.a)(m,2),p=h[0],v=h[1],N=Object(a.useState)(""),f=Object(r.a)(N,2),C=f[0],g=f[1],S=O().addItemToStorage;var k=/^[0-9\b]+$/;return Object(d.jsxs)("div",{className:"add-call",children:[Object(d.jsx)(u,{text:"Add call"}),Object(d.jsxs)("form",{action:"",children:[Object(d.jsxs)("div",{className:"add-call__inputs-wrap",children:[Object(d.jsx)("input",{type:"text",value:j,onChange:function(e){b(e.target.value),n(Object(o.a)(Object(o.a)({},s),{},{name:e.target.value}))},className:"add-call__input",placeholder:"Name",maxLength:30}),Object(d.jsx)("input",{type:"text",value:p,onChange:function(e){(""===e.target.value||k.test(e.target.value))&&(v(e.target.value),n(Object(o.a)(Object(o.a)({},s),{},{phone:e.target.value})))},className:"add-call__input",placeholder:"- 00XXX XXX XXX",maxLength:14}),Object(d.jsx)("input",{type:"time",value:C,onChange:function(e){g(e.target.value),n(Object(o.a)(Object(o.a)({},s),{},{time:e.target.value}))},className:"add-call__input"})]}),Object(d.jsx)(x,{click:function(){var e=!1,l=!1,a=!1;if(j.length>1&&j.length<=30&&(e=!0),14===p.length&&(l=!0),(void 0!==C||C)&&(a=!0),e&&l&&a){var c=function(e,t){var l=new Date(t),a=l.getHours(),c=l.getMinutes(),s=l.getSeconds(),n=l-i(a,c,s);function i(e,t,l){return 36e5*e+6e4*t+1e3*l}var r=e.split("");return n+i("0"===r[0]&&"0"===r[1]?0:"0"===r[0]&&"0"!==r[1]?r[1]:r[0]+r[1],"0"===r[3]&&"0"===r[4]?0:"0"===r[3]&&"0"!==r[4]?r[4]:r[3]+r[4],0)}(C,Date.now()),i=!1;Date.now()>c&&(i=!0);var r=Object(o.a)(Object(o.a)({id:Date.now()},s),{},{finish:i,milisec:c});t(r),S(j,p,C,c,i),b(""),v(""),g(""),n({})}else alert("Enter all form fields")},type:"button",classes:"add-call__button",text:"Add call"})]})]})},p=(l(20),function(e){var t=!1;e.call.finish&&(t=!0);var l=e.call.hidden?"hidden":"",a="calls-list__item ".concat(l);return Object(d.jsxs)("div",{className:a,children:[Object(d.jsx)("div",{className:"calls-list__col name-col",children:e.call.name}),Object(d.jsx)("div",{className:"calls-list__col phone-col",children:e.call.phone}),Object(d.jsx)("div",{className:"calls-list__col time-col","data-milisec":e.call.milisec,children:e.call.time}),Object(d.jsx)("div",{className:"calls-list__col time-delete",children:Object(d.jsx)("span",{onClick:function(){return e.remove(e.call)},children:"delete"})}),Object(d.jsx)("div",{className:"calls-list__col time-finish",children:Object(d.jsx)("input",{checked:t,type:"checkbox",disabled:!0})})]})}),v=function(){return Object(d.jsxs)("div",{className:"calls-list__buttons-wrap",children:[Object(d.jsx)(x,{type:"button",classes:"calls-list__button",text:"All"}),Object(d.jsx)(x,{type:"button",classes:"calls-list__button",text:"Next"}),Object(d.jsx)(x,{type:"button",classes:"calls-list__button",text:"Finished"})]})},N=function(e){var t=e.calls,l=e.remove,c=e.sortTimeAsc,s=e.sortTimeDesc,n=Object(a.useState)("all"),i=Object(r.a)(n,2);i[0],i[1];return Object(d.jsxs)("div",{className:"calls-list",children:[Object(d.jsxs)("div",{className:"calls-list__table",children:[Object(d.jsxs)("div",{className:"calls-list__headers",children:[Object(d.jsxs)("div",{className:"calls-list__col name-col",children:[Object(d.jsx)("span",{children:"Name"}),Object(d.jsxs)("div",{className:"calls-list__sort-block",children:[Object(d.jsx)("div",{className:"calls-list__sort-block-up"}),Object(d.jsx)("div",{className:"calls-list__sort-block-down"})]})]}),Object(d.jsx)("div",{className:"calls-list__col phone-col",children:"Phone number"}),Object(d.jsxs)("div",{className:"calls-list__col time-col",children:[Object(d.jsx)("span",{children:"Time"}),Object(d.jsxs)("div",{className:"calls-list__sort-block",children:[Object(d.jsx)("div",{className:"calls-list__sort-block-up",onClick:c}),Object(d.jsx)("div",{className:"calls-list__sort-block-down",onClick:s})]})]}),Object(d.jsx)("div",{className:"calls-list__col time-delete"}),Object(d.jsx)("div",{className:"calls-list__col time-finish"})]}),Object(d.jsx)("div",{className:"calls-list__cols-wrap",children:t.length?t.map((function(e){return Object(d.jsx)(p,{remove:l,call:e},e.milisec)})):Object(d.jsx)("div",{className:"calls-list__item",children:Object(d.jsx)("h1",{className:"calls-list__no-calls",children:"no calls today"})})})]}),Object(d.jsx)(v,{})]})},f=l(7),C=l.n(f),g=function(e){return Object(d.jsx)("header",{className:C.a.header,children:Object(d.jsx)("div",{className:"".concat(C.a.header__container,"  container"),children:Object(d.jsx)(u,{classes:"".concat(C.a.header__title," main-title"),text:"Today calls app"})})})},S=l(3),k=l.n(S),w=function(e){return Object(d.jsx)("div",{className:k.a.nextCall,children:Object(d.jsxs)("div",{className:k.a.nextCall__wrap,children:[Object(d.jsx)(u,{text:"Next call"}),Object(d.jsxs)("div",{className:k.a.nextCall__inputWrap,children:[Object(d.jsx)("div",{className:k.a.nextCall__input+" "+k.a.nextCall__inputName,children:"User 1"}),Object(d.jsx)("div",{className:k.a.nextCall__input+" "+k.a.nextCall__inputPhone,children:"032984234234"}),Object(d.jsx)("div",{className:k.a.nextCall__input+" "+k.a.nextCall__inputTime,children:" 4:20"})]})]})})};var y=function(){var e=O(),t=e.getItemsFromStorage,l=e.deleteItemsFromStorage,c=Object(a.useState)((function(){return t()})),s=Object(r.a)(c,2),n=s[0],o=s[1],_=Object(a.useState)("all"),j=Object(r.a)(_,2);return j[0],j[1],Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"main-wrap",children:[Object(d.jsx)(w,{}),Object(d.jsxs)("div",{className:"calls-wrap",children:[Object(d.jsx)(h,{create:function(e){o([].concat(Object(i.a)(n),[e]))}}),Object(d.jsx)(N,{remove:function(e){o(n.filter((function(t){return t.id!==e.id}))),l(e.milisec)},calls:n,sortTimeAsc:function(){o((function(e){return e.sort((function(e,t){return e.milisec-t.milisec}))}))},sortTimeDesc:function(){o((function(e){return e.sort((function(e,t){return t.milisec-e.milisec}))}))}})]})]})})]})};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.80c951b0.chunk.js.map