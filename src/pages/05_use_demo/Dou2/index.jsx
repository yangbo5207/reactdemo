import {use, Suspense, useState, useRef, useEffect} from 'react'
import './index.css'

const getApi = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}

var tabs = ['首页', '视频', '探索']

export default function Index() {
  var r = useRef(false)
  var api = r.current ? null : getApi()
  const [promise, setPromise] = useState(api)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    r.current = true
  }, [])

  return (
    <div>
      <div id='tips'>多个 Suspense 嵌套，子组件第二部分</div>
      <div className="content">
        {tabs.map((item, index) => (
          <button 
            id='btn_05_item' 
            className={current == index ? 'active' : ''}
            onClick={() => {
              setCurrent(index)
              setPromise(getApi())
            }}
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
  const joke = use(api)

  return (
    <div className='_05_a_value_item'>{joke.value}</div>
  )
}