import{c as u,r as m,j as n,a as j,t as g}from"./index-oQiJtYgt.js";import{C as f}from"./Cardruntime-WygvHClN.js";import{B as b}from"./Preview-CBmvf_l4.js";import{A as R}from"./index-FLqTg1MW.js";import"./atom-one-light-EzjejzeC.js";const v=`import { useRef } from 'react';
import Button from './Button'
import Post from './Post'

export default function App() {
  const post = useRef(null);

  function handleClick() {
    post.current.scrollAndFocusAddComment();
  }

  return (
    <>
      <Button onClick={handleClick} primary>Write a comment</Button>
      <Post ref={post} />
    </>
  );
}

`,y=`import { useRef, useImperativeHandle } from 'react';
import Input from './Input'

export default function Post({ref}) {
  const commentsRef = useRef(null);
  const addCommentRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollAndFocusAddComment() {
        commentsRef.current.scrollToBottom();
        addCommentRef.current.focus();
      }
    };
  }, []);

  return (
    <>
      <article>
        <p className='my-5'>Welcome to my Blog!</p>
      </article>
      <CommentList ref={commentsRef} />
      <AddComment ref={addCommentRef} />
    </>
  );
}


const CommentList = ({ref}) => {
  const divRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollToBottom() {
        const node = divRef.current;
        node.scrollTop = node.scrollHeight;
      }
    };
  }, []);

  let comments = [];
  for (let i = 0; i < 50; i++) {
    comments.push(<p key={i}>Comment #{i}</p>);
  }

  return (
    <div className="border p-4 rounded h-32 overflow-y-auto" ref={divRef}>
      {comments}
    </div>
  );
};


function AddComment(props) {
  return (
    <Input placeholder="Add comment..." ref={props.ref} className="mt-4" />
  )
}
`,C=`import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

export default function Input(props) {
  const {ref, className, ...other} = props
  const base = 'flex items-center border px-2 rounded-md text-gray-500'
  const cls = clsx(base, className)
  return (
    <div className={twMerge(cls)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        ref={ref}
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,N=`import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

document.documentElement.style.fontSize = '14px'
// 本组件只是一个简单的 UI 组件，学习时无需多过关注

export default function Button(props) {
  const {className, primary, danger, sm, lg, signal, success, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,
    ['text-sky-500 bg-white border border-sky-300 hover:bg-sky-50']: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }, className))

  return (
    <button className={cls} {...other}>
      {props.children}
      {signal && (
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
    </button>
  )
}
`;function w(){const t=u.c(6),e=m.useRef(null);let r;t[0]!==e?(r=n.jsx("input",{ref:e,type:"text",className:"border p-2 rounded-md flex-1"}),t[0]=e,t[1]=r):r=t[1];let s;t[2]===Symbol.for("react.memo_cache_sentinel")?(s=n.jsx("button",{onClick:()=>e.current.focus(),className:"ml-3",children:"点击获取焦"}),t[2]=s):s=t[2];let o;return t[3]!==r||t[4]!==s?(o=n.jsxs("div",{className:"flex justify-between",children:[r,s]}),t[3]=r,t[4]=s,t[5]=o):o=t[5],o}function h(t){const e=u.c(14);let r,s,o;e[0]!==t?({ref:s,className:r,...o}=t,e[0]=t,e[1]=r,e[2]=s,e[3]=o):(r=e[1],s=e[2],o=e[3]);let l;if(e[4]!==r){const p=j("flex items-center border px-2 rounded-md text-gray-500",r);l=g(p),e[4]=r,e[5]=l}else l=e[5];let i;e[6]===Symbol.for("react.memo_cache_sentinel")?(i=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),e[6]=i):i=e[6];let d;e[7]===Symbol.for("react.memo_cache_sentinel")?(d={outline:"none"},e[7]=d):d=e[7];let c;e[8]!==s||e[9]!==o?(c=n.jsx("input",{ref:s,className:"flex-1 !border-none p-2",style:d,type:"text",...o}),e[8]=s,e[9]=o,e[10]=c):c=e[10];let a;return e[11]!==l||e[12]!==c?(a=n.jsxs("div",{className:l,children:[i,c]}),e[11]=l,e[12]=c,e[13]=a):a=e[13],a}function I(){const t=u.c(6),e=m.useRef(null);let r;t[0]!==e?(r=n.jsx(h,{ref:e,type:"text",className:"flex-1"}),t[0]=e,t[1]=r):r=t[1];let s;t[2]===Symbol.for("react.memo_cache_sentinel")?(s=n.jsx("button",{onClick:()=>e.current.focus(),className:"ml-3",children:"点击获取焦"}),t[2]=s):s=t[2];let o;return t[3]!==r||t[4]!==s?(o=n.jsxs("div",{className:"flex justify-between",children:[r,s]}),t[3]=r,t[4]=s,t[5]=o):o=t[5],o}function k(){const t=u.c(8),e=m.useRef(null);let r;t[0]===Symbol.for("react.memo_cache_sentinel")?(r=function(){e.current.scrollAndFocusAddComment()},t[0]=r):r=t[0];const s=r;let o;t[1]!==s?(o=n.jsx(b,{onClick:s,primary:!0,children:"Write a comment"}),t[1]=s,t[2]=o):o=t[2];let l;t[3]!==e?(l=n.jsx(A,{ref:e}),t[3]=e,t[4]=l):l=t[4];let i;return t[5]!==o||t[6]!==l?(i=n.jsxs(n.Fragment,{children:[o,l]}),t[5]=o,t[6]=l,t[7]=i):i=t[7],i}const A=t=>{const e=u.c(10),{ref:r}=t,s=m.useRef(null),o=m.useRef(null);let l,i;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=()=>({scrollAndFocusAddComment(){s.current.scrollToBottom(),o.current.focus()}}),i=[],e[0]=l,e[1]=i):(l=e[0],i=e[1]),m.useImperativeHandle(r,l,i);let d;e[2]===Symbol.for("react.memo_cache_sentinel")?(d=n.jsx("article",{children:n.jsx("p",{children:"Welcome to my Blog!"})}),e[2]=d):d=e[2];let c;e[3]!==s?(c=n.jsx(B,{ref:s}),e[3]=s,e[4]=c):c=e[4];let a;e[5]!==o?(a=n.jsx(_,{ref:o}),e[5]=o,e[6]=a):a=e[6];let p;return e[7]!==c||e[8]!==a?(p=n.jsxs(n.Fragment,{children:[d,c,a]}),e[7]=c,e[8]=a,e[9]=p):p=e[9],p},B=t=>{const e=u.c(5),{ref:r}=t,s=m.useRef(null);let o,l;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=()=>({scrollToBottom(){const c=s.current;c.scrollTop=c.scrollHeight}}),l=[],e[0]=o,e[1]=l):(o=e[0],l=e[1]),m.useImperativeHandle(r,o,l);let i;if(e[2]===Symbol.for("react.memo_cache_sentinel")){i=[];for(let c=0;c<50;c++)i.push(n.jsxs("p",{children:["Comment #",c]},c));e[2]=i}else i=e[2];let d;return e[3]!==s?(d=n.jsx("div",{className:"border p-4 rounded h-32 overflow-y-auto",ref:s,children:i}),e[3]=s,e[4]=d):d=e[4],d};function _(t){const e=u.c(2);let r;return e[0]!==t.ref?(r=n.jsx(h,{placeholder:"Add comment...",ref:t.ref,className:"mt-4"}),e[0]=t.ref,e[1]=r):r=e[1],r}function x(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"React 中的控制反转"})}),`
`,n.jsx(e.p,{children:"在面向对象编程中，IOC (Inversion of Control) 控制反转是一个非常高级的概念。它是一种设计理念，在减少对象之间的耦合关系上有非常重要的作用。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"许多前端虽然对其有所耳闻，但说实话，能理解的并不多。甚至很对前端对解耦这个概念都是一头雾水。"}),`
`]}),`
`,n.jsxs(e.p,{children:["IOC 的设计理念里，有三个角色，一个角色是",n.jsx(e.strong,{children:"容器 C"}),"，一个角色是",n.jsx(e.strong,{children:"被控制者 B"}),"，一个角色是",n.jsx(e.strong,{children:"控制者 A"}),"，许多时候，在代码开发中，控制者 A 直接去控制对象 B，会导致 B 被多次实例化而从让代码逻辑变得更加复杂。因此 IOC 的理念是让 控制者 A 失去对 B 的直接控制权，它只能与容器交互。从而将 A 与 B 的直接联系隔离开。"]}),`
`,n.jsx(e.p,{children:"这样说可能会有点绕，但是呢，我们使用一个大家经常使用的代码来说明一下，你一下就能明白。"}),`
`,n.jsxs(e.p,{children:["在实践中，我们可以通过 ref 直接拿到 input 的对象，然后通过调用 ",n.jsx(e.code,{children:".focus"})," 让输入框获取焦点。代码如下"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useRef } from 'react'

export default function Demo01() {
  const input = useRef(null)
  return (
    <div className='flex justify-between'>
      <input ref={input} type='text' className='border p-2 rounded-md flex-1' />
      <button
        onClick={() => input.current.focus()}
        className='ml-3'
      >点击获取焦</button>
    </div>
  )
}
`})}),`
`,n.jsx(f,{reload:!0,children:n.jsx(w,{})}),`
`,n.jsxs(e.p,{children:["但是许多时候，直接使用 ",n.jsx(e.code,{children:"input"})," 标签并不能满足我们的需求，我们需要基于 input 做额外的封装。但是封装之后，我们还是希望能通过调用 ",n.jsx(e.code,{children:".focus"})," 让输入框获取焦点。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const input = useRef(null)
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Input ref={input} type='text' />
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`input.current.focus()
`})}),`
`,n.jsx(e.p,{children:"封装之后的区别就在于，我们使用封装之后的 Input，就无法直接拿到内部的 input 对象了，但是我们的目标依然是获取 input 对象，然后调用 focus"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var input = document.getElementById('input')
input.focus()
`})}),`
`,n.jsx(e.p,{children:"但是在模块的划分上，input 元素本身并不属于当前模块/组件，因此，调用 input 方法的行为，其实是属于一种混乱。除非我们不做解耦和封装。"}),`
`,n.jsx(e.p,{children:"因此，在 React 的组件封装中，并不支持直接获取到 input 的引用，而是以一种传入控制器的方式来调用它。在这个场景里:"}),`
`,n.jsx(e.p,{children:`input 对象本身是被调用者
Input 组件是容器
ref 是控制器`}),`
`,n.jsx(e.p,{children:"当前组件利用 ref 来调用 input。从而让代码的解耦变得非常合理。可扩展性也很强。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useRef } from 'react'
import Input from './Input'

export default function Demo02() {
  const input = useRef(null)
  return (
    <div className='flex justify-between'>
      <Input ref={input} type='text' className='flex-1' />
      <button
        onClick={() => input.current.focus()}
        className='ml-3'
      >点击获取焦</button>
    </div>
  )
}
`})}),`
`,n.jsx(f,{reload:!0,children:n.jsx(I,{})}),`
`,n.jsx(e.p,{children:"这个案例中 Input 代码封装逻辑如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

export default function Input(props) {
  const {ref, className, ...other} = props
  const base = 'flex items-center border px-2 rounded-md text-gray-500'
  const cls = clsx(base, className)
  return (
    <div className={twMerge(cls)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        ref={ref}
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["注意一些概念上的区分：",n.jsx(e.strong,{children:"控制反转是一种设计思维"}),"，依赖注入是控制反转的一种具体实现，在 React 中，ref 也是一种控制反转的具体实现"]}),`
`]}),`
`,n.jsx(e.p,{children:"所以不要听着别人吹控制反转就觉得牛，你可能也天天在用"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"forwardRef 基础知识"})}),`
`,n.jsx(e.p,{children:"forwardRef 能够帮助 React 组件传递 ref。或者说是内部对象控制权的转移与转发。它接收一个组件作为参数"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { forwardRef } from 'react';

function MyInput(props, ref) {
  // ...
}

const InputNumber = forwardRef(MyInput);
`})}),`
`,n.jsx(e.p,{children:"这里需要注意的是，我们需要把 ref 放在自定义组件的参数中"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function MyInput(props, ref) {
  // ...
}
`})}),`
`,n.jsx(e.p,{children:"forwardRef 返回一个可渲染的函数组件。因此，我们可以通过一个简单的案例完善上面的代码"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function MyInput(props, ref) {
  return (
    <label>
      {props.label}
      <input ref={ref} />
    </label>
  );
}

const InputNumber = forwardRef(MyInput)
`})}),`
`,n.jsx(e.p,{children:"所以呢，在 React 的开发中，forwardRef 能够帮助我们实现更良好的解耦，这也是我一直非常喜欢使用 forwardRef 的原因。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"3"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"React19 中，ref 机制更改，forwardRef 被无情抛弃"})}),`
`,n.jsx(e.p,{children:"但是，在 React 19 中，forwardRef 被直接背刺，由于 ref 传递机制的更改，我们可以不用 forwardRef 也能做到同样的事情了。"}),`
`,n.jsx(e.p,{children:"首先，在声明组件时，ref 不再独立成为一个参数，而是作为 props 属性中的一个属性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function MyInput(props) {
  return (
    <label>
      {props.label}
      <input ref={props.ref} />
    </label>
  );
}
`})}),`
`,n.jsx(e.p,{children:"其次，代码这样写了之后，就可以直接在父组件中，通过 ref 拿到 input 的控制权"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function Index() {
  const input = useRef(null)

  function __clickHandler() {
    input.current.focus()
  }

  return (
    <div>
      <button onClick={__clickHandler}>
        点击获取焦点
      </button>
      <MyInput ref={input} />
    </div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"在父组件中的使用与以前一样，但是子组件由于不再需要 forwardRef，变得更加简单了。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useRef } from 'react'

export default function Demo02() {
  const input = useRef(null)
  return (
    <div className='flex justify-between'>
      <input ref={input} type='text' className='border p-2 rounded-md flex-1' />
      <button
        onClick={() => input.current.focus()}
        className='ml-3'
      >点击获取焦</button>
    </div>
  )
}
`})}),`
`,n.jsx(e.h2,{children:"4"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"useImperativeHandle 与 ref 的新配合"})}),`
`,n.jsx(e.p,{children:"除了直接拿到元素对象本身就已经存在的 ref，我们还可以通过 useImperativeHandle 来自定义 ref 控制器能执行哪些方法"}),`
`,n.jsx(e.p,{children:"useImperativeHandle 接收三个参数，分别是"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ref:"})," 组件声明时传入的 ref"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"createHandle:"})," 回调函数，需要返回 ref 引用的对象，我们也是在这里重写 ref 引用"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"deps:"})," 依赖项数组，可选。state，props 以及内部定义的其他变量都可以作为依赖项，React 内部会使用 Object.is 来对比依赖项是否发生了变化。依赖项发生变化时，createHandle 会重新执行，ref 引用会更新。如果不传入依赖项，那么每次更新 createHandle 都会重新执行"]}),`
`]}),`
`,n.jsx(e.p,{children:"在官方文档中，有这样一个案例，演示效果如图所示，当我点击按钮时，下方的 input 自动获取焦点，并且中间的滚动条滚动到最底部。"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://files.mdnice.com/user/3925/5454bbf2-46c4-43b8-b3ff-d71e23ad31b0.png",alt:""})}),`
`,n.jsx(e.p,{children:"我们结合新的 ref 传递机制和 useImperativeHandle 一起来分析一下这个案例应该怎么实现。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"思考时，请一定要把封装的思维带入进来，否则可能很难感受到这样做在解耦上的具体好处"}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:"首先我们先进行组件拆分，将整个内容拆分为按钮部分与信息部分，信息部分主要负责信息的展示与输入，因此页面组件大概长这样"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<>
  <button>Write a comment</button>
  <Post />
</>
`})}),`
`,n.jsx(e.p,{children:"我们期望点击按钮时，信息部分的输入框自动获取焦点，信息部分的信息展示区域能滚动到最底部，因此整个页面组件的代码可以表示为如下："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useRef } from 'react';
import Post from './Post.js';

export default function Page() {
  const postRef = useRef(null);

  function handleClick() {
    postRef.current.scrollAndFocusAddComment();
  }

  return (
    <>
      <button onClick={handleClick}>
        Write a comment
      </button>
      <Post ref={postRef} />
    </>
  );
}
`})}),`
`,n.jsx(e.p,{children:"再来思考信息部分。"}),`
`,n.jsx(e.p,{children:"信息部分 Post 又分为两个部分，分别是信息展示部分与信息输入部分。此时这两个部分的 ref 要透传给 Post，并最终再次透传给页面组件。因此他们的组件结构应该长这样"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<>
  <article>
    <p>Welcome to my blog!</p>
  </article>
  <CommentList ref={commentsRef} />
  <AddComment ref={addCommentRef} />
</>
`})}),`
`,n.jsx(e.p,{children:"这个时候，有一个需要考虑的点就是，有两个对象需要被控制，因此我们需要借助 useImperativeHandle 来自定义控制器，并在控制的方法中，整合他们"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`useImperativeHandle(ref, () => {
  return {
    scrollAndFocusAddComment() {
      commentsRef.current.scrollToBottom();
      addCommentRef.current.focus();
    }
  };
}, []);
`})}),`
`,n.jsxs(e.p,{children:["ref 的传递，只需要把它看成是一个普通的 props 即可，因此，",n.jsx(e.code,{children:"Post"})," 组件完整代码如下"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const Post = ({ref}) => {
  const commentsRef = useRef(null);
  const addCommentRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollAndFocusAddComment() {
        commentsRef.current.scrollToBottom();
        addCommentRef.current.focus();
      }
    };
  }, []);

  return (
    <>
      <article>
        <p>Welcome to my blog!</p>
      </article>
      <CommentList ref={commentsRef} />
      <AddComment ref={addCommentRef} />
    </>
  );
}
`})}),`
`,n.jsx(e.p,{children:"同样的道理，我们只需要把 CommentList 与 AddComment 的 ref 传递出来就可以了。"}),`
`,n.jsx(e.p,{children:"所以信息展示部分 CommentList 组件的代码为"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useRef, useImperativeHandle } from 'react';

const CommentList = ({ref}) => {
  const divRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollToBottom() {
        const node = divRef.current;
        node.scrollTop = node.scrollHeight;
      }
    };
  }, []);

  let comments = [];
  for (let i = 0; i < 50; i++) {
    comments.push(<p key={i}>Comment #{i}</p>);
  }

  return (
    <div className="CommentList" ref={divRef}>
      {comments}
    </div>
  );
};

export default CommentList;
`})}),`
`,n.jsx(e.p,{children:"信息输入部分 AddComment 的代码为"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function AddComment(props) {
  return (
    <input
      placeholder="Add comment..."
      ref={props.ref}
    />
  )
};

export default AddComment;
`})}),`
`,n.jsx(e.p,{children:"与之前相比，确实要简单了许多。完整的代码与案例演示请戳右侧区域。"}),`
`,n.jsx(e.h2,{children:"5"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"总结"})}),`
`,n.jsx(e.p,{children:"如果你对封装解耦比较重视，那么你一定能明显感受到，ref 与 useImperativeHandle 的结合能发挥的想象空间远不止于此，这种方式给 React 提供了一种扩展 React 能力的重要手段，因此，当你成为 React 高手之后，你一定会非常喜欢使用它们，他们的组合能让 React 项目变得更加多样化。"}),`
`,n.jsx(f,{reload:!0,children:n.jsx(k,{})})]})}function H(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(x,{...t})}):x(t)}const L={"App.js":v,"Post.jsx":y,"Button.jsx":N,"Input.jsx":C};function F(){const t=u.c(1);let e;return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(R,{files:L,renderArticle:r=>n.jsx(H,{components:{code:r}})}),t[0]=e):e=t[0],e}export{F as default};
