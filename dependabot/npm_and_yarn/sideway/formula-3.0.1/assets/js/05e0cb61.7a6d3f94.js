"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[6254],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(t),d=r,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={description:"Use a custom user interface."},i="Use custom UI",s={unversionedId:"how-to/use-custom-ui",id:"how-to/use-custom-ui",title:"Use custom UI",description:"Use a custom user interface.",source:"@site/snaps/how-to/use-custom-ui.md",sourceDirName:"how-to",slug:"/how-to/use-custom-ui",permalink:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/snaps/how-to/use-custom-ui",draft:!1,tags:[],version:"current",frontMatter:{description:"Use a custom user interface."},sidebar:"snapsSidebar",previous:{title:"Manage keys",permalink:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/snaps/how-to/manage-keys"},next:{title:"Troubleshoot",permalink:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/snaps/how-to/troubleshoot"}},p={},l=[{value:"Components",id:"components",level:2},{value:"copyable",id:"copyable",level:3},{value:"divider",id:"divider",level:3},{value:"heading",id:"heading",level:3},{value:"panel",id:"panel",level:3},{value:"spinner",id:"spinner",level:3},{value:"text",id:"text",level:3},{value:"Markdown",id:"markdown",level:2}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-custom-ui"},"Use custom UI"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/snaps/reference/rpc-api#snap_dialog"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," RPC method and\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/sideway/formula-3.0.1/snaps/reference/exports#ontransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"onTransaction"))," exported method use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-ui")," module to display custom user interface (UI) components."),(0,r.kt)("p",null,"To use custom UI, first install ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-ui")," using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/snaps-ui\n")),(0,r.kt)("p",null,"Then, whenever you're required to return a custom UI component, import the components from the\npackage and build your UI with them.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([\n  heading('Alert heading'),\n  text('Something happened in the system.'),\n]);\n\nreturn content;\n")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeType")," enum exported by ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-ui")," details the available components."),(0,r.kt)("h3",{id:"copyable"},"copyable"),(0,r.kt)("p",null,"Outputs a read-only text field with a copy-to-clipboard shortcut."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { copyable } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = copyable('Text to be copied');\n")),(0,r.kt)("h3",{id:"divider"},"divider"),(0,r.kt)("p",null,"Outputs a horizontal divider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, divider, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([\n  text('Text before the divider'),\n  divider(),\n  text('Text after the divider'),\n]);\n")),(0,r.kt)("h3",{id:"heading"},"heading"),(0,r.kt)("p",null,"Outputs a heading.\nThis is useful for ",(0,r.kt)("a",{parentName:"p",href:"#panel"},"panel")," titles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([\n  heading('Title of the panel'),\n  text('Text of the panel'),\n]);\n")),(0,r.kt)("h3",{id:"panel"},"panel"),(0,r.kt)("p",null,"Outputs a panel, which can be used as a container for other components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst insights = [\n  /*...*/\n];\nconst content = panel([\n  heading('Here are the transaction insights'),\n  ...insights.map((insight) => text(insight.description)),\n]);\n")),(0,r.kt)("h3",{id:"spinner"},"spinner"),(0,r.kt)("p",null,"Outputs a loading indicator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, spinner } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([heading('Please wait...'), spinner()]);\n")),(0,r.kt)("h3",{id:"text"},"text"),(0,r.kt)("p",null,"Outputs text."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = text('This is a simple text UI');\n")),(0,r.kt)("h2",{id:"markdown"},"Markdown"),(0,r.kt)("p",null,"Text-based components accept a very small subset of Markdown: ",(0,r.kt)("inlineCode",{parentName:"p"},"**bold**")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_italic_"),".\nThis subset will be increased in the future."))}c.isMDXComponent=!0}}]);