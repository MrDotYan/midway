"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29007],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(a),c=i,d=s["".concat(l,".").concat(c)]||s[c]||h[c]||r;return a?n.createElement(d,p(p({ref:t},u),{},{components:a})):n.createElement(d,p({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,p=new Array(r);p[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:i,p[1]=o;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={date:"2023-03-10T20:00",authors:["czy88840616","echosoar","waitingsong"]},p="v3.10.15",o={permalink:"/changelog/v3.10.15",source:"@site/changelog/source/v3.10.15.md",title:"v3.10.15",description:"Bug Fix",date:"2023-03-10T20:00:00.000Z",formattedDate:"2023\u5e743\u670810\u65e5",tags:[],hasTruncateMarker:!0,authors:[{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"},{name:"Gao Yang",alias:"echosoar",url:"https://github.com/echosoar",imageURL:"https://github.com/echosoar.png",key:"echosoar"},{name:"waiting",alias:"waitingsong",url:"https://github.com/waitingsong",imageURL:"https://github.com/waitingsong.png",key:"waitingsong"}],frontMatter:{date:"2023-03-10T20:00",authors:["czy88840616","echosoar","waitingsong"]},nextItem:{title:"v3.10.14",permalink:"/changelog/v3.10.14"},listPageLink:"/changelog/"},l={authorsImageUrls:[void 0,void 0,void 0]},m=[{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udcdd Documentation",id:"-documentation",level:2},{value:"\ud83d\udce6 Dependencies",id:"-dependencies",level:2},{value:"Committers: 3",id:"committers-3",level:2}],u={toc:m},s="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"core"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2764"},"#2764")," fix: mock service inited will be before lifecycle (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2765"},"#2765")," fix: content-type set by headers options (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2793"},"#2793")," fix: wrong handler name with decorator (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"faas"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2761"},"#2761")," fix: faas content length (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/echosoar"},"@echosoar"),")")))),(0,i.kt)("h2",{id:"-documentation"},"\ud83d\udcdd Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2773"},"#2773")," docs(site): update validate.md (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/waitingsong"},"@waitingsong"),")")),(0,i.kt)("h2",{id:"-dependencies"},"\ud83d\udce6 Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Other",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2791"},"#2791")," chore(deps): update dependency @types/node to v18.15.0 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2792"},"#2792")," chore(deps): update dependency jest to v29.5.0 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2785"},"#2785")," chore(deps): update dependency lerna to v6.5.1 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2762"},"#2762")," chore(deps): update dependency @types/node to v18.14.4 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2778"},"#2778")," chore(deps): update dependency typedoc to v0.23.26 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2772"},"#2772")," fix(deps): update dependency cron to v2 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mongoose"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"typegoose"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2789"},"#2789")," chore(deps): update dependency mongoose to v6.10.2 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2786"},"#2786")," chore(deps): update dependency mongoose to v6.10.0 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sequelize"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2790"},"#2790")," chore(deps): update dependency sequelize to v6.29.2 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2760"},"#2760")," chore(deps): update dependency sequelize to v6.29.0 ","[security]"," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grpc"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2767"},"#2767")," fix(deps): update dependency @grpc/grpc-js to v1.8.12 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2763"},"#2763")," fix(deps): update dependency @grpc/grpc-js to v1.8.10 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"typegoose"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2784"},"#2784")," chore(deps): update dependency @typegoose/typegoose to v10.3.0 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mikro"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2779"},"#2779")," chore(deps): update mikro-orm monorepo to v5.6.13 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mock"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"upload"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2781"},"#2781")," fix(deps): update dependency raw-body to v2.5.2 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bootstrap"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mock"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"socketio"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2783"},"#2783")," fix(deps): update socket.io packages to v4.6.1 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mock"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ws"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2782"},"#2782")," fix(deps): update dependency ws to v8.12.1 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mock"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2777"},"#2777")," chore(deps): update dependency kafkajs to v2.2.4 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rabbitmq"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2768"},"#2768")," fix(deps): update dependency amqp-connection-manager to v4.1.11 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"http-proxy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2769"},"#2769")," fix(deps): update dependency axios to v1.3.4 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web-express"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2770"},"#2770")," fix(deps): update dependency body-parser to v1.20.2 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")")))),(0,i.kt)("h2",{id:"committers-3"},"Committers: 3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gao Yang (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/echosoar"},"@echosoar"),")"),(0,i.kt)("li",{parentName:"ul"},"Harry Chen (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,i.kt)("li",{parentName:"ul"},"waiting (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/waitingsong"},"@waitingsong"),")")))}h.isMDXComponent=!0}}]);