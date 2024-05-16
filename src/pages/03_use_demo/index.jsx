import { useState } from 'react'
import {use, Suspense} from 'react'
import './index.css'
import { useEffect } from 'react'
import { useRef } from 'react'

const getApi = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}

export default function Index() {
  const [api, setApi] = useState(getApi)
  const [list, setList] = useState([])
  const [disabled, setDisabled] = useState(false)

  function __clickToGetMessage() {
    setDisabled(true);
    setApi(getApi())
  }

  return (
    <div>
      <div id='tips'>点击按钮新增一条数据，该数据从接口中获取</div>
      <button disabled={disabled} onClick={__clickToGetMessage}>新增数据</button>
      <div className="content">
        <div className="list">
          {list.map((item, index) => {
            return <div className='item' key={item}>{item}</div>
          })}
        </div>
        
        <Suspense fallback={<div>loading...</div>}>
          <Item api={api} setList={setList} setDisabled={setDisabled} />
        </Suspense>
      </div>
    </div>
  )
}

const Item = ({api, setList, setDisabled}) => {
  const [show, setShow] = useState(true)
  const joke = api ? use(api) : {value: 'nothing'}

  useEffect(() => {
    if (!api) return
    setList((list) => {
      if (!list.includes(joke.value)) {
        return list.concat(joke.value)
      }
      return list
    })
    setShow(false)
  }, [])

  const __cls = show ? '_03_a_value show' : '_03_a_value'

  return (
    <div className={__cls}>{joke.value}</div>
  )
}