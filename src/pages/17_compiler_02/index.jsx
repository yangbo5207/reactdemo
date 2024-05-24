import { useState, useEffect, useRef } from 'react'
import Panel1 from "./Panel1.jsx";
import Panel2 from "./Panel2.jsx";
import Panel3 from "./Panel3.jsx";
import Panel4 from "./Panel4.jsx";

const tabs = [{
  title: '1.x',
  component: Panel1,
  appeared: false
}, {
  title: '2.x',
  component: Panel2,
  appeared: false
}, {
  title: '3.x',
  component: Panel3,
  appeared: false
}, {
  title: '4.x',
  component: Panel4,
  appeared: false
}]

function Index() {
  const [current, setCurrent] = useState(0)
  const tabRef = useRef(tabs)

  function __clickHanler(index) {
    tabRef.current[index].appeared = true
    setCurrent(index)
  }

  let c1 = tabRef.current[0]
  let c2 = tabRef.current[1]
  let c3 = tabRef.current[2]
  let c4 = tabRef.current[3]

  return (
    <div>
      <div id='tips'>Tab 切换</div>
      <div id="tab_nav_017">
        {tabs.map((item, index) => (
          <button
            style={{
              background: current === index ? 'red' : '#ccc',
              color: '#FFF'
            }}
            key={item.title}
            onClick={() => __clickHanler(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <c1.component appearder={c1.appeared} selected={current === 0}/>
      <c2.component appearder={c2.appeared} selected={current === 1}/>
      <c3.component appearder={c3.appeared} selected={current === 2}/>
      <c4.component appearder={c4.appeared} selected={current === 3}/>
    </div>
  )
}

export default Index
