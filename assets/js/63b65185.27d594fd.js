(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4926],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7794:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(2122),i=n(9756),s=(n(7294),n(3905)),a=["components"],o={sidebar_position:2},c="CW3 Fixed Multisig",l={unversionedId:"cw3/cw3-fixed-spec",id:"cw3/cw3-fixed-spec",isDocsHomePage:!1,title:"CW3 Fixed Multisig",description:"cw3-fixed-multisig source",source:"@site/cw-plus/cw3/cw3-fixed-spec.md",sourceDirName:"cw3",slug:"/cw3/cw3-fixed-spec",permalink:"/cw-plus/0.9.0/cw3/cw3-fixed-spec",editUrl:"https://github.com/InterWasm/docs/edit/main/cw-plus/cw3/cw3-fixed-spec.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"cwPlus",previous:{title:"CW3 Spec: MultiSig/Voting Contracts",permalink:"/cw-plus/0.9.0/cw3/spec"},next:{title:"CW3 Flexible Multisig",permalink:"/cw-plus/0.9.0/cw3/cw3-flex-spec"}},p=[{value:"Init",id:"init",children:[]},{value:"Handle Process",id:"handle-process",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cw3-fixed-multisig"},"CW3 Fixed Multisig"),(0,s.kt)("p",null,"cw3-fixed-multisig source\ncode: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/master/contracts/cw3-fixed-multisig"},"https://github.com/CosmWasm/cw-plus/tree/master/contracts/cw3-fixed-multisig")),(0,s.kt)("p",null,"This is a simple implementation of the ",(0,s.kt)("a",{parentName:"p",href:"/cw-plus/0.9.0/cw3/spec"},"cw3 spec"),". It is a multisig with a fixed set of addresses created upon\ninitialization. Each address may have the same weight (K of N), or some may have extra voting power. This works much\nlike the native Cosmos SDK multisig, except that rather than aggregating the signatures off chain and submitting the\nfinal result, we aggregate the approvals on-chain."),(0,s.kt)("p",null,"This is usable as is, and probably the most secure implementation of cw3\n(as it is the simplest), but we will be adding more complex cases, such as updating the multisig set, different voting\nrules for the same group with different permissions, and even allow token-weighted voting. All through the same client\ninterface."),(0,s.kt)("h2",{id:"init"},"Init"),(0,s.kt)("p",null,"To create the multisig, you must pass in a set of ",(0,s.kt)("inlineCode",{parentName:"p"},"HumanAddr")," with a weight for each one, as well as a required weight\nto pass a proposal. To create a 2 of 3 multisig, pass 3 voters with weight 1 and a ",(0,s.kt)("inlineCode",{parentName:"p"},"required_weight")," of 2."),(0,s.kt)("p",null,"Note that 0 ",(0,s.kt)("em",{parentName:"p"},"is an allowed weight"),". This doesn't give any voting rights, but it does allow that key to submit proposals\nthat can later be approved by the voters. Any address not in the voter set cannot submit a proposal."),(0,s.kt)("h2",{id:"handle-process"},"Handle Process"),(0,s.kt)("p",null,'First, a registered voter must submit a proposal. This also includes the first "Yes" vote on the proposal by the\nproposer. The proposer can set an expiration time for the voting process, or it defaults to the limit provided when\ncreating the contract (so proposals can be closed after several days).'),(0,s.kt)("p",null,'Before the proposal has expired, any voter with non-zero weight can add their vote. Only "Yes" votes are tallied. If\nenough "Yes" votes were submitted before the proposal expiration date, the status is set to "Passed".'),(0,s.kt)("p",null,'Once a proposal is "Passed", anyone may submit an "Execute" message. This will trigger the proposal to send all stored\nmessages from the proposal and update it\'s state to "Executed", so it cannot run again. (Note if the execution fails for\nany reason - out of gas, insufficient funds, etc - the state update will be reverted, and it will remain "Passed", so\nyou can try again).'),(0,s.kt)("p",null,'Once a proposal has expired without passing, anyone can submit a "Close"\nmessage to mark it closed. This has no effect beyond cleaning up the UI/database.'))}d.isMDXComponent=!0}}]);