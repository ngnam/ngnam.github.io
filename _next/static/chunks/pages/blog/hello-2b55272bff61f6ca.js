(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{5486:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/hello",function(){return t(5619)}])},5619:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return d}});var o=t(5893),i=t(9008),r=t(5794),l=t.n(r),c=t(7200),a=t(7294);function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),o.forEach((function(e){u(n,e,t[e])}))}return n}var s=function(){var n=(0,a.useState)(!0),e=n[0],t=n[1],o=(0,a.useState)((function(){return{since:void 0,online:e}})),i=o[0],r=o[1];return(0,a.useEffect)((function(){t(navigator.onLine);var n=function(){return navigator.connection||navigator.mozConnection||navigator.webkitConnection||null},e=function(){r((function(n){return console.log("handleOnline",n),f({},n,{online:!0,since:(new Date).toString()})}))},o=function(){r((function(n){return console.log("handleOffline",n),f({},n,{online:!1,since:(new Date).toString()})}))},i=function(){r((function(e){return console.log(e),f({},e,function(){var e=n();return e?{rtt:e.rtt,type:e.type,saveData:e.saveData,downLink:e.downLink,downLinkMax:e.downLinkMax,effectiveType:e.effectiveType}:{}}())}))};window.addEventListener("online",e),window.addEventListener("offline",o);var l=n();return null===l||void 0===l||l.addEventListener("change",i),function(){window.removeEventListener("online",e),window.removeEventListener("offline",o),null===l||void 0===l||l.removeEventListener("change",i)}}),[]),i};function d(){var n=s();return(0,o.jsxs)(c.Z,{children:[(0,o.jsxs)(i.default,{children:[(0,o.jsx)("title",{children:"Hello world"}),(0,o.jsx)("meta",{name:"description",content:"Hello world page"})]}),(0,o.jsxs)("article",{className:l().headingMd,children:[(0,o.jsx)("h1",{className:"title",children:"Hello world"}),(0,o.jsx)("p",{children:"(This is a sample Hello world.)"}),JSON.stringify(n)]})]})}}},function(n){n.O(0,[200,774,888,179],(function(){return e=5486,n(n.s=e);var e}));var e=n.O();_N_E=e}]);