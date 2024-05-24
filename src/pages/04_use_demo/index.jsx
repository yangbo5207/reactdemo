import {use, Suspense, useState, useDeferredValue, useRef} from 'react'
import './index.css'

const postApi = () => {
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(async (resolve) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {signal})
    resolve(res.json())
  })
  promise.cancel = () => controller.abort()
  return promise
}

export default function Index() {
  const [api, setApi] = useState(postApi)
  const deferred = useDeferredValue(api)

  function __inputChange(e) {
    api.cancel()
    setApi(postApi())
  }

  return (
    <div className='_04_wrapper'>
      <div id='tips'>初始化时获取列表</div>
      <input 
        id='_04_input' 
        type="text"
        autoComplete='off'
        placeholder='input key word'
        onChange={__inputChange}
      />
      <Suspense fallback={<div>loading...</div>}>
        <List api={deferred} isPending={api !== deferred} />
      </Suspense>
    </div>
  )
}

const List = ({api, isPending}) => {
  const posts = use(api)
  
  return (
    <ul className='_04_list' style={{opacity: isPending ? 0.5 : 1}}>
      {posts.map((post) => (
        <div key={post.id} className='_04_item'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </ul>
  )
}
