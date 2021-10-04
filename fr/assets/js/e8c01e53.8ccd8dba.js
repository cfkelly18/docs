(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1545],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=l(n),p=r,w=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(w,s(s({ref:e},u),{},{components:n})):a.createElement(w,s({ref:e},u))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7101:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:2},c="Basics of Smart Contract Interactions",l={unversionedId:"smart-contract-interaction/interact",id:"smart-contract-interaction/interact",isDocsHomePage:!1,title:"Basics of Smart Contract Interactions",description:"As mentioned before smart contracts are executable codes. In the next lessons, we will learn how to write one. Until then best to use already written to keep things simple.",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/smart-contract-interaction/02-interact.md",sourceDirName:"smart-contract-interaction",slug:"/smart-contract-interaction/interact",permalink:"/fr/dev-academy/smart-contract-interaction/interact",editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"What are Smart Contracts?",permalink:"/fr/dev-academy/smart-contract-interaction/what-is-smart-contracts"},next:{title:"Challenge",permalink:"/fr/dev-academy/smart-contract-interaction/challenge"}},u=[{value:"Where to find smart contracts?",id:"where-to-find-smart-contracts",children:[]},{value:"Download",id:"download",children:[]},{value:"Store",id:"store",children:[]},{value:"Instantiate",id:"instantiate",children:[]}],m={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basics-of-smart-contract-interactions"},"Basics of Smart Contract Interactions"),(0,o.kt)("p",null,"As mentioned before smart contracts are executable codes. In the next lessons, we will learn how to write one. Until then best to use already written to keep things simple."),(0,o.kt)("h2",{id:"where-to-find-smart-contracts"},"Where to find smart contracts?"),(0,o.kt)("p",null,"Normally, we compile smart contracts using rust compilers then code optimizers. Now we will just download a precompiled one by cosmwasm team."),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"We provide smart contract binary executable at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/"},"cw-plus")," repo alongside the code. cw-plus repository is a collection of production grade smart contracts that has been heavily testes on real mainnets. You will see a list of available contracts on the repository page. Go click ",(0,o.kt)("strong",{parentName:"p"},"Releases")," button to see tagged binary executables. You can download binaries and deploy to compatible blockchains."),(0,o.kt)("p",null,"We will use cw20 prebuilt binary for this course: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/releases/download/v0.8.0/cw20_base.wasm"},"cw20-base")),(0,o.kt)("p",null,"Please don't pay attention to cw20-base details, just focus on getting a contract on a testnet."),(0,o.kt)("h2",{id:"store"},"Store"),(0,o.kt)("p",null,"We will deploy the code using ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," CLI we installed earlier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -LJO https://github.com/CosmWasm/cw-plus/releases/download/v0.8.0/cw20_base.wasm\nRES=$(wasmd tx wasm store cw20_base.wasm --from wallet $TXFLAG -y)\n\n# get code id\nCODE_ID=$(echo $RES | jq -r '.logs[0].events[1].attributes[0].value')\n\n# print code id\necho $CODE_ID\n\n# no contracts yet, this should return an empty list\nwasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\n\n")),(0,o.kt)("p",null,"Now the code stored on the network. ",(0,o.kt)("inlineCode",{parentName:"p"},"CODE_ID")," is the identifier of the code."),(0,o.kt)("h2",{id:"instantiate"},"Instantiate"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Smart contract code != usable smart contract instance")),(0,o.kt)("p",null,"Smart contract code is just a blueprint of a smart contract. We ",(0,o.kt)("em",{parentName:"p"},"instantiate")," a smart contract based on smart contract code."),(0,o.kt)("p",null,"Here is the instantiation message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Golden Stars",\n  "symbol": "STAR",\n  "decimals": "2",\n  "initial_balances": [\n    {"address": "wasm1ez03me7uljk7qerswdp935vlaa4dlu48mys3mq", "amount": "10000"},\n    {"address": "wasm1tx7ga0lsnumd5hfsh2py0404sztnshwqaqjwy8", "amount": "10000"},\n    {"address": "wasm1mvjtezrn8dpateu0435trlw5062qy76gf738n0", "amount": "10000"}\n  ],\n  "mint": {\n    "minter": "addr"\n  }\n}\n')),(0,o.kt)("p",null,"This message contains initial state of the contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'INIT=$(jq -n --arg wallet $(wasmd keys show -a wallet) \'{"name":"Golden Stars","symbol":"STAR","decimals":2,"initial_balances":[{"address":"wasm1n8aqd9jq9glhj87cn0nkmd5mslz3df8zm86hrh","amount":"10000"},{"address":"wasm13y4tpsgxza44yq76qvj69sakq4jmeyqudwgwpk","amount":"10000"},{"address":$wallet,"amount":"10000"}],"mint":{"minter":$wallet}}\')\n\nwasmd tx wasm instantiate $CODE_ID "$INIT" --from wallet $TXFLAG --label "first cw20"\n')),(0,o.kt)("p",null,"You will see this output indicating that instantiation transaction is success:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "height": "1350700",\n  "txhash": "82D7240A35BDC6DE307AA725FE52590E83B60D4B682ABB0B0F6DCA28A66212D9",\n  "data": "0A3C0A0B696E7374616E7469617465122D0A2B7761736D3170657A74676C397661677768346B3574677765366E367475397338686A7779716D6C6D72686B",\n  "raw_log": "[{\\"events\\":[{\\"type\\":\\"message\\",\\"attributes\\":[{\\"key\\":\\"action\\",\\"value\\":\\"instantiate\\"},{\\"key\\":\\"module\\",\\"value\\":\\"wasm\\"},{\\"key\\":\\"signer\\",\\"value\\":\\"wasm10qhh60sexwtzd6nqr4r34z6t2d7nfrqp684twu\\"},{\\"key\\":\\"code_id\\",\\"value\\":\\"135\\"},{\\"key\\":\\"contract_address\\",\\"value\\":\\"wasm1peztgl9vagwh4k5tgwe6n6tu9s8hjwyqmlmrhk\\"}]},{\\"type\\":\\"wasm\\",\\"attributes\\":[{\\"key\\":\\"contract_address\\",\\"value\\":\\"wasm1peztgl9vagwh4k5tgwe6n6tu9s8hjwyqmlmrhk\\"}]}]}]",\n  "logs": [\n    {\n      "events": [\n        {\n          "type": "message",\n          "attributes": [\n            {\n              "key": "action",\n              "value": "instantiate"\n            },\n            {\n              "key": "module",\n              "value": "wasm"\n            },\n            {\n              "key": "signer",\n              "value": "wasm10qhh60sexwtzd6nqr4r34z6t2d7nfrqp684twu"\n            },\n            {\n              "key": "code_id",\n              "value": "135"\n            },\n            {\n              "key": "contract_address",\n              "value": "wasm1peztgl9vagwh4k5tgwe6n6tu9s8hjwyqmlmrhk"\n            }\n          ]\n        },\n        {\n          "type": "wasm",\n          "attributes": [\n            {\n              "key": "contract_address",\n              "value": "wasm1peztgl9vagwh4k5tgwe6n6tu9s8hjwyqmlmrhk"\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "gas_wanted": "185650",\n  "gas_used": "155257"\n}\n')),(0,o.kt)("p",null,"Now we purposed the aim of this lesson. You now know how smart contracts interaction looks like. Of course there are other ways to achieve this, like CosmJS clients."),(0,o.kt)("p",null,"We will stop here, contract execution is the topic of another course."))}d.isMDXComponent=!0}}]);