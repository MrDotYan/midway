"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[41981],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"Timer \u89e6\u53d1\u5668\uff08\u5b9a\u65f6\u4efb\u52a1\uff09"},i=void 0,o={unversionedId:"serverless/aliyun_trigger_timer",id:"version-2.0.0/serverless/aliyun_trigger_timer",title:"Timer \u89e6\u53d1\u5668\uff08\u5b9a\u65f6\u4efb\u52a1\uff09",description:"\u5b9a\u65f6\u4efb\u52a1\u89e6\u53d1\u5668\u7528\u4e8e\u5b9a\u65f6\u6267\u884c\u4e00\u4e2a\u51fd\u6570\u3002\u5b9a\u65f6\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u65f6\u95f4\u95f4\u9694\uff08every\uff09\u548c cron \u683c\u5f0f\u3002",source:"@site/versioned_docs/version-2.0.0/serverless/aliyun_trigger_timer.md",sourceDirName:"serverless",slug:"/serverless/aliyun_trigger_timer",permalink:"/en/docs/2.0.0/serverless/aliyun_trigger_timer",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/aliyun_trigger_timer.md",tags:[],version:"2.0.0",frontMatter:{title:"Timer \u89e6\u53d1\u5668\uff08\u5b9a\u65f6\u4efb\u52a1\uff09"},sidebar:"Serverless",previous:{title:"API \u7f51\u5173",permalink:"/en/docs/2.0.0/serverless/aliyun_trigger_apigw"},next:{title:"OSS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09",permalink:"/en/docs/2.0.0/serverless/aliyun_trigger_oss"}},p={},s=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"Timer \u914d\u7f6e",id:"timer-\u914d\u7f6e",level:2},{value:"\u4e8b\u4ef6\u7ed3\u6784",id:"\u4e8b\u4ef6\u7ed3\u6784",level:2},{value:"\u672c\u5730\u5f00\u53d1",id:"\u672c\u5730\u5f00\u53d1",level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",level:2},{value:"\u5173\u95ed\u89e6\u53d1\u5668",id:"\u5173\u95ed\u89e6\u53d1\u5668",level:2}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5b9a\u65f6\u4efb\u52a1\u89e6\u53d1\u5668\u7528\u4e8e\u5b9a\u65f6\u6267\u884c\u4e00\u4e2a\u51fd\u6570\u3002\u5b9a\u65f6\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u65f6\u95f4\u95f4\u9694\uff08every\uff09\u548c cron \u683c\u5f0f\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6e29\u99a8\u63d0\u9192\uff0c\u6d4b\u8bd5\u51fd\u6570\u540e\u8bf7\u53ca\u65f6\u5173\u95ed\u89e6\u53d1\u5668\u81ea\u52a8\u6267\u884c\uff0c\u907f\u514d\u8d85\u989d\u6263\u8d39\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/decorator';\nimport { Context, FC } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloAliyunService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.TIMER, {\n    type: 'cron',\n    value: '0 0 4 * * *', // \u6bcf\u59294:00\u89e6\u53d1  https://help.aliyun.com/document_detail/68172.html\n  })\n  async handleTimerEvent(event: FC.TimerEvent) {\n    this.ctx.logger.info(event);\n    return 'hello world';\n  }\n}\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u540e\uff0c\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"timer-\u914d\u7f6e"},"Timer \u914d\u7f6e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"'cron'"),(0,a.kt)("td",{parentName:"tr",align:null},"'every'"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b\uff0c\u89e6\u53d1\u7c7b\u578b\uff0c\u5206\u522b\u4ee3\u8868 cron \u8868\u8fbe\u5f0f\uff0c\u56fa\u5b9a\u65f6\u95f4\u95f4\u9694\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b\uff0ccron \u8868\u8fbe\u5f0f\u6216\u8005 every \u503c\u3002every \u65f6\u6700\u5c0f\u65f6\u95f4\u95f4\u9694 1 \u5206\u949f\uff0c\u56fa\u5b9a\u5355\u4f4d\u5206\u949f"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payload"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u4e00\u4e2a\u56fa\u5b9a\u4f20\u9012\u7684\u503c\uff0c\u5f88\u5c11\u7528"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0cFC \u4f7f\u7528\u7684\u662f UTC \u65f6\u95f4\uff0c\u548c\u4f20\u7edf\u7684\u4e2d\u56fd\u65f6\u533a\u4e0d\u540c\u3002")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"cron \u8868\u8fbe\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@ServerlessTrigger(ServerlessTriggerType.TIMER, {\n  type: 'cron',\n  value: '0 0 4 * * *', // \u6bcf\u59294:00\u89e6\u53d1\n})\n")),(0,a.kt)("p",null,"cron \u8868\u8fbe\u5f0f\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/169784.html"},"\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"every \u8868\u8fbe\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@ServerlessTrigger(ServerlessTriggerType.TIMER, {\n  type: 'every',\n  value: '5m', // \u6bcf\u9694 5 \u5206\u949f\uff0c\u6700\u5c0f\u4e3a 1 \u5206\u949f\n})\n")),(0,a.kt)("h2",{id:"\u4e8b\u4ef6\u7ed3\u6784"},"\u4e8b\u4ef6\u7ed3\u6784"),(0,a.kt)("p",null,"Timer \u6d88\u606f\u8fd4\u56de\u7684\u7ed3\u6784\u5982\u4e0b\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"FC.TimerEvent")," \u7c7b\u578b\u4e2d\u6709\u63cf\u8ff0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n  triggerTime: new Date().toJSON(),\n  triggerName: 'timer',\n  payload: '',\n}\n")),(0,a.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1"},"\u672c\u5730\u5f00\u53d1"),(0,a.kt)("p",null,"\u4e8b\u4ef6\u7c7b\u578b\u7684\u51fd\u6570\u672c\u5730\u65e0\u6cd5\u4f7f\u7528 dev \u5f00\u53d1\uff0c\u53ea\u80fd\u901a\u8fc7\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test")," \u8fdb\u884c\u6d4b\u8bd5\u6267\u884c\u3002"),(0,a.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u548c HTTP \u6d4b\u8bd5\u4e0d\u540c\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u521b\u5efa\u51fd\u6570 app\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerlessInstance")," \u83b7\u53d6\u6574\u4e2a\u7c7b\u7684\u5b9e\u4f8b\uff0c\u4ece\u800c\u8c03\u7528\u5230\u7279\u5b9a\u65b9\u6cd5\u6765\u6d4b\u8bd5\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"createTimerEvent")," \u65b9\u6cd5\u5feb\u901f\u521b\u5efa\u5e73\u53f0\u4f20\u5165\u7684\u7ed3\u6784\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\nimport { HelloAliyunService } from '../src/function/hello_aliyun';\nimport { createTimerEvent, createInitializeContext } from '@midwayjs/serverless-fc-trigger';\nimport { join } from 'path';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n  let app: Application;\n  let instance: HelloAliyunService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>(join(__dirname, '../'), {\n      initContext: createInitializeContext(),\n    });\n    instance = await app.getServerlessInstance<HelloAliyunService>(HelloAliyunService);\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from timer trigger', async () => {\n    expect(await instance.handleTimerEvent(createTimerEvent())).toEqual('hello world');\n  });\n});\n")),(0,a.kt)("h2",{id:"\u5173\u95ed\u89e6\u53d1\u5668"},"\u5173\u95ed\u89e6\u53d1\u5668"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u518d\u4f7f\u7528\uff0c\u8bf7\u52a1\u5fc5\u5173\u95ed\u89e6\u53d1\u5668\u6216\u8005\u76f4\u63a5\u5220\u9664\u3002"),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1618734441838-7a943f47-bbf7-4398-b63e-4b249f83d711.png#clientId=u77edf6bf-5564-4&from=paste&height=405&id=u9e6b7d20&margin=%5Bobject%20Object%5D&originHeight=810&originWidth=2280&originalType=binary&ratio=1&size=134297&status=done&style=none&taskId=u261c1c9a-06a0-4664-9a2b-4f0188cd9b8&width=1140",width:"1140"}))}c.isMDXComponent=!0}}]);