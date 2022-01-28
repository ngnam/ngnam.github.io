(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{162:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generator/css/box-shadow-css-generator",function(){return t(5156)}])},5156:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var c=t(5893),a=t(5988),r=t(9008),s=t(7294),o=t(3858),i=t.n(o);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},c=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),c.forEach((function(n){l(e,n,t[n])}))}return e}function x(e,n){if(null==e)return{};var t,c,a=function(e,n){if(null==e)return{};var t,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=function(e){var n=(0,s.useState)(!1),t=n[0],a=n[1],r=e.label,o=e.errorMessage,l=e.onChange,u=(e.id,x(e,["label","errorMessage","onChange","id"]));return(0,c.jsxs)("div",{className:i().formInput,children:[(0,c.jsx)("label",{htmlFor:u.name,children:r}),"checkbox"===u.type?(0,c.jsxs)("div",{className:i().formInputpn,children:[(0,c.jsx)("input",d({},u,{checked:u.checked,onChange:l})),(0,c.jsx)("div",{className:i().currentValue,children:u.checked?"On":"Off"})]}):(0,c.jsxs)("div",{className:i().formInputpn,children:[(0,c.jsx)("input",d({},u,{onChange:l,onBlur:function(e){a(!0)},onFocus:function(){return"confirmPassword"===u.name&&a(!0)},focused:t.toString()})),(0,c.jsxs)("div",{className:i().currentValue,children:["".concat(u.value)," ",u.unit?u.unit:""]})]}),(0,c.jsx)("span",{children:o})]})};function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},c=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),c.forEach((function(n){b(e,n,t[n])}))}return e}function m(){var e=(0,s.useState)({hsl:10,vsl:10,blurradius:5,spreadradius:0,sdc:"#000000",sdcrgbaCol:"",sdo:.75,inset:!1}),n=e[0],t=e[1],o=(0,s.useState)("10px 10px 5px 3px rgba(0,0,0,0.75)"),i=o[0],l=o[1],d=function(e){if("checkbox"===e.target.type)console.log(e.target.checked),t(p({},n,b({},e.target.name,!n[e.target.name])));else if("color"===e.target.type){var c,a=n.sdo,r=e.target.value,s="rgba("+parseInt(r.slice(-6,-4),16)+","+parseInt(r.slice(-4,-2),16)+","+parseInt(r.slice(-2),16)+","+a+")";t(p({},n,(b(c={},e.target.name,r),b(c,"sdcrgbaCol",s),c)))}else if("sdo"===e.target.name){var o;r=n.sdc,a=e.target.value,s="rgba("+parseInt(r.slice(-6,-4),16)+","+parseInt(r.slice(-4,-2),16)+","+parseInt(r.slice(-2),16)+","+a+")";t(p({},n,(b(o={},e.target.name,a),b(o,"sdcrgbaCol",s),o)))}else t(p({},n,b({},e.target.name,e.target.value)));setTimeout((function(){l("".concat(n.hsl,"px ").concat(n.vsl,"px ").concat(n.blurradius,"px ").concat(n.spreadradius,"px ").concat(n.sdcrgbaCol||"rgba(0,0,0,0.7)").concat(n.inset?" inset":""))}),200)};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.default,{children:[(0,c.jsx)("title",{className:"jsx-8509d680cb468648",children:"Box Shadow"}),(0,c.jsx)("meta",{name:"description",content:"Box Shadow CSS Generator tool",className:"jsx-8509d680cb468648"})]}),(0,c.jsxs)("section",{className:"jsx-8509d680cb468648 container",children:[(0,c.jsx)("div",{className:"jsx-8509d680cb468648 item-container",children:(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(n)},className:"jsx-8509d680cb468648",children:[(0,c.jsx)("h1",{className:"jsx-8509d680cb468648",children:"Box Shadow Options"}),[{id:1,name:"hsl",type:"range",min:-200,max:200,step:1,label:"Horizontal Shadow Length",required:!1,unit:"px"},{id:2,name:"vsl",type:"range",min:-200,max:200,step:1,label:"Vertical Shadow Length",unit:"px"},{id:3,name:"blurradius",type:"range",min:0,max:400,step:1,label:"Blur Radius",unit:"px"},{id:4,name:"spreadradius",type:"range",min:-200,max:200,step:1,label:"Spread Radius",unit:"px"},{id:5,name:"sdc",type:"color",placeholder:"Shadow Color",label:"Shadow Color"},{id:6,name:"sdcrgbaCol",type:"colorPreview"},{id:7,name:"sdo",type:"range",min:0,max:1,step:.01,label:"Shadow Color Opacity"},{id:8,name:"inset",type:"checkbox",label:"Inset"}].map((function(e){return"checkbox"===e.type?(0,c.jsx)(u,p({},e,{checked:n[e.name],onChange:d}),e.id):(0,c.jsx)(u,p({},e,{value:n[e.name],onChange:d}),e.id)}))]})}),(0,c.jsxs)("div",{className:"jsx-8509d680cb468648 item-container box",children:[(0,c.jsx)("div",{style:{boxShadow:i},className:"jsx-8509d680cb468648 item-preview"}),(0,c.jsx)("div",{className:"jsx-8509d680cb468648 item-code",children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:"jsx-8509d680cb468648",children:"box-shadow: ".concat(n.hsl,"px ").concat(n.vsl,"px ").concat(n.blurradius,"px ").concat(n.spreadradius,"px ").concat(n.sdcrgbaCol||"rgba(0,0,0,0.7)").concat(n.inset?" inset":"",";")}),(0,c.jsx)("p",{className:"jsx-8509d680cb468648",children:"-webkit-box-shadow: ".concat(n.hsl,"px ").concat(n.vsl,"px ").concat(n.blurradius,"px ").concat(n.spreadradius,"px ").concat(n.sdcrgbaCol||"rgba(0,0,0,0.7)").concat(n.inset?" inset":"",";")}),(0,c.jsx)("p",{className:"jsx-8509d680cb468648",children:"-moz-box-shadow: ".concat(n.hsl,"px ").concat(n.vsl,"px ").concat(n.blurradius,"px ").concat(n.spreadradius,"px ").concat(n.sdcrgbaCol||"rgba(0,0,0,0.7)").concat(n.inset?" inset":"",";")}),(0,c.jsx)("p",{className:"jsx-8509d680cb468648",children:"-ms-box-shadow: ".concat(n.hsl,"px ").concat(n.vsl,"px ").concat(n.blurradius,"px ").concat(n.spreadradius,"px ").concat(n.sdcrgbaCol||"rgba(0,0,0,0.7)").concat(n.inset?" inset":"",";")}),(0,c.jsx)("p",{className:"jsx-8509d680cb468648",children:"-o-box-shadow: ".concat(n.hsl,"px ").concat(n.vsl,"px ").concat(n.blurradius,"px ").concat(n.spreadradius,"px ").concat(n.sdcrgbaCol||"rgba(0,0,0,0.7)").concat(n.inset?" inset":"",";")})]})}),(0,c.jsx)("div",{className:"jsx-8509d680cb468648 item-action",children:(0,c.jsx)("button",{type:"button",className:"jsx-8509d680cb468648",children:"Copy"})})]})]}),(0,c.jsx)("footer",{className:"jsx-8509d680cb468648",children:(0,c.jsx)("p",{className:"jsx-8509d680cb468648",children:"A Product of Nguyen Van Nam"})}),(0,c.jsx)(a.default,{id:"8509d680cb468648",children:".container.jsx-8509d680cb468648{max-width:100rem;\nmin-height:60vh;\nmargin:1rem auto;\npadding:0 0.5rem;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between}\n.item-container.jsx-8509d680cb468648{margin:.5rem;\npadding:1rem;\n-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nborder:.5px dotted #ccc;\nbackground:#fff}\n@media (max-width:600px) {.container.jsx-8509d680cb468648{-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column}}\n@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2) {.container.jsx-8509d680cb468648{-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column}}\n.box.jsx-8509d680cb468648{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\n.box.jsx-8509d680cb468648 .item-preview.jsx-8509d680cb468648{-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nbackground:rgb(21, 140, 186);\nwidth:500px;\nmax-height:250px;\nmargin-top:50px}\n.box.jsx-8509d680cb468648 .item-code.jsx-8509d680cb468648{-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nbackground:#ccc;\ncolor:#333;\npadding:.5rem;\nfont-size:1em;\nfont-family:monospace;\nheight:200px;\nwidth:100%;\nmargin:50px 0}\n.item-code.jsx-8509d680cb468648 p.jsx-8509d680cb468648{margin:0}\nfooter.jsx-8509d680cb468648{max-width:100rem;\nmargin:1rem}"})]})}},3858:function(e){e.exports={formInput:"formInput_formInput__C59Bd",formInputpn:"formInput_formInputpn__oz3L6",currentValue:"formInput_currentValue__TBzNq"}}},function(e){e.O(0,[12,774,888,179],(function(){return n=162,e(e.s=n);var n}));var n=e.O();_N_E=n}]);