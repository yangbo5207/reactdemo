import {useRef} from 'react'
import ActiveLink from 'components/ActiveLink'
import Dialog from 'components/Dialog';
import {UserRoundPlus} from 'lucide-react'

export default function ChatButton() {
  const dialog = useRef(null)

  function __clickhandler(e) {
    e.preventDefault();
    dialog.current.show();
  }

  return (
    <>
      <ActiveLink className='flex items-center' onClick={__clickhandler}>
        <UserRoundPlus size={18} />
        <div className='ml-2'>交流群</div>
      </ActiveLink>
      <Dialog ref={dialog} title='Message' onSure={() => dialog.current.close()}>
        添加我的微信：
        <span className='text-red-500 text-xl'>icanmeetu</span>，
        注明：添加 react19 付费交流群
      </Dialog>
    </>
  )
}
