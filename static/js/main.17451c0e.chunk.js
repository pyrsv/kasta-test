(this["webpackJsonpkasta-test"]=this["webpackJsonpkasta-test"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('{"b":{"name":"card","placeholder":"XXXX XXXX XXXX XXXX","label":"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u043a\u0438","value":"","isValid":true,"touched":false,"errorMessage":"\u041d\u0435\u0432\u0456\u0440\u043d\u0430 \u043a\u0430\u0440\u0442\u043a\u0430"},"d":{"name":"expiryDate","placeholder":"\u041c\u041c / \u0420\u0420","label":"\u0422\u0435\u0440\u043c\u0456\u043d \u0434\u0456\u0457","value":"","isValid":true,"touched":false,"errorMessage":"\u041d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u0442\u0435\u0440\u043c\u0456\u043d \u0434\u0456\u0457"},"c":{"name":"cardHolder","placeholder":"CARDHOLDER NAME ","label":"\u0412\u043b\u0430\u0441\u043d\u0438\u043a \u043a\u0430\u0440\u0442\u043a\u0438","value":"","isValid":true,"touched":false,"errorMessage":"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u041f\u0406\u0411 \u0432\u043b\u0430\u0441\u043d\u0438\u043a\u0430 \u043a\u0430\u0440\u0442\u043a\u0438","tip":"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0442\u0430 \u0456\u043c\xb4\u044f \u043b\u044e\u0434\u0438\u043d\u0438 \u043d\u0430 \u044f\u043a\u0443 \u0432\u0438\u043f\u0443\u0449\u0435\u043d\u0430 \u043a\u0430\u0440\u0442\u043a\u0430. \u0414\u043b\u044f \u0456\u043c\u0435\u043d\u043d\u0438\u0445 \u043a\u0430\u0440\u0442\u043e\u043a \u2014 \u043d\u0430\u043d\u0435\u0441\u0435\u043d\u043e \u043d\u0430 \u043a\u0430\u0440\u0442\u043a\u0443"},"a":{"name":"CVV","placeholder":"XXX","label":"CVV","value":"","isValid":true,"touched":false,"errorMessage":"\u0412\u0432\u0435\u0434i\u0442\u044c CVV/CVC","tip":"\u041e\u0441\u0442\u0430\u043d\u043d\u0456 \u0442\u0440\u0438 \u0446\u0438\u0444\u0440\u0438 \u043d\u0430 \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u0456\u0439 \u0441\u0442\u0440\u043e\u043d\u0456 \u043a\u0430\u0440\u0442\u043a\u0438"}}')},,function(e){e.exports=JSON.parse('{"card":{"mask":["\\\\d","\\\\d","\\\\d","\\\\d"," ","\\\\d","\\\\d","\\\\d","\\\\d"," ","\\\\d","\\\\d","\\\\d","\\\\d"," ","\\\\d","\\\\d","\\\\d","\\\\d"],"regex":["^(?:4[0-9]{12}(?:[0-9]{3})?)$","^(?:5[1-5][0-9]{14})$"]},"expiryDate":{"mask":["\\\\d","\\\\d","/","\\\\d","\\\\d"],"regex":["^\\\\d{2}/\\\\d{2}$"]},"CVV":{"mask":["\\\\d","\\\\d","\\\\d"],"regex":["^\\\\d{3}$"]},"cardHolder":{"regex":["\\\\D+\\\\s*"]}}')},,,,,function(e,a,t){e.exports=t.p+"static/media/logo.063ecc74.svg"},,,,,function(e,a,t){e.exports=t(36)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),o=(t(20),t(4)),s=t(2),m=t(13),i=t.n(m),d=t(14),u=(t(21),function(e){return l.a.createElement("div",{className:"TooltipWrapper"},l.a.createElement("span",{className:"TooltipGlyph","data-tip":!0,"data-for":e.name+"tooltip"},"?"),l.a.createElement(d.a,{place:"top",id:e.name+"tooltip",className:"Tooltip",type:"light",effect:"solid",overridePosition:function(e){return{left:e.left,top:e.top+5}}},l.a.createElement("span",null,e.tip)))}),p=(t(22),function(e){var a=e.config,t=a.mask,n=void 0===t?[]:t,r=a.control,c=r.name,o=r.value,s=r.label,m=r.placeholder,d=r.errorMessage,p=r.isValid,f=r.touched,E=r.tip,g=n.map((function(e){return e.split("").includes("\\")?new RegExp(e):e})),v=!p&&f;return l.a.createElement("div",{className:"FormControl"},l.a.createElement("label",{htmlFor:c,className:"FormControl__Label"},s,E&&l.a.createElement(u,{name:c,tip:E})),g.length>0?l.a.createElement(i.a,{value:o,className:"FormControl__Input",id:c,name:c,placeholder:m,mask:g,onChange:e.onChange,onBlur:e.onBlur,guide:!1,autoComplete:"off"}):l.a.createElement("input",{type:"text",value:o,className:"FormControl__Input",id:c,name:c,placeholder:m,onChange:e.onChange,onBlur:e.onBlur,autoComplete:"off"}),v?l.a.createElement("span",{className:"FormControl__ErrorMessage"}," ",d," "):null)}),f=(t(23),function(e){return l.a.createElement("button",{className:"Button",onClick:e.onClick},e.text)}),E=(t(24),function(e){return l.a.createElement("div",{className:"CheckboxWrapper"},l.a.createElement("label",{htmlFor:e.name,className:"Checkbox"},l.a.createElement("input",{className:"Checkbox__input",id:e.name,type:"checkbox",checked:e.checked,onChange:e.onChange}),l.a.createElement("span",{className:"Checkbox__text"},e.text,e.tip&&l.a.createElement(u,{name:e.name,tip:e.tip}))))}),g=(t(25),function(e){var a=function(){var a=e.final-+new Date,t={};return a>0&&(t={hours:Math.floor(a/36e5%24),minutes:Math.floor(a/1e3/60%60),seconds:Math.floor(a/1e3%60)}),t},t=Object(n.useState)(a()),r=Object(o.a)(t,2),c=r[0],s=c.hours,m=c.minutes,i=c.seconds,d=r[1];return Object(n.useEffect)((function(){setTimeout((function(){d(a())}),1e3)})),l.a.createElement("div",{className:"CountdownTimer"},l.a.createElement("span",null,e.text," "),l.a.createElement("span",null,"0",s,":",m,":",i))}),v=t(7),C=t(9),h=t(3),b=t(5),N=(t(31),function(e){var a=Object(n.useState)({form:{card:Object(s.a)({},h.b),expiryDate:Object(s.a)({},h.d),cardHolder:Object(s.a)({},h.c),CVV:Object(s.a)({},h.a)}}),t=Object(o.a)(a,2),r=t[0],c=r.form,m=r.form,i=m.card,d=m.expiryDate,u=m.cardHolder,N=m.CVV,_=t[1],k=Object(n.useState)(!1),x=Object(o.a)(k,2),V=x[0],y=x[1],O=Object(n.useState)(!1),F=Object(o.a)(O,2),w=F[0],j=F[1],M=function(e,a){var t=Object(s.a)({},c),n=t[e];n.touched=!0,n.value=a.target.value,_({form:t})},X=function(e){var a=c[e].value.split(" ").join(""),t=b[e].regex,n=Object(s.a)({},c),l=n[e];l.isValid=!1,t.forEach((function(e){new RegExp(e).test(a)&&(l.isValid=!0)})),_({form:n})};return l.a.createElement("div",{className:"FormContainer"},w?l.a.createElement("div",null,l.a.createElement("p",null,"\u041e\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u043e\u0439\u0448\u043b\u0430 \u0443\u0441\u043f\u0456\u0448\u043d\u043e"),l.a.createElement(f,{text:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438",onClick:e.closeHandler})):l.a.createElement("form",{className:"PaymentForm"},l.a.createElement("div",{className:"PaymentForm__Header"},l.a.createElement("div",{className:"Card"},l.a.createElement("p",{className:"Card__Heading"},l.a.createElement(v.a,{className:"Card__Circle",icon:C.a}),"\u041d\u043e\u0432\u0430 \u043a\u0430\u0440\u0442\u043a\u0430"),l.a.createElement("p",{className:"Card__Description"},"Visa, Mastercard"),l.a.createElement(v.a,{className:"Card__CardIcon",icon:C.b}))),l.a.createElement("div",{className:"PaymentForm__Body"},l.a.createElement("div",{className:"FormRow"},l.a.createElement("div",{className:"FormCol--wide"},l.a.createElement(p,{config:{control:i,mask:b.card.mask},onChange:M.bind(null,i.name),onBlur:X.bind(null,i.name)})),l.a.createElement("div",{className:"FormCol--narrow"},l.a.createElement(p,{config:{control:d,mask:b.expiryDate.mask},onChange:M.bind(null,d.name),onBlur:X.bind(null,d.name)}))),l.a.createElement("div",{className:"FormRow"},l.a.createElement("div",{className:"FormCol--wide"},l.a.createElement(p,{config:{control:u,mask:b.cardHolder.mask},onChange:M.bind(null,u.name),onBlur:X.bind(null,u.name)})),l.a.createElement("div",{className:"FormCol--narrow"},l.a.createElement(p,{config:{control:N,mask:b.CVV.mask},onChange:M.bind(null,N.name),onBlur:X.bind(null,N.name)})))),l.a.createElement("div",{className:"PaymentForm__Footer"},l.a.createElement(E,{name:"remember",checked:V,text:"\u0417\u0430\u043f\u0430\u043c'\u044f\u0442\u0430\u0442\u0438 \u0446\u044e \u043a\u0430\u0440\u0442\u043a\u0443",onChange:function(){y(!V)},tip:"\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0443 \u043c\u043e\u0436\u043d\u0430 \u0431\u0443\u0434\u0435 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0443 \u043a\u0430\u0440\u0442\u0443 i \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u0438 \u0432\u0432\u043e\u0434\u044f\u0447\u0438 \u0442\u0456\u043b\u044c\u043a\u0438 CVV"}),l.a.createElement("div",{className:"PaymentForm__actions"},l.a.createElement(f,{text:"\u0421\u043f\u043b\u0430\u0442\u0438\u0442\u0438 ".concat(e.value," UAH"),onClick:function(e){e.preventDefault();var a=Object.keys(c);if(a.forEach((function(e){c[e].touched=!0,X(e)})),a.every((function(e){return!0===c[e].isValid}))){var t=Object(s.a)({},a.reduce((function(e,a){return e[a]=c[a].value,e}),{}),{rememberCard:V});_({form:{card:Object(s.a)({},h.b),expiryDate:Object(s.a)({},h.d),cardHolder:Object(s.a)({},h.c),CVV:Object(s.a)({},h.a)}}),j(!0),console.log(t)}}}),l.a.createElement(g,{text:"\u0427\u0430\u0441 \u0434\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044f \u043f\u043b\u0430\u0442\u0435\u0436\u0443",final:+new Date+9e5})))))}),_=(t(32),function(e){var a=["Backdrop"];return e.isOpen&&a.push("open"),l.a.createElement("div",{onClick:e.onClick,className:a.join(" ")},e.children)}),k=(t(33),function(e){return l.a.createElement("span",{onClick:e.onClick,className:"CloseBtn"},"\xd7")}),x=t(10),V=t.n(x),y=(t(34),function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(_,{isOpen:!0,onClick:e.closeHandler}),l.a.createElement("div",{className:"Modal"},l.a.createElement("div",{className:"Modal__Header"},l.a.createElement("img",{className:"ModalLogo",src:V.a,alt:"Kasta Logo"}),l.a.createElement("div",{className:"ModalTotal"},l.a.createElement("span",{className:"ModalTotal__Label"},"\u0414\u043e \u043e\u043f\u043b\u0430\u0442\u0438"),l.a.createElement("span",{className:"ModalTotal__Value"},e.value," UAH")),l.a.createElement(k,{onClick:e.closeHandler})),l.a.createElement("div",{className:"Modal__Body"},l.a.Children.map(e.children,(function(a,t){return l.a.cloneElement(a,{closeHandler:e.closeHandler,value:e.value})}))),l.a.createElement("div",{className:"Modal__Footer"},l.a.createElement("div",{className:"FooterPayment"},l.a.createElement("img",{className:"FooterPayment__Image",src:"https://www.deac.eu/files/docs/text_image/big/deac-pci-logo1.png",alt:"PCI DSS Compilant"}),l.a.createElement("img",{className:"FooterPayment__Image",src:"https://www.nicepng.com/png/full/136-1366983_mastercard-securecode.png",alt:"Mastercard Securecode"}),l.a.createElement("img",{className:"FooterPayment__Image",src:"https://benyaizubrik.com/wp-content/uploads/verified-by-visa.png",alt:"Verified by Visa"})),l.a.createElement("div",{className:"FooterLogo"},l.a.createElement("img",{className:"ModalLogo",src:V.a,alt:"Kasta Logo"})))))}),O=(t(35),function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:"App"},l.a.createElement(f,{onClick:r.bind(null,!t),text:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432\u0438\u0434\u0436\u0435\u0442"}),t&&l.a.createElement(y,{closeHandler:r.bind(null,!t),value:1e6},l.a.createElement(N,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.17451c0e.chunk.js.map