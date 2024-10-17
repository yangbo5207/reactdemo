import {Suspense, useState, useTransition} from 'react'
import Message from './Message.jsx'
import Skeleton from './Skeleton.jsx'
import {getApi} from './api.js'

export default function App() {
  const promise = getApi()

  return (
    <Suspense fallback={<Skeleton />}>
      <Message response={promise} />
    </Suspense>
  )
}
