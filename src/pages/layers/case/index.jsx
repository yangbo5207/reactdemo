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
      <div className='text-xs border-b border-gray-100 py-2 mb-4 text-gray-500 sticky top-0 bg-white'>
        案例演示：点击按钮加载更多
      </div>
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
        <div key={item.name.last} className='flex border-b py-4 mx-4 items-center'>
          <div className='flex-1'>
            <div className='flex'>
              <img className='w-14 h-14 rounded-full' src={item.picture.large} alt='' />
              <div className='flex-1 ml-4'>
                <div className='font-bold'>{item.name.last}</div>
                <div className='text-gray-400 mt-3 text-sm line-clamp-1'>Ant Design, a design language for background applications, is refined by Ant UED Team</div>
              </div>
            </div>

            <div className='mt-4 line-clamp-2 text-sm'>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</div>
          </div>

          <img
            className='w-60 ml-2'
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        </div>
      ))}
    </div>
  )
}
