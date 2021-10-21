(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3419],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||c;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<c;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9100:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(2122),a=t(9756),c=(t(7294),t(3905)),o=["components"],s={sidebar_position:2},i="Infrastructure de la cha\xeene de blocs",u={unversionedId:"basics/infra",id:"basics/infra",isDocsHomePage:!1,title:"Infrastructure de la cha\xeene de blocs",description:"Dans les services web traditionnels, une application front end (comme une page web ou une application) interagit avec une application backend (comme les API ou un serveur Postgres).",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/basics/02-infra.md",sourceDirName:"basics",slug:"/basics/infra",permalink:"/fr/dev-academy/basics/infra",editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"Qu'est-ce que la blockchain ?",permalink:"/fr/dev-academy/basics/what-is-blockchain"},next:{title:"Les bases de Cosmos SDK et CosmWasm",permalink:"/fr/dev-academy/basics/cosmos-sdk-cw"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"infrastructure-de-la-cha\xeene-de-blocs"},"Infrastructure de la cha\xeene de blocs"),(0,c.kt)("p",null,"Dans les services web traditionnels, une application front end (comme une page web ou une application) interagit avec une application backend (comme les API ou un serveur Postgres)."),(0,c.kt)("p",null,"Dans l'infrastructure blockchain, un frontend parle directement avec le r\xe9seau blockchain, visualisant l'\xe9tat de la cha\xeene. Un r\xe9seau de blockchain contient des n\u0153uds, qui valident les transactions et les ajoutent aux blocs. Ce r\xe9seau de noeuds d\xe9centralis\xe9 remplace la base de donn\xe9es et les APIs d'un web service traditionnel. La blockchain elle-m\xeame sert de data store, et l'application (ou machine \xe0 \xe9tats) que les n\u0153uds ex\xe9cutent prend la place de ses API (en ing\xe9rant les transactions et en d\xe9finissant les transitions entre les \xe9tats)."),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"Note"),": Dans certains cas, les applications blockchain peuvent \xe9galement interagir avec un backend qui, \xe0 son tour, se connecte \xe0 la blockchain. Par exemple, l'infrastructure backend peut enregistrer les informations dans une base de donn\xe9es externe pour servir des requ\xeates complexes qui seraient co\xfbteuses \xe0 ex\xe9cuter sur la cha\xeene elle-m\xeame."))}d.isMDXComponent=!0}}]);