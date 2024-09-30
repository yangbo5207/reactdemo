import { use, Suspense, useState } from 'react';
import {fetchListWithCancel} from './service'
import Skeleton from 'components/Skeleton'
import Flex from 'components/Flex'
import Button from "components/Button";

export default function List() {
  const [promise, update] = useState(() => fetchListWithCancel(5))

  function clickhandler() {
    promise.cancel()
    update(fetchListWithCancel(5))
  }

  return (
    <>
      <Flex between justify className='mt-8'>
        <div className="text-gray-400 text-sm">Account users</div>
        <Button onClick={clickhandler}>update</Button>
      </Flex>

      <Suspense fallback={<Skeleton/>}>
        <UseList promise={promise}/>
      </Suspense>
    </>
  )
}

function UseList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={`h${i}`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>react 19 re, a design language for background applications</div>
          </div>
        </div>
      ))}
    </div>
  )
}
