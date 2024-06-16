import {useState, useRef} from 'react'
import Button from './Button'

export default function Cardruntime(props) {
  const {reload} = props
  const [show, update] = useState(true)
  const ref = useRef(null)
  function __handler() {
    const h = ref.current.getBoundingClientRect().height
    ref.current.style.minHeight = `${h}px`

    update(false)
    setTimeout(() => {
      update(true)
    }, 200)
  }
  return (
    <div className="border rounded-md my-4">
      <div className='flex border-b border-gray-200 bg-gray-100 items-center px-3 py-2 text-gray-500'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
        <div className='ml-2 text-sm'>预览</div>
      </div>
      <div className='p-4' ref={ref}>
        {show ? props.children : null}
      </div>
      {reload ? (
        <div className='mx-4 mb-4 text-right'>
          <Button signal onClick={__handler} className='px-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </Button>
        </div>
      ) : null}
    </div>
  )
}
