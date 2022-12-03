"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[67607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||a;return n?o.createElement(d,l(l({ref:t},c),{},{components:n})):o.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"\u5185\u7f6e Hooks"},l=void 0,i={unversionedId:"hooks/hooks_builtin",id:"version-2.0.0/hooks/hooks_builtin",title:"\u5185\u7f6e Hooks",description:"useContext",source:"@site/versioned_docs/version-2.0.0/hooks/hooks_builtin.md",sourceDirName:"hooks",slug:"/hooks/hooks_builtin",permalink:"/en/docs/2.0.0/hooks/hooks_builtin",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/hooks/hooks_builtin.md",tags:[],version:"2.0.0",frontMatter:{title:"\u5185\u7f6e Hooks"},sidebar:"hooks",previous:{title:"Hooks \u8bed\u6cd5",permalink:"/en/docs/2.0.0/hooks/hooks_syntax"},next:{title:"\u8def\u7531",permalink:"/en/docs/2.0.0/hooks/hooks_route"}},s={},u=[{value:"useContext",id:"usecontext",level:2},{value:"ctx.requestContext",id:"ctxrequestcontext",level:3},{value:"ctx.logger",id:"ctxlogger",level:3},{value:"useInject",id:"useinject",level:2},{value:"useConfig",id:"useconfig",level:2},{value:"useLogger",id:"uselogger",level:2},{value:"usePlugin",id:"useplugin",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usecontext"},"useContext"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const ctx = useContext();\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useContext")," \u53ef\u4ee5\u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u4e0a\u4e0b\u6587\u3002"),(0,r.kt)("p",null,"Context \u7c7b\u578b\u53ef\u4ee5\u901a\u8fc7\u6cdb\u578b\u6ce8\u5165\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Koa\nimport { Context } from '@midwayjs/koa';\nconst ctx = useContext<Context>();\n\n// FaaS\nimport { Context } from '@midwayjs/faas';\nconst ctx = useContext<Context>();\n")),(0,r.kt)("h3",{id:"ctxrequestcontext"},"ctx.requestContext"),(0,r.kt)("p",null,"Midway \u7684 IoC \u8bf7\u6c42\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u5177\u4f53\u6587\u6863\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.yuque.com/midwayjs/faas/use_inject"},"\u4f7f\u7528\u4f9d\u8d56\u6ce8\u5165")),(0,r.kt)("h3",{id:"ctxlogger"},"ctx.logger"),(0,r.kt)("p",null,"Midway \xa0 \u81ea\u5e26\u7684 Logger \u5bf9\u8c61"),(0,r.kt)("h2",{id:"useinject"},"useInject"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useInject<T = any>(identifier: any): Promise<T>;\n")),(0,r.kt)("p",null,"useInject \u662f\u5bf9 Midway IoC \u4f9d\u8d56\u6ce8\u5165\u529f\u80fd\u7684\u5c01\u88c5\uff0c\u7528\u4e8e\u83b7\u53d6\u6ce8\u5165\u7684\u5b9e\u4f8b\uff0c\u7b49\u540c\u4e8e Class \u91cc\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Inject")," \u88c5\u9970\u5668\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"/docs/container"},"\u4f7f\u7528\u4f9d\u8d56\u6ce8\u5165")," \u6587\u6863\u4e2d\u63d0\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"getAsync")," \u65b9\u6cd5\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useInject } from '@midwayjs/hooks';\nimport { Provide } from '@midwayjs/decorator';\n\nexport async function getModel() {\n  const model = await useInject(Model);\n  return model.name;\n}\n\n@Provide()\nexport class Model {\n  name = 'model';\n}\n")),(0,r.kt)("p",null,"\u8fdb\u4e00\u6b65\u7684\u6587\u6863\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/container"},"\u4f7f\u7528\u4f9d\u8d56\u6ce8\u5165"),"\u3002"),(0,r.kt)("h2",{id:"useconfig"},"useConfig"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const config = useConfig('key');\n")),(0,r.kt)("p",null,"useConfig \u53ef\u4ee5\u7528\u4e8e\u83b7\u53d6\u4e1a\u52a1\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u4e1a\u52a1\u914d\u7f6e\u7684\u4f7f\u7528\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/env_config"},"\u591a\u73af\u5883\u914d\u7f6e")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Midway Hooks \u4e2d\uff0c\u76f8\u5173\u7684\u51fd\u6570\u6587\u4ef6\u9ed8\u8ba4\u5b58\u653e\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/apis/")," \u76ee\u5f55\u4e0b\u3002\u56e0\u6b64 config \u4e0e configuration \u6240\u5728\u7684\u76ee\u5f55\u9700\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/apis/"),"\uff08\u5982\u4fee\u6539\u4e86 midway.config.ts \u7684 source \u5b57\u6bb5\uff0c\u8bf7\u4f7f\u7528\u4fee\u6539\u540e\u7684\u76ee\u5f55\uff09")),(0,r.kt)("h2",{id:"uselogger"},"useLogger"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const logger = useLogger();\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLogger")," \u53ef\u4ee5\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"logger")," \u5e76\u8f93\u51fa\u65e5\u5fd7\u3002"),(0,r.kt)("p",null,"\u8f93\u51fa\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"logger.debug();\nlogger.info();\nlogger.warn();\nlogger.error();\n")),(0,r.kt)("h2",{id:"useplugin"},"usePlugin"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 Egg \u63d2\u4ef6\u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const plugin = usePlugin('pluginName');\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Demo\uff1a\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eggjs/egg-sequelize"},"egg-sequelize")," \u67e5\u8be2\u6570\u636e\u5e93")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { usePlugin } from '@midwayjs/hooks';\n\nexport default async function getUserById(empId: number) {\n  const sequelize = usePlugin('sequelize');\n  console.log(sequelize);\n}\n")))}p.isMDXComponent=!0}}]);