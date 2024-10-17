import React, { Suspense } from 'react';
import Message from './Message.jsx'
import Skeleton from './Skeleton.jsx'

export default function Index() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Message
        message='这是一个普通的 UI 组件，Skeleton 组件不会有任何渲染机会，直接渲染 Message 组件'
        title='Primary'
      />
    </Suspense>
  )
}
