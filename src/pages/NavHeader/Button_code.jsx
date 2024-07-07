import ActiveLink from "components/ActiveLink.jsx";
import Dialog from "components/Dialog/index.jsx";
import Input from 'components/Input'
import {useRef} from "react";

export default function ButtonCode() {
  const dialog = useRef(null)

  function __clickhandler(e) {
    e.preventDefault()
    dialog.current.show();
  }

  return (
    <>
      <ActiveLink className='flex items-center ml-4 bg-gray-900 px-4 py-2 rounded-full' to='/' onClick={__clickhandler}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-blue-50">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>

        <div className='ml-1 text-sm text-blue-50'>激活码</div>
      </ActiveLink>
      <Dialog ref={dialog} title='Message' onSure={() => dialog.current.close()}>
        请添加交流群获得激活码，或者联系网站开发者这波能反杀获得激活码，联系方式如下

        <div className='flex my-4'>
          <div className='w-8'>wx:</div>
          <div className='text-red-500'>icanmeetu</div>
        </div>

      </Dialog>
    </>
  )
}
