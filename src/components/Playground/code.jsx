import Input from 'components/Input'
import {equalAdv, equalBase} from './activecode.js'

export default function EnterCode(props) {
  const {advance} = props
  const key = advance ? 'active_code_adv' : 'active_code'
  const equal = advance ? equalAdv : equalBase

  function __submit(e) {
    const code = e.get('code')

    if (!equal(code)) {
      return alert('请输入正确的激活码')
    }
    localStorage.setItem(key, e.get('code'))
    location.reload()
  }

  return (
    <div className='pt-4'>
      <div className="rounded-md bg-yellow-50 p-4 border border-yellow-400">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6 text-yellow-700">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                你还未输入激活码，或者激活码已过期，请重新输入即可访问
              </p>
            </div>
          </div>
        </div>
      </div>

      <form action={__submit} className='flex items-center justify-between'>
        <Input name='code' placeholder="Please input your active code" className="flex-1 mr-4" />
        <button type='submit'>确认</button>
      </form>
    </div>
  )
}
