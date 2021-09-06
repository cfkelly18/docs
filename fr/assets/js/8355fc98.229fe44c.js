(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7448],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(n),u=o,f=l["".concat(s,".").concat(u)]||l[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5008:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={title:"IBC And CosmWasm",sidebar_position:1},s="IBC And CosmWasm",d={unversionedId:"ibc/overview",id:"version-0.14/ibc/overview",isDocsHomePage:!1,title:"IBC And CosmWasm",description:"The inter-blockchain communication protocol (IBC) is an end-to-end, connection-oriented,",source:"@site/docs_versioned_docs/version-0.14/04-ibc/01-overview.md",sourceDirName:"04-ibc",slug:"/ibc/overview",permalink:"/fr/docs/0.14/ibc/overview",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs_versioned_docs/version-0.14/04-ibc/01-overview.md",tags:[],version:"0.14",sidebarPosition:1,frontMatter:{title:"IBC And CosmWasm",sidebar_position:1},sidebar:"version-0.14/docsSidebar",previous:{title:"Comparison with Solidity Contracts",permalink:"/fr/docs/0.14/architecture/smart-contracts"},next:{title:"IBC Relayer",permalink:"/fr/docs/0.14/ibc/relayer"}},p=[{value:"Index",id:"index",children:[]}],m={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ibc-and-cosmwasm"},"IBC And CosmWasm"),(0,a.kt)("p",null,"The inter-blockchain communication protocol (",(0,a.kt)("a",{parentName:"p",href:"https://ibcprotocol.org/"},"IBC"),") is an end-to-end, connection-oriented,\nstateful protocol for reliable, ordered, and authenticated communication between heterogeneous blockchains arranged in\nan unknown and dynamic topology. The protocol realises this by specifying a set of data structures, abstractions, and\nsemantics that can be implemented by any distributed ledger provided they satisfy a small set of requirements."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"}," For inner workings of IBC, head to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ics"},"cosmos/ics")," specifications and start reading\nfrom ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ics/tree/master/spec/ics-001-ics-standard"},"ics1"),"."))),(0,a.kt)("p",null,"CosmWasm supports IBC protocol ",(0,a.kt)("strong",{parentName:"p"},"out of the box")," and adds power of smart contracts on top. CosmWasm relies on ",(0,a.kt)("strong",{parentName:"p"},"Dynamic\nIBC")," protocol which differs from\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ics#ibcapp"},"Interchain standards"),"(currently ics20 and interchain accounts). This term is\ncoined and proposed by ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/agoric/the-road-to-dynamic-ibc-4a43bc964bca"},"Agoric"),", and the communication\nprotocol and scheme is defined by the contracts. Contract should specify the actions taken during an IBC handshake."),(0,a.kt)("h2",{id:"index"},"Index"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/fr/docs/0.14/ibc/relayer"},"Relayer")," section explains the relayer component of IBC and demonstrates setting up one for connecting\nCosmWasm enabled chains.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/fr/docs/0.14/ibc/cw20-ics20"},"cw20-ics")," is a smart contract that is first of its kind. This is an IBC Enabled contract that allows\nus to send CW20 tokens from one chain over the standard ICS20 protocol to the bank module of another chain. In short,\nit let's us send our custom CW20 tokens with IBC and use them just like native tokens on other chains."))))}l.isMDXComponent=!0}}]);