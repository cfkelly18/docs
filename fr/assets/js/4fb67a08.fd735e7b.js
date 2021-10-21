(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6590],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||c;return n?r.createElement(b,a(a({ref:t},l),{},{components:n})):r.createElement(b,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8548:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),a=["components"],i={sidebar_position:1},s="Qu'est-ce que la blockchain ?",u={unversionedId:"basics/what-is-blockchain",id:"basics/what-is-blockchain",isDocsHomePage:!1,title:"Qu'est-ce que la blockchain ?",description:"Les blockchains sont un type sp\xe9cifique de base de donn\xe9es constitu\xe9e de blocs de donn\xe9es, concat\xe9n\xe9s ensemble pour former une cha\xeene.",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/basics/01-what-is-blockchain.md",sourceDirName:"basics",slug:"/basics/what-is-blockchain",permalink:"/fr/dev-academy/basics/what-is-blockchain",editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"devAcademy",previous:{title:"Introduction",permalink:"/fr/dev-academy/intro"},next:{title:"Infrastructure de la cha\xeene de blocs",permalink:"/fr/dev-academy/basics/infra"}},l=[{value:"Sources",id:"sources",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"quest-ce-que-la-blockchain-"},"Qu'est-ce que la blockchain ?"),(0,c.kt)("p",null,"Les blockchains sont un type sp\xe9cifique de base de donn\xe9es constitu\xe9e de ",(0,c.kt)("em",{parentName:"p"},"blocs")," de donn\xe9es, concat\xe9n\xe9s ensemble pour former une ",(0,c.kt)("em",{parentName:"p"},"cha\xeene"),"."),(0,c.kt)("p",null,"Plus pr\xe9cis\xe9ment, les nouvelles donn\xe9es arrivent au coup par coup sous la forme de ",(0,c.kt)("em",{parentName:"p"},"transactions"),". Chaque transaction est ajout\xe9e \xe0 un bloc. Chaque bloc est encha\xeen\xe9 au bloc pr\xe9c\xe9dent, cr\xe9ant ainsi un ordre chronologique des donn\xe9es."),(0,c.kt)("p",null,"Bien que les blockchains puissent stocker tout type de donn\xe9es, l'utilisation la plus courante consiste \xe0 produire un ",(0,c.kt)("em",{parentName:"p"},"registre"),": une liste de transactions qui peuvent seulement s'ajouter. Par exemple, la blockchain de Bitcoin stocke toutes les transactions d'un ",(0,c.kt)("em",{parentName:"p"},"portefeuille")," (wallet / account) \xe0 tous les autres. Le solde de chaque compte est une r\xe9duction sur ces transactions."),(0,c.kt)("p",null,"Les cha\xeenes de blocs utilisent la cryptographie et des algorithmes de calcul distribu\xe9 pour assurer l'immuabilit\xe9, ce qui signifie que les donn\xe9es saisies ne peuvent pas \xeatre modifi\xe9es apr\xe8s coup. Pour le bitcoin, cela signifie que les transactions sont enregistr\xe9es pour toujours et consultables par tout le monde."),(0,c.kt)("h2",{id:"sources"},"Sources"),(0,c.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SSo_EIwHSd4",title:"Lecteur vid\xe9o YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,mark:"crwd-mark"})," ",(0,c.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bBC-nXj3Ng4",title:"Lecteur vid\xe9o YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,mark:"crwd-mark"}))}d.isMDXComponent=!0}}]);