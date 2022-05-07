(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",r="second",s="minute",l="hour",a="day",o="week",d="month",c="quarter",h="year",u="date",x="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},j=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},p={s:j,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+j(i,2,"0")+":"+j(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,d),s=n-r<0,l=t.clone().add(i+(s?-1:1),d);return+(-(i+(n-r)/(s?r-l:l-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:h,w:o,d:a,D:u,h:l,m:s,s:r,ms:i,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",y={};y[v]=m;var b=function(e){return e instanceof k},_=function e(t,n,i){var r;if(!t)return v;if("string"==typeof t){var s=t.toLowerCase();y[s]&&(r=s),n&&(y[s]=n,r=s);var l=t.split("-");if(!r&&l.length>1)return e(l[0])}else{var a=t.name;y[a]=t,r=a}return!i&&r&&(v=r),r||!i&&v},$=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},w=p;w.l=_,w.i=b,w.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=_(e.locale,null,!0),this.parse(e)}var j=m.prototype;return j.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},j.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},j.$utils=function(){return w},j.isValid=function(){return!(this.$d.toString()===x)},j.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},j.isAfter=function(e,t){return $(e)<this.startOf(t)},j.isBefore=function(e,t){return this.endOf(t)<$(e)},j.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},j.unix=function(){return Math.floor(this.valueOf()/1e3)},j.valueOf=function(){return this.$d.getTime()},j.startOf=function(e,t){var n=this,i=!!w.u(t)||t,c=w.p(e),x=function(e,t){var r=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?r:r.endOf(a)},f=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,j=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case h:return i?x(1,0):x(31,11);case d:return i?x(1,m):x(0,m+1);case o:var v=this.$locale().weekStart||0,y=(g<v?g+7:g)-v;return x(i?j-y:j+(6-y),m);case a:case u:return f(p+"Hours",0);case l:return f(p+"Minutes",1);case s:return f(p+"Seconds",2);case r:return f(p+"Milliseconds",3);default:return this.clone()}},j.endOf=function(e){return this.startOf(e,!1)},j.$set=function(e,t){var n,o=w.p(e),c="set"+(this.$u?"UTC":""),x=(n={},n[a]=c+"Date",n[u]=c+"Date",n[d]=c+"Month",n[h]=c+"FullYear",n[l]=c+"Hours",n[s]=c+"Minutes",n[r]=c+"Seconds",n[i]=c+"Milliseconds",n)[o],f=o===a?this.$D+(t-this.$W):t;if(o===d||o===h){var g=this.clone().set(u,1);g.$d[x](f),g.init(),this.$d=g.set(u,Math.min(this.$D,g.daysInMonth())).$d}else x&&this.$d[x](f);return this.init(),this},j.set=function(e,t){return this.clone().$set(e,t)},j.get=function(e){return this[w.p(e)]()},j.add=function(i,c){var u,x=this;i=Number(i);var f=w.p(c),g=function(e){var t=$(x);return w.w(t.date(t.date()+Math.round(e*i)),x)};if(f===d)return this.set(d,this.$M+i);if(f===h)return this.set(h,this.$y+i);if(f===a)return g(1);if(f===o)return g(7);var m=(u={},u[s]=t,u[l]=n,u[r]=e,u)[f]||1,j=this.$d.getTime()+i*m;return w.w(j,this)},j.subtract=function(e,t){return this.add(-1*e,t)},j.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||x;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),s=this.$H,l=this.$m,a=this.$M,o=n.weekdays,d=n.months,c=function(e,n,r,s){return e&&(e[n]||e(t,i))||r[n].slice(0,s)},h=function(e){return w.s(s%12||12,e,"0")},u=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:c(n.monthsShort,a,d,3),MMMM:c(d,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:w.s(s,2,"0"),h:h(1),hh:h(2),a:u(s,l,!0),A:u(s,l,!1),m:String(l),mm:w.s(l,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:r};return i.replace(g,(function(e,t){return t||f[e]||r.replace(":","")}))},j.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},j.diff=function(i,u,x){var f,g=w.p(u),m=$(i),j=(m.utcOffset()-this.utcOffset())*t,p=this-m,v=w.m(this,m);return v=(f={},f[h]=v/12,f[d]=v,f[c]=v/3,f[o]=(p-j)/6048e5,f[a]=(p-j)/864e5,f[l]=p/n,f[s]=p/t,f[r]=p/e,f)[g]||p,x?v:w.a(v)},j.daysInMonth=function(){return this.endOf(d).$D},j.$locale=function(){return y[this.$L]},j.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=_(e,t,!0);return i&&(n.$L=i),n},j.clone=function(){return w.w(this.$d,this)},j.toDate=function(){return new Date(this.valueOf())},j.toJSON=function(){return this.isValid()?this.toISOString():null},j.toISOString=function(){return this.$d.toISOString()},j.toString=function(){return this.$d.toUTCString()},m}(),M=k.prototype;return $.prototype=M,[["$ms",i],["$s",r],["$m",s],["$H",l],["$W",a],["$M",d],["$y",h],["$D",u]].forEach((function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,k,$),e.$i=!0),$},$.locale=_,$.isDayjs=b,$.unix=function(e){return $(1e3*e)},$.en=y[v],$.Ls=y,$.p={},$}()},4949:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aktuality",function(){return n(9177)}])},8754:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(5893);function r(){return(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#932525",height:"8vh"},children:(0,i.jsx)("p",{style:{color:"#c4c4c4"},children:"Vina\u0159stv\xed Badinovi 2022"})})}},2644:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var i=n(5893),r=n(112),s=n(9907),l=n(4496),a=n(9199),o=n(2416),d=n(5675),c=n.n(d),h=n(7294),u=n(6447),x=n(2336),f=n.n(x),g=n(1664),m=n.n(g);function j(e){var t=(0,h.useState)(!1),n=t[0],d=t[1],x=n?"Close navigation":"Open navigation";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.Media,{between:["zero","mobile"],children:(0,i.jsxs)("div",{className:f().main_mobile,style:{backgroundColor:e.backgroundColor,position:"fixed",zIndex:"12000"},children:[(0,i.jsx)(m(),{href:"/",children:(0,i.jsxs)("div",{className:f().header_mobile,children:[(0,i.jsx)(c(),{src:"/images/logo.png",width:"40%",height:"40%"}),(0,i.jsx)(r.x,{size:"xl",children:"Vina\u0159stv\xed Badinovi"})]})}),(0,i.jsx)(s.O,{opened:n,onClick:function(){return d((function(e){return!e}))},title:x}),n&&(0,i.jsx)(l.d,{opened:n,onClose:function(){return d(!1)},title:"Navigace",padding:"xl",size:"full",transition:"fade",position:"right",children:(0,i.jsxs)("div",{className:f().openedMenu_mobile,children:[(0,i.jsx)(a.X,{children:(0,i.jsx)(m(),{href:"/",children:(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:400},children:"Hlavn\xed strana"})})}),(0,i.jsx)(a.X,{children:(0,i.jsx)(m(),{href:"/o-nas",children:(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:400},children:"O n\xe1s"})})}),(0,i.jsx)(a.X,{children:(0,i.jsx)(m(),{href:"/aktuality",children:(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:400},children:"Aktuality"})})}),(0,i.jsx)(a.X,{children:(0,i.jsx)(m(),{href:"/sortiment",children:(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:400},children:"Sortiment"})})}),(0,i.jsx)(a.X,{children:(0,i.jsx)(m(),{href:"/kontakt",children:(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:400},children:"Kontakt"})})})]})})]})}),(0,i.jsx)(u.Media,{between:["mobile","tablet"],children:(0,i.jsxs)("div",{className:f().main_mobile,style:{backgroundColor:e.backgroundColor,position:"fixed",zIndex:"12000"},children:[(0,i.jsx)(m(),{href:"/",children:(0,i.jsxs)("div",{className:f().header_tablet,children:[(0,i.jsx)(c(),{src:"/images/logo.png",width:"40%",height:"40%"}),(0,i.jsx)(m(),{href:"/",children:(0,i.jsx)(r.x,{size:"xl",children:"Vina\u0159stv\xed Badinovi"})})]})}),(0,i.jsx)(s.O,{opened:n,onClick:function(){return d((function(e){return!e}))},title:x}),n&&(0,i.jsx)(l.d,{opened:n,onClose:function(){return d(!1)},title:"Navigace",padding:"xl",position:"right",transition:"fade",children:(0,i.jsxs)("div",{className:f().openedMenu_tablet,children:[(0,i.jsx)(a.X,{children:(0,i.jsx)(m(),{href:"/",children:(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:400},children:"Hlavn\xed strana"})})}),(0,i.jsx)(a.X,{children:(0,i.jsx)(m(),{href:"/o-nas",children:(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:400},children:"O n\xe1s"})})}),(0,i.jsx)(a.X,{children:(0,i.jsx)(m(),{href:"/aktuality",children:(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:400},children:"Aktuality"})})}),(0,i.jsx)(a.X,{children:(0,i.jsx)(m(),{href:"/sortiment",children:(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:400},children:"Sortiment"})})}),(0,i.jsx)(a.X,{children:(0,i.jsx)(m(),{href:"/kontakt",children:(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:400},children:"Kontakt"})})})]})})]})}),(0,i.jsx)(u.Media,{between:["tablet","laptop"],children:(0,i.jsx)("div",{className:f().main_laptop,style:{backgroundColor:e.backgroundColor,position:"fixed",zIndex:"12000"},children:(0,i.jsxs)("div",{className:f().header_laptop,children:[(0,i.jsx)(m(),{href:"/",children:(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(c(),{src:"/images/logo.png",width:49,height:44}),(0,i.jsx)(r.x,{size:"xl",sx:{fontSize:"2rem"},children:"Vina\u0159stv\xed Badinovi"})]})}),(0,i.jsxs)(o.r,{sx:{margin:0,width:"maxContent",gap:"5vh",paddingRight:"5%"},children:[(0,i.jsx)(m(),{href:"/o-nas",children:(0,i.jsx)("p",{children:"O n\xe1s"})}),(0,i.jsx)(m(),{href:"/aktuality",children:(0,i.jsx)("p",{children:"Aktuality"})}),(0,i.jsx)(m(),{href:"/sortiment",children:(0,i.jsx)("p",{children:"Sortiment"})}),(0,i.jsx)(m(),{href:"/kontakt",children:(0,i.jsx)("p",{children:"Kontakt"})})]})]})})}),(0,i.jsx)(u.Media,{between:["laptop","tv"],children:(0,i.jsx)("div",{className:f().main_tv,style:{backgroundColor:e.backgroundColor},children:(0,i.jsx)(c(),{src:"/images/logo.png",width:100,height:100})})})]})}},9177:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return y}});var i=n(5893),r=n(112),s=n(9199),l=n(3487),a=n(2416),o=n(9008),d=n.n(o),c=(n(7294),n(2644)),h=n(6447),u=n(7484),x=n.n(u),f=n(8754),g=n(5434),m=n(1664),j=n.n(m);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=!0;function y(e){console.log(e);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d(),{children:[(0,i.jsx)("title",{children:"Aktuality | Vinar\u0161tv\xed Badinovi"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/images/logo.png"})]}),(0,i.jsx)(h.Media,{between:["zero","mobile"],children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("section",{style:{width:"100%",height:"50vh",backgroundImage:'url("images/grape.jpg")',backgroundSize:"cover",backgroundPosition:"center",display:"flex",flexDirection:"column",minHeight:"fit-content"},children:[(0,i.jsx)(c.Z,{backgroundColor:"#fff"}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:(0,i.jsx)(r.x,{size:"xl",sx:{color:"white",fontSize:"13vw",textAlign:"center"},children:"Aktuality"})})]}),(0,i.jsx)("section",{children:(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"5vh",padding:"1vh 2vw 0 2vw"},children:e.data&&e.data.map((function(e){var t;return(0,i.jsx)("div",{children:(0,i.jsxs)(s.X,{shadow:"xl",p:10,sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"5%"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#A54E4E",color:"#fff",height:"100%",flexDirection:"column",padding:"2% 5% ",borderRadius:"3px"},children:[(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:"700",fontSize:"1.5rem"},children:x()(e.datum,"D-M-YYYY").format("D")}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:"400",fontSize:"1rem"},children:x()(e.datum).format("M")}),(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:"400",fontSize:"1rem"},children:x()(e.datum).format("YYYY")})]})]}),(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:"600",fontSize:"2rem"},children:e.nadpis.slice(0,30)})]}),(0,i.jsx)(r.x,{children:e.text.slice(0,250)}),(0,i.jsx)(j(),{href:"/aktuality/"+e.id,children:(0,i.jsx)(l.z,{sx:(t={backgroundColor:"rgb(147, 37, 37)",aspectRatio:1,textAlign:"right"},p(t,"aspectRatio",1),p(t,"marginTop","3vh"),p(t,"alignSelf","flex-end"),t),color:"red",children:(0,i.jsx)(g.KEG,{})})})]})})}))})})]})}),(0,i.jsx)(h.Media,{between:["mobile","tablet"],children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("section",{style:{width:"100%",height:"50vh",backgroundImage:'url("images/grape.jpg")',backgroundSize:"cover",backgroundPosition:"center",display:"flex",flexDirection:"column",minHeight:"fit-content"},children:[(0,i.jsx)(c.Z,{backgroundColor:"#fff"}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:(0,i.jsx)(r.x,{size:"xl",sx:{color:"white",fontSize:"13vw",textAlign:"center"},children:"Aktuality"})})]}),(0,i.jsx)("section",{children:(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"5vh",padding:"1vh 2vw 0 2vw"},children:(0,i.jsx)(a.r,{children:e.data&&e.data.map((function(e){var t;return(0,i.jsx)(a.r.Col,{span:6,children:(0,i.jsxs)(s.X,{shadow:"xl",p:10,sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"5%"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#A54E4E",color:"#fff",height:"100%",flexDirection:"column",padding:"2% 5% ",borderRadius:"3px"},children:[(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:"700",fontSize:"1.5rem"},children:x()(e.datum,"D-M-YYYY").format("D")}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:"400",fontSize:"1rem"},children:x()(e.datum).format("M")}),(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:"400",fontSize:"1rem"},children:x()(e.datum).format("YYYY")})]})]}),(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:"400",fontSize:"2rem"},children:e.nadpis.slice(0,50)})]}),(0,i.jsx)(r.x,{children:e.text.slice(0,250)}),(0,i.jsx)(j(),{href:"/aktuality/"+e.id,children:(0,i.jsx)(l.z,{sx:(t={backgroundColor:"rgb(147, 37, 37)",aspectRatio:1,textAlign:"right"},p(t,"aspectRatio",1),p(t,"marginTop","3vh"),p(t,"alignSelf","flex-end"),t),color:"red",children:(0,i.jsx)(g.KEG,{})})})]})})}))})})})]})}),(0,i.jsx)(h.Media,{between:["tablet","laptop"],children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("section",{style:{width:"100%",height:"100vh",backgroundImage:'url("images/grape.jpg")',backgroundSize:"cover",backgroundPosition:"center",display:"flex",flexDirection:"column",minHeight:"fit-content"},children:[(0,i.jsx)(c.Z,{backgroundColor:"#fff"}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:(0,i.jsx)(r.x,{size:"xl",sx:{color:"white",fontSize:"6rem",textAlign:"center"},children:"Aktuality"})})]}),(0,i.jsx)("section",{children:(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"5vh",padding:"1vh 2vw 0 2vw",minHeight:"100vh"},children:(0,i.jsx)(a.r,{children:e.data&&e.data.map((function(e){var t;return(0,i.jsx)(a.r.Col,{span:4,children:(0,i.jsxs)(s.X,{shadow:"xl",p:10,sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"5%"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#A54E4E",color:"#fff",height:"100%",flexDirection:"column",padding:"2% 5% ",borderRadius:"3px"},children:[(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:"700",fontSize:"1.5rem"},children:x()(e.datum,"D-M-YYYY").format("D")}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:"400",fontSize:"1rem"},children:x()(e.datum).format("M")}),(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:"400",fontSize:"1rem"},children:x()(e.datum).format("YYYY")})]})]}),(0,i.jsx)(r.x,{size:"xl",sx:{fontWeight:"400",fontSize:"6vmin"},children:e.nadpis.slice(0,50)})]}),(0,i.jsx)(r.x,{children:e.text.slice(0,250)}),(0,i.jsx)(j(),{href:"/aktuality/"+e.id,children:(0,i.jsx)(l.z,{sx:(t={backgroundColor:"rgb(147, 37, 37)",aspectRatio:1,textAlign:"right"},p(t,"aspectRatio",1),p(t,"marginTop","3vh"),p(t,"alignSelf","flex-end"),t),color:"red",children:(0,i.jsx)(g.KEG,{})})})]})},e.id)}))})})})]})}),(0,i.jsx)(f.Z,{})]})}},2336:function(e){e.exports={main_mobile:"Navbar_main_mobile__B6D7U",header_mobile:"Navbar_header_mobile__H8HVm",openedMenu_mobile:"Navbar_openedMenu_mobile__E_GCT",main_tablet:"Navbar_main_tablet___VP7P",header_tablet:"Navbar_header_tablet__ew8nf",openedMenu_tablet:"Navbar_openedMenu_tablet__3Jvep",main_laptop:"Navbar_main_laptop__rffHN",header_laptop:"Navbar_header_laptop__awWjI",main_tv:"Navbar_main_tv__V7_lB"}}},function(e){e.O(0,[228,60,369,774,888,179],(function(){return t=4949,e(e.s=t);var t}));var t=e.O();_N_E=t}]);