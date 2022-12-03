"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,s(s({ref:t},u),{},{components:n})):o.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},s="About Alias Path",i={unversionedId:"faq/alias_path",id:"faq/alias_path",title:"About Alias Path",description:"We do not recommend using Alias Path, Node and TS that do not support this function natively. Even if they do, they are now implemented through various Hack methods (starting from v18, Node.js already has a exports scheme, but the type is not supported yet, so you can wait for it later).",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/faq/alias_path.md",sourceDirName:"faq",slug:"/faq/alias_path",permalink:"/en/docs/faq/alias_path",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/faq/alias_path.md",tags:[],version:"current",frontMatter:{},sidebar:"other",previous:{title:"Common TS questions",permalink:"/en/docs/faq/ts_problem"},next:{title:"How to install Node.js environment",permalink:"/en/docs/how_to_install_nodejs"}},p={},l=[{value:"Support for Local Development (dev Phase)",id:"support-for-local-development-dev-phase",level:2},{value:"test support (jest test)",id:"test-support-jest-test",level:2},{value:"Runtime support",id:"runtime-support",level:2},{value:"Other",id:"other",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about-alias-path"},"About Alias Path"),(0,r.kt)("p",null,"We do not recommend using Alias Path, Node and TS that do not support this function natively. Even if they do, they are now implemented through various Hack methods (starting from v18, Node.js already has a exports scheme, but the type is not supported yet, so you can wait for it later)."),(0,r.kt)("p",null,"If you must want to use it, please look down."),(0,r.kt)("h2",{id:"support-for-local-development-dev-phase"},"Support for Local Development (dev Phase)"),(0,r.kt)("p",null,"Tsc does not convert the module path of import when compiling ts into js, so when you configure paths in ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", if you use paths in ts and import the corresponding module, there is a high probability that the module cannot be found when compiling js."),(0,r.kt)("p",null,"The solution is to either use paths, or use paths to import some declarations instead of specific values, or use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dividab/tsconfig-paths"},"tsconfig-paths")," to hook out the module path resolution logic in node to support paths in ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i tsconfig-paths --save-dev\n")),(0,r.kt)("p",null,"The use tsconfig-paths can be introduced in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/configuration.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\n\nimport 'tsconfig-paths/register';\n// ...\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The above method will only take effect for dev phase (ts-node).")),(0,r.kt)("h2",{id:"test-support-jest-test"},"test support (jest test)"),(0,r.kt)("p",null,"In the test, due to Jest's special environment, alias needs to be processed again. ",(0,r.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," functions in Jest's configuration file can be used to replace the loaded modules to realize alias functions in disguise."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"module.exports = {\n  preset: 'ts-jest',\n  testEnvironment: 'node',\n  testPathIgnorePatterns: ['<rootDir>/test/fixtures']\n  coveragePathIgnorePatterns: ['<rootDir>/test/']\n  moduleNameMapper: {\n    '^@/(.*)$': '<rootDir>/src/$1'\n  }\n};\n")),(0,r.kt)("p",null,"Note that the alias prefix used here is the @symbol. If it is another alias name, please modify it yourself."),(0,r.kt)("h2",{id:"runtime-support"},"Runtime support"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig-paths")," replace paths in memory after ts runs. After compilation, paths with @symbols will still be output, so that files cannot be found after deployment. Some libraries in the community will do some replacement support in ts compilation."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/justkey007/tsc-alias"},"https://github.com/justkey007/tsc-alias"))),(0,r.kt)("h2",{id:"other"},"Other"),(0,r.kt)("p",null,"An mwcc compiler is embedded in the old version CLI, which replaces Alias content in the builder based on the fixed TS version. However, due to the dependency of TS private API, the TS version cannot be upgraded and the functions of the new version cannot be enjoyed."),(0,r.kt)("p",null,"We removed this compiler from the CLI 2.0 version."))}c.isMDXComponent=!0}}]);