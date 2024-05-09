import {use, Suspense, useState} from 'react'
import './index.css'

const getApi = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}

export default function Index(props) {
  const api = getApi()

  return (
    <div>
      <div id='tips'>多个 Suspense 嵌套，子组件第一部分</div>
      <div className="content">
        <div className='_05_dou1_message'>父级消息: {props.value}</div>
        <Suspense fallback={<div>Loading...</div>}>
          <Item api={api} />
        </Suspense>
      </div>
    </div>
  )
}

const Item = ({api}) => {
  const joke = api ? use(api) : {value: 'nothing'}

  return (
    <div className='_03_a_value_update'>子级消息：{joke.value}</div>
  )
}