(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{110:function(e,a,t){e.exports=t(121)},121:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(38),s=t.n(i),c=t(11),o=t(19),l=t(134),u=function(e){var a=e.pagina,t=e.setPagina;return r.a.createElement("div",{className:"semanticMenu"},r.a.createElement("div",{className:"semanticFirst"},r.a.createElement("div",{className:"semanticMenuText"},1===a?r.a.createElement("p",{className:"semanticMenuTextProduct"},"1-16 of 32 Products"):r.a.createElement("p",{className:"semanticMenuTextProduct"},"16-32 of 32 Products"))),r.a.createElement("div",{className:"semanticFlechas"},1===a?r.a.createElement(l.a,{circular:!0,icon:"arrow alternate circle right outline",onClick:function(){return t(2)}}):r.a.createElement(l.a,{circular:!0,icon:"arrow alternate circle left outline",onClick:function(){return t(1)}})))};var m=function(e){var a=e.pagina,t=e.setPagina,n=e.filtro;return e.SetFiltro,r.a.createElement("div",{className:"submenu"},r.a.createElement("h1",null,"Page ",a),n&&r.a.createElement("h1",null,"Filter: ",n),r.a.createElement(u,{pagina:a,setPagina:t}))},p=t(133),d=t(100),E=t(53),h=t(79),f=t.n(h),g=t(80),v=t.n(g),C=t(132),b=t(136),y=t(96),O=t.n(y);var N=function(e){var a=e.cost,t=e.points,n=r.a.useState(!1),i=Object(c.a)(n,2),s=i[0],o=i[1];return r.a.createElement(C.a,{onClose:function(){return o(!1)},onOpen:function(){return o(!0)},open:s,trigger:r.a.createElement(b.a,null,r.a.createElement("div",{className:"semanticCardNoCompraText"}," ","You need ",a-t," more"),r.a.createElement(d.a,{circular:!0,src:v.a,className:"semanticCardNoCompraCoin"})," ")},r.a.createElement(C.a.Header,null,"product not redeemed"),r.a.createElement(C.a.Content,{image:!0},r.a.createElement(d.a,{size:"medium",src:O.a,title:"expresi\xf3n png de pngtree.com",wrapped:!0}),r.a.createElement(C.a.Description,null,r.a.createElement(b.a,null,"You need : ",a-t," Points"),r.a.createElement("p",null,"You need more points, request them!!"))),r.a.createElement(C.a.Actions,null,r.a.createElement(l.a,{content:"Exit",labelPosition:"right",icon:"checkmark",onClick:function(){return o(!1)},positive:!0})))},U=t(98),j=t.n(U);function k(e){var a,t,n,r=e.usuarios,i=e.setUsuarios,s=e.fetched,c=e.setFetched,o=e.compra;s||fetch("https://coding-challenge-api.aerolab.co/user/me",{headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlmNzRmMDYwOGE4ODAwMTk1YjliZDgiLCJpYXQiOjE2MDQyODU2ODB9.ctaykhWrBlhUdTgGlnbksoRx3LwszENpALaY64K_OuY"}}).then((function(e){return e.json()})).then((function(e){c(!0),i({name:e.name,points:e.points,historial:e.redeemHistory}),a=e.name,t=e.points,n=e.redeemHistory,function(e){e.usuarios;var a=e.setUsuarios,t=e.name,n=e.coin,r=(e.compra,e.historial);fetch("https://coding-challenge-api.aerolab.co/products",{headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlmNzRmMDYwOGE4ODAwMTk1YjliZDgiLCJpYXQiOjE2MDQyODU2ODB9.ctaykhWrBlhUdTgGlnbksoRx3LwszENpALaY64K_OuY"}}).then((function(e){return e.json()})).then((function(e){a({name:t,points:n,products:e,historial:r})}))}({usuarios:r,setUsuarios:i,name:a,coin:t,compra:o,historial:n})}))}function D(e){var a=e.setCompra,t=e.id,n=e.setUsuarios,r=e.name,i=e.points,s=e.products,c=e.historial,o=(e.fetched,e.setFetched),l=e.cost,u=new XMLHttpRequest;u.open("POST","https://coding-challenge-api.aerolab.co/redeem"),u.setRequestHeader("Content-Type","application/json"),u.setRequestHeader("Accept","application/json"),u.setRequestHeader("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlmNzRmMDYwOGE4ODAwMTk1YjliZDgiLCJpYXQiOjE2MDQyODU2ODB9.ctaykhWrBlhUdTgGlnbksoRx3LwszENpALaY64K_OuY"),u.onreadystatechange=function(){4===this.readyState&&(o(!0),n({name:r,points:i-l,products:s,historial:c}),function(e){var a=e.setUsuarios,t=e.name,n=e.products,r=e.val;fetch("https://coding-challenge-api.aerolab.co/user/history",{headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlmNzRmMDYwOGE4ODAwMTk1YjliZDgiLCJpYXQiOjE2MDQyODU2ODB9.ctaykhWrBlhUdTgGlnbksoRx3LwszENpALaY64K_OuY"}}).then((function(e){return e.json()})).then((function(e){setTimeout((function(){a({name:t,points:r,products:n,historial:e})}),5e3)}))}({setUsuarios:n,name:r,points:i,products:s,historial:c,setCompra:a,cost:l,val:i-l}))};var m={productId:t};u.send(JSON.stringify(m))}var I=function(e){var a=e.image,t=e.category,n=e.nombre,i=e.setCompra,s=e.id,o=e.setUsuarios,u=e.name,m=e.points,E=e.products,h=e.historial,g=e.cost,v=r.a.useState(!1),y=Object(c.a)(v,2),O=y[0],N=y[1],U=r.a.useState(!1),k=Object(c.a)(U,2),I=k[0],w=k[1];return r.a.createElement(C.a,{onClose:function(){return N(!1)},onOpen:function(){return N(!0)},open:O,trigger:r.a.createElement("img",{className:"semanticCardCompra",title:"Comprar",src:f.a,onClick:function(){return D({setCompra:i,id:s,setUsuarios:o,name:u,points:m,products:E,historial:h,fetched:I,setFetched:w,cost:g})}})},r.a.createElement(C.a.Header,null,"You've redeem the product successfully"),r.a.createElement(C.a.Content,{image:!0},r.a.createElement(d.a,{size:"medium",src:j.a,wrapped:!0,title:"dinero png de pngtree.com"}),r.a.createElement(C.a.Description,null,r.a.createElement(b.a,null,"redeemed product"),r.a.createElement("div",{className:"card"},r.a.createElement(p.a,{color:"blue"},r.a.createElement(d.a,{src:a,wrapped:!0,ui:!1}),r.a.createElement(p.a.Content,null,r.a.createElement(p.a.Header,null,t),r.a.createElement(p.a.Meta,null,r.a.createElement("span",{className:"date"},n))))))),r.a.createElement(C.a.Actions,null,r.a.createElement(l.a,{content:"Great!",labelPosition:"right",icon:"checkmark",onClick:function(){return N(!1)},positive:!0})))},w=function(e){var a=e.nombre,t=e.category,n=e.image,i=e.cost,s=e.points,c=(e.compra,e.setCompra),o=e.id,l=e.usuarios,u=e.setUsuarios;return r.a.createElement("div",{className:"card"},r.a.createElement(p.a,{color:"blue"},r.a.createElement(p.a.Content,{extra:!0},r.a.createElement("span",{className:"span-semanticCard"},i>s?r.a.createElement(N,{cost:i,points:s}):r.a.createElement(I,{image:n,category:t,nombre:a,setCompra:c,id:o,setUsuarios:u,name:l.name,points:l.points,products:l.products,historial:l.historial,cost:i}))),r.a.createElement(d.a,{src:n,wrapped:!0,ui:!1}),r.a.createElement(p.a.Content,null,r.a.createElement(p.a.Header,null,t),r.a.createElement(p.a.Meta,null,r.a.createElement("span",{className:"date"},a)),r.a.createElement(p.a.Meta,null,r.a.createElement("span",{className:"date"}," ",r.a.createElement(E.a,{name:"money"},"Cost:",i))))))};var P=function(e){var a=e.usuarios,t=e.setUsuarios,n=e.pagina,i=e.setPagina,s=e.compra,c=e.setCompra,l=e.filtro,u=e.setFiltro,p=a.products?1===n?a.products.slice(0,16):a.products.slice(16,32):[],d=a.products?p.map((function(e){var n;return r.a.createElement(w,(n={nombre:e.name,image:e.img.url,createDate:e.createDate,cost:e.cost,key:e._id,category:e.category},Object(o.a)(n,"cost",e.cost),Object(o.a)(n,"points",a.points),Object(o.a)(n,"compra",s),Object(o.a)(n,"setCompra",c),Object(o.a)(n,"usuarios",a),Object(o.a)(n,"setUsuarios",t),Object(o.a)(n,"id",e._id),n))})):r.a.createElement("h1",null,"no products available");return r.a.createElement("div",null,r.a.createElement("div",{className:"cards"},d),r.a.createElement(m,{pagina:n,setPagina:i,filtro:l,setFiltro:u}))};var M=function(e){var a=e.pagina,t=e.setPagina,n=e.usuarios,i=e.setUsuarios,s=e.filtro,c=e.setFiltro;return r.a.createElement("div",{className:"semanticMenu"},r.a.createElement("div",{className:"semanticFirst"},r.a.createElement("div",{className:"semanticMenuText"},1===a?r.a.createElement("p",{className:"semanticMenuTextProduct"},"1-16 of 32 Products"):r.a.createElement("p",{className:"semanticMenuTextProduct"},"16-32 of 32 Products"),r.a.createElement("p",null,"Sort by:")),r.a.createElement(l.a,{animated:!0,circular:!0,onClick:function(){return function(e){var a=e.usuarios,t=e.setUsuarios,n=(e.filtro,e.setFiltro),r=a.name,i=a.points,s=a.products,c=a.historial;t({name:r,points:i,products:s.sort((function(e,a){return e.category>a.category?1:e.category<a.category?-1:0})),historial:c}),n("Category")}({usuarios:n,setUsuarios:i,filtro:s,setFiltro:c})}},r.a.createElement(l.a.Content,{visible:!0},"Category"),r.a.createElement(l.a.Content,{hidden:!0},r.a.createElement(E.a,{name:"arrow right"}))),r.a.createElement(l.a,{animated:!0,circular:!0,onClick:function(){return function(e){var a=e.usuarios,t=e.setUsuarios,n=(e.filtro,e.setFiltro),r=a.name,i=a.points,s=a.products,c=a.historial;t({name:r,points:i,products:s.sort((function(e,a){return e.cost-a.cost})),historial:c}),n("Lowest Price - Highest price")}({usuarios:n,setUsuarios:i,filtro:s,setFiltro:c})}},r.a.createElement(l.a.Content,{visible:!0},"Lowest Price"),r.a.createElement(l.a.Content,{hidden:!0},r.a.createElement(E.a,{name:"arrow right"}))),r.a.createElement(l.a,{animated:!0,circular:!0,onClick:function(){return function(e){var a=e.usuarios,t=e.setUsuarios,n=(e.filtro,e.setFiltro),r=a.name,i=a.points,s=a.products,c=a.historial;t({name:r,points:i,products:s.sort((function(e,a){return a.cost-e.cost})),historial:c}),n("Highest price - Lowest Price")}({usuarios:n,setUsuarios:i,filtro:s,setFiltro:c})}},r.a.createElement(l.a.Content,{visible:!0},"Highest price"),r.a.createElement(l.a.Content,{hidden:!0},r.a.createElement(E.a,{name:"arrow right"})))),r.a.createElement("div",{className:"semanticFlechas"},1===a?r.a.createElement(l.a,{circular:!0,icon:"arrow alternate circle right outline",onClick:function(){return t(2)}}):r.a.createElement(l.a,{circular:!0,icon:"arrow alternate circle left outline",onClick:function(){return t(1)}})))};var J=function(e){var a=e.usuarios,t=e.coin,n=e.name,i=e.setUsuarios,s=e.compra,o=e.setCompra,l=e.filtro,u=e.setFiltro,m=r.a.useState(1),p=Object(c.a)(m,2),d=p[0],E=p[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"menu"},r.a.createElement(M,{usuarios:a,setUsuarios:i,pagina:d,setPagina:E,filtro:l,setFiltro:u}),r.a.createElement("h1",null,"Page ",d),l&&r.a.createElement("h1",null,"Filter: ",l)),r.a.createElement(P,{name:n,coin:t,usuarios:a,setUsuarios:i,pagina:d,setPagina:E,compra:s,setCompra:o,filtro:l,setFiltro:u}))},Y=t(84),F=t.n(Y);t(56);var x=function(e){var a=e.usuarios,t=e.name,n=e.coin,i=e.setUsuarios,s=e.compra,c=e.setCompra,o=e.filtro,l=e.setFiltro;return r.a.createElement("div",null,r.a.createElement("div",{className:"container-img-main"},r.a.createElement("img",{className:"img-main",src:F.a,alt:F.a,height:"20%",width:"100%"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"text-main"},"Electronics"))),r.a.createElement(J,{name:t,coin:n,usuarios:a,setUsuarios:i,compra:s,setCompra:c,filtro:o,setFiltro:l}))},R=t(72),T=function(e){var a=e.coin;return r.a.createElement("div",null,r.a.createElement(l.a,{as:"div",labelPosition:"right"},r.a.createElement(l.a,{icon:!0},r.a.createElement(E.a,{name:"money"})),r.a.createElement(R.a,{as:"a",basic:!0,pointing:"left"},a)))};var H=function(e){var a=e.usuarios,t=e.setUsuarios,n=e.name,i=e.coin,s=e.products,o=e.historial,u=e.compra,m=r.a.useState(!1),p=Object(c.a)(m,2),d=p[0],h=p[1],f=r.a.useState(0),g=Object(c.a)(f,2),v=g[0],C=g[1],b=function(e){!function(e){e.usuarios;var a=e.setUsuarios,t=e.setFetched,n=e.numberVal,r=e.setNumber,i=e.name,s=e.coin,c=e.products,o=e.historial,l=new XMLHttpRequest;l.open("POST","https://coding-challenge-api.aerolab.co/user/points"),l.setRequestHeader("Content-Type","application/json"),l.setRequestHeader("Accept","application/json"),l.setRequestHeader("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlmNzRmMDYwOGE4ODAwMTk1YjliZDgiLCJpYXQiOjE2MDQyODU2ODB9.ctaykhWrBlhUdTgGlnbksoRx3LwszENpALaY64K_OuY"),l.onreadystatechange=function(){4===this.readyState&&(t(!0),a({name:i,points:s+n,products:c,historial:o}),r(n),console.log("Status:",this.status),console.log("Headers:",this.getAllResponseHeaders()),console.log("Body:",this.responseText))};var u={amount:n};l.send(JSON.stringify(u))}({usuarios:a,setUsuarios:t,fetched:d,setFetched:h,numberVal:e,number:v,setNumber:C,name:n,coin:i,products:s,historial:o,compra:u})};return r.a.createElement("div",null,r.a.createElement(l.a,{as:"div",labelPosition:"right",onClick:function(){return b(1e3)}},r.a.createElement(l.a,{icon:!0},r.a.createElement(E.a,{name:"money"})),r.a.createElement(R.a,{as:"a",basic:!0,pointing:"left"},"1000")),r.a.createElement(l.a,{as:"div",labelPosition:"right",onClick:function(){return b(5e3)}},r.a.createElement(l.a,{icon:!0},r.a.createElement(E.a,{name:"money"})),r.a.createElement(R.a,{as:"a",basic:!0,pointing:"left"},"5000")),r.a.createElement(l.a,{as:"div",labelPosition:"right",onClick:function(){return b(7500)}},r.a.createElement(l.a,{icon:!0},r.a.createElement(E.a,{name:"money"})),r.a.createElement(R.a,{as:"a",basic:!0,pointing:"left"},"7500")),v>0&&r.a.createElement("h1",null," you increased your points in: ",v))};var z=function(e){var a=e.usuarios,t=e.setUsuarios,n=e.name,i=e.coin,s=e.products,o=e.historial,u=e.compra,m=r.a.useState(!1),p=Object(c.a)(m,2),d=p[0],h=p[1];return r.a.createElement(C.a,{closeIcon:!0,open:d,trigger:r.a.createElement(l.a,{circular:!0},"More Points"),onClose:function(){return h(!1)},onOpen:function(){return h(!0)}},r.a.createElement(b.a,{icon:"money",content:"Increase points"}),r.a.createElement(C.a.Content,null,r.a.createElement("p",null,"\xbf Do you want more points??"),r.a.createElement("p",null,"Please choose the number of Points you want"),r.a.createElement(H,{usuarios:a,setUsuarios:t,name:n,coin:i,products:s,historial:o,compra:u})),r.a.createElement(C.a.Actions,null,r.a.createElement(l.a,{color:"green",onClick:function(){return h(!1)}},r.a.createElement(E.a,{name:"checkmark"})," Close")))},A=t(99),S=t.n(A),L=function(e){var a=e.name,t=e.category,n=e.image;return r.a.createElement("div",{className:"card"},r.a.createElement(p.a,null,r.a.createElement(p.a.Content,{extra:!0}),r.a.createElement(d.a,{src:n,wrapped:!0,ui:!1}),r.a.createElement(p.a.Content,null,r.a.createElement(p.a.Header,null,t),r.a.createElement(p.a.Meta,null,r.a.createElement("span",{className:"date"},a)))))},B=function(e){var a=e.usuarios,t=r.a.useState(!1),n=Object(c.a)(t,2),i=n[0],s=n[1],u=a.historial?a.historial.map((function(e){var t;return r.a.createElement(L,(t={name:e.name,image:e.img.url,createDate:e.createDate,cost:e.cost,key:e.createDate,category:e.category},Object(o.a)(t,"cost",e.cost),Object(o.a)(t,"points",a.points),t))})):r.a.createElement("h1",null,"no products exchanged");return r.a.createElement(C.a,{open:i,onClose:function(){return s(!1)},onOpen:function(){return s(!0)},trigger:r.a.createElement(l.a,{circular:!0},"RedeemHistory")},r.a.createElement(C.a.Header,null,"RedeemHistory"),r.a.createElement(C.a.Content,{image:!0,scrolling:!0},r.a.createElement(d.a,{circular:!0,size:"medium",src:S.a,wrapped:!0}),r.a.createElement(C.a.Description,null,r.a.createElement("div",{className:"cards"},u))),r.a.createElement(C.a.Actions,null,r.a.createElement(l.a,{onClick:function(){return s(!1)},primary:!0},"Great! ",r.a.createElement(E.a,{name:"chevron right"}))))},G=function(e){var a=e.name,t=e.coin,n=e.usuarios,i=e.setUsuarios,s=e.products,c=e.historial,o=e.compra;return r.a.createElement(b.a,{as:"h2",className:"semanticHeader"},r.a.createElement(d.a,{circular:!0,src:"https://react.semantic-ui.com/images/avatar/large/patrick.png"})," ",r.a.createElement("div",{className:"user"},a),r.a.createElement("div",{className:"points"},r.a.createElement(T,{coin:t})),r.a.createElement("div",{className:"modal-points"},r.a.createElement(z,{usuarios:n,setUsuarios:i,name:a,coin:t,products:s,historial:c,compra:o})),r.a.createElement("div",{className:"semanticModalHistory"},r.a.createElement(B,{usuarios:n})))};var Q=function(){var e=r.a.useState(0),a=Object(c.a)(e,2),t=a[0],i=a[1],s=r.a.useState(!1),o=Object(c.a)(s,2),l=o[0],u=o[1],m=r.a.useState(!1),p=Object(c.a)(m,2),d=p[0],E=p[1],h=r.a.useState(""),f=Object(c.a)(h,2),g=f[0],v=f[1];Object(n.useEffect)((function(){k({usuarios:t,setUsuarios:i,fetched:l,setFetched:u,compra:d})}),[l,t]);var C=document.createElement("link");return C.rel="stylesheet",C.href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css",document.head.appendChild(C),r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(G,{name:t.name,coin:t.points,usuarios:t,setUsuarios:i,products:t.products,historial:t.historial,compra:d})),r.a.createElement(x,{usuarios:t,setUsuarios:i,name:t.name,coin:t.points,compra:d,setCompra:E,filtro:g,setFiltro:v}))};function X(){return r.a.createElement("div",{className:"app"},r.a.createElement(Q,null))}var W=document.getElementById("root");s.a.render(r.a.createElement(X,null),W)},56:function(e,a,t){},79:function(e,a,t){e.exports=t.p+"static/media/buy-blue.2f11a957.svg"},80:function(e,a,t){e.exports=t.p+"static/media/coin.4669120c.svg"},84:function(e,a,t){e.exports=t.p+"static/media/main.f0b98264.png"},96:function(e,a,t){e.exports=t.p+"static/media/cry.b8bda255.png"},98:function(e,a,t){e.exports=t.p+"static/media/happy.d016bdb2.png"},99:function(e,a,t){e.exports=t.p+"static/media/compras.49efb318.png"}},[[110,1,2]]]);
//# sourceMappingURL=main.85c30419.chunk.js.map