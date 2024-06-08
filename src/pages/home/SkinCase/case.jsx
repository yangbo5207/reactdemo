import Button from './Button.jsx'

export default function ButtonCase() {
  return (
    <>
      <div className='min-w-[400px] mx-auto mt-10 border border-gray-100 px-8'>
        <div className='my-2'>
          <div className='font-bold'>按钮类型</div>
        </div>
        <div className='flex items-center justify-between my-4'>
          <Button>Normal</Button>
          <Button danger>Danger</Button>
          <Button primary>Primary</Button>
          <Button success>Success</Button>
        </div>
        <div className='mt-6'>
          <div className='font-bold'>按钮大小</div>
        </div>
        <div className='flex items-center justify-between my-4'>
          <Button primary sm>Danger sm</Button>
          <Button success>Success MD</Button>
          <Button danger lg>Primary LG</Button>
        </div>
      </div>
    </>
  )
}
