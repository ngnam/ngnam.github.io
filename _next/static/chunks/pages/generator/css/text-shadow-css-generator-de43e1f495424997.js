(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[835],{640:function(e,n,t){"use strict";var r=t(1742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,n){var t,a,i,c,s,l,u=!1;n||(n={}),t=n.debug||!1;try{if(i=r(),c=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),n.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[n.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(n.format,e);n.onCopy&&(r.preventDefault(),n.onCopy(r.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(f){t&&console.error("unable to copy using execCommand: ",f),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",e),n.onCopy&&n.onCopy(window.clipboardData),u=!0}catch(f){t&&console.error("unable to copy using clipboardData: ",f),t&&console.error("falling back to prompt"),a=function(e){var n=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,n)}("message"in n?n.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),l&&document.body.removeChild(l),i()}return u}},423:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generator/css/text-shadow-css-generator",function(){return t(90)}])},5734:function(e,n,t){"use strict";var r=t(5893),o=t(7294),a=t(3858),i=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.Z=function(e){var n=(0,o.useState)(!1),t=n[0],a=n[1],c=e.label,u=e.errorMessage,f=e.onChange,p=(e.id,l(e,["label","errorMessage","onChange","id"])),d=function(e){a(!0)};return!p.hidden&&(0,r.jsxs)("div",{className:i().formInput,children:[(0,r.jsx)("label",{htmlFor:p.name,children:c||""}),function(){switch(p.type){case"checkbox":return(0,r.jsx)("div",{className:i().formInputpn,children:(0,r.jsxs)("label",{className:"input_checkbox_container",children:[p.value?"On":"Off",(0,r.jsx)("input",s({},p,{checked:p.value,onChange:f})),(0,r.jsx)("span",{className:"checkmark input-checkbox-custom"})]})});case"radio":return(0,r.jsx)("div",{className:i().formInputpn,children:(0,r.jsxs)("label",{className:"input_checkbox_container",children:[p.value?"On":"Off",(0,r.jsx)("input",s({},p,{checked:p.value,onChange:f})),(0,r.jsx)("span",{className:"checkmark input-radio-custom"})]})});case"select":return(0,r.jsx)("div",{className:i().formInputpn,children:(0,r.jsxs)("select",s({onChange:f},p,{children:[(0,r.jsx)("option",{value:"",children:"--choose--"}),p.options.map((function(e,n){return(0,r.jsx)("option",{value:e.value,children:e.label},n)}))]}))});case"range":return(0,r.jsxs)("div",{className:i().formInputpn,children:[(0,r.jsx)("input",s({},p,{onChange:f,onBlur:d,className:"input-range-custom".concat(p.className?" "+p.className:"")})),(0,r.jsxs)("div",{className:i().currentValue,children:["".concat(p.value),p.unit?p.unit:""]})]});default:return(0,r.jsxs)("div",{className:i().formInputpn,children:[(0,r.jsx)("input",s({},p,{onChange:f,onBlur:d,onFocus:function(){return"confirmPassword"===p.name&&a(!0)},focused:t.toString()})),(0,r.jsxs)("div",{className:i().currentValue,children:["".concat(p.value),p.unit?p.unit:""]})]})}}(),(0,r.jsx)("span",{className:i().formInput__error,children:u})]})}},90:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(5893),o=t(5988),a=t(9008),i=t(5734),c=t(7294),s=t(4300),l=t(1163);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}function p(){var e=(0,l.useRouter)(),n=(0,c.useRef)(null),t=(0,c.useState)({hsl:4,vsl:4,blurradius:2,sdc:"#000000",sdcrgbaCol:"rgba(0,0,0,0.64)",sdo:.6}),p=t[0],d=t[1],m=(0,c.useState)("4px 4px 2px rgba(0,0,0,0.64)"),x=m[0],b=m[1],h=(0,c.useState)(null),g=h[0],y=h[1];(0,c.useEffect)((function(){b("".concat(p.hsl,"px ").concat(p.vsl,"px ").concat(p.blurradius,"px ").concat(p.sdcrgbaCol||"rgba(0,0,0,0.64)"));var e="text-shadow: ".concat(p.hsl,"px ").concat(p.vsl,"px ").concat(p.blurradius,"px ").concat(p.sdcrgbaCol||"rgba(0,0,0,0.64)",";");n.current.value=e,y(e)}),[p,x]);var j=function(e){if("color"===e.target.type){var n,t=p.sdo,r=e.target.value,o="rgba("+parseInt(r.slice(-6,-4),16)+","+parseInt(r.slice(-4,-2),16)+","+parseInt(r.slice(-2),16)+","+t+")";d(f({},p,(u(n={},e.target.name,r),u(n,"sdcrgbaCol",o),n)))}else if("sdo"===e.target.name){var a;r=p.sdc,t=e.target.value,o="rgba("+parseInt(r.slice(-6,-4),16)+","+parseInt(r.slice(-4,-2),16)+","+parseInt(r.slice(-2),16)+","+t+")";d(f({},p,(u(a={},e.target.name,t),u(a,"sdcrgbaCol",o),a)))}else d(f({},p,u({},e.target.name,e.target.value)))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{className:"jsx-32706e03487908f5",children:"Text Shadow"}),(0,r.jsx)("meta",{name:"description",content:"Text Shadow CSS Generator tool - a product by nguyen van nam 0928351036",className:"jsx-32706e03487908f5"})]}),(0,r.jsx)("header",{className:"jsx-32706e03487908f5",children:(0,r.jsxs)("div",{className:"jsx-32706e03487908f5 container",children:[(0,r.jsx)("h1",{className:"jsx-32706e03487908f5",children:"A Product of Nguyen Van Nam"}),(0,r.jsx)("h3",{className:"jsx-32706e03487908f5",children:"Text Shadow CSS Generator"}),(0,r.jsx)("span",{onClick:function(){return e.back()},className:"jsx-32706e03487908f5 link-back",children:(0,r.jsxs)("a",{className:"jsx-32706e03487908f5",children:[(0,r.jsx)("span",{className:"jsx-32706e03487908f5",children:"\u2190"})," Back"]})})]})}),(0,r.jsxs)("section",{className:"jsx-32706e03487908f5 container",children:[(0,r.jsx)("div",{className:"jsx-32706e03487908f5 item-container",children:(0,r.jsxs)("form",{className:"jsx-32706e03487908f5",children:[(0,r.jsx)("h1",{className:"jsx-32706e03487908f5",children:"Text Shadow Options"}),[{id:1,name:"hsl",type:"range",min:-200,max:200,step:1,label:"Horizontal Shadow Length",required:!1,unit:"px"},{id:2,name:"vsl",type:"range",min:-200,max:200,step:1,label:"Vertical Shadow Length",unit:"px"},{id:3,name:"blurradius",type:"range",min:0,max:50,step:1,label:"Blur Radius",unit:"px"},{id:4,name:"sdc",type:"color",placeholder:"Shadow Color",label:"Shadow Color"},{id:5,name:"sdcrgbaCol",type:"Shadow Color RGBA"},{id:6,name:"sdo",type:"range",min:.01,max:.99,step:.01,label:"Shadow Color Opacity"}].map((function(e){return(0,r.jsx)(i.Z,f({},e,{value:p[e.name],onChange:j}),e.id)}))]})}),(0,r.jsxs)("div",{className:"jsx-32706e03487908f5 item-container box",children:[(0,r.jsx)("div",{style:{textShadow:x},className:"jsx-32706e03487908f5 item-preview",children:"This text is the preview text."}),(0,r.jsx)("div",{className:"jsx-32706e03487908f5 item-code",children:(0,r.jsx)("textarea",{placeholder:"css generator",rows:"5",cols:"20",ref:n,className:"jsx-32706e03487908f5"})}),(0,r.jsx)("div",{className:"jsx-32706e03487908f5 item-action",children:(0,r.jsx)(s.h,{text:g,onCopy:function(e){},children:(0,r.jsx)("button",{className:"jsx-32706e03487908f5",children:"Copy"})})})]})]}),(0,r.jsx)(o.default,{id:"32706e03487908f5",children:".container.jsx-32706e03487908f5{max-width:100rem;\nmin-height:60vh;\nmargin:1rem auto;\npadding:0 0.5rem;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between}\n.item-container.jsx-32706e03487908f5{margin:.5rem;\npadding:1rem;\n-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nborder:.5px dotted #ccc;\nbackground:#fff}\n.box.jsx-32706e03487908f5{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\n.box.jsx-32706e03487908f5 .item-preview.jsx-32706e03487908f5{-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nfont-family:Helvetica, Arial, sans-serif;\nfont-size:2em;\nfont-weight:600;\ntext-align:center;\ncolor:red;\nbackground:#ffffff;\nborder:3px solid #ccc;\nborder-radius:10px;\nbox-shadow:2px 2px 2px #ccc;\nwidth:100%;\nmax-height:100px;\nline-height:100px;\nmargin:50px auto;\noverflow:visible}\n.box.jsx-32706e03487908f5 .item-code.jsx-32706e03487908f5{-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nbackground:#ccc;\ncolor:#333;\npadding:.5rem;\nfont-size:1em;\nfont-family:monospace;\nheight:200px;\nwidth:100%;\nmargin:50px 0}\n.item-code.jsx-32706e03487908f5 textarea.jsx-32706e03487908f5{width:100%;\nheight:100%;\npadding:10px;\nfont-size:1em;\nfont-family:monospace;\nresize:none}\nheader.jsx-32706e03487908f5>.container.jsx-32706e03487908f5{height:auto;\nmin-height:auto;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nmargin-bottom:0;\npadding:0 1rem}\nheader.jsx-32706e03487908f5>.container.jsx-32706e03487908f5 h1.jsx-32706e03487908f5, header.jsx-32706e03487908f5>.container.jsx-32706e03487908f5 .link-back.jsx-32706e03487908f5{font-size:1rem;\nmin-width:20%}\n.link-back.jsx-32706e03487908f5{cursor:pointer;\ntext-align:right}\nfooter.jsx-32706e03487908f5{max-width:100rem;\nmargin:1rem}\n@media (max-width:600px) {.container.jsx-32706e03487908f5{-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column}\n.box.jsx-32706e03487908f5 .item-preview.jsx-32706e03487908f5{width:50vh!important;\nheight:150px!important;\nmax-height:150px!important;\nmargin-top:25px!important}}\n@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2) {.container.jsx-32706e03487908f5{-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column}\n.box.jsx-32706e03487908f5 .item-preview.jsx-32706e03487908f5{width:50vh!important;\nheight:150px!important;\nmax-height:150px!important;\nmargin-top:25px!important}}"})]})}},3858:function(e){e.exports={formInput:"formInput_formInput__C59Bd",formInput__error:"formInput_formInput__error__bsjYY",formInputpn:"formInput_formInputpn__oz3L6",flexWrap:"formInput_flexWrap__mUYmb",currentValue:"formInput_currentValue__TBzNq",inputCol:"formInput_inputCol__7NnBa"}},4300:function(e,n,t){"use strict";n.h=void 0;var r=a(t(7294)),o=a(t(640));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?d(e):n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b=function(e){function n(){var e,t;l(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return x(d(t=f(this,(e=p(n)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var n=t.props,a=n.text,i=n.onCopy,c=n.children,s=n.options,l=r.default.Children.only(c),u=(0,o.default)(a,s);i&&i(a,u),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(e)})),t}var t,a,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,e),t=n,(a=[{key:"render",value:function(){var e=this.props,n=(e.text,e.onCopy,e.options,e.children),t=s(e,["text","onCopy","options","children"]),o=r.default.Children.only(n);return r.default.cloneElement(o,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(t,!0).forEach((function(n){x(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t,{onClick:this.onClick}))}}])&&u(t.prototype,a),i&&u(t,i),n}(r.default.PureComponent);n.h=b,x(b,"defaultProps",{onCopy:void 0,options:void 0})},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,t=[],r=0;r<e.rangeCount;r++)t.push(e.getRangeAt(r));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(n){e.addRange(n)})),n&&n.focus()}}}},function(e){e.O(0,[285,774,888,179],(function(){return n=423,e(e.s=n);var n}));var n=e.O();_N_E=n}]);