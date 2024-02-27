"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1953],{23:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(4848),s=r(5680);const o={sidebar_position:2},i="Create a Document",a={id:"tutorial-basics/create-a-document",title:"Create a Document",description:"Documents are groups of pages connected through:",source:"@site/docs/tutorial-basics/create-a-document.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-document",permalink:"/Docusaurus/docs/tutorial-basics/create-a-document",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/create-a-document.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a Page",permalink:"/Docusaurus/docs/tutorial-basics/create-a-page"},next:{title:"Create a Blog Post",permalink:"/Docusaurus/docs/tutorial-basics/create-a-blog-post"}},c={},l=[{value:"Create your first Doc",id:"create-your-first-doc",level:2},{value:"Configure the Sidebar",id:"configure-the-sidebar",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-a-document",children:"Create a Document"}),"\n",(0,n.jsxs)(t.p,{children:["Documents are ",(0,n.jsx)(t.strong,{children:"groups of pages"})," connected through:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["a ",(0,n.jsx)(t.strong,{children:"sidebar"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"previous/next navigation"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"versioning"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-your-first-doc",children:"Create your first Doc"}),"\n",(0,n.jsxs)(t.p,{children:["Create a markdown file at ",(0,n.jsx)(t.code,{children:"docs/hello.md"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-md",metastring:'title="docs/hello.md"',children:"# Hello\n\nThis is my **first Docusaurus document**!\n"})}),"\n",(0,n.jsxs)(t.p,{children:["A new document is now available at ",(0,n.jsx)(t.code,{children:"http://localhost:3000/docs/hello"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"configure-the-sidebar",children:"Configure the Sidebar"}),"\n",(0,n.jsxs)(t.p,{children:["Docusaurus automatically ",(0,n.jsx)(t.strong,{children:"creates a sidebar"})," from the ",(0,n.jsx)(t.code,{children:"docs"})," folder."]}),"\n",(0,n.jsx)(t.p,{children:"Add metadatas to customize the sidebar label and position:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-md",metastring:'title="docs/hello.md" {1-4}',children:"---\nsidebar_label: 'Hi!'\nsidebar_position: 3\n---\n\n# Hello\n\nThis is my **first Docusaurus document**!\n"})}),"\n",(0,n.jsxs)(t.p,{children:["It is also possible to create your sidebar explicitly in ",(0,n.jsx)(t.code,{children:"sidebars.js"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",metastring:'title="sidebars.js"',children:"module.exports = {\n  tutorialSidebar: [\n    {\n      type: 'category',\n      label: 'Tutorial',\n-     items: [...],\n+     items: ['hello'],\n    },\n  ],\n};\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5680:(e,t,r)=>{r.d(t,{RP:()=>l});var n=r(6540);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(r),h=s,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));d.displayName="MDXCreateElement"}}]);