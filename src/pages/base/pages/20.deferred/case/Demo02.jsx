import {useState, Suspense} from 'react'
import Skeleton from './Skeleton.jsx'
import {fetchListWithCancel} from './api.js'
import List from './List.jsx'
import Input from './Input.jsx'

export default function Demo01() {
  const [promise, update] = useState(() => fetchListWithCancel(5))

  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 5
    update(fetchListWithCancel(len))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
