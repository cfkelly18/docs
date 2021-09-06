(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5433],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return f},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,d=m["".concat(s,".").concat(u)]||m[u]||p[u]||c;return r?n.createElement(d,a(a({ref:t},f),{},{components:r})):n.createElement(d,a({ref:t},f))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7124:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return f},default:function(){return m}});var n=r(2122),o=r(9756),c=(r(7294),r(3905)),a=["components"],i={sidebar_position:1},s="Lifecycle",l={unversionedId:"smart-contracts/lifecycle",id:"smart-contracts/lifecycle",isDocsHomePage:!1,title:"Lifecycle",description:"The lifecycle of a smart contract is relatively straightforward:",source:"@site/docs/04-smart-contracts/01-lifecycle.md",sourceDirName:"04-smart-contracts",slug:"/smart-contracts/lifecycle",permalink:"/fr/docs/1.0/smart-contracts/lifecycle",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/04-smart-contracts/01-lifecycle.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Comparison with Solidity Contracts",permalink:"/fr/docs/1.0/architecture/smart-contracts"},next:{title:"Messages",permalink:"/fr/docs/1.0/smart-contracts/components/message"}},f=[],p={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"lifecycle"},"Lifecycle"),(0,c.kt)("p",null,"The lifecycle of a smart contract is relatively straightforward:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"/fr/docs/1.0/smart-contracts/components/compilation"},"Compile")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"/fr/docs/1.0/smart-contracts/components/deployment"},"Store on blockchain")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"/fr/docs/1.0/getting-started/interact-with-contract"},"Instantiate")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"/fr/docs/1.0/smart-contracts/components/message"},"Execute commands via Messages")," or ",(0,c.kt)("a",{parentName:"li",href:"/fr/docs/1.0/smart-contracts/components/query"},"Query")," the contract"),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("a",{parentName:"li",href:"/fr/docs/1.0/smart-contracts/migration/migration"},"Migrate")," to handle version changes")),(0,c.kt)("p",null,"More information on each of these individual elements in the lifecycle can be found on their respective pages."))}m.isMDXComponent=!0}}]);