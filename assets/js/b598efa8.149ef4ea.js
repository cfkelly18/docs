(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1398],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3918:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:2},c="DAO Smart Contract",l={unversionedId:"dao-governance/dao-contract",id:"dao-governance/dao-contract",isDocsHomePage:!1,title:"DAO Smart Contract",description:"DAOs are social constructs that consist of more than one entity. Ideally,",source:"@site/dev-academy/dao-governance/02-dao-contract.md",sourceDirName:"dao-governance",slug:"/dao-governance/dao-contract",permalink:"/dev-academy/dao-governance/dao-contract",editUrl:"https://github.com/InterWasm/docs/edit/main/dev-academy/dao-governance/02-dao-contract.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"Introduction",permalink:"/dev-academy/dao-governance/what-is-smart-contracts"}},p=[{value:"Environment Setup",id:"environment-setup",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"cw4-group Setup",id:"cw4-group-setup",children:[]},{value:"cw3-flex-multisig Setup",id:"cw3-flex-multisig-setup",children:[]},{value:"Govern Smart Contracts",id:"govern-smart-contracts",children:[]},{value:"Propose",id:"propose",children:[]},{value:"Challenge",id:"challenge",children:[]},{value:"Summary",id:"summary",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dao-smart-contract"},"DAO Smart Contract"),(0,r.kt)("p",null,"DAOs are social constructs that consist of more than one entity. Ideally,\ncollect your friends' and colleagues' blockchain addresses for this course. Or\nset up several keys like we will do for this course like we will do right now."),(0,r.kt)("h2",{id:"environment-setup"},"Environment Setup"),(0,r.kt)("p",null,"Spin two terminal tabs, one should contain a single pane, DAO admin. Another tab will contain 4 panes, these are\nthe members. We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"CosmJS/cli")," helpers."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"cw4-group")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cw3-flex-multisig")," contracts for the DAO. The advantage of having two separate contracts is\nflexibility. ",(0,r.kt)("inlineCode",{parentName:"p"},"cw4-group")," contains members' information. ",(0,r.kt)("inlineCode",{parentName:"p"},"cw3-flex-multisig")," contains cw4 group address, voting\nthreshold, and voting_period. With this architecture, one group can have multiple multisig accounts with different\nparameters."),(0,r.kt)("h2",{id:"cw4-group-setup"},"cw4-group Setup"),(0,r.kt)("p",null,"On the first terminal, let us start setting up a wallet and launch the DAO."),(0,r.kt)("p",null,"Launch CosmJS client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.26 --init https://raw.githubusercontent.com/CosmWasm/cw-plus/master/contracts/cw4-group/helpers.ts\n")),(0,r.kt)("p",null,"Now store and instantiate the contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const [addr, client] = await useOptions(pebblenetOptions).setup(\'password\', \'.main.key\');\nconst contract = CW4Group(client, pebblenetOptions.fees);\nconst codeId = await contract.upload(addr);\n\n// .editor\nconst initMsg = {\n    admin: addr,\n    members: [\n        {\n            addr: "wasm19pxmaaq8v6zgs5umtz8eqtpwcfgdj2nlhqhff3",\n            weight: 10, // weight is the voting power an address has\n        },\n        {\n            addr: "wasm1zmtuez3qsquumcsn0tlees2mcpjfr4360vg63y",\n            weight: 10,\n        },\n        {\n            addr: "wasm16ycd7qpmdr0p7lj7x2peah8q8yjzfdt7zcmmy3",\n            weight: 10,\n        },\n        {\n            addr: "wasm1qzzafwky7hjzkaa7r9ldv2urdjn8333v8scwdn",\n            weight: 10,\n        },\n    ]\n};\n// ^D\n\nconst instance = await contract.instantiate(addr, codeId, initMsg, \'Council\');\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},">> instance\n{\n  contractAddress: 'wasm1p9c7e9hutpnlsk6twhwc3ehlx3fp00fusk9e8c',\n  admin: [AsyncFunction: admin],\n  totalWeight: [AsyncFunction: totalWeight],\n  member: [AsyncFunction: member],\n  listMembers: [AsyncFunction: listMembers],\n  hooks: [AsyncFunction: hooks],\n  updateAdmin: [AsyncFunction: updateAdmin],\n  updateMembers: [AsyncFunction: updateMembers],\n  _addHook: [AsyncFunction: _addHook],\n  _removeHook: [AsyncFunction: _removeHook]\n}\n")),(0,r.kt)("p",null,"Copy and save ",(0,r.kt)("inlineCode",{parentName:"p"},"contractAddress"),"."),(0,r.kt)("h2",{id:"cw3-flex-multisig-setup"},"cw3-flex-multisig Setup"),(0,r.kt)("p",null,"Now go to the second tab. And on the first tab run these commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const [addr, client] = await useOptions(pebblenetOptions).setup('password', '.account4.key');\nconst contract = CW3Flex(client, pebblenetOptions.fees);\n\n// .editor\nconst initMsg = {\n    group_addr: \"wasm1p9c7e9hutpnlsk6twhwc3ehlx3fp00fusk9e8c\",\n    threshold: { absolute_percentage: { percentage: \"0.5\" }},\n    max_voting_period: {time: 300}\n};\n// ^D\n\nconst instance = await contract.instantiate(addr, codeId, initMsg, 'Council Flex Multisig');\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"threshold")," sets the total percentage of the vote that is required for a proposal to pass. There are more options in the\ncontract for threshold value, not only ",(0,r.kt)("inlineCode",{parentName:"p"},"absolute_percentage"),". Go check it out.\n",(0,r.kt)("inlineCode",{parentName:"p"},"max_voting_period")," is the total voting period. I set it up 300 for setting this up fast."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},">> instance\n{\n  contractAddress: 'wasm10j4xn72f29v56wt9xd9dg2fgv5y8qjttrcl0mp',\n  threshold: [AsyncFunction: threshold],\n  proposal: [AsyncFunction: proposal],\n  query_vote: [AsyncFunction: query_vote],\n  listProposals: [AsyncFunction: listProposals],\n  reverseProposals: [AsyncFunction: reverseProposals],\n  voter: [AsyncFunction: voter],\n  listVoters: [AsyncFunction: listVoters],\n  listVotes: [AsyncFunction: listVotes],\n  propose: [AsyncFunction: propose],\n  vote: [AsyncFunction: vote],\n  execute: [AsyncFunction: execute],\n  close: [AsyncFunction: close],\n  _memberChangedHook: [AsyncFunction: _memberChangedHook]\n}\n")),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"contractAddress"),". As you can see in the available command list, we will propose using this client."),(0,r.kt)("p",null,"For the other users, you don't need to instantiate a contract. We will use the one created above."),(0,r.kt)("p",null,"Other tabs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const [addr, client] = await useOptions(pebblenetOptions).setup('password', '.account1.key');\nconst contractAddress = \"wasm10j4xn72f29v56wt9xd9dg2fgv5y8qjttrcl0mp\"\n\nconst instance = contract.use(contractAddress);\n")),(0,r.kt)("p",null,"Repeat the same for the other tabs, but remember to change ",(0,r.kt)("inlineCode",{parentName:"p"},".account1.key")," part. This is the key to the wallet."),(0,r.kt)("h2",{id:"govern-smart-contracts"},"Govern Smart Contracts"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/dev-academy/develop-smart-contract/intro"},"smart contract interaction")," section, we learned to set up and interacting with\n",(0,r.kt)("inlineCode",{parentName:"p"},"cw20-base")," contract.\nDo you\nremember the ",(0,r.kt)("inlineCode",{parentName:"p"},"minter")," field in instantiate message?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Golden Stars",\n  "symbol": "STAR",\n  "decimals": "2",\n  "initial_balances": [\n    {"address": "wasm1ez03me7uljk7qerswdp935vlaa4dlu48mys3mq", "amount": "10000"},\n    {"address": "wasm1tx7ga0lsnumd5hfsh2py0404sztnshwqaqjwy8", "amount": "10000"},\n    {"address": "wasm1mvjtezrn8dpateu0435trlw5062qy76gf738n0", "amount": "10000"}\n  ],\n  "mint": {\n    "minter": "wasm1mvjtezrn8dpateu0435trlw5062qy76gf738n0"\n  }\n}\n')),(0,r.kt)("p",null,"Minter is the address that is privileged to mint/create new tokens in the system.\nAs you guessed, a simple user having the ability to mint billions of dollars worth of tokens is not secure or reasonable.\nMultiple parties and organizations should be allowed to run mint operations.\nThis is where the magic is: use DAO addresses as contract admin."),(0,r.kt)("p",null,"I will skip cw20 setup phase."),(0,r.kt)("h2",{id:"propose"},"Propose"),(0,r.kt)("p",null,"Now we will set up a proposal to mint 9999 tokens to an address.\nGo the tab 2 pane 1, to cw3-flex-multisig terminal."),(0,r.kt)("p",null,"First, specify proposal details. Notice ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," is a base64 encoded cw20 mint msg."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// .editor\nlet title = "Mint tokens"\nlet description = "Mint 9999 tokens to address wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp";\nlet msg4 = [\n  {\n    wasm: {\n      execute: {\n        contract_addr: "wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp",\n        msg: "eyJtaW50Ijp7InJlY2lwaWVudCI6Indhc20xdzc0MGg1Nmo5bmh1ZHlra204MGo1cmY2bXMyNW5oZTlodXV2Z3AiLCJhbW91bnQiOiI5OTk5In19Cg==",\n        funds: []\n      }\n    }\n  }];\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"instance.propose(addr, title, description, msg4)\ninstance.listProposals()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n  proposals: [\n      {\n          id: 1,\n          title: 'Mint tokens',\n          description: 'Mint 9999 tokens to address wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp',\n          msgs: [Array],\n          status: 'open',\n          expires: [Object],\n          threshold: [Object]\n      }\n  ]\n}\n")),(0,r.kt)("p",null,"Now the proposal is created. Let's start voting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'let proposalId = 1\ninstance.vote(addr, proposalId, "yes")\n')),(0,r.kt)("p",null,"Since the threshold is ",(0,r.kt)("strong",{parentName:"p"},"%50"),", only half of the voters required to vote yes for proposal to pass."),(0,r.kt)("p",null,"Check proposal again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"\n{\n  proposals: [\n    {\n      id: 1,\n      title: 'Mint tokens',\n      description: 'Mint 9999 tokens to address wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp',\n      msgs: [Array],\n      status: 'passed',\n      expires: [Object],\n      threshold: [Object]\n    }\n  ]\n}\n")),(0,r.kt)("p",null,"Proposal has passed, and it is ready for execution. Execute the action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"instance.execute(addr, proposalId)\n")),(0,r.kt)("p",null,"Now go to cw20 terminal pane and check the bank balance of the empty cw20 address that you minted tokens to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},">> contract.balance(\"wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp\")\n'9999'\n")),(0,r.kt)("h2",{id:"challenge"},"Challenge"),(0,r.kt)("p",null,"As a challenge, you can explore other threshold parameters, setup several smart contracts and see what changes?"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Congrats! Welcome to the decentralized democracy."),(0,r.kt)("p",null,"We have given a brief entry to the CosmWasm DAO and Governance smart contracts. We only covered a small portion of\nfunctionalities of cw3 and cw4 DAO contracts, I encourage you to go ahead and explore the code to learn more about\ncapabilities."))}u.isMDXComponent=!0}}]);