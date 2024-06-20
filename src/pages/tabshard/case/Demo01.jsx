import {useState, Suspense, useRef} from 'react'
import Tabs from './Tabs'

import Account from './Account'
import Search from './Search'

const tabs = [
  { name: 'My Account', href: '#', current: true, element: Account },
  { name: 'Company', href: '#', current: false, element: Account },
  { name: 'Team Members', href: '#', current: false, element: Account },
  { name: 'Billing', href: '#', current: false, element: Search },
]

export default function Example() {
  const [current, switchToSelected] = useState(0)
  const map = useRef(new Set([tabs[current]]))

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true

    const item = tabs[index]
    if (!map.current.has(item)) {
      map.current.add(item)
    }

    switchToSelected(index)
  }

  let arr = Array.from(map.current)

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      {arr.map((item, index) => (
        <item.element selected={item.current} key={`z-${index}`}/>
      ))}
    </div>
  )
}
