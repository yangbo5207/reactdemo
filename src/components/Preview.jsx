export default function Preview(props) {
  return (
    <div className='flex flex-col bg-white flex-1'>
      <div className='flex border-b border-gray-100 bg-gray-100 items-center px-3 py-3 text-gray-500'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
        <div className='ml-2 text-sm'>预览</div>
      </div>
      <div className='flex-1 p-4'>
        {props.children}
      </div>

    </div>
  )
}
