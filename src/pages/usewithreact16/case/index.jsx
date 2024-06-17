import React, {useState, Suspense} from 'react'
import Userinfo from './Userinfo'
import Skeleton from './Skeleton'
import Button from './Button'
import {getMessage, getApi} from './api'
import use from './use'

export default function Demo01() {
  const [promise, updatePromise] = useState(() => [getMessage()])

  function __handler() {
    updatePromise([...promise, getMessage()])
  }

  return (
    <>
      {/*<TransitionDemo />*/}
      <div className='text-right mb-4'>
        <Button onClick={__handler}>新增数据</Button>
      </div>
      {promise.map((item, index) => (
        <Suspense fallback={<Skeleton />} key={`hello ${index}`}>
          <User promise={item} index={index} />
        </Suspense>
      ))}
    </>
  )
}

function User(props) {
  const result = use(props.promise)
  return (
    <Userinfo index={props.index} username={result.id} message={result.value} />
  )
}


// function TransitionDemo() {
//   const [response, setApi] = useState(getApi)
//   const [isPending, startTransition] = useTransition()
//
//   function __clickToGetMessage() {
//     startTransition(() => {
//       setApi(getApi())
//     })
//   }
//
//   return (
//     <div>
//       <div className='text-xs border-b border-gray-100 py-2 mb-4 text-gray-500'>
//         案例演示：点击按钮更新数据
//       </div>
//       <Button onClick={__clickToGetMessage} disabled={isPending}>
//         点击更新
//       </Button>
//       <div className='my-4 border p-4 rounded text-sm leading-6 border-gray-200'>
//         <Suspense fallback={<div>loading...</div>}>
//           <Message response={response} isPending={isPending} />
//         </Suspense>
//       </div>
//     </div>
//   )
// }
//
// const Message = (props) => {
//   const {isPending, response} = props
//   const content = use(response)
//   return (
//     <div style={{opacity: isPending ? 0.5 : 1}}>
//       {content.value}
//     </div>
//   )
// }
