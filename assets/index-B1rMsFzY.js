import{j as e,G as i,h as l,a as d}from"./index-BxXbnW9e.js";import{I as m,d as n}from"./activecode-BfSkJlGQ.js";function x(){function s(t){localStorage.setItem("active_code",t.get("code")),location.reload()}return e.jsxs("div",{className:"pt-4",children:[e.jsx("div",{className:"rounded-md bg-yellow-50 p-4 border border-yellow-400",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-yellow-700",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Attention needed"}),e.jsx("div",{className:"mt-2 text-sm text-yellow-700",children:e.jsx("p",{children:"你还未输入激活码，或者激活码已过期，请重新输入即可访问"})})]})]})}),e.jsxs("form",{action:s,className:"flex items-center justify-between",children:[e.jsx(m,{name:"code",placeholder:"Please input your active code",className:"flex-1 mr-4",pattern:n}),e.jsx("button",{type:"submit",children:"确认"})]})]})}function u({className:s,...t}){console.log(t);const o=/language-(\w+)/.exec(s||"");return o?e.jsx(l,{language:o[1],PreTag:"div",...t,style:d}):e.jsx("code",{className:s,...t})}function j(s){const{renderArticle:t,isAuth:o,isGiscus:a=!0}=s,r=localStorage.getItem("active_code"),c=o?r===n:!0;return e.jsxs("div",{className:"pr-4 keep max-w-[700px] mx-auto",children:[c?t(u):e.jsx(x,{}),a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),e.jsx(i,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]})]})}export{j as A};
