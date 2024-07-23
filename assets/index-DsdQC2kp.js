import{r,j as n}from"./index-BxXbnW9e.js";import{C as h}from"./Cardruntime-DF2YgfxL.js";import{A as p}from"./index-LK1iCBIb.js";import"./index-BEsnAH_r.js";import"./activecode-BfSkJlGQ.js";import"./index-DMQVh9lL.js";import"./Preview-Cfw1m546.js";const j=`import Provider from './context'
import Total from './Total'
import Card from './Card.jsx'
import './skin.css'

export default function App() {
  return (
    <Provider>
      <Total />
      <Card />
      <Card />
      <Card />
    </Provider>
  )
}
`,g=`import {createContext, useState} from 'react'

export const Context = createContext({})

export default function Provider({ children }) {
  const [count, incrementer] = useState(0)

  const value = {
    count,
    incrementer
  }

  return (
    <Context value={value}>{children}</Context>
  )
}
`,v=`import {use, useState} from 'react'
import {Context} from './context.jsx'

export default function Total() {
  const {count} = use(Context)
  return (
    <div>
      <h3 className='font-bold'>Total Switch Count</h3>
      <p className='!text-gray-400'>这里统计的是所有组件的切换次数: {count}</p>
    </div>
  )
}
`,f=`import {use, useState} from 'react'
import {Context} from './context.jsx'
import Switch from 'components/Switch'

export default function Card() {
  const {count, incrementer} = use(Context)
  const [theme, setTheme] = useState('theme-light')
  const [number, setNumber] = useState(0)

  function onSwitch(bool) {
    setTheme(bool ? 'theme-dark' : 'theme-light')
    setNumber(number + 1)
    incrementer(count + 1)
  }

  return (
    <div className={theme}>
      <div className='context-card p-4 rounded transition'>
        <div className="title font-bold">Canary</div>
        <div className='mt-4'>The useActionState Hook is currently only available in React’s Canary and experimental channels. Learn more about release channels here. </div>
      </div>

      <div className='flex justify-between py-4 items-center'>
        <div className='mr-4 text-green-500'>当前组件切换次数: {number}</div>
        <Switch onChange={onSwitch} />
      </div>
    </div>
  )
}
`,b=`@layer context_count {
  .theme-dark {
    --text-color: rgba(255, 255, 255, 0.8);
    --bg-color: rgba(0, 0, 0, 0.8);
    --border-color: rgba(0, 0, 0, 0.1);
  }
  .theme-light {
    --text-color: rgba(0, 0, 0, 0.88);
    --bg-color: rgba(0, 0, 0, 0.02);
    --border-color: rgba(0, 0, 0, 0.1);
  }
}
.context-card {
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
}
`,x=r.createContext({});function C({children:t}){const[e,o]=r.useState(0),c={count:e,incrementer:o};return n.jsx(x,{value:c,children:t})}function N(){const{count:t}=r.use(x);return n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold",children:"Total Switch Count"}),n.jsxs("p",{className:"!text-gray-400",children:["这里统计的是所有组件的切换次数: ",t]})]})}function S(t){const{value:e=!1,onChange:o}=t,[c,s]=r.useState(e),l=c?"switch right":"switch left";function i(a){s(a),o&&o(a)}return n.jsx("div",{className:l,onClick:()=>i(!c),children:n.jsx("div",{className:"circle"})})}function d(){const{count:t,incrementer:e}=r.use(x),[o,c]=r.useState("theme-light"),[s,l]=r.useState(0);function i(a){c(a?"theme-dark":"theme-light"),l(s+1),e(t+1)}return n.jsxs("div",{className:o,children:[n.jsxs("div",{className:"context-card p-4 rounded transition",children:[n.jsx("div",{className:"title font-bold",children:"Canary"}),n.jsx("div",{className:"mt-4",children:"The useActionState Hook is currently only available in React’s Canary and experimental channels. Learn more about release channels here. "})]}),n.jsxs("div",{className:"flex justify-between py-4 items-center",children:[n.jsxs("div",{className:"mr-4 text-green-500",children:["当前组件切换次数: ",s]}),n.jsx(S,{onChange:i})]})]})}function u(){return n.jsxs(C,{children:[n.jsx(N,{}),n.jsx(d,{}),n.jsx(d,{}),n.jsx(d,{})]})}function m(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{reload:!0,children:n.jsx(u,{})}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"皮肤切换方案"})}),`
`,n.jsx(e.p,{children:"利用 CSS 变量来实现皮肤切换，是目前最简单优雅的方案，也是最流行的方案。"}),`
`,n.jsxs(e.p,{children:["CSS 变量又称之为",n.jsx(e.strong,{children:"自定义属性"}),"。他已经在主流浏览器中被普遍支持，我们可以在许多项目中使用该特性。我们熟知的 antd 中就大量运用了自定义属性。"]}),`
`,n.jsxs(e.p,{children:["声明一个自定义属性，需要以 ",n.jsx(e.code,{children:"--"})," 开头，属性值可以是任何有效的 CSS 值。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`element {
  --main-bg-color: brown;
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["注意理解这句话：",n.jsx(e.strong,{children:"自定义属性和其他属性一样，是写在规则集之内的。"})," 因此，它的改变，也能触发 transition 动画的执行"]}),`
`]}),`
`,n.jsx(e.p,{children:"并且要注意的是，规则集所指定的选择器定义了自定义属性的可见作用域。通常的最佳实践是定义在根伪类 :root 下，这样就可以在 HTML 文档的任何地方访问到它了"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`:root {
  --main-bg-color: brown;
}
`})}),`
`,n.jsx(e.p,{children:"当然，我也应该根据实践运用灵活选择作用域。"}),`
`,n.jsx(e.p,{children:"在本案例中，我们仅定义一个对当前代码生效的自定义属性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@layer context_count {
  .theme-dark {
    --text-color: rgba(255, 255, 255, 0.8);
    --bg-color: rgba(0, 0, 0, 0.8);
    --border-color: rgba(0, 0, 0, 0.1);
  }
  .theme-light {
    --text-color: rgba(0, 0, 0, 0.88);
    --bg-color: rgba(0, 0, 0, 0.02);
    --border-color: rgba(0, 0, 0, 0.1);
  }
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"@layer"})," 表示降低当前属性的优先级，从而不影响其他任何元素的样式。哪怕是同名的也不会受到影响，此时我们将与皮肤属性相关的都自定义在主题中，不同的主题对应不同的属性。"]}),`
`,n.jsx(e.p,{children:"然后运用到具体的元素上"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.context-card {
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
}
`})}),`
`,n.jsx(e.p,{children:"此时，我们只需要构建如下所示的父子关系，然后更改父元素的 className，就可以轻松做到主题切换"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- 所有使用了主题自定义变量的元素，是 \`.theme-light\` 的子元素 -->
<div class='theme-light'>
  <div class='context-card'></div>
</div>
`})}),`
`,n.jsx(e.p,{children:"切换主题时，只需要更改父元素的 class 即可。将其修改成另外一个配置好的主题。"}),`
`,n.jsx(e.p,{children:"有了这些皮肤切换的基础知识之后，我们来结合 context 实现一个皮肤切换并统计切换总次数的案例。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"多个模块皮肤切换总次数统计"})}),`
`,n.jsx(e.p,{children:"首先，我们要创建一个 context，并在 context 中准备好可能会用到的全局数据。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import {createContext, useState} from 'react'

export const Context = createContext({})

export default function Provider({ children }) {
  const [count, incrementer] = useState(0)

  const value = {
    count,
    incrementer
  }

  return (
    <Context value={value}>{children}</Context>
  )
}
`})}),`
`,n.jsx(e.p,{children:"然后，我们要在顶层父组件中，使用 Provider 将所有的子组件包裹起来，这里也顺带引入皮肤切换相关的 css 文件"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import Provider from './context'
import Total from './Total'
import Card from './Card.jsx'
import './skin.css'

export default function App() {
  return (
    <Provider>
      <Total />
      <Card />
      <Card />
      <Card />
    </Provider>
  )
}
`})}),`
`,n.jsx(e.p,{children:"最后，我们只需要在子组件中，使用 use 读取对应的数据和方法"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import {use, useState} from 'react'
import {Context} from './context.jsx'

export default function Total() {
  const {count} = use(Context)
  return (
    <div>
      <h3 className='font-bold'>Total Switch Count</h3>
      <p className='!text-gray-400'>这里统计的是所有组件的切换次数: {count}</p>
    </div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"演示效果如下，完整代码，请看右侧代码区域。"}),`
`,n.jsx(h,{reload:!0,children:n.jsx(u,{})}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"皮肤切换思路的扩展"})}),`
`,n.jsx(e.p,{children:"我们可以把皮肤切换的方案，扩展到类似于 Switch 组件的实现上。在 Switch 组件中，当我们点击时，除了有颜色相关的样式切换之外，还有元素的位置要发生变化，因此，我们只需要额外多设计一个自定义属性就可以用完全一样的思路来实现这个组件了。"}),`
`,n.jsx(e.p,{children:"代码如下，非常的简洁。演示效果请看上面的皮肤切换案例。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@layer switch {
  .left {
    --bg-color: rgba(0, 0, 0, 0.1);
    --x: 0;
  }

  .right {
    --bg-color: rgba(0, 0, 0, 0.9);
    --x: 24px;
  }
}

.switch {
  @apply p-[1px] border w-14 rounded-full cursor-pointer transition;
  background-color: var(--bg-color);
}

.switch .circle {
  @apply rounded-full w-6 h-6 transition;
  background-color: white;
  transform: translateX(var(--x));
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import {useState} from 'react'
import './index.css'

export default function Switch(props) {
  const {value = false, onChange} = props
  const [checked, toggle] = useState(value)

  const cls = checked ? 'switch right' : 'switch left'

  function __click(value) {
    toggle(value)
    onChange && onChange(value)
  }

  return (
    <div className={cls} onClick={() => __click(!checked)}>
      <div className='circle'></div>
    </div>
  )
}
`})})]})}function w(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(m,{...t})}):m(t)}const k={"App.js":j,"context.jsx":g,"Total.jsx":v,"Card.jsx":f,"skin.css":b};function $(){return n.jsx(p,{files:k,hidePreview:!0,renderArticle:t=>n.jsx(w,{components:{code:t}})})}export{$ as default};
