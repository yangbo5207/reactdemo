import {Suspense, useState, useTransition} from 'react'
import Message from './Message'
import Button from './Button'
import {getApi} from './api.js'

export default function App() {
  const [response, setApi] = useState(getApi)
  const [isPending, startTransition] = useTransition()

  function __clickToGetMessage() {
    startTransition(() => {
      setApi(getApi())
    })
  }

  return (
    <div>
      <div className='text-xs border-b border-gray-100 py-2 mb-4 text-gray-500'>
        案例演示：点击按钮更新数据
      </div>
      <Button onClick={__clickToGetMessage} disabled={isPending}>
        点击更新
      </Button>
      <div className='my-4 border p-4 rounded text-sm leading-6 border-gray-200'>
        <Suspense fallback={<div>loading...</div>}>
          <Message response={response} isPending={isPending} />
        </Suspense>
      </div>
    </div>
  )
}
