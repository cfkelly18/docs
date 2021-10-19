(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4401],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},903:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(2122),o=t(9756),s=(t(7294),t(3905)),a=["components"],i={sidebar_position:2},l="Contrat intelligent de DAO",c={unversionedId:"dao-governance/dao-contract",id:"dao-governance/dao-contract",isDocsHomePage:!1,title:"Contrat intelligent de DAO",description:"Les DAO sont des constructions sociales qui se composent de plus d'une entit\xe9. Ideally, collect your friends' and colleagues' blockchain addresses for this course. Or set up several keys like we will do for this course like we will do right now.",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/dao-governance/02-dao-contract.md",sourceDirName:"dao-governance",slug:"/dao-governance/dao-contract",permalink:"/fr/dev-academy/dao-governance/dao-contract",editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"Introduction",permalink:"/fr/dev-academy/dao-governance/what-is-smart-contracts"}},u=[{value:"Configuration de l&#39;environnement",id:"configuration-de-lenvironnement",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Configuration de cw4-group",id:"configuration-de-cw4-group",children:[]},{value:"Configuration de cw3-flex-multisig",id:"configuration-de-cw3-flex-multisig",children:[]},{value:"Gouverner les contrats intelligents",id:"gouverner-les-contrats-intelligents",children:[]},{value:"Proposer",id:"proposer",children:[]},{value:"D\xe9fi",id:"d\xe9fi",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"contrat-intelligent-de-dao"},"Contrat intelligent de DAO"),(0,s.kt)("p",null,"Les DAO sont des constructions sociales qui se composent de plus d'une entit\xe9. Ideally, collect your friends' and colleagues' blockchain addresses for this course. Or set up several keys like we will do for this course like we will do right now."),(0,s.kt)("h2",{id:"configuration-de-lenvironnement"},"Configuration de l'environnement"),(0,s.kt)("p",null,"Ouvrez deux onglets de terminal, l'un devrait contenir un seul volet, DAO admin. L'autre onglet contiendra 4 volets, ceux-ci sont les membres. Nous utiliserons les aides ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmJS/cli")," ."),(0,s.kt)("h2",{id:"architecture"},"Architecture"),(0,s.kt)("p",null,"Nous utiliserons les contrats ",(0,s.kt)("inlineCode",{parentName:"p"},"cw4-group")," et ",(0,s.kt)("inlineCode",{parentName:"p"},"cw3-flex-multisig")," pour la DAO. L'avantage d'avoir deux contrats distincts est la flexibilit\xe9. ",(0,s.kt)("inlineCode",{parentName:"p"},"cw4-group")," contient des informations sur les membres. ",(0,s.kt)("inlineCode",{parentName:"p"},"cw3-flex-multisig")," contient les adresses des groupe cw4, le seuil de vote et la p\xe9riode de vote. Avec cette architecture, un groupe peut avoir plusieurs comptes multisig avec diff\xe9rents param\xe8tres."),(0,s.kt)("h2",{id:"configuration-de-cw4-group"},"Configuration de cw4-group"),(0,s.kt)("p",null,"Sur le premier terminal, commen\xe7ons \xe0 configurer un portefeuille et \xe0 lancer la DAO."),(0,s.kt)("p",null,"Lancez le client CosmJS :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.26 --init https://raw.githubusercontent.com/CosmWasm/cw-plus/master/contracts/cw4-group/helpers.ts\n")),(0,s.kt)("p",null,"Maintenant, enregistrez et instanciez le contrat :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const [addr, client] = await useOptions(pebblenetOptions).setup(\'password\', \'.main.key\');\nconst contract = CW4Group(client, pebblenetOptions.fees);\nconst codeId = await contract.upload(addr);\n\n// .editor\nconst initMsg = {\n    admin: addr,\n    members: [\n        {\n            addr: "wasm19pxmaaq8v6zgs5umtz8eqtpwcfgdj2nlhqhff3",\n            weight: 10, // weight est le poids de vote de cette addresse\n        },\n        {\n            addr: "wasm1zmtuez3qsquumcsn0tlees2mcpjfr4360vg63y",\n            weight: 10,\n        },\n        {\n            addr: "wasm16ycd7qpmdr0p7lj7x2peah8q8yjzfdt7zcmmy3",\n            weight: 10,\n        },\n        {\n            addr: "wasm1qzzafwky7hjzkaa7r9ldv2urdjn8333v8scwdn",\n            weight: 10,\n        },\n    ]\n};\n// ^D\n\nconst instance = await contract.instantiate(addr, codeId, initMsg, \'Council\');\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},">> instance\n{\n  contractAddress: 'wasm1p9c7e9hutpnlsk6twhwc3ehlx3fp00fusk9e8c',\n  admin: [AsyncFunction: admin],\n  totalWeight: [AsyncFunction: totalWeight],\n  member: [AsyncFunction: member],\n  listMembers: [AsyncFunction: listMembers],\n  hooks: [AsyncFunction: hooks],\n  updateAdmin: [AsyncFunction: updateAdmin],\n  updateMembers: [AsyncFunction: updateMembers],\n  _addHook: [AsyncFunction: _addHook],\n  _removeHook: [AsyncFunction: _removeHook]\n}\n")),(0,s.kt)("p",null,"Copiez et enregistrez ",(0,s.kt)("inlineCode",{parentName:"p"},"contractAddress"),"."),(0,s.kt)("h2",{id:"configuration-de-cw3-flex-multisig"},"Configuration de cw3-flex-multisig"),(0,s.kt)("p",null,"Passez maintenant au deuxi\xe8me onglet terminal. Et sur le premier onglet, lancez ces commandes :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const [addr, client] = await useOptions(pebblenetOptions).setup('password', '.account4.key');\nconst contract = CW3Flex(client, pebblenetOptions.fees);\n\n// .editor\nconst initMsg = {\n    group_addr: \"wasm1p9c7e9hutpnlsk6twhwc3ehlx3fp00fusk9e8c\",\n    threshold: { absolute_percentage: { percentage: \"0.5\" }},\n    max_voting_period: {time: 300}\n};\n// ^D\n\nconst instance = await contract.instantiate(addr, codeId, initMsg, 'Council Flex Multisig');\n")),(0,s.kt)("p",null,"Le seuil ",(0,s.kt)("inlineCode",{parentName:"p"},"threshold")," fixe le pourcentage total du vote qui est requis pour qu'une proposition soit adopt\xe9e. Il y a plus d'options dans le contrat pour la valeur seuil, pas seulement ",(0,s.kt)("inlineCode",{parentName:"p"},"absolute_percentage"),". Allez voir. ",(0,s.kt)("inlineCode",{parentName:"p"},"max_voting_period")," est la p\xe9riode totale de vote. Je l'ai mis en place 300 (secondes) pour le mettre en place des votes rapides."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},">> instance\n{\n  contractAddress: 'wasm10j4xn72f29v56wt9xd9dg2fgv5y8qjttrcl0mp',\n  threshold: [AsyncFunction: threshold],\n  proposal: [AsyncFunction: proposal],\n  query_vote: [AsyncFunction: query_vote],\n  listProposals: [AsyncFunction: listProposals],\n  reverseProposals: [AsyncFunction: reverseProposals],\n  voter: [AsyncFunction: voter],\n  listVoters: [AsyncFunction: listVoters],\n  listVotes: [AsyncFunction: listVotes],\n  propose: [AsyncFunction: propose],\n  vote: [AsyncFunction: vote],\n  execute: [AsyncFunction: execute],\n  close: [AsyncFunction: close],\n  _memberChangedHook: [AsyncFunction: _memberChangedHook]\n}\n")),(0,s.kt)("p",null,"Copiez ",(0,s.kt)("inlineCode",{parentName:"p"},"contractAddress"),". Comme vous pouvez le voir dans la liste des commandes disponibles, nous allons proposer d'utiliser ce client."),(0,s.kt)("p",null,"Pour les autres utilisateurs, vous n'avez pas besoin d'instancier un contrat. Nous allons utiliser celui cr\xe9\xe9 ci-dessus."),(0,s.kt)("p",null,"Autres onglets :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const [addr, client] = await useOptions(pebblenetOptions).setup('password', '.account1.key');\nconst contractAddress = \"wasm10j4xn72f29v56wt9xd9dg2fgv5y8qjttrcl0mp\"\n\nconst instance = contract.use(contractAddress);\n")),(0,s.kt)("p",null,"R\xe9p\xe9tez la m\xeame chose pour les autres volets, mais n'oubliez pas de modifier la partie ",(0,s.kt)("inlineCode",{parentName:"p"},".account1.key")," . C'est la cl\xe9 du portefeuille."),(0,s.kt)("h2",{id:"gouverner-les-contrats-intelligents"},"Gouverner les contrats intelligents"),(0,s.kt)("p",null,"Dans la section ",(0,s.kt)("a",{parentName:"p",href:"/fr/dev-academy/develop-smart-contract/intro"},"smart contract interaction")," , nous avons appris \xe0 mettre en place et \xe0 interagir avec les contrats ",(0,s.kt)("inlineCode",{parentName:"p"},"cw20-base"),". Vous souvenez-vous du champ ",(0,s.kt)("inlineCode",{parentName:"p"},"minter")," dans le message instantiate ?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Golden Stars",\n  "symbol": "STAR",\n  "decimals": "2",\n  "initial_balances": [\n    {"address": "wasm1ez03me7uljk7qerswdp935vlaa4dlu48mys3mq", "amount": "10000"},\n    {"address": "wasm1tx7ga0lsnumd5hfsh2py0404sztnshwqaqjwy8", "amount": "10000"},\n    {"address": "wasm1mvjtezrn8dpateu0435trlw5062qy76gf738n0", "amount": "10000"}\n  ],\n  "mint": {\n    "minter": "wasm1mvjtezrn8dpateu0435trlw5062qy76gf738n0"\n  }\n}\n')),(0,s.kt)("p",null,"Le minter est l'adresse qui a le privil\xe8ge de minter/cr\xe9er de nouveaux jetons dans le syst\xe8me. Comme vous l'avez devin\xe9, un simple utilisateur ayant la capacit\xe9 de minter des milliards de dollars de jetons n'est ni s\xfbr ni raisonnable. Plusieurs parties et organisations devraient \xeatre autoris\xe9es \xe0 g\xe9rer des op\xe9rations de mintage. C'est l\xe0 que r\xe9side la magie : utiliser les adresses DAO comme administrateur de contrat."),(0,s.kt)("p",null,"Je vais sauter la phase de configuration du cw20 que nous avons d\xe9j\xe0 vue."),(0,s.kt)("h2",{id:"proposer"},"Proposer"),(0,s.kt)("p",null,"Nous allons maintenant mettre en place une proposition pour minter 9999 jetons \xe0 une adresse. Allez \xe0 l'onglet 2 volet 1, au terminal cw3-flex-multisig."),(0,s.kt)("p",null,"Tout d'abord, pr\xe9cisez les d\xe9tails de la proposition. Remarquez que ",(0,s.kt)("inlineCode",{parentName:"p"},"msg")," est un msg de mintage de cw20 cod\xe9 en base64."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'// .editor\nlet title = "Mint tokens"\nlet description = "Mint 9999 tokens to address wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp";\nlet msg4 = [\n  {\n    wasm: {\n      execute: {\n        contract_addr: "wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp",\n        msg: "eyJtaW50Ijp7InJlY2lwaWVudCI6Indhc20xdzc0MGg1Nmo5bmh1ZHlra204MGo1cmY2bXMyNW5oZTlodXV2Z3AiLCJhbW91bnQiOiI5OTk5In19Cg==",\n        funds: []\n      }\n    }\n  }];\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"instance.propose(addr, title, description, msg4)\ninstance.listProposals()\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"{\n  proposals: [\n      {\n          id: 1,\n          title: 'Mint tokens',\n          description: 'Mint 9999 tokens to address wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp',\n          msgs: [Array],\n          status: 'open',\n          expires: [Object],\n          threshold: [Object]\n      }\n  ]\n}\n")),(0,s.kt)("p",null,"La proposition est maintenant cr\xe9\xe9e. Commen\xe7ons \xe0 voter :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'let proposalId = 1\ninstance.vote(addr, proposalId, "yes")\n')),(0,s.kt)("p",null,"Le seuil \xe9tant de ",(0,s.kt)("strong",{parentName:"p"},"50%"),", seule la moiti\xe9 des votants doit voter oui pour que la proposition soit adopt\xe9e."),(0,s.kt)("p",null,"V\xe9rifiez \xe0 nouveau la proposition :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"\n{\n  proposals: [\n    {\n      id: 1,\n      title: 'Mint tokens',\n      description: 'Mint 9999 tokens to address wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp',\n      msgs: [Array],\n      status: 'passed',\n      expires: [Object],\n      threshold: [Object]\n    }\n  ]\n}\n")),(0,s.kt)("p",null,"La proposition est pass\xe9e, et elle est pr\xeate \xe0 \xeatre ex\xe9cut\xe9e. Ex\xe9cutez la proposition valid\xe9e :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"instance.execute(addr, proposalId)\n")),(0,s.kt)("p",null,"Allez maintenant dans le volet du terminal cw20 et v\xe9rifiez le solde du compte de l'adresse cw20 \xe0 laquelle vous avez frapp\xe9 les jetons :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},">> contract.balance(\"wasm1w740h56j9nhudykkm80j5rf6ms25nhe9huuvgp\")\n'9999'\n")),(0,s.kt)("h2",{id:"d\xe9fi"},"D\xe9fi"),(0,s.kt)("p",null,"Pour relever le d\xe9fi, vous pouvez explorer d'autres param\xe8tres de seuil, configurer plusieurs contrats intelligents et voir ce qui change."),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"F\xe9licitations ! Bienvenue dans la d\xe9mocratie d\xe9centralis\xe9e."),(0,s.kt)("p",null,"Nous avons donn\xe9 une br\xe8ve entr\xe9e \xe0 la DAO de CosmWasm et aux contrats intelligents de gouvernance. Nous n'avons couvert qu'une petite partie des fonctionnalit\xe9s des contrats DAO cw3 et cw4, je vous encourage \xe0 aller de l'avant et \xe0 explorer le code pour en savoir plus sur toutes les capacit\xe9s."))}p.isMDXComponent=!0}}]);