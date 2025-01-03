import {Suspense} from 'react'
import Message from './Message'
import Skeleton from 'components/Skeleton'
import {getApi} from '../api'

export default function App() {
  const promise = getApi()

  return (
    <Suspense fallback={<Skeleton />}>
      <Message response={promise} />
    </Suspense>
  )
}
