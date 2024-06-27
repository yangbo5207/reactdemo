import{c as d,r as u,j as e,M as p,D as h}from"./index-CChRFWmF.js";import{C as c}from"./Cardruntime-DUSy2C1S.js";import{A as x}from"./index-CJl_FuZi.js";import"./index-BgxcxkDL.js";import"./atom-one-light-CiE-g8ab.js";import"./Preview-DUFWuue_.js";const j=`import { useRef } from 'react'
import Dialog from 'components/Dialog'

export default function App() {
  const dialog = useRef(null)
  return (
    <div className='flex justify-between'>
      <button
        onClick={() => dialog.current.show()}
        className='ml-3'
      >点击我，显示对话框组件</button>
      <Dialog ref={dialog} title='Message For You' onSure={() => dialog.current.close()}>
        <strong className='text-red-500'>React 19</strong> 是全网学习体验最好的小册，没有之一。它能帮助你快速领悟到 React 的独特的开发魅力，你将会感受到更快的学习速度，更高效的开发速度，更专业的开发思维。
        <div className='mt-4'>
          <img src='https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </div>

      </Dialog>
    </div>
  )
}
`,w=`import { useEffect, useRef, useState, useImperativeHandle } from 'react';
import Modal from '../Modal'
import Button from "components/Button";
import clsx from 'clsx'
import './index.css'

let mousePosition

const getClickPosition = (e) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }
  setTimeout(() => {
    mousePosition = null
  }, 100)
}

document.documentElement.addEventListener('click', getClickPosition, true)

function setTransformOrigin(node, value) {
  var style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
    style[prefix + 'TransformOrigin'] = value;
  });
  style['transformOrigin'] = value;
}

function offset(el) {
  const rect = el.getBoundingClientRect()
  const pos = {
    left: rect.left,
    top: rect.top
  }
  const doc = el.ownerDocument
  const w = doc.defaultView
  pos.left += getScroll(w)
  pos.top += getScroll(w, 1)
  return pos
}

// 1st use window.pageXOffset and window.pageYOffset
// 2nd use window.document.documentElement.scrollLeft/scrollTop
// 3rd use window.document.body.scrollLeft/scrollTop
function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}

export default function Dialog(props) {
  const {title, onClose, children, onSure, onCancel, ref} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)
  const wrapperRef = useRef(null)
  const modal = useRef(null)

  useImperativeHandle(ref, () => ({
    show: () => {
      modal.current.show()
      document.body.style.overflow = 'hidden'
      setShow(true)
      setDisplay(true)
    },
    close
  }))

  function close() {
    setShow(false)
    modal.current.close()
    document.body.style.overflow = 'visible'
  }

  function closeHandler() {
    close()
    onClose && onClose()
  }

  function clickHander(e) {
    e.stopPropagation()
  }

  function sureClickHander(e) {
    e.stopPropagation()
    onSure && onSure()
  }

  function animationendHandler() {
    if (!show) {
      setDisplay(false)
    }
  }

  const cls = clsx('dialog-wrapper', {
    in: show,
    out: !show
  })

  useEffect(() => {
    const node = wrapperRef.current
    if (display && node) {
      const elOffset = offset(node)

      if (mousePosition)
        setTransformOrigin(node, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px')
    }
  }, [display])

  return (
    <Modal ref={modal} onClose={closeHandler}>
      {display ? (
        <div ref={wrapperRef} className={cls} onClick={clickHander} onAnimationEnd={animationendHandler}>
          <header className="flex justify-between items-center mb-2">
            <div className="font-bold text-lg leading-6">
              {title}
            </div>
            <div onClick={closeHandler} className='p-2 rounded-md cursor-pointer transition hover:bg-gray-200'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
              </svg>
            </div>
          </header>
          <section className="leading-6">
            {children}
          </section>
          <footer className="text-end mt-4">
            <Button primary onClick={sureClickHander}>确认</Button>
          </footer>
        </div>
      ) : null}
    </Modal>
  )
}
`,g=`import { useState, useImperativeHandle} from "react";
import s from './index.module.css'
import {createPortal} from 'react-dom'
import clsx from 'clsx'

export default function Modal(props) {
  const {onClose, children, ref} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  useImperativeHandle(ref, () => ({
    show: () => { setShow(true); setDisplay(true) },
    close: () => { setShow(false) }
  }))

  const cls = clsx(s.modal, {
    [s.in]: show,
    [s.out]: !show
  })

  function __animationendHandler() {
    if (!show) setDisplay(false)
  }

  function __closeHandler() {
    setShow(false)
    onClose && onClose()
  }

  if (!display) { return null }

  return (
    <>
      {
        createPortal(
          <div
            className={cls}
            onAnimationEnd={__animationendHandler}
            onClick={__closeHandler}
          >{children}</div>, document.body
        )
      }
    </>
  )
}
`;function y(){const s=d.c(7),n=u.useRef(null);let o;s[0]===Symbol.for("react.memo_cache_sentinel")?(o=e.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"点击弹窗显示"}),s[0]=o):o=s[0];let t;s[1]===Symbol.for("react.memo_cache_sentinel")?(t=e.jsx("div",{className:"bg-white p-4 max-w-xl mt-48 mx-auto rounded",children:"这是一个小弹窗"}),s[1]=t):t=s[1];let l;s[2]!==n?(l=e.jsx(p,{ref:n,children:t}),s[2]=n,s[3]=l):l=s[3];let r;return s[4]!==o||s[5]!==l?(r=e.jsxs("div",{className:"flex justify-between",children:[o,l]}),s[4]=o,s[5]=l,s[6]=r):r=s[6],r}function m(){const s=d.c(10),n=u.useRef(null);let o;s[0]===Symbol.for("react.memo_cache_sentinel")?(o=e.jsx("button",{onClick:()=>n.current.show(),className:"ml-3",children:"点击我，显示对话框组件"}),s[0]=o):o=s[0];let t,l;s[1]===Symbol.for("react.memo_cache_sentinel")?(t=()=>n.current.close(),l=e.jsx("strong",{className:"text-red-500",children:"React 19"}),s[1]=t,s[2]=l):(t=s[1],l=s[2]);let r;s[3]===Symbol.for("react.memo_cache_sentinel")?(r=e.jsx("div",{className:"mt-4",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""})}),s[3]=r):r=s[3];let a;s[4]!==n||s[5]!==t?(a=e.jsxs(h,{ref:n,title:"Message For You",onSure:t,children:[l," 是全网学习体验最好的小册，没有之一。它能帮助你快速领悟到 React 的独特的开发魅力，你将会感受到更快的学习速度，更高效的开发速度，更专业的开发思维。",r]}),s[4]=n,s[5]=t,s[6]=a):a=s[6];let i;return s[7]!==o||s[8]!==a?(i=e.jsxs("div",{className:"flex justify-between",children:[o,a]}),s[7]=o,s[8]=a,s[9]=i):i=s[9],i}function f(s){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(m,{})}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"1"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"基于 ref 封装一个 Madal 组件"})}),`
`,e.jsxs(n.p,{children:["我们的目标是封装一个 Modal 组件，但是我并不需要传入 ",e.jsx(n.code,{children:"show"})," 等状态来控制 Modal 的显示与隐藏。而是使用 ref 来控制。目标代码如下"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useRef } from 'react'
import Modal from 'components/Modal'

export default function Task() {
  const modal = useRef(null)
  return (
    <div className='flex justify-between'>
      <button
        onClick={() => modal.current.show()}
        className='ml-3'
      >点击弹窗显示</button>
      <Modal ref={modal}>
        <div className='bg-white p-4 max-w-xl mt-48 mx-auto rounded'>
          这是一个小弹窗
        </div>
      </Modal>
    </div>
  )
}
`})}),`
`,e.jsxs(n.p,{children:["这里的核心是，当我想要让弹窗显示时，只需要调用 ",e.jsx(n.code,{children:"modal.current.show()"})," 即可。这种方式可以有效避免在应用层组件中声明过多的状态来控制一切。"]}),`
`,e.jsx(n.p,{children:"演示案例如下："}),`
`,e.jsx(c,{children:e.jsx(y,{})}),`
`,e.jsx(n.p,{children:"对于刚接触 React 的新人来说，要实现这种带有动画的显示隐藏效果比较困难。我们这里就简单来拆解一下实现思路。"}),`
`,e.jsxs(n.p,{children:["首先，基于数据驱动 UI 的思路，那么在弹窗组件内部，我们肯定要首先定义一个状态 ",e.jsx(n.code,{children:"show"}),"， 用于控制弹窗的显示与隐藏。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function Modal() {
  const [show, setShow] = useState(false)
  ...
}
`})}),`
`,e.jsx(n.p,{children:"接下来估计部分道友就比较懵了，因为如果只是靠 show 的话，如何与动画结合起来考虑呢？很显然，隐藏的时候，我们最终要删除节点，但是节点删除之后，动画就直接消失了。因此在这个逻辑里，我们要分成两个步骤来处理动画的执行与节点的删除。"}),`
`,e.jsx(n.p,{children:"首先，在弹窗显示时，应该是先将 DOM 节点加入进来，然后再执行入场动画"}),`
`,e.jsx(n.p,{children:"在弹窗消失时，应该是先执行退场动画，然后再将 DOM 节点删除。"}),`
`,e.jsx(n.p,{children:"因此，这个时候，我们还需要引入另外一个状态用于分别控制动画的执行。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function Modal() {
  // 控制动画的执行
  const [show, setShow] = useState(false)
  // 控制节点的增删
  const [display, setDisplay] = useState(false)
  ...
}
`})}),`
`,e.jsxs(n.p,{children:["由于 show 我们约定是用来控制动画的执行，因此，在 css 上，我们根据 ",e.jsx(n.code,{children:"show"})," 的值来确定在 class 中加入入场动画还是退场动画"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const cls = clsx(s.modal, {
  [s.in]: show,
  [s.out]: !show
})
`})}),`
`,e.jsx(n.p,{children:"然后在入场时，首先要新增节点，并且立即执行动画"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`show: () => { setShow(true); setDisplay(true) }
`})}),`
`,e.jsx(n.p,{children:"在退场时，首先要执行动画，并在动画执行结束之后，再执行删除节点的操作"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`close: () => { setShow(false) }

...

function __animationendHandler() {
  if (!show) setDisplay(false)
}
`})}),`
`,e.jsx(n.p,{children:"这样，把逻辑稍微再整理一下，就能够实现动画效果了。"}),`
`,e.jsxs(n.p,{children:["当然，本次案例最核心的重点，还是使用 ",e.jsx(n.code,{children:"useImperativeHandle"})," 把内部的操作提供给外部的控制器 ref"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`useImperativeHandle(ref, () => ({
  show: () => { setShow(true); setDisplay(true) },
  close: () => { setShow(false) }
}))
`})}),`
`,e.jsxs(n.p,{children:["完整代码请看右侧案例中的 ",e.jsx(n.code,{children:"Modal.jsx"})]}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"1"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"基于 Modal 封装 Dialog 组件"})}),`
`,e.jsx(n.p,{children:"先来点击按钮感受一下演示效果。"}),`
`,e.jsx(c,{children:e.jsx(m,{})}),`
`,e.jsx(n.p,{children:"这个案例中，比较有难度的是我们记录了鼠标的点击位置，并基于该位置对内部元素进行放大显示。退场时，还要往这个位置进行缩小隐藏。原理并不复杂，只是如果自己实现的话，要稍微花点时间调一下位置的计算。大家在使用时可以直接 copy 这段代码就行，我在兼容性上也做了完整的处理。"}),`
`,e.jsx(n.p,{children:"动画是基于缩放 scale 来实现，这里我们只需要基于鼠标点击的位置和目标位置更改变换中心即可，具体的计算细节请看右侧代码。动画 css 代码如下所示。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.dialog.in {
  animation-name: dialog-show;
}
.dialog.out {
  animation-name: dialog-hide;
}

@keyframes dialog-show {
  0% {transform: scale(1); opacity: 0;}
  1% { transform: scale(0);}
  100% { transform: scale(1); opacity: 1; }
}
@keyframes dialog-hide {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
}
`})}),`
`,e.jsxs(n.p,{children:["这里我们需要观察的是，ref 的多层传递和使用。在我们使用 ",e.jsx(n.code,{children:"Modal"})," 时，并不需要特别关注 ref 在内部是如何处理的，只需要知道如何使用它即可。我们可以利用这种思维把类似的嵌套逻辑简化成单一逻辑。"]}),`
`,e.jsxs(n.p,{children:["最终的代码请看右侧案例中的 ",e.jsx(n.code,{children:"Dialog.jsx"})]})]})}function v(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(f,{...s})}):f(s)}const b={"App.js":j,"Dialog.jsx":w,"Modal.jsx":g};function _(){const s=d.c(1);let n;return s[0]===Symbol.for("react.memo_cache_sentinel")?(n=e.jsx(x,{files:b,hidePreview:!0,renderArticle:o=>e.jsx(v,{components:{code:o}})}),s[0]=n):n=s[0],n}export{_ as default};
