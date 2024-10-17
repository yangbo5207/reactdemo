import {useState, Suspense, useDeferredValue} from 'react'
import Spin from 'components/Spin/index.jsx'
import Skeleton from './Skeleton.jsx'
import {fetchListWithCancel} from './api.js'
import List from './List.jsx'
import Input from './Input.jsx'

export default function Demo01() {
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const deferred = useDeferredValue(promise)


  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 5
    update(fetchListWithCancel(len))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <Spin loading={deferred !== promise} type='mask'>
          <List promise={deferred} />
        </Spin>
      </Suspense>
    </div>
  )
}
