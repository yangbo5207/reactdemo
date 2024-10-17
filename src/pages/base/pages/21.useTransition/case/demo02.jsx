import {useState, Suspense, useTransition} from 'react'
import Skeleton from './Skeleton.jsx'
import {fetchListWithCancel} from './api.js'
import Tabs from './Tabs.jsx'
import List from './List.jsx'
import Spin from 'components/Spin/index.jsx'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]


export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const [isPending, startTransition] = useTransition()

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    startTransition(() => {
      update(fetchListWithCancel(5))
    })
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <Spin loading={isPending} type='mask'>
          <List promise={promise} />
        </Spin>
      </Suspense>
    </div>
  )
}
