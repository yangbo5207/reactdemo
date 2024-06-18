import clsx from 'clsx'
import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function Search(props) {
  const [promise, update] = useState(() => fetchListWithCancel(10))

  function __inputChange(e) {
    promise.cancel()
    const len = e.target.value.length % 10
    update(fetchListWithCancel(len))
  }

  const cls = clsx('pt-4', {
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
