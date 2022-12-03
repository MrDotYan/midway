"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,f=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="Koa",l={unversionedId:"extensions/koa",id:"extensions/koa",title:"Koa",description:"Koa is a very lightweight and easy-to-use Web framework. The content of this chapter mainly introduces how to use Koa as the upper-level framework in Midway and use its own capabilities.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/koa.md",sourceDirName:"extensions",slug:"/extensions/koa",permalink:"/en/docs/extensions/koa",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/koa.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"JWT",permalink:"/en/docs/extensions/jwt"},next:{title:"EggJS",permalink:"/en/docs/extensions/egg"}},p={},s=[{value:"Installation dependency",id:"installation-dependency",level:2},{value:"Enable component",id:"enable-component",level:2},{value:"BodyParser",id:"bodyparser",level:2},{value:"Cookie and Session",id:"cookie-and-session",level:2},{value:"Extended Context",id:"extended-context",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Default configuration",id:"default-configuration",level:3},{value:"Modify port",id:"modify-port",level:3},{value:"Global prefix",id:"global-prefix",level:3},{value:"Https configuration",id:"https-configuration",level:3},{value:"favicon settings",id:"favicon-settings",level:3},{value:"Modify context log",id:"modify-context-log",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"koa"},"Koa"),(0,r.kt)("p",null,"Koa is a very lightweight and easy-to-use Web framework. The content of this chapter mainly introduces how to use Koa as the upper-level framework in Midway and use its own capabilities."),(0,r.kt)("p",null,"Midway's default examples are based on this package."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," package uses ",(0,r.kt)("inlineCode",{parentName:"p"},"koa @2")," and integrates ",(0,r.kt)("inlineCode",{parentName:"p"},"@koa/router")," as the basic routing capability by default, and has built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"session")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"body-parser")," functions by default."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains independent main framework"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"installation-dependency"},"Installation dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/koa@3 --save\n$ npm i @types/koa --save-dev\n")),(0,r.kt)("p",null,"Or reinstall the following dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/koa": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    "@types/koa": "^2.13.4 ",\n    // ...\n  }\n}\n')),(0,r.kt)("p",null,"Examples can also be created directly using scaffolding."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm v6\n$ npm init midway --type=koa-v3 my_project\n\n# npm v7\n$ npm init midway -- --type=koa-v3 my_project\n")),(0,r.kt)("h2",{id:"enable-component"},"Enable component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, App } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\nimport { join } from 'path';\n\n@Configuration({\n  imports: [koa]\n  importConfigs: [join(__dirname, './config')]\n})\nexport class MainConfiguration {\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n        // ...\n  }\n}\n\n")),(0,r.kt)("h2",{id:"bodyparser"},"BodyParser"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," has its own ",(0,r.kt)("inlineCode",{parentName:"p"},"bodyParser")," function, which will parse ",(0,r.kt)("inlineCode",{parentName:"p"},"Post")," requests by default and automatically recognize ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"form")," types."),(0,r.kt)("p",null,"If you need text or xml, you can configure it yourself."),(0,r.kt)("p",null,"The default size is limited to ",(0,r.kt)("inlineCode",{parentName:"p"},"1mb"),". You can set the size of each item separately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  bodyParser: {\n    enableTypes: ['json', 'form', 'text', 'xml']\n    formLimit: '1mb',\n    jsonLimit: '1mb',\n    textLimit: '1mb',\n    xmlLimit: '1mb',\n  },\n}\n")),(0,r.kt)("p",null,"Note that the type selection when using Postman for Post requests:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01QCdTsN1S347SuzZU5_!!6000000002190-2-tps-1017-690.png",alt:"postman"})),(0,r.kt)("p",null,"Disable bodyParser middleware\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  bodyParser: {\n    enable: false,\n    // ...\n  },\n}\n")),(0,r.kt)("h2",{id:"cookie-and-session"},"Cookie and Session"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," encapsulates ",(0,r.kt)("inlineCode",{parentName:"p"},"cookies")," parsing and ",(0,r.kt)("inlineCode",{parentName:"p"},"Session")," support by default. You can view ",(0,r.kt)("a",{parentName:"p",href:"../cookie_session"},"Cookies and Session"),"."),(0,r.kt)("h2",{id:"extended-context"},"Extended Context"),(0,r.kt)("p",null,"In some scenarios, the Context needs to be expanded."),(0,r.kt)("p",null,"If you want to hang some temporary request-related object data, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.setAttr(key, value)")," API to implement it, such as the data used by the component."),(0,r.kt)("p",null,"If you really want to extend the Context, you can use koa's own API."),(0,r.kt)("p",null,"For example, we extend in ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.ts")," to provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"render()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Configuration } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\n\n@Configuration({\n    // ...\n})\nexport class AutoConfiguration {\n  @App()\n  app: koa.Application;\n\n  async onReady(container) {\n    Object.defineProperties(app.context, {\n      render: {\n        value: async function (...args) {\n          // ...\n        },\n      },\n    });\n  }\n}\n")),(0,r.kt)("p",null,"However, this cannot directly allow the Context to include Typescript Definitions. Additional definitions are required. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"../context_definition"},"extended context definitions"),"."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"default-configuration"},"Default configuration"),(0,r.kt)("p",null,"The configuration sample of ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/Koa")," is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  koa: {\n    port: 7001\n  },\n}\n")),(0,r.kt)("p",null,"All attributes are described as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, port to start")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"globalPrefix"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional. the global http prefix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keys"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, Cookies signature, if the upper layer does not write keys, you can also set it here")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The hostname to listen to. Default 127.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," Buffer ","|"," Array<Buffer","|","Object>"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, Https key, server private key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cert"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," Buffer ","|"," Array<Buffer","|","Object>"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, Https cert, server certificate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ca"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," Buffer ","|"," Array<Buffer","|","Object>"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, Https ca")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http2"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, supported by http2, default false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Whether to enable the proxy. If true, the host / protocol / ip in the request request is obtained from the X-Forwarded-Host / X-Forwarded-Proto / X-Forwarded-For in the Header field. The default value is false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subdomainOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"optional, the offset of the subdomain name, default 2.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxyIpHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional. obtains the field name of the proxy ip address. the default value is X-Forwarded-For")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxIpsCount"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"optional. the maximum number of ips obtained, which is 0 by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serverTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, server-side timeout configuration, unit seconds.")))),(0,r.kt)("h3",{id:"modify-port"},"Modify port"),(0,r.kt)("p",null,"By default, we provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"7001")," default port parameter in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.default"),". by modifying it, we can modify the default port of koa http service."),(0,r.kt)("p",null,"For example, we changed it to ",(0,r.kt)("inlineCode",{parentName:"p"},"6001"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  koa: {\n    port: 6001\n  },\n}\n")),(0,r.kt)("p",null,"By default, our port configuration is ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," because the single-test environment requires supertest to start the port."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.unittest\nexport default {\n  // ...\n  koa: {\n    port: null\n  },\n}\n")),(0,r.kt)("p",null,"In addition, you can also temporarily modify the port by ",(0,r.kt)("inlineCode",{parentName:"p"},"midway-bin dev-ts-port = 6001"),", which overwrites the configured port."),(0,r.kt)("h3",{id:"global-prefix"},"Global prefix"),(0,r.kt)("p",null,"For more information about this feature, see ","[Global Prefixes]","(../controller# Global Routing Prefix)."),(0,r.kt)("h3",{id:"https-configuration"},"Https configuration"),(0,r.kt)("p",null,"In most cases, please use external agents as much as possible to complete the implementation of Https, such as Nginx."),(0,r.kt)("p",null,"In some special scenarios, you can directly turn on Https by configuring SSL certificates (TLS certificates)."),(0,r.kt)("p",null,"First, you must prepare certificate files in advance, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl.key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl.pem"),". The key is the private key of the server and the pem is the corresponding certificate."),(0,r.kt)("p",null,"Then configure it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nimport { readFileSync } from 'fs';\nimport { join } from 'path';\n\nexport default {\n  // ...\n  koa: {\n    key: join(__dirname, '../ssl/ssl.key')\n    cert: join(__dirname, '../ssl/ssl.pem')\n  },\n}\n")),(0,r.kt)("h3",{id:"favicon-settings"},"favicon settings"),(0,r.kt)("p",null,"By default, the browser will initiate a request to ",(0,r.kt)("inlineCode",{parentName:"p"},"favicon.ico"),"."),(0,r.kt)("p",null,"The framework provides a default middleware to handle the request, and you can specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"favicon")," Buffer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nimport { readFileSync } from 'fs';\nimport { join } from 'path';\n\nexport default {\n  // ...\n  siteFile: {\n    favicon: readFileSync(join(__dirname, '../static/fav.ico'))\n  },\n}\n")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/static-file")," component is turned on, static file hosting of the component will be preferred."),(0,r.kt)("p",null,"Disable middleware\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  siteFile: {\n    enable: false,\n    // ...\n  },\n}\n")),(0,r.kt)("h3",{id:"modify-context-log"},"Modify context log"),(0,r.kt)("p",null,"The context log of the koa framework can be modified separately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  koa: {\n    contextLoggerFormat: info => {\n      const ctx = info.ctx;\n      return '${info.timestamp} ${info.LEVEL} ${info.pid} [${ctx.userId} - ${Date.now() - ctx.startTime}ms ${ctx.method}] ${info.message}';\n    }\n    // ...\n  },\n};\n")))}u.isMDXComponent=!0}}]);