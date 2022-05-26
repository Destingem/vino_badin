(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{8076:function(e,r,o){"use strict";o.d(r,{e:function(){return g}});var t=o(7294),n=o(3656),a=o(112),i=(0,o(8067).k)((()=>({root:{backgroundColor:"transparent",cursor:"pointer",padding:0,border:0}}))),l=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,r,o)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,h=(e,r)=>{for(var o in r||(r={}))c.call(r,o)&&p(e,o,r[o]);if(s)for(var o of s(r))d.call(r,o)&&p(e,o,r[o]);return e};const u={},g=(0,t.forwardRef)(((e,r)=>{const o=(0,n.Z3)("Anchor",u,e),{component:l,className:p,classNames:g,styles:f}=o,m=((e,r)=>{var o={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&s)for(var t of s(e))r.indexOf(t)<0&&d.call(e,t)&&(o[t]=e[t]);return o})(o,["component","className","classNames","styles"]),{classes:b,cx:x}=i(null,{name:"Anchor",classNames:g,styles:f}),v="button"===l?{type:"button"}:null;return t.createElement(a.x,h(h({component:l||"a",variant:"link",ref:r,className:x(b.root,p)},v),m))}));g.displayName="@mantine/core/Anchor"},6857:function(e,r,o){"use strict";o.d(r,{O:function(){return g}});var t=o(7294),n=o(3656),a=(0,o(8067).k)((e=>({root:{display:"flex"},breadcrumb:{lineHeight:1,whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"},separator:{marginLeft:e.spacing.xs,marginRight:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"}}))),i=o(112),l=o(9680),s=Object.defineProperty,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,r,o)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;const u={separator:"/"},g=(0,t.forwardRef)(((e,r)=>{const o=(0,n.Z3)("Breadcrumbs",u,e),{className:s,children:g,separator:f,classNames:m,styles:b}=o,x=((e,r)=>{var o={};for(var t in e)d.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&c)for(var t of c(e))r.indexOf(t)<0&&p.call(e,t)&&(o[t]=e[t]);return o})(o,["className","children","separator","classNames","styles"]),{classes:v,cx:y}=a(null,{classNames:m,styles:b,name:"Breadcrumbs"}),w=t.Children.toArray(g).reduce(((e,r,o,n)=>(e.push(t.cloneElement(r,{className:v.breadcrumb,key:o})),o!==n.length-1&&e.push(t.createElement(i.x,{size:"sm",className:v.separator,key:`separator-${o}`},f)),e)),[]);return t.createElement(l.x,((e,r)=>{for(var o in r||(r={}))d.call(r,o)&&h(e,o,r[o]);if(c)for(var o of c(r))p.call(r,o)&&h(e,o,r[o]);return e})({className:y(v.root,s),ref:r},x),w)}));g.displayName="@mantine/core/Breadcrumbs"},3487:function(e,r,o){"use strict";o.d(r,{z:function(){return B}});var t=o(7294),n=o(3656),a=o(8067),i=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,r,o)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,u=(e,r)=>{for(var o in r||(r={}))d.call(r,o)&&h(e,o,r[o]);if(c)for(var o of c(r))p.call(r,o)&&h(e,o,r[o]);return e},g=(e,r)=>l(e,s(r));const f={xs:30,sm:36,md:42,lg:50,xl:60};(0,a.k)(((e,{size:r,multiline:o,radius:t,variant:n,invalid:a,rightSectionWidth:i,withRightSection:l,iconWidth:s})=>{const c=e.colors.red["dark"===e.colorScheme?6:7],d="default"===n||"filled"===n?{minHeight:e.fn.size({size:r,sizes:f}),paddingLeft:e.fn.size({size:r,sizes:f})/3,paddingRight:l?i:e.fn.size({size:r,sizes:f})/3,borderRadius:e.fn.radius(t)}:null;return{wrapper:{position:"relative"},input:"headless"===n?{}:g(u(g(u({},e.fn.fontStyles()),{height:o?"unstyled"===n?void 0:"auto":e.fn.size({size:r,sizes:f}),WebkitTapHighlightColor:"transparent",lineHeight:o?e.lineHeight:e.fn.size({size:r,sizes:f})-2+"px",appearance:"none",resize:"none",boxSizing:"border-box",fontSize:e.fn.size({size:r,sizes:e.fontSizes}),width:"100%",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,display:"block",textAlign:"left"}),d),{"&:disabled":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:e.colors.dark[2]}},"&::placeholder":{opacity:1,userSelect:"none",color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),defaultVariant:{border:`1px solid ${"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[4]}`,backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.white,transition:"border-color 100ms ease","&:focus, &:focus-within":{outline:"none",borderColor:e.colors[e.primaryColor]["dark"===e.colorScheme?8:5]}},filledVariant:{border:"1px solid transparent",backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1],"&:focus, &:focus-within":{outline:"none",borderColor:`${e.colors[e.primaryColor]["dark"===e.colorScheme?8:5]} !important`}},unstyledVariant:{borderWidth:0,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"transparent",minHeight:28,outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}},withIcon:{paddingLeft:"number"===typeof s?s:e.fn.size({size:r,sizes:f})},invalid:{color:c,borderColor:c,"&::placeholder":{opacity:1,color:c}},disabled:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:e.colors.dark[2]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:e.fn.size({size:r,sizes:f}),color:a?e.colors.red["dark"===e.colorScheme?6:7]:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[5]},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:i}}}));var m=Object.defineProperty,b=Object.defineProperties,x=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,k=(e,r,o)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,j=(e,r)=>{for(var o in r||(r={}))y.call(r,o)&&k(e,o,r[o]);if(v)for(var o of v(r))w.call(r,o)&&k(e,o,r[o]);return e};const z={xs:{height:f.xs,padding:"0 14px"},sm:{height:f.sm,padding:"0 18px"},md:{height:f.md,padding:"0 22px"},lg:{height:f.lg,padding:"0 26px"},xl:{height:f.xl,padding:"0 32px"},"compact-xs":{height:22,padding:"0 7px"},"compact-sm":{height:26,padding:"0 8px"},"compact-md":{height:30,padding:"0 10px"},"compact-lg":{height:34,padding:"0 12px"},"compact-xl":{height:40,padding:"0 14px"}},O=Object.keys(z).reduce(((e,r)=>(e[r]=z[r].height,e)),{}),S=({compact:e,size:r})=>e?z[`compact-${r}`]:z[r],C=e=>({display:e?"block":"inline-block",width:e?"100%":"auto"});function N({variant:e,theme:r,color:o}){const t=r.fn.variant({color:o,variant:e});return j({border:`1px solid ${t.border}`,backgroundColor:t.background,backgroundImage:t.background,color:t.color},r.fn.hover({backgroundColor:t.hover}))}var P=(0,a.k)(((e,{color:r,size:o,radius:t,fullWidth:n,compact:a,gradientFrom:i,gradientTo:l,gradientDeg:s},c)=>{const d=e.fn.variant({color:r,variant:"gradient",gradient:{from:i,to:l,deg:s}});return{loading:{ref:c("loading"),pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(t),cursor:"not-allowed"}},outline:N({variant:"outline",theme:e,color:r}),filled:N({variant:"filled",theme:e,color:r}),light:N({variant:"light",theme:e,color:r}),default:N({variant:"default",theme:e,color:r}),white:N({variant:"white",theme:e,color:r}),subtle:N({variant:"subtle",theme:e,color:r}),gradient:{border:0,backgroundImage:d.background,color:d.color,"&:hover":e.fn.hover({backgroundSize:"200%"})},root:(p=j(j(j(j({},S({compact:a,size:o})),e.fn.fontStyles()),e.fn.focusStyles()),C(n)),h={borderRadius:e.fn.radius(t),fontWeight:600,position:"relative",lineHeight:1,fontSize:e.fn.size({size:o,sizes:e.fontSizes}),WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none","&:not(:disabled):active":{transform:"translateY(1px)"},[`&:not(.${c("loading")}):disabled`]:{borderColor:"transparent",backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],color:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[5],cursor:"not-allowed"}},b(p,x(h))),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"}};var p,h})),I=o(1142),E=o(9680),A=Object.defineProperty,_=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,H=(e,r,o)=>r in e?A(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,R=(e,r)=>{for(var o in r||(r={}))T.call(r,o)&&H(e,o,r[o]);if(_)for(var o of _(r))W.call(r,o)&&H(e,o,r[o]);return e};const Z={size:"sm",type:"button",variant:"filled",loaderPosition:"left",gradient:{from:"blue",to:"cyan",deg:45}},B=(0,t.forwardRef)(((e,r)=>{const o=(0,n.Z3)("Button",Z,e),{className:a,size:i,color:l,type:s,disabled:c,children:d,leftIcon:p,rightIcon:h,fullWidth:u,variant:g,radius:f,component:m,uppercase:b,compact:x,loading:v,loaderPosition:y,loaderProps:w,gradient:k,classNames:j,styles:z}=o,S=((e,r)=>{var o={};for(var t in e)T.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&_)for(var t of _(e))r.indexOf(t)<0&&W.call(e,t)&&(o[t]=e[t]);return o})(o,["className","size","color","type","disabled","children","leftIcon","rightIcon","fullWidth","variant","radius","component","uppercase","compact","loading","loaderPosition","loaderProps","gradient","classNames","styles"]),{classes:C,cx:N,theme:A}=P({radius:f,color:l,size:i,fullWidth:u,compact:x,gradientFrom:k.from,gradientTo:k.to,gradientDeg:k.deg},{classNames:j,styles:z,name:"Button"}),H=A.fn.variant({color:l,variant:g}),B=t.createElement(I.a,R({color:H.color,size:A.fn.size({size:i,sizes:O})/2},w));return t.createElement(E.x,R({component:m||"button",className:N(C[g],{[C.loading]:v},C.root,a),type:s,disabled:c||v,ref:r,onTouchStart:()=>{}},S),t.createElement("div",{className:C.inner},(p||v&&"left"===y)&&t.createElement("span",{className:N(C.icon,C.leftIcon)},v&&"left"===y?B:p),t.createElement("span",{className:C.label,style:{textTransform:b?"uppercase":void 0}},d),(h||v&&"right"===y)&&t.createElement("span",{className:N(C.icon,C.rightIcon)},v&&"right"===y?B:h)))}));B.displayName="@mantine/core/Button"},2306:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aktuality/[aktualita]",function(){return o(2015)}])},2015:function(e,r,o){"use strict";o.r(r),o.d(r,{__N_SSG:function(){return f},default:function(){return m}});var t=o(5893),n=o(112),a=o(3487),i=o(8754),l=o(2644),s=o(6447),c=o(8076),d=o(6857),p=o(1664),h=o.n(p),u=o(9008),g=o.n(u),f=!0;function m(e){if(!e||!e.data||!e.data[0])return(0,t.jsx)(t.Fragment,{});var r={nadpis:e.data[0].title.rendered,datum:e.data[0].x_date,text:e.data[0].content.rendered.replace("<p>","").replace("</p>","").replace(".</p>",""),image:e.data[0].acf.fotka,priloha:e.data[0].acf.priloha,id:e.data[0].id},o=[{title:"Aktuality",href:"/aktuality"},{title:r.nadpis.slice(0,30),href:"#"}].map((function(e,r){return(0,t.jsx)(h(),{href:e.href,children:(0,t.jsx)(c.e,{children:e.title},r)})}));return console.log(e),console.log(r),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(g(),{children:[(0,t.jsxs)("title",{children:[r.nadpis," - Aktuality | Vinar\u0161tv\xed Badinovi"]}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("link",{rel:"icon",href:"/images/logo.png"})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",minHeight:"92vh"},children:[(0,t.jsx)(l.Z,{backgroundColor:"#eeeeee"}),(0,t.jsxs)(s.Media,{between:["zero","mobile"],children:[(0,t.jsxs)("div",{style:{marginTop:"10vh",justifyContent:"center",textAlign:"center",padding:"0 5vw 3vw 5vw"},children:[(0,t.jsx)(n.x,{size:"xl",sx:{color:"black",fontSize:r.nadpis.length<20?"10vw":"4vw",marginTop:"0",padding:"5vw 5vw 2vw 5vw",fontWeight:"600",textAlign:"center"},children:r.nadpis}),(0,t.jsx)(n.x,{weight:600,children:r.datum}),(0,t.jsx)(n.x,{sx:{textAlign:"left"},children:r.text})]}),r.priloha&&(0,t.jsx)("a",{download:!0,href:r.priloha.url,children:(0,t.jsx)(a.z,{color:"gray",sx:{backgroundColor:"rgb(147, 37, 37)",margin:"0 5vw 3vw 5vw",width:"100%"},children:r.priloha.filename})}),(0,t.jsx)(h(),{href:"/aktuality",children:(0,t.jsx)(a.z,{href:"#",color:"gray",sx:{backgroundColor:"rgb(147, 37, 37)",margin:"0 5vw 3vw 5vw",width:"100%"},children:"Zp\u011bt na aktuality"})})]}),(0,t.jsxs)(s.Media,{between:["mobile","tablet"],children:[(0,t.jsxs)("div",{style:{marginTop:"10vh",justifyContent:"center",textAlign:"center",padding:"0 5vw 3vw 5vw"},children:[(0,t.jsx)(n.x,{size:"xl",sx:{color:"black",fontSize:r.nadpis.length<40?"10vw":"2vw",marginTop:"0",padding:"5vw 5vw 2vw 5vw",fontWeight:"600",textAlign:"center"},children:r.nadpis}),(0,t.jsx)(n.x,{weight:600,children:r.datum}),(0,t.jsx)(n.x,{sx:{textAlign:"left"},children:r.text})]}),r.priloha&&(0,t.jsx)("a",{download:!0,href:r.priloha.url,children:(0,t.jsx)(a.z,{color:"gray",sx:{backgroundColor:"rgb(147, 37, 37)",margin:"0 5vw 3vw 5vw"},children:r.priloha.filename})}),(0,t.jsx)(h(),{href:"/aktuality",children:(0,t.jsx)(a.z,{color:"gray",sx:{backgroundColor:"rgb(147, 37, 37)",margin:"0 5vw 3vw 5vw"},children:"Zp\u011bt na aktuality"})})]}),(0,t.jsxs)(s.Media,{between:["tablet","tv"],children:[(0,t.jsxs)("div",{style:{marginTop:"10vh",justifyContent:"center",textAlign:"left",padding:"0 5vw 3vw 5vw"},children:[(0,t.jsx)(d.O,{children:o}),(0,t.jsx)(n.x,{size:"xl",sx:{color:"black",fontSize:r.nadpis.length<20?"3vw":"1vw",marginTop:"0",fontWeight:"600"},children:r.nadpis}),(0,t.jsx)(n.x,{weight:600,children:r.datum}),(0,t.jsx)(n.x,{size:"xl",sx:{textAlign:"left"},children:r.text})]}),r.priloha&&(0,t.jsx)("a",{download:!0,href:r.priloha.url,children:(0,t.jsx)(a.z,{color:"gray",sx:{backgroundColor:"rgb(147, 37, 37)",margin:"0 5vw 3vw 5vw"},children:r.priloha.filename})}),(0,t.jsx)(h(),{href:"/aktuality",children:(0,t.jsx)(a.z,{href:"#",color:"gray",sx:{backgroundColor:"rgb(147, 37, 37)",margin:"0 5vw 3vw 5vw"},children:"Zp\u011bt na aktuality"})})]})]}),(0,t.jsx)(i.Z,{})]})}},9008:function(e,r,o){e.exports=o(3121)}},function(e){e.O(0,[315,718,774,888,179],(function(){return r=2306,e(e.s=r);var r}));var r=e.O();_N_E=r}]);