import React, { useState, Suspense, use, useRef } from 'react';
import Skeleton from './Skeleton'
import Message from './Message'
import {getMessage} from './api'

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
