(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84],{8515:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generator/css",function(){return t(7589)}])},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],s=!0,o=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(l){o=!0,a=l}finally{try{s||null==t.return||t.return()}finally{if(o)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var i,s=(i=t(7294))&&i.__esModule?i:{default:i},o=t(6273),l=t(387),c=t(7190);var f={};function d(e,n,t,r){if(e&&o.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(a?"%"+a:"")]=!0}}var u=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),i=s.default.useMemo((function(){var n=a(o.resolveHref(r,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?o.resolveHref(r,e.as):i||t}}),[r,e.href,e.as]),u=i.href,x=i.as,m=e.children,h=e.replace,p=e.shallow,y=e.scroll,j=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var g=(n=s.default.Children.only(m))&&"object"===typeof n&&n.ref,b=a(c.useIntersection({rootMargin:"200px"}),2),v=b[0],w=b[1],N=s.default.useCallback((function(e){v(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,v]);s.default.useEffect((function(){var e=w&&t&&o.isLocalURL(u),n="undefined"!==typeof j?j:r&&r.locale,a=f[u+"%"+x+(n?"%"+n:"")];e&&!a&&d(r,u,x,{locale:n})}),[x,u,w,j,t,r]);var k={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,s,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),n[a?"replace":"push"](t,r,{shallow:i,locale:l,scroll:s}))}(e,r,u,x,h,p,y,j)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(u)&&d(r,u,x,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var _="undefined"!==typeof j?j:r&&r.locale,S=r&&r.isLocaleDomain&&o.getDomainLocale(x,_,r&&r.locales,r&&r.domainLocales);k.href=S||o.addBasePath(o.addLocale(x,_,r&&r.defaultLocale))}return s.default.cloneElement(n,k)};n.default=u},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],s=!0,o=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(l){o=!0,a=l}finally{try{s||null==t.return||t.return()}finally{if(o)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,r=i.useRef(),c=a(i.useState(!1),2),f=c[0],d=c[1],u=i.useCallback((function(e){r.current&&(r.current(),r.current=void 0),t||f||e&&e.tagName&&(r.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,i=r.observer,s=r.elements;return s.set(e,n),i.observe(e),function(){s.delete(e),i.unobserve(e),0===s.size&&(i.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return i.useEffect((function(){if(!o&&!f){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),[u,f]};var i=t(7294),s=t(9311),o="undefined"!==typeof IntersectionObserver;var l=new Map},7589:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(5893),a=t(5988),i=t(9008),s=t(1664);function o(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{className:"jsx-5f675d611554582",children:"CSS Generator tool"}),(0,r.jsx)("meta",{name:"description",content:"CSS Generator tool",className:"jsx-5f675d611554582"})]}),(0,r.jsx)("header",{className:"jsx-5f675d611554582 header",children:(0,r.jsx)("div",{className:"jsx-5f675d611554582 container",children:(0,r.jsx)("h1",{className:"jsx-5f675d611554582 title",children:"CSS Generator Tool"})})}),(0,r.jsx)("section",{className:"jsx-5f675d611554582 category",children:(0,r.jsxs)("div",{className:"jsx-5f675d611554582 container",children:[(0,r.jsx)("div",{className:"jsx-5f675d611554582 item_category",children:(0,r.jsx)(s.default,{href:"/generator/css/box-shadow-css-generator",children:(0,r.jsx)("a",{className:"jsx-5f675d611554582",children:"Box Shadow"})})}),(0,r.jsx)("div",{className:"jsx-5f675d611554582 item_category",children:(0,r.jsx)(s.default,{href:"/generator/css/text-shadow-css-generator",children:(0,r.jsx)("a",{className:"jsx-5f675d611554582",children:"Text Shadow"})})}),(0,r.jsx)("div",{className:"jsx-5f675d611554582 item_category",children:(0,r.jsx)("a",{className:"jsx-5f675d611554582",children:"Gradient"})}),(0,r.jsx)("div",{className:"jsx-5f675d611554582 item_category",children:(0,r.jsx)("a",{className:"jsx-5f675d611554582",children:"CSS Cursor"})}),(0,r.jsx)("div",{className:"jsx-5f675d611554582 item_category",children:(0,r.jsx)("a",{className:"jsx-5f675d611554582",children:"CSS Border"})}),(0,r.jsx)("div",{className:"jsx-5f675d611554582 item_category",children:(0,r.jsx)("a",{className:"jsx-5f675d611554582",children:"CSS Border radius"})}),(0,r.jsx)("div",{className:"jsx-5f675d611554582 item_category",children:(0,r.jsx)("a",{className:"jsx-5f675d611554582",children:"Transform"})}),(0,r.jsx)("div",{className:"jsx-5f675d611554582 item_category",children:(0,r.jsx)("a",{className:"jsx-5f675d611554582",children:"RGBA & HEX"})}),(0,r.jsx)("div",{className:"jsx-5f675d611554582 item_category",children:(0,r.jsx)("a",{className:"jsx-5f675d611554582",children:"Filter"})}),(0,r.jsx)("div",{className:"jsx-5f675d611554582 item_category",children:(0,r.jsx)("a",{className:"jsx-5f675d611554582",children:"GRID"})})]})}),(0,r.jsx)(a.default,{id:"5f675d611554582",children:".header.jsx-5f675d611554582{background-color:#fff;\nheight:60px;\nbox-shadow:1px 3px 1px -3px rgb(0 0 0 / 75%);\n-webkit-box-shadow:1px 3px 1px -3px rgb(0 0 0 / 75%);\n-moz-box-shadow:1px 3px 1px -3px rgb(0 0 0 / 75%)}\n.container.jsx-5f675d611554582{max-width:100rem;\nheight:100%;\nmargin:0 auto;\npadding:0 0.5rem;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nflex-wrap:wrap}\n.category.jsx-5f675d611554582{margin-top:.5rem}\n.item_category.jsx-5f675d611554582{width:calc(100% / 5);\nheight:100px;\nbackground:blue;\nmargin:0.5rem;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\ncursor:pointer}\n.item_category.jsx-5f675d611554582>a.jsx-5f675d611554582{width:100%;\nheight:100%;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-justify-content:center;\njustify-content:center;\npadding:0.5rem;\ncolor:#fff}"})]})}},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[12,774,888,179],(function(){return n=8515,e(e.s=n);var n}));var n=e.O();_N_E=n}]);