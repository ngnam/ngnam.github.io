(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84],{8515:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generator/css",function(){return r(7589)}])},8418:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,c,a=[],s=!0,l=!1;try{for(r=r.call(e);!(s=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);s=!0);}catch(o){l=!0,c=o}finally{try{s||null==r.return||r.return()}finally{if(l)throw c}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,s=(a=r(7294))&&a.__esModule?a:{default:a},l=r(6273),o=r(387),i=r(7190);var f={};function d(e,n,r,t){if(e&&l.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var c=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;f[n+"%"+r+(c?"%"+c:"")]=!0}}var u=function(e){var n,r=!1!==e.prefetch,t=o.useRouter(),a=s.default.useMemo((function(){var n=c(l.resolveHref(t,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?l.resolveHref(t,e.as):a||r}}),[t,e.href,e.as]),u=a.href,x=a.as,m=e.children,h=e.replace,j=e.shallow,p=e.scroll,y=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var g=(n=s.default.Children.only(m))&&"object"===typeof n&&n.ref,b=c(i.useIntersection({rootMargin:"200px"}),2),v=b[0],w=b[1],k=s.default.useCallback((function(e){v(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,v]);s.default.useEffect((function(){var e=w&&r&&l.isLocalURL(u),n="undefined"!==typeof y?y:t&&t.locale,c=f[u+"%"+x+(n?"%"+n:"")];e&&!c&&d(t,u,x,{locale:n})}),[x,u,w,y,r,t]);var N={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,c,a,s,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==s&&t.indexOf("#")>=0&&(s=!1),n[c?"replace":"push"](r,t,{shallow:a,locale:o,scroll:s}))}(e,t,u,x,h,j,p,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(u)&&d(t,u,x,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var _="undefined"!==typeof y?y:t&&t.locale,C=t&&t.isLocaleDomain&&l.getDomainLocale(x,_,t&&t.locales,t&&t.domainLocales);N.href=C||l.addBasePath(l.addLocale(x,_,t&&t.defaultLocale))}return s.default.cloneElement(n,N)};n.default=u},7190:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,c,a=[],s=!0,l=!1;try{for(r=r.call(e);!(s=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);s=!0);}catch(o){l=!0,c=o}finally{try{s||null==r.return||r.return()}finally{if(l)throw c}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!l,t=a.useRef(),i=c(a.useState(!1),2),f=i[0],d=i[1],u=a.useCallback((function(e){t.current&&(t.current(),t.current=void 0),r||f||e&&e.tagName&&(t.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=o.get(n);if(r)return r;var t=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return o.set(n,r={id:n,observer:c,elements:t}),r}(r),c=t.id,a=t.observer,s=t.elements;return s.set(e,n),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),o.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return a.useEffect((function(){if(!l&&!f){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),[u,f]};var a=r(7294),s=r(9311),l="undefined"!==typeof IntersectionObserver;var o=new Map},7589:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var t=r(5893),c=r(5988),a=r(9008),s=r(1664),l=r(1163);function o(){var e=(0,l.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{className:"jsx-cf654901c727fde8",children:"CSS Generator tool"}),(0,t.jsx)("meta",{name:"description",content:"CSS Generator tool",className:"jsx-cf654901c727fde8"})]}),(0,t.jsx)("header",{className:"jsx-cf654901c727fde8 header",children:(0,t.jsxs)("div",{className:"jsx-cf654901c727fde8 container",children:[(0,t.jsx)("h1",{className:"jsx-cf654901c727fde8 title",children:"CSS Generator Tool"}),(0,t.jsx)("span",{onClick:function(){return e.back()},className:"jsx-cf654901c727fde8 link-back",children:(0,t.jsxs)("a",{className:"jsx-cf654901c727fde8",children:[(0,t.jsx)("span",{className:"jsx-cf654901c727fde8",children:"\u2190"})," Back"]})})]})}),(0,t.jsx)("section",{className:"jsx-cf654901c727fde8 category",children:(0,t.jsxs)("div",{className:"jsx-cf654901c727fde8 container",children:[(0,t.jsx)("div",{className:"jsx-cf654901c727fde8 item_category",children:(0,t.jsx)(s.default,{href:"/generator/css/box-shadow-css-generator",children:(0,t.jsx)("a",{className:"jsx-cf654901c727fde8",children:"Box Shadow"})})}),(0,t.jsx)("div",{className:"jsx-cf654901c727fde8 item_category",children:(0,t.jsx)(s.default,{href:"/generator/css/text-shadow-css-generator",children:(0,t.jsx)("a",{className:"jsx-cf654901c727fde8",children:"Text Shadow"})})}),(0,t.jsx)("div",{className:"jsx-cf654901c727fde8 item_category",children:(0,t.jsx)(s.default,{href:"/generator/css/css-cursor-demonstrator-and-generator",children:(0,t.jsx)("a",{className:"jsx-cf654901c727fde8",children:"CSS Cursor"})})}),(0,t.jsx)("div",{className:"jsx-cf654901c727fde8 item_category",children:(0,t.jsx)(s.default,{href:"/generator/css/border-css-generator",children:(0,t.jsx)("a",{className:"jsx-cf654901c727fde8",children:"Border CSS Generator"})})}),(0,t.jsx)("div",{className:"jsx-cf654901c727fde8 item_category",children:(0,t.jsx)(s.default,{href:"/generator/css/border-radius-css-generator",children:(0,t.jsx)("a",{className:"jsx-cf654901c727fde8",children:"Border Radius"})})}),(0,t.jsxs)("div",{className:"jsx-cf654901c727fde8 item_category",children:[(0,t.jsx)("a",{className:"jsx-cf654901c727fde8",children:"Gradient"})," ",(0,t.jsx)("small",{style:{backgroundColor:"yellow"},className:"jsx-cf654901c727fde8",children:"I'm working"})]}),(0,t.jsxs)("div",{className:"jsx-cf654901c727fde8 item_category",children:[(0,t.jsx)("a",{className:"jsx-cf654901c727fde8",children:"Transform"})," ",(0,t.jsx)("small",{style:{backgroundColor:"yellow"},className:"jsx-cf654901c727fde8",children:"I'm working"})]}),(0,t.jsxs)("div",{className:"jsx-cf654901c727fde8 item_category",children:[(0,t.jsx)("a",{className:"jsx-cf654901c727fde8",children:"RGBA & HEX"})," ",(0,t.jsx)("small",{style:{backgroundColor:"yellow"},className:"jsx-cf654901c727fde8",children:"I'm working"})]}),(0,t.jsxs)("div",{className:"jsx-cf654901c727fde8 item_category",children:[(0,t.jsx)("a",{className:"jsx-cf654901c727fde8",children:"Filter"})," ",(0,t.jsx)("small",{style:{backgroundColor:"yellow"},className:"jsx-cf654901c727fde8",children:"I'm working"})]}),(0,t.jsxs)("div",{className:"jsx-cf654901c727fde8 item_category",children:[(0,t.jsx)("a",{className:"jsx-cf654901c727fde8",children:"GRID"})," ",(0,t.jsx)("small",{style:{backgroundColor:"yellow"},className:"jsx-cf654901c727fde8",children:"I'm working"})]})]})}),(0,t.jsx)(c.default,{id:"cf654901c727fde8",children:".header.jsx-cf654901c727fde8{background-color:#fff;\nheight:60px;\nbox-shadow:1px 3px 1px -3px rgb(0 0 0 / 75%);\n-webkit-box-shadow:1px 3px 1px -3px rgb(0 0 0 / 75%);\n-moz-box-shadow:1px 3px 1px -3px rgb(0 0 0 / 75%)}\n.container.jsx-cf654901c727fde8{max-width:100rem;\nheight:100%;\nmargin:0 auto;\npadding:0 0.5rem;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nflex-wrap:wrap}\n.category.jsx-cf654901c727fde8{margin-top:.5rem}\n.item_category.jsx-cf654901c727fde8{width:calc(100% / 5);\nheight:100px;\nbackground:blue;\nmargin:0.5rem;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\ncursor:pointer}\n.item_category.jsx-cf654901c727fde8>a.jsx-cf654901c727fde8{width:100%;\nheight:100%;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-justify-content:center;\njustify-content:center;\npadding:0.5rem;\ncolor:#fff}\n.link-back.jsx-cf654901c727fde8{margin-left:20vw;\ncursor:pointer}"})]})}},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[285,774,888,179],(function(){return n=8515,e(e.s=n);var n}));var n=e.O();_N_E=n}]);