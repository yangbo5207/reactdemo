import { use, useEffect } from 'react';

function CurrentList({promise, onComplete}) {
  const {results} = use(promise)

  useEffect(() => {
    onComplete && onComplete(results.length)
  }, [results.length]);

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

export default CurrentList
