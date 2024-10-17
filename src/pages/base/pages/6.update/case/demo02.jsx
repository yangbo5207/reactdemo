import {use, useState, Suspense} from 'react'
import Message from './Message.jsx'
import Skeleton from './Skeleton.jsx'
import Button from './Button.jsx'
import {getMessage} from './api.js'

export default function Demo01() {
  const [promise, update] = useState(Promise.resolve({value: ''}))

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>更新数据</Button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Content promise={promise} />
      </Suspense>
    </>
  )
}

function Content(props) {
  const {value} = use(props.promise)
  return (
    <Message message={value} />
  )
}
