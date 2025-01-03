import { use } from 'react'

const Message = (props) => {
  const {isPending, response} = props
  const content = use(response)
  return (
    <div className='leading-6 transition border border-blue-100 rounded p-4' style={{opacity: isPending ? 0.5 : 1}}>
      {content.value}
    </div>
  )
}
export default Message
