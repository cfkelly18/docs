(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8120],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3832:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],s={title:"cw721 Spec",sidebar_position:1},l="CW721 Spec: Non Fungible Tokens",p={unversionedId:"cw721/spec",id:"cw721/spec",isDocsHomePage:!1,title:"cw721 Spec",description:"cw721 package source",source:"@site/cw-plus/cw721/spec.md",sourceDirName:"cw721",slug:"/cw721/spec",permalink:"/cw-plus/0.6.2/cw721/spec",editUrl:"https://github.com/CosmWasm/docs/edit/main/cw-plus/cw721/spec.md",version:"current",sidebarPosition:1,frontMatter:{title:"cw721 Spec",sidebar_position:1},sidebar:"cwPlus",previous:{title:"CW4 Stake",permalink:"/cw-plus/0.6.2/cw4/cw4-stake-spec"},next:{title:"cw721-base Spec",permalink:"/cw-plus/0.6.2/cw721/cw721-base"}},c=[{value:"Base",id:"base",children:[{value:"Messages",id:"messages",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Receiver",id:"receiver",children:[]}]},{value:"Metadata",id:"metadata",children:[{value:"Queries",id:"queries-1",children:[]}]},{value:"Enumerable",id:"enumerable",children:[{value:"Queries",id:"queries-2",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cw721-spec-non-fungible-tokens"},"CW721 Spec: Non Fungible Tokens"),(0,r.kt)("p",null,"cw721 package source\ncode: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/blob/master/packages/cw721/README.md"},"https://github.com/CosmWasm/cosmwasm-plus/blob/master/packages/cw721/README.md")),(0,r.kt)("p",null,"cw721 is a specification for non-fungible tokens based on CosmWasm. The name and design is based on Ethereum's ERC721\nstandard, with some enhancements. The types in here can be imported by contracts that wish to implement this spec, or by\ncontracts that call to any standard cw721 contract."),(0,r.kt)("p",null,"The specification is split into multiple sections, a contract may only implement some of this functionality, but must\nimplement the base."),(0,r.kt)("h2",{id:"base"},"Base"),(0,r.kt)("p",null,"This handles ownership, transfers, and allowances. These must be supported as is by all cw721 contracts. Note that all\ntokens must have an owner, as well as an ID. The ID is an arbitrary string, unique within the contract."),(0,r.kt)("h3",{id:"messages"},"Messages"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TransferNft{recipient, token_id}")," - This transfers ownership of the token to ",(0,r.kt)("inlineCode",{parentName:"p"},"recipient")," account. This is designed to\nsend to an address controlled by a private key and ",(0,r.kt)("em",{parentName:"p"},"does not"),"\ntrigger any actions on the recipient if it is a contract."),(0,r.kt)("p",null,"Requires ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id")," to point to a valid token, and ",(0,r.kt)("inlineCode",{parentName:"p"},"env.sender")," to be the owner of it, or have an allowance to transfer\nit."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SendNft{contract, token_id, msg}")," - This transfers ownership of the token to ",(0,r.kt)("inlineCode",{parentName:"p"},"contract")," account. ",(0,r.kt)("inlineCode",{parentName:"p"},"contract"),"\nmust be an address controlled by a smart contract, which implements the cw721Receiver interface. The ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," will be\npassed to the recipient contract, along with the token_id."),(0,r.kt)("p",null,"Requires ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id")," to point to a valid token, and ",(0,r.kt)("inlineCode",{parentName:"p"},"env.sender")," to be the owner of it, or have an allowance to transfer\nit."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Approve{spender, token_id, expires}")," - Grants permission to ",(0,r.kt)("inlineCode",{parentName:"p"},"spender")," to transfer or send the given token. This can\nonly be performed when\n",(0,r.kt)("inlineCode",{parentName:"p"},"env.sender")," is the owner of the given ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id")," or an ",(0,r.kt)("inlineCode",{parentName:"p"},"operator"),". There can multiple spender accounts per token, and\nthey are cleared once the token is transfered or sent."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Revoke{spender, token_id}")," - This revokes a previously granted permission to transfer the given ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id"),". This can\nonly be granted when\n",(0,r.kt)("inlineCode",{parentName:"p"},"env.sender")," is the owner of the given ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id")," or an ",(0,r.kt)("inlineCode",{parentName:"p"},"operator"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApproveAll{operator, expires}")," - Grant ",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," permission to transfer or send all tokens owned by ",(0,r.kt)("inlineCode",{parentName:"p"},"env.sender"),". This\napproval is tied to the owner, not the tokens and applies to any future token that the owner receives as well."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RevokeAll{operator}")," - Revoke a previous ",(0,r.kt)("inlineCode",{parentName:"p"},"ApproveAll")," permission granted to the given ",(0,r.kt)("inlineCode",{parentName:"p"},"operator"),"."),(0,r.kt)("h3",{id:"queries"},"Queries"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OwnerOf{token_id}")," - Returns the owner of the given token, as well as anyone with approval on this particular token. If\nthe token is unknown, returns an error. Return type is\n",(0,r.kt)("inlineCode",{parentName:"p"},"OwnerResponse{owner}"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApprovedForAll{owner, include_expired}")," - List all operators that can access all of the owner's tokens. Return type\nis ",(0,r.kt)("inlineCode",{parentName:"p"},"ApprovedForAllResponse"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"include_expired")," is set, show expired owners in the results, otherwise, ignore them."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NumTokens{}")," - Total number of tokens issued"),(0,r.kt)("h3",{id:"receiver"},"Receiver"),(0,r.kt)("p",null,"The counter-part to ",(0,r.kt)("inlineCode",{parentName:"p"},"SendNft")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiveNft"),", which must be implemented by any contract that wishes to manage cw721\ntokens. This is generally ",(0,r.kt)("em",{parentName:"p"},"not"),"\nimplemented by any cw721 contract."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReceiveNft{sender, token_id, msg}")," - This is designed to handle ",(0,r.kt)("inlineCode",{parentName:"p"},"SendNft"),"\nmessages. The address of the contract is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"env.sender"),"\nso it cannot be faked. The contract should ensure the sender matches the token contract it expects to handle, and not\nallow arbitrary addresses."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sender")," is the original account requesting to move the token and ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Binary")," data that can be decoded into\na contract-specific message. This can be empty if we have only one default action, or it may be a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiveMsg")," variant\nto clarify the intention. For example, if I send to an exchange, I can specify the price I want to list the token for."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("h3",{id:"queries-1"},"Queries"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ContractInfo{}")," - This returns top-level metadata about the contract. Namely, ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NftInfo{token_id}")," - This returns metadata about one particular token. The return value is based on ",(0,r.kt)("em",{parentName:"p"},"ERC721 Metadata\nJSON Schema"),", but directly from the contract, not as a Uri. Only the image link is a Uri."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AllNftInfo{token_id}")," - This returns the result of both ",(0,r.kt)("inlineCode",{parentName:"p"},"NftInfo"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"OwnerOf")," as one query as an optimization for clients, which may want both info to display one NFT."),(0,r.kt)("h2",{id:"enumerable"},"Enumerable"),(0,r.kt)("h3",{id:"queries-2"},"Queries"),(0,r.kt)("p",null,"Pagination is acheived via ",(0,r.kt)("inlineCode",{parentName:"p"},"start_after")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"limit"),". Limit is a request set by the client, if unset, the contract will\nautomatically set it to\n",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultLimit")," (suggested 10). If set, it will be used up to a ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxLimit"),"\nvalue (suggested 30). Contracts can define other ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultLimit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxLimit"),"\nvalues without violating the cw721 spec, and clients should not rely on any particular values."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"start_after")," is unset, the query returns the first results, ordered by lexogaphically by ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id"),".\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"start_after")," is set, then it returns the first ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," tokens ",(0,r.kt)("em",{parentName:"p"},"after")," the given one. This allows straight-forward\npagination by taking the last result returned (a ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id"),") and using it as the ",(0,r.kt)("inlineCode",{parentName:"p"},"start_after")," value in a future query."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Tokens{owner, start_after, limit}")," - List all token_ids that belong to a given owner. Return type\nis ",(0,r.kt)("inlineCode",{parentName:"p"},"TokensResponse{tokens: Vec<token_id>}"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AllTokens{start_after, limit}")," - Requires pagination. Lists all token_ids controlled by the contract."))}u.isMDXComponent=!0}}]);