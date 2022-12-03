"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28232],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5097:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={},i="Upgrade to 3.x",l={unversionedId:"upgrade_v3",id:"upgrade_v3",title:"Upgrade to 3.x",description:"This article will introduce how to upgrade from midway v2 to midway v3.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/upgrade_v3.md",sourceDirName:".",slug:"/upgrade_v3",permalink:"/en/docs/upgrade_v3",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/upgrade_v3.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Quick Start",permalink:"/en/docs/quick_guide"},next:{title:"Create the first application",permalink:"/en/docs/quickstart"}},s={},p=[{value:"Automatic upgrade tool",id:"automatic-upgrade-tool",level:2},{value:"Manual upgrade",id:"manual-upgrade",level:2},{value:"Package version update",id:"package-version-update",level:3},{value:"Query/Body/Param/Header decorator changes",id:"querybodyparamheader-decorator-changes",level:3},{value:"Validate/Rule decorator",id:"validaterule-decorator",level:3},{value:"task component configuration key change",id:"task-component-configuration-key-change",level:3},{value:"Configured absolute path",id:"configured-absolute-path",level:3},{value:"Use default frame/multiframe",id:"use-default-framemultiframe",level:3},{value:"Removed batch of IoC container APIs",id:"removed-batch-of-ioc-container-apis",level:3},{value:"@midwayjs/web(egg) section",id:"midwayjswebegg-section",level:2},{value:"start port",id:"start-port",level:3},{value:"Add egg-mock",id:"add-egg-mock",level:3},{value:"logger",id:"logger",level:3},{value:"egg plugin",id:"egg-plugin",level:3},{value:"Scheduled tasks",id:"scheduled-tasks",level:3},{value:"Other adjustments for component/framework developers",id:"other-adjustments-for-componentframework-developers",level:2},{value:"RegisterObject in the component no longer adds namespace",id:"registerobject-in-the-component-no-longer-adds-namespace",level:3},{value:"Custom framework section",id:"custom-framework-section",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrade-to-3x"},"Upgrade to 3.x"),(0,r.kt)("p",null,"This article will introduce how to upgrade from midway v2 to midway v3."),(0,r.kt)("p",null,"Upgrading from Midway v2 to Midway v3, there will be some Breaking Changes. This document will list these Breaking places in detail, so that users can know the changes in advance and respond to them."),(0,r.kt)("h2",{id:"automatic-upgrade-tool"},"Automatic upgrade tool"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before the upgrade, please cut out a new branch to avoid the failure of the upgrade and cause no recovery! ! ! ")),(0,r.kt)("p",null,"Copy the following script and execute it in the project root directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx --ignore-existing midway-upgrade\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Due to different business situations, please check the manual upgrade after the script upgrade.")),(0,r.kt)("h2",{id:"manual-upgrade"},"Manual upgrade"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"midway v3 support since node v12. ")),(0,r.kt)("h3",{id:"package-version-update"},"Package version update"),(0,r.kt)("p",null,"All component packages, core packages will be upgraded to 3.x version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/bootstrap": "^3.0.0",\n    "@midwayjs/core": "^3.0.0",\n    "@midwayjs/decorator": "^3.0.0",\n    "@midwayjs/koa": "^3.0.0",\n    "@midwayjs/task": "^3.0.0",\n  },\n  "devDependencies": {\n    "@midwayjs/cli": "^1.2.90",\n    "@midwayjs/luckyeye": "^1.0.0",\n    "@midwayjs/mock": "^3.0.0",\n    // ...\n  }\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwyajs/luckeye"),", except ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/logger")," version."),(0,r.kt)("h3",{id:"querybodyparamheader-decorator-changes"},"Query/Body/Param/Header decorator changes"),(0,r.kt)("p",null,"Mainly the default behavior without parameters."),(0,r.kt)("p",null,"old"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async invoke(@Query() name) {\n  // ctx.query.name\n}\n")),(0,r.kt)("p",null,"new"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async invoke(@Query() name) {\n  // ctx.query\n}\n\nasync invoke(@Query('name') name) {\n  // ctx.query.name\n}\n")),(0,r.kt)("h3",{id:"validaterule-decorator"},"Validate/Rule decorator"),(0,r.kt)("p",null,"old"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Validate, Rule, RuleType } from '@midwayjs/decorator';\n")),(0,r.kt)("p",null,"new"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Validate, Rule, RuleType } from '@midwayjs/validate';\n")),(0,r.kt)("p",null,"Since validate is abstracted into a component, dependencies need to be installed and enabled in the code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration\nimport * as validate from '@midwayjs/validate';\n\n@Configuration({\n  // ...\n  imports: [\n    validate\n  ],\n})\nexport class MainConfiguration {\n  // ...\n}\n\n")),(0,r.kt)("h3",{id:"task-component-configuration-key-change"},"task component configuration key change"),(0,r.kt)("p",null,"old"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const taskConfig = {};\n")),(0,r.kt)("p",null,"new"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const task = {};\n")),(0,r.kt)("h3",{id:"configured-absolute-path"},"Configured absolute path"),(0,r.kt)("p",null,"Relative paths are no longer supported"),(0,r.kt)("p",null,"old"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration\n\n@Configuration({\n  // ...\n  importConfigs: [\n    './config' // ok\n  ]\n})\nexport class MainConfiguration {\n  // ...\n}\n\n")),(0,r.kt)("p",null,"new"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"// src/configuration\nimport { join } from 'path';\n\n@Configuration({\n  // ...\n  importConfigs: [\n- './config' // error\n+ join(__dirname, './config') // ok\n  ]\n})\nexport class MainConfiguration {\n  // ...\n}\n\n")),(0,r.kt)("h3",{id:"use-default-framemultiframe"},"Use default frame/multiframe"),(0,r.kt)("p",null,"Old, will be introduced in bootstrap.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const WebFramework = require('@midwayjs/koa').Framework;\nconst GRPCFramework = require('@midwayjs/grpc').Framework;\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\nBootstrap\n  .load(config => {\n    return new WebFramework().configure(config.cluster);\n  })\n  .load(config => {\n    return new GRPCFramemwork().configure(config.grpcServer);\n  })\n  .run();\n")),(0,r.kt)("p",null,"new version"),(0,r.kt)("p",null,"Separate instantiation is no longer required in bootstrap.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { Bootstrap } = require('@midwayjs/bootstrap');\nBootstrap.run();\n")),(0,r.kt)("p",null,"Instead, import as a component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration\nimport * as web from '@midwayjs/web';\nimport * as grpc from '@midwayjs/grpc';\n\n@Configuration({\n  // ...\n  imports: [\n    web,\n    grpc,\n    //...\n  ],\n})\nexport class MainConfiguration {\n  // ...\n}\n")),(0,r.kt)("p",null,"Other effects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"It is no longer necessary to use the createBootstrap method to start from bootstrap.js in the test"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"The configuration of the original entry Framework can now be placed in config.*.ts, with the framework name as the key")))),(0,r.kt)("h3",{id:"removed-batch-of-ioc-container-apis"},"Removed batch of IoC container APIs"),(0,r.kt)("p",null,"Remove the following methods on container"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getConfigService(): IConfigService;"),(0,r.kt)("li",{parentName:"ul"},"getEnvironmentService(): IEnvironmentService;"),(0,r.kt)("li",{parentName:"ul"},"getInformationService(): IInformationService;"),(0,r.kt)("li",{parentName:"ul"},"setInformationService(service: IInformationService): void;"),(0,r.kt)("li",{parentName:"ul"},"getAspectService(): IAspectService;"),(0,r.kt)("li",{parentName:"ul"},"getCurrentEnv(): string;")),(0,r.kt)("p",null,"Now there are corresponding framework built-in services to replace."),(0,r.kt)("p",null,"For example, the old way of writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const environmentService = app.getApplicationContext().getEnvironmentService();\nconst env = environmentService.getCurrentEnvironment();\n")),(0,r.kt)("p",null,"new spelling"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const environmentService = app.getApplicationContext().get(MidwayEnvironmentService)\nconst env = environmentService.getCurrentEnvironment();\n")),(0,r.kt)("h2",{id:"midwayjswebegg-section"},"@midwayjs/web(egg) section"),(0,r.kt)("h3",{id:"start-port"},"start port"),(0,r.kt)("p",null,"The new version of the framework will read a port configuration when it is started. If it is not configured, port monitoring may not be started."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"// src/config/config.default\nexport default {\n  // ...\n  egg: {\n    port: 7001,\n  },\n}\n")),(0,r.kt)("h3",{id:"add-egg-mock"},"Add egg-mock"),(0,r.kt)("p",null,"Since the framework removed the egg-mock package, in the new version ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," needs to be referenced manually."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "egg-mock": "^1.0.0",\n    // ...\n  }\n}\n')),(0,r.kt)("h3",{id:"logger"},"logger"),(0,r.kt)("p",null,"The new version uses @midwayjs/logger uniformly, whether egg logger is enabled or not."),(0,r.kt)("p",null,"In order not to conflict with the egg log, we use a new key, and the original ",(0,r.kt)("inlineCode",{parentName:"p"},"midwayFeature")," field is no longer used."),(0,r.kt)("p",null,"old"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const logger = {\n  level: 'warn',\n  consoleLevel: 'info'\n}\n")),(0,r.kt)("p",null,"new"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const midwayLogger = {\n  default: {\n    level: 'warn',\n    consoleLevel: 'info'\n  }\n}\n")),(0,r.kt)("p",null,"Egg's ",(0,r.kt)("inlineCode",{parentName:"p"},"customLogger")," field is compatible with egg plugins that cannot be modified. For business code, it is best to modify them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const midwayLogger = {\n  default: {\n    level: 'warn',\n    consoleLevel: 'info'\n  },\n  clients: {\n    // custom log\n    customLoggerA: {\n      // ...\n    }\n  }\n}\n")),(0,r.kt)("p",null,"For the rest of the more specific configuration, please refer to the Customization section in ",(0,r.kt)("a",{parentName:"p",href:"logger"},"Log Chapter"),"."),(0,r.kt)("h3",{id:"egg-plugin"},"egg plugin"),(0,r.kt)("p",null,"In Midway3, we turned off most of the egg default plugins in order to unify documentation and behavior."),(0,r.kt)("p",null,"The default plugins in the new version are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  onerror: true,\n  security: true,\n  static: false,\n  development: false,\n  watcher: false,\n  multipart: false,\n  logrotator: false,\n  view: false,\n  schedule: false,\n  i18n: false,\n}\n")),(0,r.kt)("p",null,"Please turn it on as appropriate (may conflict with midway ability)."),(0,r.kt)("p",null,"The default egg log cutting plugin (logrotator), because the log no longer supports egg logger, we directly closed it in the framework (midway logger comes with cutting)."),(0,r.kt)("h3",{id:"scheduled-tasks"},"Scheduled tasks"),(0,r.kt)("p",null,"If you want to use the old ",(0,r.kt)("inlineCode",{parentName:"p"},"@Schedule")," decorator, you need to additionally install the ",(0,r.kt)("inlineCode",{parentName:"p"},"midway-schedule")," package and import it as an egg plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/plugin.ts\n\nexport default {\n  schedule: true,\n  schedulePlus: {\n    enable: true,\n    package: 'midway-schedule',\n  }\n  // ...\n}\n")),(0,r.kt)("h2",{id:"other-adjustments-for-componentframework-developers"},"Other adjustments for component/framework developers"),(0,r.kt)("h3",{id:"registerobject-in-the-component-no-longer-adds-namespace"},"RegisterObject in the component no longer adds namespace"),(0,r.kt)("p",null,"During component development, the namespace prefix is \u200b\u200bno longer added."),(0,r.kt)("p",null,"old, component entry"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Configuration({\n  namespace: 'A'\n  // ...\n})\nexport class MainConfiguration {\n\n  async onReady(container) {\n    container.registerObject('aaa', 'bbb');\n  }\n}\n\ncontainer.getAsync('A:aaa'); // => OK\n")),(0,r.kt)("p",null,"new component entry"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Configuration({\n  namespace: 'A'\n  // ...\n})\nexport class MainConfiguration {\n\n  async onReady(container) {\n    container.registerObject('aaa', 'bbb');\n  }\n}\n\ncontainer.getAsync('aaa'); // => OK\n")),(0,r.kt)("h3",{id:"custom-framework-section"},"Custom framework section"),(0,r.kt)("p",null,"The changes in the custom framework are relatively large, and the componentization of the framework is the goal of this version. There are several places that need to be modified."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Add the @Framework logo to the original framework")),(0,r.kt)("p",null,"old"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class CustomKoaFramework extends BaseFramework {\n// ...\n}\n")),(0,r.kt)("p",null,"new"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Framework } from '@midwayjs/decorator';\n\n@Framework()\nexport class CustomKoaFramework extends BaseFramework {\n// ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Export Configuration at the entrance according to the component specification")),(0,r.kt)("p",null,"You can use lifecycles in configuration, same as components. The ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," method will be called and executed explicitly during the newly added ",(0,r.kt)("inlineCode",{parentName:"p"},"onServerReady")," lifecycle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration,Inject } from '@midwayjs/decorator';\nimport { MidwayKoaFramework } from './framework';\n\n@Configuration({\n  namespace: 'koa',\n})\nexport class KoaConfiguration {\n  @Inject()\n  framework: MidwayKoaFramework;\n\n  async onReady() {}\n\n  async onServerReady() {\n    // ...\n  }\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. During framework development")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It should be noted that since the framework is initialized before the user life cycle, when applicationInit, do not inject the configuration through the @Config decorator, but call configService to obtain it. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Framework } from '@midwayjs/decorator';\n\n@Framework()\nexport class CustomKoaFramework extends BaseFramework {\n\n   configure() {\n     /**\n     * return your configuration here\n     * The returned value will be assigned to this.configurationOptions, and the original user's explicit input parameters will be connected\n     *\n     */\n     return this.configService.getConfiguration('xxxxxxx');\n   }\n\n  /**\n   * This new method is used to determine whether the framework is loaded\n   * Sometimes components include server side (framework) and client side, you need to judge\n   *\n   */\n   isEnable(): boolean {\n     return this.configurationOptions.services?.length > 0;\n   }\n\n  // ...\n}\n")),(0,r.kt)("p",null,"This can also be judged when used outside."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration,Inject } from '@midwayjs/decorator';\nimport { MidwayKoaFramework } from './framework';\n\n@Configuration({\n  namespace: 'koa',\n})\nexport class KoaConfiguration {\n  @Inject()\n  framework: MidwayKoaFramework;\n\n  async onReady() {}\n\n  async onServerReady() {\n    // If isEnable is true, the framework will call framework.run() by default\n    // If enable is false at the beginning, you can also delay to manually run\n    if (/* defer execution */) {\n      await this.framework.run();\n    }\n  }\n}\n\n")))}u.isMDXComponent=!0}}]);