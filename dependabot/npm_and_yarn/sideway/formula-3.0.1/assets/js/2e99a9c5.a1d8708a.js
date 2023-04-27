"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[9474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,k=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={description:"Detect a user's network and network changes."},l="Detect a user's network",i={unversionedId:"get-started/detect-network",id:"get-started/detect-network",title:"Detect a user's network",description:"Detect a user's network and network changes.",source:"@site/wallet/get-started/detect-network.md",sourceDirName:"get-started",slug:"/get-started/detect-network",permalink:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/wallet/get-started/detect-network",draft:!1,tags:[],version:"current",frontMatter:{description:"Detect a user's network and network changes."},sidebar:"walletSidebar",previous:{title:"Detect MetaMask",permalink:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/wallet/get-started/detect-metamask"},next:{title:"Access a user's accounts",permalink:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/wallet/get-started/access-accounts"}},d={},s=[{value:"Chain IDs",id:"chain-ids",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"detect-a-users-network"},"Detect a user's network"),(0,r.kt)("p",null,"It's important to keep track of the user's network chain ID because all RPC requests are submitted\nto the currently connected network."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#eth_chainId"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_chainId")),"\nRPC method to detect the chain ID of the user's current network.\nListen to the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/wallet/reference/provider-api#chainchanged"},(0,r.kt)("inlineCode",{parentName:"a"},"chainChanged"))," provider event to\ndetect when the user changes networks."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/wallet/get-started/set-up-dev-environment#example"},"example project script"),", the following code detects a\nuser's network and when the user changes networks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"const chainId = await window.ethereum.request({ method: 'eth_chainId' });\n\nwindow.ethereum.on('chainChanged', handleChainChanged);\n\nfunction handleChainChanged(chainId) {\n  // We recommend reloading the page, unless you must do otherwise.\n  window.location.reload();\n}\n")),(0,r.kt)("h2",{id:"chain-ids"},"Chain IDs"),(0,r.kt)("p",null,"These are the chain IDs of the Ethereum networks that MetaMask supports by default.\nConsult ",(0,r.kt)("a",{parentName:"p",href:"https://chainid.network"},"chainid.network")," for more."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hex"),(0,r.kt)("th",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("th",{parentName:"tr",align:null},"Network"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethereum main network (Mainnet)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x5"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Goerli test network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0xaa36a7"),(0,r.kt)("td",{parentName:"tr",align:null},"11155111"),(0,r.kt)("td",{parentName:"tr",align:null},"Sepolia test network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0xe704"),(0,r.kt)("td",{parentName:"tr",align:null},"59140"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.linea.build/"},"Linea Goerli test network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x539"),(0,r.kt)("td",{parentName:"tr",align:null},"1337"),(0,r.kt)("td",{parentName:"tr",align:null},"Localhost test networks (including ",(0,r.kt)("a",{parentName:"td",href:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/wallet/get-started/run-development-network"},"Ganache"),")")))))}p.isMDXComponent=!0}}]);