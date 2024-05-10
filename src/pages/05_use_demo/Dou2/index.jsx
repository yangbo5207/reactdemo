import {use, Suspense, useState, useRef, useEffect} from 'react'
import './index.css'

const getApi = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}

var tabs = ['首页', '视频', '探索']

export default function Index() {
  const [promise, setPromise] = useState(getApi)
  const [current, setCurrent] = useState(0)

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
            className={current == index ? 'active' : ''}
            onClick={() => __switchHandler(index)}
            key={item}
          >{item}</button>
        ))}
        
        <Suspense fallback={<div className='_05_a_value_item'>Loading...</div>}>
          <Item api={promise} />
        </Suspense>
      </div>
    </div>
  )
}

const Item = ({api}) => {
  const joke = api ? use(api) : {value: 'nothing'}

  return (
    <div className='_05_a_value_item'>{joke.value}</div>
  )
}