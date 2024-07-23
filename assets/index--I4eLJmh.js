import{r,j as e,D as h}from"./index-BxXbnW9e.js";import{C as i}from"./Cardruntime-DF2YgfxL.js";import{A as m}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const u=`import Provider from './context'
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
`,j=`import {createContext, useState} from 'react'

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
`,f=`import { useRef, use } from 'react'
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
`,v=`import { use } from 'react'
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
`,g={task:"TASK-8878",content:"Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",status:"Progress",priority:"Medium"},c=r.createContext({});function C({children:t}){const[n,o]=r.useState(g);return e.jsx(c,{value:{task:n,updateTask:o},children:t})}function k(t){const{ref:n,...o}=t,{task:s,updateTask:d}=r.use(c);function x(p){d({...s,content:p.target.value})}return e.jsxs(h,{ref:n,...o,onSure:()=>n.current.close(),children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-20",children:"name"}),e.jsx("div",{className:"flex-1 p-2 text-sm font-bold",children:s.task})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("div",{className:"w-20",children:"content"}),e.jsx("input",{value:s.content,className:"flex-1 border rounded-md p-2 text-sm",onChange:x})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("div",{className:"w-20",children:"status"}),e.jsx("div",{className:"flex-1 p-2 text-sm text-green-500",children:s.status})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("div",{className:"w-20",children:"Priority"}),e.jsx("div",{className:"flex-1 p-2 text-sm text-red-500",children:s.priority})]})]})}function N(){const t=r.useRef(null),{task:n}=r.use(c);return e.jsxs("div",{className:"flex items-center border-t pt-4",children:[e.jsx("div",{className:"font-bold",children:n.task}),e.jsx("div",{className:"flex-1 mx-3 line-clamp-1",children:n.content}),e.jsx("div",{className:"text-green-500",children:n.status}),e.jsx("button",{onClick:()=>t.current.show(),className:"ml-3",children:"edit"}),e.jsx(k,{ref:t,title:"Editor"})]})}function a(){return e.jsxs(C,{children:[e.jsx("h3",{className:"font-bold",children:"Your Task"}),e.jsx("p",{className:"!text-gray-400",children:"Here's a task for you!"}),e.jsx(N,{})]})}function l(t){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsx(a,{})}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"0"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"改动"})}),`
`,e.jsx(n.p,{children:"与之前的版本相比，在 React19 中，context 有一些细微的变化。主要体现在如下三个方面。"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"1、删除旧版 Context"})}),`
`,e.jsx(n.p,{children:"旧版本的 Context 在 2018 年 10 月（v16.6.0）被废弃。但是为了保证平滑的升级，旧版代码一直沿用到了现在。在 React 19 中，这些代码会正式被删除。旧版本的 Context 仅在使用 contextTypes 和 getChildContext API 的类组件中可用。因此它的删除对现在的项目应该只会造成很小的影响。"}),`
`,e.jsx(n.p,{children:"如果你在项目中仍然使用了旧版 Context，你可以参考下面新旧版本的对比写法进行调整升级。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// 之前
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// 之后
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
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"2、简化 Provider 的使用"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const Context = createContext({})
`})}),`
`,e.jsx(n.p,{children:"在以前的使用中，我们需要使用 Context.Provider 来包裹子组件。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`<Context.Provider value={value}>
  {props.children}
</Context.Provider>
`})}),`
`,e.jsx(n.p,{children:"在 React19 中，我们可以直接使用 Context 来代替 Provider，从而让代表变得更加简洁。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`<Context value={value}>
  {props.children}
</Context>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"3、可以使用 use 获取 context"})}),`
`,e.jsx(n.p,{children:"以前的版本中，在组件内部我们使用 useContext 来获取 context 中的状态。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// after
import { use } from 'react';

function MyComponent() {
  const theme = use(ThemeContext);
  // ...
`})}),`
`,e.jsx(n.h2,{children:"2"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"重学一次 context"})}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://files.mdnice.com/user/3925/9cb65ddb-71ee-42c2-8062-347ca8312b92.png",alt:""})}),`
`,e.jsxs(n.p,{children:["在 React 中，props 能够帮助我们将数据层层往下传递。但是，当数据传递太多层之后，不仅代码上比较繁琐，理解上也容易混乱不清。因此，我们需要一种能够",e.jsx(n.strong,{children:"跨越组件层级"}),"让直达子组件的数据传递方式，这就是 context."]}),`
`,e.jsxs(n.p,{children:["context 表示组件实例在运行期间能够",e.jsx(n.strong,{children:"直接读取"}),"的状态和内容。他记录了内存中的活跃数据。我们可以将这些数据使用 ",e.jsx(n.code,{children:"useState"})," 来定义。那么，context 中的数据更改，就会驱动所有使用到该数据的 UI 发生变化。"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"context 的学习主要分为如下三个部分"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"一、"})," 如何创建 context"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"二、"})," 顶层组件中如何传递数据"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"三、"})," 子组件中如何获取数据"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"一、如何创建 context"})}),`
`,e.jsxs(n.p,{children:["我们可以使用 ",e.jsx(n.code,{children:"createContext"})," 来创建 context."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const SomeContext = createContext(defaultValue)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"defaultValue"})," 表示默认值。他可以作为数据的兜底结果。当你无法从 ",e.jsx(n.code,{children:"value"})," 中读取具体的值时，则会使用 ",e.jsx(n.code,{children:"defaultValue"})," 中的值。在代码运行过程中，默认值始终保持不变。如果没有默认值，我们至少需要传入一个 ",e.jsx(n.code,{children:"null"}),"。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createContext"})," 执行之后的返回值，就是我们需要的 ",e.jsx(n.code,{children:"context"}),"。"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"二、如何传递 context"})}),`
`,e.jsx(n.p,{children:"返回的 context 通常是一系列组件的顶层父组件。因此，在使用时，我们通常会首先定义该顶层父组件。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`function Provider(props) {
  const value = {...}
  return (
    <SomeContext value={value}>
      {props.children}
    </SomeContext>
  )
}
export default Provider
`})}),`
`,e.jsxs(n.p,{children:["在该顶层父组件中，我们使用刚才创建的 ",e.jsx(n.code,{children:"context"})," 作为父级标签，把子组件包起来。并作为渲染内容返回。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<SomeContext value={value}>
  {props.children}
</SomeContext>
`})}),`
`,e.jsxs(n.p,{children:["此处的 ",e.jsx(n.code,{children:"value"})," 表示我们在上下文中定义好的值。我们可以自己随意定义你想要传递给子组件的所有数据/方法。"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"这些数据/方法通常被多个不同的子组件共同使用。否则我们没必要将数据/方法存储在 context 中。"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { createContext } from 'react';

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
`,e.jsxs(n.p,{children:["此时，案例中 ",e.jsx(n.code,{children:"Page"})," 组件的所有后代子组件，都可以直接获取 context 中的值，不管层级有多深。"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"value 可以是任何类型，你可以根据自己的项目需要设计合适的数据类型。"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"三、如何获取 context 中的值"})}),`
`,e.jsxs(n.p,{children:["在任意被包裹的子组件中，我们可以使用 ",e.jsx(n.code,{children:"use"})," 来获取 context 中的值。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`function Button() {
  // ✅ Recommended way
  const theme = use(ThemeContext);
  return <button className={theme} />;
}
`})}),`
`,e.jsx(n.p,{children:"获取方法非常简单，接下来，我们使用具体的实践案例来分享 context 的使用。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["需要注意，多个 Context ",e.jsx(n.strong,{children:"可以嵌套使用"}),"，只是在实践中，这种场景不算多见。"]}),`
`]}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"3"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"案例：在弹窗中更改页面的值"})}),`
`,e.jsx(n.p,{children:"学习了 context 的知识之后，我们来结合之前自定义的弹窗组件，一起来实现一下页面最开始的那个案例。"}),`
`,e.jsx(i,{children:e.jsx(a,{})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"由于是演示案例，所以数据比较简单，组件层级也不够深，所以大家把重点关注在 context 的技术学习上即可。并非代表真实实践中需要这样使用。"}),`
`]}),`
`,e.jsx(n.p,{children:"首先，我们创建一个 context 文件，该文件中，我们会创建 Context，并在其中定义好需要传递到各子组件中的去的数据和方法"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const def = {
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
`,e.jsx(n.p,{children:"然后在父组件中，使用 Provider 包裹需要用到的子组件。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import Provider from './context'
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
`,e.jsxs(n.p,{children:["然后在各子组件中，使用 ",e.jsx(n.code,{children:"use(Context)"})," 获取当前组件需要的数据和方法即可"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { use } from 'react'
import {Context} from './context.jsx'

export default function Editor(props) {
  const {ref, ...other} = props
  const {task, updateTask} = use(Context)
  ...
`})}),`
`,e.jsx(n.p,{children:"完整的代码请查看右侧代码。"}),`
`,e.jsxs(n.p,{children:["这里比较有意思的一个地方是在 ",e.jsx(n.code,{children:"editor.jsx"})," 文件中，对于 ref 的使用和处理，大家可以留心观察一下。"]})]})}function T(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}const y={"App.js":u,"context.jsx":j,"task.jsx":f,"editor.jsx":v};function D(){return e.jsx(m,{files:y,hidePreview:!0,renderArticle:t=>e.jsx(T,{components:{code:t}})})}export{D as default};
