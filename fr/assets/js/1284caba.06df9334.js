(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7521],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=o,d=m["".concat(i,".").concat(u)]||m[u]||h[u]||r;return a?n.createElement(d,c(c({ref:t},p),{},{components:a})):n.createElement(d,c({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<r;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},431:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),c=["components"],s={sidebar_position:3},i="Hall of Fame",l={unversionedId:"hall-of-fame",id:"hall-of-fame",isDocsHomePage:!1,title:"Hall of Fame",description:"_**Here we present yout the CosmWasm hall of fame! Kudos the contributors for their effort in making these amazing",source:"@site/ecosystem/03-hall-of-fame.md",sourceDirName:".",slug:"/hall-of-fame",permalink:"/fr/ecosystem/hall-of-fame",editUrl:"https://github.com/CosmWasm/docs/edit/main/ecosystem/03-hall-of-fame.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"community",previous:{title:"Joining Testnets",permalink:"/fr/ecosystem/testnets/testnets"},next:{title:"Brand guidelines",permalink:"/fr/ecosystem/media/assets"}},p=[{value:"NFT Marketplace by BlockScape",id:"nft-marketplace-by-blockscape",children:[]},{value:"Clawback Account",id:"clawback-account",children:[]},{value:"Random Beacon",id:"random-beacon",children:[]},{value:"Sophon",id:"sophon",children:[]}],h={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hall-of-fame"},"Hall of Fame"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Here we present yout the CosmWasm hall of fame! Kudos the contributors for their effort in making these amazing\nprojects!")),"\nLet's give them the visibility and fame they deserve:"),(0,r.kt)("h2",{id:"nft-marketplace-by-blockscape"},"NFT Marketplace by BlockScape"),(0,r.kt)("p",null,"Article: ",(0,r.kt)("a",{parentName:"p",href:"https://devpost.com/software/nft-marketplace"},"https://devpost.com/software/nft-marketplace")),(0,r.kt)("p",null,"Won ",(0,r.kt)("strong",{parentName:"p"},"1st place in Galileo Awards"),"(Most creative dAppchain using Cosmos SDK & Tendermint, with option to use IBC) and\n3rd place in Gringotts Awards.\n",(0,r.kt)("img",{src:a(6534).Z})),(0,r.kt)("p",null,"The NFT marketplace provides a generic platform for selling and buying CW721 tokens with CW20 tokens. People can put\ntheir tokens up for sale and buy tokens from other sellers. We have already seen a couple of example implementations of\ntrading NFTs between two accounts, but all of them were on a per-contract basis. That means that for each trade, there\nwas a separate contract which made it hard to know which tokens were actually up for sale and which token was used. This\nleads us to the idea of providing one central place to put tokens up for sale for maximum visibility of token sales. The\nproject demonstrates CosmWasm contract interaction very well by using 3 deployed contracts on the chain. You can see how\nthe team implemented a custom cw721 contract here. The team contributed to the NFT contract by developing a typescript\nhelper client. Also, the project has Keplr wallet integrated."),(0,r.kt)("p",null,"Demo: ",(0,r.kt)("a",{parentName:"p",href:"https://hackatom.blockscape.network/home"},"https://hackatom.blockscape.network/home")),(0,r.kt)("p",null,"Repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/BlockscapeNetwork/hackatom_v"},"https://github.com/BlockscapeNetwork/hackatom_v")),(0,r.kt)("h2",{id:"clawback-account"},"Clawback Account"),(0,r.kt)("p",null,"Article: ",(0,r.kt)("a",{parentName:"p",href:"https://devpost.com/software/clawback-account-in-cosmwasm"},"https://devpost.com/software/clawback-account-in-cosmwasm")),(0,r.kt)("p",null,"Won the ",(0,r.kt)("strong",{parentName:"p"},"1st place in Gaia Awards"),"(Best go-to-market project for Cosmos Hub)\nInspired by Bitcoin Vaults. The code quality of this project is top-tier. This was evidenced by very extensive contract\nunit tests. It\u2019s a prototype contract code for \u201cclawbacks\u201d of native and CW20 tokens. A clawback works as follows:\nThere is a \u201cholder\u201d key/account, a \u201cbackup\u201d key/account, and a \u201cclawback period\u201d (which determines when the clawback\nexpires). Within a \u201cclawback period\u201d, \u201cholder\u201d can transfer to \u201cholders\u201d / other clawbacks (provided their terms match\nthe outgoing contract: they have the same \u201cbackup\u201d, \u201cclawback period\u201d is at least as long, and they support the same\ntokens) or refresh the clawback duration. After the clawback period expires, the \u201cholder\u201d can withdraw the tokens.\nWithin a \u201cclawback period\u201d, \u201cbackup\u201d can transfer to another holder, refresh the clawback duration or burn the tokens /\ndestroy the contract."),(0,r.kt)("p",null,"Presentation: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/13aEcVFhjQFKo9bGjHe0V9HiHnqbM7eGSHbDB27Psa24/edit?usp=sharing"},"https://docs.google.com/presentation/d/13aEcVFhjQFKo9bGjHe0V9HiHnqbM7eGSHbDB27Psa24/edit?usp=sharing")),(0,r.kt)("p",null,"Repo: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/13aEcVFhjQFKo9bGjHe0V9HiHnqbM7eGSHbDB27Psa24/edit?usp=sharing"},"https://github.com/tomtau/hackatom")),(0,r.kt)("h2",{id:"random-beacon"},"Random Beacon"),(0,r.kt)("p",null,"Article: ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/confio/when-your-blockchain-needs-to-roll-the-dice-ed9da121f590"},"https://medium.com/confio/when-your-blockchain-needs-to-roll-the-dice-ed9da121f590")),(0,r.kt)("p",null,"Distributed random number generator by Simon Warta."),(0,r.kt)("p",null,"In drand, random beacons are distributed via HTTP, Gossipsub, Tor or Twitter. Such network sources cannot be accessed by\na blockchain directly. However, we can create a CosmWasm smart contract which allows storing random beacons on chain.\nUsing cross-contract queries, other contracts can then read those random values and use them in their logic."),(0,r.kt)("p",null,"Repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/confio/rand"},"https://github.com/confio/rand")),(0,r.kt)("h2",{id:"sophon"},"Sophon"),(0,r.kt)("p",null,"Article: ",(0,r.kt)("a",{parentName:"p",href:"https://devpost.com/software/sophon"},"https://devpost.com/software/sophon")),(0,r.kt)("p",null,"Won ",(0,r.kt)("strong",{parentName:"p"},"3rd place on Gaia Award."),"\nJust as ",(0,r.kt)("a",{parentName:"p",href:"https://yearn.finance/"},"yearn.finance")," on Ethereum can optimize DeFi\u2019s operations, the team thought a smart\ncontract on CosmWasm could optimize Staking\u2019s operations. When funds are deposited into a contract, it will delegate the\nfunds to the validator with the highest interest rate per Redelegate."),(0,r.kt)("p",null,"Repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Ninja-Chain/sophon"},"https://github.com/Ninja-Chain/sophon")))}m.isMDXComponent=!0},6534:function(e,t,a){"use strict";t.Z=a.p+"assets/images/nft_marketplace-5d4c3eb29e95bb6c4f230bf34debc0a3.jpeg"}}]);