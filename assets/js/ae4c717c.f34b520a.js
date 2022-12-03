"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="ETCD",c={unversionedId:"extensions/etcd",id:"extensions/etcd",title:"ETCD",description:"etcd \u662f\u4e91\u539f\u751f\u67b6\u6784\u4e2d\u91cd\u8981\u7684\u57fa\u7840\u7ec4\u4ef6\uff0c\u7531 CNCF \u5b75\u5316\u6258\u7ba1\u3002etcd \u5728\u5fae\u670d\u52a1\u548c Kubernates \u96c6\u7fa4\u4e2d\u53ef\u4ee5\u4f5c\u4e3a\u670d\u52a1\u6ce8\u518c\u4e8e\u53d1\u73b0\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a key-value \u5b58\u50a8\u7684\u4e2d\u95f4\u4ef6\u3002",source:"@site/docs/extensions/etcd.md",sourceDirName:"extensions",slug:"/extensions/etcd",permalink:"/docs/extensions/etcd",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/etcd.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Consul",permalink:"/docs/extensions/consul"},next:{title:"SocketIO",permalink:"/docs/extensions/socketio"}},l={},s=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",level:2},{value:"\u914d\u7f6e\u9ed8\u8ba4\u5ba2\u6237\u7aef",id:"\u914d\u7f6e\u9ed8\u8ba4\u5ba2\u6237\u7aef",level:2},{value:"\u4f7f\u7528\u9ed8\u8ba4\u5ba2\u6237\u7aef",id:"\u4f7f\u7528\u9ed8\u8ba4\u5ba2\u6237\u7aef",level:2},{value:"\u591a\u5b9e\u4f8b\u914d\u7f6e",id:"\u591a\u5b9e\u4f8b\u914d\u7f6e",level:2},{value:"\u591a\u5b9e\u4f8b\u83b7\u53d6",id:"\u591a\u5b9e\u4f8b\u83b7\u53d6",level:2},{value:"\u52a8\u6001\u521b\u5efa\u5b9e\u4f8b",id:"\u52a8\u6001\u521b\u5efa\u5b9e\u4f8b",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"etcd"},"ETCD"),(0,a.kt)("p",null,"etcd \u662f\u4e91\u539f\u751f\u67b6\u6784\u4e2d\u91cd\u8981\u7684\u57fa\u7840\u7ec4\u4ef6\uff0c\u7531 CNCF \u5b75\u5316\u6258\u7ba1\u3002etcd \u5728\u5fae\u670d\u52a1\u548c Kubernates \u96c6\u7fa4\u4e2d\u53ef\u4ee5\u4f5c\u4e3a\u670d\u52a1\u6ce8\u518c\u4e8e\u53d1\u73b0\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a key-value \u5b58\u50a8\u7684\u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("p",null,"Midway \u63d0\u4f9b\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/etcd3"},"etcd3")," \u6a21\u5757\u5c01\u88c5\u7684\u7ec4\u4ef6\uff0c\u63d0\u4f9b etcd \u7684\u5ba2\u6237\u7aef\u8c03\u7528\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u4e3b\u6846\u67b6"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u65e5\u5fd7"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,a.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/etcd@3 --save\n")),(0,a.kt)("p",null,"\u6216\u8005\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/etcd": "^3.0.0",\n    // ...\n  },\n}\n')),(0,a.kt)("h2",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5f15\u5165 \u7ec4\u4ef6\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u5bfc\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as etcd from '@midwayjs/etcd';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    // ...\n    etcd,\n  ],\n  // ...\n})\nexport class MainConfiguration {\n}\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9ed8\u8ba4\u5ba2\u6237\u7aef"},"\u914d\u7f6e\u9ed8\u8ba4\u5ba2\u6237\u7aef"),(0,a.kt)("p",null,"\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u53ea\u4f7f\u7528\u9ed8\u8ba4\u5ba2\u6237\u7aef\u6765\u5b8c\u6210\u529f\u80fd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  etcd: {\n    client: {\n      host: [\n        '127.0.0.1:2379'\n      ]\n    },\n  },\n}\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u9ed8\u8ba4\u5ba2\u6237\u7aef"},"\u4f7f\u7528\u9ed8\u8ba4\u5ba2\u6237\u7aef"),(0,a.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide } from '@midwayjs/decorator';\nimport { ETCDService } from '@midwayjs/etcd';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  etcdService: ETCDService;\n\n  async invoke() {\n\n    await this.etcdService.put('foo').value('bar');\n\n    const fooValue = await this.etcdService.get('foo').string();\n    console.log('foo was:', fooValue);\n\n    const allFValues = await this.etcdService.getAll().prefix('f').keys();\n    console.log('all our keys starting with \"f\":', allFValues);\n\n    await this.etcdService.delete().all();\n  }\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a API \u8bf7\u53c2\u8003 ts \u5b9a\u4e49\u6216\u8005 ",(0,a.kt)("a",{parentName:"p",href:"https://microsoft.github.io/etcd3/classes/etcd3.html"},"\u5b98\u7f51\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u591a\u5b9e\u4f8b\u914d\u7f6e"},"\u591a\u5b9e\u4f8b\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  etcd: {\n    clients: {\n      instance1: {\n        {\n          host: [\n            '127.0.0.1:2379'\n          ]\n        },\n      },\n        instance2: {\n        {\n          host: [\n            '127.0.0.1:2379'\n          ]\n        },\n      }\n    }\n  },\n}\n")),(0,a.kt)("h2",{id:"\u591a\u5b9e\u4f8b\u83b7\u53d6"},"\u591a\u5b9e\u4f8b\u83b7\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide } from '@midwayjs/decorator';\nimport { ETCDServiceFactory } from '@midwayjs/etcd';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  etcdServiceFactory: ETCDServiceFactory;\n\n  async invoke() {\n    const instance1 = this.etcdServiceFactory.get('instance1');\n    // ...\n    \n    const instance2 = this.etcdServiceFactory.get('instance2');\n    // ...\n  }\n}\n")),(0,a.kt)("h2",{id:"\u52a8\u6001\u521b\u5efa\u5b9e\u4f8b"},"\u52a8\u6001\u521b\u5efa\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide } from '@midwayjs/decorator';\nimport { ETCDServiceFactory } from '@midwayjs/etcd';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  etcdServiceFactory: ETCDServiceFactory;\n\n  async invoke() {\n    const instance3 = await this.etcdServiceFactory.createInstance({\n      host: [\n        '127.0.0.1:2379'\n      ]\n    }, 'instance3');\n    // ...\n  }\n}\n")))}d.isMDXComponent=!0}}]);