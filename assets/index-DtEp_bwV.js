import{r as p,c as u,j as n,D as P}from"./index-oFmtIK6i.js";import{C as N}from"./Cardruntime-CDREzpNb.js";import{A as _}from"./index-joL20ffn.js";import"./index-DiYRcp-t.js";import"./index-DMQVh9lL.js";import"./Preview-D7Xnvlpj.js";import"./atom-one-light-q7r8Raww.js";const S=`import Provider from './context'
import Task from './task'

export default function App() {
  return (
    <Provider>
      <h3 className='font-bold'>Your Task</h3>
      <p className='!text-gray-400'>Here's a task for you!</p>
      <Task />
    </Provider>
  )
}
`,E=`import {createContext, useState} from 'react'

const def = {
  task: 'TASK-8878',
  content: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
  status: 'Progress',
  priority: 'Medium'
}

export const Context = createContext({})

export default function Provider({ children }) {
  const [task, updateTask] = useState(def)

  return (
    <Context value={{task, updateTask}}>{children}</Context>
  )
}
`,R=`import { useRef, use } from 'react'
import Editor from './editor'
import {Context} from './context'

export default function Demo03() {
  const editor = useRef(null)
  const {task} = use(Context)

  return (
    <div className='flex items-center border-t pt-4'>
      <div className='font-bold'>{task.task}</div>
      <div className='flex-1 mx-3 line-clamp-1'>{task.content}</div>
      <div className='text-green-500'>{task.status}</div>

      <button
        onClick={() => editor.current.show()}
        className='ml-3'
      >edit</button>
      <Editor ref={editor} title='Editor' />
    </div>
  )
}
`,w=`import { use } from 'react'
import Dialog from 'components/Dialog'
import {Context} from './context.jsx'

export default function Editor(props) {
  const {ref, ...other} = props
  const {task, updateTask} = use(Context)

  function __inputchange(e) {
    updateTask({
      ...task,
      content: e.target.value,
    })
  }

  return (
    <Dialog ref={ref} {...other} onSure={() => ref.current.close()}>
      <div className='flex items-center'>
        <div className='w-20'>name</div>
        <div className='flex-1 p-2 text-sm font-bold'>{task.task}</div>
      </div>

      <div className='flex items-center mt-4'>
        <div className='w-20'>content</div>
        <input
          value={task.content}
          className='flex-1 border rounded-md p-2 text-sm'
          onChange={__inputchange}
        />
      </div>

      <div className='flex items-center mt-4'>
        <div className='w-20'>status</div>
        <div className='flex-1 p-2 text-sm text-green-500'>{task.status}</div>
      </div>

      <div className='flex items-center mt-4'>
        <div className='w-20'>Priority</div>
        <div className='flex-1 p-2 text-sm text-red-500'>{task.priority}</div>
      </div>
    </Dialog>
  )
}
`,A={task:"TASK-8878",content:"Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",status:"Progress",priority:"Medium"},k=p.createContext({});function D(t){const e=u.c(5),{children:s}=t,[o,r]=p.useState(A);let c;e[0]!==o?(c={task:o,updateTask:r},e[0]=o,e[1]=c):c=e[1];let l;return e[2]!==c||e[3]!==s?(l=n.jsx(k,{value:c,children:s}),e[2]=c,e[3]=s,e[4]=l):l=e[4],l}function q(t){const e=u.c(29);let s,o;e[0]!==t?({ref:s,...o}=t,e[0]=t,e[1]=s,e[2]=o):(s=e[1],o=e[2]);const{task:r,updateTask:c}=p.use(k);let l;e[3]!==c||e[4]!==r?(l=function(T){c({...r,content:T.target.value})},e[3]=c,e[4]=r,e[5]=l):l=e[5];const a=l;let i;e[6]!==s.current?(i=()=>s.current.close(),e[6]=s.current,e[7]=i):i=e[7];let j;e[8]===Symbol.for("react.memo_cache_sentinel")?(j=n.jsx("div",{className:"w-20",children:"name"}),e[8]=j):j=e[8];let d;e[9]!==r.task?(d=n.jsxs("div",{className:"flex items-center",children:[j,n.jsx("div",{className:"flex-1 p-2 text-sm font-bold",children:r.task})]}),e[9]=r.task,e[10]=d):d=e[10];let f;e[11]===Symbol.for("react.memo_cache_sentinel")?(f=n.jsx("div",{className:"w-20",children:"content"}),e[11]=f):f=e[11];let x;e[12]!==r.content||e[13]!==a?(x=n.jsxs("div",{className:"flex items-center mt-4",children:[f,n.jsx("input",{value:r.content,className:"flex-1 border rounded-md p-2 text-sm",onChange:a})]}),e[12]=r.content,e[13]=a,e[14]=x):x=e[14];let v;e[15]===Symbol.for("react.memo_cache_sentinel")?(v=n.jsx("div",{className:"w-20",children:"status"}),e[15]=v):v=e[15];let m;e[16]!==r.status?(m=n.jsxs("div",{className:"flex items-center mt-4",children:[v,n.jsx("div",{className:"flex-1 p-2 text-sm text-green-500",children:r.status})]}),e[16]=r.status,e[17]=m):m=e[17];let g;e[18]===Symbol.for("react.memo_cache_sentinel")?(g=n.jsx("div",{className:"w-20",children:"Priority"}),e[18]=g):g=e[18];let h;e[19]!==r.priority?(h=n.jsxs("div",{className:"flex items-center mt-4",children:[g,n.jsx("div",{className:"flex-1 p-2 text-sm text-red-500",children:r.priority})]}),e[19]=r.priority,e[20]=h):h=e[20];let C;return e[21]!==s||e[22]!==o||e[23]!==i||e[24]!==d||e[25]!==x||e[26]!==m||e[27]!==h?(C=n.jsxs(P,{ref:s,...o,onSure:i,children:[d,x,m,h]}),e[21]=s,e[22]=o,e[23]=i,e[24]=d,e[25]=x,e[26]=m,e[27]=h,e[28]=C):C=e[28],C}function M(){const t=u.c(15),e=p.useRef(null),{task:s}=p.use(k);let o;t[0]!==s.task?(o=n.jsx("div",{className:"font-bold",children:s.task}),t[0]=s.task,t[1]=o):o=t[1];let r;t[2]!==s.content?(r=n.jsx("div",{className:"flex-1 mx-3 line-clamp-1",children:s.content}),t[2]=s.content,t[3]=r):r=t[3];let c;t[4]!==s.status?(c=n.jsx("div",{className:"text-green-500",children:s.status}),t[4]=s.status,t[5]=c):c=t[5];let l;t[6]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("button",{onClick:()=>e.current.show(),className:"ml-3",children:"edit"}),t[6]=l):l=t[6];let a;t[7]!==e?(a=n.jsx(q,{ref:e,title:"Editor"}),t[7]=e,t[8]=a):a=t[8];let i;return t[9]!==o||t[10]!==r||t[11]!==c||t[12]!==l||t[13]!==a?(i=n.jsxs("div",{className:"flex items-center border-t pt-4",children:[o,r,c,l,a]}),t[9]=o,t[10]=r,t[11]=c,t[12]=l,t[13]=a,t[14]=i):i=t[14],i}function y(){const t=u.c(3);let e,s;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx("h3",{className:"font-bold",children:"Your Task"}),s=n.jsx("p",{className:"!text-gray-400",children:"Here's a task for you!"}),t[0]=e,t[1]=s):(e=t[0],s=t[1]);let o;return t[2]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsxs(D,{children:[e,s,n.jsx(M,{})]}),t[2]=o):o=t[2],o}function b(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(N,{children:n.jsx(y,{})}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"改动"})}),`
`,n.jsx(e.p,{children:"与之前的版本相比，在 React19 中，context 有一些细微的变化。主要体现在如下三个方面。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1、删除旧版 Context"})}),`
`,n.jsx(e.p,{children:"旧版本的 Context 在 2018 年 10 月（v16.6.0）被废弃。但是为了保证平滑的升级，旧版代码一直沿用到了现在。在 React 19 中，这些代码会正式被删除。旧版本的 Context 仅在使用 contextTypes 和 getChildContext API 的类组件中可用。因此它的删除对现在的项目应该只会造成很小的影响。"}),`
`,n.jsx(e.p,{children:"如果你在项目中仍然使用了旧版 Context，你可以参考下面新旧版本的对比写法进行调整升级。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 之前
import PropTypes from 'prop-types';

class Parent extends React.Component {
  static childContextTypes = {
    foo: PropTypes.string.isRequired,
  };

  getChildContext() {
    return { foo: 'bar' };
  }

  render() {
    return <Child />;
  }
}

class Child extends React.Component {
  static contextTypes = {
    foo: PropTypes.string.isRequired,
  };

  render() {
    return <div>{this.context.foo}</div>;
  }
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 之后
const FooContext = React.createContext();

class Parent extends React.Component {
  render() {
    return (
      <FooContext value='bar'>
        <Child />
      </FooContext>
    );
  }
}

class Child extends React.Component {
  static contextType = FooContext;

  render() {
    return <div>{this.context}</div>;
  }
}
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2、简化 Provider 的使用"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const Context = createContext({})
`})}),`
`,n.jsx(e.p,{children:"在以前的使用中，我们需要使用 Context.Provider 来包裹子组件。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`<Context.Provider value={value}>
  {props.children}
</Context.Provider>
`})}),`
`,n.jsx(e.p,{children:"在 React19 中，我们可以直接使用 Context 来代替 Provider，从而让代表变得更加简洁。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`<Context value={value}>
  {props.children}
</Context>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3、可以使用 use 获取 context"})}),`
`,n.jsx(e.p,{children:"以前的版本中，在组件内部我们使用 useContext 来获取 context 中的状态。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// after
import { use } from 'react';

function MyComponent() {
  const theme = use(ThemeContext);
  // ...
`})}),`
`,n.jsx(e.h2,{children:"2"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"重学一次 context"})}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://files.mdnice.com/user/3925/9cb65ddb-71ee-42c2-8062-347ca8312b92.png",alt:""})}),`
`,n.jsxs(e.p,{children:["在 React 中，props 能够帮助我们将数据层层往下传递。但是，当数据传递太多层之后，不仅代码上比较繁琐，理解上也容易混乱不清。因此，我们需要一种能够",n.jsx(e.strong,{children:"跨越组件层级"}),"让直达子组件的数据传递方式，这就是 context."]}),`
`,n.jsxs(e.p,{children:["context 表示组件实例在运行期间能够",n.jsx(e.strong,{children:"直接读取"}),"的状态和内容。他记录了内存中的活跃数据。我们可以将这些数据使用 ",n.jsx(e.code,{children:"useState"})," 来定义。那么，context 中的数据更改，就会驱动所有使用到该数据的 UI 发生变化。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"context 的学习主要分为如下三个部分"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"一、"})," 如何创建 context"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"二、"})," 顶层组件中如何传递数据"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"三、"})," 子组件中如何获取数据"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"一、如何创建 context"})}),`
`,n.jsxs(e.p,{children:["我们可以使用 ",n.jsx(e.code,{children:"createContext"})," 来创建 context."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const SomeContext = createContext(defaultValue)
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"defaultValue"})," 表示默认值。他可以作为数据的兜底结果。当你无法从 ",n.jsx(e.code,{children:"value"})," 中读取具体的值时，则会使用 ",n.jsx(e.code,{children:"defaultValue"})," 中的值。在代码运行过程中，默认值始终保持不变。如果没有默认值，我们至少需要传入一个 ",n.jsx(e.code,{children:"null"}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"createContext"})," 执行之后的返回值，就是我们需要的 ",n.jsx(e.code,{children:"context"}),"。"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"二、如何传递 context"})}),`
`,n.jsx(e.p,{children:"返回的 context 通常是一系列组件的顶层父组件。因此，在使用时，我们通常会首先定义该顶层父组件。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function Provider(props) {
  const value = {...}
  return (
    <SomeContext value={value}>
      {props.children}
    </SomeContext>
  )
}
export default Provider
`})}),`
`,n.jsxs(e.p,{children:["在该顶层父组件中，我们使用刚才创建的 ",n.jsx(e.code,{children:"context"})," 作为父级标签，把子组件包起来。并作为渲染内容返回。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<SomeContext value={value}>
  {props.children}
</SomeContext>
`})}),`
`,n.jsxs(e.p,{children:["此处的 ",n.jsx(e.code,{children:"value"})," 表示我们在上下文中定义好的值。我们可以自己随意定义你想要传递给子组件的所有数据/方法。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"这些数据/方法通常被多个不同的子组件共同使用。否则我们没必要将数据/方法存储在 context 中。"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { createContext } from 'react';

const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  // ...
  return (
    <ThemeContext value={theme}>
      <Page />
    </ThemeContext>
  );
}
`})}),`
`,n.jsxs(e.p,{children:["此时，案例中 ",n.jsx(e.code,{children:"Page"})," 组件的所有后代子组件，都可以直接获取 context 中的值，不管层级有多深。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"value 可以是任何类型，你可以根据自己的项目需要设计合适的数据类型。"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"三、如何获取 context 中的值"})}),`
`,n.jsxs(e.p,{children:["在任意被包裹的子组件中，我们可以使用 ",n.jsx(e.code,{children:"use"})," 来获取 context 中的值。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function Button() {
  // ✅ Recommended way
  const theme = use(ThemeContext);
  return <button className={theme} />;
}
`})}),`
`,n.jsx(e.p,{children:"获取方法非常简单，接下来，我们使用具体的实践案例来分享 context 的使用。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["需要注意，多个 Context ",n.jsx(e.strong,{children:"可以嵌套使用"}),"，只是在实践中，这种场景不算多见。"]}),`
`]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"3"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"案例：在弹窗中更改页面的值"})}),`
`,n.jsx(e.p,{children:"学习了 context 的知识之后，我们来结合之前自定义的弹窗组件，一起来实现一下页面最开始的那个案例。"}),`
`,n.jsx(N,{children:n.jsx(y,{})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"由于是演示案例，所以数据比较简单，组件层级也不够深，所以大家把重点关注在 context 的技术学习上即可。并非代表真实实践中需要这样使用。"}),`
`]}),`
`,n.jsx(e.p,{children:"首先，我们创建一个 context 文件，该文件中，我们会创建 Context，并在其中定义好需要传递到各子组件中的去的数据和方法"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const def = {
  task: 'TASK-8878',
  content: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
  status: 'Progress',
  priority: 'Medium'
}

export const Context = createContext({})

export default function Provider({ children }) {
  const [task, updateTask] = useState(def)

  return (
    <Context value={{task, updateTask}}>{children}</Context>
  )
}
`})}),`
`,n.jsx(e.p,{children:"然后在父组件中，使用 Provider 包裹需要用到的子组件。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import Provider from './context'
import Task from './task'

export default function App() {
  return (
    <Provider>
      <h3 className='font-bold'>Your Task</h3>
      <p className='!text-gray-400'>Here's a task for you!</p>
      <Task />
    </Provider>
  )
}
`})}),`
`,n.jsxs(e.p,{children:["然后在各子组件中，使用 ",n.jsx(e.code,{children:"use(Context)"})," 获取当前组件需要的数据和方法即可"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { use } from 'react'
import {Context} from './context.jsx'

export default function Editor(props) {
  const {ref, ...other} = props
  const {task, updateTask} = use(Context)
  ...
`})}),`
`,n.jsx(e.p,{children:"完整的代码请查看右侧代码。"}),`
`,n.jsxs(e.p,{children:["这里比较有意思的一个地方是在 ",n.jsx(e.code,{children:"editor.jsx"})," 文件中，对于 ref 的使用和处理，大家可以留心观察一下。"]})]})}function $(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(b,{...t})}):b(t)}const F={"App.js":S,"context.jsx":E,"task.jsx":R,"editor.jsx":w};function U(){const t=u.c(1);let e;return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(_,{files:F,hidePreview:!0,renderArticle:s=>n.jsx($,{components:{code:s}})}),t[0]=e):e=t[0],e}export{U as default};
