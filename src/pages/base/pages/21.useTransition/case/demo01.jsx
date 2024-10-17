import {use, useState, Suspense, useTransition} from 'react'
import Message from './Message.jsx'
import Skeleton from './Skeleton.jsx'
import Button from './Button.jsx'
import Spin from 'components/Spin/index.jsx'
import {getMessage} from './api.js'

export default function Demo01() {
  const [promise, update] = useState(getMessage())
  const [isPending, startTransition] = useTransition()

  function __handler() {
    console.log('click')
    startTransition(() => {
      console.log('transition')
      update(getMessage())
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>更新数据</Button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Spin loading={isPending}>
          <Content promise={promise} />
        </Spin>
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
