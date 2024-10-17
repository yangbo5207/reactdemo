import { use } from 'react';
import Flex from "components/Flex";
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <Flex between>
      {results.map((item, i) => (
        <div key={`h${i}`} className='w-[20%] rounded-2xl overflow-hidden my-4 relative'>
          <img className='w-full' src={item.large} alt='' />
          <div className='flex-1 absolute bottom-0 bg-black w-full left-0 opacity-60 text-center text-white'>
            {item.name}
          </div>
        </div>
      ))}
    </Flex>
  )
}
