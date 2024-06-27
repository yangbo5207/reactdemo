import{c as v,j as t,G as j,b as w,f as S,e as k,d as E}from"./index-CKuzEZT2.js";import{h as P,a as R,g as C}from"./atom-one-light-B1cH31dZ.js";import{P as A}from"./Preview-B-0qojbv.js";const M=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <script src="https://cdn.tailwindcss.com"><\/script>
    <title>案例演示</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`,O=`button {
  border: 1px solid transparent;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem!important;
  font-size: 0.875rem!important;
  line-height: 1.25rem!important;
  font-weight: 500!important;
  background-color: rgb(243 244 246)!important;
  cursor: pointer!important;
  transition: all 0.5s;
}

button:hover {
  background-color: rgb(229 231 235) !important;
}
`,D=`import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

document.documentElement.style.fontSize = '14px'

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
`;function G({className:l,...e}){const n=/language-(\w+)/.exec(l||"");return n?t.jsx(P,{language:n[1],PreTag:"div",...e,style:R}):t.jsx("code",{className:l,...e})}function B(l){const e=v.c(24),{renderArticle:n,files:y,hidePreview:_}=l;let r;e[0]!==n?(r=n(G),e[0]=n,e[1]=r):r=e[1];let m;e[2]===Symbol.for("react.memo_cache_sentinel")?(m=t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),e[2]=m):m=e[2];let d;e[3]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsx(j,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"\\u6B22\\u8FCE\\u9053\\u53CB",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0}),e[3]=d):d=e[3];let o;e[4]!==r?(o=t.jsxs("div",{className:"md:w-[40%] pr-4 keep",children:[r,m,d]}),e[4]=r,e[5]=o):o=e[5];let p,h;e[6]===Symbol.for("react.memo_cache_sentinel")?(p={externalResources:["https://cdn.tailwindcss.com"],editorHeight:"auto"},h={dependencies:{react:"19.0.0-rc-dfd30974ab-20240613","react-dom":"19.0.0-rc-dfd30974ab-20240613","tailwind-merge":"latest",clsx:"latest"}},e[6]=p,e[7]=h):(p=e[6],h=e[7]);let f;e[8]===Symbol.for("react.memo_cache_sentinel")?(f={code:M,hidden:!0},e[8]=f):f=e[8];let u;e[9]===Symbol.for("react.memo_cache_sentinel")?(u={code:D,hidden:!0},e[9]=u):u=e[9];let g;e[10]===Symbol.for("react.memo_cache_sentinel")?(g={code:O,hidden:!0},e[10]=g):g=e[10];let i;e[11]!==y?(i={...y,"/public/index.html":f,"index.js":u,"styles.css":g},e[11]=y,e[12]=i):i=e[12];let b;e[13]===Symbol.for("react.memo_cache_sentinel")?(b=t.jsx(w,{}),e[13]=b):b=e[13];let s;e[14]!==_?(s=!_&&t.jsx(A,{children:t.jsx(S,{})}),e[14]=_,e[15]=s):s=e[15];let a;e[16]!==s?(a=t.jsxs(k,{children:[b,s]}),e[16]=s,e[17]=a):a=e[17];let c;e[18]!==i||e[19]!==a?(c=t.jsx("div",{className:"md:w-[60%] sticky top-[8rem] h-[calc(100vh_-_8rem-35px)] overflow-y-auto",children:t.jsx(E,{template:"react",theme:C,options:p,customSetup:h,files:i,children:a})}),e[18]=i,e[19]=a,e[20]=c):c=e[20];let x;return e[21]!==o||e[22]!==c?(x=t.jsx("div",{children:t.jsxs("div",{className:"mt-5 md:flex",children:[o,c]})}),e[21]=o,e[22]=c,e[23]=x):x=e[23],x}export{B as A};
