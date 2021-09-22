(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8618],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(i,".").concat(f)]||u[f]||p[f]||s;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7217:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),o=["components"],c={sidebar_position:1},i="Messages",l={unversionedId:"smart-contracts/components/message",id:"smart-contracts/components/message",isDocsHomePage:!1,title:"Messages",description:"Messages are how you interact with a CosmWasm smart contract. If you look inside most contracts, there will be a msg.rs file that defines the messages.",source:"@site/docs/04-smart-contracts/02-components/01-message.md",sourceDirName:"04-smart-contracts/02-components",slug:"/smart-contracts/components/message",permalink:"/docs/1.0/smart-contracts/components/message",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/02-components/01-message.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Lifecycle",permalink:"/docs/1.0/smart-contracts/lifecycle"},next:{title:"Result and Option",permalink:"/docs/1.0/smart-contracts/components/result-option"}},m=[],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"messages"},"Messages"),(0,s.kt)("p",null,"Messages are how you interact with a CosmWasm smart contract. If you look inside most contracts, there will be a ",(0,s.kt)("inlineCode",{parentName:"p"},"msg.rs")," file that defines the messages."),(0,s.kt)("p",null,"An instantiate message is usually different in that it is defined separately in ",(0,s.kt)("inlineCode",{parentName:"p"},"msg.rs")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"InstantiateMsg")," and then handled by a ",(0,s.kt)("inlineCode",{parentName:"p"},"instantiate")," fn in the main ",(0,s.kt)("inlineCode",{parentName:"p"},"contract.rs"),"."),(0,s.kt)("p",null,"The examples we are using here are very simple, however if you are confused about what arguments can be passed, you can look in the contract's ",(0,s.kt)("inlineCode",{parentName:"p"},"schema")," folder. In here you will see at least two relevant files:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"instantiate_msg.json")," - the expected shape and and types for the instantiate message"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"execute_msg.json")," - the expected shape and types for each of the messages that the contract can use to execute an action")),(0,s.kt)("p",null,"Some contracts with large API areas have many more schema files, so explore them to find the message or command you're looking for."),(0,s.kt)("p",null,"In the namespace example contract, there are only two valid messages once the contract has been instantiated:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum ExecuteMsg {\n    Register { name: String },\n    Transfer { name: String, to: String },\n}\n')),(0,s.kt)("p",null,"The context of this code is ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-examples/blob/main/contracts/nameservice/src/msg.rs#L13"},"here"),"."),(0,s.kt)("p",null,"This can then be worked with in ",(0,s.kt)("inlineCode",{parentName:"p"},"contract.rs"),". Each of these will be handled in the ",(0,s.kt)("inlineCode",{parentName:"p"},"execute")," function like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg_attr(not(feature = "library"), entry_point)]\npub fn execute(\n    deps: DepsMut,\n    env: Env,\n    info: MessageInfo,\n    msg: ExecuteMsg,\n) -> Result<Response, ContractError> {\n    match msg {\n        ExecuteMsg::Register { name } => execute_register(deps, env, info, name),\n        ExecuteMsg::Transfer { name, to } => execute_transfer(deps, env, info, name, to),\n    }\n}\n')),(0,s.kt)("p",null,"The source code for the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-examples/blob/main/contracts/nameservice/src/contract.rs#L31"},"execute function"),"."))}u.isMDXComponent=!0}}]);