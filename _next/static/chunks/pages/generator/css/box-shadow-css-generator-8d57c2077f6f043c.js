(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{4184:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);i&&e.push(i)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var c in t)r.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},640:function(e,n,t){"use strict";var r=t(1742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,n){var t,a,i,c,s,l,f=!1;n||(n={}),t=n.debug||!1;try{if(i=r(),c=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),n.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[n.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(n.format,e);n.onCopy&&(r.preventDefault(),n.onCopy(r.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");f=!0}catch(d){t&&console.error("unable to copy using execCommand: ",d),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",e),n.onCopy&&n.onCopy(window.clipboardData),f=!0}catch(d){t&&console.error("unable to copy using clipboardData: ",d),t&&console.error("falling back to prompt"),a=function(e){var n=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,n)}("message"in n?n.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),l&&document.body.removeChild(l),i()}return f}},162:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generator/css/box-shadow-css-generator",function(){return t(922)}])},5734:function(e,n,t){"use strict";var r=t(5893),o=t(7294),a=t(3858),i=t.n(a);t(4184);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.Z=function(e){var n=(0,o.useState)(!1),t=n[0],a=n[1],c=e.label,f=e.errorMessage,d=e.onChange,u=(e.id,l(e,["label","errorMessage","onChange","id"])),p=function(e){a(!0)};return!u.hidden&&(0,r.jsxs)("div",{className:i().formInput,children:[(0,r.jsx)("label",{htmlFor:u.name,children:c}),function(){switch(u.type){case"checkbox":return(0,r.jsxs)("div",{className:i().formInputpn,children:[(0,r.jsx)("input",s({},u,{checked:u.checked,onChange:d})),(0,r.jsx)("div",{className:i().currentValue,children:u.checked?"On":"Off"})]});case"select":return(0,r.jsx)("div",{className:i().formInputpn,children:(0,r.jsxs)("select",s({onChange:d},u,{children:[(0,r.jsx)("option",{value:"",children:"--choose--"}),u.options.map((function(e,n){return(0,r.jsx)("option",{value:e.value,children:e.label},n)}))]}))});default:return(0,r.jsxs)("div",{className:i().formInputpn,children:[(0,r.jsx)("input",s({},u,{onChange:d,onBlur:p,onFocus:function(){return"confirmPassword"===u.name&&a(!0)},focused:t.toString()})),(0,r.jsxs)("div",{className:i().currentValue,children:["".concat(u.value)," ",u.unit?u.unit:""]})]})}}(),(0,r.jsx)("span",{children:f})]})}},922:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(5893),o=t(5988),a=t(9008),i=t(5734),c=t(7294),s=t(4300),l=t(1163);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}function u(){var e=(0,l.useRouter)(),n=(0,c.useRef)(null),t=(0,c.useState)({hsl:10,vsl:10,blurradius:5,spreadradius:0,sdc:"#000000",sdcrgbaCol:"",sdo:.75,inset:!1}),u=t[0],p=t[1],m=(0,c.useState)("10px 10px 5px 3px rgba(0,0,0,0.75)"),x=m[0],b=m[1],h=(0,c.useState)(null),y=h[0],g=h[1];(0,c.useEffect)((function(){b("".concat(u.hsl,"px ").concat(u.vsl,"px ").concat(u.blurradius,"px ").concat(u.spreadradius,"px ").concat(u.sdcrgbaCol||"rgba(0,0,0,0.7)").concat(u.inset?" inset":""));var e="box-shadow: ".concat(x,"; \n-webkit-box-shadow: ").concat(x,";\n-moz-box-shadow: ").concat(x,";\n-o-box-shadow: ").concat(x,";");n.current.value=e,g(e)}),[x,u]);var j=function(e){if("checkbox"===e.target.type)console.log(e.target.checked),p(d({},u,f({},e.target.name,!u[e.target.name])));else if("color"===e.target.type){var n,t=u.sdo,r=e.target.value,o="rgba("+parseInt(r.slice(-6,-4),16)+","+parseInt(r.slice(-4,-2),16)+","+parseInt(r.slice(-2),16)+","+t+")";p(d({},u,(f(n={},e.target.name,r),f(n,"sdcrgbaCol",o),n)))}else if("sdo"===e.target.name){var a;r=u.sdc,t=e.target.value,o="rgba("+parseInt(r.slice(-6,-4),16)+","+parseInt(r.slice(-4,-2),16)+","+parseInt(r.slice(-2),16)+","+t+")";p(d({},u,(f(a={},e.target.name,t),f(a,"sdcrgbaCol",o),a)))}else p(d({},u,f({},e.target.name,e.target.value)))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{className:"jsx-89f7860f87774d9d",children:"Box Shadow"}),(0,r.jsx)("meta",{name:"description",content:"Box Shadow CSS Generator tool - a product by nguyen van nam 0928351036",className:"jsx-89f7860f87774d9d"})]}),(0,r.jsx)("header",{className:"jsx-89f7860f87774d9d",children:(0,r.jsxs)("div",{className:"jsx-89f7860f87774d9d container",children:[(0,r.jsx)("h1",{className:"jsx-89f7860f87774d9d",children:"A Product of Nguyen Van Nam"}),(0,r.jsx)("h3",{className:"jsx-89f7860f87774d9d",children:"Box Shadow"}),(0,r.jsx)("span",{onClick:function(){return e.back()},className:"jsx-89f7860f87774d9d link-back",children:(0,r.jsxs)("a",{className:"jsx-89f7860f87774d9d",children:[(0,r.jsx)("span",{className:"jsx-89f7860f87774d9d",children:"\u2190"})," Back"]})})]})}),(0,r.jsxs)("section",{className:"jsx-89f7860f87774d9d container",children:[(0,r.jsx)("div",{className:"jsx-89f7860f87774d9d item-container",children:(0,r.jsxs)("form",{className:"jsx-89f7860f87774d9d",children:[(0,r.jsx)("h1",{className:"jsx-89f7860f87774d9d",children:"Box Shadow Options"}),[{id:1,name:"hsl",type:"range",min:-200,max:200,step:1,label:"Horizontal Shadow Length",required:!1,unit:"px"},{id:2,name:"vsl",type:"range",min:-200,max:200,step:1,label:"Vertical Shadow Length",unit:"px"},{id:3,name:"blurradius",type:"range",min:0,max:400,step:1,label:"Blur Radius",unit:"px"},{id:4,name:"spreadradius",type:"range",min:-200,max:200,step:1,label:"Spread Radius",unit:"px"},{id:5,name:"sdc",type:"color",placeholder:"Shadow Color",label:"Shadow Color"},{id:6,name:"sdcrgbaCol",type:"colorPreview"},{id:7,name:"sdo",type:"range",min:0,max:1,step:.01,label:"Shadow Color Opacity"},{id:8,name:"inset",type:"checkbox",label:"Inset"}].map((function(e){return"checkbox"===e.type?(0,r.jsx)(i.Z,d({},e,{checked:u[e.name],onChange:j}),e.id):(0,r.jsx)(i.Z,d({},e,{value:u[e.name],onChange:j}),e.id)}))]})}),(0,r.jsxs)("div",{className:"jsx-89f7860f87774d9d item-container box",children:[(0,r.jsx)("div",{style:{boxShadow:x},className:"jsx-89f7860f87774d9d item-preview",children:"css generator"}),(0,r.jsx)("div",{className:"jsx-89f7860f87774d9d item-code",children:(0,r.jsx)("textarea",{placeholder:"css generator",rows:"5",cols:"20",ref:n,className:"jsx-89f7860f87774d9d"})}),(0,r.jsx)("div",{className:"jsx-89f7860f87774d9d item-action",children:(0,r.jsx)(s.h,{text:y,onCopy:function(e){},children:(0,r.jsx)("button",{className:"jsx-89f7860f87774d9d",children:"Copy"})})})]})]}),(0,r.jsx)(o.default,{id:"89f7860f87774d9d",children:".container.jsx-89f7860f87774d9d{max-width:100rem;\nmin-height:60vh;\nmargin:1rem auto;\npadding:0 0.5rem;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between}\n.item-container.jsx-89f7860f87774d9d{margin:.5rem;\npadding:1rem;\n-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nborder:.5px dotted #ccc;\nbackground:#fff}\n.box.jsx-89f7860f87774d9d{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\n.box.jsx-89f7860f87774d9d .item-preview.jsx-89f7860f87774d9d{-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nbackground:rgb(21, 140, 186);\nwidth:500px;\nheight:250px;\nmax-height:250px;\nmargin-top:50px;\npadding:1em;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\ncolor:#fff}\n.box.jsx-89f7860f87774d9d .item-code.jsx-89f7860f87774d9d{-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nbackground:#ccc;\ncolor:#333;\npadding:.5rem;\nfont-size:1em;\nfont-family:monospace;\nheight:200px;\nwidth:100%;\nmargin:50px 0}\n.item-code.jsx-89f7860f87774d9d textarea.jsx-89f7860f87774d9d{width:100%;\nheight:100%;\npadding:10px;\nfont-size:1em;\nfont-family:monospace;\nresize:none}\nheader.jsx-89f7860f87774d9d>.container.jsx-89f7860f87774d9d{height:auto;\nmin-height:auto;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nmargin-bottom:0;\npadding:0 1rem}\nheader.jsx-89f7860f87774d9d>.container.jsx-89f7860f87774d9d h1.jsx-89f7860f87774d9d, header.jsx-89f7860f87774d9d>.container.jsx-89f7860f87774d9d .link-back.jsx-89f7860f87774d9d{font-size:1rem;\nmin-width:20%}\n.link-back.jsx-89f7860f87774d9d{cursor:pointer;\ntext-align:right}\nfooter.jsx-89f7860f87774d9d{max-width:100rem;\nmargin:1rem}\n@media (max-width:600px) {.container.jsx-89f7860f87774d9d{-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column}\n.box.jsx-89f7860f87774d9d .item-preview.jsx-89f7860f87774d9d{width:50vh!important;\nheight:150px!important;\nmax-height:150px!important;\nmargin-top:25px!important}}\n@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2) {.container.jsx-89f7860f87774d9d{-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column}\n.box.jsx-89f7860f87774d9d .item-preview.jsx-89f7860f87774d9d{width:50vh!important;\nheight:150px!important;\nmax-height:150px!important;\nmargin-top:25px!important}}"})]})}},3858:function(e){e.exports={formInput:"formInput_formInput__C59Bd",formInputpn:"formInput_formInputpn__oz3L6",flexWrap:"formInput_flexWrap__mUYmb",currentValue:"formInput_currentValue__TBzNq",inputCol:"formInput_inputCol__7NnBa"}},4300:function(e,n,t){"use strict";n.h=void 0;var r=a(t(7294)),o=a(t(640));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?p(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b=function(e){function n(){var e,t;l(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return x(p(t=d(this,(e=u(n)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var n=t.props,a=n.text,i=n.onCopy,c=n.children,s=n.options,l=r.default.Children.only(c),f=(0,o.default)(a,s);i&&i(a,f),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(e)})),t}var t,a,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,e),t=n,(a=[{key:"render",value:function(){var e=this.props,n=(e.text,e.onCopy,e.options,e.children),t=s(e,["text","onCopy","options","children"]),o=r.default.Children.only(n);return r.default.cloneElement(o,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(t,!0).forEach((function(n){x(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t,{onClick:this.onClick}))}}])&&f(t.prototype,a),i&&f(t,i),n}(r.default.PureComponent);n.h=b,x(b,"defaultProps",{onCopy:void 0,options:void 0})},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,t=[],r=0;r<e.rangeCount;r++)t.push(e.getRangeAt(r));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(n){e.addRange(n)})),n&&n.focus()}}}},function(e){e.O(0,[285,774,888,179],(function(){return n=162,e(e.s=n);var n}));var n=e.O();_N_E=n}]);