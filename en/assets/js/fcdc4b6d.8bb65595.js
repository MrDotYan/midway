"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},l="Interceptors(AOP)",i={unversionedId:"aspect",id:"aspect",title:"Interceptors(AOP)",description:"We often have the need for global unified processing logic, such as unified processing errors, conversion formats, etc. Although Web middleware is available in Web scenarios, this capability cannot be used in other scenarios.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/aspect.md",sourceDirName:".",slug:"/aspect",permalink:"/en/docs/aspect",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/aspect.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Framework Error Code",permalink:"/en/docs/error_code"},next:{title:"Self-executing code",permalink:"/en/docs/auto_run"}},s={},p=[{value:"Using Interceptors (Aspects)",id:"using-interceptors-aspects",level:2},{value:"Aspectable Lifecycle",id:"aspectable-lifecycle",level:2},{value:"Aspects of Asynchronous Issues",id:"aspects-of-asynchronous-issues",level:2},{value:"Apply to multiple classes",id:"apply-to-multiple-classes",level:2},{value:"Specific method matching",id:"specific-method-matching",level:2},{value:"Aspect execution order",id:"aspect-execution-order",level:2},{value:"Some restrictions",id:"some-restrictions",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interceptorsaop"},"Interceptors(AOP)"),(0,o.kt)("p",null,"We often have the need for global unified processing logic, such as unified processing errors, conversion formats, etc. Although Web middleware is available in Web scenarios, this capability cannot be used in other scenarios."),(0,o.kt)("p",null,"Midway has designed a set of general method interceptors (aspects) to write logic uniformly in different scenarios."),(0,o.kt)("p",null,"Interceptor is different from traditional Web middleware and decorator. It is the ability provided by Midway framework. In the execution sequence, it is in the middle position. This ability can intercept any Class method."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01DFfT1y1FC8xYeocrX_!!6000000000450-2-tps-823-133.png",alt:"image.png"})),(0,o.kt)("h2",{id:"using-interceptors-aspects"},"Using Interceptors (Aspects)"),(0,o.kt)("p",null,"The interceptor is usually placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/aspect")," directory. Let's write an example of intercepting the controller (Controller) method. Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/aspect/report.ts")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u279c my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u2502\u2500\u2500 aspect                    ## interceptor directory\n\u2502   \u2502   \u2514\u2500\u2500 report.ts\n\u2502   \u2514\u2500\u2500 controller                ## Web Controller Directory\n\u2502       \u2514\u2500\u2500 home.ts\n\u251c\u2500\u2500 test  \n\u251c\u2500\u2500 package.json  \n\u2514\u2500\u2500 tsconfig.json\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n\nimport { Controller, Get } from '@midwayjs/decorator';\n\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home() {\n    return \"Hello Midwayjs!\";\n  }\n}\n")),(0,o.kt)("p",null,"The content is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Aspect, IMethodAspect, JoinPoint } from '@midwayjs/decorator';\nimport { HomeController } from '../controller/home';\n\n@Aspect(HomeController)\nexport class ReportInfo implements IMethodAspect {\n  async before(point: JoinPoint) {\n    console.log('before home router run');\n  }\n}\n\n")),(0,o.kt)("p",null,"After the project is started, the ",(0,o.kt)("inlineCode",{parentName:"p"},"before home router run")," is output in the console."),(0,o.kt)("p",null,"You will find that we don't need to hack into the controller's code, neither adding a decorator to the business file, nor adding code that is visible before and after the mainstream process."),(0,o.kt)("p",null,"The ability of the interceptor (section) is very powerful and terrible. We must use it carefully and correctly."),(0,o.kt)("p",null,"The interceptor is ",(0,o.kt)("strong",{parentName:"p"},"fixed as a single instance"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"In the case of inheritance, the interceptor will not take effect on the methods of the parent class.")),(0,o.kt)("h2",{id:"aspectable-lifecycle"},"Aspectable Lifecycle"),(0,o.kt)("p",null,"The method interceptor can intercept the whole method, and the way of interception includes several aspects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IMethodAspect {\n  after?(joinPoint: JoinPoint, result: any, error: Error);\n  afterReturn?(joinPoint: JoinPoint, result: any): any;\n  afterThrow?(joinPoint: JoinPoint, error: Error): void;\n  before?(joinPoint: JoinPoint): void;\n  around?(joinPoint: JoinPoint): any;\n}\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Methods"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"before"),(0,o.kt)("td",{parentName:"tr",align:null},"Execute before method call")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"around"),(0,o.kt)("td",{parentName:"tr",align:null},"Before and after the execution of the package method")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"afterReturn"),(0,o.kt)("td",{parentName:"tr",align:null},"Execute when content is returned correctly")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"afterThrow"),(0,o.kt)("td",{parentName:"tr",align:null},"Execute when an exception is thrown")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"after"),(0,o.kt)("td",{parentName:"tr",align:null},"Final execution (whether correct or wrong)")))),(0,o.kt)("p",null,"A simple understanding is as follows;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n    // before  \n    // around or invokeMethod\n    // afterReturn\n} catch(err) {\n    // afterThrow\n} finally {\n    // after\n}\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Revised input parameters"),(0,o.kt)("th",{parentName:"tr",align:null},"Call the original method"),(0,o.kt)("th",{parentName:"tr",align:null},"Gets the return value"),(0,o.kt)("th",{parentName:"tr",align:null},"Modify return value"),(0,o.kt)("th",{parentName:"tr",align:null},"Get error"),(0,o.kt)("th",{parentName:"tr",align:null},"Intercept and throw an error"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"before"),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"around"),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"afterReturn"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"afterThrow"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"after"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"We often modify the input parameters and verify the parameters in the ",(0,o.kt)("inlineCode",{parentName:"p"},"before")," process to conform to the logic of the program execution, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home(data1, data2) {\n    return data1 + data2; //Because the method is intercepted, the return value here is 3\n  }\n}\n\n// src/aspect/\n@Aspect(HomeController, 'home') // Only the home method is intercepted here.\nexport class ReportInfo implements IMethodAspect {\n  async before(point: JoinPoint) {\n    console.log(point.args); // Because the Controller method is cut, the original parameter is [ctx, next]\n    Point. args = [1, 2]; // Modify parameters\n  }\n}\n\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"JoinPoint")," here is the parameter that can be modified to the method, defined as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface JoinPoint {\n  methodName: string;\n  target: any;\n  args: any[];\n  proceed(...args: any[]): any;\n}\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"methodName"),(0,o.kt)("td",{parentName:"tr",align:null},"intercepted method name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"target"),(0,o.kt)("td",{parentName:"tr",align:null},"The instance when the method is called.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"args"),(0,o.kt)("td",{parentName:"tr",align:null},"The parameters of the original method call")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"proceed"),(0,o.kt)("td",{parentName:"tr",align:null},"The original method itself, only exists in before and around")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"around")," is a versatile method that can wrap the entire method call process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home() {\n    return 'hello';\n  }\n}\n\n// src/aspect/report.ts\n@Aspect(HomeController, 'home') // Only the home method is intercepted here.\nexport class ReportInfo implements IMethodAspect {\n  async around(point: JoinPoint) {\n    Const result = await point.proceed(...point.args); //Execute the original method\n    return result + 'world';\n  }\n}\n\n")),(0,o.kt)("p",null,"Finally, Controller will return to ",(0,o.kt)("inlineCode",{parentName:"p"},"hello world"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"afterReturn")," method will have one more return result parameter. If you only need to modify the return result, you can directly use it. The above ",(0,o.kt)("inlineCode",{parentName:"p"},"around")," example is easier to rewrite with ",(0,o.kt)("inlineCode",{parentName:"p"},"afterReturn"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home() {\n    return 'hello';\n  }\n}\n\n// src/aspect/report.ts\n@Aspect(HomeController, 'home') // Only the home method is intercepted here.\nexport class ReportInfo implements IMethodAspect {\n  async afterReturn(point: JoinPoint, result) {\n    return result + 'world';\n  }\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"afterThrow")," is used to intercept errors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home() {\n    throw new Error('custom error');\n  }\n}\n\n// src/aspect/report.ts\n@Aspect(HomeController, 'home')\nexport class ReportInfo implements IMethodAspect {\n  async afterThrow(point: JoinPoint, error) {\n    if(/not found/.test(error.message)) {\n        throw new Error('another error');\n    } else {\n        console.error('got custom error');\n    }\n  }\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"afterThrow")," can intercept errors. Accordingly, it cannot return results in the process. It is generally used to record error logs."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"after")," is used to perform the final processing. You can use it to perform some tasks, such as recording the number of successes or failures."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home() {\n    throw new Error('custom error');\n  }\n}\n\n// src/aspect/report.ts\n@Aspect(HomeController, 'home')\nexport class ReportInfo implements IMethodAspect {\n  async after(point: JoinPoint, result, error) {\n    if(error) {\n        console.error(error);\n    } else {\n      console.log(result);\n    }\n  }\n}\n\n")),(0,o.kt)("h2",{id:"aspects-of-asynchronous-issues"},"Aspects of Asynchronous Issues"),(0,o.kt)("p",null,"If the blocked method is asynchronous, in principle, all methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"before")," should be asynchronous. Otherwise, all methods should be synchronous."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home() { // here is asynchronous, then the following before is asynchronous\n\n  }\n}\n\n// src/aspect/report.ts\n@Aspect(HomeController, 'home')\nexport class ReportInfo implements IMethodAspect {\n  async before(point: JoinPoint) {\n\n  }\n}\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  Home () { // here is synchronized, then the following before is also synchronized\n\n  }\n}\n\n// src/aspect/report.ts\n@Aspect(HomeController, 'home')\nexport class ReportInfo implements IMethodAspect {\n  before(point: JoinPoint) {\n\n  }\n}\n\n")),(0,o.kt)("h2",{id:"apply-to-multiple-classes"},"Apply to multiple classes"),(0,o.kt)("p",null,"The parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Aspect")," decorator can be an array. We can provide multiple classes. All methods ",(0,o.kt)("strong",{parentName:"p"},"of these classes will be blocked. For example, we can apply the above interceptor to multiple Controller, so that every method of "),"every Class** will be intercepted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Aspect([HomeController, APIController])\nexport class ReportInfo implements IMethodAspect {\n\n  async before(point: JoinPoint) {\n\n  }\n}\n")),(0,o.kt)("h2",{id:"specific-method-matching"},"Specific method matching"),(0,o.kt)("p",null,"In general, we only need to intercept a certain class-specific method. We provide some capabilities for matching methods.  The second parameter decorated by ",(0,o.kt)("inlineCode",{parentName:"p"},"@Aspect")," is a string of a wildwith method. The rule used is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/micromatch/picomatch"},"picomatch"),"."),(0,o.kt)("p",null,"Suppose our method is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n\nimport { Controller, Get } from \"@midwayjs/decorator\";\n\n@Controller('/')\nexport class HomeController {\n\n  @Get('/1')\n  async hello1() {\n    return \"Hello Midwayjs!\";\n  }\n  \n  @Get('/2')\n  async hello2() {\n    return \"Hello Midwayjs, too!\";\n  }\n}\n")),(0,o.kt)("p",null,"Then, when you configure the following configuration, only the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello2")," method is matched."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Aspect([HomeController], '*2')\nexport class ReportInfo implements IMethodAspect {\n\n  async before(point: JoinPoint) {\n    console.log('hello method with suffix 2');\n  }\n}\n")),(0,o.kt)("h2",{id:"aspect-execution-order"},"Aspect execution order"),(0,o.kt)("p",null,"If multiple interceptors (sections) operate on one method at the same time, there may be a problem of disorder of order. If in two files, this order is random."),(0,o.kt)("p",null,"The third parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"@Aspect")," is used to specify the priority of the interceptor. The default value is 0. The larger the number, the higher the priority. This means that the method is registered in the method first, and the ",(0,o.kt)("strong",{parentName:"p"},"first registered method is called later,")," that is, the onion model",(0,o.kt)("strong",{parentName:"p"},".")),(0,o.kt)("p",null,"The following code is an example.  The priority of ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAspect2")," is higher than that of ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAspect1"),", so registration will be given priority. The schematic diagram is as follows. The whole interception process is divided into two parts, first registration and then execution."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Registration process")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01d31RXA1cpHyjyPHCs_!!6000000003649-2-tps-924-497.png",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Execution process")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01RXmEtD26Thmkg8eX8_!!6000000007663-2-tps-769-311.png",alt:"image.png"})),(0,o.kt)("p",null,"The code is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Aspect([HomeController])\nexport class MyAspect1 implements IMethodAspect {\n  before(point: JoinPoint) {\n    console.log('111');\n  }\n}\n\n@Aspect([HomeController], '*', 1) // Priority can be set here\nexport class MyAspect2 implements IMethodAspect {\n  before(point: JoinPoint) {\n    console.log('222');\n  }\n}\n")),(0,o.kt)("p",null,"The execution output is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"111\n222\n")),(0,o.kt)("h2",{id:"some-restrictions"},"Some restrictions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"The interceptor will not take effect on the parent class")))))}m.isMDXComponent=!0}}]);