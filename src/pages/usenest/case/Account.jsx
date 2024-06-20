import {use, useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchList} from './api'
import List from './List'

export default function Example() {
  const [promise, update] = useState(() => fetchList(3))
  return (
    <div>

      <Suspense fallback={<Skeleton type='card' />}>
        <AccountUse promise={promise} />
      </Suspense>
    </div>
  )
}

function AccountUse(props) {
  const {results} = use(props.promise)
  const [promise, update] = useState(() => fetchList(5))
  return (
    <div className='border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      <div className='flex space-x-4'>
        {results.map((item, index) => (
          <div className="flex-1 overflow-hidden" key={`z-${index}`}>
            <div className='rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${item.picture.large})`}}></div>
            <div className="mt-4 font-bold">{item.name.last}</div>
            <div className="mt-1 text-gray-400 text-sm">{item.email}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-gray-400 text-sm">Account users</div>
      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}
