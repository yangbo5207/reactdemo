import { useRef, useState } from 'react'
import {use, Suspense} from 'react'
import './index.css'
import { useEffect } from 'react'
import { useTransition } from 'react'

const getApi = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}


export default function Index() {
  const [api, setApi] = useState(getApi)
  const [isPending, startTransition] = useTransition()

  function __clickToGetMessage() {
    startTransition(() => {
      setApi(getApi())
    })
  }

  return (
    <div>
      <div id='tips'>点击按钮获取一条新的数据</div>
      <button onClick={__clickToGetMessage} disabled={isPending}>获取数据</button>

      <div className="content">
        <Suspense fallback={<div>loading...</div>}>
          <Item api={api} isPending={isPending} />
        </Suspense>
      </div>
    </div>
  )
}

const Item = (props) => {
  const {isPending, api} = props
  const joke = use(api)
  return (
    <div 
      className='a_value' 
      style={{opacity: isPending ? 0.5 : 1}}
    >{joke.value}</div>
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