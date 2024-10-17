import React, { useState, Suspense, use, useRef } from 'react';
import Skeleton from './Skeleton.jsx'
import Message from './Message.jsx'
import {getMessage} from './api.js'

export default function Index() {
  return (
    <Suspense fallback={<div></div>}>
      <Demo03 />
    </Suspense>
  )
}

function Demo03() {
  let [loading, setLoading] = useState(true)

  const promise = useRef(getMessage().then(res => {
    setLoading(false)
    return res
  }))


  let result = {value: '', icon_url: ''}

  if (!loading) {
    result = use(promise.current)
    return <Message message={result.value} />
  }

  return <Skeleton />
}
