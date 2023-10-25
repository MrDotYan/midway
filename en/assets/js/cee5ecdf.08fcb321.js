"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22660],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,h=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31732:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const i={date:"2023-10-11T20:00",authors:["czy88840616"]},l="v3.12.7",o={permalink:"/en/changelog/v3.12.7",source:"@site/changelog/source/v3.12.7.md",title:"v3.12.7",description:"Bug Fix",date:"2023-10-11T20:00:00.000Z",formattedDate:"October 11, 2023",tags:[],hasTruncateMarker:!0,authors:[{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"}],frontMatter:{date:"2023-10-11T20:00",authors:["czy88840616"]},prevItem:{title:"v3.12.8",permalink:"/en/changelog/v3.12.8"},nextItem:{title:"v3.12.6",permalink:"/en/changelog/v3.12.6"},listPageLink:"/en/changelog/"},p={authorsImageUrls:[void 0]},m=[{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udce6 Dependencies",id:"-dependencies",level:2},{value:"Committers: 1",id:"committers-1",level:2}],c={toc:m},u="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"swagger"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3320"},"#3320")," fix: swagger type missing with multi-extends (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"passport"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3314"},"#3314")," fix: passport validate resolve is not executed under concurrency (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,n.kt)("h2",{id:"-dependencies"},"\ud83d\udce6 Dependencies"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mongoose"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"typegoose"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3308"},"#3308")," chore(deps): update mongoose monorepo (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},"Other",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3318"},"#3318")," chore(deps): update dependency lerna to v7.3.1 - autoclosed (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"consul"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3319"},"#3319")," chore(deps): update dependency nock to v13.3.4 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"grpc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3306"},"#3306")," fix(deps): update dependency @grpc/grpc-js to v1.9.5 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"jwt"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3307"},"#3307")," fix(deps): update dependency @types/jsonwebtoken to v9.0.3 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")")))),(0,n.kt)("h2",{id:"committers-1"},"Committers: 1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Harry Chen (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))}s.isMDXComponent=!0}}]);