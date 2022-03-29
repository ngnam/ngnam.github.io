(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{2002:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(5893),a=r(9008),i=r(8721),o=r.n(i),l=r(5794),c=r.n(l),s=r(1163),u=r(1664),f=r(7294);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=(0,s.withRouter)((function(e){var t=e.router,r=e.children,a=e.as,i=e.href,o=e.activeClassName,l=e.activeSubClassName,c=h(e,["router","children","as","href","activeClassName","activeSubClassName"]),s=f.Children.only(r),m=s.props.className||"",p=t.asPath.split("#")[0].split("?")[0],_=o||"active",y=l||"active-sub";i=i&&"/"!==i&&i.endsWith("/")?i.slice(0,-1):i,a=a&&"/"!==a&&a.endsWith("/")?a.slice(0,-1):a;var v=p===i||p===a?_:p.startsWith(i+"/")||p.startsWith(a+"/")?y:"",g="".concat(m," ").concat(v).trim();return(0,n.jsx)(u.default,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}({href:i,as:a},c,{children:f.cloneElement(s,{className:g||null})}))})),p="A portfolio website for Full-stack Software development";function _(e){var t=e.children,r=e.home;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale"}),(0,n.jsx)("meta",{name:"description",content:p}),(0,n.jsx)("meta",{property:"og:image",content:"/images/girl-g06b208c73_1920.jpg"}),(0,n.jsx)("meta",{name:"og:title",content:p}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("title",{children:p})]}),(0,n.jsxs)("header",{className:o().header,children:[r?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("img",{priority:"true",src:"https://api.daily.dev/devcards/0f93178ba5f1475d86b6618afbd2296e.png?r=s65",className:o().profileImage+" "+c().borderCircle,height:144,width:144,alt:"NamNguyen's Dev Card"})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(m,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{priority:"true",src:"https://api.daily.dev/devcards/0f93178ba5f1475d86b6618afbd2296e.png?r=s65",className:o().profileImage+" "+c().borderCircle,height:144,width:144,alt:"NamNguyen's Dev Card"})})})}),(0,n.jsxs)("ul",{className:o().menu,children:[(0,n.jsx)("li",{children:(0,n.jsx)(m,{href:"/blog",activeClassName:o().menu_li_active,children:(0,n.jsx)("a",{children:"Blog"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(m,{href:"/generator/css",activeClassName:o().menu_li_active,children:(0,n.jsx)("a",{children:"CSS generator Tools"})})})]})]}),(0,n.jsx)("main",{className:o().main,children:t}),!r&&(0,n.jsx)("div",{className:o().backToHome,children:(0,n.jsx)(m,{href:"/",children:(0,n.jsx)("a",{children:"\u2190 Back to home"})})}),(0,n.jsxs)("footer",{className:o().footer,children:[(0,n.jsx)("h3",{children:"Made with \u2764\ufe0f Nam Nguyen Van"}),(0,n.jsxs)("div",{className:o().footer_about,children:[(0,n.jsx)("a",{href:"#",children:"About"}),(0,n.jsx)("a",{href:"#",children:"GitHub"}),(0,n.jsx)("a",{href:"#",children:"CodePen"}),(0,n.jsx)("a",{href:"#",children:"Twitter"})]}),(0,n.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear().toString()]})]})]})})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,o=(i=r(7294))&&i.__esModule?i:{default:i},l=r(6273),c=r(387),s=r(7190);var u={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),i=o.default.useMemo((function(){var t=a(l.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,h=i.as,m=e.children,p=e.replace,_=e.shallow,y=e.scroll,v=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var g=(t=o.default.Children.only(m))&&"object"===typeof t&&t.ref,b=a(s.useIntersection({rootMargin:"200px"}),2),j=b[0],x=b[1],w=o.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);o.default.useEffect((function(){var e=x&&r&&l.isLocalURL(d),t="undefined"!==typeof v?v:n&&n.locale,a=u[d+"%"+h+(t?"%"+t:"")];e&&!a&&f(n,d,h,{locale:t})}),[h,d,x,v,r,n]);var C={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,i,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==o&&n.indexOf("#")>=0&&(o=!1),t[a?"replace":"push"](r,n,{shallow:i,locale:c,scroll:o}))}(e,n,d,h,p,_,y,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof v?v:n&&n.locale,O=n&&n.isLocaleDomain&&l.getDomainLocale(h,N,n&&n.locales,n&&n.domainLocales);C.href=O||l.addBasePath(l.addLocale(h,N,n&&n.defaultLocale))}return o.default.cloneElement(t,C)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,n=i.useRef(),s=a(i.useState(!1),2),u=s[0],f=s[1],d=i.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||u||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,i=n.observer,o=n.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return i.useEffect((function(){if(!l&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=r(7294),o=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},8721:function(e){e.exports={container:"layout_container__fbLkO",main:"layout_main__o_HW1",header:"layout_header__kY0Lt",backToHome:"layout_backToHome__9sjx_",footer:"layout_footer__dka_2",footer_about:"layout_footer_about__iWk8G",menu:"layout_menu__rRyk8",menu_li_active:"layout_menu_li_active__qFtf9",profileImage:"layout_profileImage__u3TLD"}},5794:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",headingMdDescription:"utils_headingMdDescription__z_UXD",headingMdContent:"utils_headingMdContent__dhlu5",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY"}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}}]);