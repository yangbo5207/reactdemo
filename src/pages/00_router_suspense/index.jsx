import {useTransition} from 'react'
import {useNavigate} from 'react-router-dom'

function Motion() {
  const [isPending, startTransition] = useTransition()
  const navigate = useNavigate()

  function __handler() {
    startTransition(() => {
      navigate('/tutorial/use/01')
    })
  }

  return (
    <div>
      <button
        onClick={__handler}
        disabled={isPending}
      >点击跳转</button>
    </div>
  )
}

export default Motion;

