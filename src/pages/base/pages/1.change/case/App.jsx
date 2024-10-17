import {Suspense, useState, useTransition} from 'react'
import Message from './Message.jsx'
import Button from './Button.jsx'
import Skeleton from './Skeleton.jsx'
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
      <Button onClick={__clickToGetMessage} disabled={isPending}>
        点击更新
      </Button>

      <Suspense fallback={<Skeleton />}>
        <Message response={response} isPending={isPending} />
      </Suspense>
    </div>
  )
}
