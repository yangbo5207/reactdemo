import {useState, Suspense} from 'react'
import Skeleton from './Skeleton.jsx'
import {fetchList} from './api.js'
import List from './List.jsx'
import Input from './Input.jsx'

export default function Demo01() {
  const [promise, update] = useState(() => fetchList(5))

  function __inputChange(e) {
    const len = e.target.value.length % 10
    update(fetchList(len))
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
