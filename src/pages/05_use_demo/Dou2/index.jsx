import {use, Suspense, useState, useRef, useTransition} from 'react'
import './index.css'

const getApi = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}

var tabs = ['首页', '视频', '探索']

export default function Index() {
  const [promise, setPromise] = useState(getApi)
  const [current, setCurrent] = useState(0)
  const [isPending, startTransition] = useTransition()

  var __switchHandler = (index) => {
    setCurrent(index)
    setPromise(getApi())
  }

  return (
    <div>
      <div id='tips'>多个 Suspense 嵌套，子组件第二部分</div>
      <div className="content">
        {tabs.map((item, index) => (
          <button 
            id='btn_05_item' 
            className={current === index ? 'active' : ''}
            onClick={() => __switchHandler(index)}
            key={item}
            disabled={isPending}
          >{item}</button>
        ))}
        
        <Suspense fallback={<div className='_05_a_value_item'>Loading...</div>}>
          <Item api={promise} pending={isPending} />
        </Suspense>
      </div>
    </div>
  )
}

const Item = ({api, pending}) => {
  const joke = api ? use(api) : {value: 'nothing'}

  return (
    <div
      className='_05_a_value_item'
      style={{opacity: pending ? 0.6 : 1}}
    >
      {joke.value}
    </div>
  )
}
