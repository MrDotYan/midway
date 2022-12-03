"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={},s="Testing",l={unversionedId:"hooks/test",id:"hooks/test",title:"Testing",description:"In Midway Hooks, we can quickly test the Http interface.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/hooks/test.md",sourceDirName:"hooks",slug:"/hooks/test",permalink:"/en/docs/hooks/test",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/test.md",tags:[],version:"current",frontMatter:{},sidebar:"hooks",previous:{title:"Prisma ORM",permalink:"/en/docs/hooks/prisma"},next:{title:"Project configuration",permalink:"/en/docs/hooks/config"}},p={},i=[{value:"Interface test",id:"interface-test",level:2},{value:"Call through <code>@midwayjs/hooks</code>",id:"call-through-midwayjshooks",level:3},{value:"Manual call",id:"manual-call",level:3},{value:"Request parameter Data",id:"request-parameter-data",level:3},{value:"Query parameter Query",id:"query-parameter-query",level:3},{value:"Path parameter Params",id:"path-parameter-params",level:3},{value:"Request header Headers",id:"request-header-headers",level:3}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing"},"Testing"),(0,r.kt)("p",null,"In Midway Hooks, we can quickly test the Http interface."),(0,r.kt)("h2",{id:"interface-test"},"Interface test"),(0,r.kt)("p",null,"Take Hello World as an example. In ",(0,r.kt)("inlineCode",{parentName:"p"},"src/hello.ts"),", we exported an interface with the following code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Api, Get } from '@midwayjs/hooks';\n\nexport default Api(Get('/hello'), async () => {\n  return 'Hello World!';\n});\n")),(0,r.kt)("p",null,"In the test, you can start the application through ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/mock")," and call the interface to complete the test."),(0,r.kt)("h3",{id:"call-through-midwayjshooks"},"Call through ",(0,r.kt)("inlineCode",{parentName:"h3"},"@midwayjs/hooks")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks")," provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"getApiTrigger (API: ApiFunction)")," method that can be used to get triggers."),(0,r.kt)("p",null,"Take the above ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," interface as an example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"getApiTrigger(hello)")," returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "HTTP ",\n  "method": "GET ",\n  "path": "/hello"\n}\n')),(0,r.kt)("p",null,"Here, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createHttpRequest")," method provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/mock")," to call the interface. For ",(0,r.kt)("inlineCode",{parentName:"p"},"createHttpRequest")," usage documents, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/supertest"},"supertest"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/hello.test.ts\nimport {\n  close\n  createApp\n  createHttpRequest\n} from '@midwayjs/mock';\nimport {\n  Framework\n  IMidwayKoaApplication\n} from '@midwayjs/koa';\nimport { getApiTrigger, HttpTriger } from '@midwayjs/hooks';\nimport hello from './hello';\n\ndescribe('test koa with api router', () => {\n  let app: IMidwayKoaApplication;\n\n  beforeAll(async () => {\n    app = await createApp();\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  test('Hello World', async () => {\n    const trigger = getApiTrigger<HttpTriger>(hello);\n    const response = await createHttpRequest(app)\n      .get(trigger.path)\n      .expect(200);\n    expect(response.text).toBe('Hello World!');\n  });\n});\n")),(0,r.kt)("h3",{id:"manual-call"},"Manual call"),(0,r.kt)("p",null,"If you call this operation manually, you must specify parameters such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Path"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"test('Hello World', async () => {\n  const response = await createHttpRequest(app)\n    .get('/hello')\n    .expect(200);\n  expect(response.text).toBe('Hello World!');\n});\n")),(0,r.kt)("h3",{id:"request-parameter-data"},"Request parameter Data"),(0,r.kt)("p",null,"Back-end code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Api, Post } from '@midwayjs/hooks';\n\nexport default Api (\n  Post(), // Http Path: /api/say\n  async (name: string) => {\n    return 'Hello ${name}!';\n  }\n);\n")),(0,r.kt)("p",null,"Test code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"test('Hello World', async () => {\n  const trigger = getApiTrigger<HttpTriger>(say);\n  const response = await createHttpRequest(app)\n    .post(trigger.path)\n    .send({ args: ['Midway'] })\n    .expect(200);\n  expect(response.text).toBe('Hello Midway!');\n});\n")),(0,r.kt)("h3",{id:"query-parameter-query"},"Query parameter Query"),(0,r.kt)("p",null,"Back-end code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  Query\n  useContext\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get('/hello')\n  Query<{ name: string }>()\n  async () => {\n    const ctx = useContext();\n    return 'Hello ${ctx.query.name}!';\n  }\n);\n")),(0,r.kt)("p",null,"Test code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"test('Hello World', async () => {\n  const trigger = getApiTrigger<HttpTriger>(hello);\n  const response = await createHttpRequest(app)\n    .get(trigger.path)\n    .query({ name: 'Midway' })\n    .expect(200);\n  expect(response.text).toBe('Hello Midway!');\n});\n")),(0,r.kt)("h3",{id:"path-parameter-params"},"Path parameter Params"),(0,r.kt)("p",null,"Back-end code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Api, Get, Params, useContext } from '@midwayjs/hooks'\n\nexport default Api (\n  Get('/article/:id')\n  Params<{ id: string }> (,\n  async () => {\n    const ctx = useContext()\n    return {\n      article: ctx.params.id\n    }\n  }\n)\n")),(0,r.kt)("p",null,"Test code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"test('Get Article', async () => {\n  const response = await createHttpRequest(app)\n    .get('/article/1')\n    .expect(200);\n\n  expect(response.body).toEqual({ article: '1' });\n});\n")),(0,r.kt)("h3",{id:"request-header-headers"},"Request header Headers"),(0,r.kt)("p",null,"Back-end code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  Headers\n  useContext\n} from '@midwayjs/hooks';\n\nexport default Api (\n  Get('/auth')\n  Headers<{ token: string }>()\n  async () => {\n    const ctx = useContext();\n    return {\n      token: ctx.headers.token\n    };\n  }\n);\n")),(0,r.kt)("p",null,"Test code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"test('Auth', async () => {\n  const response = await createHttpRequest(app)\n    .get('/auth')\n    .set('token', '123456')\n    .expect(200);\n\n  expect(response.body).toEqual({ token: '123456' });\n});\n")))}u.isMDXComponent=!0}}]);