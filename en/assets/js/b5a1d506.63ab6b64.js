"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={slug:"release/3.10.0",title:"Release 3.10.0",authors:["harry"],tags:["release"]},i=void 0,p={permalink:"/en/blog/release/3.10.0",source:"@site/blog/2023-01-30-release-3.10.md",title:"Release 3.10.0",description:"\u65b0\u5e74\u5feb\u4e50\u3002",date:"2023-01-30T00:00:00.000Z",formattedDate:"January 30, 2023",tags:[{label:"release",permalink:"/en/blog/tags/release"}],readingTime:3.685,hasTruncateMarker:!1,authors:[{name:"Harry Chen",title:"Maintainer of Midway",url:"https://github.com/czy88840616",imageURL:"https://avatars.githubusercontent.com/u/418820",key:"harry"}],frontMatter:{slug:"release/3.10.0",title:"Release 3.10.0",authors:["harry"],tags:["release"]},nextItem:{title:"Release 3.9.0",permalink:"/en/blog/release/3.9.0"}},o={authorsImageUrls:[void 0]},s=[{value:"Breaking",id:"breaking",level:2},{value:"New Feature",id:"new-feature",level:2},{value:"Pipe",id:"pipe",level:3},{value:"TypeORM Logger",id:"typeorm-logger",level:3},{value:"@Singleton \u88c5\u9970\u5668",id:"singleton-\u88c5\u9970\u5668",level:3},{value:"app.getNamespace API",id:"appgetnamespace-api",level:3},{value:"\u5176\u4ed6\u7684\u4e00\u4e9b\u53d8\u5316",id:"\u5176\u4ed6\u7684\u4e00\u4e9b\u53d8\u5316",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u65b0\u5e74\u5feb\u4e50\u3002"),(0,r.kt)("p",null,"\u5347\u7ea7\u8bf7\u53c2\u8003  ",(0,r.kt)("a",{parentName:"p",href:"/docs/how_to_update_midway"},"\u5982\u4f55\u66f4\u65b0 Midway")," \u4e2d\u63cf\u8ff0\uff0c\u8bf7\u4e0d\u8981\u5355\u72ec\u5347\u7ea7\u67d0\u4e2a\u7ec4\u4ef6\u5305\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u7248\u672c\u66f4\u65b0\u4e86\u8bb8\u591a\u4e1c\u897f\uff0c\u8bf7\u8010\u5fc3\u770b\u5b8c\u3002"),(0,r.kt)("h2",{id:"breaking"},"Breaking"),(0,r.kt)("p",null,"\u9996\u5148\u662f Breaking \u7684\u90e8\u5206\uff0c\u8fd9\u90e8\u5206\u5e76\u975e\u662f\u6846\u67b6\u672c\u8eab\u7684 API \u53d8\u66f4\uff0c\u800c\u662f\u4f9d\u8d56\u6216\u8005\u884c\u4e3a\u53ef\u80fd\u4f1a\u5f71\u54cd\u5c11\u90e8\u5206\u7528\u6237\uff0c\u9700\u8981\u6ce8\u610f\u7684\u90e8\u5206\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u3001 ",(0,r.kt)("inlineCode",{parentName:"li"},"@midwayjs/consul")," \u4f9d\u8d56\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"consul")," \u6a21\u5757\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"0.x")," \u5347\u7ea7\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"v1")," \u6b63\u5f0f\u7248\uff0cAPI \u53ef\u80fd\u6709\u66f4\u65b0\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"consul.acl")," \u53d8\u66f4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"consul.acl.legacy"),"\uff09\uff0c\u5177\u4f53\u8bf7\u67e5\u770b ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/silas/node-consul#acl-legacy"},"\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},"2\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"@midwayjs/jwt")," \u4f9d\u8d56\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"jsonwebtoken")," \u6a21\u5757\u7531\u4e8e\u5b89\u5168\u6027\u95ee\u9898\uff0c\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"v8")," \u5347\u7ea7\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"v9"),"\uff0cAPI \u53ef\u80fd\u6709\u66f4\u65b0\uff0c\u66f4\u591a\u60c5\u51b5\u8bf7\u67e5\u770b ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2595"},"\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},"3\u3001\u7531\u4e8e\u65b0\u589e\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"@Pipe")," \u529f\u80fd\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"@midwayjs/validate")," \u65b0\u7248\u672c\u65e0\u9700\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"@Validate")," \u88c5\u9970\u5668\u5373\u53ef\u6821\u9a8c\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u4e00\u90e8\u5206\u4e4b\u524d\u672a\u7f16\u5199\u88c5\u9970\u5668\u4f46\u662f\u65b0\u7248\u672c\u5374\u88ab\u9a8c\u8bc1\u7684\u573a\u666f\uff0c\u5177\u4f53\u8bf7\u770b\u4e0b\u9762\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"@Pipe")," \u7684\u4ecb\u7ecd\u6216\u8005\u76f8\u5173\u7684\u6587\u6863\u3002")),(0,r.kt)("h2",{id:"new-feature"},"New Feature"),(0,r.kt)("h3",{id:"pipe"},"Pipe"),(0,r.kt)("p",null,"\u65b0\u7248\u672c\u65b0\u589e\u4e86\u4e00\u9879 Pipe \u80fd\u529b\uff0c\u53ef\u4ee5\u4f7f\u53c2\u6570\u88c5\u9970\u5668\u7684\u80fd\u529b\u66f4\u8fdb\u4e00\u6b65\u3002"),(0,r.kt)("p",null,"\u85c9\u7531\u6b64\u80fd\u529b\uff0c\u65b0\u7248\u672c\u7684 Validate \u7ec4\u4ef6\u4e0d\u518d\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Validate")," \u88c5\u9970\u5668\uff0c\u4ee3\u7801\u4f1a\u66f4\u52a0\u7b80\u6d01\u3002"),(0,r.kt)("p",null,"\u65e7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Controller('/api/user')\nexport class HomeController {\n\n  @Post('/')\n  @Validate()\n  async updateUser(@Body() user: UserDTO ) {\n    // user.id\n  }\n}\n")),(0,r.kt)("p",null,"\u65b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Controller('/api/user')\nexport class HomeController {\n\n  @Post('/')\n  async updateUser(@Body() user: UserDTO ) {\n    // user.id\n  }\n}\n")),(0,r.kt)("p",null,"\u9488\u5bf9\u975e DTO \u7c7b\u578b\u7684\u6821\u9a8c\uff0c\u73b0\u5728\u4e5f\u53ef\u4ee5\u4f7f\u7528 Pipe \u8fdb\u884c\u5904\u7406\uff0c\u5982\u679c\u662f\u5b57\u7b26\u4e32\uff0c\u4f1a\u81ea\u52a8\u8f6c\u4e3a\u6570\u5b57\uff0c\u5e76\u8fdb\u884c\u6821\u9a8c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Controller('/api/user')\nexport class HomeController {\n\n  @Post('/update_age')\n  async updateAge(@Body('age', [ParseIntPipe]) age: number ) {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,"\u5f53\u7136 Pipe \u7684\u529f\u80fd\u4e0d\u4ec5\u5982\u6b64\uff0c\u66f4\u591a\u529f\u80fd\u8bf7\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipe"},"\u5b8c\u6574\u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"typeorm-logger"},"TypeORM Logger"),(0,r.kt)("p",null,"\u5f53 typeorm \u7ec4\u4ef6\u672a\u914d\u7f6e logger \u5c5e\u6027\u65f6\uff0c\u65b0\u7248\u672c\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"typeormLogger")," \u7528\u4e8e\u5b58\u50a8\u6267\u884c\u7684 sql\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"midwayLogger: {\n  clients: {\n    typeormLogger: {\n      lazyLoad: true,\n      fileLogName: 'midway-typeorm.log',\n      enableError: false,\n      level: 'info',\n    },\n  },\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lazyLoad")," \u4e3a\u65b0\u589e\u7684\u5c5e\u6027\uff0c\u53ef\u4ee5\u4f7f logger \u5728\u4e00\u5f00\u59cb\u4ec5\u4fdd\u7559\u914d\u7f6e\uff0c\u7b49\u5b9e\u9645 getLogger \u65f6\u624d\u505a\u521d\u59cb\u5316\u3002"),(0,r.kt)("h3",{id:"singleton-\u88c5\u9970\u5668"},"@Singleton \u88c5\u9970\u5668"),(0,r.kt)("p",null,"\u7b80\u5316\u539f\u6709\u7684\u5199\u6cd5\uff1a"),(0,r.kt)("p",null,"\u65e7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Scope(ScopeEnum.Singleton)\n@Provide()\nclass SingletonService {}\n")),(0,r.kt)("p",null,"\u65b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Singleton()\nclass SingletonService {}\n")),(0,r.kt)("h3",{id:"appgetnamespace-api"},"app.getNamespace API"),(0,r.kt)("p",null,"\u901a\u8fc7 app \u4e0a\u65b0\u589e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"getNamespace")," API \uff0c\u53ef\u4ee5\u83b7\u53d6\u5230\u5f53\u524d\u7684 app \u5f52\u5c5e\u6846\u67b6\u7684\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application } from '@midwayjs/web';\n\n@Controller()\nclass HomeController {\n\n  @App()\n  app: Application;\n\n  async invoke() {\n    // this.app.getNamespace()  => 'egg'\n  }\n}\n")),(0,r.kt)("h2",{id:"\u5176\u4ed6\u7684\u4e00\u4e9b\u53d8\u5316"},"\u5176\u4ed6\u7684\u4e00\u4e9b\u53d8\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u3001\u8c03\u6574",(0,r.kt)("inlineCode",{parentName:"li"},"@midwayjs/core")," \u9ed8\u8ba4 logger level \u4e3a info\uff0c\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"coreLogger")," \u5728\u670d\u52a1\u5668\u73af\u5883\u7ee7\u7eed\u4fdd\u7559 warn"),(0,r.kt)("li",{parentName:"ul"},"2\u3001faas \u6a21\u5757\u65b0\u589e\u4e00\u4e9b\u81ea\u5b9a\u4e49\u89e6\u53d1\u5668\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"3\u3001\u5728 jest \u6d4b\u8bd5\u73af\u5883\u4e0b\uff0c\u521d\u59cb\u5316\u7684\u62a5\u9519\u4e4b\u524d\u4f1a\u88ab jest \u541e\u6389\uff0c\u65b0\u7248\u672c\u4f1a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"console.error")," \u8fdb\u884c\u8f93\u51fa"),(0,r.kt)("li",{parentName:"ul"},"4\u3001\u4fee\u590d ",(0,r.kt)("inlineCode",{parentName:"li"},"configuration")," \u7684 stop \u751f\u547d\u5468\u671f\uff0c\u5c06\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"imports")," \u987a\u5e8f\u7684\u9006\u5e8f\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"5\u3001\u4fee\u590d ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap")," \u4f7f\u7528 sticky \u6a21\u5f0f\u65f6\uff0c\u6587\u4ef6\u4e0a\u4f20\u65f6\u7684\u9519\u8bef"),(0,r.kt)("li",{parentName:"ul"},"6\u3001\u652f\u6301 swager \u7684\u5c5e\u6027\u591a\u7c7b\u578b\u5c55\u793a"),(0,r.kt)("li",{parentName:"ul"},"7\u3001\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"midway-bin dev")," \u4e0b\uff0c\u5e94\u7528\u5728\u672c\u5730\u5f00\u53d1\u65f6\u4e5f\u53ef\u4ee5\u5feb\u901f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"--ssl")," \u6765\u542f\u52a8 https \u670d\u52a1")))}c.isMDXComponent=!0}}]);