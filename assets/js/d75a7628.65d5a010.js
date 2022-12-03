"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96227],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={},o="Consul",s={unversionedId:"extensions/consul",id:"extensions/consul",title:"Consul",description:"consul \u7528\u4e8e\u5fae\u670d\u52a1\u4e0b\u7684\u670d\u52a1\u6cbb\u7406\uff0c\u4e3b\u8981\u7279\u70b9\u6709\uff1a\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u5065\u5eb7\u68c0\u67e5\u3001\u952e\u503c\u5b58\u50a8\u3001\u5b89\u5168\u670d\u52a1\u901a\u4fe1\u3001\u591a\u6570\u636e\u4e2d\u5fc3\u7b49\u3002",source:"@site/docs/extensions/consul.md",sourceDirName:"extensions",slug:"/extensions/consul",permalink:"/docs/extensions/consul",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/consul.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"gRPC",permalink:"/docs/extensions/grpc"},next:{title:"ETCD",permalink:"/docs/extensions/etcd"}},i={},p=[{value:"\u5b89\u88c5\u7ec4\u4ef6",id:"\u5b89\u88c5\u7ec4\u4ef6",level:2},{value:"\u76ee\u524d\u652f\u6301\u7684\u80fd\u529b",id:"\u76ee\u524d\u652f\u6301\u7684\u80fd\u529b",level:2},{value:"\u542f\u7528\u7ec4\u4ef6",id:"\u542f\u7528\u7ec4\u4ef6",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u4f5c\u4e3a\u5ba2\u6237\u7aef",id:"\u4f5c\u4e3a\u5ba2\u6237\u7aef",level:2},{value:"\u914d\u7f6e\u4e2d\u5fc3",id:"\u914d\u7f6e\u4e2d\u5fc3",level:2},{value:"\u5176\u4ed6\u8bf4\u660e",id:"\u5176\u4ed6\u8bf4\u660e",level:2},{value:"\u642d\u5efa Consul \u6d4b\u8bd5\u670d\u52a1",id:"\u642d\u5efa-consul-\u6d4b\u8bd5\u670d\u52a1",level:2},{value:"\u4e0b\u7ebf\u670d\u52a1",id:"\u4e0b\u7ebf\u670d\u52a1",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"consul"},"Consul"),(0,a.kt)("p",null,"consul \u7528\u4e8e\u5fae\u670d\u52a1\u4e0b\u7684\u670d\u52a1\u6cbb\u7406\uff0c\u4e3b\u8981\u7279\u70b9\u6709\uff1a\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u5065\u5eb7\u68c0\u67e5\u3001\u952e\u503c\u5b58\u50a8\u3001\u5b89\u5168\u670d\u52a1\u901a\u4fe1\u3001\u591a\u6570\u636e\u4e2d\u5fc3\u7b49\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u7528 consul \u4f5c\u4e3a midway \u7684\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u4e2d\u5fc3\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 consul\u6765\u505a\u8f6f\u8d1f\u8f7d\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u4e3b\u6846\u67b6"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u65e5\u5fd7"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,a.kt)("p",null,"\u611f\u8c22 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/boostbob"},"boostbob")," \u63d0\u4f9b\u7684\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\u56fe\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01e5cFZx1I0draeZynr_!!6000000000831-2-tps-1500-471.png",alt:"image.png"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01iLYF8r1HQ0B3b47Fh_!!6000000000751-2-tps-1500-895.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u5b89\u88c5\u7ec4\u4ef6"},"\u5b89\u88c5\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u9996\u5148\u5b89\u88c5 consul \u7ec4\u4ef6\u548c\u7c7b\u578b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/consul@3 --save\n$ npm i @types/consul --save-dev\n")),(0,a.kt)("p",null,"\u6216\u8005\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/consul": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    "@types/consul": "^0.40.0",\n    // ...\n  }\n}\n')),(0,a.kt)("h2",{id:"\u76ee\u524d\u652f\u6301\u7684\u80fd\u529b"},"\u76ee\u524d\u652f\u6301\u7684\u80fd\u529b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u80fd\u529b\uff08\u53ef\u9009\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u505c\u6b62\u670d\u52a1\u7684\u65f6\u5019\u53cd\u6ce8\u518c\uff08\u53ef\u9009\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u9009\u62e9\uff08\u968f\u673a\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u66b4\u9732\u539f\u59cb\u7684 consul \u5bf9\u8c61")),(0,a.kt)("h2",{id:"\u542f\u7528\u7ec4\u4ef6"},"\u542f\u7528\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as consul from '@midwayjs/consul'\n\n@Configuration({\n  imports: [\n    // ..\n    consul\n  ],\n  importConfigs: [join(__dirname, 'config')]\n})\nexport class MainConfiguration {}\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"config.default.ts")," \u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  consul: {\n    provider: {\n      // \u6ce8\u518c\u672c\u670d\u52a1\n      register: true,\n      // \u5e94\u7528\u6b63\u5e38\u4e0b\u7ebf\u53cd\u6ce8\u518c\n      deregister: true,\n      // consul server \u670d\u52a1\u5730\u5740\n      host: '192.168.0.10',\n      // consul server \u670d\u52a1\u7aef\u53e3\n      port: '8500',\n      // \u8c03\u7528\u670d\u52a1\u7684\u7b56\u7565(\u9ed8\u8ba4\u9009\u53d6 random \u5177\u6709\u968f\u673a\u6027)\n      strategy: 'random',\n    },\n    service: {\n      // \u6b64\u5904\u662f\u5f53\u524d\u8fd9\u4e2a midway \u5e94\u7528\u7684\u5730\u5740\n      address: '127.0.0.1',\n      // \u5f53\u524d midway \u5e94\u7528\u7684\u7aef\u53e3\n      port: 7001,\n      // \u505a\u6cf3\u9053\u9694\u79bb\u7b49\u4f7f\u7528\n      tags: ['tag1', 'tag2'],           \n      name: 'my-midway-project'\n      // others consul service definition\n    }\n  },\n}\n")),(0,a.kt)("p",null,"\u6253\u5f00\u6211\u4eec consul server \u7684 ui \u5730\u5740\uff0c\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01QI7A1d1dU3ECG8QxQ_!!6000000003738-2-tps-1500-471.png",alt:"image.png"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u89c2\u5bdf\u5230 my-midway-project \u9879\u76ee\u5df2\u7ecf\u6ce8\u518c\u5b8c\u6bd5\u3002"),(0,a.kt)("p",null,"\u5047\u5982\u505c\u6b62\u6211\u4eec\u7684 midway \u9879\u76ee\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01EDocUO1TIvRvpxXbw_!!6000000002360-2-tps-1500-401.png",alt:"image.png"})),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u9879\u76ee\u7684\u72b6\u6001\u5c31\u53d8\u4e3a\u7ea2\u8272\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u6f14\u793a\u591a\u53f0\u7684\u60c5\u51b5\uff0c\u5982\u4e0b\u8868\u73b0\uff1a\uff081\u53f0\u5728\u7ebf+1\u53f0\u4e0d\u5728\u7ebf\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01kfmul91eSxu5EiJE3_!!6000000003871-2-tps-1500-405.png",alt:"image.png"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01PZrdpp21Sir5n3y9I_!!6000000006984-2-tps-1500-360.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u4f5c\u4e3a\u5ba2\u6237\u7aef"},"\u4f5c\u4e3a\u5ba2\u6237\u7aef"),(0,a.kt)("p",null,"\u4f8b\u5982\u6211\u4eec\u4f5c\u4e3a\u5ba2\u6237\u7aef A\uff0c\u9700\u8981\u8c03\u7528\u670d\u52a1 B \u7684\u63a5\u53e3\uff0c\u7136\u540e\u6211\u4eec\u9996\u5148\u662f\u67e5\u51fa B \u5065\u5eb7\u7684\u670d\u52a1\uff0c\u7136\u540e\u8fdb\u884c http \u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u6b64\u5904\u4e3a\u4e86\u65b9\u4fbf\u7406\u89e3\uff0c\u6211\u4eec\u6a21\u62df\u67e5\u8be2\u521a\u521a\u6ce8\u518c\u7684\u6210\u529f\u7684\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';\nimport { BalancerService } from '@midwayjs/consul'\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  balancerService: BalancerService;\n\n  @Get('/')\n  async home() {\n    const service = await this.balancerService.getServiceBalancer().select('my-midway-project');\n\n    // output\n    console.log(service)\n\n    // ...\n  }\n}\n\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7684 service \u7684\u5185\u5bb9\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  ID: 'c434e36b-1b62-c4e1-c4ec-76c5d3742ff8',\n  Node: '1b2d5b8771cb',\n  Address: '127.0.0.1',\n  Datacenter: 'dc1',\n  TaggedAddresses: {\n    lan: '127.0.0.1',\n    lan_ipv4: '127.0.0.1',\n    wan: '127.0.0.1',\n    wan_ipv4: '127.0.0.1'\n  },\n  NodeMeta: { 'consul-network-segment': '' },\n  ServiceKind: '',\n  ServiceID: 'my-midway-project:xxx:7001',\n  ServiceName: 'my-midway-project',\n  ServiceTags: [ 'tag1', 'tag2' ],\n  ServiceAddress: 'xxxxx',\n  ServiceTaggedAddresses: {\n    lan_ipv4: { Address: 'xxxxx', Port: 7001 },\n    wan_ipv4: { Address: 'xxxxxx', Port: 7001 }\n  },\n  ServiceWeights: { Passing: 1, Warning: 1 },\n  ServiceMeta: {},\n  ServicePort: 7001,\n  ServiceEnableTagOverride: false,\n  ServiceProxy: { MeshGateway: {}, Expose: {} },\n  ServiceConnect: {},\n  CreateIndex: 14,\n  ModifyIndex: 14\n}\n")),(0,a.kt)("p",null,"\u6b64\u65f6\uff0c\u6211\u4eec\u53ea\u8981\u901a\u8fc7 Address \u548c ServicePort \u53bb\u8fde\u63a5\u670d\u52a1 B\uff0c\u6bd4\u5982\u505a http \u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u67e5\u8be2\u4e0d\u5065\u5eb7\u7684\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"p"},"select")," \u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165 false \u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';\nimport { BalancerService } from '@midwayjs/consul'\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  balancerService: BalancerService;\n\n  @Get('/')\n  async home() {\n\n    const service = await this.balancerService\n      .getServiceBalancer()\n      .select('my-midway-project', false);\n\n    console.log(service);\n\n    // ...\n  }\n}\n\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u4e2d\u5fc3"},"\u914d\u7f6e\u4e2d\u5fc3"),(0,a.kt)("p",null,"\u540c\u65f6 consul \u4e5f\u80fd\u4f5c\u4e3a\u4e00\u4e2a\u670d\u52a1\u914d\u7f6e\u7684\u5730\u65b9\uff0c\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject } from '@midwayjs/decorator';\nimport * as Consul from 'consul';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject('consul:consul')\n  consul: Consul.Consul;\n\n  @Get('/')\n  async home() {\n    await this.consul.kv.set(`name`, `juhai`)\n    // let res = await this.consul.kv.get(`name`);\n    // console.log(res);\n    return 'Hello Midwayjs!';\n  }\n}\n\n")),(0,a.kt)("p",null,"\u6211\u4eec\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kv.set")," \u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u5bf9\u5e94\u7684\u914d\u7f6e\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"kv.get"),"  \u65b9\u6cd5\u53ef\u4ee5\u62ff\u5230\u5bf9\u5e94\u7684\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u5728\u4ee3\u7801\u4e2d\uff0c\u6709\u540c\u5b66\u51fa\u73b0\uff0c\u5728\u6bcf\u6b21\u8bf7\u6c42\u4e2d\u53bb get \u5bf9\u5e94\u7684\u914d\u7f6e\uff0c\u8fd9\u65f6\u4f60\u7684 QPS \u591a\u5c11\u5bf9 Consul server \u7684\u538b\u529b\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u5728QPS\u6bd4\u8f83\u5927\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u5982\u4e0b\u5904\u7406\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Init, Inject, Provide, Scope, ScopeEnum } from '@midwayjs/decorator';\nimport * as Consul from 'consul';\n\n@Provide()\n@Scope(ScopeEnum.Singleton)\nexport class ConfigService {\n\n  @Inject('consul:consul')\n  consul: Consul.Consul;\n\n  config: any;\n\n  @Init()\n  async init() {\n    setInterval(()=>{\n      this.consul.kv.get(`name`).then(res=>{\n        this.config = res;\n      })\n    }, 5000);\n    this.config = await this.consul.kv.get(`name`);\n  }\n\n  async getConfig(){\n    return this.config;\n  }\n}\n\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u76f8\u5f53\u4e8e\u5b9a\u65f6\u53bb\u83b7\u53d6\u5bf9\u5e94\u7684\u914d\u7f6e\uff0c\u5f53\u6bcf\u4e2a\u8bf7\u6c42\u8fdb\u6765\u7684\u65f6\u5019\uff0c\u83b7\u53d6 Scope \u4e3a ScopeEnum.Singleton \u670d\u52a1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"getConfig")," \u65b9\u6cd5\uff0c\u8fd9\u6837\u6bcf 5s \u4e00\u6b21\u83b7\u53d6\u8bf7\u6c42\uff0c\u5c31\u51cf\u5c11\u4e86\u5bf9\u670d\u52a1\u7684\u538b\u529b\u3002"),(0,a.kt)("p",null,"Consul \u754c\u9762\u4e0a\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01V3P6uK1rIVs19JiWn_!!6000000005608-2-tps-1500-374.png",alt:"image.png"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN014O2GyH1sMvIhmlbs4_!!6000000005753-2-tps-1500-667.png",alt:"image.png"})),(0,a.kt)("p",null,"\u4e00\u5171\u63d0\u4f9b\u5982\u4e0b\u51e0\u79cd\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/consul#kv-get"},"get"),"\uff0c\u83b7\u53d6\u5bf9\u5e94key\u7684value"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/consul#kv-keys"},"keys"),"\uff0c\u67e5\u8be2\u67d0\u4e2aprefix\u7684key\u7684\u5217\u8868"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/consul#kv-set"},"set"),"\uff0c\u8bbe\u7f6e\u5bf9\u5e94\u7684key\u7684\u503c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/consul#kv-del"},"del"),"\uff0c\u5220\u9664\u5bf9\u5e94\u7684key")),(0,a.kt)("h2",{id:"\u5176\u4ed6\u8bf4\u660e"},"\u5176\u4ed6\u8bf4\u660e"),(0,a.kt)("p",null,"\u8fd9\u6837\u7684\u597d\u5904\uff0c\u5c31\u662f A->B\uff0cB \u4e5f\u53ef\u4ee5\u8fdb\u884c\u6269\u5c55\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 tags \u505a\u6cf3\u9053\u9694\u79bb\u3002\u4f8b\u5982\u505a\u5355\u5143\u9694\u79bb\u7b49\u3002\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 ServiceWeights \u505a\u5bf9\u5e94\u7684\u6743\u91cd\u63a7\u5236\u3002"),(0,a.kt)("p",null,"Consul \u8fd8\u80fd\u505a Key/Value \u7684\u914d\u7f6e\u4e2d\u5fc3\u7684\u4f5c\u7528\uff0c\u8fd9\u4e2a\u540e\u7eed\u6211\u4eec\u8003\u8651\u652f\u6301\u3002"),(0,a.kt)("h2",{id:"\u642d\u5efa-consul-\u6d4b\u8bd5\u670d\u52a1"},"\u642d\u5efa Consul \u6d4b\u8bd5\u670d\u52a1"),(0,a.kt)("p",null,"\u4e0b\u9762\u63cf\u8ff0\u4e86\u5355\u673a\u7248\u672c\u7684 consul \u642d\u5efa\u6d41\u7a0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -itd -P consul\n")),(0,a.kt)("p",null,"\u7136\u540e\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  my_consul_app docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                                                                                                                                                                                    NAMES\n1b2d5b8771cb        consul              "docker-entrypoint.s\u2026"   4 seconds ago       Up 2 seconds        0.0.0.0:32782->8300/tcp, 0.0.0.0:32776->8301/udp, 0.0.0.0:32781->8301/tcp, 0.0.0.0:32775->8302/udp, 0.0.0.0:32780->8302/tcp, 0.0.0.0:32779->8500/tcp, 0.0.0.0:32774->8600/udp, 0.0.0.0:32778->8600/tcp   cocky_wing\n')),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u6253\u5f00 8500 \u6240\u5bf9\u5e94\u7684\u7aef\u53e3\uff1a\uff08\u4e0a\u56fe\u6bd4\u5982\u6211\u7684\u5bf9\u5e94\u7aef\u53e3\u662f 32779\uff09"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:32779/ui/dc1/kv"},"http://127.0.0.1:32779/ui/")),(0,a.kt)("p",null,"\u6253\u5f00\u540e\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN014O2GyH1sMvIhmlbs4_!!6000000005753-2-tps-1500-667.png",alt:null})),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.default.ts"),"  \u4e2d\u7684port\u5c31\u662f 32779 \u7aef\u53e3\u3002"),(0,a.kt)("h2",{id:"\u4e0b\u7ebf\u670d\u52a1"},"\u4e0b\u7ebf\u670d\u52a1"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981\u624b\u52a8\u5c06consul\u754c\u9762\u4e0a\u4e0d\u9700\u8981\u7684\u670d\u52a1\u7ed9\u4e0b\u7ebf\u6389\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';\nimport * as Consul from 'consul'\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n\n  @Inject('consul:consul')\n  consul: Consul.Consul;\n\n  @Get(\"/222\")\n  async home2(){\n    let res = await this.consul.agent.service.deregister(`my-midway-project:30.10.72.195:7002`);\n    console.log(res);\n\n    // ...\n  }\n\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"deregister")," \u65b9\u6cd5\uff0c\u5bf9\u5e94 consul \u754c\u9762\u4e0a\u7684\u540d\u5b57\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01d5QMUJ1DULTKPSJsr_!!6000000000219-2-tps-1500-465.png",alt:"image.png"})))}u.isMDXComponent=!0}}]);