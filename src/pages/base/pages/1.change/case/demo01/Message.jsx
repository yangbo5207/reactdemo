import { use } from 'react'

const Message = (props) => {
  const content = use(props.response)
  return (
    <div className='leading-6 transition border rounded-md p-4'>
      {content.value}
    </div>
  )
}
export default Message
