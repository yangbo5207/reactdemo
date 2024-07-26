import Button from 'components/Button'

export default function ButtonCase() {
  return (
    <>
      <div className='min-w-[400px] mx-auto px-16 h-[300px] flex flex-col justify-center'>
        <div className='my-2'>
          <div className='font-bold'>按钮类型</div>
        </div>
        <div className='flex items-center justify-between my-4'>
          <Button>Normal</Button>
          <Button danger>Danger</Button>
          <Button primary>Primary</Button>
          <Button success>Success</Button>
        </div>
      </div>
    </>
  )
}