(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{626:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generator/css/gradient-css-generator",function(){return r(3554)}])},3035:function(e,t,r){"use strict";var n=r(5893),o=r(1246),d=r.n(o),i=r(7294);function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}t.Z=function(e){var t=e.children,r=e.label,o=e.isShow,c=a(e,["children","label","isShow"]),l=i.Children.only(t),s=c.inline;return o&&(0,n.jsxs)("div",{className:d().formGroupInput,children:[!s&&(0,n.jsx)("label",{className:d().label,children:r||""}),(0,n.jsxs)("div",{className:d().formGroupInputContainer,children:[s&&(0,n.jsx)("label",{className:d().label,children:r||""}),i.cloneElement(l)]})]})}},3554:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),o=r(5988),d=r(9008),i=r(5734),a=(r(3035),r(7294)),c=r(4300),l=r(1163);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}function f(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(){var e=(0,l.useRouter)(),t=(0,a.useRef)(null),r=(0,a.useState)({targetinvidualborder:!1,borderwidth:10,borderstyle:"solid",bordercolor:"#ff6550",bordertopwidth:10,bordertopstyle:"solid",bordertopcolor:"#ff6550",borderrightwidth:0,borderrightstyle:"solid",borderrightcolor:"#ff6550",borderbottomwidth:10,borderbottomstyle:"solid",borderbottomcolor:"#ff6550",borderleftwidth:0,borderleftstyle:"solid",borderleftcolor:"#ff6550",background:"#ffffff",genbackground:!0}),s=r[0],m=r[1],p="rgb(21 140 186)",h=(0,a.useState)({borderAll:"10px solid #ff6550"}),x=h[0],g=h[1],y=(0,a.useState)(p),j=y[0],w=y[1],k=(0,a.useState)(null),v=k[0],N=k[1];(0,a.useEffect)((function(){g({borderAll:"".concat(s.borderwidth,"px ").concat(s.borderstyle," ").concat(s.bordercolor),borderTop:"".concat(s.bordertopwidth,"px ").concat(s.bordertopstyle," ").concat(s.bordertopcolor),borderRight:"".concat(s.borderrightwidth,"px ").concat(s.borderrightstyle," ").concat(s.borderrightcolor),borderBottom:"".concat(s.borderbottomwidth,"px ").concat(s.borderbottomstyle," ").concat(s.borderbottomcolor),borderLeft:"".concat(s.borderleftwidth,"px ").concat(s.borderleftstyle," ").concat(s.borderleftcolor)});var e="".concat(s.targetinvidualborder?"border-top: ".concat(x.borderTop,";\n")+"border-right: ".concat(x.borderRight,";\n")+"border-bottom: ".concat(x.borderBottom,";\n")+"border-left: ".concat(x.borderLeft,";\n"):"border: ".concat(x.borderAll,";\n")),r=e;s.genbackground?(w(s.background),r+="background: ".concat(s.background,";")):(r=e,w(p)),t.current.value=r,N(r)}),[s,x.borderAll,x.borderTop,x.borderRight,x.borderBottom,x.borderLeft,j]);var S=[{label:"Dotted",value:"dotted"},{label:"Dashed",value:"dashed"},{label:"Solid",value:"solid"},{label:"Double",value:"double"},{label:"Groove",value:"groove"},{label:"ridge",value:"ridge"},{label:"Inset",value:"inset"},{label:"Outset",value:"outset"},{label:"None",value:"none"},{label:"Hidden",value:"hidden"}],O=(0,a.useState)([{id:1,name:"borderwidth",type:"range",min:0,max:200,step:1,label:"Border Width (all borders)",required:!1,unit:"px",hidden:!1},{id:2,name:"targetinvidualborder",type:"checkbox",label:"Target invidual border"},{id:3,name:"borderstyle",label:"Border Style",type:"select",options:JSON.parse(JSON.stringify(S))},{id:4,name:"bordercolor",type:"color",label:"Border Color"},{id:5,name:"bordertopwidth",group:"Border Top",type:"number",col:3,hidden:!0,unit:"px"},{id:6,name:"bordertopstyle",group:"Border Top",type:"select",options:JSON.parse(JSON.stringify(S)),col:3,hidden:!0},{id:7,name:"bordertopcolor",group:"Border Top",type:"color",col:3,hidden:!0},{id:8,name:"borderrightwidth",group:"Border Right",type:"number",col:3,hidden:!0,unit:"px"},{id:9,name:"borderrightstyle",group:"Border Right",type:"select",options:JSON.parse(JSON.stringify(S)),col:3,hidden:!0},{id:10,name:"borderrightcolor",group:"Border Right",type:"color",col:3,hidden:!0},{id:11,name:"borderbottomwidth",group:"Border Bottom",type:"number",col:3,hidden:!0,unit:"px"},{id:12,name:"borderbottomstyle",group:"Border Bottom",type:"select",options:JSON.parse(JSON.stringify(S)),col:3,hidden:!0},{id:13,name:"borderbottomcolor",group:"Border Bottom",type:"color",col:3,hidden:!0},{id:14,name:"borderleftwidth",group:"Border Left",type:"number",col:3,hidden:!0,unit:"px"},{id:15,name:"borderleftstyle",group:"Border Left",type:"select",options:JSON.parse(JSON.stringify(S)),col:3,hidden:!0},{id:16,name:"borderleftcolor",group:"Border Left",type:"color",col:3,hidden:!0},{id:17,name:"background",type:"color",label:"Background Color"},{id:18,name:"genbackground",type:"checkbox",label:"Include background color in generating code:"}]),B=O[0],C=O[1],_=function(e){"checkbox"===e.target.type?(console.log(e.target.checked),"genbackground"===e.target.name&&(e.target.checked?w(s.background):w(p)),"targetinvidualborder"===e.target.name&&C((function(t){return t.filter((function(e){return 1===e.id}))[0].hidden=e.target.checked,t.filter((function(e){return 3===e.id}))[0].hidden=e.target.checked,t.filter((function(e){return 4===e.id}))[0].hidden=e.target.checked,t.filter((function(e){return 5===e.id}))[0].hidden=!e.target.checked,t.filter((function(e){return 6===e.id}))[0].hidden=!e.target.checked,t.filter((function(e){return 7===e.id}))[0].hidden=!e.target.checked,t.filter((function(e){return 8===e.id}))[0].hidden=!e.target.checked,t.filter((function(e){return 9===e.id}))[0].hidden=!e.target.checked,t.filter((function(e){return 10===e.id}))[0].hidden=!e.target.checked,t.filter((function(e){return 11===e.id}))[0].hidden=!e.target.checked,t.filter((function(e){return 12===e.id}))[0].hidden=!e.target.checked,t.filter((function(e){return 13===e.id}))[0].hidden=!e.target.checked,t.filter((function(e){return 14===e.id}))[0].hidden=!e.target.checked,t.filter((function(e){return 15===e.id}))[0].hidden=!e.target.checked,t.filter((function(e){return 16===e.id}))[0].hidden=!e.target.checked,f(t)})),m(u({},s,b({},e.target.name,!s[e.target.name])))):m(u({},s,b({},e.target.name,e.target.value)))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.default,{children:[(0,n.jsx)("title",{className:"jsx-2d758295608d5972",children:"Gradient CSS Generator"}),(0,n.jsx)("meta",{name:"description",content:"Gradient CSS Generator CSS Generator tool - a product by nguyen van nam 0928351036",className:"jsx-2d758295608d5972"})]}),(0,n.jsx)("header",{className:"jsx-2d758295608d5972",children:(0,n.jsxs)("div",{className:"jsx-2d758295608d5972 container",children:[(0,n.jsx)("h1",{className:"jsx-2d758295608d5972",children:"A Product of Nguyen Van Nam"}),(0,n.jsx)("h3",{className:"jsx-2d758295608d5972",children:"Gradient CSS Generator"}),(0,n.jsx)("span",{onClick:function(){return e.back()},className:"jsx-2d758295608d5972 link-back",children:(0,n.jsxs)("a",{className:"jsx-2d758295608d5972",children:[(0,n.jsx)("span",{className:"jsx-2d758295608d5972",children:"\u2190"})," Back"]})})]})}),(0,n.jsxs)("section",{className:"jsx-2d758295608d5972 container",children:[(0,n.jsx)("div",{className:"jsx-2d758295608d5972 item-container",children:(0,n.jsxs)("form",{className:"jsx-2d758295608d5972",children:[(0,n.jsx)("h1",{className:"jsx-2d758295608d5972",children:"Gradient Options"}),B.map((function(e){return(0,n.jsx)(i.Z,u({},e,{value:s[e.name],onChange:_}),e.id)}))]})}),(0,n.jsxs)("div",{className:"jsx-2d758295608d5972 item-container box",children:[s.targetinvidualborder?(0,n.jsx)("div",{style:{borderWidth:"".concat(s.bordertopwidth,"px ").concat(s.borderrightwidth,"px ").concat(s.borderbottomwidth,"px ").concat(s.borderleftwidth,"px"),borderStyle:"".concat(s.bordertopstyle," ").concat(s.borderrightstyle," ").concat(s.borderbottomstyle," ").concat(s.borderleftstyle),borderColor:"".concat(s.bordertopcolor," ").concat(s.borderrightcolor," ").concat(s.borderbottomcolor," ").concat(s.borderleftcolor),backgroundColor:j},className:"jsx-2d758295608d5972 item-preview",children:"Border CSS generator"}):(0,n.jsx)("div",{style:{border:"".concat(s.borderwidth,"px ").concat(s.borderstyle," ").concat(s.bordercolor),backgroundColor:j},className:"jsx-2d758295608d5972 item-preview",children:"Border CSS generator"}),(0,n.jsxs)("div",{className:"jsx-2d758295608d5972 item-code",children:[(0,n.jsx)("textarea",{placeholder:"css generator",rows:"5",cols:"20",ref:t,className:"jsx-2d758295608d5972"}),(0,n.jsx)("div",{className:"jsx-2d758295608d5972 item-action",children:(0,n.jsx)(c.h,{text:v,onCopy:function(e){},children:(0,n.jsx)("button",{className:"jsx-2d758295608d5972",children:"Copy"})})})]})]})]}),(0,n.jsx)(o.default,{id:"2d758295608d5972",children:".container.jsx-2d758295608d5972{max-width:100rem;\nmin-height:60vh;\nmargin:1rem auto;\npadding:0 0.5rem;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between}\n.item-container.jsx-2d758295608d5972{margin:.5rem;\npadding:1rem;\n-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nborder:.5px dotted #ccc;\nbackground:#fff}\n.box.jsx-2d758295608d5972{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\n.box.jsx-2d758295608d5972 .item-preview.jsx-2d758295608d5972{-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nbackground:rgb(21, 140, 186);\nwidth:500px;\nheight:250px;\nmax-height:250px;\nmargin-top:50px;\npadding:1em;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\ncolor:#333}\n.box.jsx-2d758295608d5972 .item-code.jsx-2d758295608d5972{-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nbackground:#ccc;\ncolor:#333;\npadding:.5rem;\nfont-size:1em;\nfont-family:monospace;\nheight:200px;\nwidth:100%;\nmargin:50px 0;\nposition:relative}\n.item-code.jsx-2d758295608d5972 .item-action.jsx-2d758295608d5972{position:absolute;\ntop:8px;\nright:8px;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-transition:all .3s ease-in-out;\ntransition:all .3s ease-in-out;\ndisplay:none}\n.item-code.jsx-2d758295608d5972:hover .item-action.jsx-2d758295608d5972{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex}\n.item-code.jsx-2d758295608d5972 textarea.jsx-2d758295608d5972{width:100%;\nheight:100%;\npadding:10px;\nfont-size:1em;\nfont-family:monospace;\nresize:none}\nfooter.jsx-2d758295608d5972{max-width:100rem;\nmargin:1rem}\nheader.jsx-2d758295608d5972>.container.jsx-2d758295608d5972{height:auto;\nmin-height:auto;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nmargin-bottom:0;\npadding:0 1rem}\nheader.jsx-2d758295608d5972>.container.jsx-2d758295608d5972 h1.jsx-2d758295608d5972, header.jsx-2d758295608d5972>.container.jsx-2d758295608d5972 .link-back.jsx-2d758295608d5972{font-size:1rem;\nmin-width:20%}\n.link-back.jsx-2d758295608d5972{cursor:pointer;\ntext-align:right}\n@media (max-width:600px) {.container.jsx-2d758295608d5972{-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column}\n.box.jsx-2d758295608d5972 .item-preview.jsx-2d758295608d5972{width:50vh!important;\nheight:150px!important;\nmax-height:150px!important;\nmargin-top:25px!important}}\n@media'./../../utils/html-symbol';"})]})}},1246:function(e){e.exports={formGroupInput:"formGroupInput_formGroupInput__hHva_",formGroupInputContainer:"formGroupInput_formGroupInputContainer__baJtW",label:"formGroupInput_label__ZSgd0"}}},function(e){e.O(0,[285,766,774,888,179],(function(){return t=626,e(e.s=t);var t}));var t=e.O();_N_E=t}]);