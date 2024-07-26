import {useState, useRef} from 'react'
import clsx from 'clsx'
import Button from './Button'

export default function Cardruntime(props) {
  const {reload, className} = props
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
  const base = 'border rounded-md my-4'
  const cls = clsx(base, className)
  return (
    <div className={cls}>
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
          <Button signal onClick={__handler}>reload</Button>
        </div>
      ) : null}
    </div>
  )
}
