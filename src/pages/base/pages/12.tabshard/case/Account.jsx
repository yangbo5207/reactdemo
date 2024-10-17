import clsx from 'clsx'
import {useState, Suspense} from 'react'
import Skeleton from './Skeleton.jsx'
import {fetchListWithCancel} from './api.js'
import List from './List.jsx'

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
