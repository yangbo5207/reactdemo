import {useState, Suspense, useCallback} from 'react'
import Skeleton from './Skeleton.jsx'
import {fetchListWithCancel} from './api.js'
import Tabs from './Tabs.jsx'
import List from './List.jsx'

const config = [
  { name: 'Applied', href: '#', count: 0, current: true },
  { name: 'Phone Screening', href: '#', count: 0, current: false },
  { name: 'Interview', href: '#', count: 0, current: false },
  { name: 'Offer', href: '#', count: 0, current: false },
  { name: 'Disqualified', href: '#', count: 0, current: false },
]

export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const [tabs, changeTabs] = useState(config)

  function __handler(index) {
    tabs.forEach(item => {
      item.current = false
    })

    tabs[index].current = true
    switchToSelected(index)
    changeTabs([...tabs])

    promise.cancel()
    const len = Math.floor(Math.random() * 10)
    update(fetchListWithCancel(len))
  }

  function __complete(number) {
    tabs[current].count = number
    changeTabs([...tabs])
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <List promise={promise} onComplete={__complete} />
      </Suspense>
    </div>
  )
}
