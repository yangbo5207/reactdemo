import {use, Suspense, useState} from 'react'
import DouPlus1 from './Dou1'
import DouPlus2 from './Dou2'

const getMessage = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}


function Message() {
  const [messagePromise, setMessagePromise] = useState(getMessage)

  function __clickHandler() {
    setMessagePromise(getMessage())
  }
  
  return (
    <div>
      <div id='tips'>更新父级状态1</div>
      <button onClick={__clickHandler}>更新父级消息</button>
      <MessageContainer messagePromise={messagePromise} />
    </div>
  )
}

function MessageContainer({messagePromise}) {
  return (
    <Suspense fallback={<p>fetch message... ...</p>}>
      <MessageOutput messagePromise={messagePromise} />
    </Suspense>
  )
}

const MessageOutput = ({messagePromise}) => {
  const messageContent = use(messagePromise)
  return (
    <div>
      <p>{messageContent.value}</p>
      <DouPlus1 value={messageContent.value} />
      <DouPlus2 value={messageContent.value} />
    </div>
  )
}

export default Message


/**
 * 如果使用 use 直接调用，必须写成如下格式，表示直接传入一个 Proimse
 */
const _api2 = new Promise((resolve) => {
  resolve({ value: 29 })
})
// use(_api2)


/**
 * 如果将 Promise 放入 state 中存储，则可以写成如下格式，也可以写成上面的格式
 */
function fetchMessage() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000, '***')
  })
}
// const [messagePromise, setMessagePromise] = useState(fetchMessage)
// const messageContent = use(messagePromise)
