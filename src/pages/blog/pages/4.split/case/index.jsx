import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import List from './List'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise,] = useState(fetchListController)

  return (
    <Suspense fallback={<Skeleton />}>
      <List promise={promise} />
    </Suspense>
  )
}

