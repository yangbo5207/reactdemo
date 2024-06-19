import React, { useEffect, useState, Suspense, use } from 'react';
import Button from './Button'
import Skeleton from './Skeleton'
import Message from './Message'
import {getMessage} from './api'

export default function Index() {
  const [show, updateShow] = useState(true)

  function __handler() {
    updateShow(false)
    setTimeout(() => {
      updateShow(show)
    }, 17)
  }

  return (
    <Suspense fallback={<div></div>}>
      <div>
        {show ? <Demo03 /> : <Skeleton />}
      </div>
    </Suspense>
  )
}

function Demo03() {
  let [loading, setLoading] = useState(true)

  const promise = getMessage().then(res => {
    setLoading(false)
    return res
  })

  let result = {value: '', icon_url: ''}
  if (!loading) {
    result = use(promise)
  }

  return loading ? <Skeleton /> : <Message message={result.value} />
}
