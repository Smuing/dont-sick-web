(this.webpackJsonpdont_sick_test=this.webpackJsonpdont_sick_test||[]).push([[0],{35:function(t,e,c){},37:function(t,e,c){},40:function(t,e,c){"use strict";c.r(e);var n=c(16),o=c.n(n),s=c(28),i=c.n(s),a=(c(35),c(0),c(1),c(13)),r=(c(37),c(20)),l=c(25),u=(c(27),c(29)),d=Object(u.a)({apiKey:"AIzaSyDugiSdAbhcAv4kjvZIczRILR0cWnyoLE4",authDomain:"don-t-sick.firebaseapp.com",projectId:"don-t-sick",storageBucket:"don-t-sick.appspot.com",messagingSenderId:"713607862724",appId:"1:713607862724:web:5ada0cc3cdaa6370662c91"}),b=c(14);var f=function(){var t=Object(r.b)(d),e=Object(l.a)(),c=Object(n.useState)(""),o=Object(a.a)(c,2),s=o[0],i=o[1],u=Object(n.useState)(""),f=Object(a.a)(u,2),h=f[0],p=f[1],j=Object(n.useState)(""),g=Object(a.a)(j,2),A=g[0],y=g[1];return Object(n.useEffect)((function(){Object(r.c)(t,(function(c){if(c){console.log(c);var n=c.email;if(!n.includes("@sdh.hs.kr"))return alert("\ud559\uad50\uacc4\uc815\uc73c\ub85c\ub9cc \ub85c\uadf8\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4."),void Object(r.e)(t);n.includes("sdh19")?i("3".concat(n.substr(5,4))):n.includes("sdh20")?i("2".concat(n.substr(7,4))):n.includes("sdh21")&&i("1".concat(n.substr(5,4))),p(c.displayName);Object(l.b)(e,{vapidKey:"BLnmZ7MoMERjyVHv4b791C7j1_-xqcVi9aCrVWDDFovZSGDgK9FROae3J8Q7AWqTJwbQDc2Dk4LrU0zAEUVqfVQ"}).then((function(t){t?(console.log(t),y(t)):(console.log("No registration token available. Request permission to generate one."),alert("\uc54c\ub9bc \uad8c\ud55c\uc744 \ud5c8\uc6a9\ud574\uc8fc\uc138\uc694."))})).catch((function(t){console.log("An error occurred while retrieving token. ",t),alert("\uc54c\ub9bc \uad8c\ud55c\uc744 \ud5c8\uc6a9\ud574\uc8fc\uc138\uc694.")}))}else{var o=new r.a;o.setCustomParameters({login_hint:"sdh@sdh.hs.kr"}),Object(r.d)(t,o)}}))}),[t]),Object(l.c)(e,(function(t){console.log(t),alert("".concat(t.notification.title,"\n").concat(t.notification.body))})),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsxs)("p",{children:[s," ",h]}),Object(b.jsx)("p",{className:"App-link",onClick:function(){Object(r.e)(t)},children:"logout"}),Object(b.jsx)("p",{onClick:function(){return function(t,e){fetch("https://iid.googleapis.com/iid/v1/".concat(t,"/rel/topics/").concat(e),{method:"POST",headers:new Headers({Authorization:"key=AAAApiZX2cQ:APA91bGE4My7SUbJhjgtK66X8eADgEsxnBlebWlqIjfUw2YSxn43g3kZjH5mSIcHLdyH1Wfg0cwCWw8rv66tR_D2y3IyH3MCQf-9nfN4zH_SqyvqF-yOeVApflNV6bY_4SbwmgFzLKjp"})}).then((function(t){if(t.status<200||t.status>=400)throw new Error("Error Subscribing to topic: ".concat(t.status," - ").concat(t.text()));console.log('Subscribed to "'.concat(e,'"'))})).catch((function(t){console.error(t)}))}(A,"test")},children:"\uc54c\ub9bc \ubc1b\uae30"}),Object(b.jsx)("p",{onClick:function(){return function(t,e){var c={to:"/topics/".concat(e),registration_tokens:[t]};fetch("https://iid.googleapis.com/iid/v1:batchRemove",{method:"POST",headers:new Headers({Authorization:"key=AAAApiZX2cQ:APA91bGE4My7SUbJhjgtK66X8eADgEsxnBlebWlqIjfUw2YSxn43g3kZjH5mSIcHLdyH1Wfg0cwCWw8rv66tR_D2y3IyH3MCQf-9nfN4zH_SqyvqF-yOeVApflNV6bY_4SbwmgFzLKjp","Content-Type":"application/json"}),body:JSON.stringify(c)}).then((function(t){if(t.status<200||t.status>=400)throw new Error("Error Unsubscribing to topic: ".concat(t.status," - ").concat(t.text()));console.log('Unsubscribed to "'.concat(e,'"'))})).catch((function(t){console.error(t)}))}(A,"test")},children:"\uc54c\ub9bc \uc548\ubc1b\uae30"}),Object(b.jsx)("p",{onClick:function(){return t={message:"test"},"/topics/".concat(e="notice"),void fetch("https://fcm.googleapis.com/fcm/send",{method:"POST",headers:new Headers({Authorization:"key=AAAApiZX2cQ:APA91bGE4My7SUbJhjgtK66X8eADgEsxnBlebWlqIjfUw2YSxn43g3kZjH5mSIcHLdyH1Wfg0cwCWw8rv66tR_D2y3IyH3MCQf-9nfN4zH_SqyvqF-yOeVApflNV6bY_4SbwmgFzLKjp","Content-Type":"application/json"}),body:JSON.stringify({data:t,to:"/topics/".concat(e)})}).then((function(t){if(t.status<200||t.status>=400)throw new Error("Error ".concat(t.status," - ").concat(t.text()));console.log("Success")})).catch((function(t){console.error(t)}));var t,e},children:"\uc54c\ub9bc \ubcf4\ub0b4\uae30"})]})})},h=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(e){var c=e.getCLS,n=e.getFID,o=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),n(t),o(t),s(t),i(t)}))};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),h()}},[[40,1,2]]]);
//# sourceMappingURL=main.c1577e8a.chunk.js.map