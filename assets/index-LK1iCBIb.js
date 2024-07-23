import{j as e,G as i,h as a,a as c}from"./index-BxXbnW9e.js";import{a as d,b as l,c as m,d as p}from"./index-BEsnAH_r.js";import{I as h,d as x}from"./activecode-BfSkJlGQ.js";import{g as u}from"./index-DMQVh9lL.js";import{P as g}from"./Preview-Cfw1m546.js";function f(){function t(n){localStorage.setItem("active_code",n.get("code")),location.reload()}return e.jsxs("div",{className:"pt-4",children:[e.jsx("div",{className:"rounded-md bg-yellow-50 p-4 border border-yellow-400",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-yellow-700",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Attention needed"}),e.jsx("div",{className:"mt-2 text-sm text-yellow-700",children:e.jsx("p",{children:"你还未输入激活码，或者激活码已过期，请重新输入即可访问"})})]})]})}),e.jsxs("form",{action:t,className:"flex items-center justify-between",children:[e.jsx(h,{name:"code",placeholder:"Please input your active code",className:"flex-1 mr-4",pattern:x}),e.jsx("button",{type:"submit",children:"确认"})]})]})}const j=`<!DOCTYPE html>
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
`,v=`button {
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
`,b=`import React, { StrictMode } from "react";
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
`;function w({className:t,...n}){const r=/language-(\w+)/.exec(t||"");return r?e.jsx(a,{language:r[1],PreTag:"div",...n,style:c}):e.jsx("code",{className:t,...n})}function I(t){const{renderArticle:n,files:r,hidePreview:o}=t,s=localStorage.getItem("active_code");return e.jsx("div",{children:e.jsxs("div",{className:"mt-5 md:flex",children:[e.jsxs("div",{className:"md:w-[40%] pr-4 keep",children:[s?n(w):e.jsx(f,{}),e.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),e.jsx(i,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]}),e.jsx("div",{className:"md:w-[60%] sticky top-[8rem] h-[calc(100vh_-_8rem-35px)] overflow-y-auto",children:e.jsx(d,{template:"react",theme:u,options:{externalResources:["https://cdn.tailwindcss.com"],editorHeight:"auto"},customSetup:{dependencies:{react:"19.0.0-rc-dfd30974ab-20240613","react-dom":"19.0.0-rc-dfd30974ab-20240613","tailwind-merge":"latest",clsx:"latest"}},files:{...r,"/public/index.html":{code:j,hidden:!0},"index.js":{code:b,hidden:!0},"styles.css":{code:v,hidden:!0}},children:e.jsxs(l,{children:[e.jsx(m,{}),!o&&e.jsx(g,{children:e.jsx(p,{})})]})})})]})})}export{I as A};
