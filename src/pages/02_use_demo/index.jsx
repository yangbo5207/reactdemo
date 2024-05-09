import { useRef, useState } from 'react'
import {use, Suspense} from 'react'
import './index.css'
import { useEffect } from 'react'

const getApi = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}


export default function Index() {
  const r = useRef(false)
  var __api = r ? null : getApi()
  const [api, setApi] = useState(__api)

  useEffect(() => {
    r.current = true
  }, [])

  function __clickToGetMessage() {
    setApi(getApi())
  }

  return (
    <div>
      <div id='tips'>点击按钮获取一条新的数据</div>
      <button onClick={__clickToGetMessage}>获取数据</button>

      <div className="content">
        <Suspense fallback={<div>loading...</div>}>
          <Item api={api} />
        </Suspense>
      </div>
    </div>
  )
}

const Item = (props) => {
  if (!props.api) {
    return <div>nothing</div>
  }

  const joke = use(props.api)
  return (
    <div className='a_value' onClick={() => setCounter(counter + 1)}>{joke.value}</div>
  )
}



function PreIndex() {
  const [data, setData] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api().then(res => {
      setData(res)
      setLoading(false)
    })
  }, [])

  function _clickHandler() {
    setLoading(true)
    api().then(res => {
      setData(res)
      setLoading(false)
    })
  }
}