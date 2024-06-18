import clsx from 'clsx'
import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'

export default function Account(props) {
  const [promise, update] = useState(() => fetchListWithCancel(5))

  const cls = clsx({
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
