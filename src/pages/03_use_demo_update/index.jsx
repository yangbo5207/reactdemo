import {use, Suspense, useState} from 'react'
import './index.css'

const getApi = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}

export default function Index() {
  const [list, setList] = useState([])

  function __clickToGetMessage() {
    list.push(getApi())
    setList([...list])
  }

  return (
    <div>
      <div id='tips'>点击按钮新增一条数据，该数据从接口中获取</div>
      <button onClick={__clickToGetMessage}>新增数据</button>
      <div className="content">
        <div className="list">
          {list.map((item, index) => (
            <div className='item' key={`hello${index}`}>
              <Suspense fallback={<div>loading...</div>}>
                <Item api={item} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Item = ({api}) => {
  const joke = api ? use(api) : {value: 'nothing'}

  return (
    <div className='_03_a_value_update'>{joke.value}</div>
  )
}