import React, { useEffect, useState, Suspense, use } from 'react';
import Button from './Button'
import Skeleton from './Skeleton'
import {fetchList} from './api'

const Index = () => {
  const [promises, increasePromise] = useState(() => [fetchList()])

  const onLoadMore = () => {
    promises.push(fetchList())
    increasePromise([...promises])
  };

  return (
    <>
      {promises.map((promise, i) => (
        <Suspense fallback={<Skeleton />} key={`hello ${i}`}>
          <CurrentList promise={promise} />
        </Suspense>
      ))}
      <div className='text-center my-4'>
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    </>
  );
};
export default Index;

function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={item.name.last} className='border-b border-dashed py-4 mx-4 items-center flex'>
          <img className='w-14 h-14 rounded-full' src={item.picture.large} alt=''/>
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>
              a design language for background applications, is refined by Ant UED Team
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
