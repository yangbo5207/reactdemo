import {Suspense, useState, useTransition} from 'react'
import Message from './Message'
import Button from 'components/Button'
import Skeleton from 'components/Skeleton'
import {getApi} from '../api'

export default function App() {
  const [response, setApi] = useState(getApi)
  const [isPending, startTransition] = useTransition()

  function __click() {
    startTransition(() => {
      setApi(getApi())
    })
  }

  return (
    <div className='space-y-4'>
      <div className='flex justify-end'>
        <Button onClick={__click} disabled={isPending}>点击更新</Button>
      </div>
      
      <Suspense fallback={<Skeleton />}>
        <Message response={response} isPending={isPending} />
      </Suspense>
    </div>
  )
}
