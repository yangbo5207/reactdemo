import{r as u,c as p,j as n}from"./index-CChRFWmF.js";import{C as b}from"./Cardruntime-DUSy2C1S.js";import{A as y}from"./index-CJl_FuZi.js";import"./index-BgxcxkDL.js";import"./atom-one-light-CiE-g8ab.js";import"./Preview-DUFWuue_.js";const w=`import Provider from './context'
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
`,k=`import {createContext, useState} from 'react'

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
`,_=`import {use, useState} from 'react'
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
`,T=`import {use, useState} from 'react'
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
`,P=`@layer context_count {
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
`,v=u.createContext({});function A(t){const e=p.c(5),{children:r}=t,[o,d]=u.useState(0);let c;e[0]!==o?(c={count:o,incrementer:d},e[0]=o,e[1]=c):c=e[1];const x=c;let s;return e[2]!==x||e[3]!==r?(s=n.jsx(v,{value:x,children:r}),e[2]=x,e[3]=r,e[4]=s):s=e[4],s}function $(){const t=p.c(3),{count:e}=u.use(v);let r;t[0]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx("h3",{className:"font-bold",children:"Total Switch Count"}),t[0]=r):r=t[0];let o;return t[1]!==e?(o=n.jsxs("div",{children:[r,n.jsxs("p",{className:"!text-gray-400",children:["这里统计的是所有组件的切换次数: ",e]})]}),t[1]=e,t[2]=o):o=t[2],o}function E(t){const e=p.c(9),{value:r,onChange:o}=t,d=r===void 0?!1:r,[c,x]=u.useState(d),s=c?"switch right":"switch left";let h;e[0]!==o?(h=function(f){x(f),o&&o(f)},e[0]=o,e[1]=h):h=e[1];const m=h;let l;e[2]!==m||e[3]!==c?(l=()=>m(!c),e[2]=m,e[3]=c,e[4]=l):l=e[4];let a;e[5]===Symbol.for("react.memo_cache_sentinel")?(a=n.jsx("div",{className:"circle"}),e[5]=a):a=e[5];let i;return e[6]!==s||e[7]!==l?(i=n.jsx("div",{className:s,onClick:l,children:a}),e[6]=s,e[7]=l,e[8]=i):i=e[8],i}function g(){const t=p.c(15),{count:e,incrementer:r}=u.use(v),[o,d]=u.useState("theme-light"),[c,x]=u.useState(0);let s;t[0]!==c||t[1]!==r||t[2]!==e?(s=function(N){d(N?"theme-dark":"theme-light"),x(c+1),r(e+1)},t[0]=c,t[1]=r,t[2]=e,t[3]=s):s=t[3];const h=s;let m;t[4]===Symbol.for("react.memo_cache_sentinel")?(m=n.jsxs("div",{className:"context-card p-4 rounded transition",children:[n.jsx("div",{className:"title font-bold",children:"Canary"}),n.jsx("div",{className:"mt-4",children:"The useActionState Hook is currently only available in React’s Canary and experimental channels. Learn more about release channels here. "})]}),t[4]=m):m=t[4];let l;t[5]!==c?(l=n.jsxs("div",{className:"mr-4 text-green-500",children:["当前组件切换次数: ",c]}),t[5]=c,t[6]=l):l=t[6];let a;t[7]!==h?(a=n.jsx(E,{onChange:h}),t[7]=h,t[8]=a):a=t[8];let i;t[9]!==l||t[10]!==a?(i=n.jsxs("div",{className:"flex justify-between py-4 items-center",children:[l,a]}),t[9]=l,t[10]=a,t[11]=i):i=t[11];let j;return t[12]!==o||t[13]!==i?(j=n.jsxs("div",{className:o,children:[m,i]}),t[12]=o,t[13]=i,t[14]=j):j=t[14],j}function C(){const t=p.c(4);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx($,{}),t[0]=e):e=t[0];let r;t[1]===Symbol.for("react.memo_cache_sentinel")?(r=n.jsx(g,{}),t[1]=r):r=t[1];let o;t[2]===Symbol.for("react.memo_cache_sentinel")?(o=n.jsx(g,{}),t[2]=o):o=t[2];let d;return t[3]===Symbol.for("react.memo_cache_sentinel")?(d=n.jsxs(A,{children:[e,r,o,n.jsx(g,{})]}),t[3]=d):d=t[3],d}function S(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(b,{reload:!0,children:n.jsx(C,{})}),`
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
`,n.jsx(b,{reload:!0,children:n.jsx(C,{})}),`
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
`})})]})}function L(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(S,{...t})}):S(t)}const M={"App.js":w,"context.jsx":k,"Total.jsx":_,"Card.jsx":T,"skin.css":P};function z(){const t=p.c(1);let e;return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=n.jsx(y,{files:M,hidePreview:!0,renderArticle:r=>n.jsx(L,{components:{code:r}})}),t[0]=e):e=t[0],e}export{z as default};
