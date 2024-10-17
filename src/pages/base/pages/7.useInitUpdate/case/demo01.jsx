import {use, useState, Suspense, useEffect} from 'react'
import Message from './Message.jsx'
import Skeleton from './Skeleton.jsx'
import Button from './Button.jsx'
import {getMessage} from './api.js'

export default function Demo01() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }, []);

  function __handler() {
    setLoading(true)
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <Button onClick={__handler}>更新数据</Button>
      </div>
      {loading ? <Skeleton /> : <Message message={content.value} />}
    </>
  )
}
